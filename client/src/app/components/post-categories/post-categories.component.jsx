import Link from "next/link";

const PostCategories = ({ categories }) => {
    return (
        <li className="list-inline-item">
            <ul className="card-meta-tag list-inline">
                {
                    categories.map(({ category }) => (
                        <li key={category.name} className="list-inline-item">
                            <Link href={`/blog/category/${category.slug}`}>{category.name}</Link>
                        </li>
                    ))
                }
            </ul>
        </li>
    )
}

export default PostCategories;