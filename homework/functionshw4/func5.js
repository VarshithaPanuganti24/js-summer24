function toTilteCase(str){
    return str.split(' ').map(word => 
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
    )
    .join(' ');
} 
const sentence = "convert to tile case as starting charc to upper and remaining to lower";
console.log(toTilteCase(sentence));

//split(' ') used to split the string to substringsand put innto anarray and return the array
// without join
[
    'Convert',   'To',
    'Tile',      'Case',
    'As',        'Starting',
    'Charc',     'To',
    'Upper',     'And',
    'Remaining', 'To',
    'Lower'
  ]

  //with join
//Convert To Tile Case As Starting Charc To Upper And Remaining To Lower