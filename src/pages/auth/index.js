import { io } from "socket.io-client";
import { Link } from "react-router-dom";
import "./index.css";

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
  const [isLoading, setIsLoading] = useState(false);
  console.log(isLoading);

  useEffect(() => {
    tg.MainButton.show();
    tg.MainButton.text = 'Войти';
    tg.MainButton.color = '#08090a';
    tg.MainButton.textColor = '#f8f8f2';
  });

  tg.MainButton.onClick(authSocket);

  function authSocket() {
      const socket = io(`ws://${backendURL}:3000`);
      const uniqKey = generateUniqKey();
      socket.on("connect", () => {
        socket.emit("auth-bot", uniqKey);
        setIsLoading(true);
        tg.openTelegramLink(botLoginURL);
      });

      socket.on("result-auth", (response) => {
        console.log(response);
        // const { successfully, token, expiresInToken } = response;
        setIsLoading(false);
      });

      setTimeout(() => {
        setIsLoading(false);
        socket.close();
      }, 180 * 1000);
  }

  return (
    <div className="container">
      <div className="logo">TELIVERY</div>
      {/* <button
        className="button"
        onClick={() => authSocket()}
      >
        Войти через <TelegramSVGIcon className="iconTelegram" width={23} height={23} />
      </button> */}
      <div className="information">
        <p className="disclaymer">
          Регистрация также происходит в мессенджере телеграм
        </p>
        <div className="privacy">
          Продолжая, вы подтверждаете, что ознакомлены с
          <Link>Политикой конфиденциальности</Link> и принимете его условия
        </div>
      </div>
    </div>
  );
}
