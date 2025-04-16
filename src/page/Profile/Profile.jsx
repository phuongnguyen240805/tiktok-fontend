import classNames from "classnames/bind";
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import { useCallback, useEffect, useState } from "react";

import styles from "./Profile.module.scss";
import config from "~/config";
import Image from "~/components/Image";
import Button from "~/components/Button";
import { ShareIcon } from "~/components/Icons";
import ProfileContent from "./ProfileContent";
import { profileOptions, userData as data } from "~/helpers";

const cx = classNames.bind(styles);

function Profile() {
    const [activeOption, setActiveOption] = useState(0);
    const [activeSubOption, setActiveSubOption] = useState(0);
    const [userData, setUserData] = useState([]);

    const isActiveOption = useCallback((index) => (
        activeOption === index
    ), [activeOption]);

    const isActiveSubOption = (status, index) => status && activeSubOption === index;

    useEffect(() => {

        // mock data
        setUserData(data[0])

    }, [])

    const currentOptionKey = profileOptions?.[activeOption]?.key;
    const currentData = userData?.data?.[currentOptionKey] || [];

    return (
        <div className={cx("wrapper")}>
            <div className={cx('info-profile')}>
                <div className={cx('avatar')}>
                    <Image src={userData?.avatar}
                        alt={userData?.full_name}
                        className={cx('avatar-img')}
                    // fallback='https://topdanangcity.com/wp-content/uploads/2024/09/anh-avatar-dep-0Tq3Qs0.jpg'
                    />
                </div>

                <div className={cx('info-user')}>
                    <div className={cx('name')}>
                        <strong className={cx('nickname')}>{userData?.nickname}</strong>
                        <span className={cx('fullname')}>{userData?.full_name}</span>
                    </div>

                    <div className={cx('options')}>
                        <Button primary>Sửa hồ sơ</Button>
                        <Button className={cx('btn-advertise')} text>Quảng bá bài đăng</Button>
                        <Button className={cx('btn-setting')} to={config.routes.settings}><FontAwesomeIcon icon={faGear} /></Button>
                        <Button className={cx('btn-share')}><ShareIcon className={cx('share-icon')} /></Button>
                    </div>

                    <div className={cx('interact')}>
                        <span>
                            <strong>{userData?.followings_count}</strong>
                            <Button className={cx('btn-interact')} text>Đã follow</Button>
                        </span>
                        <span>
                            <strong>{userData?.followers_count}</strong>
                            <Button className={cx('btn-interact')} text>Follower</Button>
                        </span>
                        <span>
                            <strong>{userData?.likes_count}</strong>
                            <Button className={cx('btn-interact')} disabledText>Lượt thích</Button>
                        </span>
                        <div className={cx('bio')}>Chưa có tiểu sử.</div>
                    </div>
                </div>
            </div>

            <div className={cx('navbar')}>
                <div className={cx('options-navbar')}>
                    {
                        profileOptions.map((option, index) => (
                            <Button
                                key={index}
                                className={cx('btn-option', { active: isActiveOption(index) })}
                                text
                                leftIcon={option.icon}
                                onClick={() => setActiveOption(index)}
                            >
                                {option.title}
                            </Button>
                        ))}
                </div>

                <div className={cx('sub-options')}>
                    {
                        profileOptions[activeOption].subOptions?.map((option, index) => (
                            <Button
                                key={index}
                                className={
                                    cx('btn-sub__option', {
                                        active: isActiveSubOption(option.status, index),
                                        status: option.status === false,
                                    })
                                }
                                text
                                leftIcon={option?.icon}
                                onClick={() => setActiveSubOption(index)}
                            >
                                {option.title}
                            </Button>
                        ))}
                </div>
            </div>

            <div className={cx('content')}>
                <ProfileContent
                    contentType={currentOptionKey}
                    data={currentData}
                />
            </div>
        </div>
    );
}

Profile.propTypes = {
    // Define prop types if needed
};

export default Profile;