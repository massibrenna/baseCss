
console.log('start');



window.onload = function(){ 
    // your code 
    // or use an anonymous function:
    document.getElementById("myInput").value = Number(0);

    let counter= Number(0);
    console.log(counter);
    document.getElementById('myButtonI').onclick = function() {
        // do magic
        
        counter +=1;
        document.getElementById("myInput").value = counter ;
        //console.log(document.getElementById("myLabel").innerHTML);
    }
    document.getElementById('myButtonD').onclick = function() {
        // do magic
        
        counter -=1;
        document.getElementById("myInput").value = counter ;
        //console.log(document.getElementById("myLabel").innerHTML);
    }
    document.getElementById('myButtonR').onclick = function() {
        // do magic
        
        counter =0;
        document.getElementById("myInput").value = counter ;
        //console.log(document.getElementById("myLabel").innerHTML);
    }
    document.getElementById('myButtonT').onclick = screateTable;


};
