import axios from "axios";

class HttpService {
  public static getHeader(): any {
    return {};
  }

  public static get(url: string) {
    const xhr = axios({
      method: "GET",
      url,
      headers: HttpService.getHeader(),
    }).then((res) => res.data);
    return xhr;
  }
  public static post(url: string, data: any) {
    const xhr = axios({
      method: "POST",
      data,
      url,
      headers: HttpService.getHeader(),
    }).then((res) => res.data);
    return xhr;
  }
  public static put(url: string, data: any) {
    const xhr = axios({
      method: "PUT",
      data,
      url,
      headers: HttpService.getHeader(),
    }).then((res) => res.data);
    return xhr;
  }
  public static patch(url: string, data: any) {
    const xhr = axios({
      method: "PATCH",
      data,
      url,
      headers: HttpService.getHeader(),
    }).then((res) => res.data);
    return xhr;
  }
}

export default HttpService;
