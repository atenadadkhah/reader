'use client';

import Banner from "@/app/components/banner/banner.component";
import Direction from "@/app/components/direction/direction.component";
import ProductCard from "@/app/components/product-card/product-card.component";
import Container from "@/app/components/container/container.component";
import Section from "@/app/components/section/section.component";
import {useState} from "react";
import {useQuery} from "@tanstack/react-query";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import Pagination from "@/app/components/pagination/pagination.component";
import Loader from "@/app/components/loader/loader.component";

const fetchProducts = (page = 1) =>
    fetch(
        `${process.env.NEXT_PUBLIC_API_URL}products/?page=${page}`,
        {cache: 'no-store'}
    )
        .then((res) => res.json())

const Shop = () => {
    const [page, setPage] = useState(1)
    const productsPageHandler = (page) => setPage(page)

    const {status, data} = useQuery({
        queryKey: ['products', page],
        queryFn: () => fetchProducts(page),
        keepPreviousData: true
    })

    if (status !== 'success') return <Loader />

    return (
        <>
            <Banner>
                <h1 className="mb-4">فروشگاه</h1>
                <Direction current='فروشگاه'/>
            </Banner>

            <Section sectionType='sm' id='products'>
                <Container>
                    <div className="columns is-multiline is-tablet">
                        {
                            data.result.map(product => (
                                <ProductCard product={product} key={product.slug}/>
                            ))
                        }


                        <Pagination
                            elemId='products'
                            data={data.result}
                            count={data.count}
                            page={page}
                            perPage={20}
                            pageHandler={productsPageHandler}
                        />
                    </div>
                </Container>
            </Section>
        </>
    )
}

export default Shop;