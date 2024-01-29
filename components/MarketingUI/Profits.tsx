/* eslint-disable @next/next/no-img-element */
import React from "react";

const Profits = () => {
    const containerStyle = {
        backgroundImage:
            ' linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),url("/images/marketing/profits.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "top"
    };
    return (
        <section className=" ">
            <div className=" mx-auto">
                <article style={containerStyle} className="relative flex items-center justify-center bg-black bg-opacity-50 px-4 py-8 text-white md:py-14">
                   
                    <div className="flex flex-col items-center gap-4 leading-normal">
                        <div className="text-center">
                            <p className="text-3xl font-medium md:p-6 md:text-7xl md:tracking-widest">€6.432</p>
                            <p className="text-sm md:text-xl md:font-medium ">
                                Profits donated to the best lifesaving charities! One life saved so far.{" "}
                            </p>
                        </div>
                        <a
                            className="border-blue-light-background hover:bg-blue-light-background  border-2  border-solid px-10 py-4 text-white transition-all hover:text-black "
                            href="https://shop.boas.co/pages/mission"
                        >
                            Learn more
                        </a>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default Profits;
