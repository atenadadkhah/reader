import Button from "@/app/components/button/button.component";
import Link from "next/link";
import moment from "jalali-moment";
import PostInfo from "@/app/components/post-info/post-info.component";

moment.locale('fa', {useGregorianParser: true})

const PostCardLg = ({post}) => {
    return (
        <article className="card mb-5 has-text-right" dir='rtl'>
            <div className="columns is-desktop card-body">
                <div className="column is-4-desktop">
                    <div className="post-slider slider-sm">
                        <img src={post.image} className="card-img" alt="post-thumb"
                             style={{
                                 width: '100%',
                                 height: 200,
                                 objectFit: 'cover'
                             }}/>
                    </div>
                </div>
                <div className="column is-8-desktop">
                    <h3 className="h4 mb-3">
                        <Link className="post-title" href={`/blog/${post.slug}`}>{post.title}</Link>
                    </h3>
                    <PostInfo post={post}/>
                    <p>{post.content.slice(0, 150)}...</p>
                    <Link href={`/blog/${post.slug}`}>
                        <Button btnType='outlinePrimary'>بیشتر</Button>
                    </Link>
                </div>
            </div>
        </article>
    )
}

export default PostCardLg;