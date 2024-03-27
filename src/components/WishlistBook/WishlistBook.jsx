import { CiLocationOn } from "react-icons/ci";
import { IoMdContacts } from "react-icons/io";
import { MdOutlineContactPage } from "react-icons/md";

export default function WishlistBook({ book }) {
  const { bookName, image, author, category, tags, totalPages, publisher, yearOfPublishing, rating } = book
  return (
    <div>
      <div className="card card-side bg-base-100 shadow-xl p-8">
        <figure><img className="p-5 mr-8" src={image} alt="books" /></figure>
        <div className="card-body">
          <h2 className="card-title">{bookName}</h2>
          <p>By : {author}</p>
          <div className="text-black flex my-4 items-center">
            Tags : {
              tags.map((tag, idx) => {
                return (
                  <h4 key={idx} className="text-[#23BE0A]  px-2 py-1 rounded-full mr-2">
                    #{tag}
                  </h4>
                )
              })
            }
            <CiLocationOn /><span className="ml-4"> Year of Publishing: {yearOfPublishing}</span>

          </div>
          <div className="flex items-center gap-10">
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
          <div className="card-actions items-center">
            <div className="badge py-5 bg-[#328EFF26] text-[#328EFF]">Category :{category}</div>
            <div className="badge text-[#FFAC33] mx-8">Rating :{rating}</div>
            <button className="btn bg-[#23BE0A] rounded-3xl text-white">View Details</button>
          </div>
        </div>
      </div>
    </div>
  )
}
