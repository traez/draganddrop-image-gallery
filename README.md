# HNG 10 - FrontEnd - Stage 3 Project - Drag and Drop Image Gallery

This is a solution to the [HNG 10 - FrontEnd - Stage 3 Project - Drag and Drop Image Gallery](https://hngx.zuriboard.com/). The HNG Internship is an ambitious attempt to change the way education is done in Africa. It is the bridge between learning to code and becoming the best in the world..

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
  - [Author](#author)
  - [Acknowledgments](#acknowledgments)
  - [User Instructions](#userinstructions)

## Overview

### The Challenge/User Stories

Objective: You will implement a fully functional and responsive image gallery that showcases a collection of images in a visually appealing way.  

A user should be able to Login to the gallery page. Authenticated users should be able to use the Drag-and-Drop feature, they should be able to select and drag images, effortlessly rearranging them within the gallery.  

- Simple Authentication: 
This means login with this email and password:
UserName: user@example.com
Password: 1Password
The authentication form fields should have proper validation setup, with proper error messages. You do not need to implement this on the backend yourself, you could use solutions like NextAuth, Auth0 or Clerk, firebase for Auth or add etc.

- Image Display:
Display a grid layout that showcases a collection of images presented in a visually appealing manner with consistent spacing and sizing, add a tag to each image.

- Loading state:
The page should have a loading state for when images are not ready for display, display a skeleton loader or a loading spinner when loading is true
P/S: Once again, mentors are kind. You may use static images, you don't need to upload it. Drag and drop needs to work for the rearrangement though. You're welcome

- Search Functionality:
You should have a search field that filters the image list based on the tags added to the images.

- Drag-and-Drop:
Implement the ability for users to drag and drop images within the gallery.

- User-friendly Feedback:
Incorporate smooth animations and visual cues that provide feedback during drag and drop interactions.

- Responsive Design:
Ensure that the gallery is responsive and functions seamlessly on different devices, including mobile phones, tablets, and desktops.

- Design Flexibility:
While adhering to the above requirements, you have the creative freedom to come up with a unique and appealing design.

- Acceptance Criteria:
Functional Authentication: A fully functional authentication process.

- Drag-and-Drop Feature: A fully functional drag and drop feature must be implemented.

- Responsiveness: Design must be responsive across various desktop  screens, including mobile and tablet screens.

- User Experience: Design must be intuitive, appealing, and encourage easy navigation and operation (i.e., NO LAGGING).

- Image Display: All Images should have consistent spacing and sizing.

- Submission Mode
Host your frontend application on a platform of your choice (e.g., GitHub Pages, Netlify).

- Provide clear instructions on how to run your project locally in your README.md file.
Ensure that the code is well-documented and organized.

### Screenshot

![](/public/images/screenshot-desktop.png)

### Links

- Solution URL: [https://github.com/traez/draganddrop-image-gallery](https://github.com/traez/draganddrop-image-gallery)
- Live Site URL: [https://draganddrop-image-gallery-traez.vercel.app](https://draganddrop-image-gallery-traez.vercel.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Tailwind CSS (NOT USED!!!)
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- NextAuth (Authentication)

### What I learned

- Deliver projects Timely like in real work scenarios.  
- Implement skeleton loader or a loading spinner for fetch operations loading state. But I ended up not activating feature as project instructions changed.  
- Use of ChatGPT to create boilerplate code and shorten delivery time.  
- Custom Login Authentication using NextAuth and FireBase.   
- Use of dndkit library to correct HTML Drag and Drop API shortfalls on mobile. (User experience on mobile is poor. Need to confirm correct settings)
- HTTP Post request method. Extra skill add-in keeping an eye on future tasks.   

### Continued development

- More HNG 10 Projects, TypeScript, Open Source and Technical Writing, Edgi Projects.

### Useful resources

Stackoverflow  
YouTube  
Google  
ChatGPT

## Author

- Website - [Trae Zeeofor](https://github.com/traez)
- Twitter - [@trae_z](https://twitter.com/trae_z)

## Acknowledgments

Solomon Ekrebe and Ekpa Ntan thanks for the guidance.

## User Instructions

Login details are displayed as placeholder in input Elements.  
You may also test the HTTP Post request method functionality.  
When logged in you may filter and reorder images via dragging.  
Sign out when you're done.  
Cheers.  