/* eslint-disable @next/next/no-img-element */
import { brandslogo } from "@/content/brandsData";
import React from "react";

const ProductCard = ({ data, image }: { data: any; image?: any }) => {
    let brandImage;
    if (image) {
        brandImage = brandslogo.filter((item) => item.name === data.brandName);
    }

    return (
        <article className="flex justify-center">
            <div className="relative  mt-4 flex aspect-[0.7] max-w-[18rem] flex-col items-center justify-center ">
                <div className="absolute inset-0 z-10 "></div>
                <img
                    alt="filter"
                    loading="lazy"
                    width="24"
                    height="200"
                    decoding="async"
                    data-nimg="1"
                    className="-z-10 h-full w-full object-cover hover:scale-105 "
                    src={image}
                />
                <div className="absolute aspect-video  h-auto">
                    {brandImage.length > 0 ? (
                        <img
                            alt=""
                            loading="lazy"
                            decoding="async"
                            data-nimg="fill"
                            sizes="100vw"
                            src={brandImage[0].image}
                        />
                    ) : (
                        <h1 className="text-lg  text-white">{data.productName}</h1>
                    )}
                </div>
            </div>
        </article>
    );
};

export default ProductCard;
