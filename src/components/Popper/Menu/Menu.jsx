import Tippy from "@tippyjs/react/headless";
import classNames from "classnames/bind";
import { useState, memo } from "react";
import PropTypes from 'prop-types';

import { Wrapper as PopperWrapper } from '~/components/Popper';
import styles from './Menu.module.scss'
import MenuItem from "./MenuItem";
import Header from "./Header";

const cx = classNames.bind(styles)

const defaultFn = () => { }

function Menu({ children, items = [], hideOnClick = false, onChange = defaultFn }) {

    const [history, setHistory] = useState([{ data: items }])

    const current = history[history.length - 1] // lấy phần tử cuối mảng

    // render menu items
    const renderItems = () => {
        return current.data.map((item, index) => {
            const isParent = !!item.children // convert boolean (!!) 

            return (
                <MenuItem
                    key={index}
                    data={item}
                    onClick={() => {
                        if (isParent) {
                            setHistory(prevHistory => [...prevHistory, item.children])
                        } else {
                            onChange(item)
                        }
                    }}
                />
            )
        })
    }

    const handleBack = () => {
        setHistory(prev => prev.slice(0, history.length - 1))
    }

    // reset to first page when hire
    const handleReset = () => {
        setHistory(prevHistory => prevHistory.slice(0, 1))
    }

    return (
        <Tippy
            // visible
            interactive={true}
            placement='bottom-end'
            delay={[0, 700]} // [show, hide]
            offset={[12, 8]} // [width, height]
            render={attrs => (
                <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
                    <PopperWrapper className={cx('menu-popper')}>
                        {
                            history.length > 1 &&
                            <Header
                                title={current?.title}
                                onBack={handleBack}
                            />
                        }
                        <div className={cx('menu-scrollable')}>{renderItems()}</div>
                    </PopperWrapper>
                </div>
            )}
            hideOnClick={hideOnClick} // hide when click
            onHide={handleReset} // set về trang đầu khi ẩn
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
}

export default memo(Menu);