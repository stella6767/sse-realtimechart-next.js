export const initialState = {
  patients: null,
  loadPatientsLoading: false,
  loadPatientsDone: false,
  loadPatientsError: null,

  loadPatientsByNameOrIdLoading: false,
  loadPatientsByNameOrIdDone: false,
  loadPatientsByNameOrIdError: null,
};

export const PATIENT_REQUEST = "PATIENT_REQUEST";
export const PATIENT_SUCCESS = "PATIENT_SUCCESS";
export const PATIENT_FAILURE = "PATIENT_FAILURE";

export const PATIENT_FINDBYNAMEORID_REQUEST = "PATIENT_FINDBYNAMEORID_REQUEST";
export const PATIENT_FINDBYNAMEORID_SUCCESS = "PATIENT_FINDBYNAMEORID_SUCCESS";
export const PATIENT_FINDBYNAMEORID_FAILURE = "PATIENT_FINDBYNAMEORID_FAILURE";

export const patientRequestAction = () => ({
  type: PATIENT_REQUEST,
});

export const patientByNameOrIdRequestAction = (searchType, searchWord) => ({
  type: PATIENT_FINDBYNAMEORID_REQUEST,
  payload: { searchType, searchWord }, //payload는 액션의 실행에 필요한 임의의 데이터
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
    //
    case PATIENT_FINDBYNAMEORID_REQUEST:
      return {
        ...state,

        loadPatientsByNameOrIdLoading: true,
        loadPatientsByNameOrIdDone: false,
        loadPatientsByNameOrIdError: null,
      };
    case PATIENT_FINDBYNAMEORID_SUCCESS:
      return {
        ...state,
        patients: action.data,
        loadPatientsByNameOrIdLoading: false,
        loadPatientsByNameOrIdDone: true,
      };
    case PATIENT_FINDBYNAMEORID_FAILURE:
      return {
        ...state,
        loadPatientsByNameOrIdLoading: false,
        loadPatientsByNameOrIdError: action.error,
      };

    default:
      return state;
  }
};

export default reducer;
