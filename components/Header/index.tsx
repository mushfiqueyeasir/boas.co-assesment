/* eslint-disable @next/next/no-img-element */
"use client";

import StickyNav from "./StickyNav";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

const Header = () => {
    return (
        <>
            <section className="drawer w-full ">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    <NavBar />
                </div>
                <SideBar />
            </section>
            <StickyNav />
        </>
    );
};

export default Header;
