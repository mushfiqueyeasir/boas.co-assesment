"use client";
import { settings } from "@/utility/sliderResponsiveSetting";
import React from "react";
import Slider from "react-slick";
import BlogsCard from "./BlogsCard";

const Blogs = ({ data }) => {
    return (
        <section className="my-20 px-4 lg:px-28">
            <div className="mx-auto max-w-[1500px]">
                <h1 className="text-xl font-medium text-black xl:text-3xl">BOAS Blog</h1>
                <div>
                    <Slider {...settings}>
                        {data.map((item, index) => (
                            <div key={index} className=" ">
                                <BlogsCard data={item.attributes} key={index}></BlogsCard>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </section>
    );
};

export default Blogs;
