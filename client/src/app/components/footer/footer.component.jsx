'use client';


import styles from './footer.module.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import Link from "next/link";
import Logo from "@/app/components/logo/logo.component";

const slickSettings = {
    dots: false,
    speed: 300,
    autoplay: true,
    arrows: false,
    slidesToShow: 8,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 6,
            },
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 4,
            },
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 2,
            },
        },
    ],
}


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <svg className={styles.footerBorder} height="214" viewBox="0 0 2204 214" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M2203 213C2136.58 157.994 1942.77 -33.1996 1633.1 53.0486C1414.13 114.038 1200.92 188.208 967.765 118.127C820.12 73.7483 263.977 -143.754 0.999958 158.899"
                    strokeWidth="2"/>
            </svg>

            <div className="instafeed has-text-centered mb-5">
                <h2 className="h3 mb-4">پست های اینستاگرام</h2>

                <Slider {...slickSettings} className="instagram-slider">
                    <div className="instagram-post"><img src="/images/instagram/1.jpg"/></div>
                    <div className="instagram-post"><img src="/images/instagram/2.jpg"/></div>
                    <div className="instagram-post"><img src="/images/instagram/4.jpg"/></div>
                    <div className="instagram-post"><img src="/images/instagram/3.jpg"/></div>
                    <div className="instagram-post"><img src="/images/instagram/2.jpg"/></div>
                    <div className="instagram-post"><img src="/images/instagram/1.jpg"/></div>
                    <div className="instagram-post"><img src="/images/instagram/3.jpg"/></div>
                    <div className="instagram-post"><img src="/images/instagram/4.jpg"/></div>
                    <div className="instagram-post"><img src="/images/instagram/2.jpg"/></div>
                    <div className="instagram-post"><img src="/images/instagram/4.jpg"/></div>
                </Slider>
            </div>

            <div className="container">
                <div className="columns is-multiline is-align-items-center">
                    <div className="column mx-auto is-2-desktop has-text-centered mb-4">
                        <Link href="/">
                            <Logo width={100} height={100}/>
                        </Link>
                    </div>
                    <div className="column is-12">
                        <div className="border-bottom border-default"></div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;