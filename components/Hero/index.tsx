/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
"use client";
import BannerBottom from "@/designs/BannerBottom";
import BannerTop from "@/designs/BannerTop";
import Link from "next/link";
import { TypeAnimation } from "react-type-animation";

const Hero = ({
    title,
    subTitle,
    description,
    button,
    image,
    design
}: {
    title?: string;
    subTitle?: { staticText: string; dynamicTexts?: (string | number)[] };
    description?: string;
    button?: { title: string; path: string };
    image: string;
    design?: boolean;
}) => {
    return (
        <>
            <section
                className={`relative z-10 flex min-h-[100vh]  items-center justify-center overflow-hidden pt-[6rem] lg:pt-0`}
            >
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 items-center lg:grid-cols-2">
                        <div className="wow fadeInUp mx-auto max-w-[800px]" data-wow-delay=".2s">
                            {title && (
                                <h1 className="mb-5 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-5xl md:leading-tight">
                                    {title}
                                </h1>
                            )}
                            {subTitle && (
                                <h1 className="mb-5 text-3xl font-bold  leading-tight text-black dark:text-white sm:text-4xl sm:leading-tight md:text-3xl md:leading-tight">
                                    <span>{subTitle.staticText} </span>
                                    {subTitle.dynamicTexts && (
                                        <TypeAnimation
                                            sequence={subTitle.dynamicTexts}
                                            wrapper="span"
                                            speed={5}
                                            className="text-primary"
                                            repeat={Infinity}
                                        />
                                    )}
                                </h1>
                            )}
                            {description && (
                                <p className="mb-12 text-base font-medium !leading-relaxed text-body-color dark:text-white dark:opacity-90 sm:text-lg md:text-xl">
                                    {description}
                                </p>
                            )}
                            {button && (
                                <div className="flex space-y-4  sm:space-x-4 sm:space-y-0">
                                    <Link
                                        href={button.path}
                                        className="rounded-md bg-primary px-8 py-4 text-base font-semibold text-white duration-300 ease-in-out hover:bg-primary/80"
                                    >
                                        {button.title}
                                    </Link>
                                </div>
                            )}
                        </div>
                        <div className="flex items-center justify-center">
                            <img src={image} alt="" className="w-[90%]" />
                        </div>
                    </div>
                </div>

                {design && (
                    <div className="zoom absolute right-0 top-0 z-[-1] opacity-30 lg:opacity-100">
                        <BannerTop />
                    </div>
                )}
                {design && (
                    <div className="zoom absolute bottom-0 left-0 z-[-1] opacity-30 lg:opacity-100">
                        <BannerBottom />
                    </div>
                )}
            </section>
        </>
    );
};

export default Hero;
