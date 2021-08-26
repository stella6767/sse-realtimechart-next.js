
const initialState = {
  
  data: null,
};

//DDD  도메인. patient는 patient 


//action type 선언
export const TEST_REQUEST = 'TEST_REQUEST';
export const TEST_SUCCESS = 'TEST_SUCCESS';
export const TEST_FAILURE = 'TEST_FAILURE';


//action 생성함수

export const testRequestAction = () => ({
  type: TEST_REQUEST,
});



const reducer = (state = initialState, action) => {
  switch (action.type) {
    case TEST_REQUEST:
      return {
        ...state
      };
    case TEST_SUCCESS:
      return {
        ...state,
        data: action.data,
      };
    case TEST_FAILURE:
      return {
        ...state,
        data: action.data,
      };
    default:
      return state;
  }
};


export default reducer; 