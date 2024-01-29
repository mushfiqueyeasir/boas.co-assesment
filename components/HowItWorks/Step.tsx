import React from 'react';

const Step = ({data}) => {
    const {step,title,description}=data
    return (
        <div className='ml-4 md:ml-4 flex flex-col gap-6 bg-secondary p-4 max-h-[16.5rem] h-[70vw] max-w-[18rem] mb-10'>
            <div className='border-b-4 border-white pb-3'>
                <h1 className='font-medium text-xl'>Step {step}</h1>
            </div>
            <div>
                <h1 className='font-medium text-xl leading-9 line-clamp-2'>{title}</h1>
                <p className='font-normal text-sm leading-6 line-clamp-3'>{description}</p>
            </div>
            
        </div>
    );
};

export default Step;