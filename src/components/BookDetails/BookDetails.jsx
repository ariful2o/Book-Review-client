import { useLoaderData, useParams } from 'react-router-dom';
import Details from "../Details/Details";

export default function BookDetails() {

    const { bookId } = useParams(); // Extract the bookId from URL parameters
    // console.log(bookId)
    const books = useLoaderData()
    // const [book, setBook] = useState()
    const book=books.find(book=>book.bookId===bookId)
    // console.log(book)

    return (
      
        <Details  book={book}></Details>
      
    )
}
