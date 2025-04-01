This is a template I have created to produce quick websites on the NodeJS / Express framework. These are deployed rapidly and can sync easily with the git repos they are assigned to.

The site can be fully customized with the config files, CSS, JS, and pages/views utilizing pug. 


# Step 1
Download these files to a directory on your development machine / host. 

# Step 2 

run 'npm install' to install all dependencies / packages. 

# Step 3

Modify the following files at a minimum to adjust to your projects specifications.

- ./config.js
- ./start.cmd - Windows Based
- ./start.sh - Unix Based
- ./models/ These are your sequelize models
- ./routes/ These are your routes to handle loading the pages
- ./views/ These are your views to render the UI

# Step 4

publish your site.