import React  from 'react';
// import {use} from 'react';
import { FaStarHalfAlt } from "react-icons/fa";


const Book = ({singleBook}) => {
    
    // const data= use(bookPromise);
    // console.log(data);

    // console.log(singleBook);

    const {bookName, author, image, rating, category, review, tags}= singleBook;

    return (
        // <div className="card bg-base-100 shadow-sm mx-auto border-2 border-dashed pt-5">
        //     <figure>
        //         <img className='h-[166px]'
        //         src={image}
        //         alt="Shoes" />
        //     </figure>
        //     <div className="card-body">
        //         <h2 className="card-title">{bookName}
        //         {/* <div className="badge badge-secondary">NEW</div> */}
        //         </h2>
        //         <h3>Book by: {author}</h3>
        //         <p>{review}</p>
        //         <div className='flex justify-between gap-5 text-green-400'>
        //             <div className="badge badge-outline">{category}</div>
        //             <div className="badge badge-outline">{rating} <FaStarHalfAlt /></div>
        //         </div>
        //     </div>
        // </div>

        <div className="card bg-base-100 shadow-sm mx-auto border-2 border-dashed pt-5">
            <div className='flex justify-around'>
                <figure>
                    <img className='h-[166px]'
                    src={image}
                    alt="Shoes" />
                </figure>
                <div>
                    <h2 className="card-title">{bookName}
                        {/* <div className="badge badge-secondary">NEW</div> */}
                    </h2>
                    <h3>Book by: {author}</h3>
                    <div className='text-green-400'>
                        <div>{category}</div>
                        <div className='flex items-center'>{rating}<span><FaStarHalfAlt /></span></div>
                    </div>
                </div>
            </div>
        <div className="card-body">
                <p>{review}</p>
            </div>
        </div>
    );
};

export default Book;