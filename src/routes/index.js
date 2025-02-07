import { SubLayout } from "~/components/Layout"
import { HomePage, FollowingPage, ProfilePage, SearchPage, UploadPage } from "~/page"

// public routes
const publicRoutes = [
    { path: '/', component: HomePage },
    { path: '/following', component: FollowingPage },
    { path: '/profile', component: ProfilePage },
    { path: '/search', component: SearchPage, layout: null },
    { path: '/upload', component: UploadPage, layout: SubLayout },
]


// private routes
const privateRoutes = [

]

export { publicRoutes, privateRoutes }