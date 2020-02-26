var SystemController = {};
const si = require('systeminformation');
const os = require('os');
var sistema = require('../models/modelo.js');



SystemController.GetInfo = function (req, res) {

    var sis = new sistema.Sistema(os.hostname(), os.userInfo().username, os.userInfo().homedir);

    async function systemData() {

        var data = {}

        data.sistema = await si.system();
        data.cpu = await si.cpu();
        data.ram = await si.mem();

        return data;

    }

    systemData().then(x => {

        var memTotal = (x.ram.total / 1000000000);
        var memUso = (x.ram.used / 1000000000);
        var memLibre = (x.ram.free / 1000000000);

        sis.MarcaEquipo = x.sistema.manufacturer;
        sis.ModeloEquipo = x.sistema.model;
        sis.MarcaCPU = x.cpu.manufacturer;
        sis.ModeloCPU = x.cpu.brand;
        sis.SpeedCPU = x.cpu.speed;
        sis.MemoriaTotal = memTotal.toFixed(2);
        sis.MemoriaEnUso = memUso.toFixed(2);
        sis.MemoriaLibre = memLibre.toFixed(2);

        res.render('../views/systemView', { sistema: sis });

    })

}

module.exports = SystemController;