// export default Database = () => {
//     return {

//     }
// }

export function saveData (data) {
    localStorage.setItem("datas", JSON.stringify(data));
} 

export function getData(){
    const data = localStorage.getItem("datas")
    return data ? JSON.parse(data) : [];
}