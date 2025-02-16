import classNames from "classnames/bind";
import { Link } from "react-router";

import styles from './Button.module.scss'

const cx = classNames.bind(styles)

function Button({
    to, href, //link
    primary = false, outline = false, text = false, disabled = false, rounded = false,// button types
    small = false, large = false, // button size
    className,
    leftIcon, rightIcon, // icon button
    children, onClick,
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

export default Button;