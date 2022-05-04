import Players from "./Data"
import React, { useState } from 'react';
import {GrCaretNext, GrCaretPrevious, GrDribbble} from 'react-icons/gr'


const Review = () => {
    const [index, setIndex] = useState(0);
    const {id, name, position, image, text} = Players[index];
    const [readAll, setReadAll] = useState(false);

    const readMore = () => {
        setReadAll(!readAll)
    }

    const checkIndex = (index) => {
        if(index < 0) {
           return Players.length -1
        }
        if (index > Players.length -1) {
            return 0
        }
        return index
    }

    const nextplayer = () => {
        setIndex((previndex) => {
            let index = previndex +1;
            return checkIndex(index)
        })
    }

    const prevplayer = () => {
        setIndex((previndex) => {
            let index = previndex -1;
            return checkIndex(index)
        })
    }

    return (
<article className="review">
    <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <span className="quote-icon">
            <GrDribbble />
        </span>
    </div>
    <h4 className="author">{name}</h4>
    <p className="job">{position}</p>
    <p className="info">{readAll? text : `${text.substring(0,210)}...`}
    <button className="info-btn" onClick={readMore}>{readAll? "show less" : "read more"}</button>
    </p>
    <button className="prev-btn" onClick={prevplayer}>
        <GrCaretPrevious />
    </button>
    <button className="next-btn" onClick={nextplayer}>
        <GrCaretNext />
    </button>
</article>

      );
}
 
export default Review;
