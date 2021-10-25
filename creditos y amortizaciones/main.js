function apiadate(){
    document.getElementById("tab").innerHTML="";
    let importe = parseInt(document.getElementById("Importe").value);
    let plazo = parseInt(document.getElementById("Plazo").value);
    let interes = parseInt(document.getElementById("Interes").value);
    let f1 = new Date(document.getElementById("bdate").value);
    var fecha1;
    let fecha2;
    let por = 0;
    var días;
    let subtotal = 0;
    let comision = 0;
    let amortizacion = 0;
    let intereses = 0;
    let IVA = 0;
    let flujo = 0;
    let pago = 0;
    var vacio = "";

    for(i=0;i<=plazo;i++){
        if(i == 0){
            let día = parseInt(f1.getDate()) + 1;
            let mes = parseInt(f1.getMonth()) + 1;
            let año = parseInt(f1.getFullYear());
            por = (interes/100)/12;
            pago = ((por*((1+por)**plazo))*importe)/(((1+por)**plazo)-1);
            pago = +(Math.round(pago + "e+2")+"e-2");
            alert("pago es: " + pago);
            if(mes == 0){
                mes == 12
            }
            fecha1 = día + "-" + mes + "-" + año;
            dispocision = importe - (2*importe);
            dispocision = +(Math.round(dispocision + "e+2")+"e-2");
            subtotal = importe;
            subtotal = +(Math.round(subtotal + "e+2")+"e-2");
            comision = importe * 0.01;
            comision = +(Math.round(comision + "e+2")+"e-2");
            IVA = (comision + intereses) * 0.16;
            IVA = +(Math.round(IVA + "e+2")+"e-2");
            flujo = dispocision + comision + amortizacion + intereses + IVA;
            flujo = +(Math.round(flujo + "e+2")+"e-2");

            document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+ 
            `<tr>
                <td> ${i}</td>
                <td> ${fecha1}</td>
                <td> ${vacio}</td>
                <td> ${vacio}</td>
                <td> ${dispocision}</td>
                <td> ${subtotal}</td>
                <td> ${comision}</td>
                <td> ${vacio}</td>
                <td> ${vacio}</td>
                <td> ${IVA}</td>
                <td> ${flujo}</td>
            </tr>`;
        }
        if(i == 1){
            let día = parseInt(f1.getDate()) + 1;
            let mes = parseInt(f1.getMonth()) + 1;
            let año = parseInt(f1.getFullYear());
            fecha1 = día + "-" + mes + "-" + año;
            fecha2 = día + "-" + (mes+1) + "-" + año;
            var fec1 = moment(año + "-" + mes + "-" + día);
            var fec2 = moment(año + "-" + (mes+1) + "-" + día);
            días = 0;
            días = (fec2.diff(fec1, 'days'));
            if(mes == 0){
                fecha1 = día + "-" + 12 + "-" + (año -1);
                fecha2 = día + "-" + (1) + "-" + año;
                días = 31;
            }
            f1 = new Date(año,mes + 1,día);

            //RESET
            intereses = 0;
            amortizacion = 0;
            IVA = 0;
            flujo = 0;

            //CALCULOS
            intereses = ((subtotal*(interes/100))/360)*días;
            intereses = +(Math.round(intereses + "e+2")+"e-2");
            amortizacion = pago - intereses;
            amortizacion = +(Math.round(amortizacion + "e+2")+"e-2");
            subtotal = subtotal - amortizacion;
            subtotal = +(Math.round(subtotal + "e+2")+"e-2");
            IVA = intereses * 0.16;
            IVA = +(Math.round(IVA + "e+2")+"e-2");
            flujo = pago + IVA;
            flujo = +(Math.round(flujo + "e+2")+"e-2");

            document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+ 
            `<tr>
                <td> ${i}</td>
                <td> ${fecha1}</td>
                <td> ${fecha2}</td>
                <td> ${días}</td>
                <td> ${vacio}</td>
                <td> ${subtotal}</td>
                <td> ${vacio}</td>
                <td> ${amortizacion}</td>
                <td> ${intereses}</td>
                <td> ${IVA}</td>
                <td> ${flujo}</td>
            </tr>`;
        }
        if(i>1){
            let día = parseInt(f1.getDate());
            let mes = parseInt(f1.getMonth());
            let año = parseInt(f1.getFullYear());
            fecha1 = día + "-" + mes + "-" + año;
            fecha2 = día + "-" + (mes+1) + "-" + año;
            var fec1 = moment(año + "-" + mes + "-" + día);
            var fec2 = moment(año + "-" + (mes+1) + "-" + día);
            días = 0;
            días = (fec2.diff(fec1, 'days'));
            if(mes == 0){
                fecha1 = día + "-" + 12 + "-" + (año -1);
                fecha2 = día + "-" + (1) + "-" + año;
                días = 31;
            }
            f1 = new Date(año,mes + 1,día);
            
            //RESET
            intereses = 0;
            amortizacion = 0;
            IVA = 0;
            flujo = 0;
            
            //CALCULOS

            intereses = ((subtotal*(interes/100))/360)*días;
            intereses = +(Math.round(intereses + "e+2")+"e-2");
            amortizacion = pago - intereses;
            amortizacion = +(Math.round(amortizacion + "e+2")+"e-2");
            subtotal = subtotal - amortizacion;
            subtotal = +(Math.round(subtotal + "e+2")+"e-2");
            IVA = intereses * 0.16;
            IVA = +(Math.round(IVA + "e+2")+"e-2");
            flujo = pago + IVA;
            flujo = +(Math.round(flujo + "e+2")+"e-2");

            document.getElementById("tab").innerHTML=document.getElementById("tab").innerHTML+ 
            `<tr>
                <td> ${i}</td>
                <td> ${fecha1}</td>
                <td> ${fecha2}</td>
                <td> ${días}</td>
                <td> ${vacio}</td>
                <td> ${subtotal}</td>
                <td> ${vacio}</td>
                <td> ${amortizacion}</td>
                <td> ${intereses}</td>
                <td> ${IVA}</td>
                <td> ${flujo}</td>
            </tr>`;
        }
    }
}