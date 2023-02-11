import React from 'react';
import CollectionSlider from './CollectionSlider';

const AllCollection = () => {
    return (
        <div className='container mx-auto mb-10'>
            <p className='text-2xl tracking-[4px] my-10'>OUR COLLECTION</p>

            <CollectionSlider/>
        </div>
    );
};

export default AllCollection;