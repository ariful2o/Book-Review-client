import { CiLocationOn } from "react-icons/ci";
import { IoMdContacts } from "react-icons/io";
import { MdOutlineContactPage } from "react-icons/md";
import { NavLink } from "react-router-dom";

export default function WishlistBook({ book }) {
  const { bookName, image, author, category, tags, totalPages, publisher, yearOfPublishing, rating, bookId } = book
  return (
    <div>
      <div className=" bg-base-100 shadow-xl p-0 lg:p-8 flex flex-col lg:flex-row">
        <figure><img className="p-0 lg:p-5 mr-0 lg:mr-8 w-full" src={image} alt="books" /></figure>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>By : {author}</p>
          <div className="text-black flex flex-col lg:flex-row my-4 items-center">
            <div className="flex flex-col lg:flex-row my-6">
              Tags : {
                tags.map((tag, idx) => {
                  return (
                    <h4 key={idx} className="text-[#23BE0A]  px-2 py-1 rounded-full mr-2">
                      #{tag}
                    </h4>
                  )
                })
              }
            </div>
            <div className="flex items-center">
              <CiLocationOn /><span className="ml-4"> Year of Publishing: {yearOfPublishing}</span>
            </div>

          </div>
          <div className="flex  flex-col lg:flex-row items-center gap-10">
            <div className="flex items-center gap-3">
              <IoMdContacts />
              <p>Publisher: {publisher} </p>
            </div>
            <div className="flex items-center gap-3">
              <MdOutlineContactPage />
              <span> Page : {totalPages}</span>
            </div>
          </div>
          <hr />
          <div className="grid grid-cols-1 md:grid-cols-7 items-center justify-center">
            <div className="badge py-5 bg-[#328EFF26] text-[#328EFF]">Category :{category}</div>
            <div className="badge text-[#FFAC33] my-4">Rating :{rating}</div>
            <NavLink to={`/book/${bookId}`} className="btn w-40 bg-[#23BE0A70] rounded-3xl">View Details</NavLink>
          </div>
        </div>
      </div>
    </div>
  )
}
