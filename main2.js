// Escriba una función  expectque ayude a los desarrolladores a probar su código. Debería tomar cualquier valor  val y devolver un objeto con las dos funciones siguientes.

// toBe(val) acepta otro valor y regresa  true si los dos se valoran  === entre sí. Si no son iguales, debería arrojar un error  "Not Equal".
// notToBe(val) acepta otro valor y regresa  true si los dos se valoran  !== entre sí. Si son iguales debería arrojar un error  "Equal".
function expect(val){
    return{
        toBe: (val2) => {
            if (val !== val2) throw new Error("Not Equal");
            else return true;
        } ,
        notToBe:(val2) =>{
            if(val === val2) throw new Error("Equal");
            else return true;
        } 
    }
};