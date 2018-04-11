[restpack-node](../README.md) > ["screenshot/index"](../modules/_screenshot_index_.md) > [ScreenshotCaptureOptions](../interfaces/_screenshot_index_.screenshotcaptureoptions.md)



# Interface: ScreenshotCaptureOptions


Options supplied to the Restpack Screenshot API for conversion

## Hierarchy

**ScreenshotCaptureOptions**

↳  [CallOptions](_screenshot_index_.calloptions.md)









## Properties
<a id="accept_language"></a>

###  accept_language

**●  accept_language**:  *`string`* 

*Defined in screenshot/index.ts:32*



Custom accept-language header string for the web request.




___

<a id="allow_failed"></a>

###  allow_failed

**●  allow_failed**:  *`boolean`* 

*Defined in screenshot/index.ts:42*



By default, any response from remote server outside http 200-299 status codes generates an error. If you wish to capture error pages, pass true.




___

<a id="css"></a>

###  css

**●  css**:  *`string`* 

*Defined in screenshot/index.ts:22*



Additional CSS string to be injected into the page before render.




___

<a id="delay"></a>

###  delay

**●  delay**:  *`number`* 

*Defined in screenshot/index.ts:26*



Time in milliseconds to delay capture after page load




___

<a id="element_selector"></a>

###  element_selector

**●  element_selector**:  *`string`* 

*Defined in screenshot/index.ts:34*



A CSS selector to be used with element rendering mode.




___

<a id="emulate_media"></a>

###  emulate_media

**●  emulate_media**:  *"screen"⎮"print"* 

*Defined in screenshot/index.ts:40*



Force CSS media emulation for print or screen.




___

<a id="format"></a>

###  format

**●  format**:  *"jpg"⎮"png"⎮"pdf"⎮"html"* 

*Defined in screenshot/index.ts:12*



Preferred image output format. If you need a raw html string you can pass html as format




___

<a id="fresh"></a>

###  fresh

**●  fresh**:  *`boolean`* 

*Defined in screenshot/index.ts:8*



Force rendering a new screenshot disregarding the cache status.




___

<a id="headers"></a>

###  headers

**●  headers**:  *`string`* 

*Defined in screenshot/index.ts:38*



Additional headers seperated with newline




___

<a id="height"></a>

###  height

**●  height**:  *`number`* 

*Defined in screenshot/index.ts:16*



Preferred viewport height in pixels.




___

<a id="js"></a>

###  js

**●  js**:  *`string`* 

*Defined in screenshot/index.ts:24*



Additional JS string to be injected into the page before render.




___

<a id="mode"></a>

###  mode

**●  mode**:  *"fullpage"⎮"viewport"⎮"element"* 

*Defined in screenshot/index.ts:10*



Capturing mode.




___

<a id="retina"></a>

###  retina

**●  retina**:  *`boolean`* 

*Defined in screenshot/index.ts:36*



Generate retina sized screen capture (2x device pixel ratio).




___

<a id="shutter"></a>

###  shutter

**●  shutter**:  *`string`* 

*Defined in screenshot/index.ts:46*



Wait until a DOM element matching the provided css selector becomes present on the page.




___

<a id="thumbnail_height"></a>

###  thumbnail_height

**●  thumbnail_height**:  *`number`* 

*Defined in screenshot/index.ts:20*



Preferred thumbnail height, requires thumbnail_width to be set, unbounded if omitted.




___

<a id="thumbnail_width"></a>

###  thumbnail_width

**●  thumbnail_width**:  *`number`* 

*Defined in screenshot/index.ts:18*



In case you want a thumbnail image, provide a preferred width..




___

<a id="ttl"></a>

###  ttl

**●  ttl**:  *`number`* 

*Defined in screenshot/index.ts:28*



Time in milliseconds for the resulting image to be cached for further requests.




___

<a id="user_agent"></a>

###  user_agent

**●  user_agent**:  *`string`* 

*Defined in screenshot/index.ts:30*



Custom user-agent header string for the web request.




___

<a id="wait"></a>

###  wait

**●  wait**:  *"load"⎮"network"⎮"dom"* 

*Defined in screenshot/index.ts:44*



Wait until window load event fires or network becomes idle before capturing the page.




___

<a id="width"></a>

###  width

**●  width**:  *`number`* 

*Defined in screenshot/index.ts:14*



Preferred viewport width in pixels.




___


