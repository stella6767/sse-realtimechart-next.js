import { HYDRATE } from "next-redux-wrapper"; //SSR를 위한 것으로 getInitialProps와 getServerSideProps에서도 Redux store에 접근이 가능하도록 하기 위한 처리
import { combineReducers } from "redux";
import patient from "./patient";

const rootReducer = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      console.log("HYDRATE", action);
      return { ...state, ...action.payload };
    //reducer 초기화될때 한 번 실행이 되기 때문에 default를 넣어줘야 한다.
    default: {
      const combinedReducer = combineReducers({
        patient,
      });
      return combinedReducer(state, action);
    }
  }
};

export default rootReducer;
