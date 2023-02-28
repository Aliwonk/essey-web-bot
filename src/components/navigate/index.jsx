import './index.css';

// IMPORT SVG ICONS
import { ReactComponent as HomeSVGIcon } from '../../assets/icon/bottomNavigate/Home_alt.svg';
import { ReactComponent as LocationSVGIcon } from '../../assets/icon/bottomNavigate/Location.svg';
import { ReactComponent as CartSVGIcon } from '../../assets/icon/bottomNavigate/Cart_alt.svg';
import { ReactComponent as OtherSVGIcon } from '../../assets/icon/bottomNavigate/Circle_menu.svg';

export function BottomNavigate() {
    return (
        <div className="bottomNavigate">
            <div className='btn'>
                <HomeSVGIcon width={20} height={20} />
                <p>Главная</p>
            </div>
            <div className='btn'>
                <LocationSVGIcon width={23} height={21} />
                <p>Карта</p>
            </div>
            <div className='btn'>
                <CartSVGIcon width={23} height={23} />
                <p>Корзина</p>
            </div>
            <div className='btn'>
                <OtherSVGIcon width={23} height={23} />
                <p>Еще</p>
            </div>
        </div>
    )
}