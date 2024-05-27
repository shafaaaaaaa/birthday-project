import React, { useState, useEffect, useRef } from "react";
import LazyLoad from "react-lazyload";
import "../App.css";
import Doll3 from "../Assets/cc19a9b4-8ef1-4d04-836f-2c883c14863f.jpeg";
import AudioFile from "../Assets/selamat-ulang-tahun.mp3";
import { FaRegSmileBeam } from "react-icons/fa";
import Confetti from "react-confetti";

const Home = () => {
  const [width, setWidth] = React.useState(window.innerWidth);
  const [height, setHeight] = React.useState(window.innerHeight);
  const [showConfetti, setShowConfetti] = useState(true);
  const [opacity, setOpacity] = useState(1);
  const audioRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setOpacity(0); // Ubah opacity menjadi 0 setelah 4.5 detik
    }, 9500);

    const hideConfetti = setTimeout(() => {
      setShowConfetti(false); // Hapus confetti setelah 5 detik
    }, 10000);

    return () => {
      clearTimeout(timer);
      clearTimeout(hideConfetti);
    };
  }, []);

  // useEffect(() => {
  //   if (audioRef.current) {
  //     audioRef.current.play().catch((error) => {
  //       console.log("Audio playback failed:", error);
  //     });
  //   }
  // }, []);

  const playAudio = () => {
    if (audioRef.current) {
      audioRef.current.play().catch((error) => {
        console.log("Audio playback failed:", error);
      });
    }
  };
  

  return (
    <div className="main-container">
      {showConfetti && (
        <div style={{ opacity: opacity, transition: "opacity 0.5s" }}>
          <Confetti width={width} height={height} />
        </div>
      )}
      <div className="card">
        <section className="section1">
          <LazyLoad height={200} offset={100}>
            <img src={Doll3} alt="birthday" className="picture" />
          </LazyLoad>
          <LazyLoad height={200} offset={100}>
            <audio
              ref={audioRef}
              src={AudioFile}
              controls
              className="audio"
              onLoadedData={playAudio}
            ></audio>
          </LazyLoad>
        </section>
        <section className="p-10">
          <div className="heading">
            <p className="font-bold text-3xl pb-4">Hi, Adrian.</p>
            <p className="text-lg">Happy 18!</p>
          </div>
          <p className="wishes-text">
            Wishing you a birthday filled with things that make you smile,
            Adrian. I wish you always be healthy, Allah makes all your affairs
            easy, & you will be given the strength and enthusiasm to continue to
            pursue your dreams and overcome all the challenges that come your
            way. Don't ever get tired of the process, one day you will get
            there. <br /> By the way, we are the same age now!! wkwk, all the
            best for you yaa, Thank you for taking the time to read this to the
            end.
          </p>
          <p className="signature">
            Sweet Regards, Izzati
            <FaRegSmileBeam className="emoticon" />
          </p>
        </section>
      </div>
    </div>
  );
};

export default Home;
