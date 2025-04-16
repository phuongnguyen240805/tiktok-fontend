import classNames from "classnames/bind";

import styles from './Sidebar.module.scss'
import Menu, { MenuItem } from "./Menu";
import config from "~/config";
import {
    HomeIcon,
    UserGroupIcon,
    LiveIcon,
    HomeActiveIcon,
    UserGroupActiveIcon,
    LiveActiveIcon
} from "~/components/Icons";
import SidebarAccount from "./SidebarAccount";

const cx = classNames.bind(styles)

function Sidebar() {

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem
                    title="For You"
                    to={config.routes.home}
                    icon={<HomeIcon />}
                    activeIcon={<HomeActiveIcon />}
                />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon className={cx('group-icon')} />}
                    activeIcon={<UserGroupActiveIcon className={cx('group-icon')} />}
                />
                <MenuItem
                    title="LIVE"
                    to={config.routes.live}
                    icon={<LiveIcon />}
                    activeIcon={<LiveActiveIcon />}
                />
            </Menu>

            <SidebarAccount />
        </aside>
    )
}

export default Sidebar;