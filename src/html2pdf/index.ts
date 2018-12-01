import { Client } from "../lib/client"

/**
 * Options supplied to the Restpack API for conversion
 */
export interface PDFConvertOptions {
  /** Force rendering a new screenshot disregarding the cache status. */
  fresh: boolean
  /** Custom page size for created document */
  pdf_page: 'A0' | 'A1' | 'A2' | 'A3' | 'A4' | 'A5' | 'Legal' | 'Letter' | 'Tabloid' | 'Ledger' | 'Full'
  /** CSS style margin sizes. */
  pdf_margins: string
  /** Page orientation */
  pdf_orientation: 'portrait' | 'landscape'
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

interface CallOptions extends PDFConvertOptions {
  url: string
  html: string
  json: boolean
}

export default class HTML2PDF extends Client {
  /**
   * Create a new HTML to PDF conversion API client
   * @param accessToken User access token
   */
  constructor(accessToken:String) {
    super("https://restpack.io/api/html2pdf/v5", accessToken);
  }

  /**
   * Convert a web page accessible by the given URL and return the resulting document information
   * @param url URL of the target website to be converted to PDF
   * @param options API options
   */
  convert(url: string, options:Partial<PDFConvertOptions> = {}) {
    let opts = options as CallOptions

    opts.json = true;
    opts.url = url

    return this.request("/convert", { method: "POST", json: opts })
  }

  /**
   * Convert a HTML snippet to PDF and return the resulting document information
   * @param url URL of the target website to be converted to PDF
   * @param options API options
   */
  convertHTML(html: string, options:Partial<PDFConvertOptions> = {}) {
    let opts = options as CallOptions

    opts.json = true;
    opts.html = html

    return this.request("/convert", { method: "POST", json: opts })
  }

  /**
   * Convert a web page accessible by the given URL and return the resulting PDF document as Buffer
   * @param url URL of the target website to be converted to PDF
   * @param options API options
   */
  convertToPDF(url: string, options:Partial<PDFConvertOptions> = {}) {
    let opts = options as CallOptions

    opts.url = url

    return this.request("/convert", { method: "POST", encoding: null, json: opts })
  }

  /**
   * Convert a HTML snippet to PDF and return the resulting PDF document as Buffer
   * @param url URL of the target website to be converted to PDF
   * @param options API options
   */
  convertHTMLToPDF(url: string, options:Partial<PDFConvertOptions> = {}) {
    let opts = options as CallOptions

    opts.url = url

    return this.request("/convert", { method: "POST", encoding: null, json: opts })
  }
}
