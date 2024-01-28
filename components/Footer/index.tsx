/* eslint-disable @next/next/no-img-element */ /* eslint-disable react/no-unescaped-entities */

import { bankSupport, footerMenu, socialLinks } from "@/content/footerData";
import Link from "next/link";

const Footer = () => {
    return (
        <>
            <footer className="bg-secondary ">
                <div className="mx-auto flex max-w-[1500px] flex-col gap-[2.75rem] px-4 py-8 text-black ">
                    <div className="flex flex-col justify-start gap-2 md:flex-row md:items-center ">
                        <div className="leading-8 md:max-w-md md:flex-1">
                            <p className="text-sm">Subscribe to our newsletter</p>
                            <p className="text-xs">We will send you updates and sustainability news</p>
                        </div>
                        <div className="flex flex-col gap-2 md:max-w-xl md:flex-1 md:flex-row md:gap-7 ">
                            <input
                                placeholder="E-mail"
                                className="border-b border-b-primary bg-secondary py-3 px-[0.38rem] placeholder-neutral-500 xl:flex-1"
                            />
                            <button className="flex max-h-12 items-center justify-center bg-primary px-10 py-4 text-sm text-white">
                                Subscribe
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-center xl:justify-between">
                        <div className="flex max-w-xs flex-col items-start gap-[3.75rem]">
                            <div>
                                <div className="flex items-center gap-3 text-sm">
                                    <div className="relative h-12 w-12">
                                        <img
                                            alt=""
                                            loading="lazy"
                                            decoding="async"
                                            data-nimg="fill"
                                            src="/images/footer/logo.svg"
                                        />
                                    </div>
                                    <p>BOAS - Save Jeans. Save Lives. </p>
                                </div>
                                <span className="text-xs">
                                    You've made it to the end! Thanks for taking the time. If you're here because you're
                                    lost, feel free to{" "}
                                    <a
                                        className="font-medium text-blue-700  underline"
                                        href="https://boas.co/contactUs"
                                    >
                                        contact us
                                    </a>{" "}
                                    and we'll get you back on track.
                                </span>
                            </div>
                            <div className="flex flex-wrap justify-center gap-1 xl:justify-start">
                                {bankSupport.map((item, index) => (
                                    <div key={index}>
                                        <img
                                            alt=""
                                            loading="lazy"
                                            width="40"
                                            height="27"
                                            decoding="async"
                                            data-nimg="1"
                                            src={item.icon}
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        {footerMenu.map((item: any, index: number) => (
                            <div key={index} className="hidden flex-col gap-2 xl:flex">
                                <p className="font-medium">{item.title}</p>
                                {item.page.map((page, index) => (
                                    <Link
                                        key={index}
                                        href={`${page.link}`}
                                        className="cursor-pointer text-sm text-black"
                                    >
                                        {page.name}
                                    </Link>
                                ))}
                            </div>
                        ))}

                        <div className="hidden flex-col items-end gap-2 xl:flex">
                            <p className="font-medium">Download the BOAS app </p>
                            <a href="https://play.google.com/store/apps/details?id=co.boas.boas&amp;pli=1">
                                <img
                                    alt=""
                                    loading="lazy"
                                    width="96"
                                    height="28"
                                    decoding="async"
                                    data-nimg="1"
                                    src="https://d1k98jamwa6vrd.cloudfront.net/googleplay_2114da4a87.svg?w=256&amp;q=75"
                                />
                            </a>
                            <a href="https://apps.apple.com/de/app/boas-shop-vintage-fashion/id6450268118">
                                <img
                                    alt=""
                                    loading="lazy"
                                    width="96"
                                    height="28"
                                    decoding="async"
                                    data-nimg="1"
                                    src="https://d1k98jamwa6vrd.cloudfront.net/appstore_53562f351c.svg?w=256&amp;q=75"
                                />
                            </a>
                        </div>
                    </div>
                    <div className="flex flex-col items-center gap-2 text-xs xl:flex-row xl:justify-between ">
                        <div className="mb-8 flex flex-wrap justify-center gap-8 xl:order-3">
                            {socialLinks.map((item, index) => (
                                <a key={index} href={item.url}>
                                    <img
                                        alt=""
                                        loading="lazy"
                                        width="24"
                                        height="24"
                                        decoding="async"
                                        data-nimg="1"
                                        src={item.icon}
                                    />
                                </a>
                            ))}
                        </div>
                        <div className="flex flex-col items-center gap-2 xl:flex-row xl:gap-16">
                            <a className="text-blue-700" href="https://boas.co/privacyPolicy">
                                Privacy Policy
                            </a>
                            <a href="https://boas.co/termsandconditions">Terms and Conditions</a>
                        </div>
                        <div className="flex items-center gap-2 text-xs">
                            <img
                                alt=""
                                loading="lazy"
                                width="24"
                                height="24"
                                decoding="async"
                                data-nimg="1"
                                src="/images/footer/social/copyright.svg"
                            />
                            <p></p>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
