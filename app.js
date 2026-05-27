function carregarPagina(html, css, js) {

  // ==========================
  // CARREGA CSS
  // ==========================

  document.getElementById("pagina-css").href = css;


  // ==========================
  // REMOVE JS ANTIGO
  // ==========================

  const scriptAntigo = document.getElementById("pagina-js");

  if (scriptAntigo) {
      scriptAntigo.remove();
  }


  // ==========================
  // CARREGA HTML
  // ==========================

  fetch(html)
      .then(response => response.text())

      .then(data => {

          document.getElementById("conteudo").innerHTML = data;


          // ==========================
          // CARREGA NOVO JS
          // ==========================

          const novoScript = document.createElement("script");

          novoScript.src = js;

          novoScript.id = "pagina-js";

          document.body.appendChild(novoScript);

      })

      .catch(error => {

          document.getElementById("conteudo").innerHTML =
              "<p>Erro ao carregar página.</p>";

          console.error(error);

      });
}