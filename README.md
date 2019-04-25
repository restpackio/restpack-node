# Restpack Node.JS library

This library provides easy access to https://restpack.io API services from Node.JS

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

The package needs to be configured using your client access keys that can be found on the [Restpack Console](https://restpack.io/console/).

All API methods return a Promise so you can chain calls or use async / await.

```js
var restpack = require("@restpack/client")

var html2pdf = restpack.html2pdf("<YOUR ACCESS KEY>")
var screenshot = restpack.screenshot("<YOUR ACCESS KEY>")

html2pdf.convert("http://google.com", { pdf_page: "A4" })
  .then(function success(document) {
    console.log(document)
  })
  .catch(function fail(error) {
    console.error(error)
  })
```


## HTML to PDF API

[Available Options](docs/interfaces/_html2pdf_index_.pdfconvertoptions.md)

For detailed documentation, please visit [HTML to PDF API v5 Reference page](https://restpack.io/html2pdf/docs).

```js
var restpack = require("@restpack/client")

var html2pdf = restpack.html2pdf("<YOUR ACCESS KEY>")

// Convert given URL to PDF. Return the document details and CDN url of PDF
// Check Available Options link above for all options.
var promise = html2pdf.convert("http://google.com", { pdf_page: "A4" /* , other options */ })
promise.then(function(doc) {
  console.log(doc);
})

// Convert given html content to PDF. Return the document details and CDN url of PDF
html2pdf.convertHTML("<p><b>Bold text</b> etc</p>", { pdf_page: "A4" /* , other options */ })

// Convert given URL to PDF. Return the PDF document as Buffer
html2pdf.convertToPDF("http://google.com", { pdf_page: "A4" /* , other options */ })

// Convert given html content to PDF. Return the PDF document as Buffer
html2pdf.convertHTMLToPDF("<p><b>Bold text</b> etc</p>", { pdf_page: "A4" /* , other options */ })
```

## Screenshot API

[Available Options](docs/interfaces/_screenshot_index_.screenshotcaptureoptions.md)

For detailed documentation, please visit [Screenshot API v5 Reference page](https://restpack.io/screenshot/docs).

```js
var restpack = require("@restpack/client")

var screenshot = restpack.screenshot("<YOUR ACCESS KEY>")

// Convert given URL to PDF. Return the document details and CDN url of PDF
// Check Available Options link above for all options.
var promise = screenshot.capture("http://google.com", { pdf_page: "A4" /* , other options */ })
promise.then(function(doc) {
  console.log(doc);
})

// Convert given html content to PDF. Return the document details and CDN url of PDF
screenshot.captureHTML("<p><b>Bold text</b> etc</p>", { pdf_page: "A4" /* , other options */ })

// Convert given URL to PDF. Return the PDF document as Buffer
screenshot.captureToImage("http://google.com", { pdf_page: "A4" /* , other options */ })

// Convert given html content to PDF. Return the PDF document as Buffer
screenshot.captureHTMLToImage("<p><b>Bold text</b> etc</p>", { pdf_page: "A4" /* , other options */ })
```
