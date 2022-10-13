import { Component } from "@angular/core";


@Component({
    selector: 'app-heroe',
    templateUrl: './heroe.component.html'
})

export class HeroeComponent{
    nombre: string = 'ironman';
    edad: number = 32

    get nombreCapitalizado(): string{
        return this.nombre.toUpperCase()
    }

    obtenerNombre(): string{
        return `Mi nombre es: ${this.nombre} Tengo ${this.edad} anios `
    }

    cambiarNombre(): string{
       return this.nombre = 'Spiderman';
    }

    cambiarEdad(): number{
        return this.edad = 24
    }
}