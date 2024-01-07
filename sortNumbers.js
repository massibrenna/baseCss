function screateTable() {

    console.log('click')

    let numbers = [];
    for (let index = 0; index < 100; index++) {
   
        numbers.push(index);
    }

    //numbers.sort();
    let table ="<tr>", perrow=20, cells=0;
    const isPowerOfTen = n => Math.log10(n) % 1 === 0;
    const bitWise = n => !!n;

    numbers.forEach((value, index) => {
        
        

      /*  if ( isPowerOfTen(value) ){
           
        table+= `<td class="red">${value}</td>`;
        }
        else{
            */
        let temp = bitWise(value);
        table+= `<td>${value} ${temp}</td>`;
        
        cells++;
        if (cells%perrow==0 && cells!=numbers.length) { table += "</tr><tr>"; }
    });
    table += "</tr>";

    document.getElementById("myTable").innerHTML = table;
    }

   