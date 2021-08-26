import axios from "axios";

const client = axios.create();

client.defaults.baseURL = "";

// test
export const testApiModule = () => {
  console.log("비동기 요청");

  return client.get("/test");
};
