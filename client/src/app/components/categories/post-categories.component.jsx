import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {useQuery} from "@tanstack/react-query";
import Link from "next/link";

const fetchCategories = () =>
    fetch(
        `${process.env.NEXT_PUBLIC_API_URL}categories`,
        {cache: 'no-store'}
    )
        .then((res) => res.json())

const Categories = () => {
    const {status, data} = useQuery({
        queryKey: ['categories'],
        queryFn: () => fetchCategories(),
    })

    return (
        <>
            {
                data &&
                data.map(category => (
                    <li key={category.slug} className="list-inline-item">
                        <Link href={`/blog/category/${category.slug}`}>{category.name}</Link>
                    </li>
                ))
            }
        </>
    )
}

export default Categories;