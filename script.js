var xlsx = require("xlsx");

var wb = xlsx.readFile("051 - FCI - TCC - 11-03-2019.xlsx",{cellDates:true});

var ws = wb.Sheets["TCC lista geral"];

var data = xlsx.utils.sheet_to_json(ws);

console.log(data[268]);
