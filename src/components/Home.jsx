import React from 'react';
import Banner from './Banner';
import Books from '../pages/Books';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data= useLoaderData();
    // console.log(data);
    return (
        <div className='max-w-11/12 mx-auto'>
            <Banner></Banner>
            <Books data={data}></Books>
        </div>
    );
};

export default Home;