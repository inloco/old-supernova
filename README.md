# Supernova #
## Install
Copy and paste this commands in your terminal.
```sh
git clone git@bitbucket.org:ubeedev/supernova.git
cd supernova
npm install && cd docs && npm install & cd ..
```
## Running the project
```sh
webpack --config webpack.dev.config.js --watch & npm run start-dev:doc & wait
```
## Create an alias
If you are using Mac or Linux you can create an alias for complex commands.
```sh
alias start-supernova='npm run build-dev & npm run start-dev:doc & wait'
```
Now, just run **start-supernova**.
## Learn more seeing the Docs
[See the docs!](https://inlocomedia.atlassian.net/wiki/display/FRONT/Supernova)