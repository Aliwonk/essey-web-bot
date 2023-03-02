import React from "react";
import { useSelector } from "react-redux";
import styles from './styles/listBtnCategory.module.css';

// IMPORT SVG ICON

import { ReactComponent as RestarauntSVGIcon } from '../../assets/icon/shop/Restaraunt.svg';
import { ReactComponent as ShopSVGIcon } from '../../assets/icon/shop/Shop.svg';
// import { ReactComponent as CompanySVGIcon } from '../../assets/icon/shop/Company.svg';

export default function ListBtnShopCategory() {
    const { listShop } = useSelector((state) => state.shop);
    const categoryShop = (() => {
        const categories = listShop.map(shop => shop.category);
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
                console.log('0');
                break;
            // return (
            //   <CompanySVGIcon
            //     style={{marginTop: 3}}
            //     width={24}
            //     height={24}
            //     fill={'black'}
            //   />
            // );
        }
    };

    const item = categoryShop.map((category, index) => {
        return (
            <div className={styles.btn} key={index}>
                <p>{category}</p>
                <Icons category={category} />
            </div>
        )
    });



    return (
        <div className={styles.itemBtn}>{item}</div>
    )
}