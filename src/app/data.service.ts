import { HttpClient } from "@angular/common/http";
import { Empleado } from "./empleado.model";
import { Injectable } from "@angular/core";

@Injectable()
export class DataServices{

    constructor(private httpClient:HttpClient){}

    cargarEmpleados(){
        return this.httpClient.get('https://empleados-d94a7-default-rtdb.firebaseio.com/datos.json');
    }

    guardarEmpleados(empleados:Empleado[]){

        this.httpClient.put('https://empleados-d94a7-default-rtdb.firebaseio.com/datos.json', empleados).subscribe(
            response => console.log("Se han guardado los empleados: " + response),
            error => console.log("Error: " + error),
        );

    }

    actualizarEmpleado(indice:number,empleado:Empleado){

        let url = 'https://empleados-d94a7-default-rtdb.firebaseio.com/datos/' + indice + '.json';

        this.httpClient.put(url, empleado).subscribe(
            response => console.log("Se ha modificado correctamente el empleado: " + response),
            error => console.log("Error: " + error)
        );

    }

    eliminarEmpleado(indice:number){

        let url = 'https://empleados-d94a7-default-rtdb.firebaseio.com/datos/' + indice + '.json';

        this.httpClient.delete(url).subscribe(
            response => console.log("Se ha eliminado correctamente el empleado: " + response),
            error => console.log("Error: " + error)
        );

    }

}