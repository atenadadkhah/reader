'use client';

import PostCardXl from "@/app/components/post-card-xl/post-card-xl.component";
import WidgetsBar from "@/app/components/widgets-bar/widgets-bar.component";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import Pagination from "@/app/components/pagination/pagination.component";
import Section from "@/app/components/section/section.component";
import Container from "@/app/components/container/container.component";
import Loader from "@/app/components/loader/loader.component";

const fetchPosts = (category, page = 1) =>
    fetch(
        `${process.env.NEXT_PUBLIC_API_URL}posts/category/${category}?page=${page}`,
        {cache: 'no-store'}
    )
        .then((res) => res.json())

const Blog = ({params}) => {
    const [page, setPage] = useState(1)
    const postsPageHandler = (page) => setPage(page)

    const category = decodeURIComponent(params.category).trim()

    const {status, data} = useQuery({
        queryKey: ['posts', {category}, page],
        queryFn: () => fetchPosts(category, page),
        keepPreviousData: true
    })

    if (status !== 'success') return <Loader />

    return (
        <Section id='posts'>
            <div className="py-4"></div>
            <Container>
                <div className="columns is-multiline is-desktop">
                    <div className="column is-8-desktop" dir='rtl'>
                        <h1 className="h2 mb-5">
                            نمایش پست ها با دسته بندی <mark>{decodeURIComponent(params.category)}</mark>
                        </h1>

                        {
                            data.result.map(post => (
                                <PostCardXl key={post.slug} post={post}/>
                            ))
                        }

                        <Pagination
                            elemId='posts'
                            count={data.count}
                            page={page}
                            pageHandler={postsPageHandler}
                        />
                    </div>

                    <WidgetsBar />

                </div>
            </Container>
        </Section>
    )
}


export default Blog;