import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { Player, Controls } from "@lottiefiles/react-lottie-player";
import logo from "../assets/logo.svg";
import vrbs_soon from "../assets/animations/vrbs_soon.json";
import {FaTwitter, FaDiscord} from 'react-icons/fa';
import {SiSubstack} from 'react-icons/si';
import og_img from "../../public/og-image.png";

const Landing: NextPage = (props) => {
  return (
    <>
    <Head>
      <meta name="twitter:card" content="summary_large_image" key="card" />
      <meta name="twitter:site" content="@snounsdao" key="site" />
      <meta property="og:site_name" content="vrbs" key="sitename" />
      <meta property="og:title" content="vrbs soon" key="title" />
      <meta property="og:description" content="vrbsDAO is an ambitious multi-chain DAO and community proliferating via the @nounsdao protocol and @y00tsNFT" key="description" />
      <meta property="og:type" content="website" key="type" />
      <meta property="og:image" content={og_img.src} key="image" />
      <meta property="og:image:width" content="1200" key="imagewidth" />
      <meta property="og:image:height" content="630" key="imageheight" />
      <meta property="og:url" content="https://www.vrbs.com" key="url" />
    </Head>
    <main className="w-screen h-screen relative overflow-hidden">
      <div className="w-full h-full flex flex-col items-center justify-center bg-nuetral -mt-28 sm:-mt-20">
        <Image
          src={logo}
          className="mx-auto object-cover w-72 mb-36 sm:mb-64"
          alt="vrbs logo"
          aria-label="vrbs logo"
          priority={false}
        />
        <div className="w-[100%] mx-auto absolute overflow-hidden">
          <Player
            autoplay
            loop
            src={vrbs_soon}
            style={{ width: '100%', height: '500px' }}
          >
            {/* <Controls visible={true} buttons={['play', 'repeat', 'frame', 'debug']} /> */}
          </Player>
          
        </div>
        <span className="mb-12 sm:mb-12">[Q2 2023]</span>
        <div className="flex flex-col items-center absolute bottom-20 sm:bottom-40 p-5 mb-20 sm:mb-0">
          <p className="text-2xl sm:text-3xl pb-2 font-light text-center">The best way to predict the future is to create it.</p>
          {/* <p className="text-xs py-4 font-thin text-center">vrbsDAO is an ambitious multi-chain DAO and community proliferating via the  
            <a className="font-bold" href="https://twitter.com/nounsdao?s=20&t=d8jUWsIUeYdptSuxu-yUdg" 
                    target="_blank"
                    rel="noreferrer"
                    aria-label="link to nouns twitter">&nbsp;@nounsdao</a> protocol and 
            <a className="font-bold" href="https://twitter.com/y00tsNFT?s=20&t=d8jUWsIUeYdptSuxu-yUdg" 
                    target="_blank"
                    rel="noreferrer"
                    aria-label="link to y00ts twitter">&nbsp;@y00tsNFT</a>
            </p> */}
        </div>
      </div>
      <footer className="fixed h-20 bg-white bottom-0 w-full items-center justify-between">
          <ul className="flex items-center justify-center mx-auto text-black space-x-8 content-center p-6">
              <li>
                  <a href="https://twitter.com/snounsdao?s=20&t=YOW-qmN9O20RX-lB-fOmiA" 
                    target="_blank"
                    rel="noreferrer"
                    aria-label="link to vrbs twitter"
                    className="mr-4 hover:scale-110 md:mr-6">
                    <FaTwitter className="text-3xl" />
                  </a>
              </li>
              <li>
                  <a href="https://discord.gg/2Gp55Uzsad" 
                    target="_blank"
                    rel="noreferrer"
                    aria-label="link to vrbs discord"
                    className="mr-4 hover:scale-110 md:mr-6">
                    <FaDiscord className="text-3xl" />
                  </a>
              </li>
              <li>
                  <a href="https://vrbs.substack.com/" 
                    target="_blank"
                    rel="noreferrer"
                    aria-label="link to vrbs substack"
                    className="mr-4 hover:scale-110 md:mr-6">
                    <SiSubstack className="text-3xl" />
                  </a>
              </li>
              
          </ul>
      </footer>
    </main>
</>
  );
};

export default Landing;
