import classNames from "classnames/bind";
import PropTypes from 'prop-types';

import styles from "./Setting.module.scss";

const cx = classNames.bind(styles);

function Setting() {
    return (
        <div className={cx('wrapper')}>setting</div>
    );
}

Setting.propTypes = {
    // Define prop types if needed
};

export default Setting;