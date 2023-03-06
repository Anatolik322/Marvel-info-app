

class MarvelServise{
    _apiBase = 'https://gateway.marvel.com:443/v1/public/'
    _apiKey = 'apikey=a53cde68f425e3a43228f605e00883d2'
    
    getResource = async (url) => {
        let res = await fetch(url);

        if(!res.ok){
            throw new Error('cdnt fetch');
        };
        return await res.json();
    }

    getAllChar = (limit = 9) => {
        return this.getResource(`${this._apiBase}characters?limit=${limit}&offset=315&${this._apiKey}`)
    }
    
    getChar = (id) => {
        return this.getResource(`${this._apiBase}characters/${id}?&${this._apiKey}`)
    } 
}

export default MarvelServise;
