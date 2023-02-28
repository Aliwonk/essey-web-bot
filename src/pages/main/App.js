import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useTelegram } from "../../hooks/useTelegram";
import { getCookie } from "../../utils/getData";
import "./App.css";

function App() {
  const { tg } = useTelegram();
  const navigate = useNavigate();
  const userToken = getCookie("token");

  useEffect(() => {
    tg.ready();
    if (!userToken) {
      navigate("auth");
    }
  });

  return <div>Hello world</div>;
}

export default App;
