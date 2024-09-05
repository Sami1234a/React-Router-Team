import { Link } from "react-router-dom"

const Header = () => {
  return <>
  <nav className='bg-blue-400 p-2 sticky left-0 top-0 w-full'>
           <div className="container m-auto flex justify-between items-center">
           <div className="logo">
                <img className='w-[50px] h-[50px] object-cover' src="http://logos-download.com/wp-content/uploads/2016/09/React_logo_logotype_emblem.png" alt="" />
            </div>

            <div className="menu">
                <ul className='flex gap-8'>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/team">Teams</Link></li>
                    <li><Link to="/blog">Blog</Link></li>
                </ul>
            </div>
           </div>
        </nav>
  </>
}

export default Header