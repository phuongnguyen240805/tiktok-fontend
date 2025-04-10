import { SubLayout } from "~/layouts"
import { HomePage, FollowingPage, ProfilePage, SearchPage, UploadPage, LivePage, SettingPage } from "~/page"

import config from "~/config"

// public routes
const publicRoutes = [
    { path: config.routes.home, component: HomePage },
    { path: config.routes.following, component: FollowingPage },
    { path: config.routes.profile, component: ProfilePage },
    { path: config.routes.search, component: SearchPage, layout: null },
    { path: config.routes.upload, component: UploadPage, layout: SubLayout },
    { path: config.routes.live, component: LivePage },
    { path: config.routes.settings, component: SettingPage },
]


// private routes
const privateRoutes = [

]

export { publicRoutes, privateRoutes } 