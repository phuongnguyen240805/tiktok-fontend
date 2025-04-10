import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router";

import styles from './AccountPreview.module.scss'
import Image from "~/components/Image";
import Button from "~/components/Button";
import config from "~/config";

const cx = classNames.bind(styles)

function AccountPreview({ data }) {

    return (
        <div className={cx('wrapper')}>
            <header className={cx('header')}>
                <Link to={config.routes.profile}>
                    <Image
                        className={cx('avatar')}
                        src={data.avatar}
                        alt={data.full_name}
                    />
                </Link>
                <Button className={cx('follow-btn')} primary>Follow</Button>
            </header>
            <div className={cx('body')}>
                <p className={cx('username')}>
                    <strong>{data.nickname}</strong>
                    {data.tick &&
                        <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </p>
                <p className={cx('name')}>{data.full_name}</p>
                <p className={cx('analytics')}>
                    <strong className={cx('value')}>{data.followers_count} </strong>
                    <span className={cx('label')}>Follower</span>
                    <strong className={cx('value')}>{data.likes_count} </strong>
                    <span className={cx('label')}>Likes</span>
                </p>
            </div>
        </div>
    );
}

AccountPreview.propTypes = {
    data: PropTypes.node.isRequired
}

export default AccountPreview;