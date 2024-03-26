import { useEffect, useState } from "react"
import Book from "../Book/Book"

export default function Books() {
  const [books,setBooks]=useState([])
  useEffect(()=>{
    fetch('books.json')
   .then(res=>res.json())
   .then(data=>setBooks(data))
  },[])
  return (
    <div>
        <h1 className="text-center font-bold text-2xl italic my-20">Books</h1>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         {
          books.map((books)=>{
            return(
              <Book books={books} key={books.bookId} ></Book>
            )
          })
         }
        </div>
    </div>
  )
}
