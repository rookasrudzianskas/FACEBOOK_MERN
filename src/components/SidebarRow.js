import React from 'react';
import {Avatar} from "@material-ui/core";
import "./styles/SidebarRow.css";

const SidebarRow = ({src, Icon, title}) => {
    return (
        <div className="sidebarRow">
            {src && <Avatar src={src} />}
            {Icon && <Icon />}

            <p>{title}</p>
        </div>
    );
};

export default SidebarRow;
