import styles from './pagination.module.scss'

const DATA_PER_PAGE = 10;

const Pagination = ({count, page, pageHandler, elemId, perPage}) => {
    perPage = perPage ?? DATA_PER_PAGE
    const pageNumbers = Math.ceil(count / perPage)

    if (pageNumbers <= 1) return null

    return (
        <ul className={`${styles.pagination} justify-content-center`}>
            {
                [...Array(pageNumbers)].map((_, index) => (
                    <li
                        key={index}
                        onClick={() => pageHandler(index + 1)}
                        className={`${styles.pageItem} ${page === index + 1 ? styles.active : ''}`}
                    >
                        <a href={`#${elemId}`} className={styles.pageLink}>{index + 1}</a>
                    </li>
                ))
            }
        </ul>
    )
}

export default Pagination;