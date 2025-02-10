import Header from "~/components/Layouts/components/Header";

function SubLayout({ children }) {
    return (
        <div className="contains">
            <Header />
            <div className="content">
                <div>{children}</div>
            </div>
        </div>
    )
}

export default SubLayout;