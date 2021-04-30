[@restpack/client](../README.md) / [Exports](../modules.md) / [screenshot](../modules/screenshot.md) / default

# Class: default

[screenshot](../modules/screenshot.md).default

## Hierarchy

* [*Client*](lib_client.client.md)

  ↳ **default**

## Table of contents

### Constructors

- [constructor](screenshot.default.md#constructor)

### Properties

- [accessToken](screenshot.default.md#accesstoken)
- [baseURL](screenshot.default.md#baseurl)

### Methods

- [capture](screenshot.default.md#capture)
- [captureHTML](screenshot.default.md#capturehtml)
- [captureHTMLToImage](screenshot.default.md#capturehtmltoimage)
- [captureToImage](screenshot.default.md#capturetoimage)
- [request](screenshot.default.md#request)

## Constructors

### constructor

\+ **new default**(`accessToken`: String): [*default*](screenshot.default.md)

Create a new HTML to PDF conversion API client

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `accessToken` | String | User access token |

**Returns:** [*default*](screenshot.default.md)

Overrides: [Client](lib_client.client.md)

Defined in: [screenshot/index.ts:63](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/screenshot/index.ts#L63)

## Properties

### accessToken

• **accessToken**: String

Inherited from: [Client](lib_client.client.md).[accessToken](lib_client.client.md#accesstoken)

Defined in: [lib/client.ts:5](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/lib/client.ts#L5)

___

### baseURL

• **baseURL**: String

Inherited from: [Client](lib_client.client.md).[baseURL](lib_client.client.md#baseurl)

Defined in: [lib/client.ts:4](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/lib/client.ts#L4)

## Methods

### capture

▸ **capture**(`url`: *string*, `options?`: *Partial*<[*ScreenshotCaptureOptions*](../interfaces/screenshot.screenshotcaptureoptions.md)\>): *Promise*<unknown\>

Capture a web page accessible by the given URL and return the resulting document information

#### Parameters:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | *string* | - | URL of the target website to be converted to PDF |
| `options` | *Partial*<[*ScreenshotCaptureOptions*](../interfaces/screenshot.screenshotcaptureoptions.md)\> | {} | API options |

**Returns:** *Promise*<unknown\>

Defined in: [screenshot/index.ts:77](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/screenshot/index.ts#L77)

___

### captureHTML

▸ **captureHTML**(`html`: *string*, `options?`: *Partial*<[*ScreenshotCaptureOptions*](../interfaces/screenshot.screenshotcaptureoptions.md)\>): *Promise*<unknown\>

Capture an HTML snippet to and return the resulting document information

#### Parameters:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `html` | *string* | - | - |
| `options` | *Partial*<[*ScreenshotCaptureOptions*](../interfaces/screenshot.screenshotcaptureoptions.md)\> | {} | API options |

**Returns:** *Promise*<unknown\>

Defined in: [screenshot/index.ts:91](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/screenshot/index.ts#L91)

___

### captureHTMLToImage

▸ **captureHTMLToImage**(`html`: *string*, `options?`: *Partial*<[*ScreenshotCaptureOptions*](../interfaces/screenshot.screenshotcaptureoptions.md)\>): *Promise*<unknown\>

Capture an HTML snippet and return the resulting PDF document as Buffer

#### Parameters:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `html` | *string* | - | - |
| `options` | *Partial*<[*ScreenshotCaptureOptions*](../interfaces/screenshot.screenshotcaptureoptions.md)\> | {} | API options |

**Returns:** *Promise*<unknown\>

Defined in: [screenshot/index.ts:122](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/screenshot/index.ts#L122)

___

### captureToImage

▸ **captureToImage**(`url`: *string*, `options?`: *Partial*<[*ScreenshotCaptureOptions*](../interfaces/screenshot.screenshotcaptureoptions.md)\>): *Promise*<unknown\>

Capture a web page accessible by the given URL and return the resulting PDF document as Buffer

#### Parameters:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | *string* | - | URL of the target website to be converted to PDF |
| `options` | *Partial*<[*ScreenshotCaptureOptions*](../interfaces/screenshot.screenshotcaptureoptions.md)\> | {} | API options |

**Returns:** *Promise*<unknown\>

Defined in: [screenshot/index.ts:105](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/screenshot/index.ts#L105)

___

### request

▸ **request**(`path`: String, `options?`: CoreOptions): *Promise*<unknown\>

#### Parameters:

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | String | - |
| `options` | CoreOptions | {} |

**Returns:** *Promise*<unknown\>

Inherited from: [Client](lib_client.client.md)

Defined in: [lib/client.ts:12](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/lib/client.ts#L12)
