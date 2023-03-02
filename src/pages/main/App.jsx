import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import ListBtnShopCategory from "../../components/shop/ListBtnShopCategory";
import ListShop from "../../components/shop/ListShop";
import { useTelegram } from "../../hooks/useTelegram";
import { fetchAllShopData } from "../../redux/features/shop";
import { getCookie } from "../../utils/getData";
import styles from "./App.module.css";

function App() {
  const { tg } = useTelegram();
  const { listShop } = useSelector((state) => state.shop);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userToken = getCookie("token");

  useEffect(() => {
    tg.ready();
    tg.expand();

    tg.MainButton.show();
    tg.MainButton.text = 'ЗАКРЫТЬ';
    tg.MainButton.color = '#08090a';
    tg.MainButton.textColor = '#f8f8f2';

    if (userToken) {
      navigate("auth");
    }

    dispatch(fetchAllShopData());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  tg.MainButton.onClick(() => {
    tg.isExpanded = false;
  });
  return (
    <>
      <Layout>
        <div className='App'>
          <div className={styles.container}>
            
            <div className={styles.ad}>
              <p>Реклама</p>
            </div>

            <div className={styles.caption}>
              <p>Компании</p>
            </div>
            <ListBtnShopCategory />
            <ListShop dataShop={listShop} />
          </div>
        </div>
      </Layout>
    </>
  );
}

export default App;
