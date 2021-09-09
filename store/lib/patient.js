import client from "./client";

export const findAll = () => client.get("/patient");

export const findByPatientUserIdOrName = ({ path, data }) => {
  console.log("path", path, "data", data);

  const params = new URLSearchParams([["ss", 42]]);

  //return client.get(`/patient/${path}?${path}=${data}`); ?????왜 안 먹지? React에서는 먹히는데,
  return client.get(`/patient/search?${path}=${data}`); //, { headers }
  //return client.get("/patient/search", {  });
  //return client.get(`/test`);
};

// export const findByPatientUserIdOrName = ({ path, data }) =>
//   client.get(`/patient/search?patientUserId=22222`);
// //export const findByName = (data) => client.get("/patient");

const headers = {
  get: {
    "Content-Type": "application/json; charset=UTF-8",
  },
};
