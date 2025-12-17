import {BrowserRouter, Link, NavLink, Route, Routes, useParams} from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import Product from "./pages/Product"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import Mobile from "./pages/Mobile"
import Laptop from "./pages/Laptop"

const App = () => {

  function User(){
    console.log(useParams())
    const {id} = useParams()
    return <h2>User Profile for ID: {id}</h2>
  }




  return (
    <div className='min-h-screen bg-black text-white flex flex-col items-center pt-5 gap-10'>
      <h1 className='text-3xl font-bold'>React Router Dom</h1>
      <nav className="flex gap-4">

        <NavLink 
          to='/'
          className={({isActive})=> isActive ? "text-red-400" : "text-white"}
        >
          Home
        </NavLink>
        <NavLink 
          to='/about'
          className={({isActive})=> isActive ? "text-red-400" : "text-white"}
        >
          About
        </NavLink>
        <NavLink 
          to='/product'
          className={({isActive})=> isActive ? "text-red-400" : "text-white"}
        >
          Product
        </NavLink>
        <NavLink 
          to='/user/00215'
          className={({isActive})=> isActive ? "text-red-400" : "text-white"}
        >
          User
        </NavLink>
        <NavLink 
          to='/contact'
          className={({isActive})=> isActive ? "text-red-400" : "text-white"}
        >
          Contact
        </NavLink>




        {/* <Link to='/'>Home</Link>
        <Link to='/about'>About</Link>
        <Link to='/product'>Product</Link>
        <Link to='/user/10'>User</Link>
        <Link to='/contact'>Contact</Link> */}
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/product" element={<Product />} >
            <Route path="mobile" element={<Mobile />} />
            <Route path="laptop" element={<Laptop />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/user/:id" element={<User />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

    </div>
  )
}

export default App
