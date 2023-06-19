import Link from "next/link";
import Image from "next/image";
import {minuteRead} from "@/utils/minute-read";
import moment from "jalali-moment";
import PostCategories from "@/app/components/post-categories/post-categories.component";

moment.locale('fa', { useGregorianParser: true});

const PostInfo = ({post, user}) => {
    return (
        <ul className="card-meta my-3 list-inline">
            {
                user === false
                    ? ''
                    : <li className="list-inline-item">
                        <Link href={`/authors/${post.author.id}`} className="card-meta-author">
                            <Image width={50} height={50} src={post.author.profile.image} alt={post.author.name}/>
                            <span>{post.author.name}</span>
                        </Link>
                    </li>
            }

            <li className="list-inline-item">
                <i className="ti-timer"></i>
                {minuteRead(post.content)} دقیقه
            </li>
            <li className="list-inline-item">
                <i className="ti-calendar"></i>
                {moment(post.createdAt).format('D MMM، YYYY')}
            </li>
            <PostCategories categories={post.categories}/>
        </ul>
    )
}

export default PostInfo;