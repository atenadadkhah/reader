'use client';

import moment from "jalali-moment";
import Button from "@/app/components/button/button.component";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {useState} from "react";
import Input from "@/app/components/input/input.component";
import {toast, ToastContainer, Zoom} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {useMutation, useQuery} from "@tanstack/react-query";

moment.locale('fa', {useGregorianParser: true});

const createComment = async (postId, parentId, name, email, content) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}comments`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({postId, parentId, name, email, content})
        }
    )
    return res.json()
}

const fetchComments = async (postId) =>
    fetch(`${process.env.NEXT_PUBLIC_API_URL}comments/post/${postId}`)
        .then((res) => res.json())

const defaultFormFields = {
    name: '',
    email: '',
    content: '',
}

const Comments = ({postId}) => {

    const [parentComment, setParentComment] = useState(null)
    const [formFields, setFormFields] = useState(defaultFormFields)
    const {name, email, content} = formFields

    const {status, data, refetch} = useQuery({
        queryKey: ['comments', {postId}],
        queryFn: () => fetchComments(postId),
    })

    const mutation = useMutation({
        mutationFn: () => createComment(postId, parentComment?.id, name, email, content),
        onSuccess: data => {
            setFormFields(defaultFormFields)
            toast.success("باتشکر دیدگاه شما ثبت شد.", {
                position: "top-left",
                autoClose: 4000,
                progress: undefined,
                theme: "dark",
                transition: Zoom,
                icon: false,
                rtl: true,
            });
            refetch()
        }
    })

    const handleChange = (event) => {
        const {name, value} = event.target
        setFormFields({...formFields, [name]: value.trim()})
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try {
            mutation.mutate()
        } catch (e) {
            console.error('Error commenting:', e.message)
        }
    }

    const cancelReply = event => {
        setParentComment(null)
    }

    const parentIdHandler = (parentComment) => setParentComment(parentComment)

    const RecurtionComments = ({comments, parentComment}) => {
        return (
            <>
                {
                    comments?.map(comment => (
                        <div key={comment.id} className={`block my-3 ${comment.parentId && 'mr-4'}`}>
                            <div className='border p-3' style={{
                                maxWidth: '20rem'
                            }}>
                                    <span className="h4 d-inline-block mb-3">
                                    {comment.name}
                                </span>
                                {
                                    comment.parentId
                                        ? <strong>{` در پاسخ به ${parentComment.name}`}</strong>
                                        : ''
                                }
                                <p>{comment.content}</p>
                                <span className="ml-3" style={{fontSize: 12}}>
                                    {moment(comment.createdAt).format('D MMM، YYYY در HH:mm')}
                                </span>
                                <a
                                    className="text-primary font-weight-600"
                                    href="#your-comment"
                                    onClick={() => parentIdHandler(comment)}
                                >
                                    پاسخ
                                </a>
                            </div>
                            {
                                comment.children.length
                                    ? <RecurtionComments comments={comment.children} parentComment={comment}/> : ''
                            }
                        </div>
                    ))
                }
            </>
        )
    }

    return (
        <div className="column is-9-desktop mt-4">
            <ToastContainer/>

            <div className="mb-5 border-top mt-4 pt-5">
                <h3 className="mb-5">دیدگاه ها</h3>

                {
                    data?.length
                        ? <RecurtionComments comments={data}/>
                        : <span className='has-text-warning-dark'>درحال حاضر دیدگاهی وجود ندارد.</span>
                }
            </div>

            <div className="pt-5" id='your-comment'>
                <h3 className="mb-5">
                    دیدگاه شما
                    {
                        parentComment ? ` در پاسخ به ${parentComment.name}` : ''
                    }
                    {
                        parentComment &&
                        <span
                            onClick={cancelReply}
                            className='text-primary'
                            style={{cursor: 'pointer'}}
                        >
                            &nbsp; &times;
                        </span>
                    }
                </h3>
                <form onSubmit={handleSubmit}>
                    <div className="columns is-multiline">
                        <div className="input-group py-0 column is-12">
                            <textarea
                                value={content}
                                onChange={handleChange}
                                className="input"
                                name="content"
                                required>
                            </textarea>
                        </div>
                        <div className="input-group py-0 column is-6-desktop">
                            <Input
                                value={name}
                                name='name'
                                onChange={handleChange}
                                className="input"
                                type="text"
                                placeholder="نام کامل"
                                required
                            />
                        </div>
                        <div className="input-group py-0 column is-6-desktop">
                            <Input
                                value={email}
                                name='email'
                                onChange={handleChange}
                                type="email"
                                placeholder="ایمیل"
                                required
                            />
                        </div>
                    </div>
                    <Button btnType='primary'>ثبت</Button>
                </form>
            </div>
        </div>
    )
}

export default Comments;