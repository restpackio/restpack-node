[restpack-node](../README.md) > ["html2pdf/index"](../modules/_html2pdf_index_.md) > [HTML2PDF](../classes/_html2pdf_index_.html2pdf.md)



# Class: HTML2PDF

## Hierarchy


 [Client](_lib_client_.client.md)

**↳ HTML2PDF**







## Index

### Constructors

* [constructor](_html2pdf_index_.html2pdf.md#constructor)


### Properties

* [accessToken](_html2pdf_index_.html2pdf.md#accesstoken)
* [baseURL](_html2pdf_index_.html2pdf.md#baseurl)


### Methods

* [convert](_html2pdf_index_.html2pdf.md#convert)
* [convertHTML](_html2pdf_index_.html2pdf.md#converthtml)
* [convertHTMLToPDF](_html2pdf_index_.html2pdf.md#converthtmltopdf)
* [convertToPDF](_html2pdf_index_.html2pdf.md#converttopdf)
* [request](_html2pdf_index_.html2pdf.md#request)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new HTML2PDF**(accessToken: *`String`*): [HTML2PDF](_html2pdf_index_.html2pdf.md)


*Overrides [Client](_lib_client_.client.md).[constructor](_lib_client_.client.md#constructor)*

*Defined in html2pdf/index.ts:45*



Create a new HTML to PDF conversion API client


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| accessToken | `String`   |  User access token |





**Returns:** [HTML2PDF](_html2pdf_index_.html2pdf.md)

---


## Properties
<a id="accesstoken"></a>

###  accessToken

**●  accessToken**:  *`String`* 

*Inherited from [Client](_lib_client_.client.md).[accessToken](_lib_client_.client.md#accesstoken)*

*Defined in lib/client.ts:5*





___

<a id="baseurl"></a>

###  baseURL

**●  baseURL**:  *`String`* 

*Inherited from [Client](_lib_client_.client.md).[baseURL](_lib_client_.client.md#baseurl)*

*Defined in lib/client.ts:4*





___


## Methods
<a id="convert"></a>

###  convert

► **convert**(url: *`string`*, options?: *`Partial`.<[PDFConvertOptions](../interfaces/_html2pdf_index_.pdfconvertoptions.md)>*): `Promise`.<`Object`>



*Defined in html2pdf/index.ts:59*



Convert a web page accessible by the given URL and return the resulting document information


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string`  | - |   URL of the target website to be converted to PDF |
| options | `Partial`.<[PDFConvertOptions](../interfaces/_html2pdf_index_.pdfconvertoptions.md)>  |  {} |   API options |





**Returns:** `Promise`.<`Object`>





___

<a id="converthtml"></a>

###  convertHTML

► **convertHTML**(html: *`string`*, options?: *`Partial`.<[PDFConvertOptions](../interfaces/_html2pdf_index_.pdfconvertoptions.md)>*): `Promise`.<`Object`>



*Defined in html2pdf/index.ts:73*



Convert a HTML snippet to PDF and return the resulting document information


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| html | `string`  | - |   - |
| options | `Partial`.<[PDFConvertOptions](../interfaces/_html2pdf_index_.pdfconvertoptions.md)>  |  {} |   API options |





**Returns:** `Promise`.<`Object`>





___

<a id="converthtmltopdf"></a>

###  convertHTMLToPDF

► **convertHTMLToPDF**(url: *`string`*, options?: *`Partial`.<[PDFConvertOptions](../interfaces/_html2pdf_index_.pdfconvertoptions.md)>*): `Promise`.<`Object`>



*Defined in html2pdf/index.ts:100*



Convert a HTML snippet to PDF and return the resulting PDF document as Buffer


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string`  | - |   URL of the target website to be converted to PDF |
| options | `Partial`.<[PDFConvertOptions](../interfaces/_html2pdf_index_.pdfconvertoptions.md)>  |  {} |   API options |





**Returns:** `Promise`.<`Object`>





___

<a id="converttopdf"></a>

###  convertToPDF

► **convertToPDF**(url: *`string`*, options?: *`Partial`.<[PDFConvertOptions](../interfaces/_html2pdf_index_.pdfconvertoptions.md)>*): `Promise`.<`Object`>



*Defined in html2pdf/index.ts:87*



Convert a web page accessible by the given URL and return the resulting PDF document as Buffer


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string`  | - |   URL of the target website to be converted to PDF |
| options | `Partial`.<[PDFConvertOptions](../interfaces/_html2pdf_index_.pdfconvertoptions.md)>  |  {} |   API options |





**Returns:** `Promise`.<`Object`>





___

<a id="request"></a>

###  request

► **request**(path: *`String`*, options?: *`CoreOptions`*): `Promise`.<`Object`>



*Inherited from [Client](_lib_client_.client.md).[request](_lib_client_.client.md#request)*

*Defined in lib/client.ts:12*



**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| path | `String`  | - |   - |
| options | `CoreOptions`  |  {} |   - |





**Returns:** `Promise`.<`Object`>





___


