// import React from "react";
// import { Link } from "react-router-dom";

// export const Navbar = () => {
// 	return (
// 		<nav className="navbar navbar-light bg-light">
// 			<div className="container">
// 				<Link to="/">
// 					<span className="navbar-brand mb-0 h1">React Boilerplate</span>
// 				</Link>
// 				<div className="ml-auto">
// 					<Link to="/demo">
// 						<button className="btn btn-primary">Check the Context in action</button>
// 					</Link>
// 				</div>
// 			</div>
// 		</nav>
// 	);
// };
import React from "react";
import { Link } from "react-router-dom";

import { useNavigate } from "react-router-dom";
import { Context } from "../store/appContext";
import { useContext} from "react";
// import  "../component/styles.css";

// "Link" paths just written are just for reference, should be changed later
export const Navbar = () => {
    const navigate = useNavigate();
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light border-bottom">
			<div className="container-fluid">
                        <Link to="/">
                           <h3>Home</h3>
                        </Link>
    
                    <div className="ml-auto">
                        <Link to="/login">
                            <button className="btn btn-primary me-1">Login</button>
                        </Link>
                        <Link to="/signup">
                            <button className="btn btn-primary">Signup</button>
                        </Link>
                    </div>
                    </div>
		</nav>
	);
};