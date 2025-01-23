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
  useEffect(() => {
    // Check if the script already exists
    const existingScript = document.querySelector("script[src='https://apply.devfolio.co/v2/sdk.js']");
    if (!existingScript) {
      // Create and append the script
      const script = document.createElement("script");
      script.src = "https://apply.devfolio.co/v2/sdk.js";
      script.async = false; // Load instantly
      script.defer = false; // Execute immediately

      // Event listeners to confirm loading
      script.onload = () => {
        console.log("Devfolio SDK loaded successfully");
        alert("Devfolio SDK loaded successfully");
      };
      script.onerror = () => {
        console.error("Failed to load Devfolio SDK");
        alert("Failed to load Devfolio SDK");
      };

      document.head.appendChild(script);
    } else {
      console.log("Devfolio SDK already loaded");
      alert("Devfolio SDK already loaded");
    }
  }, []); 

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
            <div className='z- mb-24 mt-52 flex flex-col items-center gap-2 '>
                {/* <div className="z-10 before:bg-[radial-gradient(50%_100%,#8E24AA,transparent)] relative before:absolute before:inset-[-10%_-2%] before:-z-10 before:blur-3xl before:rounded-t-full"> */}

                <SAnimatedTitle
                    title='TSDW Presents'
                    containerClass='mt-5 !text-white  text-center'
                />
                <AnimatedTitle
                    title='Hack<b>a</b>Nova 4.0'
                    containerClass=' bg-gradient-to-bl from-blue-500 to-blue-800 bg-clip-text text-transparent leading-normal   text-center'
                />

                {/* </div> */}

                {/* <a
                    href='https://devfolio.co'
                    className='bg-white rounded-lg p-3 flex items-center shadow-md hover:shadow-lg transition mb-20'
                >
                    <div className='flex items-center'>
                        <img
                            src='./img/devfolio.png'
                            className='h-6 mr-2'
                            alt='DEVFOLIO LOGO'
                        />
                        <span>
                            <b>Apply with Devfolio</b>
                        </span>
                    </div>
                </a> */}
                <div
                    data-hackathon-slug='hackanova-o'
                    data-button-theme='dark-inverted'
                    style='height: 44px; width: 312px'
                ></div>

                <BentoGridThirdDemo />
            </div>
        </div>
    );
};

export default About;
