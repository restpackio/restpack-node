import { Client } from "../lib/client";

/**
 * Options supplied to the Restpack API for conversion
 */
export interface PDFConvertOptions {
  /** If specified, ensures that the resulting file is saved with the given name. */
  filename: string;
  /** Ensure that the captured document does not get cached / stored for further use. You can not use json mode with this setting as it would not be possible to provide a CDN URL. */
  privacy: boolean;
  /** Custom page size for created document */
  pdf_page:
    | "A0"
    | "A1"
    | "A2"
    | "A3"
    | "A4"
    | "A5"
    | "Legal"
    | "Letter"
    | "Tabloid"
    | "Ledger"
    | "Full";
  /** CSS style margin sizes. */
  pdf_margins: string;
  /** Page orientation */
  pdf_orientation: "portrait" | "landscape";
  /** Custom pdf page width. Must be used together with pdf_height. Prefer pdf_page if you don't have an exact page size requirement.. Unit can be either px for pixels, in for inches. */
  pdf_width: string;
  /** Custom pdf page height. Check pdf_width for details. */
  pdf_height: string;
  /**
   * HTML template for page header. It should have a valid markup and can contain elements with classes 'pageNumber', 'totalPages', 'url', 'title' or 'date'. Header is automatically added to all pages.
   * Note that you need to have top margins on your documents in order to have the header show up.
   * Please add margins using pdf_margins.
   */
  pdf_header: string;
  /** HTML template for page footer. Please check pdf_header information for details. */
  pdf_footer: string;
  /** Returns only specified pages of the PDF document */
  pdf_page_ranges: string;
  /** Enable document encryption */
  pdf_encryption: "40" | "128";
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
  /** Secure PDF document with a user password. With user password person can only view the document and allowed operations */
  user_password: string;
  /** Secure PDF document with a owner password. */
  owner_password: string;
  /** Block / hide European Union cookie warnings before capture. */
  block_cookie_warnings: boolean;
}

interface CallOptions extends PDFConvertOptions {
  url: string;
  html: string;
  json: boolean;
}

export default class HTML2PDF extends Client {
  /**
   * Create a new HTML to PDF conversion API client
   * @param accessToken User access token
   */
  constructor(accessToken: String) {
    super("https://restpack.io/api/html2pdf/v7", accessToken);
  }

  /**
   * Convert a web page accessible by the given URL and return the resulting document information
   * @param url URL of the target website to be converted to PDF
   * @param options API options
   */
  convert(url: string, options: Partial<PDFConvertOptions> = {}) {
    let opts = options as CallOptions;

    opts.json = true;
    opts.url = url;

    return this.request("/convert", { method: "POST", json: opts });
  }

  /**
   * Convert a HTML snippet to PDF and return the resulting document information
   * @param url URL of the target website to be converted to PDF
   * @param options API options
   */
  convertHTML(html: string, options: Partial<PDFConvertOptions> = {}) {
    let opts = options as CallOptions;

    opts.json = true;
    opts.html = html;

    return this.request("/convert", { method: "POST", json: opts });
  }

  /**
   * Convert a web page accessible by the given URL and return the resulting PDF document as Buffer
   * @param url URL of the target website to be converted to PDF
   * @param options API options
   */
  convertToPDF(url: string, options: Partial<PDFConvertOptions> = {}) {
    let opts = options as CallOptions;

    opts.url = url;

    return this.request("/convert", {
      method: "POST",
      encoding: null,
      json: opts,
    });
  }

  /**
   * Convert a HTML snippet to PDF and return the resulting PDF document as Buffer
   * @param url URL of the target website to be converted to PDF
   * @param options API options
   */
  convertHTMLToPDF(url: string, options: Partial<PDFConvertOptions> = {}) {
    let opts = options as CallOptions;

    opts.url = url;

    return this.request("/convert", {
      method: "POST",
      encoding: null,
      json: opts,
    });
  }
}
