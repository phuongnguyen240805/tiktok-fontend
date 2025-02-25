import Header from "~/layouts/components/Header";

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