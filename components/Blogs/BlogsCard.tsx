/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from "react";

const BlogsCard = ({ data }) => {
    console.log(data);
    const { title, date, link, image } = data;
    const blogImage = image.data.attributes.url;
    return (
        <>
        <div className="aspect-[0.74] flex flex-col group items-center justify-start mt-4 max-w-[19rem] max-h-[26rem] relative mb-10 overflow-hidden">
            <a
                className="absolute inset-0 z-10 flex lg:hidden"
                href={link}></a>

            <div className="relative w-full p-10 transition-all duration-[250ms] flex-[_5_2_auto] group-hover:flex-[_0_0_0%] -z-10">
                <img
                    className="absolute inset-0 object-cover h-full group-hover:h-60 w-full group-hover:duration-[600ms] ease-in-out group-hover:-top-36"
                    src={blogImage}
                />
            </div>
            <div className="bg-[#eceff1] flex flex-col ease-out flex-grow items-start justify-between gap-4 pb-16 lg:pb-4 w-full p-4 ">
                <div className="gap-2 ">
                    <p className="font-medium text-xs whitespace-nowrap text-black leading-5 md:leading-6">
                        {date}
                    </p>
                    <p className="leading-8 md:leading-9 font-medium text-xl line-clamp-2  group-hover:line-clamp-3  ease-out">
                        {title}
                    </p>
                </div>
                <a
                    className="hidden lg:flex bg-black text-white px-10 py-4 leading-6 hover:bg-opacity-95 focus:bg-dark-blue"
                    href={link}>
                    Read more
                </a>
            </div>
        </div>
    </>
    );
};

export default BlogsCard;
