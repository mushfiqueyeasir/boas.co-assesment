/* eslint-disable react/no-unescaped-entities */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const LevisJeans = () => {
    const containerStyle = {
        backgroundImage:
            ' url("/images/marketing/levisJeans.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "center"
    };
    return (
        <section className=" relative my-10 space-y-4 ">
            <div style={containerStyle} className="mx-auto max-w-[1500px] pl-4 lg:pl-28">
                <article className="relative flex flex-col gap-4 bg-black bg-opacity-30 p-4 text-white md:items-start lg:p-8 ">
                    <div>
                        <h4 className="text-xl font-bold lg:text-4xl">Levi's Jeans</h4>
                        <p className="max-w-5xl text-xs leading-6 lg:text-sm ">
                            Browse more than one thousand authentic Vintage Levi's Jeans. Pick your favourite model
                            below.{" "}
                        </p>
                    </div>
                    <div className="flex  flex-wrap gap-4">
                        <a
                            className=" text-blue-light-background border-blue-light-background hover:text-primary-light-hover z-10 min-w-[5rem] max-w-fit flex-1 border-2 border-solid py-4 text-center  font-semibold leading-6 hover:opacity-95 md:py-4 md:px-10"
                            href="https://shop.boas.co/collections/vintage-levis-501-jeans"
                        >
                            501
                        </a>
                        <a
                            className=" text-blue-light-background border-blue-light-background hover:text-primary-light-hover z-10 min-w-[5rem] max-w-fit flex-1 border-2 border-solid py-4 text-center  font-semibold leading-6 hover:opacity-95 md:py-4 md:px-10"
                            href="https://shop.boas.co/collections/pre-owned-jeans?filter.p.vendor=Levi%27s&amp;filter.p.m.custom.model=Levi%27s+502&amp;filter.v.price.gte=&amp;filter.v.price.lte=&amp;sort_by=best-selling"
                        >
                            502
                        </a>
                        <a
                            className=" text-blue-light-background border-blue-light-background hover:text-primary-light-hover z-10 min-w-[5rem] max-w-fit flex-1 border-2 border-solid py-4 text-center  font-semibold leading-6 hover:opacity-95 md:py-4 md:px-10"
                            href="https://shop.boas.co/collections/pre-owned-jeans?filter.p.vendor=Levi%27s&amp;filter.p.m.custom.model=Levi%27s+504&amp;filter.v.price.gte=&amp;filter.v.price.lte=&amp;sort_by=best-selling"
                        >
                            504
                        </a>
                        <a
                            className=" text-blue-light-background border-blue-light-background hover:text-primary-light-hover z-10 min-w-[5rem] max-w-fit flex-1 border-2 border-solid py-4 text-center  font-semibold leading-6 hover:opacity-95 md:py-4 md:px-10"
                            href="https://shop.boas.co/collections/pre-owned-jeans?filter.p.vendor=Levi%27s&amp;filter.p.m.custom.model=Levi%27s+505&amp;filter.v.price.gte=&amp;filter.v.price.lte=&amp;sort_by=best-selling"
                        >
                            505
                        </a>
                        <a
                            className=" text-blue-light-background border-blue-light-background hover:text-primary-light-hover z-10 min-w-[5rem] max-w-fit flex-1 border-2 border-solid py-4 text-center  font-semibold leading-6 hover:opacity-95 md:py-4 md:px-10"
                            href="https://shop.boas.co/collections/vintage-levis-jeans?filter.p.m.custom.model=Levi%27s+511&amp;filter.v.price.gte=&amp;filter.v.price.lte=&amp;sort_by=best-selling"
                        >
                            511
                        </a>
                        <a
                            className=" text-blue-light-background border-blue-light-background hover:text-primary-light-hover z-10 min-w-[5rem] max-w-fit flex-1 border-2 border-solid py-4 text-center  font-semibold leading-6 hover:opacity-95 md:py-4 md:px-10"
                            href="https://shop.boas.co/collections/pre-owned-jeans?filter.p.vendor=Levi%27s&amp;filter.p.m.custom.model=Levi%27s+512&amp;filter.v.price.gte=&amp;filter.v.price.lte=&amp;sort_by=best-selling"
                        >
                            512
                        </a>
                        <a
                            className=" text-blue-light-background border-blue-light-background hover:text-primary-light-hover z-10 min-w-[5rem] max-w-fit flex-1 border-2 border-solid py-4 text-center  font-semibold leading-6 hover:opacity-95 md:py-4 md:px-10"
                            href="https://shop.boas.co/collections/pre-owned-jeans?filter.p.m.custom.model=Levi%27s+550&amp;filter.p.vendor=Levi%27s&amp;sort_by=best-selling"
                        >
                            550
                        </a>
                    </div>
                   
                </article>
            </div>
        </section>
    );
};

export default LevisJeans;
