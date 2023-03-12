import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import HeaderAlt from "../../components/header/HeaderAlt";
import Layout from "../../components/Layout";
import { backendURL } from "../../config";
import { fetchGoodsDataById } from "../../redux/features/shop";
import styles from './index.module.css';

// IMPORT SVG ICON

import { ReactComponent as RubleSVGIcon } from '../../assets/icon/shop/9113455_ruble_sign_solid_icon.svg';
import { changeDataCart, changeTotal } from "../../redux/features/cart";
import Loader from "../../components/loader";
// import { getCookie } from "../../utils/getData";

let id;
export function loaderGoods({ params }) {
    id = params.id;
    return null;
}

export default function Goods() {
    const { goods, isLoadingGoods } = useSelector((state) => state.shop);
    const { dataCart, total } = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    let [count, setCount] = useState(0);

    useEffect(() => {
        dispatch(fetchGoodsDataById(id));
    }, [dispatch]);


    function increment() {
        setCount(c => Number(c) + 1);
    }

    function decrement() {
        if (count < 0 + 1) return setCount(0);
        setCount(c => c - 1);
    }


    function sendDataInCart() {
        const { id, name, price, shop, files } = goods;
        if (count[0] === '0') {
            const result = count.split('');
            result.shift();
            count = result.join('')
        }

        if (dataCart.length === 0) {
            const data = [
                {
                    idShop: shop.id,
                    shopName: shop.name,
                    goods: [
                        {
                            id,
                            name,
                            price,
                            count,
                            files
                        }
                    ]
                }
            ]

            window.localStorage.setItem('dataCart', JSON.stringify(data));
            window.localStorage.setItem('cartAmount', price * count);
            dispatch(changeDataCart(data));
            dispatch(changeTotal(price * count));
        } else {
            let result = dataCart.filter(data => data.idShop === shop.id);
            if (result.length > 0) {
                const resultGoods = result[0].goods.filter((goods) => goods.id === id);

                if (resultGoods.length === 0) {
                    const data = [...result[0].goods, {
                        id,
                        name,
                        price,
                        count,
                        files
                    }];
                    const copyDataCart = [...dataCart, {
                        ...result[0],
                        goods: data,
                    }];

                    const key = 'shopName';
                    const unique = [...new Map(copyDataCart.map(item => [item[key], item])).values()]

                    window.localStorage.setItem('dataCart', JSON.stringify(unique));
                    window.localStorage.setItem('cartAmount', total + price * count);
                    dispatch(changeDataCart(unique));
                    dispatch(changeTotal(total + price * count));
                } else {
                    console.log(result);
                }

            } else {
                const data = [...dataCart, {
                    idShop: shop.id,
                    shopName: shop.name,
                    goods: [
                        {
                            id,
                            name,
                            price,
                            count,
                            files
                        }
                    ]
                }];

                window.localStorage.setItem('dataCart', JSON.stringify(data));
                window.localStorage.setItem('cartAmount', JSON.stringify(total + price * count));
                dispatch(changeDataCart(data));
                dispatch(changeTotal(total + price * count));
            }
        }

    }

    return (
        <Layout header={false}>
            <HeaderAlt title={''} path={-1} />
            <div className="App">
                {
                    Object.keys(goods).length > 0 && !isLoadingGoods ? (

                        <div className={styles.container}>
                            <div className={styles.image}>
                                <img src={backendURL + goods.files[0].path} alt='Рисунок' />
                            </div>
                            <div className={styles.inf}>
                                <p className={styles.name}>{goods.name}</p>
                                <p className={styles.price}>
                                    {goods.price}
                                    <RubleSVGIcon width={15} height={15} style={{ marginTop: -2 }} />
                                </p>
                                <p className={styles.description}>{goods.description}</p>
                            </div>
                            <div className={styles.btns}>
                                <div className={styles.btnsCount}>
                                    <div className={styles.btn} onClick={() => { decrement() }}>-</div>
                                    <input className={styles.count} type={'number'} value={count} onChange={({ target }) => {
                                        if (target.value < 0) return target.value = 0;
                                        setCount(target.value);
                                    }} />
                                    <div className={styles.btn} onClick={() => { increment() }}>+</div>
                                </div>
                                <div className={styles.btnAdd} onClick={() => { sendDataInCart() }}>
                                    <p>Добавить</p>
                                </div>
                            </div>
                        </div>
                    ) : (
                        <Loader styleImg={{width: '30%', height: '18%'}} />
                        // <div>Загрузка</div>
                    )
                }
            </div>
        </Layout>
    )
}