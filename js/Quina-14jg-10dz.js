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
// Carrega o Primeiro Número NE01 nos campos JG0101, JG0201 e JG0301
// *********************************************************
function carregaNE01() {
  document.frm.JG0101.value = document.frm.NE01.value;
  document.frm.JG0201.value = document.frm.NE01.value;
  document.frm.JG0301.value = document.frm.NE01.value;
  document.frm.JG0401.value = document.frm.NE01.value;
  document.frm.JG0501.value = document.frm.NE01.value;
  document.frm.JG0601.value = document.frm.NE01.value;
  document.frm.JG0701.value = document.frm.NE01.value;
}

// *********************************************************
// Carrega o Primeiro Número NE02 nos campos JG0102, JG0202 e JG0302
// *********************************************************
function carregaNE02() {
  document.frm.JG0801.value = document.frm.NE02.value;
  document.frm.JG0901.value = document.frm.NE02.value;
  document.frm.JG1001.value = document.frm.NE02.value;
  document.frm.JG1101.value = document.frm.NE02.value;

  document.frm.JG0102.value = document.frm.NE02.value;
  document.frm.JG0202.value = document.frm.NE02.value;
  document.frm.JG0302.value = document.frm.NE02.value;
}

// *********************************************************
// Carrega o Primeiro Número NE03 nos campos JG0103, JG0203 e JG0303
// *********************************************************
function carregaNE03() {
  document.frm.JG1201.value = document.frm.NE03.value;
  document.frm.JG1301.value = document.frm.NE03.value;

  document.frm.JG0402.value = document.frm.NE03.value;
  document.frm.JG0502.value = document.frm.NE03.value;
  document.frm.JG0802.value = document.frm.NE03.value;
  document.frm.JG0902.value = document.frm.NE03.value;

  document.frm.JG0103.value = document.frm.NE03.value;
}

// *********************************************************
// Carrega o Primeiro Número NE04 nos campos JG0104, JG0304 e JG0305
// *********************************************************
function carregaNE04() {
  document.frm.JG1401.value = document.frm.NE04.value;

  document.frm.JG0602.value = document.frm.NE04.value;
  document.frm.JG1002.value = document.frm.NE04.value;
  document.frm.JG1202.value = document.frm.NE04.value;

  document.frm.JG0203.value = document.frm.NE04.value;
  document.frm.JG0403.value = document.frm.NE04.value;
  document.frm.JG0803.value = document.frm.NE04.value;
}

// *********************************************************
// Carrega o Primeiro Número NE05 nos campos
// *********************************************************
function carregaNE05() {
  document.frm.JG0702.value = document.frm.NE05.value;
  document.frm.JG1102.value = document.frm.NE05.value;
  document.frm.JG1302.value = document.frm.NE05.value;

  document.frm.JG0303.value = document.frm.NE05.value;

  document.frm.JG0204.value = document.frm.NE05.value;
  document.frm.JG0404.value = document.frm.NE05.value;
  document.frm.JG0804.value = document.frm.NE05.value;
}

// *********************************************************
// Carrega o Primeiro Número NE06 nos campos JG0106, JG0403 e JG0503
// *********************************************************
function carregaNE06() {
  document.frm.JG0603.value = document.frm.NE06.value;
  document.frm.JG0703.value = document.frm.NE06.value;
  document.frm.JG1003.value = document.frm.NE06.value;
  document.frm.JG1103.value = document.frm.NE06.value;
  document.frm.JG1203.value = document.frm.NE06.value;
  document.frm.JG1303.value = document.frm.NE06.value;

  document.frm.JG0104.value = document.frm.NE06.value;
}

// *********************************************************
// Carrega o Primeiro Número NE06 nos campos JG0106, JG0403 e JG0503
// *********************************************************
function carregaNE07() {
  document.frm.JG1402.value = document.frm.NE07.value;

  document.frm.JG0903.value = document.frm.NE07.value;

  document.frm.JG0304.value = document.frm.NE07.value;
  document.frm.JG0704.value = document.frm.NE07.value;
  document.frm.JG1004.value = document.frm.NE07.value;
  document.frm.JG1304.value = document.frm.NE07.value;

  document.frm.JG0405.value = document.frm.NE07.value;
}

// *********************************************************
// Carrega o Primeiro Número NE08 nos campos
// *********************************************************
function carregaNE08() {
  document.frm.JG0503.value = document.frm.NE08.value;
  document.frm.JG1403.value = document.frm.NE08.value;

  document.frm.JG0604.value = document.frm.NE08.value;
  document.frm.JG0904.value = document.frm.NE08.value;
  document.frm.JG1204.value = document.frm.NE08.value;

  document.frm.JG0105.value = document.frm.NE08.value;
  document.frm.JG1005.value = document.frm.NE08.value;
}

// *********************************************************
// Carrega o Primeiro Número NE09 nos campos JG26, JG046 e JG0603
// *********************************************************
function carregaNE09() {
  document.frm.JG0504.value = document.frm.NE09.value;
  document.frm.JG1104.value = document.frm.NE09.value;
  document.frm.JG1404.value = document.frm.NE09.value;

  document.frm.JG0305.value = document.frm.NE09.value;
  document.frm.JG0605.value = document.frm.NE09.value;
  document.frm.JG0805.value = document.frm.NE09.value;
  document.frm.JG1305.value = document.frm.NE09.value;
}

// *********************************************************
// Carrega o Primeiro Número NE10
// *********************************************************
function carregaNE10() {
  document.frm.JG0205.value = document.frm.NE10.value;
  document.frm.JG0505.value = document.frm.NE10.value;
  document.frm.JG0705.value = document.frm.NE10.value;
  document.frm.JG0905.value = document.frm.NE10.value;
  document.frm.JG1105.value = document.frm.NE10.value;
  document.frm.JG1205.value = document.frm.NE10.value;
  document.frm.JG1405.value = document.frm.NE10.value;
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
  var total07;
  var total08;
  var total09;
  var total10;
  var total11;
  var total12;
  var total13;
  var total14;

  total01 =
    parseFloat(0 + document.frm.JG0101.value) +
    parseFloat(0 + document.frm.JG0102.value) +
    parseFloat(0 + document.frm.JG0103.value) +
    parseFloat(0 + document.frm.JG0104.value) +
    parseFloat(0 + document.frm.JG0105.value);
  total02 =
    parseFloat(0 + document.frm.JG0201.value) +
    parseFloat(0 + document.frm.JG0202.value) +
    parseFloat(0 + document.frm.JG0203.value) +
    parseFloat(0 + document.frm.JG0204.value) +
    parseFloat(0 + document.frm.JG0205.value);
  total03 =
    parseFloat(0 + document.frm.JG0301.value) +
    parseFloat(0 + document.frm.JG0302.value) +
    parseFloat(0 + document.frm.JG0303.value) +
    parseFloat(0 + document.frm.JG0304.value) +
    parseFloat(0 + document.frm.JG0305.value);
  total04 =
    parseFloat(0 + document.frm.JG0401.value) +
    parseFloat(0 + document.frm.JG0402.value) +
    parseFloat(0 + document.frm.JG0403.value) +
    parseFloat(0 + document.frm.JG0404.value) +
    parseFloat(0 + document.frm.JG0405.value);
  total05 =
    parseFloat(0 + document.frm.JG0501.value) +
    parseFloat(0 + document.frm.JG0502.value) +
    parseFloat(0 + document.frm.JG0503.value) +
    parseFloat(0 + document.frm.JG0504.value) +
    parseFloat(0 + document.frm.JG0505.value);
  total06 =
    parseFloat(0 + document.frm.JG0601.value) +
    parseFloat(0 + document.frm.JG0602.value) +
    parseFloat(0 + document.frm.JG0603.value) +
    parseFloat(0 + document.frm.JG0604.value) +
    parseFloat(0 + document.frm.JG0605.value);
  total07 =
    parseFloat(0 + document.frm.JG0701.value) +
    parseFloat(0 + document.frm.JG0702.value) +
    parseFloat(0 + document.frm.JG0703.value) +
    parseFloat(0 + document.frm.JG0704.value) +
    parseFloat(0 + document.frm.JG0705.value);
  total08 =
    parseFloat(0 + document.frm.JG0801.value) +
    parseFloat(0 + document.frm.JG0802.value) +
    parseFloat(0 + document.frm.JG0803.value) +
    parseFloat(0 + document.frm.JG0804.value) +
    parseFloat(0 + document.frm.JG0805.value);
  total09 =
    parseFloat(0 + document.frm.JG0901.value) +
    parseFloat(0 + document.frm.JG0902.value) +
    parseFloat(0 + document.frm.JG0903.value) +
    parseFloat(0 + document.frm.JG0904.value) +
    parseFloat(0 + document.frm.JG0905.value);
  total10 =
    parseFloat(0 + document.frm.JG1001.value) +
    parseFloat(0 + document.frm.JG1002.value) +
    parseFloat(0 + document.frm.JG1003.value) +
    parseFloat(0 + document.frm.JG1004.value) +
    parseFloat(0 + document.frm.JG1005.value);
  total11 =
    parseFloat(0 + document.frm.JG1101.value) +
    parseFloat(0 + document.frm.JG1102.value) +
    parseFloat(0 + document.frm.JG1103.value) +
    parseFloat(0 + document.frm.JG1104.value) +
    parseFloat(0 + document.frm.JG1105.value);
  total12 =
    parseFloat(0 + document.frm.JG1201.value) +
    parseFloat(0 + document.frm.JG1202.value) +
    parseFloat(0 + document.frm.JG1203.value) +
    parseFloat(0 + document.frm.JG1204.value) +
    parseFloat(0 + document.frm.JG1205.value);
  total13 =
    parseFloat(0 + document.frm.JG1301.value) +
    parseFloat(0 + document.frm.JG1302.value) +
    parseFloat(0 + document.frm.JG1303.value) +
    parseFloat(0 + document.frm.JG1304.value) +
    parseFloat(0 + document.frm.JG1305.value);
  total14 =
    parseFloat(0 + document.frm.JG1401.value) +
    parseFloat(0 + document.frm.JG1402.value) +
    parseFloat(0 + document.frm.JG1403.value) +
    parseFloat(0 + document.frm.JG1404.value) +
    parseFloat(0 + document.frm.JG1405.value);

  document.frm.SOMA01.value = total01;
  document.frm.SOMA02.value = total02;
  document.frm.SOMA03.value = total03;
  document.frm.SOMA04.value = total04;
  document.frm.SOMA05.value = total05;
  document.frm.SOMA06.value = total06;
  document.frm.SOMA07.value = total07;
  document.frm.SOMA08.value = total08;
  document.frm.SOMA09.value = total09;
  document.frm.SOMA10.value = total10;
  document.frm.SOMA11.value = total11;
  document.frm.SOMA12.value = total12;
  document.frm.SOMA13.value = total13;
  document.frm.SOMA14.value = total14;
}

// *********************************************************
// Muda a cor do botão igual ao numero digitado
// *********************************************************
function numero_escolhido(nr) {
  if (1 == nr) {
    document.frm.nr01.style.background = "#638cb5";
  }
  if (2 == nr) {
    document.frm.nr02.style.background = "#638cb5";
  }
  if (3 == nr) {
    document.frm.nr03.style.background = "#638cb5";
  }
  if (4 == nr) {
    document.frm.nr04.style.background = "#638cb5";
  }
  if (5 == nr) {
    document.frm.nr05.style.background = "#638cb5";
  }

  if (6 == nr) {
    document.frm.nr06.style.background = "#638cb5";
  }
  if (7 == nr) {
    document.frm.nr07.style.background = "#638cb5";
  }
  if (8 == nr) {
    document.frm.nr08.style.background = "#638cb5";
  }
  if (9 == nr) {
    document.frm.nr09.style.background = "#638cb5";
  }
  if (10 == nr) {
    document.frm.nr10.style.background = "#638cb5";
  }

  if (11 == nr) {
    document.frm.nr11.style.background = "#638cb5";
  }
  if (12 == nr) {
    document.frm.nr12.style.background = "#638cb5";
  }
  if (13 == nr) {
    document.frm.nr13.style.background = "#638cb5";
  }
  if (14 == nr) {
    document.frm.nr14.style.background = "#638cb5";
  }
  if (15 == nr) {
    document.frm.nr15.style.background = "#638cb5";
  }

  if (16 == nr) {
    document.frm.nr16.style.background = "#638cb5";
  }
  if (17 == nr) {
    document.frm.nr17.style.background = "#638cb5";
  }
  if (18 == nr) {
    document.frm.nr18.style.background = "#638cb5";
  }
  if (19 == nr) {
    document.frm.nr19.style.background = "#638cb5";
  }
  if (20 == nr) {
    document.frm.nr20.style.background = "#638cb5";
  }

  if (21 == nr) {
    document.frm.nr21.style.background = "#638cb5";
  }
  if (22 == nr) {
    document.frm.nr22.style.background = "#638cb5";
  }
  if (23 == nr) {
    document.frm.nr23.style.background = "#638cb5";
  }
  if (24 == nr) {
    document.frm.nr24.style.background = "#638cb5";
  }
  if (25 == nr) {
    document.frm.nr25.style.background = "#638cb5";
  }

  if (26 == nr) {
    document.frm.nr26.style.background = "#638cb5";
  }
  if (27 == nr) {
    document.frm.nr27.style.background = "#638cb5";
  }
  if (28 == nr) {
    document.frm.nr28.style.background = "#638cb5";
  }
  if (29 == nr) {
    document.frm.nr29.style.background = "#638cb5";
  }
  if (30 == nr) {
    document.frm.nr30.style.background = "#638cb5";
  }

  if (31 == nr) {
    document.frm.nr31.style.background = "#638cb5";
  }
  if (32 == nr) {
    document.frm.nr32.style.background = "#638cb5";
  }
  if (33 == nr) {
    document.frm.nr33.style.background = "#638cb5";
  }
  if (34 == nr) {
    document.frm.nr34.style.background = "#638cb5";
  }
  if (35 == nr) {
    document.frm.nr35.style.background = "#638cb5";
  }

  if (36 == nr) {
    document.frm.nr36.style.background = "#638cb5";
  }
  if (37 == nr) {
    document.frm.nr37.style.background = "#638cb5";
  }
  if (38 == nr) {
    document.frm.nr38.style.background = "#638cb5";
  }
  if (39 == nr) {
    document.frm.nr39.style.background = "#638cb5";
  }
  if (40 == nr) {
    document.frm.nr40.style.background = "#638cb5";
  }

  if (41 == nr) {
    document.frm.nr41.style.background = "#638cb5";
  }
  if (42 == nr) {
    document.frm.nr42.style.background = "#638cb5";
  }
  if (43 == nr) {
    document.frm.nr43.style.background = "#638cb5";
  }
  if (44 == nr) {
    document.frm.nr44.style.background = "#638cb5";
  }
  if (45 == nr) {
    document.frm.nr45.style.background = "#638cb5";
  }

  if (46 == nr) {
    document.frm.nr46.style.background = "#638cb5";
  }
  if (47 == nr) {
    document.frm.nr47.style.background = "#638cb5";
  }
  if (48 == nr) {
    document.frm.nr48.style.background = "#638cb5";
  }
  if (49 == nr) {
    document.frm.nr49.style.background = "#638cb5";
  }
  if (50 == nr) {
    document.frm.nr50.style.background = "#638cb5";
  }

  if (51 == nr) {
    document.frm.nr51.style.background = "#638cb5";
  }
  if (52 == nr) {
    document.frm.nr52.style.background = "#638cb5";
  }
  if (53 == nr) {
    document.frm.nr53.style.background = "#638cb5";
  }
  if (54 == nr) {
    document.frm.nr54.style.background = "#638cb5";
  }
  if (55 == nr) {
    document.frm.nr55.style.background = "#638cb5";
  }

  if (56 == nr) {
    document.frm.nr56.style.background = "#638cb5";
  }
  if (57 == nr) {
    document.frm.nr57.style.background = "#638cb5";
  }
  if (58 == nr) {
    document.frm.nr58.style.background = "#638cb5";
  }
  if (59 == nr) {
    document.frm.nr59.style.background = "#638cb5";
  }
  if (60 == nr) {
    document.frm.nr60.style.background = "#638cb5";
  }

  if (61 == nr) {
    document.frm.nr61.style.background = "#638cb5";
  }
  if (62 == nr) {
    document.frm.nr62.style.background = "#638cb5";
  }
  if (63 == nr) {
    document.frm.nr63.style.background = "#638cb5";
  }
  if (64 == nr) {
    document.frm.nr64.style.background = "#638cb5";
  }
  if (65 == nr) {
    document.frm.nr65.style.background = "#638cb5";
  }

  if (66 == nr) {
    document.frm.nr66.style.background = "#638cb5";
  }
  if (67 == nr) {
    document.frm.nr67.style.background = "#638cb5";
  }
  if (68 == nr) {
    document.frm.nr68.style.background = "#638cb5";
  }
  if (69 == nr) {
    document.frm.nr69.style.background = "#638cb5";
  }
  if (70 == nr) {
    document.frm.nr70.style.background = "#638cb5";
  }

  if (71 == nr) {
    document.frm.nr71.style.background = "#638cb5";
  }
  if (72 == nr) {
    document.frm.nr72.style.background = "#638cb5";
  }
  if (73 == nr) {
    document.frm.nr73.style.background = "#638cb5";
  }
  if (74 == nr) {
    document.frm.nr74.style.background = "#638cb5";
  }
  if (75 == nr) {
    document.frm.nr75.style.background = "#638cb5";
  }

  if (76 == nr) {
    document.frm.nr76.style.background = "#638cb5";
  }
  if (77 == nr) {
    document.frm.nr77.style.background = "#638cb5";
  }
  if (78 == nr) {
    document.frm.nr78.style.background = "#638cb5";
  }
  if (79 == nr) {
    document.frm.nr79.style.background = "#638cb5";
  }
  if (80 == nr) {
    document.frm.nr80.style.background = "#638cb5";
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
  }
}

// *********************************************************
// Ordena os numeros distribuidos nos jogos
// *********************************************************
function ordenarArray() {
  var jogosArray01 = [
    document.frm.JG0101.value,
    document.frm.JG0102.value,
    document.frm.JG0103.value,
    document.frm.JG0104.value,
    document.frm.JG0105.value,
  ]; // OK
  var jogosArray02 = [
    document.frm.JG0201.value,
    document.frm.JG0202.value,
    document.frm.JG0203.value,
    document.frm.JG0204.value,
    document.frm.JG0205.value,
  ]; // OK
  var jogosArray03 = [
    document.frm.JG0301.value,
    document.frm.JG0302.value,
    document.frm.JG0303.value,
    document.frm.JG0304.value,
    document.frm.JG0305.value,
  ]; // OK
  var jogosArray04 = [
    document.frm.JG0401.value,
    document.frm.JG0402.value,
    document.frm.JG0403.value,
    document.frm.JG0405.value,
    document.frm.JG0405.value,
  ]; // OK
  var jogosArray05 = [
    document.frm.JG0501.value,
    document.frm.JG0502.value,
    document.frm.JG0503.value,
    document.frm.JG0504.value,
    document.frm.JG0505.value,
  ]; // OK
  var jogosArray06 = [
    document.frm.JG0601.value,
    document.frm.JG0602.value,
    document.frm.JG0603.value,
    document.frm.JG0604.value,
    document.frm.JG0605.value,
  ]; // OK
  var jogosArray07 = [
    document.frm.JG0701.value,
    document.frm.JG0702.value,
    document.frm.JG0703.value,
    document.frm.JG0704.value,
    document.frm.JG0705.value,
  ]; // OK
  var jogosArray08 = [
    document.frm.JG0801.value,
    document.frm.JG0802.value,
    document.frm.JG0803.value,
    document.frm.JG0804.value,
    document.frm.JG0805.value,
  ]; // OK
  var jogosArray09 = [
    document.frm.JG0901.value,
    document.frm.JG0902.value,
    document.frm.JG0903.value,
    document.frm.JG0904.value,
    document.frm.JG0905.value,
  ]; // OK
  var jogosArray10 = [
    document.frm.JG1001.value,
    document.frm.JG1002.value,
    document.frm.JG1003.value,
    document.frm.JG1004.value,
    document.frm.JG1005.value,
  ]; // OK

  var jogosArray11 = [
    document.frm.JG1101.value,
    document.frm.JG1102.value,
    document.frm.JG1103.value,
    document.frm.JG1104.value,
    document.frm.JG1105.value,
  ]; // OK
  var jogosArray12 = [
    document.frm.JG1201.value,
    document.frm.JG1202.value,
    document.frm.JG1203.value,
    document.frm.JG1204.value,
    document.frm.JG1205.value,
  ]; // OK
  var jogosArray13 = [
    document.frm.JG1301.value,
    document.frm.JG1302.value,
    document.frm.JG1303.value,
    document.frm.JG1304.value,
    document.frm.JG1305.value,
  ]; // OK
  var jogosArray14 = [
    document.frm.JG1401.value,
    document.frm.JG1402.value,
    document.frm.JG1403.value,
    document.frm.JG1404.value,
    document.frm.JG1405.value,
  ]; // OK

  var soma01 = [document.frm.SOMA01.value];
  var soma02 = [document.frm.SOMA02.value];
  var soma03 = [document.frm.SOMA03.value];
  var soma04 = [document.frm.SOMA04.value];
  var soma05 = [document.frm.SOMA05.value];
  var soma06 = [document.frm.SOMA06.value];
  var soma07 = [document.frm.SOMA07.value];
  var soma08 = [document.frm.SOMA08.value];
  var soma09 = [document.frm.SOMA09.value];
  var soma10 = [document.frm.SOMA10.value];
  var soma11 = [document.frm.SOMA11.value];
  var soma12 = [document.frm.SOMA12.value];
  var soma13 = [document.frm.SOMA13.value];
  var soma14 = [document.frm.SOMA14.value];

  escreveJogos =
    "JOGOS EM ORDEM CRESCENTE" +
    "\n\n Jogo 01: " +
    jogosArray01.sort() +
    " = " +
    soma01 +
    "\n Jogo 02: " +
    jogosArray02.sort() +
    " = " +
    soma02 +
    "\n Jogo 03: " +
    jogosArray03.sort() +
    " = " +
    soma03 +
    "\n Jogo 04: " +
    jogosArray04.sort() +
    " = " +
    soma04 +
    "\n Jogo 05: " +
    jogosArray05.sort() +
    " = " +
    soma05 +
    "\n";
  escreveJogos =
    escreveJogos +
    "\n Jogo 06: " +
    jogosArray06.sort() +
    " = " +
    soma06 +
    "\n Jogo 07: " +
    jogosArray07.sort() +
    " = " +
    soma07 +
    "\n Jogo 08: " +
    jogosArray08.sort() +
    " = " +
    soma08 +
    "\n Jogo 09: " +
    jogosArray09.sort() +
    " = " +
    soma09 +
    "\n Jogo 10: " +
    jogosArray10.sort() +
    " = " +
    soma10 +
    "\n";
  escreveJogos =
    escreveJogos +
    "\n Jogo 11: " +
    jogosArray11.sort() +
    " = " +
    soma11 +
    "\n Jogo 12: " +
    jogosArray12.sort() +
    " = " +
    soma12 +
    "\n Jogo 13: " +
    jogosArray13.sort() +
    " = " +
    soma13 +
    "\n Jogo 14: " +
    jogosArray14.sort() +
    " = " +
    soma14 + 
    "\n\n";

  /* Chama a funººo de mostraJogos */
  mostraJogos(escreveJogos);
}
