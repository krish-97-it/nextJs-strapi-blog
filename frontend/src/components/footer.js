import React from "react";
import Link from "next/link";
import "../styles/footer.css";

const Footer = () => {
    return (
        <footer className="bg-dark text-white pt-5 pb-4">
            <div className="container">
                <div className="row text-center text-md-start">
                    <div className="col-md-4 col-lg-3">
                        <h5 className="fw-bold text-uppercase">About Us</h5>
                        <p className="text-muted">Sharing insights, stories, and trends. Stay inspired with our latest blog updates!</p>
                    </div>

                    <div className="col-md-2 col-lg-2">
                        <h5 className="fw-bold text-uppercase">Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><Link href="#" className="text-muted text-decoration-none">Home</Link></li>
                            <li><Link href="#" className="text-muted text-decoration-none">About</Link></li>
                            <li><Link href="#" className="text-muted text-decoration-none">Blog</Link></li>
                            <li><Link href="#" className="text-muted text-decoration-none">Contact</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-2 col-lg-2">
                        <h5 className="fw-bold text-uppercase">Categories</h5>
                        <ul className="list-unstyled">
                            <li><Link href="#" className="text-muted text-decoration-none">Technology</Link></li>
                            <li><Link href="#" className="text-muted text-decoration-none">Lifestyle</Link></li>
                            <li><Link href="#" className="text-muted text-decoration-none">Travel</Link></li>
                            <li><Link href="#" className="text-muted text-decoration-none">Food</Link></li>
                        </ul>
                    </div>

                    <div className="col-md-4 col-lg-3">
                        <h5 className="fw-bold text-uppercase">Newsletter</h5>
                        <form>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Enter your email"/>
                                <button className="btn btn-primary">Subscribe</button>
                            </div>
                        </form>
                    </div>

                    <div className="col-md-12 col-lg-2 text-center text-lg-end">
                        <h5 className="fw-bold text-uppercase">Follow Us</h5>
                        <div>
                            <Link href="#" className="text-white me-3"><i className="fab fa-facebook fa-lg"></i></Link>
                            <Link href="#" className="text-white me-3"><i className="fab fa-twitter fa-lg"></i></Link>
                            <Link href="#" className="text-white me-3"><i className="fab fa-instagram fa-lg"></i></Link>
                            <Link href="#" className="text-white"><i className="fab fa-linkedin fa-lg"></i></Link>
                        </div>
                    </div>
                </div>

                <hr className="bg-secondary"/>

                <div className="text-center text-muted">
                    <p className="mb-0">© 2025 Your Blog Name | All Rights Reserved</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;