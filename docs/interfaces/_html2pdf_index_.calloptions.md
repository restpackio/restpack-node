[restpack-node](../README.md) > ["html2pdf/index"](../modules/_html2pdf_index_.md) > [CallOptions](../interfaces/_html2pdf_index_.calloptions.md)



# Interface: CallOptions

## Hierarchy


 [PDFConvertOptions](_html2pdf_index_.pdfconvertoptions.md)

**↳ CallOptions**








## Properties
<a id="accept_language"></a>

###  accept_language

**●  accept_language**:  *`string`* 

*Inherited from [PDFConvertOptions](_html2pdf_index_.pdfconvertoptions.md).[accept_language](_html2pdf_index_.pdfconvertoptions.md#accept_language)*

*Defined in html2pdf/index.ts:26*



Custom accept-language header string for the web request.




___

<a id="allow_failed"></a>

###  allow_failed

**●  allow_failed**:  *`boolean`* 

*Inherited from [PDFConvertOptions](_html2pdf_index_.pdfconvertoptions.md).[allow_failed](_html2pdf_index_.pdfconvertoptions.md#allow_failed)*

*Defined in html2pdf/index.ts:32*



By default, any response from remote server outside http 200-299 status codes generates an error. If you wish to capture error pages, pass true.




___

<a id="css"></a>

###  css

**●  css**:  *`string`* 

*Inherited from [PDFConvertOptions](_html2pdf_index_.pdfconvertoptions.md).[css](_html2pdf_index_.pdfconvertoptions.md#css)*

*Defined in html2pdf/index.ts:16*



Additional CSS string to be injected into the page before render.




___

<a id="delay"></a>

###  delay

**●  delay**:  *`number`* 

*Inherited from [PDFConvertOptions](_html2pdf_index_.pdfconvertoptions.md).[delay](_html2pdf_index_.pdfconvertoptions.md#delay)*

*Defined in html2pdf/index.ts:20*



Time in milliseconds to delay capture after page load




___

<a id="emulate_media"></a>

###  emulate_media

**●  emulate_media**:  *"screen"⎮"print"* 

*Inherited from [PDFConvertOptions](_html2pdf_index_.pdfconvertoptions.md).[emulate_media](_html2pdf_index_.pdfconvertoptions.md#emulate_media)*

*Defined in html2pdf/index.ts:30*



Force CSS media emulation for print or screen.




___

<a id="fresh"></a>

###  fresh

**●  fresh**:  *`boolean`* 

*Inherited from [PDFConvertOptions](_html2pdf_index_.pdfconvertoptions.md).[fresh](_html2pdf_index_.pdfconvertoptions.md#fresh)*

*Defined in html2pdf/index.ts:8*



Force rendering a new screenshot disregarding the cache status.




___

<a id="headers"></a>

###  headers

**●  headers**:  *`string`* 

*Inherited from [PDFConvertOptions](_html2pdf_index_.pdfconvertoptions.md).[headers](_html2pdf_index_.pdfconvertoptions.md#headers)*

*Defined in html2pdf/index.ts:28*



Additional headers seperated with newline




___

<a id="html"></a>

###  html

**●  html**:  *`string`* 

*Defined in html2pdf/index.ts:41*





___

<a id="js"></a>

###  js

**●  js**:  *`string`* 

*Inherited from [PDFConvertOptions](_html2pdf_index_.pdfconvertoptions.md).[js](_html2pdf_index_.pdfconvertoptions.md#js)*

*Defined in html2pdf/index.ts:18*



Additional JS string to be injected into the page before render.




___

<a id="json"></a>

###  json

**●  json**:  *`boolean`* 

*Defined in html2pdf/index.ts:42*





___

<a id="pdf_margins"></a>

###  pdf_margins

**●  pdf_margins**:  *`string`* 

*Inherited from [PDFConvertOptions](_html2pdf_index_.pdfconvertoptions.md).[pdf_margins](_html2pdf_index_.pdfconvertoptions.md#pdf_margins)*

*Defined in html2pdf/index.ts:12*



CSS style margin sizes.




___

<a id="pdf_orientation"></a>

###  pdf_orientation

**●  pdf_orientation**:  *"portrait"⎮"landscape"* 

*Inherited from [PDFConvertOptions](_html2pdf_index_.pdfconvertoptions.md).[pdf_orientation](_html2pdf_index_.pdfconvertoptions.md#pdf_orientation)*

*Defined in html2pdf/index.ts:14*



Page orientation




___

<a id="pdf_page"></a>

###  pdf_page

**●  pdf_page**:  *"A0"⎮"A1"⎮"A2"⎮"A3"⎮"A4"⎮"A5"⎮"Legal"⎮"Letter"⎮"Tabloid"⎮"Ledger"⎮"Full"* 

*Inherited from [PDFConvertOptions](_html2pdf_index_.pdfconvertoptions.md).[pdf_page](_html2pdf_index_.pdfconvertoptions.md#pdf_page)*

*Defined in html2pdf/index.ts:10*



Custom page size for created document




___

<a id="shutter"></a>

###  shutter

**●  shutter**:  *`string`* 

*Inherited from [PDFConvertOptions](_html2pdf_index_.pdfconvertoptions.md).[shutter](_html2pdf_index_.pdfconvertoptions.md#shutter)*

*Defined in html2pdf/index.ts:36*



Wait until a DOM element matching the provided css selector becomes present on the page.




___

<a id="ttl"></a>

###  ttl

**●  ttl**:  *`number`* 

*Inherited from [PDFConvertOptions](_html2pdf_index_.pdfconvertoptions.md).[ttl](_html2pdf_index_.pdfconvertoptions.md#ttl)*

*Defined in html2pdf/index.ts:22*



Time in milliseconds for the resulting image to be cached for further requests.




___

<a id="url"></a>

###  url

**●  url**:  *`string`* 

*Defined in html2pdf/index.ts:40*





___

<a id="user_agent"></a>

###  user_agent

**●  user_agent**:  *`string`* 

*Inherited from [PDFConvertOptions](_html2pdf_index_.pdfconvertoptions.md).[user_agent](_html2pdf_index_.pdfconvertoptions.md#user_agent)*

*Defined in html2pdf/index.ts:24*



Custom user-agent header string for the web request.




___

<a id="wait"></a>

###  wait

**●  wait**:  *"load"⎮"network"⎮"dom"* 

*Inherited from [PDFConvertOptions](_html2pdf_index_.pdfconvertoptions.md).[wait](_html2pdf_index_.pdfconvertoptions.md#wait)*

*Defined in html2pdf/index.ts:34*



Wait until window load event fires or network becomes idle before capturing the page.




___


