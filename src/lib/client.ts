import request from "request"

export class Client {
  baseURL: String
  accessToken: String

  constructor(baseURL:String, accessToken:String) {
    this.baseURL = baseURL
    this.accessToken = accessToken
  }

  request(path:String, options:request.CoreOptions = {}) {
    return new Promise((res, rej) => {
      options = options || {};
      options.headers = options.headers || {};
      options.headers["x-access-token"] = this.accessToken;

      request(`${this.baseURL}${path}`, options, (err, response, body) => {
        if (err)
          return rej(err);
        else if (response.statusCode != 200) {
          return rej(body)
        } else {
          return res(body);
        }
      })
    })
  }
}
