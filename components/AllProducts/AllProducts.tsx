"use client"
import React from 'react'
import SectionTitle from '../Shared/SectionTitle'
import ProductCard from '../Shared/ProductCard'
import { Button } from '@nextui-org/button'

function AllProducts() {
  return (
    <div className='my-20'>
        <SectionTitle title='Our Products'/>
        <div className="">
            <div className="my-10">
            <h1 className="text-lg md:text-3xl font-bold ">Explore Our Products</h1>

            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 my-20 gap-2 md:gap-5">
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
            <Button className='mx-auto text-center block' size='lg' color='danger' radius='none'>See All Products</Button>
        </div>
    </div>
  )
}

export default AllProducts