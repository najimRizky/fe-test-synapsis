export interface IApiRequestBase {
  url: string;
  serverSide?: boolean;
}

export interface IApiRequest extends IApiRequestBase {
  method?: "GET" | "POST" | "PATCH" | "DELETE";
  body?: any;
  headers?: any;
  nextOptions?: NextFetchRequestConfig;
  cache?: RequestCache;
}

export interface IGetRequest extends IApiRequestBase {}

export interface IPostRequest extends IApiRequestBase {
  body: any;
}

export interface IPatchRequest extends IApiRequestBase {
  body: any;
}

export interface IDeleteRequest extends IApiRequestBase {}