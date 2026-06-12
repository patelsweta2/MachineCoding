import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="shadow-md top-0">
      <div className="flex items-center justify-between px-6 py-2">
        <div>
          <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRjwfs5RnMcXs9RkT6i_q0zw2307JED1YnV0Xa0GHi2nEl5Zx8RVzfWIgYF&s=10" 
          alt="logo img" 
          className="w-12 h-12 rounded-full object-cover"
          />
        </div>
        <div className="font-bold text-2xl text-teal-900">
          <p>Welcome to Machine Coding Journey</p>
        </div>
        <div></div>
      </div>
      <ul className="flex items-center justify-center gap-6 px-2">
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
  )
}

export default Navbar;