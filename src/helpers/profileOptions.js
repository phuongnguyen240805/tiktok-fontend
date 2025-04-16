import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import classNames from "classnames/bind";

import { HeartIcon, ListIcon, SaveIcon } from "~/components/Icons";
import styles from "~/page/Profile/Profile.module.scss";

const cx = classNames.bind(styles);

const profileOptions = [
    {
        icon: <ListIcon className={cx('icon')} />,
        title: 'Video',
        key: 'video',
        subOptions: [
            { title: 'Mới nhất', status: true },
            { title: 'Thịnh hành', status: true },
            { title: 'Cũ Nhất', status: true },
        ]
    },
    {
        icon: <SaveIcon className={cx('icon')} />,
        title: 'Yêu thích',
        key: 'favorite',
        subOptions: [
            {
                icon: <FontAwesomeIcon className={cx('icon')} icon={faPlusCircle} />,
                title: 'Tạo bộ sưu tập mới',
                status: false,
            }
        ]
    },
    {
        icon: <HeartIcon className={cx('icon')} />,
        title: 'Đã thích',
        key: 'liked',
        subOptions: [
            { title: '' }
        ]
    },
];

export { profileOptions };