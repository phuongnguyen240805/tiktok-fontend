import classNames from "classnames/bind";

import styles from './DotNotify.module.scss'

const cx = classNames.bind(styles)

function DotNotify({ children, num = 1 }) {

    let notify = ''

    num >= 100 ? notify = '99+' : notify = num

    return (
        <div className={cx('box-notify')}>
            {children}
            <span className={cx('notify')}>{notify}</span>
        </div>
    );
}

export default DotNotify;