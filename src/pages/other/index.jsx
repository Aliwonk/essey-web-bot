import Layout from "../../components/Layout";
import styles from './index.module.css'

// IMPORT SVG ICONS

import { ReactComponent as UserMaleSVGIcon } from '../../assets/icon/other/403019_avatar_male_man_person_user_icon.svg';
import { ReactComponent as PenSVGIcon } from '../../assets/icon/other/pen.svg';
import { ReactComponent as BagSVGIcon } from '../../assets/icon/other/bag (1).svg';
import { ReactComponent as MessageSVGIcon } from '../../assets/icon/other/message.svg';
import { ReactComponent as CoinsSVGIcon } from '../../assets/icon/other/coins (1).svg';
import { ReactComponent as DocumentSVGIcon } from '../../assets/icon/other/document_list.svg';
import { ReactComponent as InfSVGIcon } from '../../assets/icon/other/info_circle.svg';
import { ReactComponent as ChatSVGIcon } from '../../assets/icon/other/chat_add.svg';

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
                            <PenSVGIcon width={35} height={35} style={{marginTop: 10, marginLeft: 20}} />
                        </div>
                    </div>
                    <div className={styles.pages}>
                        <div className={styles.btnPage}>
                            <BagSVGIcon width={35} height={35} />
                            <p>Мои заказы</p>
                        </div>
                        <div className={styles.btnPage}>
                            <MessageSVGIcon width={35} height={35} />
                            <p>Сообщения</p>
                        </div>
                        <div className={styles.btnPage}>
                            <CoinsSVGIcon width={35} height={35} />
                            <p>Кешбэки</p>
                        </div>
                        <div className={styles.btnPage}>
                            <DocumentSVGIcon width={35} height={35} />
                            <p>История заказов</p>
                        </div>
                        <div className={styles.btnPage}>
                            <ChatSVGIcon width={35} height={35} />
                            <p>Обратная связь</p>
                        </div>
                        <div className={styles.btnPage}>
                            <InfSVGIcon width={35} height={35} />
                            <p>О приложении</p>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}