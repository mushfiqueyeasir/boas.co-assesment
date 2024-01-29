/* eslint-disable @next/next/no-img-element */
"use client"
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settings } from "@/utility/sliderResponsiveSetting";
import { howItWorks } from "@/content/howItWorks";
import Step from "./Step";
const HowItWorks = () => {
    return (
        <section className="bg-secondary px-4 py-10 md:py-8 lg:px-28">
            <div className="mx-auto max-w-[1500px]">
                <div className="flex flex-col px-2 md:flex-row ">
                    <div className="relative   mx-auto mb-2 w-full  max-w-[500px] md:mr-2 md:mb-0 md:w-1/3">
                        <img
                            alt="filter"
                            className="h-full w-full object-cover"
                            src="/images/howItWorks/image.webp"
                        />
                    </div>
                    <div className="md:w-2/3  ">
                        <div className=" flex flex-col  md:ml-2 md:mt-0 mt-2">
                        <h1 className="text-2xl font-semibold px-0 md:px-6">How it works</h1>

                        <div>
                        <Slider {...settings}>
                        {howItWorks.map((item, index) => (
                            <div key={index} className=" ">
                                <Step
                                    data={item}
                                    key={index}
                                />
                            </div>
                        ))}
                    </Slider>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
