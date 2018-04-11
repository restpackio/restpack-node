# Restpack Node.JS library

This library provides easy access to http://restpack.io API services from Node.JS

## Installation

Install the package with:

```sh
npm install @restpack/client --save
```

Or, if you are using Yarn;

```sh
yarn add @restpack/client
```

## Usage

The package needs to be configured using your client access keys that can be found on the restpack.io console.

All API methods return a Promise so you can chain calls or use async / await.

```js
var restpack = require("@restpack/client")

var html2pdf = restpack.html2pdf("<TOUR ACCESS KEY>")
var screenshot = restpack.screenshot("<TOUR ACCESS KEY>")

html2pdf.convert("http://google.com", { pdf_page: "A4" })
  .then(function success(document) {
    console.log(document)
  })
  .catch(function fail(error) {
    console.error(error)
  })
```


## HTML to PDF API

  - [Client Documentation](docs/classes/_html2pdf_index_.html2pdf.md)
  - [Available Options](docs/interfaces/_screenshot_index_.screenshotcaptureoptions.md)

## Screenshot API

  - [Client Documentation](docs/classes/_screenshot_index_.html2pdf.md)
  - [Available Options](docs/interfaces/_html2pdf_index_.pdfconvertoptions.md)
