
import logo from '@images/header/logo.jpg';
import Menu from '@components/menu';
import './_index.scss';

const Header = () => {
    return ( 
        <header>
            <div className="header">
            <div className="header__container container">
                    <a className="header__logo" href='/#'>
                        <img src={logo} alt=""></img>
                    </a>
                    <Menu />
                </div>
            </div>
        </header>       
    );
};

export default Header;