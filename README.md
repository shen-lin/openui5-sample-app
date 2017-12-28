![OpenUI5 logo](http://openui5.org/images/OpenUI5_new_big_side.png)

# openui5-sample-app
> [OpenUI5](https://github.com/SAP/openui5) sample app using webpack

This repository shows how to build a OpenUI5 app using webpack and the `openui5-webpack-plugin`.

## Getting started
* Install Node.js (from [nodejs.org](http://nodejs.org/)).
* Clone the repository and navigate into it
    ```sh
    git clone https://github.com/cevou/openui5-sample-app.git
    cd openui5-sample-app
    ```
* Install all npm dependencies (also installs all bower dependencies)
    ```sh
    npm install
    ```

## Usage
### Server
Run `npm run server` to start a local server with your application at [http://localhost:8080](http://localhost:8080).

### Code validation
Run `npm run lint` to run static code checks on your project.

### Build
Run `npm run webpack` to build a deployable development version of your app to `/dist`.
Run `npm run webpack:prod` to build a deployable production version of your app to `/dist`.

## TODO

Some things still need to be implemented in the `openui5-webpack` repository:

- Include library-properties.json in build
- Do not load `library.css` files because styles are build automatically
- Generate sapContrast classes

Also some things can be improved in this repository:

- Add examples for tests
