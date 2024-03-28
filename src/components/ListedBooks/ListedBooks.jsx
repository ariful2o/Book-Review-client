import { useEffect, useState } from "react"
import { useLoaderData } from "react-router-dom"
import WishlistBook from "../WishlistBook/WishlistBook"
import { getLocalStoredBooks } from "../utlitys/utilitys"


export default function ListedBooks() {
  const [listbooks, setListBooks] = useState([])
  const [sort, setSort] = useState([])
  
  
  const [selectedValue, setSelectedValue] = useState("");
  const handleSelectChange = (event) => {
    setSelectedValue(event.target.value);   
  };
  

  useEffect(() => {
    // const wishlistbooks = getLocalStoredBooks('wishlist');
    if (listbooks.length > 0) {
      let sortedBooks = [...listbooks];
      if (selectedValue === "Rating") {
        sortedBooks = sortedBooks.sort((a, b) => b.rating - a.rating);
      } else if (selectedValue === "Numberofpages") {
        sortedBooks = sortedBooks.sort((a, b) => b.totalPages - a.totalPages);
      } else if (selectedValue === "Publisheryear") {
        sortedBooks = sortedBooks.sort((a, b) => b.yearOfPublishing - a.yearOfPublishing);
      }
      setSort(sortedBooks);
    }
  }, [selectedValue, listbooks]);



  const books = useLoaderData()
  useEffect(() => {
    const wishlistbooks = getLocalStoredBooks('wishlist')
    if (books.length > 0) {
      const wishlist = books.filter(book => wishlistbooks.includes(book.bookId))
      setListBooks(wishlist)
      setSort(wishlist)

    }
  }, [])

  const [readBook, setReadBooks] = useState([])
  // const books=useLoaderData()
  useEffect(() => {
    const wishreadBook = getLocalStoredBooks('read')
    if (books.length > 0) {
      const reads = books.filter(book => wishreadBook.includes(book.bookId))
      setReadBooks(reads)
      setSort(reads)
    }
  }, [])

  // console.log(listbooks)


  // const book=books.filter(book=>book.bookId===bookId)


  return (
    <div>
      <h2 className='text-3xl font-bold text-center bg-slate-100 py-4 my-8 '>Books</h2>

      <div className="justify-center flex my-8">
        <select onChange={handleSelectChange} // Attach the event handler to the select element
      value={selectedValue}  className="select select-accent w-full max-w-[200px] text-center bg-[#23BE0A] text-white" name="selectedFruit">
          <option disabled selected>Sort By</option>
          <option value="Rating">Rating</option>
          <option value="Numberofpages">Number of pages</option>
          <option value="Publisheryear">Publisher year</option>
        </select>
      </div>
      {/* <button className="bg-red-300" onClick={handlerSort}>sotr</button> */}

      <div role="tablist" className="tabs tabs-lifted">
        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Read" />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">{
          readBook.map((book) => {
            return <WishlistBook book={book} key={book.bookId} />
          })
        }</div>

        <input type="radio" name="my_tabs_2" role="tab" className="tab" aria-label="Wishlist" checked />
        <div role="tabpanel" className="tab-content bg-base-100 border-base-300 rounded-box p-6">{
          sort.map((book) => {
            return <WishlistBook key={book.bookId} book={book}></WishlistBook>

          })
        }</div>
      </div>
    </div>
  )
}
