import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import styles from './index.module.css';

// IMPORT SVG ICONS

import { ReactComponent as ArrowBackSVGIcon } from '../../assets/icon/shop/jump_left.svg';
import { ReactComponent as ClockSVGIcon } from '../../assets/icon/shop/clock.svg';
import { ReactComponent as LocationSVGIcon } from '../../assets/icon/bottomNavigate/Location.svg';
import { ReactComponent as PhoneSVGIcon } from '../../assets/icon/shop/phone_portrait.svg';
import { ReactComponent as MessageSVGIcon } from '../../assets/icon/shop/message_writing.svg';

export function loaderShop({ params }) {
    console.log(params);
    return null;
}

export default function Shop() {
    const navigate = useNavigate();

    return (
        <Layout header={false}>
            <div className={styles.header}>
                <ArrowBackSVGIcon className={styles.headerBtnBack} width={35} height={35} onClick={() => {
                    navigate('/');
                }} />
                <div className={styles.headerTitle}>Speed Pizza</div>
            </div>
            <div className={`${styles.app} App`}>
                <div className={styles.container}>
                    <div className={styles.image}>
                        <img src="https://img.freepik.com/premium-vector/melting-pizza-logo-pizzeria-restaurant-with-melting-cheese-logo-icon-template_8580-559.jpg" srcSet="" alt="logotype shop"/>
                    </div>
                    <div className={styles.infShop}>
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
                            <p className={styles.caption}>Аннотация</p>
                            <p className={styles.annotation}>Пиццы со скоростью света</p>
                        </div>
                        <div className={styles.navigation}>
                            <p className={styles.caption}>Информация</p>
                            <div className={styles.navBtns}>
                                <div className={styles.btnWorkTime}>
                                    <p>Открыт</p>
                                    <ClockSVGIcon width={25} height={25} />
                                </div>
                                <div className={styles.btns}>
                                    <div className={styles.navBtn}>
                                        <p>Маршрут</p>
                                        <LocationSVGIcon width={25} height={25} style={{marginTop: 6}} />
                                    </div>
                                    <div className={styles.navBtn}>
                                        <p>Позвонить</p>
                                        <PhoneSVGIcon width={25} height={25} style={{marginTop: 6}} />
                                    </div>
                                    <div className={styles.navBtn}>
                                        <p>Написать</p>
                                        <MessageSVGIcon width={25} height={25} style={{marginTop: 6}} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}