import './randomChar.scss';
import React,{useState, useEffect} from 'react';

import mjolnir from '../../resources/img/mjolnir.png';
import MarvelServise from '../../services/MarvelService';

const RandomChar = () => {
    const [char, setChar] = useState({
        name: null,
        description: null,
        thumbnail: null,
        homepage: null,
        wiki: null
    })
    const marvelService = new MarvelServise();
    
    const updateChar = (id) => {
        id = Math.floor(Math.random() * (1011400 - 1011000) + 1011000 );
        marvelService.getChar(id).then(res => {
                setChar({
                    name: res.data.results[0].name,
                    description: res.data.results[0].description,
                    thumbnail: res.data.results[0].thumbnail.path + '.' + res.data.results[0].thumbnail.extension,
                    homepage: res.data.results[0].urls[0].url,
                    wiki: res.data.results[0].urls[1].url
                });
        console.log(res)})
    }
   
    const {name, description, thumbnail, homepage, wiki } = char;
    
    useEffect(() => {
        updateChar();
    }, []);
    
    return (
        
        <div className="randomchar">
            <div className="randomchar__block">
                <img src={thumbnail} alt="Random character" className="randomchar__img"/>
                <div className="randomchar__info">
                    <p className="randomchar__name">{name}</p>
                    <p className="randomchar__descr">
                        {description}
                    </p>
                    <div className="randomchar__btns">
                        <a href={homepage} rel="noreferrer" target="_blank" className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={wiki} rel="noreferrer" target="_blank" className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="randomchar__static">
                <p className="randomchar__title">
                    Random character for today!<br/>
                    Do you want to get to know him better?
                </p>
                <p className="randomchar__title">
                    Or choose another one
                </p>
                <button className="button button__main">
                    <div className="inner" onClick={updateChar}>try it</div>
                </button>
                <img src={mjolnir} alt="mjolnir" className="randomchar__decoration"/>
            </div>
        </div>
    )
}

export default RandomChar;