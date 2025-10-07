import React from 'react';
import bookImg from '../assets/books.jpg';

const Banner = () => {
    return (
        // <div className='flex justify-around items-center'>
        //     <div className='space-y-1'>
        //         <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis adipisci illum quas. Eum facere, labore nisi praesentium quas ea soluta, doloribus corporis ducimus enim possimus nam quibusdam maxime, exercitationem quos?</h1>
        //         <button className='btn btn-primary'>test test</button>
        //     </div>
        //     <div>
        //         <img src={bookImg} alt="" />
        //     </div>
        // </div>

        <div className="hero bg-base-200">
            <div className="hero-content flex-col md:flex-row">
                <img
                src={bookImg}
                className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold">Boi Poka News!</h1>
                    <p className="py-6">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam at repellendus magnam accusantium repudiandae ratione, velit eveniet explicabo ducimus sequi consectetur? Nulla maxime voluptas ut facilis tenetur dolorum praesentium quasi.
                    </p>
                    <button className="btn btn-primary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;