// function (someBooleanVar) 

// return 5 if its true 
// return "its false" if its false

function test(someBookeanVar :boolean) :(number | string){

    if(someBookeanVar){
        return 5;
    }
    else{
        return "its false";
    }

}
test(false)