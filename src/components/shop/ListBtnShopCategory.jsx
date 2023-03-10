import React from "react";
import { useDispatch, useSelector } from "react-redux";
import styles from './styles/listBtnCategory.module.css';

// IMPORT SVG ICON

import { ReactComponent as RestarauntSVGIcon } from '../../assets/icon/shop/Restaraunt.svg';
import { ReactComponent as ShopSVGIcon } from '../../assets/icon/shop/Shop.svg';
import { ReactComponent as CompanySVGIcon } from '../../assets/icon/shop/Company.svg';
import { changeCategoryShop } from "../../redux/features/shop";

export default function ListBtnShopCategory() {
    const { listShopForCategory } = useSelector((state) => state.shop);
    const dispatch = useDispatch();
    const categoryShop = (() => {
        const categories = listShopForCategory.map(shop => shop.category);
        const uniqCategories = new Set(categories);
        return ['Все', ...uniqCategories];
    })();

    const Icons = (props) => {
        const { category } = props;
        switch (category) {
            case 'Рестораны':
                return <RestarauntSVGIcon width={25} height={20} strokeWidth={0.4} />;

            case 'Магазины':
                return <ShopSVGIcon width={25} height={20} />;

            default:
                return (
                    <CompanySVGIcon
                        style={{ marginTop: 3 }}
                        width={25}
                        height={20}
                    />
                );
        }
    };

    const item = categoryShop.map((category, index) => {
        return (
            <div className={styles.btn} key={index} onClick={() => {
                dispatch( changeCategoryShop(category) );
            }}>
                <p>{category}</p>
                <Icons category={category} />
            </div>
        )
    });



    return (
        <div className={styles.itemBtn}>{item}</div>
    )
}