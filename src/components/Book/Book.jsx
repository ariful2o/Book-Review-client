import { FaRegStar } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export default function Book({ books }) {
    const { image, category, bookName, author, rating, bookId } = books;
// console.log(bookId)
    return (
        <NavLink to={`/book/${bookId}`} className="hover:no-underline">
            <div className="card w-auto lg:w-96 bg-base-100 rounded-xl shadow-2xl">
                <figure><img className="p-6" src={image} alt="book" /></figure>
                <div className="card-body">
                    <h4 className="text-[#23BE0A] my-4">{category} <span className="ml-8">Identity</span> </h4>
                    <h2 className="card-title my-2">
                        {bookName}
                    </h2>
                    <p className="mb-8">By : {author}</p><hr />
                    <div className="card-actions justify-between flex">
                        <div className="badge ">{category}</div>
                        <div className="badge ">{rating} <FaRegStar /></div>
                    </div>
                </div>
            </div>
        </NavLink>
    )
}
