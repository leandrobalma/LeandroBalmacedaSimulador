let  trago = prompt("que queres tomar?")
const  recibo = "aca tenes tu  bebida" 

while(trago != ""){
   switch (trago.toUpperCase()) {
        case "SEPTIMO REGIMIENTO":
            const edad = prompt("cuantos años tenes capo?")
            if(edad > 17){
              alert(recibo)
              trago = ""
            }else{
            const  menor = prompt("no queres una gaseosa mejor?")
              if(menor.toUpperCase() != "SI"){
                alert("no te puedo vender alcohol sos menor de edad")
                trago = ""
              }else{
                alert(recibo)
                trago = ""
              }
            }
            break
        case "COCA COLA":
            alert(recibo);
            trago = ""
          break
        default:
           alert("ese trago no esta en la carta")
           trago = prompt("que queres tomar?")
          break
   }
  
   
}