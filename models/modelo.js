
exports.Incidencia = class {

    constructor(id, contratoId, basConceptoId, precio) {

        this.Id = id;
        this.ContratoId = contratoId;
        this.BasConceptoId = basConceptoId;
        this.PrecioUnitario = precio;
    }

}

exports.Entidad = class {

    constructor(nombre, apellidos) {

        this.Nombre = nombre;
        this.Apellidos = apellidos;
    }
}

exports.Sistema = class {

    constructor(equipo, usuario, directorio) {

        this.Equipo = equipo;
        this.Usuario = usuario;
        this.Directorio = directorio;
        this.MarcaEquipo = null;
        this.ModeloEquipo = null;
        this.MarcaCPU = null;
        this.ModeloCPU = null;
        this.SpeedCPU = null;
        this.MemoriaTotal = null;
        this.MemoriaLibre = null;
        this.MemoriaEnUso = null;
    }

}