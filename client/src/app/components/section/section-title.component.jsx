import styles from './section.module.scss'

const SectionTitle = ({children}) => {
    return (
        <h2 className={`h5 ${styles.sectionTitle}`}>{children}</h2>
    )
}

export default SectionTitle;