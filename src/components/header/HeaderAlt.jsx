import styles from './HeaderAlt.module.css';
import { ReactComponent as ArrowBackSVGIcon } from '../../assets/icon/shop/jump_left.svg';
import { useNavigate } from 'react-router-dom';


export default function HeaderAlt(props) {
    const { title, path } = props;
    const navigate = useNavigate();

    return (
        <div className={styles.header}>
            <ArrowBackSVGIcon className={styles.headerBtnBack} width={35} height={35} onClick={() => {
                navigate(path);
            }} />
            <div className={styles.headerTitle}>{title}</div>
        </div>
    )
}