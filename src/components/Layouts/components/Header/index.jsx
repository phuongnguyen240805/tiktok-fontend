import { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import Tippy from '@tippyjs/react/headless';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Header.module.scss';
import images from '~/assets/images';
import AccountItem from '~/components/AccountItem';
import Button from '~/components/Button';

const cx = classNames.bind(styles);

function Header() {
    const [searchResult, setSearchResult] = useState([])

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

    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>
                <span>
                    <Tippy
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
                                    />
                                    <AccountItem
                                        linkImage='https://p16-sign-sg.tiktokcdn.com/aweme/1080x1080/tos-alisg-avt-0068/78de2bfe1d699bd0bb7347b6a50cf101.jpeg?lk3s=a5d48078&nonce=18533&refresh_token=7501b2427dd6ff5fbe78476019b8d0c1&x-expires=1739278800&x-signature=%2BtYcAjkFgt9zqVKsYY7uRO9QQkA%3D&shp=a5d48078&shcp=81f88b70'
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
                    </Tippy>
                </span>
                <div className={cx('actions')}>
                    {/* target='_blank': mở trang trong tab mới 
                        className={cx('custom-login')} // khi muốn custom riêng cho button 
                    */}
                    <Button text>Upload</Button>
                    <Button primary>Log in</Button>
                </div>
            </div>
        </header>
    );
}

export default Header;