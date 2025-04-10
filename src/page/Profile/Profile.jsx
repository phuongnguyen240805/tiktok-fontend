import classNames from "classnames/bind";
import PropTypes from 'prop-types';

import styles from "./Profile.module.scss";
import Image from "~/components/Image";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear, faShare } from "@fortawesome/free-solid-svg-icons";
import config from "~/config";
import { ShareIcon } from "~/components/Icons";

const cx = classNames.bind(styles);

function Profile() {
    return (
        <div className={cx("wrapper")}>
            <div className={cx('info-profile')}>
                <div className={cx('avatar')}>
                    <Image src="https://topdanangcity.com/wp-content/uploads/2024/09/anh-avatar-dep-0Tq3Qs0.jpg"
                        alt="Nguyen Xuan Phuong"
                        className={cx('avatar-img')}
                    // fallback='https://topdanangcity.com/wp-content/uploads/2024/09/anh-avatar-dep-0Tq3Qs0.jpg'
                    />
                </div>
                <div className={cx('info-user')}>
                    <div className={cx('name')}>
                        <strong className={cx('nickname')}>NguyenXuanPhuong</strong>
                        <span className={cx('fullname')}>Nguyễn Xuân Phương</span>
                    </div>
                    <div className={cx('options')}>
                        <Button primary>Sửa hồ sơ</Button>
                        <Button
                            className={cx('btn-advertise')}
                            text
                        >
                            Quảng bá bài đăng
                        </Button>
                        <Button className={cx('btn-setting')} to={config.routes.settings}><FontAwesomeIcon icon={faGear} /></Button>
                        <Button className={cx('btn-share')}><ShareIcon className={cx('share-icon')}/></Button>
                    </div>
                    <div className={cx('interact')}>
                        <span>
                            <strong>69</strong>
                            <Button className={cx('btn-interact')} text>Đã follow</Button>
                        </span>
                        <span>
                            <strong>69</strong>
                            <Button className={cx('btn-interact')} text>Follower</Button>
                        </span>
                        <span>
                            <strong>69</strong>
                            <Button className={cx('btn-interact')} disabledText>Lượt thích</Button>
                        </span>
                        <div className={cx('bio')}>Chưa có tiểu sử.</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

Profile.propTypes = {
    // Define prop types if needed
};

export default Profile;