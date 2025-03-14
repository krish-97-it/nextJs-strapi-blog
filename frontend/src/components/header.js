import React from "react";
import Link from "next/link";
import "../styles/header.css";
import Icon from "../assests/logo.webp";
import Image from "next/image";

const Navbar = () => {
    return(
        // Header Section
        <header>
            <nav className="navbar navbar-dark bg-dark fixed-top navbar-expand-md navbar-custom-style">
                <div className="container-fluid">
                    <Link className="navbar-brand" href="/">
                        <Image src={Icon} alt="Blogs" style={{height:"36px", width:"36px", borderRadius:"6px"}}/>
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                    <div className="offcanvas-header">
                        <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">Dark offcanvas</h5>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                        <li className="nav-item">
                            <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li>
                                <hr className="dropdown-divider"></hr>
                            </li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                            </ul>
                        </li>
                        </ul>
                        {/* <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                            <button className="btn btn-success" type="submit">Search</button>
                        </form> */}
                    </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
export default Navbar;