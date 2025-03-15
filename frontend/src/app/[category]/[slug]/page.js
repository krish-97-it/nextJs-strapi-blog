
"use client"
import React, { useState, useEffect } from 'react';
import MarkdownHTML from '@/components/MarkdownHTML';
import Link from 'next/link';
import { useParams } from 'next/navigation'
import axios from 'axios';
import RelatedBlogsCarousel from '@/template-parts/related-blogs';

export default function SinglePostPage(){
    const params = useParams();
    const { category } = params;
    const { slug } = params;
    const [response, setBlog] = useState('');
    const [postResponse, setPost] = useState();
    const [mediaData, setMediaData] = useState(null);
    const serverBaseUrl = "http://localhost:1337";

    // Fetch blog data
    const fetchData = async () => {
        const url = `http://localhost:1337/api/articles?sort[0]=title:asc&filters[slug][$eq]=${slug}&status=published&locale[0]=en&populate=*`;
        const postData = await fetch(url, { cache: 'no-store' });
        const response = await postData.json();
        setBlog(response);
        // document.title = `${response.data[0].title} | Harry's Developer Portfolio`;
    };

    // Fetch related posts
    const fetchRelatedPosts = async () => {
        const url = `http://localhost:1337/api/articles?populate=*`;
        const data2 = await fetch(url, { cache: 'no-store' });
        const postResponse = await data2.json();
        const removeActivePost = postResponse.data.filter(item => item.slug != params.slug);

        console.log(removeActivePost);
        setPost(removeActivePost);
    };


    useEffect(() => {
        fetchData();
        fetchRelatedPosts();
        // fetchMedia();    
    }, []);


    if(!response || response == undefined || response.data.length === 0){
        return (
            <main id="main-content" className="main-content">
                <div className='container'>Page not found</div>
            </main>
        )
    }else{
        if((response.data[0].category.slug) != category){
            return (
                <main id="main-content" className="main-content">
                    <div className='container'>Page not found</div>
                </main>
            )
        }
    }

    return(
        <main id="main-content" className="main-content" page-type="blogs" page-title={response && response.data[0].title}>
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <div className="row">
                            <div className="col-sm-12">
                                <div className="row custom-blog-post-section">
                                    <article>
                                        <div className="col-sm-12">
                                            <h1 className="blog-post-heading">
                                                {response && response.data[0].title}
                                            </h1>
                                        </div>
                                        
                                        <div className="col-sm-12 author-name-section">
                                            <p><span className="author-name-p">Author: </span>{response && response.data[0].author.name}</p>
                                        </div>

                                        <div className="col-sm-12">
                                            <img src={serverBaseUrl+response.data[0].cover.url} className="w-100" alt="Blog" />
                                        </div>

                                        <div className="col-sm-12 mb-4">

                                            {response && response.data[0].blocks.map((item) => {
                                                switch (item["__component"]) {
                                                    case "shared.rich-text":
                                                        return <MarkdownHTML markdown={item.body} key={item.id} />;

                                                    case "shared.quote":
                                                        return (
                                                            <blockquote className="my-4" key={item.id}>
                                                                <p>{item.body}</p>
                                                                <cite>— {item.title}</cite>
                                                            </blockquote>
                                                        );


                                                    case "media.image":
                                                        return (
                                                            <div key={item.id} className="my-4 slider">
                                                                <p>{item.body}</p>
                                                            </div>
                                                        );

                                                    case "shared.slider":
                                                        return (
                                                            <div key={item.id} className="my-4 slider">
                                                                {item.image && <img src={item.image} alt="slider media" className="w-full h-auto" />}
                                                                {item.video && (
                                                                    <video controls className="w-full">
                                                                        <source src={item.video} type="video/mp4" />
                                                                        Your browser does not support the video tag.
                                                                    </video>
                                                                )}
                                                                <p>{item.body}</p>
                                                            </div>
                                                        );

                                                    default:
                                                        return null;
                                                }
                                            })}
                                        </div>
                                    </article>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Related Posts Section */}
                    <RelatedBlogsCarousel postResponse={postResponse} serverBaseUrl={serverBaseUrl}/>
                </div>
            </div>
        </main>
    )
}