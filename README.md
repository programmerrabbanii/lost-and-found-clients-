<<<<<<< HEAD
🌟 WhereIsIt: A Lost And Found Application 🌟
  WhereIsIt is a lost and found  platform where users can create, lost and found post,

  🔗 Live Site URL https://found-and-lost-application.web.app/
    

      Frontend:

React.js
Tailwind CSS 
React Router
React Icons
Backend:

Node.js
Express.js
MongoDB
Additional Libraries:

SweetAlert2 for interactive alerts.
Lottie React for engaging animations.
React Tooltip for better user interactivity.
Hosting:

Frontend: Netlify/Firebase
Backend: Vercel
Authentication:

Firebase
⚙️ Key Rules and Functionalities
Environment Variables: Firebase config keys and MongoDB credentials are secured.
Protected Routes: Campaign management and donation details are accessible only to logged-in users.
Error Handling: Validations for password strength and proper error messages using SweetAlert.
=======
# WhereIsIt - A Lost and Found Website

## Project Overview

WhereIsIt is a Lost and Found website designed to connect individuals who have lost personal belongings with those who have found them. This platform allows users to report lost items, browse found items, and interact to recover their belongings. This project is a hands-on experience in building full-stack applications, working with user authentication, file uploads, database management, and API integration.

### Key Features
- **User Authentication**: Implemented email/password-based login with Google or GitHub login options.
- **Responsive Design**: Fully responsive on mobile, tablet, and desktop devices.
- **CRUD Operations**: Add, update, delete, and view lost and found items.
- **Firebase and MongoDB Integration**: Secured Firebase credentials and MongoDB credentials via environment variables.
- **Interactive UI**: Features such as sliders, carousels, and dynamic routing.
- **Toast Notifications**: For all user interactions (CRUD operations).
- **Search Functionality**: Allows filtering items by title or location.
- **404 Page**: Added for routes that don't exist.
- **Deployment**: Deployed on Netlify and fully functional in production with no CORS or 404 errors.

## Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/whereisit.git
   cd whereisit
 ## Install dependencies:

bash
npm install

Technologies Used
Frontend: React, React Router, Framer Motion, Tailwind CSS
Backend: Node.js, Express.js, MongoDB
Authentication: Firebase (Email/Password, Google, GitHub)
State Management: React Context API
Deployment: Netlify (Frontend), Heroku (Backend)


## Key Features
Home Page: A banner slider with recent lost and found items. Provides a call to action for users to explore more.
Lost & Found Items Page: Display all lost and found items with filters for search.
Add Item Page: Allows users to submit lost or found items with images and descriptions.
Post Details Page: Displays item details and allows users to mark items as found/recovered.
User Profile: Manage user data, items posted by the user, and update or delete items.
Dynamic Titles: Page titles change dynamically based on the current route.
Toast Notifications: Feedback is provided for all actions (add, update, delete).
404 Page: Shows an error page for undefined routes.
Deployment Guidelines
Ensure that your server is working perfectly on production without any CORS/404/504 errors.
Ensure your live link is accessible and working correctly without errors on landing.
Make sure the page doesn’t throw any errors on reloading from any routes.
Add your domain to Firebase for authorization if using Netlify/Surge.
Logged-in users should not be redirected to login after refreshing private routes.
Challenge Requirements
Search Functionality: Implement a search bar on the Lost & Found Items page to filter posts by title or location.
Toast Notifications: For all CRUD operations, ensure meaningful messages using SweetAlert2 or Toast notifications.

## Live Demo
https://found-and-lost-application.web.app/

>>>>>>> b55c0b89c6f7453d4261c49c246bc8d75d7999ae
