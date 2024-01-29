/* eslint-disable @next/next/no-img-element */
import React from "react";

const APP = () => {
    return (
        <section className="bg-secondary  overflow-hidden p-4 md:px-28 md:py-11">
            <div className="mx-auto max-w-[1500px]">
                <article className="relative flex items-center ">
                    <div className="flex flex-col gap-8 md:max-w-prose">
                        <div className="space-y-4">
                            <h4 className="text-xl font-medium md:text-3xl">Download the Official BOAS App</h4>
                            <p className="text-sm">
                                Save Jeans. Save Lives. With our App you buy vintage jeans in minutes. Browse, save
                                products and order directly from the App with a 20% app discount
                            </p>
                        </div>
                        <div className="flex gap-4">
                            <a href="https://play.google.com/store/apps/details?id=co.boas.boas&amp;pli=1">
                                <img
                                    alt=""
                                    loading="lazy"
                                    width="120"
                                    height="35"
                                    decoding="async"
                                    data-nimg="1"
                                    src="https://d1k98jamwa6vrd.cloudfront.net/googleplay_2114da4a87.svg?w=256&amp;q=75"
                                />
                            </a>
                            <a href="https://apps.apple.com/de/app/boas-shop-vintage-fashion/id6450268118">
                                <img
                                    alt=""
                                    loading="lazy"
                                    width="120"
                                    height="35"
                                    decoding="async"
                                    data-nimg="1"
                                    src="https://d1k98jamwa6vrd.cloudfront.net/appstore_53562f351c.svg?w=256&amp;q=75"
                                />
                            </a>
                        </div>
                    </div>
                    <img
                        alt=""
                        loading="lazy"
                        width="359"
                        height="284"
                        decoding="async"
                        data-nimg="1"
                        className="absolute right-10 hidden -translate-y-2 xl:block"
                        src="https://d1k98jamwa6vrd.cloudfront.net/small_Frame_61305_1_b0e433ec28.png?w=750&amp;q=75"
                    />
                </article>
            </div>
        </section>
    );
};

export default APP;
