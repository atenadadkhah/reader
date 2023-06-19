import Link from "next/link";
import styles from './author-card.module.scss'

const AuthorCard = ({user}) => {
    return (
        <div dir='rtl' className={`column is-4-desktop is-6-tablet ${styles.authorBlock}`}>
            <div className={`${styles.authorCard} has-text-centered`}>

                <img className={styles.authorImage} src={user.profile.image} alt={user.name}/>

                <h3 className="mb-2">
                    <Link href={`/authors/${user.id}`} className="post-title">{user.name}</Link>
                </h3>
                <p className="mb-3">{user.profile.definition}</p>

                <Link className="post-count" href={`/authors/${user.id}`}>
                    <span className="text-primary">{user.posts.length}</span> پست توسط این کاربر
                </Link>
            </div>
        </div>
    )
}

export default AuthorCard;