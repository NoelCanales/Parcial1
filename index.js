
var hola = require('./hola');

function ResolverSueldo(l,b) {
    console.log("Resolviendo el empleado con numero de horas = "
                + l + " y el precio por horas = " + b );
    hola(l,b, (err,parceInt) => {
        if (err) {
            console.log("ERROR: ", err.message);
        }
        else {
            console.log("El numero de horas por el empleado es = "
                + l + " con el precio por hora = "+ b + " Obteniendo  sueldo total = "   + parceInt.TotalSueldo());

        
        }


    });
    console.log("esta declaración despues de la llamada a TotalSueldo()");
};


ResolverSueldo(2,8);
ResolverSueldo(4,12);
ResolverSueldo(3,5);
