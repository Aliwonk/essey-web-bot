import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "../../components/Layout";
import { deleteGoods } from "../../redux/features/cart";
import styles from "./index.module.css";

// IMPORT ICONS SVG
import { ReactComponent as TrashSVGIcon } from '../../assets/icon/shop/trash.svg';
import { ReactComponent as RubleSVGIcon } from '../../assets/icon/shop/9113455_ruble_sign_solid_icon.svg';
import { backendURL } from "../../config";

export default function Cart() {
    const { dataCart, total } = useSelector(state => state.cart);
    const dispatch = useDispatch();
    const [count, setCount] = useState(0);

    useEffect(() => {
        // let dataCount = [];
        // dataCart.forEach(data => {
        //     let goodsCount = []
        //     data.goods.forEach((goods) => {
        //         goodsCount.push(goods.count);
        //     });
        //     dataCount.push(...goodsCount);
        // });

        // setCount(dataCount);

        if (dataCart.length === 0) {
            window.localStorage.removeItem('cartAmount');
            window.localStorage.removeItem('dataCart');
        }
    }, [dataCart]);

    return (
        <Layout>
            <div className="App">
                <div className={styles.container}>
                    {
                        dataCart.length > 0 ? (

                            <>
                                <div className={styles.listOrder}>
                                    {
                                        // eslint-disable-next-line array-callback-return
                                        dataCart.map((data, index) => {
                                            if (data.goods.length > 0) {
                                                return (
                                                    <div className={styles.order} key={index}>
                                                        <div className={styles.shopName}>{data.shopName}</div>
                                                        <div className={styles.listGoods}>
                                                            {
                                                                data.goods.map((goods, indexGoods) => {
                                                                    return (
                                                                        <div className={styles.goods} key={indexGoods}>
                                                                            <div className={styles.imgGoods}>
                                                                                <img src={backendURL + goods.files[0].path} alt="Рисунок товара" />
                                                                            </div>
                                                                            <div className={styles.leftGoods}>
                                                                                <div className={styles.infGoods}>
                                                                                    <p className={styles.goodsName}>{goods.name}</p>
                                                                                    <p className={styles.goodsPrice}>{goods.price} <RubleSVGIcon width={15} heigth={15} style={{marginTop: -10}} /></p>
                                                                                </div>
                                                                                <div className={styles.btnsGoods}>
                                                                                    <div className={styles.countBtn}>
                                                                                        <div>
                                                                                            <p>-</p>
                                                                                        </div>
                                                                                        <input placeholder={goods.count || count} onChange={(element) => {
                                                                                            setCount(element.target.value);
                                                                                            console.log(count);
                                                                                            // element.target.value = count;
                                                                                        }} />
                                                                                        <div>
                                                                                            <p>+</p>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className={styles.delBtn} onClick={() => {
                                                                                        dispatch(deleteGoods(goods.id));
                                                                                    }}>
                                                                                        <TrashSVGIcon />
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </div>
                                                    </div>
                                                )
                                            }
                                        })
                                    }
                                </div>
                                <div className={styles.bottomPanel}>
                                    <div className={styles.total}>
                                        <p>Итого:</p>
                                        <p className={styles.totalText}>{total} <RubleSVGIcon width={20}  heigth={20} style={{marginTop: -9}} /></p>
                                    </div>
                                    <div className={styles.btnOrder}>Оформить заказ</div>
                                </div>
                            </>
                        ) : (
                            <div>Корзина пуста</div>
                        )
                    }
                    <div className={styles.oreder}></div>
                </div>
            </div>
        </Layout>
    )
}