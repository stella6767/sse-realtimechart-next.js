import client from "./client";

export const findAll = () => client.get("/patient");

export const findByPatientUserIdOrName = ({ path, data }) => {
  console.log("path", path, "data", data);

  return client.get(`/patient/${path}?${path}=${data}`);
};

//export const findByName = (data) => client.get("/patient");
