import client from "./lib/client";

// test 비동기 요청하는 곳
export const testApiModule = () => {
  console.log("비동기 요청");
  return client.get("/test");
};
