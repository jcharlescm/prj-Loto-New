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

// ********************************************************
// Carrega os campos de soma de cada cartela
// ********************************************************
function soma() {
  var total01;
  var total02;
  var total03;
  var total04;
  var total05;
  var total06;
  var total07;
  var total08;

  total01 =
    parseFloat(0 + document.frm.JG0101.value) +
    parseFloat(0 + document.frm.JG0102.value) +
    parseFloat(0 + document.frm.JG0103.value) +
    parseFloat(0 + document.frm.JG0104.value) +
    parseFloat(0 + document.frm.JG0105.value) +
    parseFloat(0 + document.frm.JG0106.value) +
    parseFloat(0 + document.frm.JG0107.value) +
    parseFloat(0 + document.frm.JG0108.value) +
    parseFloat(0 + document.frm.JG0109.value) +
    parseFloat(0 + document.frm.JG0110.value) +
    parseFloat(0 + document.frm.JG0111.value) +
    parseFloat(0 + document.frm.JG0112.value) +
    parseFloat(0 + document.frm.JG0113.value) +
    parseFloat(0 + document.frm.JG0114.value) +
    parseFloat(0 + document.frm.JG0115.value);

  total02 =
    parseFloat(0 + document.frm.JG0201.value) +
    parseFloat(0 + document.frm.JG0202.value) +
    parseFloat(0 + document.frm.JG0203.value) +
    parseFloat(0 + document.frm.JG0204.value) +
    parseFloat(0 + document.frm.JG0205.value) +
    parseFloat(0 + document.frm.JG0206.value) +
    parseFloat(0 + document.frm.JG0207.value) +
    parseFloat(0 + document.frm.JG0208.value) +
    parseFloat(0 + document.frm.JG0209.value) +
    parseFloat(0 + document.frm.JG0210.value) +
    parseFloat(0 + document.frm.JG0211.value) +
    parseFloat(0 + document.frm.JG0212.value) +
    parseFloat(0 + document.frm.JG0213.value) +
    parseFloat(0 + document.frm.JG0214.value) +
    parseFloat(0 + document.frm.JG0215.value);

  total03 =
    parseFloat(0 + document.frm.JG0301.value) +
    parseFloat(0 + document.frm.JG0302.value) +
    parseFloat(0 + document.frm.JG0303.value) +
    parseFloat(0 + document.frm.JG0304.value) +
    parseFloat(0 + document.frm.JG0302.value) +
    parseFloat(0 + document.frm.JG0306.value) +
    parseFloat(0 + document.frm.JG0307.value) +
    parseFloat(0 + document.frm.JG0308.value) +
    parseFloat(0 + document.frm.JG0309.value) +
    parseFloat(0 + document.frm.JG0310.value) +
    parseFloat(0 + document.frm.JG0311.value) +
    parseFloat(0 + document.frm.JG0312.value) +
    parseFloat(0 + document.frm.JG0313.value) +
    parseFloat(0 + document.frm.JG0314.value) +
    parseFloat(0 + document.frm.JG0315.value);

  total04 =
    parseFloat(0 + document.frm.JG0401.value) +
    parseFloat(0 + document.frm.JG0402.value) +
    parseFloat(0 + document.frm.JG0403.value) +
    parseFloat(0 + document.frm.JG0404.value) +
    parseFloat(0 + document.frm.JG0405.value) +
    parseFloat(0 + document.frm.JG0406.value) +
    parseFloat(0 + document.frm.JG0407.value) +
    parseFloat(0 + document.frm.JG0408.value) +
    parseFloat(0 + document.frm.JG0409.value) +
    parseFloat(0 + document.frm.JG0410.value) +
    parseFloat(0 + document.frm.JG0411.value) +
    parseFloat(0 + document.frm.JG0412.value) +
    parseFloat(0 + document.frm.JG0413.value) +
    parseFloat(0 + document.frm.JG0414.value) +
    parseFloat(0 + document.frm.JG0415.value);

  total05 =
    parseFloat(0 + document.frm.JG0501.value) +
    parseFloat(0 + document.frm.JG0502.value) +
    parseFloat(0 + document.frm.JG0503.value) +
    parseFloat(0 + document.frm.JG0504.value) +
    parseFloat(0 + document.frm.JG0505.value) +
    parseFloat(0 + document.frm.JG0506.value) +
    parseFloat(0 + document.frm.JG0507.value) +
    parseFloat(0 + document.frm.JG0508.value) +
    parseFloat(0 + document.frm.JG0509.value) +
    parseFloat(0 + document.frm.JG0510.value) +
    parseFloat(0 + document.frm.JG0511.value) +
    parseFloat(0 + document.frm.JG0512.value) +
    parseFloat(0 + document.frm.JG0513.value) +
    parseFloat(0 + document.frm.JG0514.value) +
    parseFloat(0 + document.frm.JG0515.value);

  total06 =
    parseFloat(0 + document.frm.JG0601.value) +
    parseFloat(0 + document.frm.JG0602.value) +
    parseFloat(0 + document.frm.JG0603.value) +
    parseFloat(0 + document.frm.JG0604.value) +
    parseFloat(0 + document.frm.JG0605.value) +
    parseFloat(0 + document.frm.JG0606.value) +
    parseFloat(0 + document.frm.JG0607.value) +
    parseFloat(0 + document.frm.JG0608.value) +
    parseFloat(0 + document.frm.JG0609.value) +
    parseFloat(0 + document.frm.JG0610.value) +
    parseFloat(0 + document.frm.JG0611.value) +
    parseFloat(0 + document.frm.JG0612.value) +
    parseFloat(0 + document.frm.JG0613.value) +
    parseFloat(0 + document.frm.JG0614.value) +
    parseFloat(0 + document.frm.JG0615.value);

  total07 =
    parseFloat(0 + document.frm.JG0701.value) +
    parseFloat(0 + document.frm.JG0702.value) +
    parseFloat(0 + document.frm.JG0703.value) +
    parseFloat(0 + document.frm.JG0704.value) +
    parseFloat(0 + document.frm.JG0705.value) +
    parseFloat(0 + document.frm.JG0706.value) +
    parseFloat(0 + document.frm.JG0707.value) +
    parseFloat(0 + document.frm.JG0708.value) +
    parseFloat(0 + document.frm.JG0709.value) +
    parseFloat(0 + document.frm.JG0710.value) +
    parseFloat(0 + document.frm.JG0711.value) +
    parseFloat(0 + document.frm.JG0712.value) +
    parseFloat(0 + document.frm.JG0713.value) +
    parseFloat(0 + document.frm.JG0714.value) +
    parseFloat(0 + document.frm.JG0715.value);

  total08 =
    parseFloat(0 + document.frm.JG0801.value) +
    parseFloat(0 + document.frm.JG0802.value) +
    parseFloat(0 + document.frm.JG0803.value) +
    parseFloat(0 + document.frm.JG0804.value) +
    parseFloat(0 + document.frm.JG0805.value) +
    parseFloat(0 + document.frm.JG0806.value) +
    parseFloat(0 + document.frm.JG0807.value) +
    parseFloat(0 + document.frm.JG0808.value) +
    parseFloat(0 + document.frm.JG0809.value) +
    parseFloat(0 + document.frm.JG0810.value) +
    parseFloat(0 + document.frm.JG0811.value) +
    parseFloat(0 + document.frm.JG0812.value) +
    parseFloat(0 + document.frm.JG0813.value) +
    parseFloat(0 + document.frm.JG0814.value) +
    parseFloat(0 + document.frm.JG0815.value);

 
    document.frm.SOMA01.value = total01;
    document.frm.SOMA02.value = total02;
    document.frm.SOMA03.value = total03;
    document.frm.SOMA04.value = total04;
    document.frm.SOMA05.value = total05;
    document.frm.SOMA06.value = total06;
    document.frm.SOMA07.value = total07;
    document.frm.SOMA08.value = total08;

}

// *********************************************************
// Carrega o Primeiro Número NE01 nos campos JG11, JG21 e JG31
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
// Carrega o Primeiro Número NE02 nos campos
// *********************************************************
function carregaNE02() {
  document.frm.JG0102.value = document.frm.NE02.value;
  document.frm.JG0202.value = document.frm.NE02.value;
  document.frm.JG0302.value = document.frm.NE02.value;
  document.frm.JG0402.value = document.frm.NE02.value;
  document.frm.JG0502.value = document.frm.NE02.value;
  document.frm.JG0602.value = document.frm.NE02.value;
  document.frm.JG0702.value = document.frm.NE02.value;
}

// *********************************************************
// Carrega o Primeiro Número NE03 nos campos
// *********************************************************
function carregaNE03() {
  document.frm.JG0103.value = document.frm.NE03.value;
  document.frm.JG0203.value = document.frm.NE03.value;
  document.frm.JG0303.value = document.frm.NE03.value;
  document.frm.JG0403.value = document.frm.NE03.value;
  document.frm.JG0503.value = document.frm.NE03.value;
  document.frm.JG0603.value = document.frm.NE03.value;
  document.frm.JG0703.value = document.frm.NE03.value;
}

// *********************************************************
// Carrega o Primeiro Número NE04 nos campos
// *********************************************************
function carregaNE04() {
  document.frm.JG0104.value = document.frm.NE04.value;
  document.frm.JG0204.value = document.frm.NE04.value;
  document.frm.JG0304.value = document.frm.NE04.value;
  document.frm.JG0404.value = document.frm.NE04.value;
  document.frm.JG0504.value = document.frm.NE04.value;
  document.frm.JG0604.value = document.frm.NE04.value;
  document.frm.JG0804.value = document.frm.NE04.value;
}

// *********************************************************
// Carrega o Primeiro Número NE05 nos campos
// *********************************************************
function carregaNE05() {
  document.frm.JG0105.value = document.frm.NE05.value;
  document.frm.JG0205.value = document.frm.NE05.value;
  document.frm.JG0305.value = document.frm.NE05.value;
  document.frm.JG0405.value = document.frm.NE05.value;
  document.frm.JG0505.value = document.frm.NE05.value;
  document.frm.JG0605.value = document.frm.NE05.value;
  document.frm.JG0805.value = document.frm.NE05.value;
}

// *********************************************************
// Carrega o Primeiro Número NE06 nos campos
// *********************************************************
function carregaNE06() {
  document.frm.JG0106.value = document.frm.NE06.value;
  document.frm.JG0206.value = document.frm.NE06.value;
  document.frm.JG0306.value = document.frm.NE06.value;
  document.frm.JG0406.value = document.frm.NE06.value;
  document.frm.JG0506.value = document.frm.NE06.value;
  document.frm.JG0606.value = document.frm.NE06.value;
  document.frm.JG0806.value = document.frm.NE06.value;
}

// *********************************************************
// Carrega o Primeiro Número NE07 nos campos
// *********************************************************
function carregaNE07() {
  document.frm.JG0107.value = document.frm.NE07.value;
  document.frm.JG0207.value = document.frm.NE07.value;
  document.frm.JG0307.value = document.frm.NE07.value;
  document.frm.JG0407.value = document.frm.NE07.value;
  document.frm.JG0507.value = document.frm.NE07.value;
  document.frm.JG0707.value = document.frm.NE07.value;
  document.frm.JG0807.value = document.frm.NE07.value;
}

// *********************************************************
// Carrega o Primeiro Número NE08 nos campos
// *********************************************************
function carregaNE08() {
  document.frm.JG0108.value = document.frm.NE08.value;
  document.frm.JG0208.value = document.frm.NE08.value;
  document.frm.JG0308.value = document.frm.NE08.value;
  document.frm.JG0408.value = document.frm.NE08.value;
  document.frm.JG0508.value = document.frm.NE08.value;
  document.frm.JG0708.value = document.frm.NE08.value;
  document.frm.JG0808.value = document.frm.NE08.value;
}

// *********************************************************
// Carrega o Primeiro Número NE09 nos campos
// *********************************************************
function carregaNE09() {
  document.frm.JG0109.value = document.frm.NE09.value;
  document.frm.JG0209.value = document.frm.NE09.value;
  document.frm.JG0309.value = document.frm.NE09.value;
  document.frm.JG0409.value = document.frm.NE09.value;
  document.frm.JG0509.value = document.frm.NE09.value;
  document.frm.JG0709.value = document.frm.NE09.value;
  document.frm.JG0809.value = document.frm.NE09.value; 
}

// *********************************************************
// Carrega o Primeiro Número NE10 nos campos
// *********************************************************
function carregaNE10() {
  document.frm.JG0110.value = document.frm.NE10.value;
  document.frm.JG0210.value = document.frm.NE10.value;
  document.frm.JG0310.value = document.frm.NE10.value;
  document.frm.JG0410.value = document.frm.NE10.value;
  document.frm.JG0610.value = document.frm.NE10.value;
  document.frm.JG0710.value = document.frm.NE10.value;
  document.frm.JG0810.value = document.frm.NE10.value;
}

// *********************************************************
// Carrega o Primeiro Número NE11 nos campos JG35, JG55 e JG65
// *********************************************************
function carregaNE11() {
  document.frm.JG0111.value = document.frm.NE11.value;
  document.frm.JG0211.value = document.frm.NE11.value;
  document.frm.JG0311.value = document.frm.NE11.value;
  document.frm.JG0411.value = document.frm.NE11.value;
  document.frm.JG0611.value = document.frm.NE11.value;
  document.frm.JG0711.value = document.frm.NE11.value;
  document.frm.JG0811.value = document.frm.NE11.value;
}

// *********************************************************
// Carrega o Primeiro Número NE12 nos campos
// *********************************************************
function carregaNE12() {
  document.frm.JG0112.value = document.frm.NE12.value;
  document.frm.JG0212.value = document.frm.NE12.value;
  document.frm.JG0312.value = document.frm.NE12.value;
  document.frm.JG0412.value = document.frm.NE12.value;
  document.frm.JG0612.value = document.frm.NE12.value;
  document.frm.JG0712.value = document.frm.NE12.value;
  document.frm.JG0812.value = document.frm.NE12.value;
}

// *********************************************************
// Carrega o Primeiro Número NE13 nos campos
// *********************************************************
function carregaNE13() {
  document.frm.JG0113.value = document.frm.NE13.value;
  document.frm.JG0213.value = document.frm.NE13.value;
  document.frm.JG0313.value = document.frm.NE13.value;
  document.frm.JG0513.value = document.frm.NE13.value;
  document.frm.JG0613.value = document.frm.NE13.value;
  document.frm.JG0713.value = document.frm.NE13.value;
  document.frm.JG0813.value = document.frm.NE13.value;
}

// *********************************************************
// Carrega o Primeiro Número NE14 nos campos
// *********************************************************
function carregaNE14() {
  document.frm.JG0114.value = document.frm.NE14.value;
  document.frm.JG0214.value = document.frm.NE14.value;
  document.frm.JG0514.value = document.frm.NE14.value; 
  document.frm.JG0614.value = document.frm.NE14.value;
  document.frm.JG0714.value = document.frm.NE14.value;
  document.frm.JG0814.value = document.frm.NE14.value;
}

// *********************************************************
// Carrega o Primeiro Número NE15 nos campos JG36, JG56 e JG66
// *********************************************************
function carregaNE15() {
  document.frm.JG0115.value = document.frm.NE15.value;
  document.frm.JG0515.value = document.frm.NE15.value;
  document.frm.JG0615.value = document.frm.NE15.value;
  document.frm.JG0715.value = document.frm.NE15.value;
  document.frm.JG0615.value = document.frm.NE15.value;
  document.frm.JG0815.value = document.frm.NE15.value;
}

// *********************************************************
// Carrega o Primeiro Número NE16 nos campos JG36, JG56 e JG66
// *********************************************************
function carregaNE16() {
  document.frm.JG0215.value = document.frm.NE16.value;
  document.frm.JG0314.value = document.frm.NE16.value;
  document.frm.JG0413.value = document.frm.NE16.value;
  document.frm.JG0510.value = document.frm.NE16.value;
  document.frm.JG0607.value = document.frm.NE16.value;
  document.frm.JG0704.value = document.frm.NE16.value;
  document.frm.JG0801.value = document.frm.NE16.value;
}

// *********************************************************
// Carrega o Primeiro Número NE17 nos campos
// *********************************************************
function carregaNE17() {
  document.frm.JG0315.value = document.frm.NE17.value;
  document.frm.JG0414.value = document.frm.NE17.value;
  document.frm.JG0511.value = document.frm.NE17.value;
  document.frm.JG0608.value = document.frm.NE17.value;
  document.frm.JG0705.value = document.frm.NE17.value;
  document.frm.JG0802.value = document.frm.NE17.value;
}

// *********************************************************
// Carrega o Primeiro Número NE18 nos campos
// *********************************************************
function carregaNE18() {
  document.frm.JG0415.value = document.frm.NE18.value;
  document.frm.JG0512.value = document.frm.NE18.value;
  document.frm.JG0609.value = document.frm.NE18.value;
  document.frm.JG0706.value = document.frm.NE18.value;
  document.frm.JG0803.value = document.frm.NE18.value;
}

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
    document.frm.JG0106.value,
    document.frm.JG0107.value,
    document.frm.JG0108.value,
    document.frm.JG0109.value,
    document.frm.JG0110.value,
    document.frm.JG0111.value,
    document.frm.JG0112.value,
    document.frm.JG0113.value,
    document.frm.JG0114.value,
    document.frm.JG0115.value,
  ]; // OK

  var jogosArray02 = [
    document.frm.JG0201.value,
    document.frm.JG0202.value,
    document.frm.JG0203.value,
    document.frm.JG0204.value,
    document.frm.JG0205.value,
    document.frm.JG0206.value,
    document.frm.JG0207.value,
    document.frm.JG0208.value,
    document.frm.JG0209.value,
    document.frm.JG0210.value,
    document.frm.JG0211.value,
    document.frm.JG0212.value,
    document.frm.JG0213.value,
    document.frm.JG0214.value,
    document.frm.JG0215.value,
  ]; // OK

  var jogosArray03 = [
    document.frm.JG0301.value,
    document.frm.JG0302.value,
    document.frm.JG0303.value,
    document.frm.JG0304.value,
    document.frm.JG0305.value,
    document.frm.JG0306.value,
    document.frm.JG0307.value,
    document.frm.JG0308.value,
    document.frm.JG0309.value,
    document.frm.JG0310.value,
    document.frm.JG0311.value,
    document.frm.JG0312.value,
    document.frm.JG0313.value,
    document.frm.JG0314.value,
    document.frm.JG0315.value,
  ]; // OK

  var jogosArray04 = [
    document.frm.JG0401.value,
    document.frm.JG0402.value,
    document.frm.JG0403.value,
    document.frm.JG0404.value,
    document.frm.JG0405.value,
    document.frm.JG0406.value,
    document.frm.JG0407.value,
    document.frm.JG0408.value,
    document.frm.JG0409.value,
    document.frm.JG0410.value,
    document.frm.JG0411.value,
    document.frm.JG0412.value,
    document.frm.JG0413.value,
    document.frm.JG0414.value,
    document.frm.JG0415.value,
  ]; // OK

  var jogosArray05 = [
    document.frm.JG0501.value,
    document.frm.JG0502.value,
    document.frm.JG0503.value,
    document.frm.JG0504.value,
    document.frm.JG0505.value,
    document.frm.JG0506.value,
    document.frm.JG0507.value,
    document.frm.JG0508.value,
    document.frm.JG0509.value,
    document.frm.JG0510.value,
    document.frm.JG0511.value,
    document.frm.JG0512.value,
    document.frm.JG0513.value,
    document.frm.JG0514.value,
    document.frm.JG0515.value,
  ]; // OK

  var jogosArray06 = [
    document.frm.JG0601.value,
    document.frm.JG0602.value,
    document.frm.JG0603.value,
    document.frm.JG0604.value,
    document.frm.JG0605.value,
    document.frm.JG0606.value,
    document.frm.JG0607.value,
    document.frm.JG0608.value,
    document.frm.JG0609.value,
    document.frm.JG0610.value,
    document.frm.JG0611.value,
    document.frm.JG0612.value,
    document.frm.JG0613.value,
    document.frm.JG0614.value,
    document.frm.JG0615.value,
  ]; // OK

  var jogosArray07 = [
    document.frm.JG0701.value,
    document.frm.JG0702.value,
    document.frm.JG0703.value,
    document.frm.JG0704.value,
    document.frm.JG0705.value,
    document.frm.JG0706.value,
    document.frm.JG0707.value,
    document.frm.JG0708.value,
    document.frm.JG0709.value,
    document.frm.JG0710.value,
    document.frm.JG0711.value,
    document.frm.JG0712.value,
    document.frm.JG0713.value,
    document.frm.JG0714.value,
    document.frm.JG0715.value,
  ]; // OK

  var jogosArray08 = [
    document.frm.JG0801.value,
    document.frm.JG0802.value,
    document.frm.JG0803.value,
    document.frm.JG0804.value,
    document.frm.JG0805.value,
    document.frm.JG0806.value,
    document.frm.JG0807.value,
    document.frm.JG0808.value,
    document.frm.JG0809.value,
    document.frm.JG0810.value,
    document.frm.JG0811.value,
    document.frm.JG0812.value,
    document.frm.JG0813.value,
    document.frm.JG0814.value,
    document.frm.JG0815.value,
  ]; // OK



  var soma1 = [document.frm.SOMA01.value];
  var soma2 = [document.frm.SOMA02.value];
  var soma3 = [document.frm.SOMA03.value];
  var soma4 = [document.frm.SOMA04.value];
  var soma5 = [document.frm.SOMA05.value];
  var somar6 = [document.frm.SOMA06.value];
  var somar7 = [document.frm.SOMA07.value];
  var somar8 = [document.frm.SOMA08.value];


  escreveJogos =
    " - JOGOS EM ORDEM CRESCENTE + " +
    "\n\n Jogo 01: " +
    jogosArray01.sort() +
    " = " +
    soma1 +
    "\n Jogo 02: " +
    jogosArray02.sort() +
    " = " +
    soma2 +
    "\n Jogo 03: " +
    jogosArray03.sort() +
    " = " +
    soma3 +
    "\n Jogo 04: " +
    jogosArray04.sort() +
    " = " +
    soma4 +
    "\n Jogo 05: " +
    jogosArray05.sort() +
    " = " +
    soma5 +
    "\n Jogo 06: " +
    jogosArray06.sort() +
    " = " +
    somar6 +
    "\n Jogo 07: " +
    jogosArray07.sort() +
    " = " +
    somar7 +
    "\n Jogo 08: " +
    jogosArray08.sort() +
    " = " +
    somar8 +
    "\n\n" +
    "Recomendação: Recomendo que sejam feitos jogos com a SOMA entre 180 e 200(90%)";

  /* Chama a funººo de mostraJogos */
  mostraJogos(escreveJogos);
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
    if (nomeComp == "NE15") {
      document.frm.NE15.value = "0" + document.frm.NE15.value;
    }
    if (nomeComp == "NE16") {
      document.frm.NE16.value = "0" + document.frm.NE16.value;
    }
    if (nomeComp == "NE17") {
      document.frm.NE17.value = "0" + document.frm.NE17.value;
    }
    if (nomeComp == "NE18") {
      document.frm.NE18.value = "0" + document.frm.NE18.value;
    }
    if (nomeComp == "NE19") {
      document.frm.NE19.value = "0" + document.frm.NE19.value;
    }
    if (nomeComp == "NE20") {
      document.frm.NE20.value = "0" + document.frm.NE20.value;
    }
    if (nomeComp == "NE21") {
      document.frm.NE21.value = "0" + document.frm.NE21.value;
    }
    if (nomeComp == "NE22") {
      document.frm.NE22.value = "0" + document.frm.NE22.value;
    }
    if (nomeComp == "NE23") {
      document.frm.NE23.value = "0" + document.frm.NE23.value;
    }
    if (nomeComp == "NE24") {
      document.frm.NE24.value = "0" + document.frm.NE24.value;
    }
    if (nomeComp == "NE25") {
      document.frm.NE25.value = "0" + document.frm.NE25.value;
    }
  }
}

