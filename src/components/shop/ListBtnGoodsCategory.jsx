import { useDispatch, useSelector } from "react-redux";
import { changeCategoryGoods } from "../../redux/features/shop";

export default function ListBtnGoodsCategory() {
    const { goodsCategory } = useSelector((state) => state.shop);
    const dispatch = useDispatch();
    const categoryShop = (() => {
        const categories = goodsCategory.map(goods => goods.category);
        const uniqCategories = new Set(categories);
        return ['Все', ...uniqCategories];
    })();

    const item = categoryShop.map((category, index) => {
        return (
            <div style={{
                border: '0.5px solid black',
                borderRadius: 5,
                padding: 4,
                fontSize: 15,
                marginRight: 10,
            }} key={index} onClick={() => {
                dispatch(changeCategoryGoods(category));
            }}>
                <p>{category}</p>
            </div>
        )
    });



    return (
        <div style={{
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            width: '100%',
            height: 45,
            overflowX: 'scroll'
        }}>{item}</div>
    )
}