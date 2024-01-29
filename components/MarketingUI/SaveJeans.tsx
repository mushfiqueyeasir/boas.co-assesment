/* eslint-disable @next/next/no-img-element */
import React from "react";

const SaveJeans = () => {
    return (
        <section className="mb-10 px-4 md:px-0  lg:pr-0 ">
            <div className="mx-auto max-w-[1500px]">
                <div className="flex flex-col gap-10 lg:flex-row ">
                    <div className="flex flex-col  gap-4 lg:py-20">
                        <h6 className="text-xl font-medium lg:text-3xl">Save Jeans. Save Lives. </h6>
                        <p className="text-sm leading-6 lg:leading-8">
                            At BOAS you save jeans from being burned or ending up at a toxic landfill in Africa. Fashion
                            is responsible for 10% of global emissions, and denim is the most polluting fabric. Buy
                            vintage and save jeans, your wallet, CO2 and water. BOAS donates 90% of the profits from
                            your purchase to lifesaving charities, making you a lifesaver!{" "}
                        </p>
                        <div className="mx-auto flex flex-col gap-4 lg:mx-0 lg:mr-auto lg:flex-row">
                            <a
                                className="border-2 border-solid border-black bg-black px-10 py-4 text-white transition-all hover:bg-white hover:bg-opacity-95 hover:text-black "
                                href="https://shop.boas.co/pages/mission"
                            >
                                Save Lives{" "}
                            </a>
                        </div>
                    </div>
                    <div className="relative h-60 w-auto lg:h-auto lg:w-full ">
                        <img
                            alt=""
                            className="object-cover"
                            src="/images/marketing/saveJeans.svg"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SaveJeans;
