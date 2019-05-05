# CECS 543 - Project: Version Control System

## Team PSA
- Sotheanith Sok
- Anthony Martinez
- Chandandeep Thind 
- Prateechi Singh
- Yashua Ovando

## Intro
This is the second iteration of the version control system build by Team PSA. The goal of this iteration is to build upon the strong foundation used in the first iteration. As such, the current version of this system now offers users the ability to create a new repository, commit changes to a repository, check-in any changes made from external folders, check-out changes to an external folder, and label manifest files in repositories using unique identifiers. The new product offers a greater user experience in order to interact with the system.  

### External Requirements:
- Node JS (10.15.1)
- Express (4.16.4) 
- Browserify (16.2.3)
- Check-Types(8.0.2)
- Requests(2.88.0)


### Setup and Installation:
1. Manually install Node JS
2. Run “npm install” to install all necessary dependencies
3. Run “node index.js” to start the application

### Sample Invocation and Results
- Invocation 1 - Initialize the project and open repository
  -  Start the application by running “node inde.js” from a command line
  -  Open your favorite browsers
  -  Go to: http://localhost:3000/
  -  Enter the directory in the field provided
  -  Press “Open folder”
- Invocation 1- Result:  a hidden folder name “.PSA” will be created inside the source directory. This folder will contain artifacts, folder structure of the source directory, and the manifest file.  Then the user will be directed to a controller pages

- Invocation 2 - Commit changes to an existing repository
  -  Start the application by running “node inde.js” from a command line
  -  Open your favorite browsers
  -  Go to: http://localhost:3000/
  -  Enter the directory in the field provided
  -  Press “Open folder”
  -  Hover over the “Action” drop-down menu
  -  Click “Commit”
- Invocation 2 - Result: The artifacts, folder structures, and the manifest file, in the “.PSA” folder,” will be updated to reflect the latest change in the source directory. Also, a new commit manifest will be created.  

- Invocation 3 - Checkout
  -  Start the application by running “node inde.js” from a command line
  -  Open your favorite browsers
  -  Go to: http://localhost:3000/
  -  Enter the directory in the field provided
  -  Press “Open folder”
  -  Hover over the “Action” drop-down menu
  -  Click “Checkout”
  -  Provide a target directory in the field provided
  -  Click “Checkout”
- Invocation 3 - Result: Everything in the source directory will be copied to the target directory. A checkout manifest will be created in the source directory. Then the target directory will get initialized. 

- Invocation 4 - Checkin
  -  Start the application by running “node inde.js” from a command line
  -  Open your favorite browsers
  -  Go to: http://localhost:3000/
  -  Enter the directory in the field provided
  -  Press “Open folder”
  -  Hover over the “Action” drop-down menu
  -  Click “Checkin”
  -  Provide a source directory in the field provided
  -  Click “Checkin”

- Invocation 4 - Result: Everything in the source directory will be copied to the current directory. A check-in manifest and a commit manifest will be created in the current directory.

- Invocation 5 - Edit label
  - Start the application by running “node inde.js” from a command line
  - Open your favorite browsers
  - Go to: http://localhost:3000/
  - Enter the directory in the field provided
  - Press “Open folder”
  - Press the “fas fa-pen” button next to the manifest that you want to edit its tag
  - Provide a new tag in the field provided
- Invocation 5 - Result: A manifest will be updated to its new label.  

# Included
  - Create a new repository
  - Commit a new iteration to the repository
  - Branching system
  - Collaboration system
  - Contribution history of collaborators
  - Support for different file formats


## Known Issues
None



This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


### `npm install`

Installs all the necessary libraries required to run the project. 


### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).


