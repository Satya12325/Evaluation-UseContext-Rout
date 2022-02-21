# Evaluation using Use context routing
# diploy link https://evaluation-usecontext.vercel.app
<img src=""/>
Create an app for users to log in and signup to masai
A user can signup for the website by clicking on signup page.
Create the following routes:
/ - Home page

/prerequsite - Prerequisite page ( user enters here when clicking on signup button )
/info - Info page ( after pressing continue in the pre-requisite page, user enters here
/register - Register account information ( after confirmation, user will enter full name, email and password )

Dashboard - dashbaord page after logging in
Features:
a user is supposed to be able to login or signup
The signup is a multi-page form
if a user is signing up move them through
Maintain a RegisterPage using context API and store all the info for the registration process
prerequisite page takes in information, the continue button is disabled until user fills in both the input boxes values
on clicking continue, move the user to the info page
the user page also takes 5 different data points from the user
the register button won't be enabled till the user fills in all the input boxes
on clicking the button, the user is taken to the register page
in the register page, the user is supposed to fill in their email and password and Full name
use json-server to store the information that you have captured so far
if a user tries to enter the /info page or /register page directly without filling in any of the previous page information, redirect them to the /prerequisite directly
a user cannot register directly from the /register route or without any information from the previous pages
if a user moves back to the previous page, the state of the values which are stored in the context should be shown in the pages, basically a user can go back and forth, and the information they filled in should be maintained
Login page will use email, and password and you will query the json-server to check if the user is present.
On the dashboard page, make sure that you are able to show the full name of the user
Deploy
deploy application to vercel or netlify or heroku
