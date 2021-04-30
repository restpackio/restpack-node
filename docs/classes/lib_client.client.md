[@restpack/client](../README.md) / [Exports](../modules.md) / [lib/client](../modules/lib_client.md) / Client

# Class: Client

[lib/client](../modules/lib_client.md).Client

## Hierarchy

* **Client**

  ↳ [*default*](html2pdf.default.md)

  ↳ [*default*](screenshot.default.md)

## Table of contents

### Constructors

- [constructor](lib_client.client.md#constructor)

### Properties

- [accessToken](lib_client.client.md#accesstoken)
- [baseURL](lib_client.client.md#baseurl)

### Methods

- [request](lib_client.client.md#request)

## Constructors

### constructor

\+ **new Client**(`baseURL`: String, `accessToken`: String): [*Client*](lib_client.client.md)

#### Parameters:

| Name | Type |
| :------ | :------ |
| `baseURL` | String |
| `accessToken` | String |

**Returns:** [*Client*](lib_client.client.md)

Defined in: [lib/client.ts:5](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/lib/client.ts#L5)

## Properties

### accessToken

• **accessToken**: String

Defined in: [lib/client.ts:5](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/lib/client.ts#L5)

___

### baseURL

• **baseURL**: String

Defined in: [lib/client.ts:4](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/lib/client.ts#L4)

## Methods

### request

▸ **request**(`path`: String, `options?`: CoreOptions): *Promise*<unknown\>

#### Parameters:

| Name | Type | Default value |
| :------ | :------ | :------ |
| `path` | String | - |
| `options` | CoreOptions | {} |

**Returns:** *Promise*<unknown\>

Defined in: [lib/client.ts:12](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/lib/client.ts#L12)
