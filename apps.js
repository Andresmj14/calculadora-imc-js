"use strict ";

const historial = [];

    function calcularIMC() {
      const nombre = document.getElementById('nombre').value.trim();
      const edad = parseInt(document.getElementById('edad').value);
      const peso = parseFloat(document.getElementById('peso').value);
      const altura = parseFloat(document.getElementById('altura').value);
      const resultado = document.getElementById('resultado');
      const imagen = document.getElementById('imagenCategoria');
      const listaHistorial = document.getElementById('listaHistorial');

      if (!nombre || !edad || !peso || !altura || edad <= 0 || altura <= 0) {
        resultado.textContent = 'Por favor, completa todos los campos con valores válidos.';
        imagen.style.display = 'none';
        return;
      }

      const imc = peso / (altura * altura);
      let categoria = '';
      let imagenUrl = '';

      if (imc < 18.5) {
        categoria = 'Bajo peso';
        imagenUrl = "./storage/bajo-peso.jpg";
      } else if (imc < 24.9) {
        categoria = 'Peso normal';
        imagenUrl = "./storage/peso-normal.jpg";
      } else if (imc < 29.9) {
        categoria = 'Sobrepeso';
        imagenUrl = "./storage/sobre-peso.jpg";
      } else {
        categoria = 'Obesidad';
        imagenUrl = "./storage/obesidad.jpg";
      }

      resultado.innerHTML = `
        <strong>Nombre:</strong> ${nombre} <br>
        <strong>Edad:</strong> ${edad} años <br>
        <strong>IMC:</strong> ${imc.toFixed(2)} (${categoria})
      `;

      imagen.src = imagenUrl;
      imagen.alt = categoria;
      imagen.style.display = 'block';

      // Guardar en historial
      const entrada = {
        nombre,
        edad,
        imc: imc.toFixed(2),
        categoria
      };
      historial.push(entrada);
      mostrarHistorial();
    }

    function mostrarHistorial() {
      const lista = document.getElementById('listaHistorial');
      lista.innerHTML = '';

      historial.forEach((entry, index) => {
        const div = document.createElement('div');
        div.classList.add('entry');
        div.innerHTML = `
          <strong>${index + 1}. ${entry.nombre}</strong> (Edad: ${entry.edad})<br>
          IMC: ${entry.imc} - <em>${entry.categoria}</em>
        `;
        lista.appendChild(div);
      });
    }