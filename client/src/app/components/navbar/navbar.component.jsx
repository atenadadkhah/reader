"use client";

import SearchBar from "@/app/components/search-bar/search-bar.component";
import './navbar.scss'
import Logo from "@/app/components/logo/logo.component";
import Link from "next/link";
import {useEffect, useRef} from "react";
import Container from "@/app/components/container/container.component";


const Navbar = () => {
    const navbarRef = useRef(null);
    const navbarMenuRef = useRef(null);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 20)
                navbarRef.current.classList.add('nav-bg')
            else
                navbarRef.current.classList.remove('nav-bg')
        }
        window.removeEventListener('scroll', onScroll);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const navbarBurgerClickHandler = event => {
        event.target.classList.toggle('is-active')
        navbarMenuRef.current.classList.toggle('is-active')
    }

    return (
        <nav ref={navbarRef} className="navigation navbar is-fixed-top is-align-items-center is-transparent" role="navigation" aria-label="main navigation">
            <Container>
                <div className="navbar-brand">
                    <Link className="navbar-item" href="/">
                        <Logo width={100} height={100}/>
                    </Link>

                    <a onClick={navbarBurgerClickHandler} role="button" className="navbar-burger burger mt-2" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div ref={navbarMenuRef} id="navbarBasicExample" className="navbar-menu">
                    <div dir='rtl' className="navbar-start mx-auto">
                        <li className="navbar-item">
                            <Link className="navbar-link is-arrowless" href='/'>
                                خانه
                            </Link>
                        </li>

                        <li className="navbar-item">
                            <Link className="navbar-link is-arrowless" href='/shop'>
                                فروشگاه
                            </Link>
                        </li>

                        <li className="navbar-item">
                            <Link className="navbar-link is-arrowless" href='/authors'>
                                نویسندگان
                            </Link>
                        </li>

                        <li className="navbar-item">
                            <Link className="navbar-link is-arrowless" href='/about'>
                                درباره ما
                            </Link>
                        </li>
                    </div>

                    <div className="navbar-end is-align-items-center ml-0">
                        <SearchBar />
                    </div>
                </div>
            </Container>
        </nav>
    )
}

export default Navbar;