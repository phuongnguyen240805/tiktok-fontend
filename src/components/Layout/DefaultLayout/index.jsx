import Header from "~/components/Layout/components/Header";
import Sidebar from "./Sidebar";



function DefaultLayout({ children }) {
    return (
        <div className="contains">
            <Header />
            <div className="content">
                <Sidebar />
                <div>{children}</div>
            </div>
        </div>
    )
}

export default DefaultLayout;