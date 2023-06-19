import styles from './section.module.scss'

const SECTION_TYPES = {
    primary: `${styles.section}`,
    sm: `${styles.sectionSm}`
}

const Section = ({sectionType, children, ...otherProps}) => {
    return (
        <section className={SECTION_TYPES[sectionType ?? 'primary']} {...otherProps} dir='rtl'>
            {children}
        </section>
    )
}

export default Section;