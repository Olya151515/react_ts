export const retriveLocalStorage = <T,>(key:string) =>{

    const pairJSON = localStorage.getItem(key) || '';
    console.log(pairJSON);
    if(!pairJSON){
        return {} as T;
    }
    const TokenPair = JSON.parse(pairJSON);
    console.log(TokenPair);
    return TokenPair as T;
}

