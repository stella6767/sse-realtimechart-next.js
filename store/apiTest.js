import axios from "axios";

const client = axios.create();
const client2 = axios.create();

client.defaults.baseURL = "";
client2.defaults.baseURL = "다른주소";

// test 비동기 요청하는 곳
export const testApiModule = () => {
  console.log("비동기 요청");
  return client.get("/test");
};
