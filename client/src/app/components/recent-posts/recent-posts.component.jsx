import PostCardLg from "@/app/components/post-card-lg/post-card-lg.component";
import Pagination from "@/app/components/pagination/pagination.component";
import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Loader from "@/app/components/loader/loader.component";

const fetchPosts = (page = 1) =>
    fetch(
        `${process.env.NEXT_PUBLIC_API_URL}posts/?page=${page}`,
        {cache: 'no-store'}
    )
        .then((res) => res.json())

const RecentPosts = () => {
    const [page, setPage] = useState(1)
    const postsPageHandler = (page) => setPage(page)

    const {status, data} = useQuery({
        queryKey: ['posts', page],
        queryFn: () => fetchPosts(page),
        keepPreviousData: true
    })

    if (status !== 'success') return <Loader />

    return (
        <>
            {
                data.result.map(post => (
                    <PostCardLg post={post} key={post.slug}/>
                ))
            }


            <Pagination
                elemId='recent-posts'
                data={data.result}
                count={data.count}
                page={page}
                pageHandler={postsPageHandler}
            />
        </>
    )
}

export default RecentPosts;