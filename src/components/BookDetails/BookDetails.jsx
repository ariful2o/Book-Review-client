import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import { useEffect, useState } from "react"

function BookDetails() {
    const { bookId } = useParams(); // Extract the bookId from URL parameters
    // console.log(bookId)

    const [books,setBooks]=useState([])
    useEffect(()=>{
      fetch('../../../public/books.json')
     .then(res=>res.json())
     .then(data=>setBooks(data))
    },[])

    const book = books.find(book => book.bookId === bookId);
    const{bookName,author,image,review,totalPages,rating,category,tags,yearOfPublishing}=book
 
    console.log(book)
    return (
        <div className='flex flex-col lg:flex-row'>
            <img src={image} alt="" />
            <div className="">
                <h2 className="text-3xl">{bookName}</h2>
                

            </div>
        </div>
    );
}

export default BookDetails;
