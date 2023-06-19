'use client';

import styles from './button.module.scss';


const BUTTON_TYPES = {
    primary: `${styles.btn} ${styles.btnPrimary}`,
    block: `${styles.btn} ${styles.btnBlock}`,
    outlinePrimary: `${styles.btn} ${styles.btnOutlinePrimary}`,
    blockPrimary: `${styles.btn} ${styles.btnPrimary} ${styles.btnBlock}`,
}

const Button = ({children, btnType, ...otherProps}) => {
    return (
        <button className={BUTTON_TYPES[btnType]} {...otherProps}>
            {children}
        </button>
    )
}

export default Button;