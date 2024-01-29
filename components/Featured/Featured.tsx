/* eslint-disable @next/next/no-img-element */
"use client"
import { settings, settings2 } from '@/utility/sliderResponsiveSetting';
import React from 'react';
import Slider from 'react-slick';

const Featured = ({data}) => {
    console.log(data[0].attributes.image.data.attributes.url)
    return (
        <section className='lg:px-28 px-4 my-10'>
            <div className='max-w-[1500px] mx-auto'>
                <h2 className='text-black xl:text-3xl text-xl font-medium leading-9 flex-1'>We have been featured</h2>

                <div>
                <div className="pt-2 my-10">
                    <Slider {...settings2}>
                        {data.map((item, index) => (
                            <div key={index} className=" ml-6">
                                <img src={item.attributes.image.data.attributes.url} alt=""className='w-24 aspect-square relative  max-w-xs '/>
                            </div>
                        ))}
                    </Slider>
                </div>
                </div>

            </div>
            
        </section>
    );
};

export default Featured;