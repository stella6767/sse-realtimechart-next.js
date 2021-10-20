export const backUrl =
  process.env.NODE_ENV === "production"
    ? "http://bilabcsapi.lunalabs.net" //배포 백엔드 주소
    : "http://172.16.81.114:8081"; //개발 백엔드 주소
