import classNames from 'classnames/bind';
import styles from './Popper.module.scss'
import PropTypes from 'prop-types';

const cx = classNames.bind(styles)

function Wrapper({ children, className }) {

    const classes = cx('wrapper', {
        [className]: className
    })

    return (
        <div className={classes}>
            {children}
        </div>
    )
}

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
}

export default Wrapper;