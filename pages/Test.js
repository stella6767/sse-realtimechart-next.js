import React, { useEffect, useState } from "react";

function Test() {
  const [listening, setListening] = useState(false);
  const [data, setData] = useState([]);
  const [value, setValue] = useState(null);
  let eventSource = undefined;

  useEffect(() => {
    if (!listening) {
      eventSource = new EventSource("http://localhost:8080/sse"); //구독

      //Custom listener
      // eventSource.addEventListener("Progress", (event) => {
      //   const result = JSON.parse(event.data);
      //   console.log("received:", result);
      //   setData(result)
      // });

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

  const checkData = () => {
    console.log(data);
  };

  return (
    <div className="App">
      <button onClick={checkData}>확인</button>
      <header className="App-header">
        Received Data
        {data.map(d => (
          <span key={d}>{d}</span>
        ))}
      </header>
      <div>value: {value}</div>
    </div>
  );
}

export default Test;
