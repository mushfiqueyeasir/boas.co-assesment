/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const Collection = () => {
    return (
        <section className="  bg-[#98BCE3] py-10 p-4 md:py-8 lg:pr-0">
            <div className="mx-auto max-w-[1500px]">
                <div className="flex flex-col gap-6 px-2 py-2 md:px-0 md:py-6">
                    <h1 className="text-xl text-black md:text-white lg:px-28">Iconic Levi’s collections</h1>
                    <div className="flex max-w-[900px]  flex-col gap-5 md:w-3/4 md:flex-row">
                        <div className="relative order-last flex h-[300px] w-full justify-center overflow-hidden md:order-first md:h-auto">
                            <img
                                alt=""
                                loading="lazy"
                                className="h-full w-full object-cover shadow-md shadow-[#5b5959] "
                                src="/images/collection/501.webp"
                            />
                            <a
                                className="absolute bottom-6 right-10 bg-black p-2 px-6 text-white"
                                href="https://shop.boas.co/collections/vintage-levis-501-jeans"
                            >
                                levi's 501
                            </a>
                        </div>
                        <div className="relative order-last flex h-[300px] w-full justify-center overflow-hidden md:order-first md:h-auto">
                            <img
                                alt=""                           
                                className="  h-full w-full object-cover shadow-md shadow-[#5b5959] "
                                src="/images/collection/511.webp"
                            />
                            <a
                                className="absolute bottom-6 right-10 bg-black p-2 px-6 text-white"
                                href="https://shop.boas.co/collections/vintage-levis-511-jeans"
                            >
                                levi's 511
                            </a>
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </section>
    );
};

export default Collection;
