'use client'

import styles from './badge.module.scss'

const Badge = ({children}) => {
    return (
        <span className={`${styles.badge} ${styles.badgePrimary}`}>{children}</span>
    )
}

export default Badge;