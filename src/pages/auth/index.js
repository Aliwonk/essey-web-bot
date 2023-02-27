import { io } from "socket.io-client";
import { Link } from "react-router-dom";
import "./index.css";

// SVG ICONS
import { ReactComponent as Telegram } from "../../assets/icon/telegram-wb.svg";
import { backendURL, botLoginURL } from "../../config";
import { useState } from "react";

export default function Auth() {
  const [isLoading, setIsLoading] = useState(false);

  function generateUniqKey(length = 32) {
    const chrs = "abcdehkmnpswxzABCDEFGHKMNPQRSTWXZ123456789";
    let str = "";
    for (let i = 0; i < length; i++) {
      const pos = Math.floor(Math.random() * chrs.length);
      str += chrs.substring(pos, pos + 1);
    }
    console.log(isLoading);
    return str;
  }

  function authSocket() {
    const socket = io(`ws://${backendURL}:3000`);
    const uniqKey = generateUniqKey()
    socket.on("connect", () => {
      socket.emit("auth-bot", uniqKey);
      setIsLoading(true);
      window.location.href = botLoginURL;
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
      <div
        className="button"
        onClick={() => authSocket()}
      >
        Войти через <Telegram className="iconTelegram" width={23} height={23} />
      </div>
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
