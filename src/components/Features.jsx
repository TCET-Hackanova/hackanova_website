import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import Slider from "./Slider/Slider";
import { FaqTeachers } from "./faq.jsx";
import { faqs } from "../lib/data";
import { BentoGridItem } from "./ui/bento-grid.jsx";

export const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!itemRef.current) return;

    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();

    const relativeX = (event.clientX - left) / width;
    const relativeY = (event.clientY - top) / height;

    const tiltX = (relativeY - 0.5) * 5;
    const tiltY = (relativeX - 0.5) * -5;

    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
    setTransformStyle(newTransform);
  };

  const handleMouseLeave = () => {
    setTransformStyle("");
  };

  return (
    <div
      ref={itemRef}
      className={className}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

export const BentoCard = ({ src,dlink, title, description, isComingSoon }) => {
 
  const hoverButtonRef = useRef(null);

  const handleMouseMove = (event) => {
    if (!hoverButtonRef.current) return;
    const rect = hoverButtonRef.current.getBoundingClientRect();

    setCursorPosition({
      x: event.clientX - rect.left,
      y: event.clientY - rect.top,
    });
  };

  const handleMouseEnter = () => setHoverOpacity(1);
  const handleMouseLeave = () => setHoverOpacity(0);

  return (
    <div className="relative size-full">
      {/* <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      /> */}
      <div className="relative z-10 flex size-full flex-col justify-between items-center p-5 text-blue-50">
        <div>
          <a href={dlink} target="_blank">
            {title}
          </a>
        </div>
      </div>
    </div>
  );
};

const Features = () => (
    <section className='mt-5'>
        <div className='container mx-auto px-3 md:px-10'>
            <div className='px-5 py-32'>
                <p className='font-circular-web text-center text-3xl lg:text-4xl font-bold   text-blue-50'>
                    Meet Our <span className='bg-purple-800'> Sponsors</span>
                </p>
                <p className='max-w-md font-circular-web text-lg text-blue-50 opacity-50'></p>
            </div>

            <div className='flex flex-wrap justify-center gap-4 w-full'>
                <BentoTilt className='bento-tilt_1 md:w-1/4'>
                    <BentoCard
                        src='videos/feature-2.mp4'
                        title={
                            <img
                                src='./img/Devfolio_Logo-White.png'
                                className='h-12'
                                alt='DEVFOLIO LOGO'
                            />
                        }
                        dlink='https://devfolio.co'
                    />
                </BentoTilt>
                <BentoTilt className='bento-tilt_1 md:w-1/4'>
                    <BentoCard
                        src='videos/feature-2.mp4'
                        title={
                            <img
                                src='./img/Polygon_Logo-White@2x.png'
                                className='h-12'
                                alt='POLYGON LOGO'
                            />
                        }
                        dlink='https://polygon.technology/'
                    />
                </BentoTilt>
                <BentoTilt className='bento-tilt_1 md:w-1/4'>
                    <BentoCard
                        src='videos/feature-2.mp4'
                        title={
                            <img
                                src='./img/ethindia-light.png'
                                alt='ETHINDIA LOGO'
                                className='h-12'
                            />
                        }
                        dlink='https://ethindia.co'
                    />
                </BentoTilt>
                {/* <BentoTilt className="bento-tilt_1 md:w-1/4">
    <BentoCard
      src="videos/feature-2.mp4"
      title={
        <img src="./img/replit-light.png" alt="REPLIT LOGO" className="h-12"/>
      }
      dlink="https://replit.com"
      
    />
  </BentoTilt> */}
                <BentoTilt className='bento-tilt_1 md:w-1/4'>
                    <BentoCard
                        src='videos/feature-2.mp4'
                        title={
                            <img
                                src='./img/Aptos_Primary_WHT.png'
                                className='h-12'
                                alt='APTOS LOGO'
                            />
                        }
                        dlink='https://aptosfoundation.org/'
                    />
                </BentoTilt>
                <BentoTilt className='bento-tilt_1 md:w-1/4'>
                    <BentoCard
                        src='videos/feature-2.mp4'
                        title={
                            <img
                                src='./img/xyz-logo-white.png'
                                className='h-12'
                                alt='.XYZ LOGO'
                            />
                        }
                        dlink='https://gen.xyz/'
                    />
                </BentoTilt>
                <BentoTilt className='bento-tilt_1 md:w-1/4'>
                    <BentoCard
                        src='videos/feature-2.mp4'
                        title={
                            <img
                                src='./img/SYBGEN.png'
                                className='h-12'
                                alt='SYBGEN LOGO'
                            />
                        }
                        dlink='https://sybgen.com/'
                    />
                </BentoTilt>
            </div>
        </div>
        <Slider />
        <div className=' flex lg:mx-52 mt-24 mx-8'>
            <div className='container z-10 relative before:absolute before:bg-gradient-to-b from-purple-600 via-purple-800 to-black  before:-inset-2 before:-z-10 before:blur-3xl before:round-[inherit]'>
                <FaqTeachers faqs={faqs} />
            </div>
        </div>
        <div className='mt-10 p-10 dark:bg-dot-white/[0.2] bg-dot-black/[0.2] flex-col space-y-2 justify-center items-center relative overflow-hidden'>
            <div className='p-2  lg:w-2/5 mx-auto '>
                <h1 className='text-5xl text-white font-bold text-center'>
                    Meet the Team
                </h1>
                <BentoGridItem
                    title='TSDW Technical Team'
                    description='The TSDW Technical Team is the backbone of Hackanova, ensuring seamless execution with cutting-edge technologies and innovative solutions.
From setting up platforms to troubleshooting in real-time, the team fosters a collaborative environment for an exceptional hackathon experience.'
                    className={"mt-5"}
                    header={
                        <img
                            src='./images/a.jpeg'
                            alt=''
                            className='h-full object-cover object-center aspect-auto-16/9'
                        />
                    }
                />
            </div>
        </div>
    </section>
);

export default Features;
