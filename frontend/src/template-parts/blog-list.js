import React from "react";
import Link from "next/link";
import "../styles/blog-card.css";

const serverBaseUrl = "http://localhost:1337";
const data 		    = await fetch(serverBaseUrl+"/api/articles?populate=*");
const response  	= await data.json();

console.log(response.data);
export default function BlogList() {
    return (
        <div className="container bg-light" style={{ marginTop: '5rem' }}>
            <div className="row row-cols-1 g-4 blog-card-row">
                {
                    response.data.map((item) => {
                        return(
                            <div key={item.id} className="col col-lg-4 col-3 col-sm-6 blog-card-wrap">
                                <div className="card h-100">
                                    <img src={serverBaseUrl+item.cover.url} className="card-img-top blog-card-img" alt="Blog" />
                                    <div className="card-body">
                                        <h5 className="card-title">
                                            <Link href={`/${item.category.slug}/${item.slug}`}>
                                                {item.title}
                                            </Link>
                                        </h5>
                                        <p className="card-text">
                                            {
                                                
                                                `${item.description.substring(0, 50)}...`
                                            }
                                        </p>
                                        <div className="d-flex justify-content-between 
                                            align-items-center row">
                                            <div>
                                                <p className="m-0 small col">
                                                    {"posted by "}
                                                    {item.author.name}
                                                </p>
                                                <small className="text-muted">
                                                    {item.date}
                                                </small>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="card-footer">
                                        <Link href={`/${item.category.slug}/${item.slug}`}>
                                            <button className='btn btn-success'>
                                                Read more
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    );
}
