import React, { useEffect, useState } from "react";
import useUpdateEffect from "../store/hooks/useUpdateEffect";

function See() {
  const [listening, setListening] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(null);

  const [meventSource, msetEventSource] = useState(undefined);

  let eventSource = undefined;

  useEffect(() => {
    console.log("매번 실행되는지");
    console.log("listening", listening);

    if (!listening) {
      eventSource = new EventSource("http://bilabcsapi.lunalabs.net/sse"); //구독
      //eventSource = new EventSource("http://localhost:8088/sse"); //구독

      //msetEventSource(new EventSource("http://localhost:8088/sse"));

      msetEventSource(eventSource);

      //Custom listener
      // eventSource.addEventListener("Progress", (event) => {
      //   const result = JSON.parse(event.data);
      //   console.log("received:", result);
      //   setData(result)
      // });

      console.log("eventSource", eventSource);

      eventSource.onopen = event => {
        console.log("connection opened");
      };

      eventSource.onmessage = event => {
        console.log("result", event.data);
        setData(old => [...old, event.data]);
        setValue(event.data);
      };

      eventSource.onerror = event => {
        console.log(event.target.readyState);
        if (event.target.readyState === EventSource.CLOSED) {
          console.log("eventsource closed (" + event.target.readyState + ")");
        }
        eventSource.close();
      };

      setListening(true);
    }

    return () => {
      eventSource.close();
      console.log("eventsource closed");
    };
  }, []);

  useUpdateEffect(() => {
    console.log("meventSource", meventSource);
  }, [meventSource]);

  const checkData = () => {
    console.log(data);
  };

  return (
    <div className="App">
      <button onClick={checkData}>확인</button>
      <header className="App-header">
        Received Data
        {data.map((d, index) => (
          <span key={index}>{d}</span>
        ))}
      </header>
      <div>value: {value}</div>
    </div>
  );
}

export default See;
