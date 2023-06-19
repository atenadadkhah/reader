'use client';


import Image from "next/image";

const Logo = ({width, height}) => {
    return (
        <Image className="img-fluid" width={width} height={height} src="/images/logo.png"
               alt="Reader | Personal Bulma Blog Template"/>
    )
}

export default Logo;