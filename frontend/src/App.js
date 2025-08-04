import { useEffect, useState } from "react";

function App() {
  const [message, setMessage] = useState("loading...");

  useEffect(() => {
    fetch("http://localhost:8080/api/hello")
      .then(res => res.text())
      .then(data => setMessage(data))
      .catch(err => {
        console.error("API error:", err);
        setMessage("Error connecting to backend");
      });
  }, []);

  return (
    <div>
      <h1>Spring Boot からのメッセージ:</h1>
      <p>{message}</p>
    </div>
  );
}

export default App;
