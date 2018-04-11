[restpack-node](../README.md) > ["screenshot/index"](../modules/_screenshot_index_.md) > [HTML2PDF](../classes/_screenshot_index_.html2pdf.md)



# Class: HTML2PDF

## Hierarchy


 [Client](_lib_client_.client.md)

**↳ HTML2PDF**







## Index

### Constructors

* [constructor](_screenshot_index_.html2pdf.md#constructor)


### Properties

* [accessToken](_screenshot_index_.html2pdf.md#accesstoken)
* [baseURL](_screenshot_index_.html2pdf.md#baseurl)


### Methods

* [capture](_screenshot_index_.html2pdf.md#capture)
* [captureHTML](_screenshot_index_.html2pdf.md#capturehtml)
* [captureHTMLToImage](_screenshot_index_.html2pdf.md#capturehtmltoimage)
* [captureToImage](_screenshot_index_.html2pdf.md#capturetoimage)
* [request](_screenshot_index_.html2pdf.md#request)



---
## Constructors
<a id="constructor"></a>


### ⊕ **new HTML2PDF**(accessToken: *`String`*): [HTML2PDF](_screenshot_index_.html2pdf.md)


*Overrides [Client](_lib_client_.client.md).[constructor](_lib_client_.client.md#constructor)*

*Defined in screenshot/index.ts:55*



Create a new HTML to PDF conversion API client


**Parameters:**

| Param | Type | Description |
| ------ | ------ | ------ |
| accessToken | `String`   |  User access token |





**Returns:** [HTML2PDF](_screenshot_index_.html2pdf.md)

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
<a id="capture"></a>

###  capture

► **capture**(url: *`string`*, options?: *`Partial`.<[ScreenshotCaptureOptions](../interfaces/_screenshot_index_.screenshotcaptureoptions.md)>*): `Promise`.<`Object`>



*Defined in screenshot/index.ts:69*



Capture a web page accessible by the given URL and return the resulting document information


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string`  | - |   URL of the target website to be converted to PDF |
| options | `Partial`.<[ScreenshotCaptureOptions](../interfaces/_screenshot_index_.screenshotcaptureoptions.md)>  |  {} |   API options |





**Returns:** `Promise`.<`Object`>





___

<a id="capturehtml"></a>

###  captureHTML

► **captureHTML**(html: *`string`*, options?: *`Partial`.<[ScreenshotCaptureOptions](../interfaces/_screenshot_index_.screenshotcaptureoptions.md)>*): `Promise`.<`Object`>



*Defined in screenshot/index.ts:83*



Capture an HTML snippet to and return the resulting document information


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| html | `string`  | - |   - |
| options | `Partial`.<[ScreenshotCaptureOptions](../interfaces/_screenshot_index_.screenshotcaptureoptions.md)>  |  {} |   API options |





**Returns:** `Promise`.<`Object`>





___

<a id="capturehtmltoimage"></a>

###  captureHTMLToImage

► **captureHTMLToImage**(html: *`string`*, options?: *`Partial`.<[ScreenshotCaptureOptions](../interfaces/_screenshot_index_.screenshotcaptureoptions.md)>*): `Promise`.<`Object`>



*Defined in screenshot/index.ts:110*



Capture an HTML snippet and return the resulting PDF document as Buffer


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| html | `string`  | - |   - |
| options | `Partial`.<[ScreenshotCaptureOptions](../interfaces/_screenshot_index_.screenshotcaptureoptions.md)>  |  {} |   API options |





**Returns:** `Promise`.<`Object`>





___

<a id="capturetoimage"></a>

###  captureToImage

► **captureToImage**(url: *`string`*, options?: *`Partial`.<[ScreenshotCaptureOptions](../interfaces/_screenshot_index_.screenshotcaptureoptions.md)>*): `Promise`.<`Object`>



*Defined in screenshot/index.ts:97*



Capture a web page accessible by the given URL and return the resulting PDF document as Buffer


**Parameters:**

| Param | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| url | `string`  | - |   URL of the target website to be converted to PDF |
| options | `Partial`.<[ScreenshotCaptureOptions](../interfaces/_screenshot_index_.screenshotcaptureoptions.md)>  |  {} |   API options |





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


