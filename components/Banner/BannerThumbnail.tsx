import React from "react";

const BannerThumbnail = ({hours,minutes,seconds}) => {
    const containerStyle = {
        backgroundImage:
            'linear-gradient(rgba(255, 255, 255, 0.2), rgba(255, 255, 255, 0.2)), url("/images/banner/bannerImage.jpg")',
        backgroundSize: "cover",
        backgroundPosition: "bottom"
    };
    return (
        <div>
            <div
                style={containerStyle}
                className="flex h-[20rem] w-full items-end justify-center gap-4 pb-20 lg:h-[25rem]"
            >
                <a
                    className="bg-black/95 px-6 py-3 font-semibold text-white duration-100 hover:bg-white/95 hover:text-black lg:px-10 lg:py-4"
                    href="https://shop.boas.co/collections/vintage-jeans-women"
                >
                    Shop women
                </a>
                <a
                    className="bg-black/95 px-6 py-3 font-semibold text-white duration-100 hover:bg-white/95 hover:text-black lg:px-10 lg:py-4"
                    href="https://shop.boas.co/collections/vintage-jeans-men"
                >
                    Shop men
                </a>
            </div>
            <div className="md:hidden">
                <div className="flex items-center gap-4 whitespace-nowrap text-base md:text-2xl xl:gap-16 xl:text-4xl ">
                    <div className="flex w-[40%]  justify-center ">
                        <p className="font-bold leading-[6rem] ">Price drops in</p>
                    </div>
                    <div className="flex w-[60%] gap-[1.28rem] font-bold md:gap-10">
                        <div className="flex max-w-[4.8rem] flex-col items-center">
                            <span className=" flex w-full justify-center border-x-0 border-b-2 border-t-0  py-2 px-3 text-base  shadow-lg  md:text-xl md:leading-[5rem] xl:py-2 xl:text-[2rem] ">
                                {hours}
                            </span>
                            <p className="text-center text-xs font-medium leading-[1.875rem]">hours</p>
                        </div>
                        <div className="flex max-w-[4.8rem] flex-col items-center">
                            <span className=" flex w-full justify-center border-x-0 border-b-2 border-t-0  py-2 px-3 text-base  shadow-lg  md:text-xl md:leading-[5rem] xl:py-2 xl:text-[2rem] ">
                                {minutes}
                            </span>
                            <p className="text-center text-xs font-medium leading-[1.875rem]">minutes</p>
                        </div>
                        <div className="flex max-w-[4.8rem] flex-col items-center">
                            <span className=" flex w-full justify-center border-x-0 border-b-2 border-t-0  py-2 px-3 text-base  shadow-lg  md:text-xl md:leading-[5rem] xl:py-2 xl:text-[2rem] ">
                                {seconds}
                            </span>
                            <p className="text-center text-xs font-medium leading-[1.875rem]">seconds</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerThumbnail;
