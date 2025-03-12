# ⭐ nextJs-strapi-blog ⭐
It is a Blog / personal portfolio website using Next Js and Strapi


## 1. Development Process
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




