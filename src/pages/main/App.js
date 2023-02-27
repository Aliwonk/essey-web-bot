import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function App() {
  const navigate = useNavigate();

  function getCookie(name) {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop().split(";").shift();
  }
  const userToken = getCookie("token");

  useEffect(() => {
    if (!userToken) {
      navigate("auth");
    }
  });

  return <div>Hello world</div>;
}

export default App;
