import classNames from "classnames/bind";
import { Link } from "react-router";
import PropTypes from 'prop-types';

import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({
    to,
    href, //link
    // button types
    primary = false,
    outline = false,
    text = false,
    disabled = false,
    rounded = false,
    // button size
    small = false,
    large = false,
    className,
    // icon button
    leftIcon,
    rightIcon,
    children,
    onClick,
    ...passProps // pass event
}) {
    let Comp = 'button'
    const props = {
        onClick,
        ...passProps
    }

    // remove event listener when disabled
    if (disabled) {
        // delete props.onClick
        Object.keys(props).forEach(key => {
            if (key.startsWith('on') && typeof props[key] === 'function') {
                delete props[key]
            }
        })
    }

    // chuyển đổi thẻ 'a' và Link
    if (to) {
        props.to = to
        Comp = Link
    } else if (href) {
        props.href = href
        Comp = 'a'
    }

    const classes = cx('wrapper', {
        [className]: className, // truy cập thuộc tính
        primary,
        outline,
        text,
        disabled,
        rounded,
        small,
        large
    })

    return (
        <>
            <Comp className={classes} {...props}>
                {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
                <span className={cx('title')}>{children}</span>
                {rightIcon && <span className={cx('icon')}>{rightIcon}</span>}
            </Comp>
        </>
    )
}

Button.propTypes = {
    children: PropTypes.node.isRequired,  // bắt buột truyền prop
    to: PropTypes.string,
    href: PropTypes.string,
    primary: PropTypes.bool,
    outline: PropTypes.bool,
    text: PropTypes.bool,
    disabled: PropTypes.bool,
    rounded: PropTypes.bool,
    small: PropTypes.bool,
    large: PropTypes.bool,
    className: PropTypes.string,
    leftIcon: PropTypes.node,
    rightIcon: PropTypes.node,
    onClick: PropTypes.func,
}

export default Button;