import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
import classNames from "classnames/bind";

import styles from './ToolTip.module.scss'

const cx = classNames.bind(styles)

function Tooltip(
    {
        children,
        delay = [0, 200],
        offset = [8, 16],
        placement,
        notify,
        ...props
    }) {

    const classes = cx('wrapper', {
        notify
    })

    return (
        <Tippy
            className={classes}
            delay={delay}
            offset={offset}
            placement={placement}
            {...props}
        >
            {children}
        </Tippy>
    );
}

export default Tooltip;