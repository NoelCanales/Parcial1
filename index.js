var sueldo=require('./sueldo');
var Material=require('./Material');

const M= Material.suma([6,50]);
function ResolverSueldo(Persona,Hora,Precio,Material) {

    console.log("Numero de empleados: " + Persona)
    
	console.log(
		"Horas de cada empleados: "  + Hora + "\n" +
		"Precio por cada empleado: " + Precio);

    

	sueldo(Persona,Hora,Precio,Material, (err,mm)=>{
		if (err){
			console.log("Error", error.message);
		}
		else{


			console.log("El numero de horas por el empleado es = "
                + Hora + " con el precio por hora = "+ Precio + " Obteniendo  sueldo total = "   + mm.Total());

	
			console.log("y con un total de gastos en materiales de: "+ M);
			console.log("Obteniendo el costo total por una cantidad de: "+ mm.Sumatoria());
			console.log("Obteniendo Una holgura del 8% : " + mm.Holgura());
		}
	});

}



ResolverSueldo(6,8,15,M);
