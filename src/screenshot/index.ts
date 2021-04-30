import { Client } from "../lib/client";

/**
 * Options supplied to the Restpack Screenshot API for conversion
 */
export interface ScreenshotCaptureOptions {
  /** If specified, ensures that the resulting file is saved with the given name. */
  filename: string;
  /** Ensure that the captured document does not get cached / stored for further use. You can not use json mode with this setting as it would not be possible to provide a CDN URL. */
  privacy: boolean;
  /** Capturing mode. */
  mode: "fullpage" | "viewport" | "element";
  /** Preferred image output format. If you need a raw html string you can pass html as format */
  format: "jpg" | "png" | "pdf" | "html";
  /** Preferred viewport width in pixels. */
  width: number;
  /** Preferred viewport height in pixels. */
  height: number;
  /** In case you want a thumbnail image, provide a preferred width.. */
  thumbnail_width: number;
  /** Preferred thumbnail height, requires thumbnail_width to be set, unbounded if omitted. */
  thumbnail_height: number;
  /** Additional CSS string to be injected into the page before render. */
  css: string;
  /** Additional JS string to be injected into the page before render. */
  js: string;
  /** Time in milliseconds to delay capture after page load */
  delay: number;
  /** Time in seconds for the resulting image to be cached for further requests. */
  cache_ttl: number;
  /** Custom user-agent header string for the web request. */
  user_agent: string;
  /** A CSS selector to be used with element rendering mode. */
  element_selector: string;
  /** Generate retina sized screen capture (2x device pixel ratio). */
  retina: boolean;
  /** Additional headers seperated with newline */
  headers: string;
  /** Force CSS media emulation for print or screen. */
  emulate_media: "screen" | "print";
  /** By default, any response from remote server outside http 200-299 status codes generates an error. If you wish to capture error pages, pass true. */
  allow_failed: boolean;
  /** Wait until window load event fires or network becomes idle before capturing the page. */
  wait: "load" | "network" | "dom";
  /** Wait until a DOM element matching the provided css selector becomes present on the page.  */
  shutter: string;
  /** Block / hide ads on the page. */
  block_ads: boolean;
  /** Block / hide European Union cookie warnings before capture. */
  block_cookie_warnings: boolean;
  /** Render document with grayscale filter */
  grayscale: boolean;
  /** Do not render with default white background. You can use this option to generate transparent PNG images. */
  omit_background: boolean;
}

interface CallOptions extends ScreenshotCaptureOptions {
  url: string;
  html: string;
  json: boolean;
}

export default class Screenshot extends Client {
  /**
   * Create a new HTML to PDF conversion API client
   * @param accessToken User access token
   */
  constructor(accessToken: String) {
    super("https://restpack.io/api/screenshot/v7", accessToken);
  }

  /**
   * Capture a web page accessible by the given URL and return the resulting document information
   * @param url URL of the target website to be converted to PDF
   * @param options API options
   */
  capture(url: string, options: Partial<ScreenshotCaptureOptions> = {}) {
    let opts = options as CallOptions;

    opts.json = true;
    opts.url = url;

    return this.request("/capture", { method: "POST", json: opts });
  }

  /**
   * Capture an HTML snippet to and return the resulting document information
   * @param url URL of the target website to be converted to PDF
   * @param options API options
   */
  captureHTML(html: string, options: Partial<ScreenshotCaptureOptions> = {}) {
    let opts = options as CallOptions;

    opts.json = true;
    opts.html = html;

    return this.request("/capture", { method: "POST", json: opts });
  }

  /**
   * Capture a web page accessible by the given URL and return the resulting PDF document as Buffer
   * @param url URL of the target website to be converted to PDF
   * @param options API options
   */
  captureToImage(url: string, options: Partial<ScreenshotCaptureOptions> = {}) {
    let opts = options as CallOptions;

    opts.url = url;

    return this.request("/capture", {
      method: "POST",
      encoding: null,
      json: opts,
    });
  }

  /**
   * Capture an HTML snippet and return the resulting PDF document as Buffer
   * @param url URL of the target website to be converted to PDF
   * @param options API options
   */
  captureHTMLToImage(
    html: string,
    options: Partial<ScreenshotCaptureOptions> = {}
  ) {
    let opts = options as CallOptions;

    opts.html = html;

    return this.request("/capture", {
      method: "POST",
      encoding: null,
      json: opts,
    });
  }
}
