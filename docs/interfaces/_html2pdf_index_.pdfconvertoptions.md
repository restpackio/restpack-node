[restpack-node](../README.md) > ["html2pdf/index"](../modules/_html2pdf_index_.md) > [PDFConvertOptions](../interfaces/_html2pdf_index_.pdfconvertoptions.md)



# Interface: PDFConvertOptions


Options supplied to the Restpack API for conversion

## Hierarchy

**PDFConvertOptions**

↳  [CallOptions](_html2pdf_index_.calloptions.md)









## Properties
<a id="accept_language"></a>

###  accept_language

**●  accept_language**:  *`string`* 

*Defined in html2pdf/index.ts:26*



Custom accept-language header string for the web request.




___

<a id="allow_failed"></a>

###  allow_failed

**●  allow_failed**:  *`boolean`* 

*Defined in html2pdf/index.ts:32*



By default, any response from remote server outside http 200-299 status codes generates an error. If you wish to capture error pages, pass true.




___

<a id="css"></a>

###  css

**●  css**:  *`string`* 

*Defined in html2pdf/index.ts:16*



Additional CSS string to be injected into the page before render.




___

<a id="delay"></a>

###  delay

**●  delay**:  *`number`* 

*Defined in html2pdf/index.ts:20*



Time in milliseconds to delay capture after page load




___

<a id="emulate_media"></a>

###  emulate_media

**●  emulate_media**:  *"screen"⎮"print"* 

*Defined in html2pdf/index.ts:30*



Force CSS media emulation for print or screen.




___

<a id="fresh"></a>

###  fresh

**●  fresh**:  *`boolean`* 

*Defined in html2pdf/index.ts:8*



Force rendering a new screenshot disregarding the cache status.




___

<a id="headers"></a>

###  headers

**●  headers**:  *`string`* 

*Defined in html2pdf/index.ts:28*



Additional headers seperated with newline




___

<a id="js"></a>

###  js

**●  js**:  *`string`* 

*Defined in html2pdf/index.ts:18*



Additional JS string to be injected into the page before render.




___

<a id="pdf_margins"></a>

###  pdf_margins

**●  pdf_margins**:  *`string`* 

*Defined in html2pdf/index.ts:12*



CSS style margin sizes.




___

<a id="pdf_orientation"></a>

###  pdf_orientation

**●  pdf_orientation**:  *"portrait"⎮"landscape"* 

*Defined in html2pdf/index.ts:14*



Page orientation




___

<a id="pdf_page"></a>

###  pdf_page

**●  pdf_page**:  *"A0"⎮"A1"⎮"A2"⎮"A3"⎮"A4"⎮"A5"⎮"Legal"⎮"Letter"⎮"Tabloid"⎮"Ledger"⎮"Full"* 

*Defined in html2pdf/index.ts:10*



Custom page size for created document




___

<a id="shutter"></a>

###  shutter

**●  shutter**:  *`string`* 

*Defined in html2pdf/index.ts:36*



Wait until a DOM element matching the provided css selector becomes present on the page.




___

<a id="ttl"></a>

###  ttl

**●  ttl**:  *`number`* 

*Defined in html2pdf/index.ts:22*



Time in milliseconds for the resulting image to be cached for further requests.




___

<a id="user_agent"></a>

###  user_agent

**●  user_agent**:  *`string`* 

*Defined in html2pdf/index.ts:24*



Custom user-agent header string for the web request.




___

<a id="wait"></a>

###  wait

**●  wait**:  *"load"⎮"network"⎮"dom"* 

*Defined in html2pdf/index.ts:34*



Wait until window load event fires or network becomes idle before capturing the page.




___


