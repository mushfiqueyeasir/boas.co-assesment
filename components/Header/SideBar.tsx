/* eslint-disable @next/next/no-img-element */
import React from "react";

const SideBar = () => {
    return (
        <div className="drawer-side z-[9999]">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <div className="menu min-h-full w-80 bg-white p-6 pt-16">
                <div className="flex flex-col gap-4 md:flex-row ">
                    <a className="md:hidden" href="#">
                        <div className=" relative h-10 w-10">
                            <img
                                alt=""
                                sizes="10vw"
                                src="https://d1k98jamwa6vrd.cloudfront.net/boas_Logo_f9972b7505.png?w=3840&amp;q=75"
                            />
                        </div>
                    </a>
                    <div className="flex flex-col gap-5 font-medium md:hidden">
                        <a className="p-2 text-black" href="https://shop.boas.co/collections/vintage-jeans-women">
                            Vintage Women
                        </a>
                        <a className="p-2 text-black" href="https://shop.boas.co/collections/vintage-jeans-men">
                            Vintage Men
                        </a>
                        <a
                            className="p-2 text-black"
                            href="https://shop.boas.co/collections/vintage-jeans-under-30-euro"
                        >
                            Jeans under €30 / £30
                        </a>
                        <a className="p-2 text-black" href="https://shop.boas.co/collections/vintage-levis-jeans">
                            Levi’s jeans
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SideBar;
