import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import CoustomChart from '../CoustomChart/CoustomChart'
import { getLocalStoredBooks } from "../utlitys/utilitys"

export default function PagestoRead() {
  const [readAllBook, setReadAllBooks] = useState([])
  const books = useLoaderData()
  useEffect(() => {
    const wishlistbooks = getLocalStoredBooks('read')
    if (books.length > 0) {
      const wishlist = books.filter(book => wishlistbooks.includes(book.bookId))
      setReadAllBooks(wishlist)
    }
  }, [])
  // console.log(readAllBook)
  return (
    <div className="my-20">
      <CoustomChart readAllBook={readAllBook}></CoustomChart>
    </div>
  )
}
