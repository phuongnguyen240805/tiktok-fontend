import PropTypes from 'prop-types';

import Header from "~/layouts/components/Header/Header";

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

SubLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default SubLayout;