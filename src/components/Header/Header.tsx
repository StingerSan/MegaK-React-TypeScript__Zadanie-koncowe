import React from "react";
import {Link} from "react-router-dom";

export const Header = () => (
    <>
        <h1>Santa App</h1>
        Menu: <Link to="/gift">Gifts</Link> | <Link to="/test">Test</Link>

    </>
);
