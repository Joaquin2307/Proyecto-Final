import React from "react";
import "../../styles/HomePage.css"

const NovedadItem = props => {
    const {title, subtitle,imagen,body} = props;
    return(
        <div className="nov" >
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <img src={imagen}/>
            <div dangerouslySetInnerHTML={{  __html: body }}/>
            <hr />
        </div>
    );
}

export default NovedadItem;