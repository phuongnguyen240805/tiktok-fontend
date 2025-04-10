import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faCircleQuestion, faCoins, faEarthAsia,
    faEllipsisVertical, faGear, faKeyboard, faSignOut,
    faUser
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router';

import styles from './Header.module.scss';
import images from '~/assets/images';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';
import Tooltip from '~/components/ToolTip';
import { InboxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import DotNotify from '~/components/DotNotify';
import Search from '../Search';
import config from "~/config"

const cx = classNames.bind(styles);

const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={faEarthAsia} />,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {
                    type: 'language',
                    code: 'En',
                    title: 'English'
                },
                {
                    type: 'language',
                    code: 'Vi',
                    title: 'Tiếng Việt'
                },
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion} />,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard} />,
        title: 'Keyboard shortcuts',
        to: '/keyboard'
    },
]

function Header() {

    // current user login
    const currentUser = true

    // Handle logic
    const handleMenuChange = (menuItem) => {
        // console.log(menuItem)
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: config.routes.profile
        },
        {
            icon: <FontAwesomeIcon icon={faCoins} />,
            title: 'Get coins',
            to: '/coins'
        },
        {
            icon: <FontAwesomeIcon icon={faGear} />,
            title: 'Settings',
            to: '/settings'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut} />,
            title: 'Log out',
            to: '/logout',
            separate: true
        },
    ]

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link to={config.routes.home} className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </Link>

                {/* Search */}
                <span>
                    <Search />
                </span>


                <div className={cx('actions')}>
                    {
                        currentUser ?
                            (
                                <>

                                    <Tooltip
                                        content='Upload video'
                                        offset={[0, 8]}
                                    >
                                        <Button className={cx('action-btn')}><UploadIcon /></Button>
                                    </Tooltip>

                                    <Tooltip
                                        content='Message'
                                        offset={[0, 8]}
                                    >
                                        <Button className={cx('action-btn')}><MessageIcon width='2.4rem' height='2.4rem' /></Button>
                                    </Tooltip>

                                    <DotNotify
                                        num='15'
                                    >
                                        <Tooltip
                                            content='Inbox'
                                            offset={[0, 8]}
                                        >
                                            <Button className={cx('action-btn')}><InboxIcon /></Button>
                                        </Tooltip>
                                    </DotNotify>
                                </>
                            ) : (
                                <>
                                    {/* target='_blank': mở trang trong tab mới 
                                className={cx('custom-login')} // khi muốn custom riêng cho button 
                            */}
                                    <Button text>Upload</Button>
                                    <Button primary>Log in</Button>


                                </>
                            )
                    }
                    <Menu
                        items={currentUser ? userMenu : MENU_ITEMS}
                        onChange={item => handleMenuChange(item)}
                    >
                        {
                            currentUser ? (
                                <div className={cx('user-avatar')}>
                                    <Image src="https://topdanangcity.com/wp-content/uploads/2024/09/anh-avatar-dep-0Tq3Qs0.jpg"
                                        alt="Nguyen Xuan Phuong"
                                        className={cx('user-avatar__img')}
                                    // fallback='https://topdanangcity.com/wp-content/uploads/2024/09/anh-avatar-dep-0Tq3Qs0.jpg'
                                    />
                                </div>
                            ) : (
                                <button className={cx('more-btn')}>
                                    <FontAwesomeIcon icon={faEllipsisVertical} />
                                </button>
                            )
                        }
                    </Menu>
                </div>
            </div>
        </header >
    );
}

export default Header;