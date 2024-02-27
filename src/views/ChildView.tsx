import React from "react";
import {ChildrenList} from "../components/Children/ChildrenList";
import {AddChild} from "../components/AddChild/AddChild";

export const ChildView = () => {
    return(
        <>
            <ChildrenList/>
            <AddChild/>
        </>
    );
};

