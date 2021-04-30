[@restpack/client](../README.md) / [Exports](../modules.md) / [screenshot](../modules/screenshot.md) / ScreenshotCaptureOptions

# Interface: ScreenshotCaptureOptions

[screenshot](../modules/screenshot.md).ScreenshotCaptureOptions

Options supplied to the Restpack Screenshot API for conversion

## Table of contents

### Properties

- [allow\_failed](screenshot.screenshotcaptureoptions.md#allow_failed)
- [block\_ads](screenshot.screenshotcaptureoptions.md#block_ads)
- [block\_cookie\_warnings](screenshot.screenshotcaptureoptions.md#block_cookie_warnings)
- [cache\_ttl](screenshot.screenshotcaptureoptions.md#cache_ttl)
- [css](screenshot.screenshotcaptureoptions.md#css)
- [delay](screenshot.screenshotcaptureoptions.md#delay)
- [element\_selector](screenshot.screenshotcaptureoptions.md#element_selector)
- [emulate\_media](screenshot.screenshotcaptureoptions.md#emulate_media)
- [filename](screenshot.screenshotcaptureoptions.md#filename)
- [format](screenshot.screenshotcaptureoptions.md#format)
- [grayscale](screenshot.screenshotcaptureoptions.md#grayscale)
- [headers](screenshot.screenshotcaptureoptions.md#headers)
- [height](screenshot.screenshotcaptureoptions.md#height)
- [js](screenshot.screenshotcaptureoptions.md#js)
- [mode](screenshot.screenshotcaptureoptions.md#mode)
- [omit\_background](screenshot.screenshotcaptureoptions.md#omit_background)
- [privacy](screenshot.screenshotcaptureoptions.md#privacy)
- [retina](screenshot.screenshotcaptureoptions.md#retina)
- [shutter](screenshot.screenshotcaptureoptions.md#shutter)
- [thumbnail\_height](screenshot.screenshotcaptureoptions.md#thumbnail_height)
- [thumbnail\_width](screenshot.screenshotcaptureoptions.md#thumbnail_width)
- [user\_agent](screenshot.screenshotcaptureoptions.md#user_agent)
- [wait](screenshot.screenshotcaptureoptions.md#wait)
- [width](screenshot.screenshotcaptureoptions.md#width)

## Properties

### allow\_failed

• **allow\_failed**: *boolean*

By default, any response from remote server outside http 200-299 status codes generates an error. If you wish to capture error pages, pass true.

Defined in: [screenshot/index.ts:42](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/screenshot/index.ts#L42)

___

### block\_ads

• **block\_ads**: *boolean*

Block / hide ads on the page.

Defined in: [screenshot/index.ts:48](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/screenshot/index.ts#L48)

___

### block\_cookie\_warnings

• **block\_cookie\_warnings**: *boolean*

Block / hide European Union cookie warnings before capture.

Defined in: [screenshot/index.ts:50](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/screenshot/index.ts#L50)

___

### cache\_ttl

• **cache\_ttl**: *number*

Time in seconds for the resulting image to be cached for further requests.

Defined in: [screenshot/index.ts:30](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/screenshot/index.ts#L30)

___

### css

• **css**: *string*

Additional CSS string to be injected into the page before render.

Defined in: [screenshot/index.ts:24](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/screenshot/index.ts#L24)

___

### delay

• **delay**: *number*

Time in milliseconds to delay capture after page load

Defined in: [screenshot/index.ts:28](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/screenshot/index.ts#L28)

___

### element\_selector

• **element\_selector**: *string*

A CSS selector to be used with element rendering mode.

Defined in: [screenshot/index.ts:34](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/screenshot/index.ts#L34)

___

### emulate\_media

• **emulate\_media**: ``"screen"`` \| ``"print"``

Force CSS media emulation for print or screen.

Defined in: [screenshot/index.ts:40](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/screenshot/index.ts#L40)

___

### filename

• **filename**: *string*

If specified, ensures that the resulting file is saved with the given name.

Defined in: [screenshot/index.ts:8](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/screenshot/index.ts#L8)

___

### format

• **format**: ``"jpg"`` \| ``"png"`` \| ``"pdf"`` \| ``"html"``

Preferred image output format. If you need a raw html string you can pass html as format

Defined in: [screenshot/index.ts:14](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/screenshot/index.ts#L14)

___

### grayscale

• **grayscale**: *boolean*

Render document with grayscale filter

Defined in: [screenshot/index.ts:52](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/screenshot/index.ts#L52)

___

### headers

• **headers**: *string*

Additional headers seperated with newline

Defined in: [screenshot/index.ts:38](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/screenshot/index.ts#L38)

___

### height

• **height**: *number*

Preferred viewport height in pixels.

Defined in: [screenshot/index.ts:18](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/screenshot/index.ts#L18)

___

### js

• **js**: *string*

Additional JS string to be injected into the page before render.

Defined in: [screenshot/index.ts:26](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/screenshot/index.ts#L26)

___

### mode

• **mode**: ``"fullpage"`` \| ``"viewport"`` \| ``"element"``

Capturing mode.

Defined in: [screenshot/index.ts:12](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/screenshot/index.ts#L12)

___

### omit\_background

• **omit\_background**: *boolean*

Do not render with default white background. You can use this option to generate transparent PNG images.

Defined in: [screenshot/index.ts:54](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/screenshot/index.ts#L54)

___

### privacy

• **privacy**: *boolean*

Ensure that the captured document does not get cached / stored for further use. You can not use json mode with this setting as it would not be possible to provide a CDN URL.

Defined in: [screenshot/index.ts:10](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/screenshot/index.ts#L10)

___

### retina

• **retina**: *boolean*

Generate retina sized screen capture (2x device pixel ratio).

Defined in: [screenshot/index.ts:36](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/screenshot/index.ts#L36)

___

### shutter

• **shutter**: *string*

Wait until a DOM element matching the provided css selector becomes present on the page.

Defined in: [screenshot/index.ts:46](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/screenshot/index.ts#L46)

___

### thumbnail\_height

• **thumbnail\_height**: *number*

Preferred thumbnail height, requires thumbnail_width to be set, unbounded if omitted.

Defined in: [screenshot/index.ts:22](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/screenshot/index.ts#L22)

___

### thumbnail\_width

• **thumbnail\_width**: *number*

In case you want a thumbnail image, provide a preferred width..

Defined in: [screenshot/index.ts:20](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/screenshot/index.ts#L20)

___

### user\_agent

• **user\_agent**: *string*

Custom user-agent header string for the web request.

Defined in: [screenshot/index.ts:32](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/screenshot/index.ts#L32)

___

### wait

• **wait**: ``"load"`` \| ``"network"`` \| ``"dom"``

Wait until window load event fires or network becomes idle before capturing the page.

Defined in: [screenshot/index.ts:44](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/screenshot/index.ts#L44)

___

### width

• **width**: *number*

Preferred viewport width in pixels.

Defined in: [screenshot/index.ts:16](https://github.com/restpackio/restpack-node/blob/a6c59f1/src/screenshot/index.ts#L16)
