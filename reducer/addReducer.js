export default function addReducer(state={count:0},{type,count,...param}){
    if(count===undefined){
        return {...state}
    }
    return {...state,count}
}