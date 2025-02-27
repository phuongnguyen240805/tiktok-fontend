import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";

import styles from './Menu.module.scss'
import Button from "~/components/Button";

const cx = classNames.bind(styles)

function Header({ title, onBack }) {

    return (
        <header className={cx('header')}>
            <Button className={cx('back-btn')} onClick={onBack}>
                <FontAwesomeIcon icon={faChevronLeft} />
            </Button>
            {/* <button className={cx('back-btn')} onClick={onBack}>    
                <FontAwesomeIcon icon={faChevronLeft} />
            </button> */}
            <h4 className={cx('header-title')}>{title}</h4>
        </header>
    );
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    onBack: PropTypes.func.isRequired,
}

export default Header;