[restpack-node](../README.md) > ["screenshot/index"](../modules/_screenshot_index_.md) > [CallOptions](../interfaces/_screenshot_index_.calloptions.md)



# Interface: CallOptions

## Hierarchy


 [ScreenshotCaptureOptions](_screenshot_index_.screenshotcaptureoptions.md)

**↳ CallOptions**








## Properties
<a id="accept_language"></a>

###  accept_language

**●  accept_language**:  *`string`* 

*Inherited from [ScreenshotCaptureOptions](_screenshot_index_.screenshotcaptureoptions.md).[accept_language](_screenshot_index_.screenshotcaptureoptions.md#accept_language)*

*Defined in screenshot/index.ts:32*



Custom accept-language header string for the web request.




___

<a id="allow_failed"></a>

###  allow_failed

**●  allow_failed**:  *`boolean`* 

*Inherited from [ScreenshotCaptureOptions](_screenshot_index_.screenshotcaptureoptions.md).[allow_failed](_screenshot_index_.screenshotcaptureoptions.md#allow_failed)*

*Defined in screenshot/index.ts:42*



By default, any response from remote server outside http 200-299 status codes generates an error. If you wish to capture error pages, pass true.




___

<a id="css"></a>

###  css

**●  css**:  *`string`* 

*Inherited from [ScreenshotCaptureOptions](_screenshot_index_.screenshotcaptureoptions.md).[css](_screenshot_index_.screenshotcaptureoptions.md#css)*

*Defined in screenshot/index.ts:22*



Additional CSS string to be injected into the page before render.




___

<a id="delay"></a>

###  delay

**●  delay**:  *`number`* 

*Inherited from [ScreenshotCaptureOptions](_screenshot_index_.screenshotcaptureoptions.md).[delay](_screenshot_index_.screenshotcaptureoptions.md#delay)*

*Defined in screenshot/index.ts:26*



Time in milliseconds to delay capture after page load




___

<a id="element_selector"></a>

###  element_selector

**●  element_selector**:  *`string`* 

*Inherited from [ScreenshotCaptureOptions](_screenshot_index_.screenshotcaptureoptions.md).[element_selector](_screenshot_index_.screenshotcaptureoptions.md#element_selector)*

*Defined in screenshot/index.ts:34*



A CSS selector to be used with element rendering mode.




___

<a id="emulate_media"></a>

###  emulate_media

**●  emulate_media**:  *"screen"⎮"print"* 

*Inherited from [ScreenshotCaptureOptions](_screenshot_index_.screenshotcaptureoptions.md).[emulate_media](_screenshot_index_.screenshotcaptureoptions.md#emulate_media)*

*Defined in screenshot/index.ts:40*



Force CSS media emulation for print or screen.




___

<a id="format"></a>

###  format

**●  format**:  *"jpg"⎮"png"⎮"pdf"⎮"html"* 

*Inherited from [ScreenshotCaptureOptions](_screenshot_index_.screenshotcaptureoptions.md).[format](_screenshot_index_.screenshotcaptureoptions.md#format)*

*Defined in screenshot/index.ts:12*



Preferred image output format. If you need a raw html string you can pass html as format




___

<a id="fresh"></a>

###  fresh

**●  fresh**:  *`boolean`* 

*Inherited from [ScreenshotCaptureOptions](_screenshot_index_.screenshotcaptureoptions.md).[fresh](_screenshot_index_.screenshotcaptureoptions.md#fresh)*

*Defined in screenshot/index.ts:8*



Force rendering a new screenshot disregarding the cache status.




___

<a id="headers"></a>

###  headers

**●  headers**:  *`string`* 

*Inherited from [ScreenshotCaptureOptions](_screenshot_index_.screenshotcaptureoptions.md).[headers](_screenshot_index_.screenshotcaptureoptions.md#headers)*

*Defined in screenshot/index.ts:38*



Additional headers seperated with newline




___

<a id="height"></a>

###  height

**●  height**:  *`number`* 

*Inherited from [ScreenshotCaptureOptions](_screenshot_index_.screenshotcaptureoptions.md).[height](_screenshot_index_.screenshotcaptureoptions.md#height)*

*Defined in screenshot/index.ts:16*



Preferred viewport height in pixels.




___

<a id="html"></a>

###  html

**●  html**:  *`string`* 

*Defined in screenshot/index.ts:51*





___

<a id="js"></a>

###  js

**●  js**:  *`string`* 

*Inherited from [ScreenshotCaptureOptions](_screenshot_index_.screenshotcaptureoptions.md).[js](_screenshot_index_.screenshotcaptureoptions.md#js)*

*Defined in screenshot/index.ts:24*



Additional JS string to be injected into the page before render.




___

<a id="json"></a>

###  json

**●  json**:  *`boolean`* 

*Defined in screenshot/index.ts:52*





___

<a id="mode"></a>

###  mode

**●  mode**:  *"fullpage"⎮"viewport"⎮"element"* 

*Inherited from [ScreenshotCaptureOptions](_screenshot_index_.screenshotcaptureoptions.md).[mode](_screenshot_index_.screenshotcaptureoptions.md#mode)*

*Defined in screenshot/index.ts:10*



Capturing mode.




___

<a id="retina"></a>

###  retina

**●  retina**:  *`boolean`* 

*Inherited from [ScreenshotCaptureOptions](_screenshot_index_.screenshotcaptureoptions.md).[retina](_screenshot_index_.screenshotcaptureoptions.md#retina)*

*Defined in screenshot/index.ts:36*



Generate retina sized screen capture (2x device pixel ratio).




___

<a id="shutter"></a>

###  shutter

**●  shutter**:  *`string`* 

*Inherited from [ScreenshotCaptureOptions](_screenshot_index_.screenshotcaptureoptions.md).[shutter](_screenshot_index_.screenshotcaptureoptions.md#shutter)*

*Defined in screenshot/index.ts:46*



Wait until a DOM element matching the provided css selector becomes present on the page.




___

<a id="thumbnail_height"></a>

###  thumbnail_height

**●  thumbnail_height**:  *`number`* 

*Inherited from [ScreenshotCaptureOptions](_screenshot_index_.screenshotcaptureoptions.md).[thumbnail_height](_screenshot_index_.screenshotcaptureoptions.md#thumbnail_height)*

*Defined in screenshot/index.ts:20*



Preferred thumbnail height, requires thumbnail_width to be set, unbounded if omitted.




___

<a id="thumbnail_width"></a>

###  thumbnail_width

**●  thumbnail_width**:  *`number`* 

*Inherited from [ScreenshotCaptureOptions](_screenshot_index_.screenshotcaptureoptions.md).[thumbnail_width](_screenshot_index_.screenshotcaptureoptions.md#thumbnail_width)*

*Defined in screenshot/index.ts:18*



In case you want a thumbnail image, provide a preferred width..




___

<a id="ttl"></a>

###  ttl

**●  ttl**:  *`number`* 

*Inherited from [ScreenshotCaptureOptions](_screenshot_index_.screenshotcaptureoptions.md).[ttl](_screenshot_index_.screenshotcaptureoptions.md#ttl)*

*Defined in screenshot/index.ts:28*



Time in milliseconds for the resulting image to be cached for further requests.




___

<a id="url"></a>

###  url

**●  url**:  *`string`* 

*Defined in screenshot/index.ts:50*





___

<a id="user_agent"></a>

###  user_agent

**●  user_agent**:  *`string`* 

*Inherited from [ScreenshotCaptureOptions](_screenshot_index_.screenshotcaptureoptions.md).[user_agent](_screenshot_index_.screenshotcaptureoptions.md#user_agent)*

*Defined in screenshot/index.ts:30*



Custom user-agent header string for the web request.




___

<a id="wait"></a>

###  wait

**●  wait**:  *"load"⎮"network"⎮"dom"* 

*Inherited from [ScreenshotCaptureOptions](_screenshot_index_.screenshotcaptureoptions.md).[wait](_screenshot_index_.screenshotcaptureoptions.md#wait)*

*Defined in screenshot/index.ts:44*



Wait until window load event fires or network becomes idle before capturing the page.




___

<a id="width"></a>

###  width

**●  width**:  *`number`* 

*Inherited from [ScreenshotCaptureOptions](_screenshot_index_.screenshotcaptureoptions.md).[width](_screenshot_index_.screenshotcaptureoptions.md#width)*

*Defined in screenshot/index.ts:14*



Preferred viewport width in pixels.




___


