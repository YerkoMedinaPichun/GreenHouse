export async function valorUf() {
  let fecha = new Date().toLocaleDateString();
  fetch("https://mindicador.cl/api")
    .then(function (response) {
      return response.json();
    })
    .then(function (dailyIndicators) {
      document.getElementById(
        "uf"
      ).textContent = `UF hoy ${fecha} $${dailyIndicators.uf.valor}`;
    })
    .catch(function (error) {
      console.log("Requestfailed", error);
    });
}
//dailyIndicators.uf.fecha.slice(0, 10)
