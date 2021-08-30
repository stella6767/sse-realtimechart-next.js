const initialState = [
  {
    data: null,
  },
];
export const PATIENT_REQUEST = "PATIENT_REQUEST";
export const PATIENT_GET = "PATIENT_GET";
export const PATIENT_FAIL = "PATIENT_FAIL";

export const PatientRequestAction = () => ({
  type: PATIENT_REQUEST,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PATIENT_REQUEST:
      return {
        ...state,
      };
    case PATIENT_GET:
      return {
        ...state,
        data: action.data,
      };
    case PATIENT_FAIL:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
