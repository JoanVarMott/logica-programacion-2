function convertirTemperatura() {
    let celsius = document.getElementById("celsius").value;
    if (isNaN(celsius)) {
      alert("Error: Ingresa un número para la temperatura en grados Celsius.");
      return;
    }else{
        let fahrenheit = (celsius * 9/5) + 32;
        let kelvin = parseFloat(celsius) + 273.15;
        document.getElementById("fahrenheit").innerHTML = "Grados Fahrenheit: " + fahrenheit.toFixed(1);
        document.getElementById("kelvin").innerHTML = "Grados Kelvin: " + kelvin.toFixed(2);
    }
  }