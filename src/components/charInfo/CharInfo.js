import './charInfo.scss';



const CharInfo = ({charInfo}) => {
    
    return (
        <div className="char__info">
            <div className="char__basics">
                <img src={charInfo.thumbnail} alt={charInfo.name}/>
                <div>
                    <div className="char__info-name">{charInfo.name}</div>
                    <div className="char__btns">
                        <a href={charInfo.homepage} rel="noreferrer" target="_blank" className="button button__main">
                            <div className="inner">homepage</div>
                        </a>
                        <a href={charInfo.wiki} rel="noreferrer" target="_blank" className="button button__secondary">
                            <div className="inner">Wiki</div>
                        </a>
                    </div>
                </div>
            </div>
            <div className="char__descr">
                {charInfo.description}
            </div>
            <div className="char__comics">Comics:</div>
            <ul className="char__comics-list">
                {
                charInfo.comics.map(elem => {
                    return (
                    <li className="char__comics-item">
                        {elem}
                    </li>
                    )
                })
                }
            </ul>
        </div>
    )
}

export default CharInfo;