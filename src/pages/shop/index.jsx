import Layout from "../../components/Layout";
import styles from './index.module.css';

// IMPORT SVG ICONS

import { ReactComponent as ArrowBackSVGIcon } from '../../assets/icon/shop/jump_left.svg';
import { useNavigate } from "react-router-dom";

export function loaderShop({ params }) {
    console.log(params);
    return null;
}

export default function Shop() {
    const navigate = useNavigate();

    return (
        <Layout header={false}>
            <div className={styles.header}>
                <ArrowBackSVGIcon width={35} height={35} style={{ marginRight: 15, marginLeft: 15 }} onClick={() => {
                    navigate('/');
                }} />
                <div className={styles.headerTitle}>Speed Pizza</div>
            </div>
            <div className={`${styles.app} App`}>
                <div className={styles.container}>
                    <div className={styles.image}>
                        <img src="https://img.freepik.com/premium-vector/melting-pizza-logo-pizzeria-restaurant-with-melting-cheese-logo-icon-template_8580-559.jpg" srcSet="" alt="logotype shop"/>
                    </div>
                    <div className={styles.inf}>
                        <div className={styles.genInfShop}>
                            <div className={styles.colName}>
                                <p className={styles.caption}>Название</p>
                                <p>Speed Pizza</p>
                            </div>
                            <div className={styles.colCategory}>
                                <p className={styles.caption}>Категория</p>
                                <p className={styles.category}>Рестораны</p>
                            </div>
                        </div>
                        <div className={styles.annotShop}>
                            <p className={styles.caption}>Описание</p>
                            <p className={styles.annotation}>Пиццы со скоростью света</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}