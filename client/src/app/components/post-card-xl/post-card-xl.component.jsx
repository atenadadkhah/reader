import PostInfo from "@/app/components/post-info/post-info.component";
import Link from "next/link";
import Button from "@/app/components/button/button.component";

const PostCardXl = ({post, user}) => {
    return (
        <article className="card mb-4">
            <div className="post-slider">
                <img src={post.image} className="card-img-top" alt="post-thumb"/>
            </div>
            <div className="card-body">
                <h3 className="mb-3">
                    <Link className="post-title" href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>
                <PostInfo post={post} user={user}/>
                <p>{post.content.slice(0, 200)}...</p>
                <Link href={`/blog/${post.slug}`}>
                    <Button btnType='outlinePrimary'>بیشتر</Button>
                </Link>
            </div>
        </article>
    )
}

export default PostCardXl;