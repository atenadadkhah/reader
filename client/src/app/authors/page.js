'use client';

import Banner from "@/app/components/banner/banner.component";
import Direction from "@/app/components/direction/direction.component";
import Section from "@/app/components/section/section.component";
import Container from "@/app/components/container/container.component";
import AuthorCard from "@/app/components/author-card/author-card.component";
import Pagination from "@/app/components/pagination/pagination.component";
import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Loader from "@/app/components/loader/loader.component";

const fetchUsers = (page = 1) =>
    fetch(`${process.env.NEXT_PUBLIC_API_URL}users/?page=${page}`)
        .then((res) => res.json())

const Authors = () => {
    const [page, setPage] = useState(1)
    const postsPageHandler = (page) => setPage(page)

    const {status, data} = useQuery({
        queryKey: ['users', page],
        queryFn: () => fetchUsers(page),
        keepPreviousData: true
    })

    if (status !== 'success') return <Loader />

    return (
        <>
            <Banner>
                <h1 className="mb-4">نویسندگان</h1>
                <Direction current='نویسندگان'/>
            </Banner>

            <Section sectionType='sm' id='users'>
                <Container>
                    <div className="columns is-multiline is-gapless">
                        {
                            data.result.map(user => (
                                <AuthorCard user={user} key={user.slug}/>
                            ))
                        }


                        <Pagination
                            elemId='users'
                            data={data.result}
                            count={data.count}
                            page={page}
                            perPage={24}
                            pageHandler={postsPageHandler}
                        />
                    </div>
                </Container>
            </Section>
        </>
    )
}

export default Authors;