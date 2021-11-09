import React, { MouseEventHandler } from 'react';

interface Props {
    type: 'button' | 'submit' | 'reset';
    className?: string;
    btnName: string;
    style?: React.CSSProperties;
    onClick?: MouseEventHandler<HTMLButtonElement>;
}

const Boton: React.FC<Props> = (props) => {
    return (
        <button onClick={props.onClick} type={props.type} className={props.className} style={props.style}>{props.btnName}</button>
    );
}

export default Boton;