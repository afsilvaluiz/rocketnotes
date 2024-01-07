<h1 align="center">
    <img src=".github/api.svg" title="Rocketnotes" alt="" width="45px" />   
    Rocketnotes API
</h1>

<p align="center">
  <img alt="GitHub language count" src="https://img.shields.io/github/languages/count/afsilvaluiz/rocketnotes-backend">

  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/afsilvaluiz/rocketnotes-backend" />

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/afsilvaluiz/rocketnotes-backend">
  
  <a href="https://github.com/afsilvaluiz/rocketnotes-backend/commits/master">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/afsilvaluiz/rocketnotes-backend">
  </a>
 
  <img alt="License" src="https://img.shields.io/github/license/afsilvaluiz/rocketnotes-backend">

   <a href="https://github.com/afsilvaluiz/rocketnotes-backend/stargazers">
    <img alt="Stargazers" src="https://img.shields.io/github/stars/afsilvaluiz/rocketnotes-backend?style=social">
  </a>
</p>

<h4 align="center"> 
	🚀 Application completed 🚀
</h4>

<p align="center">
 <a href="#-about">About</a> |
 <a href="#-deploy">Deploy</a> |
 <a href="#-how-it-works">How It Works</a> | 
 <a href="#-technologies">Technologies</a> | 
 <a href="#-author">Author</a> | 
 <a href="#-license">License</a>
</p>

## 💻 About

This is the repository for the backend of the Rocketnotes application, which works in conjunction with the corresponding frontend.

Rocketnotes is a web application that allows users to register and organize notes on various subjects in detail, including titles, descriptions, links and tags for each note. 

It also offers profile editing features, allowing users to change their avatar, name, e-mail address and password, among other features. 

It should be noted that this project is part of Rocketseat's Explorer trail/courses.

## 🔗 Deploy

To access the application's website deployment, click on the following link: [Link](https://minerocketnotes.netlify.app/)

> Note: the application may take a while to start running after a while, due to the back-end running through the free plan on the hosting platform.


## 🧰 How it works

### Requirements

Before downloading the project you will need to have the following tools installed on your machine:

* [Git](https://git-scm.com)
* [NodeJS](https://nodejs.org/en/)
* [Yarn](https://yarnpkg.com/) or [NPM](https://www.npmjs.com/)


### 🗄️ Running the Backend (server)

```bash
# Clone this repository
$ git clone git@github.com:afsilvaluiz/rocketnotes-backend.git

# Access the project folder in the terminal/cmd
$ cd rocketnotes-backend

# Configure the environment variables in an .env file at the root of the project (use the .env.example file as a base)

# Install the dependencies
$ npm install

# Run the migrations
$ npm run migrate:dev

# Run the application in development mode
$ npm run dev

# The server will start on port:3333 - go to http://localhost:3333

# Run tests (if desired)
$ npm test
```


###  🔀 Routes


| Method | Route	| Description	| Parameters | Observations |
| --- | --- | --- | --- | --- |
| POST | /sessions | Returns the authentication data of an existing user | `email`, `password` | Send parameters in `body` | 
| GET	| /users	| Return a specific user	| `token` |	send `token` de authentication in `header` |
| POST | /users | Create a new user | `name`, `email`, `password` | send parameters in the `body` of the request |
| PUT | /users | Update a specific user | `token`, `name`, `email`, `password`, `newPassword`(optional) | send `token` in the `header` and the rest in the `body` |
| PATCH | /users/avatar | Update the avatar of a specific user | `token`, `avatar` | send `token` via `header` and the `avatar` in `multipart` format |
| GET | /notes | Return all notes for a user | `token` | send `token` authentication in `header` |
| GET | /notes:id | Return a specific note | `id`, `token` | send `token` by `header` and `id` by route |
| POST | /notes | Create a note | `title`, `description`, `tags`(array, optional), `links`(array, optional) | send `token` by `header` and the rest in `body` |
| DELETE | /notes/:id | Delete a specific note | `id`, `token` | send `token` via `header` and `id` via route |
| GET | /tags | Return tags created by a user | `token` | send authentication `token` in `header` |
| GET | /files/:filename | Returns avatar files | `filename` | send `filename` by route |

> Note: All parameters sent and received in the request and response body are in `JSON` format."
---

## 🛠 Technologies

The following tools were used in the construction of the project:

<code> <span>Server:</span> <img title="NodeJS" alt="node js" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" /></code><br></br>
<code><img title="Express" alt="express" width="30px" src="https://skillicons.dev/icons?i=express" /></code>
<code><img title="Nodemon" alt="nodemon" width="30px" src=".github/nodemon.svg" /></code>
<code><img title="Express-async-error" alt="expresserror" width="30px" src=".github/expresserror.svg" /></code>
<code><img title="Knex" alt="knex" width="30px" src=".github/knex.svg" /></code>
<code><img title="PostgreSQL" alt="postgresql" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" /></code>
<code><img title="SQLite" alt="sqlite" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sqlite/sqlite-original.svg" /></code>
<code><img title="Cors" alt="cors" width="30px" src=".github/CORS.svg" /></code>
<code><img title="Dotenv" alt="dotenv" width="30px" src=".github/dotenv.svg" /></code>
<code><img title="BcryptJS" alt="bcryptjs" width="30px" src=".github/bcryptjs.svg" /></code>
<code><img title="JWT" alt="jwt" width="30px" src=".github/jwt.svg" /></code>
<code><img title="Multer" alt="multer" width="30px" src=".github/multer.svg" /></code>
<code><img title="PM2" alt="pm2" width="30px" src=".github/pm2.svg" /></code>
<code><img title="Jest" alt="jest" width="30px" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg" /></code>

> For more details of the application's general dependencies, see the file [package.json](./package.json)

## 🧑🏻‍💻 Author

 <img alt="Github" title="Github" src="https://github.com/afsilvaluiz.png" width="100px" >


## 📝 License

This project is under the MIT license. See the [LICENSE](./LICENSE) file for more information

Made with 🎓 by Luiz Silva 🧑🏻‍💻






 



