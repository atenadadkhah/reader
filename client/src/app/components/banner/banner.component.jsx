'use client';


import styles from './banner.module.scss'

const Banner = ({children}) => {
    return (
        <div className={`${styles.banner} has-text-centered`}>
            <div className={styles.container}>
                <div className="columns is-centered">
                    <div className="column is-9-widescreen">
                        {children}
                    </div>
                </div>
            </div>

            <svg className={styles.bannerShape1} width="39" height="40" viewBox="0 0 39 40" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M0.965848 20.6397L0.943848 38.3906L18.6947 38.4126L18.7167 20.6617L0.965848 20.6397Z"
                      stroke="#040306"
                      strokeMiterlimit="10"/>
                <path className={styles.path}
                      d="M10.4966 11.1283L10.4746 28.8792L28.2255 28.9012L28.2475 11.1503L10.4966 11.1283Z"/>
                <path d="M20.0078 1.62949L19.9858 19.3804L37.7367 19.4024L37.7587 1.65149L20.0078 1.62949Z"
                      stroke="#040306"
                      strokeMiterlimit="10"/>
            </svg>

            <svg className={styles.bannerShape2} width="39" height="39" viewBox="0 0 39 39" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_d)">
                    <path className={styles.path}
                          d="M24.1587 21.5623C30.02 21.3764 34.6209 16.4742 34.435 10.6128C34.2491 4.75147 29.3468 0.1506 23.4855 0.336498C17.6241 0.522396 13.0233 5.42466 13.2092 11.286C13.3951 17.1474 18.2973 21.7482 24.1587 21.5623Z"/>
                    <path
                        d="M5.64626 20.0297C11.1568 19.9267 15.7407 24.2062 16.0362 29.6855L24.631 29.4616L24.1476 10.8081L5.41797 11.296L5.64626 20.0297Z"
                        stroke="#040306" strokeMiterlimit="10"/>
                </g>
                <defs>
                    <filter id="filter0_d" x="0.905273" y="0" width="37.8663" height="38.1979"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB">
                        <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                        <feColorMatrix in="SourceAlpha" type="matrix"
                                       values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"/>
                        <feOffset dy="4"/>
                        <feGaussianBlur stdDeviation="2"/>
                        <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                        <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow"/>
                        <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow" result="shape"/>
                    </filter>
                </defs>
            </svg>


            <svg className={styles.bannerShape3} width="39" height="40" viewBox="0 0 39 40" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M0.965848 20.6397L0.943848 38.3906L18.6947 38.4126L18.7167 20.6617L0.965848 20.6397Z"
                      stroke="#040306"
                      strokeMiterlimit="10"/>
                <path className={styles.path}
                      d="M10.4966 11.1283L10.4746 28.8792L28.2255 28.9012L28.2475 11.1503L10.4966 11.1283Z"/>
                <path d="M20.0078 1.62949L19.9858 19.3804L37.7367 19.4024L37.7587 1.65149L20.0078 1.62949Z"
                      stroke="#040306"
                      strokeMiterlimit="10"/>
            </svg>


            <svg className={styles.bannerBorder} height="240" viewBox="0 0 2202 240" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M1 123.043C67.2858 167.865 259.022 257.325 549.762 188.784C764.181 125.427 967.75 112.601 1200.42 169.707C1347.76 205.869 1901.91 374.562 2201 1"
                    strokeWidth="2"/>
            </svg>
        </div>
    )
}

export default Banner;