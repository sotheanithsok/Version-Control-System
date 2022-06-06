<!-- Readme Start here -->

<!-- Load logo from readme/logo.jpg -->
<div align="center">
  <img src="readme/logo.jpg" alt="logo" />
</div>


<!-- Title -->
<h1 align="center" style="border: none">
Version Control System
</h1>


<!-- Shield IO - very nice icons -->
<div align="center">

[![Contributors][contributors_shield]][contributors_url]
[![Forks][forks_shield]][forks_url]
[![Stargazers][stars_shield]][stars_url]
[![Issues][issues_shield]][issues_url]
[![MIT License][license_shield]][license_url]
[![LinkedIn][linkedin_shield]][linkedin_url]

</div>


<!-- Description -->
This is the second iteration of the version control system build by Team PSA. The goal of this iteration is to build upon the strong foundation used in the first iteration. As such, the current version of this system now offers users the ability to create a new repository, commit changes to a repository, check-in any changes made from external folders, check-out changes to an external folder, and label manifest files in repositories using unique identifiers. The new product offers a greater user experience in order to interact with the system.

## Getting Started
1. Manually install NodeJS
2. Clone repository
```sh
git clone https://github.com/sotheanithsok/Version-Control-System
```

3. Install all necessary dependencies
```sh
npm install
```

4. Start the application
```sh
node index.js
```

## Features
- Create a new repository
- Commit a new iteration to the repository
- Branching system
- Collaboration system
- Contribution history of collaborators
- Support for different file formats

## Sample Invocation
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

<!-- Include your major tools and frameworks -->
## Built With
- [Javascript]
- [NodeJS]
- [React JS]
- [Material UI]


<!-- Collaborators information -->
## Collaborators
- [Sotheanith Sok]
- [Anthony Martinez]
- [Chandandeep Thind]
- [Prateechi Singh]
- [Yashua Ovando]

## Course
- [CECS 543 - Advanced Software Engineering]


<!-- License -->
## License
This project is licensed under the MIT License - see the [LICENSE.md][license_url] file for details


<!-- Shoutout to other projects, plugin, or minor tools -->
## Acknowledgments
Special thank to
- [Best-README-Template] - the readme template.


<!-- References -->
<!-- Shield Icons-->
[contributors_shield]: https://img.shields.io/github/contributors/sotheanithsok/Version-Control-System.svg?style=for-the-badge
[forks_shield]: https://img.shields.io/github/forks/sotheanithsok/Version-Control-System.svg?style=for-the-badge
[stars_shield]: https://img.shields.io/github/stars/sotheanithsok/Version-Control-System.svg?style=for-the-badge
[issues_shield]: https://img.shields.io/github/issues/sotheanithsok/Version-Control-System.svg?style=for-the-badge
[license_shield]: https://img.shields.io/github/license/sotheanithsok/Version-Control-System.svg?style=for-the-badge
[linkedin_shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555

<!-- Shield URLs -->
[contributors_url]: https://github.com/sotheanithsok/Version-Control-System/graphs/contributors
[forks_url]: https://github.com/sotheanithsok/Version-Control-System/network/members
[stars_url]: https://github.com/sotheanithsok/Version-Control-System/stargazers
[issues_url]: https://github.com/sotheanithsok/Version-Control-System/issues
[license_url]: https://github.com/sotheanithsok/Version-Control-System/blob/master/LICENSE
[linkedin_url]: https://www.linkedin.com/in/sotheanith-sok-969ab0b3/

<!-- Other links -->
[Sotheanith Sok]: https://github.com/sotheanithsok
[Best-README-Template]: https://github.com/othneildrew/Best-README-Template

[Javascript]: https://www.javascript.com/
[NodeJS]: https://nodejs.org/en/
[React JS]: https://reactjs.org/
[Material UI]: https://material-ui.com/



[Anthony Martinez]: https://github.com/Anthony1234567
[Chandandeep Thind]: https://github.com/DeepThind
[Prateechi Singh]: https://github.com/Prateechi
[Yashua Ovando]: https://github.com/ydovando

[CECS 543 - Advanced Software Engineering]:http://catalog.csulb.edu/preview_course_nopop.php?catoid=5&coid=40035

