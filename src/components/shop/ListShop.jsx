import React from "react";
// import { backendURL } from "../../config";
import styles from './styles/listShop.module.css';

// IMPORT SVG ICONS

import { ReactComponent as GiftSVGIcon } from '../../assets/icon/shop/gift.svg';
import { ReactComponent as CardSVGIcon } from '../../assets/icon/shop/credit_card.svg';
import { ReactComponent as CoinsSVGIcon } from '../../assets/icon/shop/Coins.svg';
// import { backendURL } from "../../config";
import { useNavigate } from "react-router-dom";

export default function ListShop(props) {
    const { dataShop } = props;
    const navigate = useNavigate();
    let writeOff = 0;
    let cashback = 0;
    const item = dataShop.map((element, index) => {
        if (element.plansCashback !== undefined) {
            writeOff = element.plansCashback[0].writeoff;
            cashback = element.plansCashback[0].cashback;
        }
        return (
            <div className={styles.shop} onClick={() => navigate(`shop/${element.id}`)} key={index}>
                <div className={styles.logotype}>
                    <img src={element.logotype} alt="Логотип компании" />
                </div>
                <div className={styles.inf}>
                    <div className={styles.infShop}>
                        <div className={styles.name}>
                            <p>{element.name}</p>
                        </div>
                        <div className={styles.annotation}>
                            <p>{element.annotation}</p>
                        </div>
                    </div>
                    <div className={styles.additInf}>
                        <div className={styles.badge}>
                            <CardSVGIcon width={25} height={25} />
                            <p>от {writeOff}%</p>
                        </div>
                        {/* {element.firstcashback > 0 && ( */}
                        <div className={styles.badge}>
                            <GiftSVGIcon width={25} height={25} />
                            <p style={{marginTop: 4}}>{element.firstcashback || 0}</p>
                        </div>
                        {/* )} */}
                        <div className={styles.badge}>
                            <CoinsSVGIcon style={{marginTop: 4.5}} width={25} height={25} />
                            <p>от {cashback}%</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    });
    return (
        <React.Fragment>{item}</React.Fragment>
    )

}