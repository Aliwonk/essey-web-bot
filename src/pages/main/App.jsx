import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import { useTelegram } from "../../hooks/useTelegram";
import { getCookie } from "../../utils/getData";
import styles from "./App.module.css";

function App() {
  const { tg } = useTelegram();
  const navigate = useNavigate();
  const userToken = getCookie("token");

  useEffect(() => {
    tg.ready();
    if (userToken) {
      navigate("auth");
    }
  });

  return (
    <>
      <Layout>
        <div className={styles.App}>
          <div>
            <p></p>
          </div>
        </div>
      </Layout>
    </>
  );
}

export default App;
