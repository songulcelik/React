import React from "react";
import data from "./image-data.json";
import "./style.scss"
const Gallery = () => {
    return (
        <div>
            {data.map((item) => (
                <div key={item.id}>
                    <a href={`img/${item.image}`} target="_blank" rel="noreferrer">
                        <img src={`img/${item.image}`} alt="nature"/>
                    </a>
                </div>
            ))}
        </div>
    );
};
export default Gallery;
