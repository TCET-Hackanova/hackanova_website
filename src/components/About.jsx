import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import { motion } from "framer-motion";
import AnimatedTitle, { SAnimatedTitle } from "./AnimatedTitle";
import React, { useEffect } from 'react';

// import CardGallery from "./Bento";
import { BentoGridThirdDemo } from "./Facts";
import Button from "./Button";
import { TiLocationArrow } from "react-icons/ti";
gsap.registerPlugin(ScrollTrigger);

const About = () => {

    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            },
        });

        clipAnimation.to(".mask-clip-path", {
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
        });

        // Rotate the rings
        gsap.to(".planet-rings", {
            rotation: 360,
            duration: 20,
            repeat: -1,
            ease: "linear",
        });
    });

    return (
        <div id='about' className=' w-screen'>
            <div className='z- mb-24 mt-52 flex flex-col items-center gap-2 px-2'>
                {/* <div className="z-10 before:bg-[radial-gradient(50%_100%,#8E24AA,transparent)] relative before:absolute before:inset-[-10%_-2%] before:-z-10 before:blur-3xl before:rounded-t-full"> */}

                <SAnimatedTitle
                    title='TSDW Presents'
                    containerClass='mt-5 !text-white  text-center'
                />
                <a target='_blank' href='https://linktr.ee/hackanova4.0'>
                    <AnimatedTitle
                        title='Hack<b>a</b>Nova 4.0'
                        containerClass=' bg-gradient-to-bl from-blue-500 to-blue-800 bg-clip-text text-transparent leading-normal   text-center'
                    />
                </a>

                <p className='text-center text-xl font-circular-web text-white '> <b>Register of Free now</b></p>
                <br></br>
                {/* </div> */}

                <a target='_blank' href='https://hackanova-5.devfolio.co'>
                    <img
                        src='./img/_Dark.png'
                        className='h-12 mb-2'
                        alt='DEVFOLIO LOGO'
                    />
                </a>

                <BentoGridThirdDemo />
            </div>
        </div>
    );
};

export default About;
