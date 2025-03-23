# ⭐ nextJs-strapi-blog ⭐
It is a Blog / personal portfolio website using Next Js and Strapi


##  🚀 Routing in Next.js
+ Next.js has two types of routing systems:
+ Page Router (pages/ folder - Traditional routing)
+ App Router (app/ folder - New in Next.js 13+, uses React Server Components)

### Let’s go step by step.

1️⃣ <ins>Page Router (Traditional pages/ Routing)</ins> - 
+ Next.js automatically maps files inside the pages/ folder to routes. No need to define routes manually (like in React Router).
+ Basic Example<br>
  📁 pages/index.js → Available at /
  ```
      export default function Home() {
         return <h1>Home Page</h1>;
      }
  ```

  📁 pages/about.js → Available at /about
  ```
      export default function About() {
         return <h1>About Page</h1>;
      }
  ```
+ <ins>✅ Go to http://localhost:3000/about to see the About page.</ins>

2️⃣ <ins>App Router (New app/ Routing - Next.js 13+)</ins>
+ Uses React Server Components by default.
+ Follows a nested folder structure.
+ Basic Example<br>
  📁 app/page.js → Available at /
  ```
      export default function Home() {
         return <h1>Home Page (App Router)</h1>;
      }
  ```
  
  📁 app/about/page.js → Available at /about
  ```
      export default function About() {
         return <h1>About Page (App Router)</h1>;
      }
  ```

+ ✅ Go to http://localhost:3000/about and see the new structure in action.

3️⃣ <ins>Nested Routing (Two-Level Routing)</ins>
+ In the App Router (app/ folder), you can create nested routes using subfolders.
+ Example: Blog with Nested Routing<br>
  📁 app/<br>
   │── page.js # Home (`/`)<br>
   │── about/<br>
   │ ├── page.js # About Page (`/about`)<br>
   │── blog/<br>
   │ ├── page.js # Blog List (`/blog`)<br>
   │ ├── post/<br>
   │ ├── page.js # Blog Post (`/blog/post`)<br>
  
 📁 app/blog/page.js
 ```
      export default function Blog() {
         return <h1>Blog Page</h1>;
      }
 ```

 📁 app/blog/post/page.js
 ```
      export default function Post() {
         return <h1>Single Blog Post</h1>;
      }
 ```

+ ✅ URL Paths Generated<br>
  /blog → Blog List
  /blog/post → Single Blog Post



## 🚀 Dynamic Routing in Next.js 🚀
Dynamic routing allows us to create routes with dynamic parameters like /blog/:id. Next.js supports dynamic routes in both the Page Router (pages/) and App Router (app/).

1️⃣ Dynamic Routes in Page Router (pages/ folder)
+ In the pages/ directory, we use square brackets [ ] to define dynamic segments.
+ Example: Blog Post with Dynamic ID<br>
  📁 pages/<br>
   │── index.js # Home Page (`/`)<br>
   │── blog/<br>
   │ ├── index.js # Blog List (`/blog`)<br>
   │ ├── [id].js # Dynamic Blog Post (`/blog/:id`)<br>
  ```
      import { useRouter } from "next/router";
      export default function BlogPost() {
         const router = useRouter();
         const { id } = router.query; // Get dynamic ID
         return <h1>Blog Post ID: {id}</h1>;
      }
  ```
+ ✅ Try visiting: http://localhost:3000/blog/123
  🔹 Output: "Blog Post ID: 123"


2️⃣ Dynamic Routes in App Router (app/ folder)
+ In Next.js 13+ (App Router), we use square brackets [ ] as a folder name.
+ Example: Dynamic Blog Post<br>
  📁 app/<br>
      │── page.js # Home Page (`/`)<br>
      │── blog/<br>
      │ ├── page.js # Blog List (`/blog`)<br>
      │ ├── [id]/<br>
      │ ├── page.js # Dynamic Blog Post (`/blog/:id`)<br>

  📁 app/blog/[id]/page.js
  ```
      export default function BlogPost({ params }) {
       return <h1>Blog Post ID: {params.id}</h1>;
      }
  ```


+ ✅ Try visiting: http://localhost:3000/blog/123
  🔹 Output: "Blog Post ID: 123"

3️⃣ Catch-All Routes (...slug)
+ Sometimes, we need to handle multiple dynamic segments like /docs/nextjs/setup.
+ Example: Handling Multiple Dynamic Segments<br>
  📁 pages/<br>
      │── docs/<br>
      │ ├── [...slug].js # Matches `/docs/anything/here`<br>

  📁 pages/docs/[...slug].js
  ```
      import { useRouter } from "next/router";
      export default function Docs() {
         const router = useRouter();
         const { slug } = router.query;
         
         return <h1>Docs: {slug?.join(" / ")}</h1>;
      }
  ```

## How to render content [CSR and SSR]
## 🌍 Client-Side Rendering (CSR) 🌍
+ In Client-Side Rendering, the page is rendered in the browser using JavaScript. The initial page load is minimal, and then Next.js fetches data after the page loads.<br>
+ <ins>How it Works:</ins>
  + The page loads with minimal HTML.
  + Next.js fetches data from Strapi on the client-side using useEffect() or React Query.
  + The user sees a loading state until the data is fetched.
+ When to Use CSR:
  + ✅ When SEO is not critical (e.g., user dashboards, admin panels).
  + ✅ When the data is frequently changing (e.g., real-time updates, user-specific content).
  + ✅ When reducing server load is important (shifts processing to the client).

+ 🛠 <ins>How to Implement CSR</ins>
  + Use the useEffect hook to fetch data after the component mounts.
    ```
      import { useEffect, useState } from "react";
      export default function Blog() {
        const [posts, setPosts] = useState([]);
        const [loading, setLoading] = useState(true);
      
        useEffect(() => {
          fetch("http://localhost:1337/api/posts")
            .then((res) => res.json())
            .then((data) => {
              setPosts(data.data);
              setLoading(false);
            });
        }, []);
      
        if (loading) return <p>Loading...</p>;
      
        return (
          <div>
            <h1>Blog Posts</h1>
            {posts.map((post) => (
              <div key={post.id}>
                <h2>{post.attributes.title}</h2>
                <p>{post.attributes.content}</p>
              </div>
            ))}
          </div>
        );
      }
    ```
+ 📌 <ins>Key Notes:</ins>
  + Data is fetched after the page is loaded.
  + No SEO benefits since search engines see an empty page at first.
  + Great for interactive apps where content frequently updates.<br>

## ⚡ Server-Side Rendering (SSR)
+ In Server-Side Rendering, Next.js pre-renders the page on the server for every request. This ensures that the client receives a fully rendered HTML page with data.
+ <ins>How it Works:</ins>
  + The page is pre-rendered on the server before being sent to the browser.
  + Data is fetched on every request using getServerSideProps().
  + SEO is better because the full HTML is sent to the browser.
+ <ins>When to Use SSR ?</ins>
  + ✅ When SEO is important (e.g., landing pages, blogs, e-commerce).
  + ✅ When the content needs to be fresh on every request.
  + ✅ When you want to avoid exposing API keys in the frontend.
  + ✅ When you need to handle authentication before rendering a page.

+ 🛠 <ins>How to Implement SSR</ins><br>
  + Use getServerSideProps to fetch data at request time.
    ```
       export async function getServerSideProps() {
          const res = await fetch("http://localhost:1337/api/posts");
          const data = await res.json();
        
          return {
            props: { posts: data.data }, 
          };
       }
      
       export default function Blog({ posts }) {
          return (
            <div>
              <h1>Blog Posts</h1>
              {posts.map((post) => (
                <div key={post.id}>
                  <h2>{post.attributes.title}</h2>
                  <p>{post.attributes.content}</p>
                </div>
              ))}
            </div>
          );
       }
    ```
+ 📌 <ins>Key Notes:</ins>
  + Better for SEO because the page is fully rendered on the server.
  + Slower than CSR since it renders on every request.
  + Good for frequently updated content (e.g., news, logged-in user content).

## 🎯 Key Differences: CSR vs. SSR
<img width="661" alt="Screenshot 2025-03-23 at 1 21 22 PM" src="https://github.com/user-attachments/assets/915db67d-94fe-4c57-baff-2bd7f1e4b540" />


## In case you are using app router for nextjs with strapi
+ In Next.js App Router, the approach to data fetching changes because it uses React Server Components (RSC) and Server Actions instead of getStaticProps and getServerSideProps. Here's how it works with Strapi:
+ <ins>Equivalent of getStaticProps (Static Data Fetching)</ins>
  + Use fetch() inside a Server Component (e.g., directly in a page or layout).
  + The data is fetched at build time (or revalidated with ISR).
  + Example in App Router (app/blog/page.js)
    ```
      export default async function Blog() {
        const res = await fetch("https://your-strapi-site.com/api/posts", {
          next: { revalidate: 10 }, // ISR: Re-fetch data every 10 seconds
        });
        const data = await res.json();
      
        return (
          <div>
            <h1>Blog Posts</h1>
            {data.data.map((post) => (
              <div key={post.id}>
                <h2>{post.attributes.title}</h2>
                <p>{post.attributes.content}</p>
              </div>
            ))}
          </div>
        );
      }
    ```
  + 🔹 Key Points:
    + Uses fetch() inside a Server Component (no need for getStaticProps).
    + The { next: { revalidate: 10 } } option enables ISR (Incremental Static Regeneration).
    + Best for static pages like blogs.

+ <ins>Equivalent of getServerSideProps (Dynamic Data Fetching)</ins>
  + Use fetch() inside a Server Component but without ISR.
  + The data is fetched on every request, similar to SSR.
  + Example in App Router (app/blog/page.js)
    ```
      export default async function Blog() {
        const res = await fetch("https://your-strapi-site.com/api/posts", {
          cache: "no-store", // Fetch fresh data every time
        });
        const data = await res.json();
      
        return (
          <div>
            <h1>Blog Posts</h1>
            {data.data.map((post) => (
              <div key={post.id}>
                <h2>{post.attributes.title}</h2>
                <p>{post.attributes.content}</p>
              </div>
            ))}
          </div>
        );
      }
    ```
  + 🔹 Key Points:
    + Uses fetch() with cache: "no-store" (disables caching, like SSR).
    + Ensures fresh data on every request.
    + Best for authenticated pages, dashboards, or real-time data.

+ <ins>Equivalent of useQuery (Client-Side Rendering - CSR)</ins>
  + Use React Query or SWR inside a Client Component.
  + Works like useQuery in the Page Router.
  + Example using useQuery in a Client Component
    ```
      "use client"; // Must be a Client Component
      
      import { useQuery } from "@tanstack/react-query";
      
      const fetchPosts = async () => {
        const res = await fetch("https://your-strapi-site.com/api/posts");
        return res.json();
      };
      
      export default function Blog() {
        const { data, error, isLoading } = useQuery(["posts"], fetchPosts);
      
        if (isLoading) return <p>Loading...</p>;
        if (error) return <p>Error loading data</p>;
      
        return (
          <div>
            <h1>Blog Posts</h1>
            {data.data.map((post) => (
              <div key={post.id}>
                <h2>{post.attributes.title}</h2>
                <p>{post.attributes.content}</p>
              </div>
            ))}
          </div>
        );
      }
    ```
  + 🔹 Key Points:
    + Must be inside a Client Component ("use client").
    + Uses useQuery() to fetch data after page load.
    + Best for real-time updates, user dashboards, and dynamic content.
+ Comparison of Data Fetching in App Router
  <img width="705" alt="Screenshot 2025-03-23 at 7 59 35 PM" src="https://github.com/user-attachments/assets/ca7556e4-6618-493d-bfa6-78961bbf029f" /><br>

  


## 1. Development Process Of the Project
> Create Strapi Project inside Root Folder run this command : <br>
```diff
npx create-strapi-app@latest strapi dashboard
```
   <img align="center" width="1457" alt="Image" src="https://github.com/user-attachments/assets/85e6b657-9900-47cf-9bbe-f8a3e070ad4a" /><br>

> [!TIP]
> You can find all the commands necessary to control this app inside Readme.md file of your strapi project<br><br>



## 2. Run Project
> Go inside your starpi project root directory and run this command: <br>
```diff
npm run develop
```
<img width="1792" alt="Image" src="https://github.com/user-attachments/assets/eb71bbe0-cfb5-4e20-9bbe-954f8a9796fa" /><br>

> [!IMPORTANT]
> A dashboard (Strapi Homepage) will be opened in local server <br>
> Use your name, email id and set passwords
> The dashboard will be opened after sign up

<img width="1792" alt="Image" src="https://github.com/user-attachments/assets/e9795f49-ba94-4452-bc2b-77583078cfeb" /><br><br>

## 3. Dasboard Summary
* Home - Welcome page
* Content Manager - You can see all collection types and single types
  + <ins>Collection Type (consider as tables of content)</ins> - collection types are content-types that can manage several entries -
    1. You can see list of collections on the left side such as article, author, category etc.
       <img align="center" width="1024" alt="Image" src="https://github.com/user-attachments/assets/df32170e-029a-40dd-b7d6-0380e3e7089d" /><br>

    2. Inside each collection you can add a new entry or content type
       <img width="1792" alt="Screenshot 2025-03-12 at 7 36 14 PM" src="https://github.com/user-attachments/assets/dfadf331-16e0-4601-a900-4fe94a470cdd" />

    3. Edit a existing entry and update content or add new component blocks
       <img align="center" width="1024" alt="Screenshot 2025-03-12 at 7 33 24 PM" src="https://github.com/user-attachments/assets/9cc08cd7-1b75-4ecb-ad3f-b500142010fc" /><br>

    4. You can save your modification or content and publish it later.<br>

  + <ins>Single Type</ins> - Single types are content-types that can only manage one entry.
    1. This is also can be used to add and manage content but only one single entry can be added here. Ex - as an example you can consider as a single page content like homepage, about us, contact us etc.
    
       <img width="1792" alt="Screenshot 2025-03-12 at 8 03 04 PM" src="https://github.com/user-attachments/assets/20b54af1-a285-4cfa-b1d7-a06f6a757f13" />

* Media Library - Here you can upload images and use it in your content. Also you can create seperate folder to group your assests
  <img align="center" width="1792" alt="Screenshot 2025-03-12 at 10 35 34 PM" src="https://github.com/user-attachments/assets/91989713-401c-4026-aed2-b89aea76a5bc" /><br>

* Content Type Builder - Here You can add, edit and update collection type, single type and components to use it in create content.
  <img align="center" width="1792" alt="Screenshot 2025-03-12 at 10 39 06 PM" src="https://github.com/user-attachments/assets/f750a763-9f9f-4fd6-ab3c-99d31134bb5d" />

* Deploy - Here you can get option to host ypur project on strapi cloud (paid) and place your project in github
  <img width="1792" alt="Screenshot 2025-03-12 at 10 42 13 PM" src="https://github.com/user-attachments/assets/64000571-9fa0-4e02-8f17-32daf1ca6a54" />

* Market Place - Here you can get lots of external plugins for your CMS different functionalities to use as per need.
  <img width="1792" alt="Screenshot 2025-03-12 at 10 44 35 PM" src="https://github.com/user-attachments/assets/36d88e78-85d3-4659-bc0f-c85500f3df39" />

* Settings - Provides controls of your projects
  + <ins>Overview</ins> - You can see global informations like strapi version, node version and logo for edit and update.
  + <ins>API Tokens</ins> - Generate Token to access APIs
  + <ins>Plugins</ins> - List of installed Plugins
  + <ins>Media Library</ins> - Settings for your media library
  + <ins>Roles</ins> - Under Administration Panel, you can find this menu to add a type of role that can be assign to user for different access in content management.
  + <ins>Users</ins> - Show List of Users and also can send invite access to a users, edit details and role of a user
  + <ins>Users & Permissions</ins> - The Users & Permissions plugin is a core feature in Strapi that provides authentication and authorization capabilities for your application. It provide menus like user, role, providers etc. 
  There is more different menu to add webhooks, email plugin, email templates, advance settings for more configurations.
    <img align="center" width="1792" alt="Screenshot 2025-03-12 at 10 47 59 PM" src="https://github.com/user-attachments/assets/6e4503a5-52d4-420d-9cf9-5926810c9a9b" />
> [!warning]
> Its better to use default seetings always and manage menus as per need carefully


## 4. Frontend Setup (Next Js)
>  Inside Root Folder create a folder and named as frontend. run this command inside this created folder : <br>
```diff
npx create-next-app@latest .
```
   <img align="center" width="1792" alt="Screenshot 2025-03-13 at 8 48 02 AM" src="https://github.com/user-attachments/assets/e28d2cd8-170d-49fd-b1d4-4a187df16f5e" /><br>
> [!TIP]
> You can use shadcn/ui dependecies in your project to create and design components like buttons, accordion etc. To install run inside frontend folder -
> ``` npx shadcn@latest init ``` <br>
> For more informations, Visit - https://ui.shadcn.com/docs/installation/next & https://ui.shadcn.com/docs/components/
> <img width="924" alt="Screenshot 2025-03-13 at 9 11 42 AM" src="https://github.com/user-attachments/assets/2d78826e-5bb0-4688-b91d-a5dc29a2ed7f" />







