import URITemplate = require('uri-templates');
const Heroku = require('heroku-client');

export default class BaseHerokuAPIClient {
  private _client: any;
  constructor(options?: {token?: string}) {
    this._client = new Heroku(options);
  }
  async request(method: string, path: string, uriParams: Object, body?: Object): Promise<any> {
    return this._client.request({
      method,
      path: URITemplate(path).fillFromObject(uriParams),
      body,
    });
  }
}