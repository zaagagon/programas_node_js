//repasemos un poco factorial
//4!: 4*3*2*1 = ?
//usemos una funcion para este ejemplo
function factorial(n){
    var a =1;

    for( i=1;i<=n;i++){
       console.log( a +'*'+ i );
       //imprimir variable
       var  a=a*i;       
       console.log(a);
    //return a;
    }
}

console.log('El resultado de la operacion es : '+ factorial(4));
