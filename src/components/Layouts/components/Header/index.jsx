import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useEffect, useState } from 'react';
import {
    faCircleQuestion, faCircleXmark, faCloudUpload, faCoins, faEarthAsia,
    faEllipsisVertical, faGear, faKeyboard, faMagnifyingGlass, faSignOut, faSpinner,
    faUser
} from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react';
import HeadlessTippy from '@tippyjs/react/headless';
import 'tippy.js/dist/tippy.css';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';
import Menu from '~/components/Popper/Menu';

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
    const [searchResult, setSearchResult] = useState([])

    // current user login
    const currentUser = true

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([])
        }, 0);
    }, [])

    const handleSearch = useCallback((value) => {
        setTimeout(() => {
            setSearchResult([value])
        }, 2000);
    }, [])

    // Handle logic
    const handleMenuChange = (menuItem) => {
        console.log(menuItem)
    }

    const userMenu = [
        {
            icon: <FontAwesomeIcon icon={faUser} />,
            title: 'View profile',
            to: '/@phuong'
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
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <span>
                    <HeadlessTippy
                        interactive={true}
                        visible={searchResult.length > 0}
                        render={attrs => (
                            <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                                <PopperWrapper>
                                    <h4 className={cx('search-title')}>
                                        Accounts
                                    </h4>
                                    <AccountItem
                                        linkImage='https://p3-pc.douyinpic.com/img/aweme-avatar/tos-cn-avt-0015_a11b1533ed0dcdd278b083211da21016~c5_300x300.jpeg?from=2956013662'
                                        name="Nguyen Thi Anh Thu"
                                        username='nguyenthu'
                                        alt='Thu'
                                        icon
                                    />
                                    <AccountItem
                                        linkImage='https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/78de2bfe1d699bd0bb7347b6a50cf101.jpeg?lk3s=a5d48078&nonce=18533&refresh_token=7501b2427dd6ff5fbe78476019b8d0c1&x-expires=1739278800&x-signature=%2BtYcAjkFgt9zqVKsYY7uRO9QQkA%3D&shp=a5d48078&shcp=81f88b70'
                                        name="Huynh Van Thi"
                                        username='huynhthi'
                                        alt='Thi'
                                    />
                                </PopperWrapper>
                            </div>
                        )}
                    >
                        <div className={cx('search')}>
                            <input placeholder="Search accounts and videos" spellCheck={false} onChange={e => handleSearch(e.value)} />
                            <button className={cx('clear')}>
                                <FontAwesomeIcon icon={faCircleXmark} />
                            </button>
                            <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />

                            <button className={cx('search-btn')}>
                                <FontAwesomeIcon icon={faMagnifyingGlass} />
                            </button>
                        </div>
                    </HeadlessTippy>
                </span>


                <div className={cx('actions')}>
                    {
                        currentUser ?
                            (
                                <>
                                
                                    <Tippy
                                        content='Upload video'
                                        placement='bottom'
                                        delay={[0, 200]}
                                    >
                                        <Button className={cx('action-btn')}><FontAwesomeIcon icon={faCloudUpload} /></Button>
                                    </Tippy>
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
                                    <img src="https://topdanangcity.com/wp-content/uploads/2024/09/anh-avatar-dep-0Tq3Qs0.jpg" alt="Nguyen Xuan Phuong" className={cx('user-avatar__img')} />
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