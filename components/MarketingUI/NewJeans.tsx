/* eslint-disable @next/next/no-img-element */
import React from "react";

const NewJeans = () => {
    const containerStyle = {
        backgroundImage:
            ' url("/images/marketing/newJeans.png")',
        backgroundSize: "cover",
        backgroundPosition: "top"
    };
    return (
        <section className=" my-4 md:my-8">
            <div style={containerStyle} className=" mx-auto">
                <article className="relative flex items-center justify-center bg-black bg-opacity-20 px-4 py-8 text-white md:py-14">
                    
                    <div className="flex flex-col justify-start   gap-10 leading-normal">
                        <p className="text-2xl font-medium md:text-4xl md:tracking-widest ">
                            New jeans drop on Fridays!
                        </p>
                    </div>
                </article>
            </div>
        </section>
    );
};

export default NewJeans;
