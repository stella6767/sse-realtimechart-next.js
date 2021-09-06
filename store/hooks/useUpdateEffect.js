import { useEffect } from "react";
import { useRef } from "react";

//오직 state가 변경될 때만 useEffect 실행하도록 customhooks 작성...
export default function useUpdateEffect(fn, dependencies = []) {
  const isInitialMount = useRef(false);

  useEffect(() => {
    if (!isInitialMount.current) {
      isInitialMount.current = true;
    } else {
      return fn();
    }
  }, dependencies);
}
