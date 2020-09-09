


module.exports =(Persona,Hora,Precio,Material,callback)=>{
	Total=0;
	if (Hora <=0 ||  Precio<=0){
			callback(new Error("Ingrese valores mayores o iguales a 1"),null
				);
	}
	else {
			callback(null, {
				Total:()=> (Total +=((Hora*Persona)*Precio)),
				Sumatoria:()=> (Material+Total),
				Holgura:()=> (Total*0.08), 
			});
	}
}

