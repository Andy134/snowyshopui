import React from 'react';
import CategoriesSection from './CategoriesSection';
import ProductsSection from './ProductsSection';
import Banner from './Banner';
import Trend from './Trend';
import Discount from './Discount';
import ServiceSection from './ServiceSection';
import Instagram from './Instagram';

export default function Index() {
    return (
        <>
            <CategoriesSection/>
            <ProductsSection/>
            <Banner/>
            <Trend/>
            <Discount/>
            <ServiceSection/>
            <Instagram/>
        </>
    );
}