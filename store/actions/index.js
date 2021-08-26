export const SUCCESS = "SUCCESS";
export const FAIL = "FAIL";
export const REQUEST = "REQUEST";

export function success(payload) {
  return {
    type: SUCCESS,
    payload,
  };
}

export function request(data) {
  return {
    type: REQUEST,
    data,
  };
}

export function fail(error) {
  return {
    type: FAIL,
    error,
  };
}
