import React from 'react'
import { Link } from "react-router-dom";

const useLinkComponent = ({url, children, ...rest}) => {
    return (
        <Link to={url} {...rest}>
            {children}
        </Link>
    );
}
 
export default useLinkComponent;