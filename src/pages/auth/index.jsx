import { io } from "socket.io-client";
import { Link, useNavigate } from "react-router-dom";
import styles from './Auth.module.css';

// IMPORT CONFIG

import { backendURL, botLoginURL } from "../../config";

// IMPORT UTILS

import { useEffect, useState } from "react";
import { generateUniqKey } from "../../utils/getData";

// SVG ICONS

// import { ReactComponent as TelegramSVGIcon } from "../../assets/icon/telegram-wb.svg";
import { useTelegram } from "../../hooks/useTelegram";

export default function Auth() {
  const { tg } = useTelegram();
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  console.log(isLoading);

  useEffect(() => {
    tg.MainButton.show();
    tg.MainButton.text = 'АВТОРИЗАЦИЯ';
    tg.MainButton.color = '#08090a';
    tg.MainButton.textColor = '#f8f8f2';
  });

  tg.MainButton.onClick(authSocket);

  function authSocket() {
      const socket = io(`${backendURL}`);
      const uniqKey = generateUniqKey();
      socket.on("connect", () => {
        socket.emit("auth-bot", uniqKey);
        tg.openTelegramLink(botLoginURL);
        setIsLoading(true);
        console.log('auth');
      });

      socket.on("result-auth", (response) => {
        const { successfully, token, expiresInToken } = response;

        if (successfully && token && expiresInToken) {
          document.cookie = `token=${token}; expires=${parseInt(expiresInToken)}`;
          navigate('/');
        } else {
          socket.close();
        }

        setIsLoading(false);
      });

      setTimeout(() => {
        setIsLoading(false);
        socket.close();
      }, 180 * 1000);
  }

  return (
    <div className={styles.container}>
      <div className={styles.caption}>
        Для продолжения вам нужно авторизоваться
      </div>
      <div className={styles.information}>
        <p className={styles.disclaymer}>
          Регистрация также происходит в мессенджере телеграм
        </p>
        <div className={styles.privacy}>
          Продолжая, вы подтверждаете, что ознакомлены с
          <Link> Политикой конфиденциальности</Link> и принимете его условия
        </div>
      </div>
    </div>
  );
}
