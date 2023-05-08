/* Json*/
fetch('sucursales.json')
.then(response => response.json())
.then(data => {
  const sucursalesDiv = document.getElementById('sucursales');
  data.sucursales.forEach(sucursal => {
    const sucursalDiv = document.createElement('div');
    sucursalDiv.innerHTML = `
      <h2>${sucursal.nombre}</h2>
      <p><strong>Dirección:</strong> ${sucursal.direccion}</p>
      <p><strong>Teléfono:</strong> ${sucursal.telefono}</p>
      <p><strong>Horario:</strong> ${sucursal.horario}</p>
    `;
    sucursalesDiv.appendChild(sucursalDiv);
  });
});