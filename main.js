

/*function imprimir () {
    for(var i = 0; i < miArray.length ; i++){
        console.log(miArray[i]);
    }

}

imprimir();


function sumarIva() {
    var arrayIva = new Array;
    for(var i = 0; i < miArray.length ; i++){
        arrayIva[i] = miArray[i]*1.21;
    }
    console.log(arrayIva);

}

sumarIva();


function numerosPar(){
    var arrayPares =  new Array;
    for(var i = 0; i < miArray.length; i++){
        if(miArray[i] % 2 == 0){
            arrayPares.push(miArray[i]);
            console.log(arrayPares);
        }
    }
    console.log(arrayPares);
}

numerosPar();

var baseInicial = 200;

function arrayReduce(){
    var rta;
    rta = parseInt(baseInicial) ;
    console.log(rta);
    console.log(miArray);

    for(var i =0; i< miArray.length ; i++){
        rta += parseInt(miArray[i]) ;
    }
    console.log(rta);
}
arrayReduce();*/

var miArray = [10,20,30,40,50];

miArray.forEach(element => (console.log(element)));

var mapedArray = miArray.map((num)=> {
    return num * 2;
})

console.log(mapedArray);


var filteredArray = miArray.filter((num) => num > 20);
console.log(filteredArray);

var reduced = (acum,value) => (acum +value);
var reducedValue = miArray.reduce(reduced,22);
console.log(reducedValue);
