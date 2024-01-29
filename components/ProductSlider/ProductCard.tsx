/* eslint-disable @next/next/no-img-element */
import { brandslogo } from "@/content/brandsData";
import React from "react";

const ProductCard = ({ data, image }: { data: any; image?: any }) => {
    let brandImage;
    if (image) {
        brandImage = brandslogo.filter((item) => item.name === data.name);
    }

    return (
        <article className="flex justify-center">
            <div className="relative mt-4 flex aspect-[0.7]  md:max-w-[12rem] lg:max-w-[13rem] xl:max-w-[16rem] 2xl:max-w-[18rem]flex-col items-center justify-center overflow-hidden ">
                <img alt="" className="h-full w-full object-cover hover:scale-[1.1] duration-300"
                    src={image}
                />
                <div className="absolute aspect-video  h-auto">
                    {brandImage.length > 0 ? (
                        <img
                            alt=""

                            src={brandImage[0].image}
                        />
                    ) : (
                        <h1 className="text-lg font-semibold text-white">{data.name}</h1>
                    )}
                </div>
            </div>
        </article>
    );
};

export default ProductCard;
