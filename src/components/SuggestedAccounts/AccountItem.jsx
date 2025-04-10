import PropTypes from 'prop-types';
import classNames from "classnames/bind";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import Tippy from '@tippyjs/react/headless';

import styles from './SuggestedAccounts.module.scss'
import Image from '../Image';
import { Wrapper as InfoWrapper } from '../Popper';
import AccountPreview from './AccountPreview';

const cx = classNames.bind(styles)

function AccountItem({ data }) {

    const renderPreview = (attrs) => {
        return (
            <div className={cx('preview')} tabIndex="-1" {...attrs}>
                <InfoWrapper>
                    <AccountPreview data={data}/>
                </InfoWrapper>
            </div>
        )
    }

    return (
        // Using a wrapper <div> or <span> tag around the reference element solves 
        // this by creating a new parentNode context. 
        <div>
            <Tippy
                interactive={true}
                delay={[800, 200]}
                offset={[-18, 0]}
                placement='bottom'
                render={renderPreview}
            >
                <div className={cx('account-item')}>
                    <div className={cx('avatar')}>
                        <Image className={cx('avatar-img')}
                            src={data.avatar}
                            alt={data.full_name} />
                    </div>
                    <div className={cx('item-info')}>
                        <p className={cx('username')}>
                            <strong>{data.nickname}</strong>
                            {data.tick &&
                                <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                        </p>
                        <p className={cx('name')}>{data.full_name}</p>
                    </div>
                </div>
            </Tippy>
        </div >
    );
}

AccountItem.propTypes = {
    data: PropTypes.node.isRequired
}

export default AccountItem;