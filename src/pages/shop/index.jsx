import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchGoodsDataByIdShop, fetchShopData } from "../../redux/features/shop";
import { backendURL } from "../../config";
import Layout from "../../components/Layout";
import styles from './index.module.css';
import HeaderAlt from "../../components/header/HeaderAlt";

// IMPORT SVG ICONS

import { ReactComponent as ClockSVGIcon } from '../../assets/icon/shop/clock.svg';
import { ReactComponent as LocationSVGIcon } from '../../assets/icon/bottomNavigate/Location.svg';
import { ReactComponent as PhoneSVGIcon } from '../../assets/icon/shop/phone_portrait.svg';
import { ReactComponent as MessageSVGIcon } from '../../assets/icon/shop/message_writing.svg';
import { ReactComponent as RubleSVGIcon } from '../../assets/icon/shop/9113455_ruble_sign_solid_icon.svg';
import Loader from "../../components/loader";


let id;
export function loaderShop({ params }) {
    id = params.id;
    return null;
}

export default function Shop() {
    const navigate = useNavigate();
    const { shop, isLoadingShop, goodsShop } = useSelector((state) => state.shop);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchShopData(id));
        dispatch(fetchGoodsDataByIdShop(id));
    }, [dispatch]);


    return (
        <Layout header={false}>
            <HeaderAlt title={shop.name} path={'/'} />
            <div className={`${styles.app} App`}>
                {
                    Object.keys(shop).length > 0 && !isLoadingShop? (

                        <div className={styles.container}>
                            <div className={styles.image}>
                                <img src={backendURL + shop.logotype} srcSet="" alt="logotype shop" />
                            </div>
                            <div className={styles.infShop}>
                                <div className={styles.genInfShop}>
                                    <div className={styles.colName}>
                                        <p className={styles.title}>Название</p>
                                        <p>{shop.name}</p>
                                    </div>
                                    <div className={styles.colCategory}>
                                        <p className={styles.title}>Категория</p>
                                        <p className={styles.category}>Рестораны</p>
                                    </div>
                                </div>
                                <div className={styles.annotShop}>
                                    <p className={styles.title}>Аннотация</p>
                                    <p className={styles.annotation}>{shop.annotation}</p>
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


                                {shop.additInf.length > 0 && (
                                    <div className={styles.additInf}>
                                        <p className={styles.title}>Доп. информация</p>
                                        <div className={styles.listInf}>
                                            {
                                                shop.additInf.map((inf) => {
                                                    return (
                                                        <p>{inf}</p>
                                                    )
                                                })
                                            }
                                        </div>
                                    </div>
                                )}

                                {/* <div className={styles.news}>
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
                            </div> */}

                                <div className={styles.goods}>
                                    <p className={styles.caption}>Товары</p>

                                    {goodsShop.map((goods, index) => {
                                        return (
                                            <div className={styles.itemGoods} key={index} onClick={() => {
                                                navigate(`/goods/${goods.id}`);
                                            }}>
                                                <div className={styles.infGoods}>
                                                    <p className={styles.nameGoods}>
                                                        {goods.name}
                                                    </p>
                                                    <p className={styles.priceGoods}>
                                                        {goods.price}
                                                        <RubleSVGIcon width={15} height={15} style={{ marginTop: -5 }} fill={'white'} />
                                                    </p>
                                                </div>
                                                <div className={styles.imgGoods}>
                                                    <img src={backendURL + goods.files[0].path} alt="Картина товара" />
                                                </div>
                                            </div>
                                        )
                                    })}
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Loader styleImg={{width: '25%', height: '18%'}} />
                        // <div>Загрузка</div>
                    )
                }
            </div>
        </Layout>
    )

}