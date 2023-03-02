import Layout from "../../components/Layout";
import styles from './index.module.css'

// IMPORT SVG ICONS
import { ReactComponent as UserMaleSVGIcon } from '../../assets/icon/other/403019_avatar_male_man_person_user_icon.svg';
import { ReactComponent as PenSVGIcon } from '../../assets/icon/other/pen.svg';

export default function Other() {
    return (
        <Layout>
            <div className="App">
                <div className={styles.container} style={{marginTop: 35}}>
                    <div className={styles.profile}>
                        <div className={styles.photoUser}>
                            <UserMaleSVGIcon width={70} height={70} />
                        </div>
                        <div className={styles.infUser}>
                            <div className={styles.fullName}>
                                <div className={styles.nameUser}>Aidysh</div>
                                <div className={styles.surname}>Baldan</div>
                            </div>
                            <div className={styles.role}>Пользователь</div>
                        </div>
                        <div className={styles.btnEdit}>
                            <PenSVGIcon width={35} height={35} style={{marginTop: 13}} />
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}