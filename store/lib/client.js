import Axios from "axios";

const client = Axios.create(); //사용자 정의 구성을 사용하는 axios 인스턴스 생성

client.defaults.baseURL = "";

// 글로벌 설정 참고: https://fkkmemi.github.io/nemv/nemv-053-axios-interceptor/
client.interceptors.request.use(
  (request) => {
    console.log("Starting Request", request);
    return request;
  },
  (error) => {
    //요청 실패시 뭐 할지
    return Promise.reject(error);
  }
);
//응답 인터셉터 추가
client.interceptors.response.use(
  (response) => {
    //요청 성공 시 특정 작업 수행
    // console.log(response);
    return response;
  },
  (error) => {
    //요청 실패 시 특정 작업 수행
    console.error("error는: ", error);
    return Promise.reject(error);
  }
);

export default client;
