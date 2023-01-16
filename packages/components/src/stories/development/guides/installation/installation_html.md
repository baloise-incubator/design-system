<bal-doc-lead>
This section describes how to setup the Baloise Design System with an basic web application.
</bal-doc-lead>

## Node Modules

This is the recommended setup for HTML5 applications or server-side-rendering application, because it is under version control with the help of npm.

First lets create a node project to manage the dependencies versions. Open the terminal and navigate into your project folder. Then run `npm init` to setup the `package.json` file.

```bash
npm init
```

Now lets install the Baloise Design System.

```bash
npm install @baloise/design-system-components --save
```

After that we create a `index.html` file and add the following 2 references to your `<head></head>`.

Add the `bal-app` to your root element. Within this component we are able to use the defined css classes.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <style>
      .bal-body {
        visibility: hidden;
      }
    </style>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Baloise Design System</title>
    <link
      rel="stylesheet"
      href="node_modules/@baloise/design-system-components/dist/design-system-components/design-system-components.css"
    />

    <script
      type="module"
      src="node_modules/@baloise/design-system-components/dist/design-system-components/design-system-components.esm.js"
    ></script>
    <script
      nomodule
      src="node_modules/@baloise/design-system-components/dist/design-system-components/design-system-components.js"
    ></script>
  </head>
  <body class="bal-body">
    <bal-app>
      <main class="container mt-normal">
        <bal-heading>Hello World</bal-heading>
        <bal-button>Button</bal-button>
      </main>
    </bal-app>
  </body>
</html>
```

> **HTTP-Server**
> To run the HTML5 application you need a proper HTTP-Server. However, if there is none we recommend to install
>
> ```
> npm add -D http-server
> ```
>
> After that add define the start script with the http-server package.
>
> ```json
>   "scripts": {
>      "start": "http-server"
>   }
> ```
>
> Now you can run your server with `npm start` and the server is available under http://127.0.0.1:8080/.

## Install Fonts

The font package is included in the `@baloise/design-system-components` package and also in the proxy libraries.

Next step is to provide the fonts to our web application. To do so we recommend the tool [copyfiles](https://www.npmjs.com/package/copyfiles) (opens new window) to copy the font files into your asset folder.

```bash
npm install copyfiles --save-dev
```

After installing our copyfiles dependency we need to define the copy command in our package.json file. Add a new script called `copy:fonts` and adjust the second path to your application.

> **CSS**
> If you use the styles with css than just put the fonts into a public/static folder with the path `assets/fonts`.

Then we add the defined script copy:fonts in our postinstall script. Every time we install dependencies the copy:fonts script gets executed at the end.

```json
"scripts": {
  "postinstall": "npm run copy:fonts",
  "copy:fonts": "copyfiles --flat node_modules/@baloise/design-system-fonts/lib/* assets/fonts"
}
```

> **TIP**
> It could be that inside the docker container the `postinstall` gets not executed. Therefore, use `npm run ci --unsafe-perm` to execute postinstall after the install script.

## CDN

An other way to easily use the library is via [CDN](https://www.jsdelivr.com/).

> **TIP**
> It is recommended to use the version directly and not the latest version to avoid incoming breaking changes.
> Like => `https://cdn.jsdelivr.net/npm/@baloise/design-system-fonts@10/css/fonts.cdn.css`

Add the following 4 references to your `<head></head>`

```html
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/@baloise/design-system-components/dist/design-system-components/design-system-components.css"
/>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@baloise/design-system-fonts/css/fonts.cdn.css" />
<script
  type="module"
  src="https://cdn.jsdelivr.net/npm/@baloise/design-system-components/dist/design-system-components/design-system-components.esm.js"
></script>
<script
  nomodule
  src="https://cdn.jsdelivr.net/npm/@baloise/design-system-components/dist/design-system-components/design-system-components.js"
></script>
```
