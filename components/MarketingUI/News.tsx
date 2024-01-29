import React from "react";

const News = () => {
    const containerStyle = {
        backgroundImage: ' url("https://d1k98jamwa6vrd.cloudfront.net/Frame_61851_5aadb43565.png")',
        backgroundSize: "cover",
        backgroundPosition: "top"
    };
    return (
        <section className="bg-black py-10 md:pl-4 md:py-8 lg:px-28 lg:pr-0">
            <div style={containerStyle} className="mx-auto max-w-[1500px] h-[20rem]">
                <div className="flex w-full flex-col gap-5  text-white">
                    <div className="flex flex-col p-5  md:flex-row">
                        <div className="w-1/2">
                            <h1 className="text-2xl font-semibold xl:text-3xl">News</h1>
                        </div>
                        <div className="ml-10 mt-12 flex   flex-col justify-center gap-10 md:ml-0">
                            <div className="flex flex-col gap-3">
                                <div className=" md:text-xs  ">Discover our unique collection of </div>
                                <h1 className="text-2xl font-bold ">Up-cycled jeans</h1>
                            </div>
                            <div>
                                <a
                                    className="border-solid py-2 px-8 text-center text-white  bg-black   "
                                    href="https://shop.boas.co/products/upcycled-jeans"
                                >
                                    FInd your pair
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default News;
