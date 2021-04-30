[@restpack/client](../README.md) / [Exports](../modules.md) / [html2pdf](../modules/html2pdf.md) / default

# Class: default

[html2pdf](../modules/html2pdf.md).default

## Hierarchy

* [*Client*](lib_client.client.md)

  ↳ **default**

## Table of contents

### Constructors

- [constructor](html2pdf.default.md#constructor)

### Properties

- [accessToken](html2pdf.default.md#accesstoken)
- [baseURL](html2pdf.default.md#baseurl)

### Methods

- [convert](html2pdf.default.md#convert)
- [convertHTML](html2pdf.default.md#converthtml)
- [convertHTMLToPDF](html2pdf.default.md#converthtmltopdf)
- [convertToPDF](html2pdf.default.md#converttopdf)
- [request](html2pdf.default.md#request)

## Constructors

### constructor

\+ **new default**(`accessToken`: String): [*default*](html2pdf.default.md)

Create a new HTML to PDF conversion API client

#### Parameters:

| Name | Type | Description |
| :------ | :------ | :------ |
| `accessToken` | String | User access token |

**Returns:** [*default*](html2pdf.default.md)

Overrides: [Client](lib_client.client.md)

Defined in: [html2pdf/index.ts:78](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/html2pdf/index.ts#L78)

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

### convert

▸ **convert**(`url`: *string*, `options?`: *Partial*<[*PDFConvertOptions*](../interfaces/html2pdf.pdfconvertoptions.md)\>): *Promise*<unknown\>

Convert a web page accessible by the given URL and return the resulting document information

#### Parameters:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | *string* | - | URL of the target website to be converted to PDF |
| `options` | *Partial*<[*PDFConvertOptions*](../interfaces/html2pdf.pdfconvertoptions.md)\> | {} | API options |

**Returns:** *Promise*<unknown\>

Defined in: [html2pdf/index.ts:92](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/html2pdf/index.ts#L92)

___

### convertHTML

▸ **convertHTML**(`html`: *string*, `options?`: *Partial*<[*PDFConvertOptions*](../interfaces/html2pdf.pdfconvertoptions.md)\>): *Promise*<unknown\>

Convert a HTML snippet to PDF and return the resulting document information

#### Parameters:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `html` | *string* | - | - |
| `options` | *Partial*<[*PDFConvertOptions*](../interfaces/html2pdf.pdfconvertoptions.md)\> | {} | API options |

**Returns:** *Promise*<unknown\>

Defined in: [html2pdf/index.ts:106](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/html2pdf/index.ts#L106)

___

### convertHTMLToPDF

▸ **convertHTMLToPDF**(`url`: *string*, `options?`: *Partial*<[*PDFConvertOptions*](../interfaces/html2pdf.pdfconvertoptions.md)\>): *Promise*<unknown\>

Convert a HTML snippet to PDF and return the resulting PDF document as Buffer

#### Parameters:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | *string* | - | URL of the target website to be converted to PDF |
| `options` | *Partial*<[*PDFConvertOptions*](../interfaces/html2pdf.pdfconvertoptions.md)\> | {} | API options |

**Returns:** *Promise*<unknown\>

Defined in: [html2pdf/index.ts:137](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/html2pdf/index.ts#L137)

___

### convertToPDF

▸ **convertToPDF**(`url`: *string*, `options?`: *Partial*<[*PDFConvertOptions*](../interfaces/html2pdf.pdfconvertoptions.md)\>): *Promise*<unknown\>

Convert a web page accessible by the given URL and return the resulting PDF document as Buffer

#### Parameters:

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `url` | *string* | - | URL of the target website to be converted to PDF |
| `options` | *Partial*<[*PDFConvertOptions*](../interfaces/html2pdf.pdfconvertoptions.md)\> | {} | API options |

**Returns:** *Promise*<unknown\>

Defined in: [html2pdf/index.ts:120](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/html2pdf/index.ts#L120)

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
