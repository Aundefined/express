var Incidencia = require('../models/modelo.js');
var sql = require('mssql');
var incidenciaController = {};

incidenciaController.funcionPost = function (req, res) {

    var inci = new Incidencia.Incidencia(NEWID(), 'B536FD2E-97A8-4DAE-B76A-023EA2F081EB', '971BCC9C-E71E-405F-AD3F-036691CA9AA5', 1200);

    var consulta = "INSERT BAS_Incidencias (Id,ContratoId,BasConceptoId,PrecioUnitario ) VALUES (" + inci.Id + ", " + inci.ContratoId + "," + inci.BasConceptoId + "," + inci.PrecioUnitario + ");"
    var request = new sql.Request();

    request.query(consulta, function (err, result) {

        if (err) {

            console.log("Ups... " + JSON.stringify(err));

        }
        //handle err

        console.log("insert ok");
        // This example uses callbacks strategy for getting results.
    })




}

incidenciaController.funcionGet = function (req, res) {

    var entidad = new Incidencia.Entidad("", "");
    var entidades = [];

    var consulta = "SELECT Nombre,Apellidos FROM Entidad WHERE Nombre LIKE '%Fernand%'";
    var request = new sql.Request();

    request.query(consulta, function (err, result) {

        if (err) {

            console.log("Ups... " + JSON.stringify(err));

        }
        //handle err

        // inci.Nombre = result.recordset[0].Nombre;
        // inci.Apellidos = result.recordset[0].Apellidos;

        entidades = result.recordset;

        res.render('../views/index', { entidades: entidades });
        // This example uses callbacks strategy for getting results.
    })




}

module.exports = incidenciaController;
