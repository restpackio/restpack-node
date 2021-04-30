[@restpack/client](../README.md) / [Exports](../modules.md) / [html2pdf](../modules/html2pdf.md) / PDFConvertOptions

# Interface: PDFConvertOptions

[html2pdf](../modules/html2pdf.md).PDFConvertOptions

Options supplied to the Restpack API for conversion

## Table of contents

### Properties

- [allow\_failed](html2pdf.pdfconvertoptions.md#allow_failed)
- [block\_cookie\_warnings](html2pdf.pdfconvertoptions.md#block_cookie_warnings)
- [cache\_ttl](html2pdf.pdfconvertoptions.md#cache_ttl)
- [css](html2pdf.pdfconvertoptions.md#css)
- [delay](html2pdf.pdfconvertoptions.md#delay)
- [emulate\_media](html2pdf.pdfconvertoptions.md#emulate_media)
- [filename](html2pdf.pdfconvertoptions.md#filename)
- [headers](html2pdf.pdfconvertoptions.md#headers)
- [js](html2pdf.pdfconvertoptions.md#js)
- [owner\_password](html2pdf.pdfconvertoptions.md#owner_password)
- [pdf\_encryption](html2pdf.pdfconvertoptions.md#pdf_encryption)
- [pdf\_footer](html2pdf.pdfconvertoptions.md#pdf_footer)
- [pdf\_header](html2pdf.pdfconvertoptions.md#pdf_header)
- [pdf\_height](html2pdf.pdfconvertoptions.md#pdf_height)
- [pdf\_margins](html2pdf.pdfconvertoptions.md#pdf_margins)
- [pdf\_orientation](html2pdf.pdfconvertoptions.md#pdf_orientation)
- [pdf\_page](html2pdf.pdfconvertoptions.md#pdf_page)
- [pdf\_page\_ranges](html2pdf.pdfconvertoptions.md#pdf_page_ranges)
- [pdf\_width](html2pdf.pdfconvertoptions.md#pdf_width)
- [privacy](html2pdf.pdfconvertoptions.md#privacy)
- [shutter](html2pdf.pdfconvertoptions.md#shutter)
- [user\_agent](html2pdf.pdfconvertoptions.md#user_agent)
- [user\_password](html2pdf.pdfconvertoptions.md#user_password)
- [wait](html2pdf.pdfconvertoptions.md#wait)

## Properties

### allow\_failed

• **allow\_failed**: *boolean*

By default, any response from remote server outside http 200-299 status codes generates an error. If you wish to capture error pages, pass true.

Defined in: [html2pdf/index.ts:59](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/html2pdf/index.ts#L59)

___

### block\_cookie\_warnings

• **block\_cookie\_warnings**: *boolean*

Block / hide European Union cookie warnings before capture.

Defined in: [html2pdf/index.ts:69](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/html2pdf/index.ts#L69)

___

### cache\_ttl

• **cache\_ttl**: *number*

Time in seconds for the resulting image to be cached for further requests.

Defined in: [html2pdf/index.ts:51](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/html2pdf/index.ts#L51)

___

### css

• **css**: *string*

Additional CSS string to be injected into the page before render.

Defined in: [html2pdf/index.ts:45](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/html2pdf/index.ts#L45)

___

### delay

• **delay**: *number*

Time in milliseconds to delay capture after page load

Defined in: [html2pdf/index.ts:49](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/html2pdf/index.ts#L49)

___

### emulate\_media

• **emulate\_media**: ``"screen"`` \| ``"print"``

Force CSS media emulation for print or screen.

Defined in: [html2pdf/index.ts:57](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/html2pdf/index.ts#L57)

___

### filename

• **filename**: *string*

If specified, ensures that the resulting file is saved with the given name.

Defined in: [html2pdf/index.ts:8](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/html2pdf/index.ts#L8)

___

### headers

• **headers**: *string*

Additional headers seperated with newline

Defined in: [html2pdf/index.ts:55](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/html2pdf/index.ts#L55)

___

### js

• **js**: *string*

Additional JS string to be injected into the page before render.

Defined in: [html2pdf/index.ts:47](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/html2pdf/index.ts#L47)

___

### owner\_password

• **owner\_password**: *string*

Secure PDF document with a owner password.

Defined in: [html2pdf/index.ts:67](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/html2pdf/index.ts#L67)

___

### pdf\_encryption

• **pdf\_encryption**: ``"40"`` \| ``"128"``

Enable document encryption

Defined in: [html2pdf/index.ts:43](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/html2pdf/index.ts#L43)

___

### pdf\_footer

• **pdf\_footer**: *string*

HTML template for page footer. Please check pdf_header information for details.

Defined in: [html2pdf/index.ts:39](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/html2pdf/index.ts#L39)

___

### pdf\_header

• **pdf\_header**: *string*

HTML template for page header. It should have a valid markup and can contain elements with classes 'pageNumber', 'totalPages', 'url', 'title' or 'date'. Header is automatically added to all pages.
Note that you need to have top margins on your documents in order to have the header show up.
Please add margins using pdf_margins.

Defined in: [html2pdf/index.ts:37](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/html2pdf/index.ts#L37)

___

### pdf\_height

• **pdf\_height**: *string*

Custom pdf page height. Check pdf_width for details.

Defined in: [html2pdf/index.ts:31](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/html2pdf/index.ts#L31)

___

### pdf\_margins

• **pdf\_margins**: *string*

CSS style margin sizes.

Defined in: [html2pdf/index.ts:25](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/html2pdf/index.ts#L25)

___

### pdf\_orientation

• **pdf\_orientation**: ``"portrait"`` \| ``"landscape"``

Page orientation

Defined in: [html2pdf/index.ts:27](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/html2pdf/index.ts#L27)

___

### pdf\_page

• **pdf\_page**: ``"A0"`` \| ``"A1"`` \| ``"A2"`` \| ``"A3"`` \| ``"A4"`` \| ``"A5"`` \| ``"Legal"`` \| ``"Letter"`` \| ``"Tabloid"`` \| ``"Ledger"`` \| ``"Full"``

Custom page size for created document

Defined in: [html2pdf/index.ts:12](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/html2pdf/index.ts#L12)

___

### pdf\_page\_ranges

• **pdf\_page\_ranges**: *string*

Returns only specified pages of the PDF document

Defined in: [html2pdf/index.ts:41](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/html2pdf/index.ts#L41)

___

### pdf\_width

• **pdf\_width**: *string*

Custom pdf page width. Must be used together with pdf_height. Prefer pdf_page if you don't have an exact page size requirement.. Unit can be either px for pixels, in for inches.

Defined in: [html2pdf/index.ts:29](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/html2pdf/index.ts#L29)

___

### privacy

• **privacy**: *boolean*

Ensure that the captured document does not get cached / stored for further use. You can not use json mode with this setting as it would not be possible to provide a CDN URL.

Defined in: [html2pdf/index.ts:10](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/html2pdf/index.ts#L10)

___

### shutter

• **shutter**: *string*

Wait until a DOM element matching the provided css selector becomes present on the page.

Defined in: [html2pdf/index.ts:63](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/html2pdf/index.ts#L63)

___

### user\_agent

• **user\_agent**: *string*

Custom user-agent header string for the web request.

Defined in: [html2pdf/index.ts:53](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/html2pdf/index.ts#L53)

___

### user\_password

• **user\_password**: *string*

Secure PDF document with a user password. With user password person can only view the document and allowed operations

Defined in: [html2pdf/index.ts:65](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/html2pdf/index.ts#L65)

___

### wait

• **wait**: ``"load"`` \| ``"network"`` \| ``"dom"``

Wait until window load event fires or network becomes idle before capturing the page.

Defined in: [html2pdf/index.ts:61](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/html2pdf/index.ts#L61)
