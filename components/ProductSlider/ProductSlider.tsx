"use client";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ProductCard from "./ProductCard";
import { settings } from "@/utility/sliderResponsiveSetting";

const ProductSlider = ({ title, data, bg }: { title: string; data: any; bg?: boolean }) => {
    console.log(data[0].attributes["brandImage" || "productImage"]);
    return (
        <section className={`${bg && "bg-secondary"} py-10`}>
            <div className="container">
                <h1 className="text-2xl font-medium md:pl-10 lg:pl-5  xl:text-3xl">{title}</h1>
                <div className="pt-5">
                    <Slider {...settings}>
                        {data.map((item, index) => (
                            <div key={index} className=" ">
                                <ProductCard
                                    data={item.attributes}
                                    image={
                                        item.attributes.brandImage?.data.attributes.url ||
                                        item.attributes.productImage?.data.attributes.url
                                    }
                                />
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default ProductSlider;
