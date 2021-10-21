module.exports = {
  apps: [
    {
      name: "bilab", // pm2로 실행한 프로세스 목록에서 이 애플리케이션의 이름으로 지정될 문자열
      script: "node_modules/next/dist/bin/next", // pm2로 실행될 파일 경로
      args: "start -p 3300",
      exec_mode: "cluster", //멀티코어 사용 지원
      instances: 0, //현재 환경의 cpu 코어만큼 사용
      watch: true, // 파일이 변경되면 자동으로 재실행 (true || false)
      env_production: {
        PORT: 3300,
        NODE_ENV: "production", // 배포환경시 적용될 설정 지정
      },
    },
  ],
};
