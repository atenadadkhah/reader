'use client';

import PostInfo from "@/app/components/post-info/post-info.component";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {useQuery} from "@tanstack/react-query";
import ReactMarkdown from "react-markdown";
import Comments from "@/app/blog/[slug]/comments";
import Section from "@/app/components/section/section.component";
import Container from "@/app/components/container/container.component";
import Loader from "@/app/components/loader/loader.component";


const fetchPost = (slug) =>
    fetch(`${process.env.NEXT_PUBLIC_API_URL}posts/${slug}`)
        .then((res) => res.json())

const SingleBlog = ({ params }) => {
    const {status, data} = useQuery({
        queryKey: ['post'],
        queryFn: () => fetchPost(params.slug),
    })

    if (status !== 'success') return <Loader />

    return (
        <Section>
            <Container>
                <div className="columns is-multiline is-desktop is-justify-content-center">
                    <div className="column is-9-desktop mb-5">
                        <article>
                            <div className="post-slider mb-4">
                                <img src={data.image} className="card-img" alt="post-thumb" />
                            </div>

                            <h1 className="h2">{data.title}</h1>
                            <PostInfo post={data}/>
                            <div className="content">
                                <ReactMarkdown>
                                    {data.content}

                                </ReactMarkdown>
                            </div>
                        </article>
                    </div>

                    <Comments postId={data.id}/>

                </div>
            </Container>
        </Section>
    )
}

export default SingleBlog;