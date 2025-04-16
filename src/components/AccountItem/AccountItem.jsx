import classNames from "classnames/bind";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router";
import PropTypes from 'prop-types';

import styles from './AccountItem.module.scss'
import Image from "../Image";
import config from "~/config";

const cx = classNames.bind(styles)

function AccountItem({ data }) {
    return (
        <Link to={config.routes.profile} className={cx('wrapper')}>
            <div className={cx('avatar')}>
                <Image className={cx('avatar-img')} 
                    src={data.avatar}
                    alt={data.last_name} />
            </div>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {
                        data.tick &&
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                    }
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    )
}

AccountItem.propTypes  = {
    data: PropTypes.object.isRequired
}

export default AccountItem;