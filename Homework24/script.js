const colorVictorine = function() {
    let i = prompt('Type one of the colors you see'),
        d = 0;
    switch(i){
        case "red":
            alert('Correct');
        break;
            
        case "yellow":
            alert('Correct');
        break;
        
        case "violet":
            alert('Correct');
        break;
            
        case "white":
            alert('Correct');
        break;
            
        case "green":
            alert('Correct');
        break;
            
        default:
            alert('Incorrect');
        break;
    }
    i = prompt('Type another color you see');
    
    if (i === 'red'){
        alert('Correct');
    } else if (i === 'yellow'){
        alert('Correct')
    } else if (i === 'violet'){
        alert('Correct')
    } else if (i === 'white'){
        alert('Correct')
    } else if (i === 'green'){
        alert('Correct')
    } else{
        alert('Incorrect');
    }
}
setTimeout(colorVictorine, 500);