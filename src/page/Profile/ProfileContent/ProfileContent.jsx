import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import { memo } from "react";

import styles from "./ProfileContent.module.scss";
import { EmptyVideoIcon } from "~/components/Icons";

const cx = classNames.bind(styles);

const contentTypeOptions = {
    video: {
        title: 'Tải video đầu tiên của bạn lên',
        subtitle: 'Video của bạn sẽ xuất hiện tại đây'
    },
    favorite: {
        title: 'Bạn chưa có video yêu thích',
        subtitle: 'Video yêu thích của bạn sẽ xuất hiện tại đây'
    },
    liked: {
        title: 'Video Này Chưa Có Nội Dung, Nhưng Được Yêu Thích!',
        subtitle: 'Chúng Tôi Đang Tạo Nên Một Điều Gì Đó Tuyệt Vời!'
    }
}

function ProfileContent({ contentType, data = [] }) {

    const isEmpty = data.length === 0;

    return (
        <div className={cx("wrapper")}>
            {
                isEmpty ? (
                    <div className={cx('empty-content')}>
                        <div className={cx('empty-icon')}>
                            <EmptyVideoIcon className={cx('icon-empty')} />
                        </div>
                        <div className={cx('empty-title')}>{contentTypeOptions[contentType].title}</div>
                        <div className={cx('empty-subtitle')}>{contentTypeOptions[contentType].subtitle}</div>
                    </div>
                ) : (
                    <div className={cx('content-list')}>
                        {/* Replace this with actual rendering logic */}
                        {data.map((item, index) => (
                            <div key={index} className={cx('content-item')}>
                                {/* Render item here */}
                            </div>
                        ))}
                    </div>
                )
            }
        </div>
    );
}

ProfileContent.propTypes = {
    contentType: PropTypes.string.isRequired,
    data: PropTypes.array
};

export default memo(ProfileContent);