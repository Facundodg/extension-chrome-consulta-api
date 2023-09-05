const mensaje = document.querySelector("div");
const boton = document.getElementById("cambiar-mensaje");

boton.addEventListener("click", async () => {
  try {

    const data = await consulta();

    mensaje.textContent = JSON.stringify(data, null, 2);

  } catch (error) {

    console.error("Error al obtener y mostrar el JSON:", error);
  }

});


  async function consulta() {
  
    let headersList = {
      "Accept": "*/*",
      "User-Agent": "Thunder Client (https://www.thunderclient.com)"
    }
  
    let response = await fetch("https://jsonplaceholder.typicode.com/todos/1", {
      method: "GET",
      headers: headersList
    });
  
    let data = await response.json();

    console.log(data);
  
    return (data)
  
  }



