/* eslint-disable @next/next/no-img-element */
import React from "react";
import BannerThumbnail from "./BannerThumbnail";
import PriceSection from "./PriceSection";

const Banner = () => {
    return (
        <section className="mx-auto mt-16 max-w-[1500px]  md:mt-0 lg:px-16 xl:pr-0">
            <div className="grid md:grid-cols-2 md:gap-4 lg:gap-10">
                <PriceSection />
                <BannerThumbnail />
            </div>
        </section>
    );
};

export default Banner;
