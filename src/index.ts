import HTML2PDF from "./html2pdf"
import Screenshot from "./screenshot"

export default {
  /** Create a new HTML to PDF API Client with supplied user access token */
  html2pdf: (accessToken:String) => new HTML2PDF(accessToken),
  /** Create a new Screenshot Client with supplied user access token */
  screenshot: (accessToken:String) => new Screenshot(accessToken)
}
