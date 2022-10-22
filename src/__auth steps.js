/* 
   AUTH SETUP
------------------------------------
1. create firebase project
2. enable web 
3. enable sign in method
4. install firebase
5. get firebase config in your firebase.config.js file
6. export app from firebase.config.js
*/


/* 
1. Create UserContext (Auth Context): UserContext --> component name
   userContext provides AuthContext

2. Create AuthContext
3. set AuthContext.Provider
4. Make sure you set the children
5. export AuthContext to be used inside useContext hook
6. get form data  
7. getAuth in the UserContext
*/


/* 
   FIREBASE HOSTING
 -------------------------------------
 // One time for each computer
 1. npm install -g firebase-tools
 2. firebase login
 

 // For each project one time
 -----------------------------------------
 3. firebase init

 ----------------------------------------------------------
      Make sure answer all questions:
 ----------------------------------------------------------
 1. Are you ready to proceed? --> Y

2. Which Firebase features do you want to set up for this directory? Press Space to select      features, then Enter to confirm your choices.
   ---> Hosting: Configure files for Firebase Hosting and (optionally) set up GitHub Action deploys    

3. Please select an option: Use an existing project

4. Please select an option: select your project

5. What do you want to use as your public directory?
   --> build

6. Configure as a single-page app (rewrite all urls to /index.html)?
   --> y

7. Set up automatic builds and deploys with GitHub?
   --> n

8. File build/index.html already exists. Overwrite?
   --> n

-------------------------------------------------------
   // For every deploy after setup firebase hosting
-------------------------------------------------------
4. npm run build
5. firebase deploy

*/