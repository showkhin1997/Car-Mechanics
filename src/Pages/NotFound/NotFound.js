import React from 'react';
import { Link } from 'react-router-dom';
import notFoundImg from '../../images/404.png';

const NotFound = () => {
    return (
        <div>
            <img style={{ width: "100%" }} src={notFoundImg} alt="" />
            <Link to="/">
                <button className="btn btn-primary mb-5">Go Back</button>
            </Link>
        </div>
    );
};

export default NotFound;