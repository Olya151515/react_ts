export const retriveLocalStorage = <T,>(key:string) =>{

    const pairJSON = localStorage.getItem(key) || '';
    if(!pairJSON){
        return {} as T;
    }
    const TokenPair = JSON.parse(pairJSON);
    return TokenPair as T;
}

