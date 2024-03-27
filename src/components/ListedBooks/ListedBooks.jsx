import { useLoaderData } from "react-router-dom"
import { getLocalStoredBooks } from "../utlitys/utilitys"
import { useEffect, useState } from "react"
import WishlistBook from "../WishlistBook/WishlistBook"


export default function ListedBooks() {

  const [listbooks, setListBooks] = useState([])
  const books = useLoaderData()
  useEffect(() => {
    const wishlistbooks = getLocalStoredBooks('wishlist')
    if (books.length > 0) {
      const wishlist = books.filter(book => wishlistbooks.includes(book.bookId))
      setListBooks(wishlist)
    }
  }, [])

  const [readBook, setReadBooks] = useState([])
  // const books=useLoaderData()
  useEffect(() => {
    const wishreadBook = getLocalStoredBooks('read')
    if (books.length > 0) {
      const wishlist = books.filter(book => wishreadBook.includes(book.bookId))
      setReadBooks(wishlist)
    }
  }, [])

  // console.log(listbooks)


  // const book=books.filter(book=>book.bookId===bookId)
  const Sort = (e) => {
    e.preventDefault()
  }


  return (
    <div>
      <h2 className='text-3xl font-bold text-center bg-slate-100 py-4 my-8 '>Books</h2>

      <div className="justify-center flex my-8">
        <form onChange={Sort}>
          <select className="select select-accent w-full max-w-[200px] text-center bg-[#23BE0A] text-white">
            <option disabled selected>Sort By</option>
            <option>Rating</option>
            <option>Number of pages</option>
            <option>Publisher year</option>
          </select>
        </form>
      </div>

      <div role="tablist" className="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read Books" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">{
          readBook.map((book) => {
            return <WishlistBook book={book} key={book.bookId} />
          })
        }</div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist Books" checked />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">{
          listbooks.map((book) => {
            return <WishlistBook key={book.bookId} book={book}></WishlistBook>

          })
        }</div>
      </div>
    </div>
  )
}
