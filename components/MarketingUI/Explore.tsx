import React from "react";

const Explore = () => {
    const containerStyle = {
        backgroundImage:
            ' url("/images/marketing/explore.png")',
        backgroundSize: "cover",
        backgroundPosition: "top"
    };
    return (
        <section className="bg-[#ECEFF1] py-10 md:pl-4 md:py-8 lg:px-28 lg:pr-0">
            <div className="mx-auto max-w-[1500px]">
                <div style={containerStyle} className="flex w-full flex-col gap-5  text-white py-10">
                    <div className="flex flex-col p-5  md:flex-row">
                        <div className="ml-10 mt-12   flex flex-col justify-center gap-10">
                            <div className="flex flex-col gap-3">
                                <div className=" text-2xl font-bold  ">Jeans under 30€ </div>
                                <h1 className="text-2xl  ">right now</h1>
                            </div>
                            <div>
                                <a
                                    className="border-solid py-2 px-8 text-center text-white bg-black"
                                    href="https://shop.boas.co/collections/vintage-jeans-under-30-euro"
                                >
                                    Explore
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Explore;
