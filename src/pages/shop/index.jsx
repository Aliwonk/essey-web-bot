import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import styles from './index.module.css';

// IMPORT SVG ICONS

import { ReactComponent as ArrowBackSVGIcon } from '../../assets/icon/shop/jump_left.svg';
import { ReactComponent as ClockSVGIcon } from '../../assets/icon/shop/clock.svg';
import { ReactComponent as LocationSVGIcon } from '../../assets/icon/bottomNavigate/Location.svg';
import { ReactComponent as PhoneSVGIcon } from '../../assets/icon/shop/phone_portrait.svg';
import { ReactComponent as MessageSVGIcon } from '../../assets/icon/shop/message_writing.svg';
import { ReactComponent as RubleSVGIcon } from '../../assets/icon/shop/9113455_ruble_sign_solid_icon.svg';


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
                        <img src="https://img.freepik.com/premium-vector/melting-pizza-logo-pizzeria-restaurant-with-melting-cheese-logo-icon-template_8580-559.jpg" srcSet="" alt="logotype shop" />
                    </div>
                    <div className={styles.infShop}>
                        <div className={styles.genInfShop}>
                            <div className={styles.colName}>
                                <p className={styles.title}>Название</p>
                                <p>Speed Pizza</p>
                            </div>
                            <div className={styles.colCategory}>
                                <p className={styles.title}>Категория</p>
                                <p className={styles.category}>Рестораны</p>
                            </div>
                        </div>
                        <div className={styles.annotShop}>
                            <p className={styles.title}>Аннотация</p>
                            <p className={styles.annotation}>Пиццы со скоростью света</p>
                        </div>
                        <div className={styles.navigation}>
                            <p className={styles.title}>Информация</p>
                            <div className={styles.navBtns}>
                                <div className={styles.btnWorkTime}>
                                    <p>Открыт</p>
                                    <ClockSVGIcon width={25} height={25} />
                                </div>
                                <div className={styles.btns}>
                                    <div className={styles.navBtn}>
                                        <p>Маршрут</p>
                                        <LocationSVGIcon width={25} height={25} style={{ marginTop: 6 }} />
                                    </div>
                                    <div className={styles.navBtn}>
                                        <p>Позвонить</p>
                                        <PhoneSVGIcon width={25} height={25} style={{ marginTop: 6 }} />
                                    </div>
                                    <div className={styles.navBtn}>
                                        <p>Написать</p>
                                        <MessageSVGIcon width={25} height={25} style={{ marginTop: 6 }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.additInf}>
                            <p className={styles.title}>Доп. информация</p>
                            <div className={styles.listInf}>
                                <p>Бесплатная доставка от 300р</p>
                                <p>Хорошее качество</p>
                                <p>Быстрая пицца</p>
                            </div>
                        </div>

                        <div className={styles.news}>
                            <p className={styles.caption}>Новости и акции</p>
                            <div className={styles.listNews}>
                                <div className={styles.itemNews}>
                                    <div className={styles.imgNews}>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2KD7-CockFL_lf9h_NvWCuJ6zupJ70kyQdA&usqp=CAU" alt="Картинка" />
                                    </div>
                                    <div className={styles.infNews}>
                                        <p className={styles.dateNews}>23.03.2023</p>
                                        <p className={styles.descNews}>Получи пиццу 2 раза дешевле при вызове 5 звонков президенту с вопросом: что для него значит водка и виски</p>
                                    </div>
                                </div>

                                <div className={styles.itemNews}>
                                    <div className={styles.imgNews}>
                                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2KD7-CockFL_lf9h_NvWCuJ6zupJ70kyQdA&usqp=CAU" alt="Картинка" />
                                    </div>
                                    <div className={styles.infNews}>
                                        <p className={styles.dateNews}>23.03.2023</p>
                                        <p className={styles.descNews}>Получи пиццу 2 раза дешевле при вызове 5 звонков президенту с вопросом: что для него значит водка и виски</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.goods}>
                            <p className={styles.caption}>Товары</p>
                            <div className={styles.itemGoods}>
                                <div className={styles.infGoods}>
                                    <p className={styles.nameGoods}>
                                        Брусничный сок
                                    </p>
                                    <p className={styles.priceGoods}>
                                        25
                                        <RubleSVGIcon width={15} height={15} style={{marginTop: -5}} fill={'white'} /> 
                                    </p>
                                </div>
                                <div className={styles.imgGoods}>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKwtJTy3ER8LXPTP-KUESrQjXFTZidT8luRg&usqp=CAU" alt="Картина товара" />
                                </div>
                            </div>
                            <div className={styles.itemGoods}>
                                <div className={styles.infGoods}>
                                    <p className={styles.nameGoods}>
                                        Пицца
                                    </p>
                                    <p className={styles.priceGoods}>
                                        250
                                        <RubleSVGIcon width={15} height={15} style={{marginTop: -5}} fill={'white'} /> 
                                    </p>
                                </div>
                                <div className={styles.imgGoods}>
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTRSkx2CWoV-k8r7TfSygl7k88uvSb-ZkNMsQ&usqp=CAU" alt="Картина товара" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}