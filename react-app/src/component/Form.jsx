function Form(){
    function handlesubmit(e) {

        e.preventDefault();
        console.log("event object",e);
}
    return(
        <form onSubmit={handlesubmit}> 
            <button type="submit">Submit</button>

        </form>
    );
}
export default Form;