import React from "react";
import { backendURL } from "../../config";
import styles from './listShop.module.css';

// IMPORT SVG ICONS

import { ReactComponent as GiftSVGIcon } from '../../assets/icon/shop/gift.svg';
import { ReactComponent as CardSVGIcon } from '../../assets/icon/shop/credit_card.svg';

export default function ListShop(props) {
    const { dataShop } = props;
    console.log(dataShop);
    const item = dataShop.map((element, index) => {
        return (
            <div className={styles.shop} key={index}>
                <div className={styles.logotype}>
                    <img src={backendURL + element.logotype} alt="" />
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
                            <p>30 %</p>
                        </div>
                        <div className={styles.badge}>
                            <GiftSVGIcon width={25} height={25} />
                            <p>100</p>
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