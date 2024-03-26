import { NavLink } from 'react-router-dom'
import BannerImage from '../../../public/image/pngwing 1.png'
export default function Banner() {
    return (
        <div className="mx-auto  bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse justify-between m-8">
                <img className='max-w-3xl ' src={BannerImage} />
                <div className='max-w-96 mx-auto'>
                    <h1 className="text-2xl lg:text-4xl font-bold">Books to freshen up your bookshelf</h1>
                    <NavLink to='/BookList' className="btn bg-[#23BE0A] my-8 text-white">View The List</NavLink>
                </div>
            </div>
        </div>
    )
}
