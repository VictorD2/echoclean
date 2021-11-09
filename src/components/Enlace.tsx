import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    url: string;
    role?: string;
    className?: string;
    style?: React.CSSProperties;
    linkName: string;
}

const Enlace: React.FC<Props> = (props) => {
    return(
        <Link to={props.url} role={props.role} className={props.className} style={props.style}>{props.linkName}</Link>
    )
}

export default Enlace;