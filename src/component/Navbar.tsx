import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 60);
    }
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }

  }, [])

  return (
    <div className={`shadow-md top-0 sticky z-50 bg-[#020024] transition-all duration-300 ${isScrolled ? "h-16" : "h-24"} overflow-hidden`}>
      {/* STATE 1 - NORMAL LAYOUt */}
      <div className={`transition-all duration-300 ${isScrolled ? "opacity-0 invisible h-0" : "opacity-100 visible"}`}>
        <div className="flex items-center justify-between px-6 py-2">
          <div >
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjwfs5RnMcXs9RkT6i_q0zw2307JED1YnV0Xa0GHi2nEl5Zx8RVzfWIgYF&s=10"
              alt="logo img"
              className="w-12 h-12 rounded-full object-cover"
            />
          </div>
          <div className="font-bold text-2xl text-teal-800">
            <p>Welcome to Machine Coding Journey</p>
          </div>
          <div></div>
        </div>
        <ul className="flex items-center justify-center gap-6 px-2 text-white">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="">About</Link>
          </li>
          <li>
            <Link to="">Section</Link>
          </li>
        </ul>
      </div>
      {/* STATE 2 - SCROLLED LAYOUT */}
      <div className={`transition-all duration-300 ${isScrolled ? "opacity-100 visible h-full" : "opacity-0 invisible h-0"}`}>

        <div className="flex items-center justify-between h-full px-6">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjwfs5RnMcXs9RkT6i_q0zw2307JED1YnV0Xa0GHi2nEl5Zx8RVzfWIgYF&s=10"
            alt="logo img"
            className="w-12 h-12 rounded-full object-cover"
          />
          <ul className="flex items-center gap-6 text-white">
            <li><Link to="/">Home</Link></li>
            <li><Link to="">About</Link></li>
            <li><Link to="">Section</Link></li>
          </ul>
          <div></div>
        </div>
      </div>

    </div>
  )
}

export default Navbar;