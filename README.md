# DevTinder

 - Created a Vite + React application
 - Remove unnecessary code and create a Hello World app
 - Install Tailwind CSS
 - Add NavBar component to App.jsx  
 - Create a separate NavBar Component file
 - Install react router dom
 - Create BrowserRouter > Routes > Route=/ element = Body > RouteChildren
 - Create an Outlet in your Body Component
 - Create a Footer
 - Create a Login Page
 - Install axios
 - CORS - install cors in backend => add middleware to with configurations: origin, credentials: true
 - Whenever you are making API call so pass axios => { withCredentials: true}
 - Install react-redux + @reduxjs/toolkit => configureStore => Provider at app.js => createSlice => add reducer to store 
 - Add redux devtools in chrome
 - Login and see if your data is coming properly in the store
 - Navbar should update as soon as user logs in 
 - Refactor our code to add constants file 
 - You should not be able to access other routes without login
 - If token is not present, redirect user to login page
 - Logout feature
 - Get the feed and add the feed in the store 
 - build the user card on feed
 - Edit profile feature
 - Show Toast Message on save of profile
 - See my all connections


 Body 
    NavBar
    Route=/ => feed Page
    Route=/login => Login Page
    Route=/connection => Connection Page
    Route=/profile => Profile