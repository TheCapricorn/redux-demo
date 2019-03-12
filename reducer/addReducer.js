export default function addReducer(state={count:0},{type,count,...param}){
    return {...state,count}
}