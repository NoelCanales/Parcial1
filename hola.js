module.exports = (x,y,callback) => {
    if (x <= 0 || y <= 0)
        setTimeout(() => 
            callback(new Error("Las dimensiones del rectangulo deben ser mayores que cero: l = "
                + x + ", y b = " + y), 
            null),
            2000);
    else
        setTimeout(() => 
            callback(null, {
            
                TotalSueldo:() => (x*y),
                
            }), 
            2000);
}