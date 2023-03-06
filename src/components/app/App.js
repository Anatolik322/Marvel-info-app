import React, {useState} from "react";
import AppHeader from "../appHeader/AppHeader";
import RandomChar from "../randomChar/RandomChar";
import CharList from "../charList/CharList";
import CharInfo from "../charInfo/CharInfo";
import thor from '../../resources/img/thor.jpeg';
import decoration from '../../resources/img/vision.png';
import MarvelServise from "../../services/MarvelService";

const App = () => {
    const marvelServise = new MarvelServise();
    const [charInfo, setCharInfo] = useState({
        name: 'Thor',
        description: null,
        thumbnail: thor ,
        homepage: null,
        wiki: null,
        comics: [] 
    })
    const showCharInfo = (id) => {
        let index;
        marvelServise.getAllChar().then(res => {
            res.data.results.forEach((element, i) => {
                if(element.id == id){
                    index = i;
                }
            });
            console.log( res.data.results[index].comics.items.map(e => e.name))
           setCharInfo({
            name: res.data.results[index].name,
            description: res.data.results[index].description,
            thumbnail: res.data.results[index].thumbnail.path + '.' + res.data.results[0].thumbnail.extension,
            homepage: res.data.results[index].urls[0].url,
            wiki: res.data.results[index].urls[1].url,
            comics: res.data.results[index].comics.items.map(e => e.name)
           });
        });
    };

    return (
        <div className="app">
            <AppHeader/>
            <main>
                <RandomChar/>
                <div className="char__content">
                    <CharList showCharInfo = {showCharInfo}/>
                    <CharInfo
                    charInfo = {charInfo}
                     />
                </div>
                <img className="bg-decoration" src={decoration} alt="vision"/>
            </main>
        </div>
    )
}

export default App;