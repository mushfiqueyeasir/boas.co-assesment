/* eslint-disable @next/next/no-img-element */
"use client"
import React, { useEffect, useState } from "react";
import BannerThumbnail from "./BannerThumbnail";
import PriceSection from "./PriceSection";

const Banner = () => {
    const [hours, setHours] = useState(12);
    const [minutes, setMinutes] = useState(31);
    const [seconds, setSeconds] = useState(10)
    useEffect(() => {
        const interval = setInterval(() => {
          // Decrease seconds
          setSeconds(prevSeconds => (prevSeconds > 0 ? prevSeconds - 1 : 59));
    
          // Decrease minutes and reset seconds to 59 if necessary
          if (seconds === 0) {
            setMinutes(prevMinutes => (prevMinutes > 0 ? prevMinutes - 1 : 0));
            setSeconds(59);
          }
    
          // Decrease hours and reset minutes and seconds if necessary
          if (minutes === 0 && seconds === 0) {
            setHours(prevHours => (prevHours > 0 ? prevHours - 1 : 0));
            setMinutes(59);
            setSeconds(59);
          }
        }, 1000);
    
        // Clean up the interval on component unmount
        return () => clearInterval(interval);
      }, [hours, minutes, seconds]);
    return (
        <section className="mx-auto mt-16 max-w-[1500px]  md:mt-0 lg:px-16 xl:pr-0">
            <div className="grid md:grid-cols-2 md:gap-4 lg:gap-10">
                <PriceSection hours={hours} minutes={minutes} seconds={seconds}/>
                <BannerThumbnail hours={hours} minutes={minutes} seconds={seconds}/>
            </div>
        </section>
    );
};

export default Banner;
