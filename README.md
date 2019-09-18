This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Authentication Via `bcryptjs`

This repository contains a basic example of authentication using the package `bcryptjs`. Its purpose is to demonstrate the hashing and salting of passwords, as well as good practices in storing hash values (not plain text passwords, or even encrypted passwords) in a database via `massive`. It also utilizes `express-session` to save the user data of the logged in user.

### Example `.env` file
```
SERVER_PORT = 4000
CONNECTION_STRING = postgres://[username]:[password]@[host]:[port]/[database]?ssl=true
SESSION_SECRET = mnoiUIvhkjBMjGHIUYGogY879YT&T(&^fiuhkJV>
```

### Schema Used:
The schema used is found in the `seed.sql` file of the `db` folder.

### Other Resources

* [This lesson plan](https://github.com/DevMountain/web-curriculum/tree/master/unit-6/6.4-node-5) and its accompanying slide presentation
* [This video meme](https://www.youtube.com/watch?v=3KquFZYi6L0) when talking about salt.
* [This](http://cobweb.cs.uga.edu/~dme/csci6300/Encryption/Crypto.html) encryption demonstation interactive site.


#### Instructor Notes

- The master branch contains a starting point for the class to follow along with.
- Switch to the `finished` branch to see example code.