import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3000"
});

class HttpService {
  get(url) {
    return http.get(url);
  }

  post(url, body) {
    return http.post(url, body);
  }

  // getID (id, url) {
  //   return http.get(url)
  // }
  
  edit (url, body) {
    return http.put(url, body)
  }

  delete (url, body) {
    return http.delete(url, body)
  }
}

export const httpService = new HttpService();
