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
  document.frm.JG167.value = document.frm.NE01.value;
  document.frm.JG176.value = document.frm.NE01.value;
  document.frm.JG185.value = document.frm.NE01.value;
  document.frm.JG194.value = document.frm.NE01.value;
  document.frm.JG203.value = document.frm.NE01.value;
  document.frm.JG212.value = document.frm.NE01.value;
}

// *********************************************************
// Carrega o Primeiro Número NE02 nos campos JG12, JG22 e JG32
// *********************************************************
function carregaNE02() {
  document.frm.JG12.value = document.frm.NE02.value;
  document.frm.JG21.value = document.frm.NE02.value;
  document.frm.JG177.value = document.frm.NE02.value;
  document.frm.JG186.value = document.frm.NE02.value;
  document.frm.JG195.value = document.frm.NE02.value;
  document.frm.JG204.value = document.frm.NE02.value;
  document.frm.JG213.value = document.frm.NE02.value;
}

// *********************************************************
// Carrega o Primeiro Número NE03 nos campos JG13, JG23 e JG33
// *********************************************************
function carregaNE03() {
  document.frm.JG13.value = document.frm.NE03.value;
  document.frm.JG22.value = document.frm.NE03.value;
  document.frm.JG31.value = document.frm.NE03.value;
  document.frm.JG187.value = document.frm.NE03.value;
  document.frm.JG196.value = document.frm.NE03.value;
  document.frm.JG205.value = document.frm.NE03.value;
  document.frm.JG214.value = document.frm.NE03.value;
}

// *********************************************************
// Carrega o Primeiro Número NE04 nos campos JG14, JG34 e JG35
// *********************************************************
function carregaNE04() {
  document.frm.JG14.value = document.frm.NE04.value;
  document.frm.JG23.value = document.frm.NE04.value;
  document.frm.JG32.value = document.frm.NE04.value;
  document.frm.JG41.value = document.frm.NE04.value;
  document.frm.JG197.value = document.frm.NE04.value;
  document.frm.JG206.value = document.frm.NE04.value;
  document.frm.JG215.value = document.frm.NE04.value;
}

// *********************************************************
// Carrega o Primeiro Número NE05 nos campos JG15, JG42 e JG52
// *********************************************************
function carregaNE05() {
  document.frm.JG15.value = document.frm.NE05.value;
  document.frm.JG24.value = document.frm.NE05.value;
  document.frm.JG33.value = document.frm.NE05.value;
  document.frm.JG42.value = document.frm.NE05.value;
  document.frm.JG51.value = document.frm.NE05.value;
  document.frm.JG207.value = document.frm.NE05.value;
  document.frm.JG216.value = document.frm.NE05.value;
}

// *********************************************************
// Carrega o Primeiro Número NE06 nos campos JG16, JG43 e JG53
// *********************************************************
function carregaNE06() {
  document.frm.JG16.value = document.frm.NE06.value;
  document.frm.JG25.value = document.frm.NE06.value;
  document.frm.JG34.value = document.frm.NE06.value;
  document.frm.JG43.value = document.frm.NE06.value;
  document.frm.JG52.value = document.frm.NE06.value;
  document.frm.JG61.value = document.frm.NE06.value;
  document.frm.JG217.value = document.frm.NE06.value;
}

// *********************************************************
// Carrega o Primeiro Número NE06 nos campos JG16, JG43 e JG53
// *********************************************************
function carregaNE07() {
  document.frm.JG17.value = document.frm.NE07.value;
  document.frm.JG26.value = document.frm.NE07.value;
  document.frm.JG35.value = document.frm.NE07.value;
  document.frm.JG44.value = document.frm.NE07.value;
  document.frm.JG53.value = document.frm.NE07.value;
  document.frm.JG62.value = document.frm.NE07.value;
  document.frm.JG71.value = document.frm.NE07.value;
}

// *********************************************************
// Carrega o Primeiro Número NE08 nos campos JG25, JG62 e JG45
// *********************************************************
function carregaNE08() {
  document.frm.JG27.value = document.frm.NE08.value;
  document.frm.JG36.value = document.frm.NE08.value;
  document.frm.JG45.value = document.frm.NE08.value;
  document.frm.JG54.value = document.frm.NE08.value;
  document.frm.JG63.value = document.frm.NE08.value;
  document.frm.JG72.value = document.frm.NE08.value;
  document.frm.JG81.value = document.frm.NE08.value;
}

// *********************************************************
// Carrega o Primeiro Número NE09 nos campos JG26, JG46 e JG63
// *********************************************************
function carregaNE09() {
  document.frm.JG37.value = document.frm.NE09.value;
  document.frm.JG46.value = document.frm.NE09.value;
  document.frm.JG55.value = document.frm.NE09.value;
  document.frm.JG64.value = document.frm.NE09.value;
  document.frm.JG73.value = document.frm.NE09.value;
  document.frm.JG82.value = document.frm.NE09.value;
  document.frm.JG91.value = document.frm.NE09.value;
}

// *********************************************************
// Carrega o Primeiro Número NE10 nos campos JG34, JG54 e JG64
// *********************************************************
function carregaNE10() {
  document.frm.JG47.value = document.frm.NE10.value;
  document.frm.JG56.value = document.frm.NE10.value;
  document.frm.JG65.value = document.frm.NE10.value;
  document.frm.JG74.value = document.frm.NE10.value;
  document.frm.JG83.value = document.frm.NE10.value;
  document.frm.JG92.value = document.frm.NE10.value;
  document.frm.JG101.value = document.frm.NE10.value;
}

// *********************************************************
// Carrega o Primeiro Número NE11 nos campos JG35, JG55 e JG65
// *********************************************************
function carregaNE11() {
  document.frm.JG57.value = document.frm.NE11.value;
  document.frm.JG66.value = document.frm.NE11.value;
  document.frm.JG75.value = document.frm.NE11.value;
  document.frm.JG84.value = document.frm.NE11.value;
  document.frm.JG93.value = document.frm.NE11.value;
  document.frm.JG102.value = document.frm.NE11.value;
  document.frm.JG111.value = document.frm.NE11.value;
}

// *********************************************************
// Carrega o Primeiro Número NE12 nos campos JG36, JG56 e JG66
// *********************************************************
function carregaNE12() {
  document.frm.JG67.value = document.frm.NE12.value;
  document.frm.JG76.value = document.frm.NE12.value;
  document.frm.JG85.value = document.frm.NE12.value;
  document.frm.JG94.value = document.frm.NE12.value;
  document.frm.JG103.value = document.frm.NE12.value;
  document.frm.JG112.value = document.frm.NE12.value;
  document.frm.JG121.value = document.frm.NE12.value;
}

// *********************************************************
// Carrega o Primeiro Número NE12 nos campos JG36, JG56 e JG66
// *********************************************************
function carregaNE13() {
  document.frm.JG77.value = document.frm.NE13.value;
  document.frm.JG86.value = document.frm.NE13.value;
  document.frm.JG95.value = document.frm.NE13.value;
  document.frm.JG104.value = document.frm.NE13.value;
  document.frm.JG113.value = document.frm.NE13.value;
  document.frm.JG122.value = document.frm.NE13.value;
  document.frm.JG131.value = document.frm.NE13.value;
}

// *********************************************************
// Carrega o Primeiro Número NE14
// *********************************************************
function carregaNE14() {
  document.frm.JG87.value = document.frm.NE14.value;
  document.frm.JG96.value = document.frm.NE14.value;
  document.frm.JG105.value = document.frm.NE14.value;
  document.frm.JG114.value = document.frm.NE14.value;
  document.frm.JG123.value = document.frm.NE14.value;
  document.frm.JG132.value = document.frm.NE14.value;
  document.frm.JG141.value = document.frm.NE14.value;
}

// *********************************************************
// Carrega o Primeiro Número NE15
// *********************************************************
function carregaNE15() {
  document.frm.JG97.value = document.frm.NE15.value;
  document.frm.JG106.value = document.frm.NE15.value;
  document.frm.JG115.value = document.frm.NE15.value;
  document.frm.JG124.value = document.frm.NE15.value;
  document.frm.JG133.value = document.frm.NE15.value;
  document.frm.JG142.value = document.frm.NE15.value;
  document.frm.JG151.value = document.frm.NE15.value;
}

// *********************************************************
// Carrega o Primeiro Número NE16
// *********************************************************
function carregaNE16() {
  document.frm.JG107.value = document.frm.NE16.value;
  document.frm.JG116.value = document.frm.NE16.value;
  document.frm.JG125.value = document.frm.NE16.value;
  document.frm.JG134.value = document.frm.NE16.value;
  document.frm.JG143.value = document.frm.NE16.value;
  document.frm.JG152.value = document.frm.NE16.value;
  document.frm.JG161.value = document.frm.NE16.value;
}

// *********************************************************
// Carrega o Primeiro Número NE12 nos campos JG67, JG56 e JG27
// *********************************************************
function carregaNE17() {
  document.frm.JG117.value = document.frm.NE17.value;
  document.frm.JG126.value = document.frm.NE17.value;
  document.frm.JG135.value = document.frm.NE17.value;
  document.frm.JG144.value = document.frm.NE17.value;
  document.frm.JG153.value = document.frm.NE17.value;
  document.frm.JG162.value = document.frm.NE17.value;
  document.frm.JG171.value = document.frm.NE17.value;
}

// *********************************************************
// Carrega o Primeiro Número NE18
// *********************************************************
function carregaNE18() {
  document.frm.JG127.value = document.frm.NE18.value;
  document.frm.JG136.value = document.frm.NE18.value;
  document.frm.JG145.value = document.frm.NE18.value;
  document.frm.JG154.value = document.frm.NE18.value;
  document.frm.JG163.value = document.frm.NE18.value;
  document.frm.JG172.value = document.frm.NE18.value;
  document.frm.JG181.value = document.frm.NE18.value;
}

// *********************************************************
// Carrega o Primeiro Número NE19
// *********************************************************
function carregaNE19() {
  document.frm.JG137.value = document.frm.NE19.value;
  document.frm.JG146.value = document.frm.NE19.value;
  document.frm.JG155.value = document.frm.NE19.value;
  document.frm.JG164.value = document.frm.NE19.value;
  document.frm.JG173.value = document.frm.NE19.value;
  document.frm.JG182.value = document.frm.NE19.value;
  document.frm.JG191.value = document.frm.NE19.value;
}

// *********************************************************
// Carrega o Primeiro Número NE20
// *********************************************************
function carregaNE20() {
  document.frm.JG147.value = document.frm.NE20.value;
  document.frm.JG156.value = document.frm.NE20.value;
  document.frm.JG165.value = document.frm.NE20.value;
  document.frm.JG174.value = document.frm.NE20.value;
  document.frm.JG183.value = document.frm.NE20.value;
  document.frm.JG192.value = document.frm.NE20.value;
  document.frm.JG201.value = document.frm.NE20.value;
}

// *********************************************************
// Carrega o Primeiro Número NE21
// *********************************************************
function carregaNE21() {
  document.frm.JG157.value = document.frm.NE21.value;
  document.frm.JG166.value = document.frm.NE21.value;
  document.frm.JG175.value = document.frm.NE21.value;
  document.frm.JG184.value = document.frm.NE21.value;
  document.frm.JG193.value = document.frm.NE21.value;
  document.frm.JG202.value = document.frm.NE21.value;
  document.frm.JG211.value = document.frm.NE21.value;
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
  var total15;
  var total16;
  var total17;
  var total18;
  var total19;
  var total20;
  var total21;

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

  total07 =
    parseFloat(0 + document.frm.JG71.value) +
    parseFloat(0 + document.frm.JG72.value) +
    parseFloat(0 + document.frm.JG73.value) +
    parseFloat(0 + document.frm.JG74.value) +
    parseFloat(0 + document.frm.JG75.value) +
    parseFloat(0 + document.frm.JG76.value) +
    parseFloat(0 + document.frm.JG77.value);

  total08 =
    parseFloat(0 + document.frm.JG81.value) +
    parseFloat(0 + document.frm.JG82.value) +
    parseFloat(0 + document.frm.JG83.value) +
    parseFloat(0 + document.frm.JG84.value) +
    parseFloat(0 + document.frm.JG85.value) +
    parseFloat(0 + document.frm.JG86.value) +
    parseFloat(0 + document.frm.JG87.value);

  total09 =
    parseFloat(0 + document.frm.JG91.value) +
    parseFloat(0 + document.frm.JG92.value) +
    parseFloat(0 + document.frm.JG93.value) +
    parseFloat(0 + document.frm.JG94.value) +
    parseFloat(0 + document.frm.JG95.value) +
    parseFloat(0 + document.frm.JG96.value) +
    parseFloat(0 + document.frm.JG97.value);

  total10 =
    parseFloat(0 + document.frm.JG101.value) +
    parseFloat(0 + document.frm.JG102.value) +
    parseFloat(0 + document.frm.JG103.value) +
    parseFloat(0 + document.frm.JG104.value) +
    parseFloat(0 + document.frm.JG105.value) +
    parseFloat(0 + document.frm.JG106.value) +
    parseFloat(0 + document.frm.JG107.value);

  total11 =
    parseFloat(0 + document.frm.JG111.value) +
    parseFloat(0 + document.frm.JG112.value) +
    parseFloat(0 + document.frm.JG113.value) +
    parseFloat(0 + document.frm.JG114.value) +
    parseFloat(0 + document.frm.JG115.value) +
    parseFloat(0 + document.frm.JG116.value) +
    parseFloat(0 + document.frm.JG117.value);

  total12 =
    parseFloat(0 + document.frm.JG121.value) +
    parseFloat(0 + document.frm.JG122.value) +
    parseFloat(0 + document.frm.JG123.value) +
    parseFloat(0 + document.frm.JG124.value) +
    parseFloat(0 + document.frm.JG125.value) +
    parseFloat(0 + document.frm.JG126.value) +
    parseFloat(0 + document.frm.JG127.value);

  total13 =
    parseFloat(0 + document.frm.JG131.value) +
    parseFloat(0 + document.frm.JG132.value) +
    parseFloat(0 + document.frm.JG133.value) +
    parseFloat(0 + document.frm.JG134.value) +
    parseFloat(0 + document.frm.JG135.value) +
    parseFloat(0 + document.frm.JG136.value) +
    parseFloat(0 + document.frm.JG137.value);

  total14 =
    parseFloat(0 + document.frm.JG141.value) +
    parseFloat(0 + document.frm.JG142.value) +
    parseFloat(0 + document.frm.JG143.value) +
    parseFloat(0 + document.frm.JG144.value) +
    parseFloat(0 + document.frm.JG145.value) +
    parseFloat(0 + document.frm.JG146.value) +
    parseFloat(0 + document.frm.JG147.value);

  total15 =
    parseFloat(0 + document.frm.JG151.value) +
    parseFloat(0 + document.frm.JG152.value) +
    parseFloat(0 + document.frm.JG153.value) +
    parseFloat(0 + document.frm.JG154.value) +
    parseFloat(0 + document.frm.JG155.value) +
    parseFloat(0 + document.frm.JG156.value) +
    parseFloat(0 + document.frm.JG157.value);

  total16 =
    parseFloat(0 + document.frm.JG161.value) +
    parseFloat(0 + document.frm.JG162.value) +
    parseFloat(0 + document.frm.JG163.value) +
    parseFloat(0 + document.frm.JG164.value) +
    parseFloat(0 + document.frm.JG165.value) +
    parseFloat(0 + document.frm.JG166.value) +
    parseFloat(0 + document.frm.JG167.value);

  total17 =
    parseFloat(0 + document.frm.JG171.value) +
    parseFloat(0 + document.frm.JG172.value) +
    parseFloat(0 + document.frm.JG173.value) +
    parseFloat(0 + document.frm.JG174.value) +
    parseFloat(0 + document.frm.JG175.value) +
    parseFloat(0 + document.frm.JG176.value) +
    parseFloat(0 + document.frm.JG177.value);

  total18 =
    parseFloat(0 + document.frm.JG181.value) +
    parseFloat(0 + document.frm.JG182.value) +
    parseFloat(0 + document.frm.JG183.value) +
    parseFloat(0 + document.frm.JG184.value) +
    parseFloat(0 + document.frm.JG185.value) +
    parseFloat(0 + document.frm.JG186.value) +
    parseFloat(0 + document.frm.JG187.value);

  total19 =
    parseFloat(0 + document.frm.JG191.value) +
    parseFloat(0 + document.frm.JG192.value) +
    parseFloat(0 + document.frm.JG193.value) +
    parseFloat(0 + document.frm.JG194.value) +
    parseFloat(0 + document.frm.JG195.value) +
    parseFloat(0 + document.frm.JG196.value) +
    parseFloat(0 + document.frm.JG197.value);

  total20 =
    parseFloat(0 + document.frm.JG201.value) +
    parseFloat(0 + document.frm.JG202.value) +
    parseFloat(0 + document.frm.JG203.value) +
    parseFloat(0 + document.frm.JG204.value) +
    parseFloat(0 + document.frm.JG205.value) +
    parseFloat(0 + document.frm.JG206.value) +
    parseFloat(0 + document.frm.JG207.value);

  total21 =
    parseFloat(0 + document.frm.JG211.value) +
    parseFloat(0 + document.frm.JG212.value) +
    parseFloat(0 + document.frm.JG213.value) +
    parseFloat(0 + document.frm.JG214.value) +
    parseFloat(0 + document.frm.JG215.value) +
    parseFloat(0 + document.frm.JG216.value) +
    parseFloat(0 + document.frm.JG217.value);

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
  document.frm.SOMA15.value = total15;

  document.frm.SOMA16.value = total16;
  document.frm.SOMA17.value = total17;
  document.frm.SOMA18.value = total18;
  document.frm.SOMA19.value = total19;
  document.frm.SOMA20.value = total20;

  document.frm.SOMA21.value = total21;
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

  var jogosArray07 = [
    document.frm.JG71.value,
    document.frm.JG72.value,
    document.frm.JG73.value,
    document.frm.JG74.value,
    document.frm.JG75.value,
    document.frm.JG76.value,
    document.frm.JG77.value,
  ]; // OK

  var jogosArray08 = [
    document.frm.JG81.value,
    document.frm.JG82.value,
    document.frm.JG83.value,
    document.frm.JG84.value,
    document.frm.JG85.value,
    document.frm.JG86.value,
    document.frm.JG87.value,
  ]; // OK

  var jogosArray09 = [
    document.frm.JG91.value,
    document.frm.JG92.value,
    document.frm.JG93.value,
    document.frm.JG94.value,
    document.frm.JG95.value,
    document.frm.JG96.value,
    document.frm.JG97.value,
  ]; // OK

  var jogosArray10 = [
    document.frm.JG101.value,
    document.frm.JG102.value,
    document.frm.JG103.value,
    document.frm.JG104.value,
    document.frm.JG105.value,
    document.frm.JG106.value,
    document.frm.JG107.value,
  ]; // OK

  var jogosArray11 = [
    document.frm.JG111.value,
    document.frm.JG112.value,
    document.frm.JG113.value,
    document.frm.JG114.value,
    document.frm.JG115.value,
    document.frm.JG116.value,
    document.frm.JG117.value,
  ]; // OK

  var jogosArray12 = [
    document.frm.JG121.value,
    document.frm.JG122.value,
    document.frm.JG123.value,
    document.frm.JG124.value,
    document.frm.JG125.value,
    document.frm.JG126.value,
    document.frm.JG127.value,
  ]; // OK

  var jogosArray13 = [
    document.frm.JG131.value,
    document.frm.JG132.value,
    document.frm.JG133.value,
    document.frm.JG134.value,
    document.frm.JG135.value,
    document.frm.JG136.value,
    document.frm.JG137.value,
  ]; // OK

  var jogosArray14 = [
    document.frm.JG141.value,
    document.frm.JG142.value,
    document.frm.JG143.value,
    document.frm.JG144.value,
    document.frm.JG145.value,
    document.frm.JG146.value,
    document.frm.JG147.value,
  ]; // OK

  var jogosArray15 = [
    document.frm.JG151.value,
    document.frm.JG152.value,
    document.frm.JG153.value,
    document.frm.JG154.value,
    document.frm.JG155.value,
    document.frm.JG156.value,
    document.frm.JG157.value,
  ]; // OK

  var jogosArray16 = [
    document.frm.JG161.value,
    document.frm.JG162.value,
    document.frm.JG163.value,
    document.frm.JG164.value,
    document.frm.JG165.value,
    document.frm.JG166.value,
    document.frm.JG167.value,
  ]; // OK

  var jogosArray17 = [
    document.frm.JG171.value,
    document.frm.JG172.value,
    document.frm.JG173.value,
    document.frm.JG174.value,
    document.frm.JG175.value,
    document.frm.JG176.value,
    document.frm.JG177.value,
  ]; // OK

  var jogosArray18 = [
    document.frm.JG181.value,
    document.frm.JG182.value,
    document.frm.JG183.value,
    document.frm.JG184.value,
    document.frm.JG185.value,
    document.frm.JG186.value,
    document.frm.JG187.value,
  ]; // OK

  var jogosArray19 = [
    document.frm.JG191.value,
    document.frm.JG192.value,
    document.frm.JG193.value,
    document.frm.JG194.value,
    document.frm.JG195.value,
    document.frm.JG196.value,
    document.frm.JG197.value,
  ]; // OK

  var jogosArray20 = [
    document.frm.JG201.value,
    document.frm.JG202.value,
    document.frm.JG203.value,
    document.frm.JG204.value,
    document.frm.JG205.value,
    document.frm.JG206.value,
    document.frm.JG207.value,
  ]; // OK

  var jogosArray21 = [
    document.frm.JG211.value,
    document.frm.JG212.value,
    document.frm.JG213.value,
    document.frm.JG214.value,
    document.frm.JG215.value,
    document.frm.JG216.value,
    document.frm.JG217.value,
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
    "\n Jogo 07 : " +
    jogosArray07.sort() +
    "  =  " +
    document.frm.SOMA07.value +
    "\n Jogo 08 : " +
    jogosArray08.sort() +
    "  =  " +
    document.frm.SOMA08.value +
    "\n Jogo 09 : " +
    jogosArray09.sort() +
    "  =  " +
    document.frm.SOMA09.value +
    "\n Jogo 10 : " +
    jogosArray10.sort() +
    "  =  " +
    document.frm.SOMA10.value +
    "\n Jogo 11 : " +
    jogosArray11.sort() +
    "  =  " +
    document.frm.SOMA11.value +
    "\n Jogo 12 : " +
    jogosArray12.sort() +
    "  =  " +
    document.frm.SOMA12.value +
    "\n Jogo 13 : " +
    jogosArray13.sort() +
    "  =  " +
    document.frm.SOMA13.value +
    "\n Jogo 14 : " +
    jogosArray14.sort() +
    "  =  " +
    document.frm.SOMA14.value +
    "\n Jogo 15 : " +
    jogosArray15.sort() +
    "  =  " +
    document.frm.SOMA15.value +
    "\n Jogo 16 : " +
    jogosArray16.sort() +
    "  =  " +
    document.frm.SOMA16.value +
    "\n Jogo 17 : " +
    jogosArray17.sort() +
    "  =  " +
    document.frm.SOMA17.value +
    "\n Jogo 18 : " +
    jogosArray18.sort() +
    "  =  " +
    document.frm.SOMA18.value +
    "\n Jogo 19 : " +
    jogosArray19.sort() +
    "  =  " +
    document.frm.SOMA19.value +
    "\n Jogo 20 : " +
    jogosArray20.sort() +
    "  =  " +
    document.frm.SOMA20.value +
    "\n Jogo 21 : " +
    jogosArray21.sort() +
    "  =  " +
    document.frm.SOMA21.value +
    "\n\n";

  /* Chama a função de mostraJogos */
  mostraJogos(escreveJogos);
}
