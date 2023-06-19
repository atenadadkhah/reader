import Link from "next/link";
import Button from "@/app/components/button/button.component";
import PostInfo from "@/app/components/post-info/post-info.component";

const PostCard = ({post}) => {
    return (
        <article className="card">
            <div className="post-slider slider-sm">
                <img src={post.image} className="card-img-top" alt="post-thumb" />
            </div>

            <div className="card-body">
                <h3 className="h5 mb-3">
                    <Link className="post-title" href={`/blog/${post.slug}`}>{post.title}</Link>
                </h3>

                <PostInfo post={post}/>

                <p style={{fontSize: '.8rem'}}>{post.content.slice(0, 150)}...</p>

                <Link href={`/blog/${post.slug}`}>
                    <Button btnType='outlinePrimary'>بیشتر</Button>
                </Link>
            </div>
        </article>
    )
}

export default PostCard;