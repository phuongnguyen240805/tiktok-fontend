import classNames from "classnames/bind";

import styles from './AccountItem.module.scss'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles)

function AccountItem({ linkImage }) {
    return (
        <div className={cx('wrapper')}>
            <div className={cx('avatar')}>
                <img className={cx('avatar-img')}
                    src={linkImage}
                    alt="Thi" />
            </div>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Thi Anh Thu</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>thunguyen</span>
            </div>
        </div>
    )
}

export default AccountItem;