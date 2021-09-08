export const initialState = {
  patients: null,
  loadPatientsLoading: false,
  loadPatientsDone: false,
  loadPatientsError: null,
};

export const PATIENT_REQUEST = "PATIENT_REQUEST";
export const PATIENT_SUCCESS = "PATIENT_SUCCESS";
export const PATIENT_FAILURE = "PATIENT_FAILURE";

export const patientRequestAction = () => ({
  type: PATIENT_REQUEST,
});

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case PATIENT_REQUEST:
      return {
        ...state,
        loadPatientsLoading: true,
        loadPatientsDone: false,
        loadPatientsError: null,
      };
    case PATIENT_SUCCESS:
      return {
        ...state,
        patients: action.data,
        loadPatientsLoading: false,
        loadPatientsDone: true,
      };
    case PATIENT_FAILURE:
      return {
        ...state,
        loadPatientsLoading: false,
        loadPatientsError: action.error,
      };
    default:
      return state;
  }
};

export default reducer;
