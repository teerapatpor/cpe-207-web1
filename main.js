console.log('Hello World');

var str = '';
for(var i=0; i<10; i++){
    console.log(i+1);
    str += (i+1) + '<br>';
}

document.querySelector("#outputConsole").innerHTML = str;