"use client"
import React from 'react';

import { Button } from '@nextui-org/button';
import SectionTitle from '../Shared/SectionTitle';
import SellSlider from './SellSlider';

const TodaysSell = () => {
    return (
        <section className='my-32'>
            <SectionTitle title="Today's"/>
            <div className="">
                <SellSlider sliderTitle='Flash Sales'/>
                <Button className='mx-auto block' radius='none' variant='solid' color='danger'>View All Products</Button>
            </div>
        </section>
    );
};

export default TodaysSell;