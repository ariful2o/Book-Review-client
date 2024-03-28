import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { getLocalStoredBooks, saveBook } from '../utlitys/utilitys';

export default function Details({ book }) {
    const { bookName, image, author, category, review, tags, totalPages, publisher, yearOfPublishing, rating, bookId } = book

    const wishlist = () => { 
    const storedBooks=getLocalStoredBooks('wishlist');
    const storedBooksRead=getLocalStoredBooks('read')
    if (storedBooks.includes(bookId)) {
        toast.error("Already added to Wish List !")
    }
    else if(storedBooksRead.includes(bookId)) {
        toast.error("Already You Read the Book !")  
    }
    else {
        saveBook(bookId,'wishlist'), toast("Success to add to wishlist")
    }
};

    const readbooks = () => {
        const storedBooks=getLocalStoredBooks('read')
        if (storedBooks.includes(bookId)) {
            toast.error("Already added to read list !")
        } else {
            saveBook(bookId,'read'), toast("Success to add to read list")
        }
        // saveBook(bookId, 'read'),toast("Success to add Read Book") 
    };



    return (
        <div className='flex justify-center'>
            <img className='w-96 h-96 m-10' src={image} alt="" />
            <div className="">
                <h2 className='text-3xl font-bold'>{bookName}</h2>
                <p className='my-3  '>By: {author}</p><hr />
                <p className='my-4'>{category}</p><hr />
                <p className="my-3"><span className='font-bold'>review:  </span>{review}</p>
                <div className="text-black flex my-4">
                    Tags : {
                        tags.map((tag, idx) => {
                            return (
                                <h4 key={idx} className="text-[#23BE0A]  px-2 py-1 rounded-full mr-2">
                                    #{tag}
                                </h4>
                            )
                        })
                    }
                </div><hr />
                <div className="my-8">
                    <div className="overflow-x-auto">
                        <table className="table table-zebra">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Number of Pages:</th>
                                    <th>{totalPages}</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                <tr>
                                    <th>Publisher:</th>
                                    <td>{publisher}</td>
                                </tr>
                                {/* row 2*/}
                                <tr>
                                    <th>Year of Publishing:</th>
                                    <td>{yearOfPublishing}</td>
                                </tr>
                                {/* row 3 */}
                                <tr>
                                    <th>Rating:</th>
                                    <td>{rating}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
                <div className="flex gap-6 my-4">
                    <button onClick={readbooks} className="btn btn-outline bg-slate-300 py-2 px-6">Read</button>
                    <button onClick={wishlist} className="btn bg-[#50B1C9] text-white">Wishlist</button>
                    <ToastContainer />
                </div>
            </div>
        </div>
    )
}
