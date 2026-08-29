var escreveJogos;

function mostraJogos(x) {
  // Get the modal
  var modal = document.getElementById("myModal");
  var ordem = document.getElementById("ordem");
  console.log(ordem);
  ordem.innerText = x;

  modal.style.display = "block";
  // Get the button that opens the modal

  //var btn = document.getElementById("myBtn");

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks the button, open the modal
  //btn.onclick = function() {
  //modal.style.display = "block";
  //}

  // When the user clicks on <span> (x), close the modal
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  console.log(escreveJogos);
}

// *********************************************************
// Carrega o Primeiro Número NE01 nos campos JG11, JG21 e JG31
// *********************************************************
function carregaNE01() {
  document.frm.JG11.value = document.frm.NE01.value;
  document.frm.JG21.value = document.frm.NE01.value;
  document.frm.JG31.value = document.frm.NE01.value;
}

// *********************************************************
// Carrega o Primeiro Número NE02 nos campos JG12, JG22 e JG32
// *********************************************************
function carregaNE02() {
  document.frm.JG12.value = document.frm.NE02.value;
  document.frm.JG41.value = document.frm.NE02.value;
  document.frm.JG51.value = document.frm.NE02.value;
}

// *********************************************************
// Carrega o Primeiro Número NE03 nos campos JG13, JG23 e JG33
// *********************************************************
function carregaNE03() {
  document.frm.JG13.value = document.frm.NE03.value;
  document.frm.JG22.value = document.frm.NE03.value;
  document.frm.JG52.value = document.frm.NE03.value;
}

// *********************************************************
// Carrega o Primeiro Número NE04 nos campos JG14, JG34 e JG35
// *********************************************************
function carregaNE04() {
  document.frm.JG14.value = document.frm.NE04.value;
  document.frm.JG32.value = document.frm.NE04.value;
  document.frm.JG42.value = document.frm.NE04.value;
}

// *********************************************************
// Carrega o Primeiro Número NE05 nos campos JG15, JG42 e JG52
// *********************************************************
function carregaNE05() {
  document.frm.JG15.value = document.frm.NE05.value;
  document.frm.JG23.value = document.frm.NE05.value;
  document.frm.JG53.value = document.frm.NE05.value;
}

// *********************************************************
// Carrega o Primeiro Número NE06 nos campos JG16, JG43 e JG53
// *********************************************************
function carregaNE06() {
  document.frm.JG16.value = document.frm.NE06.value;
  document.frm.JG33.value = document.frm.NE06.value;
  document.frm.JG43.value = document.frm.NE06.value;
}

// *********************************************************
// Carrega o Primeiro Número NE06 nos campos JG16, JG43 e JG53
// *********************************************************
function carregaNE07() {
  document.frm.JG17.value = document.frm.NE07.value;
  document.frm.JG24.value = document.frm.NE07.value;
  document.frm.JG44.value = document.frm.NE07.value;
}

// *********************************************************
// Carrega o Primeiro Número NE08 nos campos JG25, JG62 e JG45
// *********************************************************
function carregaNE08() {
  document.frm.JG61.value = document.frm.NE08.value;
  document.frm.JG34.value = document.frm.NE08.value;
  document.frm.JG54.value = document.frm.NE08.value;
}

// *********************************************************
// Carrega o Primeiro Número NE09 nos campos JG26, JG46 e JG63
// *********************************************************
function carregaNE09() {
  document.frm.JG62.value = document.frm.NE09.value;
  document.frm.JG25.value = document.frm.NE09.value;
  document.frm.JG45.value = document.frm.NE09.value;
}

// *********************************************************
// Carrega o Primeiro Número NE10 nos campos JG34, JG54 e JG64
// *********************************************************
function carregaNE10() {
  document.frm.JG63.value = document.frm.NE10.value;
  document.frm.JG35.value = document.frm.NE10.value;
  document.frm.JG55.value = document.frm.NE10.value;
}

// *********************************************************
// Carrega o Primeiro Número NE11 nos campos JG35, JG55 e JG65
// *********************************************************
function carregaNE11() {
  document.frm.JG64.value = document.frm.NE11.value;
  document.frm.JG26.value = document.frm.NE11.value;
  document.frm.JG47.value = document.frm.NE11.value;
}

// *********************************************************
// Carrega o Primeiro Número NE12 nos campos JG36, JG56 e JG66
// *********************************************************
function carregaNE12() {
  document.frm.JG65.value = document.frm.NE12.value;
  document.frm.JG57.value = document.frm.NE12.value;
  document.frm.JG36.value = document.frm.NE12.value;
}

// *********************************************************
// Carrega o Primeiro Número NE12 nos campos JG36, JG56 e JG66
// *********************************************************
function carregaNE13() {
  document.frm.JG66.value = document.frm.NE13.value;
  document.frm.JG46.value = document.frm.NE13.value;
  document.frm.JG37.value = document.frm.NE13.value;
}

// *********************************************************
// Carrega o Primeiro Número NE14 nos campos JG67, JG56 e JG27
// *********************************************************
function carregaNE14() {
  document.frm.JG67.value = document.frm.NE14.value;
  document.frm.JG56.value = document.frm.NE14.value;
  document.frm.JG27.value = document.frm.NE14.value;
}

// *********************************************************
// Carrega os campos de soma de cada cartela
// *********************************************************
function soma() {
  var total01;
  var total02;
  var total03;
  var total04;
  var total05;
  var total06;

  total01 =
    parseFloat(0 + document.frm.JG11.value) +
    parseFloat(0 + document.frm.JG12.value) +
    parseFloat(0 + document.frm.JG13.value) +
    parseFloat(0 + document.frm.JG14.value) +
    parseFloat(0 + document.frm.JG15.value) +
    parseFloat(0 + document.frm.JG16.value) +
    parseFloat(0 + document.frm.JG17.value);

  total02 =
    parseFloat(0 + document.frm.JG21.value) +
    parseFloat(0 + document.frm.JG22.value) +
    parseFloat(0 + document.frm.JG23.value) +
    parseFloat(0 + document.frm.JG24.value) +
    parseFloat(0 + document.frm.JG25.value) +
    parseFloat(0 + document.frm.JG26.value) +
    parseFloat(0 + document.frm.JG27.value);

  total03 =
    parseFloat(0 + document.frm.JG31.value) +
    parseFloat(0 + document.frm.JG32.value) +
    parseFloat(0 + document.frm.JG33.value) +
    parseFloat(0 + document.frm.JG34.value) +
    parseFloat(0 + document.frm.JG35.value) +
    parseFloat(0 + document.frm.JG36.value) +
    parseFloat(0 + document.frm.JG37.value);

  total04 =
    parseFloat(0 + document.frm.JG41.value) +
    parseFloat(0 + document.frm.JG42.value) +
    parseFloat(0 + document.frm.JG43.value) +
    parseFloat(0 + document.frm.JG44.value) +
    parseFloat(0 + document.frm.JG45.value) +
    parseFloat(0 + document.frm.JG46.value) +
    parseFloat(0 + document.frm.JG47.value);

  total05 =
    parseFloat(0 + document.frm.JG51.value) +
    parseFloat(0 + document.frm.JG52.value) +
    parseFloat(0 + document.frm.JG53.value) +
    parseFloat(0 + document.frm.JG54.value) +
    parseFloat(0 + document.frm.JG55.value) +
    parseFloat(0 + document.frm.JG56.value) +
    parseFloat(0 + document.frm.JG57.value);

  total06 =
    parseFloat(0 + document.frm.JG61.value) +
    parseFloat(0 + document.frm.JG62.value) +
    parseFloat(0 + document.frm.JG63.value) +
    parseFloat(0 + document.frm.JG64.value) +
    parseFloat(0 + document.frm.JG65.value) +
    parseFloat(0 + document.frm.JG66.value) +
    parseFloat(0 + document.frm.JG67.value);

  document.frm.SOMA01.value = total01;
  document.frm.SOMA02.value = total02;
  document.frm.SOMA03.value = total03;

  document.frm.SOMA04.value = total04;
  document.frm.SOMA05.value = total05;
  document.frm.SOMA06.value = total06;
}

//
// *********************************************************
// Muda a cor do botão igual ao numero digitado
// *********************************************************
function numero_escolhido(nr, param) {
  if (1 == nr) {
    if (param == 1) {
      document.frm.nr01.style.background = "#ce0a73";
    } else if (param == 2) {
      document.frm.nr01.style.background = "#114427";
    } else {
      document.frm.nr01.style.background = "#175491";
    }
  }
  if (2 == nr) {
    if (param == 1) {
      document.frm.nr02.style.background = "#ce0a73";
    } else if (param == 2) {
      document.frm.nr02.style.background = "#114427";
    } else {
      document.frm.nr02.style.background = "#175491";
    }
  }
  if (3 == nr) {
    if (param == 1) {
      document.frm.nr03.style.background = "#ce0a73";
    } else if (param == 2) {
      document.frm.nr03.style.background = "#114427";
    } else {
      document.frm.nr03.style.background = "#175491";
    }
  }
  if (4 == nr) {
    if (param == 1) {
      document.frm.nr04.style.background = "#ce0a73";
    } else if (param == 2) {
      document.frm.nr04.style.background = "#114427";
    } else {
      document.frm.nr04.style.background = "#175491";
    }
  }
  if (5 == nr) {
    if (param == 1) {
      document.frm.nr05.style.background = "#ce0a73";
    } else if (param == 2) {
      document.frm.nr05.style.background = "#114427";
    } else {
      document.frm.nr05.style.background = "#175491";
    }
  }

  if (6 == nr) {
    if (param == 1) {
      document.frm.nr06.style.background = "#ce0a73";
    } else if (param == 2) {
      document.frm.nr06.style.background = "#114427";
    } else {
      document.frm.nr06.style.background = "#175491";
    }
  }
  if (7 == nr) {
    if (param == 1) {
      document.frm.nr07.style.background = "#ce0a73";
    } else if (param == 2) {
      document.frm.nr07.style.background = "#114427";
    } else {
      document.frm.nr07.style.background = "#175491";
    }
  }
  if (8 == nr) {
    if (param == 1) {
      document.frm.nr08.style.background = "#ce0a73";
    } else if (param == 2) {
      document.frm.nr08.style.background = "#114427";
    } else {
      document.frm.nr08.style.background = "#175491";
    }
  }
  if (9 == nr) {
    if (param == 1) {
      document.frm.nr09.style.background = "#ce0a73";
    } else if (param == 2) {
      document.frm.nr09.style.background = "#114427";
    } else {
      document.frm.nr09.style.background = "#175491";
    }
  }
  if (10 == nr) {
    if (param == 1) {
      document.frm.nr10.style.background = "#ce0a73";
    } else if (param == 2) {
      document.frm.nr10.style.background = "#114427";
    } else {
      document.frm.nr10.style.background = "#175491";
    }
  }

  if (11 == nr) {
    if (param == 1) {
      document.frm.nr11.style.background = "#ce0a73";
    } else if (param == 2) {
      document.frm.nr11.style.background = "#114427";
    } else {
      document.frm.nr11.style.background = "#175491";
    }
  }
  if (12 == nr) {
    if (param == 1) {
      document.frm.nr12.style.background = "#ce0a73";
    } else if (param == 2) {
      document.frm.nr12.style.background = "#114427";
    } else {
      document.frm.nr12.style.background = "#175491";
    }
  }
  if (13 == nr) {
    if (param == 1) {
      document.frm.nr13.style.background = "#ce0a73";
    } else if (param == 2) {
      document.frm.nr13.style.background = "#114427";
    } else {
      document.frm.nr13.style.background = "#175491";
    }
  }
  if (14 == nr) {
    if (param == 1) {
      document.frm.nr14.style.background = "#ce0a73";
    } else if (param == 2) {
      document.frm.nr14.style.background = "#114427";
    } else {
      document.frm.nr14.style.background = "#175491";
    }
  }
  if (15 == nr) {
    if (param == 1) {
      document.frm.nr15.style.background = "#ce0a73";
    } else if (param == 2) {
      document.frm.nr15.style.background = "#114427";
    } else {
      document.frm.nr15.style.background = "#175491";
    }
  }

  if (16 == nr) {
    if (param == 1) {
      document.frm.nr16.style.background = "#ce0a73";
    } else if (param == 2) {
      document.frm.nr16.style.background = "#114427";
    } else {
      document.frm.nr16.style.background = "#175491";
    }
  }
  if (17 == nr) {
    if (param == 1) {
      document.frm.nr17.style.background = "#ce0a73";
    } else if (param == 2) {
      document.frm.nr17.style.background = "#114427";
    } else {
      document.frm.nr17.style.background = "#175491";
    }
  }
  if (18 == nr) {
    if (param == 1) {
      document.frm.nr18.style.background = "#ce0a73";
    } else if (param == 2) {
      document.frm.nr18.style.background = "#114427";
    } else {
      document.frm.nr18.style.background = "#175491";
    }
  }
  if (19 == nr) {
    if (param == 1) {
      document.frm.nr19.style.background = "#ce0a73";
    } else if (param == 2) {
      document.frm.nr19.style.background = "#114427";
    } else {
      document.frm.nr19.style.background = "#175491";
    }
  }
  if (20 == nr) {
    if (param == 1) {
      document.frm.nr20.style.background = "#ce0a73";
    } else if (param == 2) {
      document.frm.nr20.style.background = "#114427";
    } else {
      document.frm.nr20.style.background = "#175491";
    }
  }

  if (21 == nr) {
    if (param == 1) {
      document.frm.nr21.style.background = "#ce0a73";
    } else if (param == 2) {
      document.frm.nr21.style.background = "#114427";
    } else {
      document.frm.nr21.style.background = "#175491";
    }
  }
  if (22 == nr) {
    if (param == 1) {
      document.frm.nr22.style.background = "#ce0a73";
    } else if (param == 2) {
      document.frm.nr22.style.background = "#114427";
    } else {
      document.frm.nr22.style.background = "#175491";
    }
  }
  if (23 == nr) {
    if (param == 1) {
      document.frm.nr23.style.background = "#ce0a73";
    } else if (param == 2) {
      document.frm.nr23.style.background = "#114427";
    } else {
      document.frm.nr23.style.background = "#175491";
    }
  }
  if (24 == nr) {
    if (param == 1) {
      document.frm.nr24.style.background = "#ce0a73";
    } else if (param == 2) {
      document.frm.nr24.style.background = "#114427";
    } else {
      document.frm.nr24.style.background = "#175491";
    }
  }
  if (25 == nr) {
    if (param == 1) {
      document.frm.nr25.style.background = "#ce0a73";
    } else if (param == 2) {
      document.frm.nr25.style.background = "#114427";
    } else {
      document.frm.nr25.style.background = "#175491";
    }
  }
  if (26 == nr) {
    if (param == 1) {
      document.frm.nr26.style.background = "#ce0a73";
    } else if (param == 2) {
      document.frm.nr26.style.background = "#114427";
    } else {
      document.frm.nr26.style.background = "#175491";
    }
  }
  if (27 == nr) {
    if (param == 1) {
      document.frm.nr27.style.background = "#ce0a73";
    } else if (param == 2) {
      document.frm.nr27.style.background = "#114427";
    } else {
      document.frm.nr27.style.background = "#175491";
    }
  }
  if (28 == nr) {
    if (param == 1) {
      document.frm.nr28.style.background = "#ce0a73";
    } else if (param == 2) {
      document.frm.nr28.style.background = "#114427";
    } else {
      document.frm.nr28.style.background = "#175491";
    }
  }
  if (29 == nr) {
    if (param == 1) {
      document.frm.nr29.style.background = "#ce0a73";
    } else if (param == 2) {
      document.frm.nr29.style.background = "#114427";
    } else {
      document.frm.nr29.style.background = "#175491";
    }
  }
  if (30 == nr) {
    if (param == 1) {
      document.frm.nr30.style.background = "#ce0a73";
    } else if (param == 2) {
      document.frm.nr30.style.background = "#114427";
    } else {
      document.frm.nr30.style.background = "#175491";
    }
  }
  if (31 == nr) {
    if (param == 1) {
      document.frm.nr31.style.background = "#ce0a73";
    } else if (param == 2) {
      document.frm.nr31.style.background = "#114427";
    } else {
      document.frm.nr31.style.background = "#175491";
    }
  }
}

// *********************************************************
// Se o texto tiver 1 carater concatena com 0 antes
// *********************************************************
function tamanhoTexto(textoNum, nomeComp) {
  if (textoNum.length == 1) {
    if (nomeComp == "NE01") {
      document.frm.NE01.value = "0" + document.frm.NE01.value;
    }
    if (nomeComp == "NE02") {
      document.frm.NE02.value = "0" + document.frm.NE02.value;
    }
    if (nomeComp == "NE03") {
      document.frm.NE03.value = "0" + document.frm.NE03.value;
    }
    if (nomeComp == "NE04") {
      document.frm.NE04.value = "0" + document.frm.NE04.value;
    }
    if (nomeComp == "NE05") {
      document.frm.NE05.value = "0" + document.frm.NE05.value;
    }
    if (nomeComp == "NE06") {
      document.frm.NE06.value = "0" + document.frm.NE06.value;
    }
    if (nomeComp == "NE07") {
      document.frm.NE07.value = "0" + document.frm.NE07.value;
    }
    if (nomeComp == "NE08") {
      document.frm.NE08.value = "0" + document.frm.NE08.value;
    }
    if (nomeComp == "NE09") {
      document.frm.NE09.value = "0" + document.frm.NE09.value;
    }
    if (nomeComp == "NE10") {
      document.frm.NE10.value = "0" + document.frm.NE10.value;
    }
    if (nomeComp == "NE11") {
      document.frm.NE11.value = "0" + document.frm.NE11.value;
    }
    if (nomeComp == "NE12") {
      document.frm.NE12.value = "0" + document.frm.NE12.value;
    }
    if (nomeComp == "NE13") {
      document.frm.NE13.value = "0" + document.frm.NE13.value;
    }
    if (nomeComp == "NE14") {
      document.frm.NE14.value = "0" + document.frm.NE14.value;
    }
  }
}

// *********************************************************
// Ordena os numeros distribuidos nos jogos
// *********************************************************
function ordenarArray() {
  var jogosArray01 = [
    document.frm.JG11.value,
    document.frm.JG12.value,
    document.frm.JG13.value,
    document.frm.JG14.value,
    document.frm.JG15.value,
    document.frm.JG16.value,
    document.frm.JG17.value,
  ]; // OK
  var jogosArray02 = [
    document.frm.JG21.value,
    document.frm.JG22.value,
    document.frm.JG23.value,
    document.frm.JG24.value,
    document.frm.JG25.value,
    document.frm.JG26.value,
    document.frm.JG27.value,
  ]; // OK
  var jogosArray03 = [
    document.frm.JG31.value,
    document.frm.JG32.value,
    document.frm.JG33.value,
    document.frm.JG34.value,
    document.frm.JG35.value,
    document.frm.JG36.value,
    document.frm.JG37.value,
  ]; // OK
  var jogosArray04 = [
    document.frm.JG41.value,
    document.frm.JG42.value,
    document.frm.JG43.value,
    document.frm.JG44.value,
    document.frm.JG45.value,
    document.frm.JG46.value,
    document.frm.JG47.value,
  ]; // OK
  var jogosArray05 = [
    document.frm.JG51.value,
    document.frm.JG52.value,
    document.frm.JG53.value,
    document.frm.JG54.value,
    document.frm.JG55.value,
    document.frm.JG56.value,
    document.frm.JG57.value,
  ]; // OK
  var jogosArray06 = [
    document.frm.JG61.value,
    document.frm.JG62.value,
    document.frm.JG63.value,
    document.frm.JG64.value,
    document.frm.JG65.value,
    document.frm.JG66.value,
    document.frm.JG67.value,
  ]; // OK

  escreveJogos =
    "\n Jogo 01 : " +
    jogosArray01.sort() +
    "  =  " +
    document.frm.SOMA01.value +
    "\n Jogo 02 : " +
    jogosArray02.sort() +
    "  =  " +
    document.frm.SOMA02.value +
    "\n Jogo 03 : " +
    jogosArray03.sort() +
    "  =  " +
    document.frm.SOMA03.value +
    "\n Jogo 04 : " +
    jogosArray04.sort() +
    "  =  " +
    document.frm.SOMA04.value +
    "\n Jogo 05 : " +
    jogosArray05.sort() +
    "  =  " +
    document.frm.SOMA05.value +
    "\n Jogo 06 : " +
    jogosArray06.sort() +
    "  =  " +
    document.frm.SOMA06.value +
    "\n\n";

  /* Chama a função de mostraJogos */
  mostraJogos(escreveJogos);
}
