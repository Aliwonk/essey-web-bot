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
                <ArrowBackSVGIcon width={35} height={35} style={{marginRight: 15, marginLeft: 15}} onClick={() => {
                    navigate('/');
                }}/>
                <div className={styles.headerTitle}>Speed Pizza</div>
            </div>
            <div className={`${styles.app} App`}>
                <div className={styles.container}>
                    <div className={styles.image}></div>
                </div>
            </div>
        </Layout>
    )
}