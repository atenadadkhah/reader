import styles from './loader.module.scss'

const Loader = () => {
    return (
        <div className={styles.loaderBox}>
            <div className={styles.dotWave}>
                <div className={styles.dotWave__dot}></div>
                <div className={styles.dotWave__dot}></div>
                <div className={styles.dotWave__dot}></div>
                <div className={styles.dotWave__dot}></div>
            </div>
        </div>
    )
}

export default Loader;