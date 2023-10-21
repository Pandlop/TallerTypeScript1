import { series } from './data.js';
var seriesTable = document.getElementById("series");
mostrarDatosSeries(series);
function mostrarDatosSeries(dataSeries) {
    var seriesTbody = document.createElement("tbody");
    for (var _i = 0, dataSeries_1 = dataSeries; _i < dataSeries_1.length; _i++) {
        var serie = dataSeries_1[_i];
        var trElement = document.createElement("tr");
        trElement.classList.add("table-light");
        trElement.innerHTML = "<td style=\"font-weight:bold;\">".concat(serie.numero, "</td>\n        <td style=\"color:#4099e0;font-weight:500;\">").concat(serie.nombre, "</td>\n        <td>").concat(serie.canal, "</td>\n        <td>").concat(serie.temporadas, "</td>");
        seriesTbody.appendChild(trElement);
    }
    seriesTable.appendChild(seriesTbody);
}
