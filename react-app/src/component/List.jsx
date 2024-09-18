function List(props){
    const numbers = [1,2,3,4,5];
    const listitems = numbers.map((number) => <li>{number}</li>);
    console.log(listitems);

    return listitems;
}
export default List;

