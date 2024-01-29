import React from "react";

const PriceSection = () => {
    return (
        <div className="flex max-w-4xl flex-col items-start gap-y-2 p-4 py-12 lg:gap-6">
            <h1 className="text-xl font-semibold leading-9 md:text-2xl lg:leading-[3.5rem]  xl:text-[2.5rem]">
                Save Jeans, Save Lives
            </h1>
            <p className="text-sm font-normal leading-6 md:text-lg  md:leading-9">
                You save vintage jeans and we donate 90% of profits to save lives.
            </p>
            <div className="hidden md:block">
                <div className="flex items-center gap-4 whitespace-nowrap text-base md:text-lg lg:gap-8 xl:gap-16 xl:text-4xl ">
                    <div>
                        <p className="font-bold leading-[6rem] ">Price drops in</p>
                    </div>
                    <div className="flex w-1/2 gap-[1.28rem] font-bold md:gap-4 lg:gap-10">
                        <div className="flex max-w-[4.8rem] flex-col items-center">
                            <span className=" flex w-full justify-center border-x-0 border-b-2 border-t-0  py-2 px-3 text-base  shadow-lg  md:text-xl md:leading-[3rem] lg:leading-[5rem] xl:py-2 xl:text-[2rem]">
                                12
                            </span>
                            <p className="text-cente text-xs font-medium leading-[1.875rem]">hours</p>
                        </div>
                        <div className="flex max-w-[4.8rem] flex-col items-center">
                            <span className="flex w-full justify-center border-x-0 border-b-2 border-t-0  py-2 px-3 text-base  shadow-lg  md:text-xl md:leading-[3rem] lg:leading-[5rem] xl:py-2 xl:text-[2rem]">
                                31
                            </span>
                            <p className="text-cente text-xs font-medium leading-[1.875rem]">minutes</p>
                        </div>
                        <div className="flex max-w-[4.8rem] flex-col items-center">
                            <span className="flex w-full justify-center border-x-0 border-b-2 border-t-0  py-2 px-3 text-base  shadow-lg  md:text-xl md:leading-[3rem] lg:leading-[5rem] xl:py-2 xl:text-[2rem] ">
                                10
                            </span>
                            <p className="text-cente text-xs font-medium leading-[1.875rem]">seconds</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PriceSection;
