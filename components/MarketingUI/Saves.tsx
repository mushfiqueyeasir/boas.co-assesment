/* eslint-disable @next/next/no-img-element */
import React from "react";

const Saves = () => {
    return (
        <section className="mb-10 px-4 lg:px-28 ">
            <div className="mx-auto max-w-[1500px]">
                <div className="space-y-4 ">
                    <h2 className="font-medium leading-[1.875rem] text-lg lg:text-xl lg:leading-9">
                        Buying just one pair of vintage jeans saves
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-4  gap-4 text-white   ">
                        <div className="bg-primary bg-op flex aspect-square max-w-xs flex-col items-center justify-center gap-2 bg-opacity-100 text-center xl:gap-8">
                            <img
                                alt=""
                                loading="lazy"
                                width="40"
                                height="40"
                                decoding="async"
                                data-nimg="1"
                                className=" lg:h-16 lg:w-16"
                                src="https://d1k98jamwa6vrd.cloudfront.net/Frame_d938a0a104.svg?w=96&amp;q=75"
                            />
                            <p className="line-clamp-2 px-4 font-medium leading-[1.875rem] lg:text-xl lg:leading-9 ">
                                Driving over 27 kms
                            </p>
                            <p className="line-clamp-2 px-2 text-sm leading-6">(8.35 kg of O2)</p>
                        </div>
                        <div className="bg-primary bg-op flex aspect-square max-w-xs flex-col items-center justify-center gap-2 bg-opacity-80 text-center xl:gap-8">
                            <img
                                alt=""
                                loading="lazy"
                                width="40"
                                height="40"
                                decoding="async"
                                data-nimg="1"
                                className=" lg:h-16 lg:w-16"
                                src="https://d1k98jamwa6vrd.cloudfront.net/Frame_60102_269c873235.svg?w=96&amp;q=75"
                            />
                            <p className="line-clamp-2 px-4 font-medium leading-[1.875rem] lg:text-xl lg:leading-9 ">
                                Showering 15 times
                            </p>
                            <p className="line-clamp-2 px-2 text-sm leading-6">(945 liters of water)</p>
                        </div>
                        <div className="bg-primary bg-op flex aspect-square max-w-xs flex-col items-center justify-center gap-2 bg-opacity-90 text-center xl:gap-8">
                            <img
                                alt=""
                                loading="lazy"
                                width="40"
                                height="40"
                                decoding="async"
                                data-nimg="1"
                                className=" lg:h-16 lg:w-16"
                                src="https://d1k98jamwa6vrd.cloudfront.net/Layer_1_37bfccf775.svg?w=96&amp;q=75"
                            />
                            <p className="line-clamp-2 px-4 font-medium leading-[1.875rem] lg:text-xl lg:leading-9 ">
                                1 small balcony
                            </p>
                            <p className="line-clamp-2 px-2 text-sm leading-6">(land occupation of 3 sqm per year)</p>
                        </div>
                        <div className="bg-primary bg-op flex aspect-square max-w-xs flex-col items-center justify-center gap-2 bg-opacity-75 text-center xl:gap-8">
                            <img
                                alt=""
                                loading="lazy"
                                width="40"
                                height="40"
                                decoding="async"
                                data-nimg="1"
                                className=" lg:h-16 lg:w-16"
                                src="https://d1k98jamwa6vrd.cloudfront.net/Frame_1_236c570f3e.svg?w=96&amp;q=75"
                            />
                            <p className="line-clamp-2 px-4 font-medium leading-[1.875rem] lg:text-xl lg:leading-9 ">
                                425 tomatoes
                            </p>
                            <p className="line-clamp-2 px-2 text-sm leading-6">(12.2 g of PO4)</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Saves;
