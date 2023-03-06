import './charList.scss';
import React, {useState,useEffect} from 'react';
import MarvelServise from '../../services/MarvelService';


const CharList = ({showCharInfo}) => {

    const [charList, setCharList] = useState([]);
    const [listQ, setListQ] = useState(9);
    const marvelService = new MarvelServise();
    let btn =
    <button className="button button__main button__long" onClick={() => {setListQ(20)}}>
        <div className="inner">load more</div>
    </button>;

    if(listQ > 9){
        btn =
        <button className="button button__main button__long" onClick={() => {setListQ(9)}}>
            <div className="inner">show less</div>
        </button>
    }
    let classList = 'char__item'
    useEffect(() => {
        marvelService.getAllChar(listQ).then(res => {
            setCharList(res.data.results.map(item => {
                return(
                <li key={item.id} className={classList} >
                    <img src={`${item.thumbnail.path}.${item.thumbnail.extension}`} alt={item.name} onClick={() => {showCharInfo(item.id)}} onMouseUp = {() => { classList += '_selected'}}/>
                    <div className="char__name">{item.name}</div>
                </li>
                );
            }))
        });
    })
    
    return (
        <div className="char__list">
            <ul className="char__grid">
                {charList}
            </ul>
            {btn}
        </div>
    )
}

export default CharList;