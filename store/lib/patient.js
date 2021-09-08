import client from "./client";

export const findAll = () => client.get("/patient");
