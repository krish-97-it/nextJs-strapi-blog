import Link from "next/link";
import { useState } from "react";
import "../styles/blog-card.css"

const RelatedBlogsCarousel = ({ postResponse, serverBaseUrl }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setActiveIndex(selectedIndex);
    };

    return (
        <div className="col-sm-12 mt-4 related-blog-section">
            <h2 className="text-2xl text-center font-semibold text-gray-800 mb-4">Related Blogs</h2>
            <div id="relatedBlogsCarousel" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    {postResponse && postResponse.map((_, index) => (
                        <button 
                            key={index} 
                            type="button" 
                            data-bs-target="#relatedBlogsCarousel" 
                            data-bs-slide-to={index} 
                            className={index === activeIndex ? "active" : ""} 
                            aria-current={index === activeIndex ? "true" : "false"} 
                            aria-label={`Slide ${index + 1}`}
                        ></button>
                    ))}
                </div>
                <div className="carousel-inner">
                    {postResponse && postResponse.map((data, index) => (
                        <div key={data.id} className={`carousel-item ${index === activeIndex ? 'active' : ''}`}>
                            <Link href={`/${data.category.slug}/${data.slug}`} className="col col-lg-4 col-3 col-sm-6 blog-card-wrap">
                                <div className="card h-100">
                                    <img src={serverBaseUrl + data.cover.url} className="card-img-top blog-card-img" alt="Blog" />
                                    <div className="card-body">
                                        <h5 className="card-title">{data.title}</h5>
                                        <p className="card-text">
                                            {data.description.split(' ').length > 6
                                                ? data.description.split(' ').slice(0, 11).join(' ') + '...'
                                                : data.description}
                                        </p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#relatedBlogsCarousel" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#relatedBlogsCarousel" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <style jsx>{`
                .styled-carousel-btn {
                    width: 60px;
                    height: 60px;
                    background: linear-gradient(135deg, #ff7e5f, #feb47b);
                    border-radius: 50%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    transition: transform 0.3s ease, background 0.3s ease;
                    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
                }
                .styled-carousel-btn:hover {
                    transform: scale(1.1);
                    background: linear-gradient(135deg, #ff6a5f, #fe947b);
                }
                .styled-carousel-icon {
                    filter: invert(1);
                    width: 24px;
                    height: 24px;
                }

                .carousel-indicators {
                    bottom: -42px;
                }
                .carousel-indicators button {
                    background-color: #ff7e5f;
                    border: none;
                    width: 12px;
                    height: 12px;
                    border-radius: 50%;
                    margin: 0 5px;
                    transition: background-color 0.3s ease;
                }
                .carousel-indicators .active {
                    background-color: #feb47b;
                    width: 14px;
                    height: 14px;
                }
            `}</style>
        </div>
    );
};

export default RelatedBlogsCarousel;