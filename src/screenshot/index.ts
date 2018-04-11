import { Client } from "../lib/client"

/**
 * Options supplied to the Restpack Screenshot API for conversion
 */
export interface ScreenshotCaptureOptions {
  /** Force rendering a new screenshot disregarding the cache status. */
  fresh: boolean
  /** Capturing mode. */
  mode: 'fullpage' | 'viewport' | 'element'
  /** Preferred image output format. If you need a raw html string you can pass html as format */
  format:  'jpg' | 'png' | 'pdf' | 'html'
  /** Preferred viewport width in pixels. */
  width: number
  /** Preferred viewport height in pixels. */
  height: number
  /** In case you want a thumbnail image, provide a preferred width.. */
  thumbnail_width: number
  /** Preferred thumbnail height, requires thumbnail_width to be set, unbounded if omitted. */
  thumbnail_height: number
  /** Additional CSS string to be injected into the page before render. */
  css: string
  /** Additional JS string to be injected into the page before render. */
  js: string
  /** Time in milliseconds to delay capture after page load */
  delay: number
  /** Time in milliseconds for the resulting image to be cached for further requests. */
  ttl: number
  /** Custom user-agent header string for the web request. */
  user_agent: string
  /** Custom accept-language header string for the web request. */
  accept_language: string
  /** A CSS selector to be used with element rendering mode. */
  element_selector: string
  /** Generate retina sized screen capture (2x device pixel ratio). */
  retina: boolean
  /** Additional headers seperated with newline */
  headers: string
  /** Force CSS media emulation for print or screen. */
  emulate_media: 'screen' | 'print'
  /** By default, any response from remote server outside http 200-299 status codes generates an error. If you wish to capture error pages, pass true. */
  allow_failed: boolean
  /** Wait until window load event fires or network becomes idle before capturing the page. */
  wait: 'load' | 'network' | 'dom'
  /** Wait until a DOM element matching the provided css selector becomes present on the page.  */
  shutter: string
}

interface CallOptions extends ScreenshotCaptureOptions {
  url: string
  html: string
  json: boolean
}

export default class Screenshot extends Client {
  /**
   * Create a new HTML to PDF conversion API client
   * @param accessToken User access token
   */
  constructor(accessToken:String) {
    super("https://restpack.io/api/html2pdf/v3", accessToken);
  }

  /**
   * Capture a web page accessible by the given URL and return the resulting document information
   * @param url URL of the target website to be converted to PDF
   * @param options API options
   */
  capture(url: string, options:Partial<ScreenshotCaptureOptions> = {}) {
    let opts = options as CallOptions

    opts.json = true;
    opts.url = url

    return this.request("/convert", { method: "POST", json: opts })
  }

  /**
   * Capture an HTML snippet to and return the resulting document information
   * @param url URL of the target website to be converted to PDF
   * @param options API options
   */
  captureHTML(html: string, options:Partial<ScreenshotCaptureOptions> = {}) {
    let opts = options as CallOptions

    opts.json = true;
    opts.html = html

    return this.request("/convert", { method: "POST", json: opts })
  }

  /**
   * Capture a web page accessible by the given URL and return the resulting PDF document as Buffer
   * @param url URL of the target website to be converted to PDF
   * @param options API options
   */
  captureToImage(url: string, options:Partial<ScreenshotCaptureOptions> = {}) {
    let opts = options as CallOptions

    opts.url = url

    return this.request("/convert", { method: "POST", encoding: null, json: opts })
  }

  /**
   * Capture an HTML snippet and return the resulting PDF document as Buffer
   * @param url URL of the target website to be converted to PDF
   * @param options API options
   */
  captureHTMLToImage(html: string, options:Partial<ScreenshotCaptureOptions> = {}) {
    let opts = options as CallOptions

    opts.html = html

    return this.request("/convert", { method: "POST", encoding: null, json: opts })
  }
}
