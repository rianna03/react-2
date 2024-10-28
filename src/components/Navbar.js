import { Link } from "react-router-dom";
const Navbar = () => {
    return(
        <nav className="navbar">
            <h2> University </h2>
            <div className="links">
                <Link to="/"> Home </Link>
                <Link to="/getAllStudents">Students</Link>
                <Link to="/addStudent"> Add Student </Link>
                <Link to="/login"> Login </Link>


            </div>
        </nav>
    );
}

export default Navbar;