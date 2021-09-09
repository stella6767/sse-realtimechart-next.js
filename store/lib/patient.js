import client from "./client";

export const findAll = () => client.get("/patient");

export const findByPatientUserIdOrName = ({ searchType, searchWord }) => {
  console.log("searchType", searchType, "searchWord", searchWord);

  return client.get(
    `/patient/search?searchType=${searchType}&searchWord=${searchWord}`,
    {
      headers,
    }
  );
};

const headers = {
  // get: {
  //   "Content-Type": "application/json; charset=UTF-8",
  // },
  common: {
    Accept: "*/*",
  },
};
