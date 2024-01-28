/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React from "react";

const NavBar = () => {
    const category = [
        { name: "Women", path: "https://shop.boas.co/collections/vintage-jeans-women" },
        { name: "Men", path: "https://shop.boas.co/collections/vintage-jeans-men" },
        { name: "All Vintage", path: "https://shop.boas.co/collections/vintage-jeans-men" }
    ];
    return (
        <nav className="fixed -top-1 z-[999] w-full bg-white py-4 shadow md:relative md:shadow-none">
            <div className="container flex w-full flex-col gap-y-5">
                <div className="hidden w-full items-center gap-2 md:flex">
                    <img src="/images/nav/Netherlands.svg" alt="" className="h-5 w-6 object-cover" />
                    <h4 className="test text-[#6B6B6B]">€ EUR</h4>
                </div>
                <div className="flex w-full items-center justify-between ">
                    <div className="flex flex-1 justify-start">
                        <label htmlFor="my-drawer-3" aria-label="open sidebar" className="block md:hidden">
                            <img alt="menu" loading="lazy" width="24" height="24" src="/images/nav/menu.svg" />
                        </label>

                        <div className="hidden md:block">
                            <div className="flex font-medium leading-[1.875rem]">
                                <div className=" mx-auto hidden gap-4 md:flex">
                                    {category.map((item, index) => (
                                        <a
                                            key={index}
                                            className="bg-white font-medium text-black hover:text-neutral-700 sm:text-xl md:mr-2"
                                            href={item.path}
                                        >
                                            {item.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <Link href="/" className="py-3">
                            <img alt="Boas Logo" loading="lazy" width="106" height="54" src="/images/logo/logo.svg" />
                        </Link>
                    </div>
                    <div className="flex flex-1 justify-end">
                        <div className="flex items-end gap-[1.5rem] md:items-center ">
                            <div className="dropdown-bottom dropdown hidden md:block">
                                <div tabIndex={0} role="button" className="font-medium !text-black">
                                    About Us
                                </div>
                                <div
                                    tabIndex={0}
                                    className="dropdown-content menu z-[99] mt-3 w-52 !bg-white bg-opacity-100 p-0 shadow"
                                >
                                    <div className="flex w-full flex-col bg-white shadow-2xl ">
                                        <a
                                            className=" px-3 py-1 leading-6 text-black hover:bg-neutral-100 sm:w-[100px]  md:w-[200px]"
                                            href="https://boas.co/ourMission"
                                        >
                                            Mission
                                        </a>
                                        <a
                                            className=" px-3 py-1 leading-6 text-black hover:bg-neutral-100 sm:w-[100px]  md:w-[200px]"
                                            href="https://boas.co/contactUs"
                                        >
                                            Contact Us
                                        </a>
                                        <a
                                            className=" px-3 py-1 leading-6 text-black hover:bg-neutral-100 sm:w-[100px]  md:w-[200px]"
                                            href="https://boas.co/frequentlyAskedQuestions"
                                        >
                                            FAQ
                                        </a>
                                        <a
                                            className=" px-3 py-1 leading-6 text-black hover:bg-neutral-100 sm:w-[100px]  md:w-[200px]"
                                            href="https://boas.co/sustainability"
                                        >
                                            Sustainability
                                        </a>
                                        <a
                                            className=" px-3 py-1 leading-6 text-black hover:bg-neutral-100 sm:w-[100px]  md:w-[200px]"
                                            href="https://boas.co/team"
                                        >
                                            Team
                                        </a>
                                        <div className="h-1 w-full bg-black"></div>
                                    </div>
                                </div>
                            </div>
                            <button className="hidden md:block">
                                <img src="/images/nav/invest.png" alt="" className="h-6 w-6" />
                            </button>
                            <button>
                                <img src="/images/nav/profile.svg" alt="" className="h-6 w-6" />
                            </button>
                            <button>
                                <img src="/images/nav/cart.svg" alt="" className="h-6 w-6" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default NavBar;
