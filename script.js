// Definir los países por continente
const paisesPorContinente = {
    america: ["Puebla", "Guadalajara", "Cancun"],
    europa: ["Roma", "Milán", "Nápoles"],
    asia: ["Shanghái", "Pekín", "Shenzhen"],
    africa: ["Buenos Aires", "Córdoba", "Rosario"],
    oceania: ["Maracay", "Distrito Federal", "Zulia"]
};

// Función para actualizar la lista de países según el continente seleccionado
document.getElementById("continente").addEventListener("change", function() {
    const continenteSeleccionado = this.value;
    const paisSelect = document.getElementById("pais");

    // Limpiar las opciones anteriores
    paisSelect.innerHTML = '<option value="">Seleccione un país</option>';

    if (continenteSeleccionado) {
        // Obtener los países correspondientes al continente
        const paises = paisesPorContinente[continenteSeleccionado];

        // Agregar las opciones de países
        paises.forEach(pais => {
            const option = document.createElement("option");
            option.value = pais.toLowerCase();
            option.textContent = pais;
            paisSelect.appendChild(option);
        });
    } else {
        // Si no se selecciona continente, mostrar mensaje en la lista de países
        paisSelect.innerHTML = '<option value="">Seleccione primero un continente</option>';
    }
});
