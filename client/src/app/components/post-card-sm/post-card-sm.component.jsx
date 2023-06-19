import Link from "next/link";
import {minuteRead} from "@/utils/minute-read";
import moment from "jalali-moment";

const PostCardSm = ({post}) => {
    return (
        <article className="card mb-5">
            <div className="card-body is-flex">
                <img className="card-img-sm" src={post.image} alt={post.slug}/>
                    <div className="mr-3">
                        <h5>
                            <Link className="post-title" href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h5>
                        <ul className="card-meta mt-2">
                            <li className="list-inline-item mb-0">
                                <i className="ti-calendar"></i>
                                {moment(post.createdAt).format('D MMM، YYYY')}
                            </li>
                            <li className="list-inline-item mb-0">
                                <i className="ti-timer"></i>
                                { minuteRead(post.content) } دقیقه
                            </li>
                        </ul>
                    </div>
            </div>
        </article>
    )
}

export default PostCardSm;