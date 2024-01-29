import menuData from "@/content/menuData";
import React from "react";

const StickyNav = () => {
    return (
        <nav
            className={`sticky top-0 z-[99] hidden w-full bg-white shadow-md md:block`}
        >
            <div className=" hidden justify-center gap-4 pt-6 md:flex lg:gap-[3%] xl:justify-center xl:gap-5">
                {menuData.map((item, index) => (
                    <div key={0} className="dropdown-hover dropdown hidden hover:underline md:block ">
                        <div tabIndex={index} role="button" className="pb-3 font-medium lg:text-xl">
                            {item.title}
                        </div>
                        <div
                            tabIndex={0}
                            className="dropdown-content menu z-[99] mt-0 w-52 !bg-white bg-opacity-100 p-0 shadow"
                        >
                            <div className="flex w-full flex-col bg-white shadow-2xl ">
                                {item.submenu.map((subItem, index) => (
                                    <a
                                        key={index}
                                        className=" w-full p-3 leading-6 text-black hover:bg-neutral-100"
                                        href={subItem.path}
                                    >
                                        {subItem.title}
                                    </a>
                                ))}

                                <div className="h-1 w-full bg-black"></div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-5 flex justify-center whitespace-nowrap bg-black">
                <p className="py-1 font-normal text-white">FREE SHIPPING OVER €29</p>
            </div>
        </nav>
    );
};

export default StickyNav;
