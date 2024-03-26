$(function () {

    class Propietario {
        constructor(nombre, direccion, telefono) {
            this._nombre = nombre;
            this._direccion = direccion;
            this._telefono = telefono;
        }
set nombre(nuevoNombre) {
    this._nombre = nuevoNombre
}
get nombre() {
    return this._nombre
}
set direccion(nuevaDireccion) {
    this._direccion = nuevaDireccion
}
get direccion() {
    return this._direccion
}
set telefono(nuevoTelefono) {
    this._telefono = nuevoTelefono
}
get telefono() {
    return this._telefono
}
        datosPropietario() {
            return `El nombre del propietario es: ${this._nombre}. El domicilio es: ${this._direccion} y el número de contacto es: 
            ${this._telefono}`;
        }
    }

    class Animal extends Propietario {
        constructor(nombre, direccion, telefono, tipo) {
            super(nombre, direccion, telefono);
            this._tipo = tipo;
        }
        set tipo(nuevoTipo) {
            this._tipo = nuevoTipo
        }
        get tipo() {
            return this._tipo
        }
        datosAnimal() {
            return `El tipo de animal es un: ${this.tipo},`;
        }
    }

    class Mascota extends Animal {
        constructor(nombre, direccion, telefono, tipo, nombreMascota, enfermedad) {
            super(nombre, direccion, telefono, tipo);
            this.nombreMascota = nombreMascota;
            this.enfermedad = enfermedad;
        }
        set nombreMascota(nuevoNombreMascota) {
            this._nombreMascota = nuevoNombreMascota
        }
        get nombreMascota() {
            return this._nombreMascota
        }
        set enfermedad(nuevaEnfermedad) {
            this._enfermedad = nuevaEnfermedad
        }
        get enfermedad() {
            return this._enfermedad
        }
        datosMascota() {
            return `mientras que el nombre de la mascota es: ${this.nombreMascota} y la enfermedad es: ${this.enfermedad}`
        }
    }

    const formulario = document.getElementById('formularioMascotas');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Evita que el formulario se envíe
        // Captura los valores del formulario
        const propietario = document.getElementById('propietario').value;
        const telefono = document.getElementById('telefono').value;
        const direccion = document.getElementById('direccion').value;
        const nombreMascota = document.getElementById('nombreMascota').value;
        const tipo = document.getElementById('tipo').value;
        const enfermedad = document.getElementById('enfermedad').value;

        // Instancia de la clase Mascota dependiendo del tipo seleccionado
        let mascota = new Mascota (propietario, direccion, telefono, tipo, nombreMascota, enfermedad)

        // Mostrar los datos 
        const resultado = document.getElementById('resultado').querySelector('ul');
        const nuevaMascota = document.createElement('li');
        nuevaMascota.textContent = `${mascota.datosPropietario()}`;
        const elResto = document.createElement('li');
        elResto.textContent = `${mascota.datosAnimal()} ${mascota.datosMascota()}`;

        resultado.appendChild(nuevaMascota); //acá, en resultado, mete esta nueva información
        resultado.appendChild(elResto);

        // Limpiar el formulario
        formulario.reset();
    });
})