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
  document.frm.JG0801.value = document.frm.NE01.value;
  document.frm.JG0901.value = document.frm.NE01.value;
  document.frm.JG1001.value = document.frm.NE01.value;
  document.frm.JG1101.value = document.frm.NE01.value;
  document.frm.JG1201.value = document.frm.NE01.value;
  document.frm.JG1301.value = document.frm.NE01.value;
  document.frm.JG1501.value = document.frm.NE01.value;
  document.frm.JG1401.value = document.frm.NE01.value;
  document.frm.JG1601.value = document.frm.NE01.value;
  document.frm.JG1701.value = document.frm.NE01.value;
  document.frm.JG1801.value = document.frm.NE01.value;
  document.frm.JG1901.value = document.frm.NE01.value;
  document.frm.JG2001.value = document.frm.NE01.value;
  document.frm.JG2101.value = document.frm.NE01.value;
  document.frm.JG2201.value = document.frm.NE01.value;
  document.frm.JG2301.value = document.frm.NE01.value;
  document.frm.JG2401.value = document.frm.NE01.value;
  document.frm.JG2501.value = document.frm.NE01.value;
  document.frm.JG2601.value = document.frm.NE01.value;
  document.frm.JG2701.value = document.frm.NE01.value;
  document.frm.JG2801.value = document.frm.NE01.value;
  document.frm.JG2901.value = document.frm.NE01.value;
  document.frm.JG7601.value = document.frm.NE01.value;
  document.frm.JG7701.value = document.frm.NE01.value;
  document.frm.JG7801.value = document.frm.NE01.value;
  document.frm.JG7901.value = document.frm.NE01.value;
  document.frm.JG8001.value = document.frm.NE01.value;
  document.frm.JG8201.value = document.frm.NE01.value;
}

// *********************************************************
// Carrega o Primeiro Número NE02 nos campos JG0102, JG0202 e JG0302
// *********************************************************
function carregaNE02() {
  document.frm.JG0102.value = document.frm.NE02.value;
  document.frm.JG0202.value = document.frm.NE02.value;
  document.frm.JG0302.value = document.frm.NE02.value;
  document.frm.JG0402.value = document.frm.NE02.value;
  document.frm.JG0502.value = document.frm.NE02.value;
  document.frm.JG0602.value = document.frm.NE02.value;
  document.frm.JG0702.value = document.frm.NE02.value;
  document.frm.JG0802.value = document.frm.NE02.value;
  document.frm.JG0902.value = document.frm.NE02.value;
  document.frm.JG1002.value = document.frm.NE02.value;
  document.frm.JG1102.value = document.frm.NE02.value;
  document.frm.JG1202.value = document.frm.NE02.value;
  document.frm.JG1302.value = document.frm.NE02.value;

  document.frm.JG3001.value = document.frm.NE02.value;
  document.frm.JG3101.value = document.frm.NE02.value;
  document.frm.JG3201.value = document.frm.NE02.value;
  document.frm.JG3301.value = document.frm.NE02.value;
  document.frm.JG3401.value = document.frm.NE02.value;
  document.frm.JG3501.value = document.frm.NE02.value;
  document.frm.JG3601.value = document.frm.NE02.value;
  document.frm.JG3701.value = document.frm.NE02.value;
  document.frm.JG3801.value = document.frm.NE02.value;
  document.frm.JG3901.value = document.frm.NE02.value;
  document.frm.JG4001.value = document.frm.NE02.value;
  document.frm.JG4101.value = document.frm.NE02.value;
  document.frm.JG4201.value = document.frm.NE02.value;
  document.frm.JG4301.value = document.frm.NE02.value;
  document.frm.JG4401.value = document.frm.NE02.value;
  document.frm.JG4501.value = document.frm.NE02.value;
  document.frm.JG4601.value = document.frm.NE02.value;
  document.frm.JG4701.value = document.frm.NE02.value;
  document.frm.JG4801.value = document.frm.NE02.value;
  document.frm.JG4901.value = document.frm.NE02.value;
  document.frm.JG5001.value = document.frm.NE02.value;
  document.frm.JG5101.value = document.frm.NE02.value;
  document.frm.JG5201.value = document.frm.NE02.value;
  document.frm.JG5301.value = document.frm.NE02.value;
  document.frm.JG8202.value = document.frm.NE02.value;
}

// *********************************************************
// Carrega o Primeiro Número NE03 nos campos JG0103, JG0203 e JG0303
// *********************************************************
function carregaNE03() {
  document.frm.JG0103.value = document.frm.NE03.value;
  document.frm.JG0203.value = document.frm.NE03.value;
  document.frm.JG0303.value = document.frm.NE03.value;
  document.frm.JG0403.value = document.frm.NE03.value;
  document.frm.JG1303.value = document.frm.NE03.value;
  document.frm.JG1402.value = document.frm.NE03.value;
  document.frm.JG1502.value = document.frm.NE03.value;
  document.frm.JG1602.value = document.frm.NE03.value;
  document.frm.JG1702.value = document.frm.NE03.value;
  document.frm.JG1802.value = document.frm.NE03.value;
  document.frm.JG1902.value = document.frm.NE03.value;
  document.frm.JG2002.value = document.frm.NE03.value;
  document.frm.JG2102.value = document.frm.NE03.value;
  document.frm.JG2202.value = document.frm.NE03.value;
  document.frm.JG2802.value = document.frm.NE03.value;
  document.frm.JG3002.value = document.frm.NE03.value;
  document.frm.JG3102.value = document.frm.NE03.value;
  document.frm.JG3202.value = document.frm.NE03.value;
  document.frm.JG3302.value = document.frm.NE03.value;
  document.frm.JG3402.value = document.frm.NE03.value;
  document.frm.JG3502.value = document.frm.NE03.value;
  document.frm.JG3602.value = document.frm.NE03.value;
  document.frm.JG3702.value = document.frm.NE03.value;
  document.frm.JG3802.value = document.frm.NE03.value;
  document.frm.JG3902.value = document.frm.NE03.value;
  document.frm.JG4002.value = document.frm.NE03.value;
  document.frm.JG5401.value = document.frm.NE03.value;
  document.frm.JG5501.value = document.frm.NE03.value;
  document.frm.JG5601.value = document.frm.NE03.value;
  document.frm.JG5701.value = document.frm.NE03.value;
  document.frm.JG5801.value = document.frm.NE03.value;
  document.frm.JG5901.value = document.frm.NE03.value;
  document.frm.JG6001.value = document.frm.NE03.value;
  document.frm.JG6101.value = document.frm.NE03.value;
  document.frm.JG6201.value = document.frm.NE03.value;
  document.frm.JG6301.value = document.frm.NE03.value;
  document.frm.JG6401.value = document.frm.NE03.value;
  document.frm.JG6501.value = document.frm.NE03.value;
  document.frm.JG7602.value = document.frm.NE03.value;
  document.frm.JG8101.value = document.frm.NE03.value;
}

// *********************************************************
// Carrega o Primeiro Número NE04 nos campos JG0104, JG0304 e JG0305
// *********************************************************
function carregaNE04() {
  document.frm.JG0104.value = document.frm.NE04.value;
  document.frm.JG0503.value = document.frm.NE04.value;
  document.frm.JG0603.value = document.frm.NE04.value;
  document.frm.JG0703.value = document.frm.NE04.value;
  document.frm.JG1403.value = document.frm.NE04.value;
  document.frm.JG1503.value = document.frm.NE04.value;
  document.frm.JG1603.value = document.frm.NE04.value;
  document.frm.JG1903.value = document.frm.NE04.value;
  document.frm.JG2302.value = document.frm.NE04.value;
  document.frm.JG2402.value = document.frm.NE04.value;
  document.frm.JG3003.value = document.frm.NE04.value;
  document.frm.JG3103.value = document.frm.NE04.value;
  document.frm.JG3203.value = document.frm.NE04.value;
  document.frm.JG3403.value = document.frm.NE04.value;
  document.frm.JG3503.value = document.frm.NE04.value;
  document.frm.JG3903.value = document.frm.NE04.value;
  document.frm.JG4102.value = document.frm.NE04.value;
  document.frm.JG4202.value = document.frm.NE04.value;
  document.frm.JG4302.value = document.frm.NE04.value;
  document.frm.JG4402.value = document.frm.NE04.value;
  document.frm.JG4502.value = document.frm.NE04.value;
  document.frm.JG4602.value = document.frm.NE04.value;
  document.frm.JG5402.value = document.frm.NE04.value;
  document.frm.JG5502.value = document.frm.NE04.value;
  document.frm.JG5302.value = document.frm.NE04.value;
  document.frm.JG5602.value = document.frm.NE04.value;
  document.frm.JG5702.value = document.frm.NE04.value;
  document.frm.JG5802.value = document.frm.NE04.value;
  document.frm.JG5902.value = document.frm.NE04.value;
  document.frm.JG6601.value = document.frm.NE04.value;
  document.frm.JG6701.value = document.frm.NE04.value;
  document.frm.JG6801.value = document.frm.NE04.value;
  document.frm.JG6901.value = document.frm.NE04.value;
  document.frm.JG7001.value = document.frm.NE04.value;
  document.frm.JG7101.value = document.frm.NE04.value;
  document.frm.JG7201.value = document.frm.NE04.value;
  document.frm.JG7702.value = document.frm.NE04.value;
  document.frm.JG7802.value = document.frm.NE04.value;
  document.frm.JG8102.value = document.frm.NE04.value;
}

// *********************************************************
// Carrega o Primeiro Número NE05 nos campos
// *********************************************************
function carregaNE05() {
  document.frm.JG0105.value = document.frm.NE05.value;
  document.frm.JG0404.value = document.frm.NE05.value;
  document.frm.JG0504.value = document.frm.NE05.value;
  document.frm.JG0803.value = document.frm.NE05.value;
  document.frm.JG0903.value = document.frm.NE05.value;
  document.frm.JG1404.value = document.frm.NE05.value;
  document.frm.JG1703.value = document.frm.NE05.value;
  document.frm.JG1803.value = document.frm.NE05.value;
  document.frm.JG1904.value = document.frm.NE05.value;
  document.frm.JG2303.value = document.frm.NE05.value;
  document.frm.JG2403.value = document.frm.NE05.value;
  document.frm.JG2502.value = document.frm.NE05.value;
  document.frm.JG2602.value = document.frm.NE05.value;
  document.frm.JG3004.value = document.frm.NE05.value;
  document.frm.JG3303.value = document.frm.NE05.value;
  document.frm.JG3403.value = document.frm.NE05.value;
  document.frm.JG3504.value = document.frm.NE05.value;
  document.frm.JG4103.value = document.frm.NE05.value;
  document.frm.JG4203.value = document.frm.NE05.value;
  document.frm.JG4702.value = document.frm.NE05.value;
  document.frm.JG4802.value = document.frm.NE05.value;
  document.frm.JG4902.value = document.frm.NE05.value;
  document.frm.JG5002.value = document.frm.NE05.value;
  document.frm.JG5102.value = document.frm.NE05.value;
  document.frm.JG5403.value = document.frm.NE05.value;
  document.frm.JG5503.value = document.frm.NE05.value;
  document.frm.JG6002.value = document.frm.NE05.value;
  document.frm.JG6102.value = document.frm.NE05.value;
  document.frm.JG6202.value = document.frm.NE05.value;
  document.frm.JG6302.value = document.frm.NE05.value;
  document.frm.JG6602.value = document.frm.NE05.value;
  document.frm.JG6702.value = document.frm.NE05.value;
  document.frm.JG6802.value = document.frm.NE05.value;
  document.frm.JG6902.value = document.frm.NE05.value;
  document.frm.JG7202.value = document.frm.NE05.value;
  document.frm.JG7301.value = document.frm.NE05.value;
  document.frm.JG7401.value = document.frm.NE05.value;
  document.frm.JG7902.value = document.frm.NE05.value;
  document.frm.JG8002.value = document.frm.NE05.value;
  document.frm.JG8103.value = document.frm.NE05.value;
}

// *********************************************************
// Carrega o Primeiro Número NE06 nos campos JG0106, JG0403 e JG0503
// *********************************************************
function carregaNE06() {
  document.frm.JG0204.value = document.frm.NE06.value;
  document.frm.JG0505.value = document.frm.NE06.value;
  document.frm.JG0804.value = document.frm.NE06.value;
  document.frm.JG1003.value = document.frm.NE06.value;
  document.frm.JG1103.value = document.frm.NE06.value;
  document.frm.JG1405.value = document.frm.NE06.value;
  document.frm.JG1704.value = document.frm.NE06.value;
  document.frm.JG2003.value = document.frm.NE06.value;
  document.frm.JG2103.value = document.frm.NE06.value;
  document.frm.JG2304.value = document.frm.NE06.value;
  document.frm.JG2503.value = document.frm.NE06.value;
  document.frm.JG2603.value = document.frm.NE06.value;
  document.frm.JG2702.value = document.frm.NE06.value;
  document.frm.JG2803.value = document.frm.NE06.value;
  document.frm.JG3005.value = document.frm.NE06.value;
  document.frm.JG3304.value = document.frm.NE06.value;
  document.frm.JG3603.value = document.frm.NE06.value;
  document.frm.JG3703.value = document.frm.NE06.value;
  document.frm.JG4104.value = document.frm.NE06.value;
  document.frm.JG4303.value = document.frm.NE06.value;
  document.frm.JG4403.value = document.frm.NE06.value;
  document.frm.JG4703.value = document.frm.NE06.value;
  document.frm.JG4803.value = document.frm.NE06.value;
  document.frm.JG5003.value = document.frm.NE06.value;
  document.frm.JG5202.value = document.frm.NE06.value;
  document.frm.JG5404.value = document.frm.NE06.value;
  document.frm.JG5603.value = document.frm.NE06.value;
  document.frm.JG5703.value = document.frm.NE06.value;
  document.frm.JG5903.value = document.frm.NE06.value;
  document.frm.JG6003.value = document.frm.NE06.value;
  document.frm.JG6103.value = document.frm.NE06.value;
  document.frm.JG6303.value = document.frm.NE06.value;
  document.frm.JG6402.value = document.frm.NE06.value;
  document.frm.JG6603.value = document.frm.NE06.value;
  document.frm.JG6703.value = document.frm.NE06.value;
  document.frm.JG7002.value = document.frm.NE06.value;
  document.frm.JG7203.value = document.frm.NE06.value;
  document.frm.JG7302.value = document.frm.NE06.value;
  document.frm.JG7501.value = document.frm.NE06.value;
  document.frm.JG7603.value = document.frm.NE06.value;
  document.frm.JG7803.value = document.frm.NE06.value;
  document.frm.JG8003.value = document.frm.NE06.value;
}

// *********************************************************
// Carrega o Primeiro Número NE06 nos campos JG0106, JG0403 e JG0503
// *********************************************************
function carregaNE07() {
  document.frm.JG0205.value = document.frm.NE07.value;
  document.frm.JG0604.value = document.frm.NE07.value;
  document.frm.JG0805.value = document.frm.NE07.value;
  document.frm.JG1004.value = document.frm.NE07.value;
  document.frm.JG1203.value = document.frm.NE07.value;
  document.frm.JG1304.value = document.frm.NE07.value;
  document.frm.JG1504.value = document.frm.NE07.value;
  document.frm.JG1705.value = document.frm.NE07.value;
  document.frm.JG2004.value = document.frm.NE07.value;
  document.frm.JG2203.value = document.frm.NE07.value;
  document.frm.JG2305.value = document.frm.NE07.value;
  document.frm.JG2504.value = document.frm.NE07.value;
  document.frm.JG2703.value = document.frm.NE07.value;
  document.frm.JG2804.value = document.frm.NE07.value;
  document.frm.JG2902.value = document.frm.NE07.value;
  document.frm.JG3104.value = document.frm.NE07.value;
  document.frm.JG3305.value = document.frm.NE07.value;
  document.frm.JG3604.value = document.frm.NE07.value;
  document.frm.JG3803.value = document.frm.NE07.value;
  document.frm.JG3904.value = document.frm.NE07.value;
  document.frm.JG4105.value = document.frm.NE07.value;
  document.frm.JG4304.value = document.frm.NE07.value;
  document.frm.JG4503.value = document.frm.NE07.value;
  document.frm.JG4704.value = document.frm.NE07.value;
  document.frm.JG4903.value = document.frm.NE07.value;
  document.frm.JG5004.value = document.frm.NE07.value;
  document.frm.JG5203.value = document.frm.NE07.value;
  document.frm.JG5302.value = document.frm.NE07.value;
  document.frm.JG5405.value = document.frm.NE07.value;
  document.frm.JG5604.value = document.frm.NE07.value;
  document.frm.JG5803.value = document.frm.NE07.value;
  document.frm.JG5904.value = document.frm.NE07.value;
  document.frm.JG6004.value = document.frm.NE07.value;
  document.frm.JG6203.value = document.frm.NE07.value;
  document.frm.JG6304.value = document.frm.NE07.value;
  document.frm.JG6403.value = document.frm.NE07.value;
  document.frm.JG6502.value = document.frm.NE07.value;
  document.frm.JG6604.value = document.frm.NE07.value;
  document.frm.JG6803.value = document.frm.NE07.value;
  document.frm.JG7003.value = document.frm.NE07.value;
  document.frm.JG7102.value = document.frm.NE07.value;
  document.frm.JG7204.value = document.frm.NE07.value;
  document.frm.JG7303.value = document.frm.NE07.value;
  document.frm.JG7402.value = document.frm.NE07.value;
  document.frm.JG7502.value = document.frm.NE07.value;
  document.frm.JG7703.value = document.frm.NE07.value;
  document.frm.JG7903.value = document.frm.NE07.value;
}

// *********************************************************
// Carrega o Primeiro Número NE08 nos campos
// *********************************************************
function carregaNE08() {
  document.frm.JG0304.value = document.frm.NE08.value;
  document.frm.JG0605.value = document.frm.NE08.value;
  document.frm.JG0904.value = document.frm.NE08.value;
  document.frm.JG1005.value = document.frm.NE08.value;
  document.frm.JG1204.value = document.frm.NE08.value;
  document.frm.JG1505.value = document.frm.NE08.value;
  document.frm.JG1804.value = document.frm.NE08.value;
  document.frm.JG2005.value = document.frm.NE08.value;
  document.frm.JG2204.value = document.frm.NE08.value;
  document.frm.JG2404.value = document.frm.NE08.value;
  document.frm.JG2505.value = document.frm.NE08.value;
  document.frm.JG2704.value = document.frm.NE08.value;
  document.frm.JG2903.value = document.frm.NE08.value;
  document.frm.JG3105.value = document.frm.NE08.value;
  document.frm.JG3404.value = document.frm.NE08.value;
  document.frm.JG3605.value = document.frm.NE08.value;
  document.frm.JG3804.value = document.frm.NE08.value;
  document.frm.JG4003.value = document.frm.NE08.value;
  document.frm.JG4204.value = document.frm.NE08.value;
  document.frm.JG4305.value = document.frm.NE08.value;
  document.frm.JG4504.value = document.frm.NE08.value;
  document.frm.JG4603.value = document.frm.NE08.value;
  document.frm.JG4705.value = document.frm.NE08.value;
  document.frm.JG4904.value = document.frm.NE08.value;
  document.frm.JG5103.value = document.frm.NE08.value;
  document.frm.JG5204.value = document.frm.NE08.value;
  document.frm.JG5303.value = document.frm.NE08.value;
  document.frm.JG5504.value = document.frm.NE08.value;
  document.frm.JG5605.value = document.frm.NE08.value;
  document.frm.JG5804.value = document.frm.NE08.value;
  document.frm.JG6005.value = document.frm.NE08.value;
  document.frm.JG6204.value = document.frm.NE08.value;
  document.frm.JG6404.value = document.frm.NE08.value;
  document.frm.JG6503.value = document.frm.NE08.value;
  document.frm.JG6605.value = document.frm.NE08.value;
  document.frm.JG6804.value = document.frm.NE08.value;
  document.frm.JG6903.value = document.frm.NE08.value;
  document.frm.JG7004.value = document.frm.NE08.value;
  document.frm.JG7103.value = document.frm.NE08.value;
  document.frm.JG7304.value = document.frm.NE08.value;
  document.frm.JG7403.value = document.frm.NE08.value;
  document.frm.JG7503.value = document.frm.NE08.value;
  document.frm.JG7604.value = document.frm.NE08.value;
  document.frm.JG7804.value = document.frm.NE08.value;
  document.frm.JG8004.value = document.frm.NE08.value;
  document.frm.JG8104.value = document.frm.NE08.value;
  document.frm.JG8203.value = document.frm.NE08.value;
}

// *********************************************************
// Carrega o Primeiro Número NE09 nos campos JG26, JG046 e JG0603
// *********************************************************
function carregaNE09() {
  document.frm.JG0305.value = document.frm.NE09.value;
  document.frm.JG0704.value = document.frm.NE09.value;
  document.frm.JG0905.value = document.frm.NE09.value;
  document.frm.JG1104.value = document.frm.NE09.value;
  document.frm.JG1205.value = document.frm.NE09.value;
  document.frm.JG1604.value = document.frm.NE09.value;
  document.frm.JG1805.value = document.frm.NE09.value;
  document.frm.JG2104.value = document.frm.NE09.value;
  document.frm.JG2205.value = document.frm.NE09.value;
  document.frm.JG2405.value = document.frm.NE09.value;
  document.frm.JG2604.value = document.frm.NE09.value;
  document.frm.JG2705.value = document.frm.NE09.value;
  document.frm.JG2904.value = document.frm.NE09.value;
  document.frm.JG3204.value = document.frm.NE09.value;
  document.frm.JG3405.value = document.frm.NE09.value;
  document.frm.JG3704.value = document.frm.NE09.value;
  document.frm.JG3805.value = document.frm.NE09.value;
  document.frm.JG4004.value = document.frm.NE09.value;
  document.frm.JG4205.value = document.frm.NE09.value;
  document.frm.JG4404.value = document.frm.NE09.value;
  document.frm.JG4505.value = document.frm.NE09.value;
  document.frm.JG4604.value = document.frm.NE09.value;
  document.frm.JG4804.value = document.frm.NE09.value;
  document.frm.JG4905.value = document.frm.NE09.value;
  document.frm.JG5104.value = document.frm.NE09.value;
  document.frm.JG5205.value = document.frm.NE09.value;
  document.frm.JG5304.value = document.frm.NE09.value;
  document.frm.JG5505.value = document.frm.NE09.value;
  document.frm.JG5704.value = document.frm.NE09.value;
  document.frm.JG5805.value = document.frm.NE09.value;
  document.frm.JG6104.value = document.frm.NE09.value;
  document.frm.JG6205.value = document.frm.NE09.value;
  document.frm.JG6405.value = document.frm.NE09.value;
  document.frm.JG6504.value = document.frm.NE09.value;
  document.frm.JG6704.value = document.frm.NE09.value;
  document.frm.JG6805.value = document.frm.NE09.value;
  document.frm.JG6904.value = document.frm.NE09.value;
  document.frm.JG7005.value = document.frm.NE09.value;
  document.frm.JG7104.value = document.frm.NE09.value;
  document.frm.JG7305.value = document.frm.NE09.value;
  document.frm.JG7404.value = document.frm.NE09.value;
  document.frm.JG7504.value = document.frm.NE09.value;
  document.frm.JG7704.value = document.frm.NE09.value;
  document.frm.JG7904.value = document.frm.NE09.value;
  document.frm.JG8204.value = document.frm.NE09.value;
}

// *********************************************************
// Carrega o Primeiro Número NE10
// *********************************************************
function carregaNE10() {
  document.frm.JG0405.value = document.frm.NE10.value;
  document.frm.JG0705.value = document.frm.NE10.value;
  document.frm.JG1105.value = document.frm.NE10.value;
  document.frm.JG1305.value = document.frm.NE10.value;
  document.frm.JG1605.value = document.frm.NE10.value;
  document.frm.JG1905.value = document.frm.NE10.value;
  document.frm.JG2105.value = document.frm.NE10.value;
  document.frm.JG2605.value = document.frm.NE10.value;
  document.frm.JG2805.value = document.frm.NE10.value;
  document.frm.JG2905.value = document.frm.NE10.value;
  document.frm.JG3205.value = document.frm.NE10.value;
  document.frm.JG3505.value = document.frm.NE10.value;
  document.frm.JG3705.value = document.frm.NE10.value;
  document.frm.JG3905.value = document.frm.NE10.value;
  document.frm.JG4005.value = document.frm.NE10.value;
  document.frm.JG4405.value = document.frm.NE10.value;
  document.frm.JG4605.value = document.frm.NE10.value;
  document.frm.JG4805.value = document.frm.NE10.value;
  document.frm.JG5005.value = document.frm.NE10.value;
  document.frm.JG5105.value = document.frm.NE10.value;
  document.frm.JG5305.value = document.frm.NE10.value;
  document.frm.JG5705.value = document.frm.NE10.value;
  document.frm.JG5905.value = document.frm.NE10.value;
  document.frm.JG6105.value = document.frm.NE10.value;
  document.frm.JG6305.value = document.frm.NE10.value;
  document.frm.JG6505.value = document.frm.NE10.value;
  document.frm.JG6705.value = document.frm.NE10.value;
  document.frm.JG6905.value = document.frm.NE10.value;
  document.frm.JG7105.value = document.frm.NE10.value;
  document.frm.JG7205.value = document.frm.NE10.value;
  document.frm.JG7405.value = document.frm.NE10.value;
  document.frm.JG7505.value = document.frm.NE10.value;
  document.frm.JG7605.value = document.frm.NE10.value;
  document.frm.JG7705.value = document.frm.NE10.value;
  document.frm.JG7805.value = document.frm.NE10.value;
  document.frm.JG7905.value = document.frm.NE10.value;
  document.frm.JG8005.value = document.frm.NE10.value;
  document.frm.JG8105.value = document.frm.NE10.value;
  document.frm.JG8205.value = document.frm.NE10.value;
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
  var total22;
  var total23;
  var total24;
  var total25;
  var total26;
  var total27;
  var total28;
  var total29;
  var total30;

  var total31;
  var total32;
  var total33;
  var total34;
  var total35;
  var total36;
  var total37;
  var total38;
  var total39;
  var total40;

  var total41;
  var total42;
  var total43;
  var total44;
  var total45;
  var total46;
  var total47;
  var total48;
  var total49;
  var total50;

  var total51;
  var total52;
  var total53;
  var total54;
  var total55;
  var total56;
  var total57;
  var total58;
  var total59;
  var total60;

  var total61;
  var total62;
  var total63;
  var total64;
  var total65;
  var total66;
  var total67;
  var total68;
  var total69;
  var total70;

  var total71;
  var total72;
  var total73;
  var total74;
  var total75;

  var total76;
  var total77;
  var total78;
  var total79;
  var total80;
  var total81;
  var total82;

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
  total15 =
    parseFloat(0 + document.frm.JG1501.value) +
    parseFloat(0 + document.frm.JG1502.value) +
    parseFloat(0 + document.frm.JG1503.value) +
    parseFloat(0 + document.frm.JG1504.value) +
    parseFloat(0 + document.frm.JG1505.value);
  total16 =
    parseFloat(0 + document.frm.JG1601.value) +
    parseFloat(0 + document.frm.JG1602.value) +
    parseFloat(0 + document.frm.JG1603.value) +
    parseFloat(0 + document.frm.JG1604.value) +
    parseFloat(0 + document.frm.JG1605.value);
  total17 =
    parseFloat(0 + document.frm.JG1701.value) +
    parseFloat(0 + document.frm.JG1702.value) +
    parseFloat(0 + document.frm.JG1703.value) +
    parseFloat(0 + document.frm.JG1704.value) +
    parseFloat(0 + document.frm.JG1705.value);
  total18 =
    parseFloat(0 + document.frm.JG1801.value) +
    parseFloat(0 + document.frm.JG1802.value) +
    parseFloat(0 + document.frm.JG1803.value) +
    parseFloat(0 + document.frm.JG1804.value) +
    parseFloat(0 + document.frm.JG1805.value);
  total19 =
    parseFloat(0 + document.frm.JG1901.value) +
    parseFloat(0 + document.frm.JG1902.value) +
    parseFloat(0 + document.frm.JG1903.value) +
    parseFloat(0 + document.frm.JG1904.value) +
    parseFloat(0 + document.frm.JG1905.value);
  total20 =
    parseFloat(0 + document.frm.JG2001.value) +
    parseFloat(0 + document.frm.JG2002.value) +
    parseFloat(0 + document.frm.JG2003.value) +
    parseFloat(0 + document.frm.JG2004.value) +
    parseFloat(0 + document.frm.JG2005.value);
  total21 =
    parseFloat(0 + document.frm.JG2101.value) +
    parseFloat(0 + document.frm.JG2102.value) +
    parseFloat(0 + document.frm.JG2103.value) +
    parseFloat(0 + document.frm.JG2104.value) +
    parseFloat(0 + document.frm.JG2105.value);
  total22 =
    parseFloat(0 + document.frm.JG2201.value) +
    parseFloat(0 + document.frm.JG2202.value) +
    parseFloat(0 + document.frm.JG2203.value) +
    parseFloat(0 + document.frm.JG2204.value) +
    parseFloat(0 + document.frm.JG2205.value);
  total23 =
    parseFloat(0 + document.frm.JG2301.value) +
    parseFloat(0 + document.frm.JG2302.value) +
    parseFloat(0 + document.frm.JG2303.value) +
    parseFloat(0 + document.frm.JG2304.value) +
    parseFloat(0 + document.frm.JG2305.value);
  total24 =
    parseFloat(0 + document.frm.JG2401.value) +
    parseFloat(0 + document.frm.JG2402.value) +
    parseFloat(0 + document.frm.JG2403.value) +
    parseFloat(0 + document.frm.JG2404.value) +
    parseFloat(0 + document.frm.JG2405.value);
  total25 =
    parseFloat(0 + document.frm.JG2501.value) +
    parseFloat(0 + document.frm.JG2502.value) +
    parseFloat(0 + document.frm.JG2503.value) +
    parseFloat(0 + document.frm.JG2504.value) +
    parseFloat(0 + document.frm.JG2505.value);
  total26 =
    parseFloat(0 + document.frm.JG2601.value) +
    parseFloat(0 + document.frm.JG2602.value) +
    parseFloat(0 + document.frm.JG2603.value) +
    parseFloat(0 + document.frm.JG2604.value) +
    parseFloat(0 + document.frm.JG2605.value);
  total27 =
    parseFloat(0 + document.frm.JG2701.value) +
    parseFloat(0 + document.frm.JG2702.value) +
    parseFloat(0 + document.frm.JG2703.value) +
    parseFloat(0 + document.frm.JG2704.value) +
    parseFloat(0 + document.frm.JG2705.value);
  total28 =
    parseFloat(0 + document.frm.JG2801.value) +
    parseFloat(0 + document.frm.JG2802.value) +
    parseFloat(0 + document.frm.JG2803.value) +
    parseFloat(0 + document.frm.JG2804.value) +
    parseFloat(0 + document.frm.JG2805.value);
  total29 =
    parseFloat(0 + document.frm.JG2901.value) +
    parseFloat(0 + document.frm.JG2902.value) +
    parseFloat(0 + document.frm.JG2903.value) +
    parseFloat(0 + document.frm.JG2904.value) +
    parseFloat(0 + document.frm.JG2905.value);
  total30 =
    parseFloat(0 + document.frm.JG3001.value) +
    parseFloat(0 + document.frm.JG3002.value) +
    parseFloat(0 + document.frm.JG3003.value) +
    parseFloat(0 + document.frm.JG3004.value) +
    parseFloat(0 + document.frm.JG3005.value);
  total31 =
    parseFloat(0 + document.frm.JG3101.value) +
    parseFloat(0 + document.frm.JG3102.value) +
    parseFloat(0 + document.frm.JG3103.value) +
    parseFloat(0 + document.frm.JG3104.value) +
    parseFloat(0 + document.frm.JG3105.value);
  total32 =
    parseFloat(0 + document.frm.JG3201.value) +
    parseFloat(0 + document.frm.JG3202.value) +
    parseFloat(0 + document.frm.JG3203.value) +
    parseFloat(0 + document.frm.JG3204.value) +
    parseFloat(0 + document.frm.JG3205.value);
  total33 =
    parseFloat(0 + document.frm.JG3301.value) +
    parseFloat(0 + document.frm.JG3302.value) +
    parseFloat(0 + document.frm.JG3303.value) +
    parseFloat(0 + document.frm.JG3304.value) +
    parseFloat(0 + document.frm.JG3305.value);
  total34 =
    parseFloat(0 + document.frm.JG3401.value) +
    parseFloat(0 + document.frm.JG3402.value) +
    parseFloat(0 + document.frm.JG3403.value) +
    parseFloat(0 + document.frm.JG3404.value) +
    parseFloat(0 + document.frm.JG3405.value);
  total35 =
    parseFloat(0 + document.frm.JG3501.value) +
    parseFloat(0 + document.frm.JG3502.value) +
    parseFloat(0 + document.frm.JG3503.value) +
    parseFloat(0 + document.frm.JG3504.value) +
    parseFloat(0 + document.frm.JG3505.value);
  total36 =
    parseFloat(0 + document.frm.JG3601.value) +
    parseFloat(0 + document.frm.JG3602.value) +
    parseFloat(0 + document.frm.JG3603.value) +
    parseFloat(0 + document.frm.JG3604.value) +
    parseFloat(0 + document.frm.JG3605.value);
  total37 =
    parseFloat(0 + document.frm.JG3701.value) +
    parseFloat(0 + document.frm.JG3702.value) +
    parseFloat(0 + document.frm.JG3703.value) +
    parseFloat(0 + document.frm.JG3704.value) +
    parseFloat(0 + document.frm.JG3705.value);
  total38 =
    parseFloat(0 + document.frm.JG3801.value) +
    parseFloat(0 + document.frm.JG3802.value) +
    parseFloat(0 + document.frm.JG3803.value) +
    parseFloat(0 + document.frm.JG3804.value) +
    parseFloat(0 + document.frm.JG3805.value);
  total39 =
    parseFloat(0 + document.frm.JG3901.value) +
    parseFloat(0 + document.frm.JG3902.value) +
    parseFloat(0 + document.frm.JG3903.value) +
    parseFloat(0 + document.frm.JG3904.value) +
    parseFloat(0 + document.frm.JG3905.value);
  total40 =
    parseFloat(0 + document.frm.JG4001.value) +
    parseFloat(0 + document.frm.JG4002.value) +
    parseFloat(0 + document.frm.JG4003.value) +
    parseFloat(0 + document.frm.JG4004.value) +
    parseFloat(0 + document.frm.JG4005.value);
  total41 =
    parseFloat(0 + document.frm.JG4101.value) +
    parseFloat(0 + document.frm.JG4102.value) +
    parseFloat(0 + document.frm.JG4103.value) +
    parseFloat(0 + document.frm.JG4104.value) +
    parseFloat(0 + document.frm.JG4105.value);
  total42 =
    parseFloat(0 + document.frm.JG4201.value) +
    parseFloat(0 + document.frm.JG4202.value) +
    parseFloat(0 + document.frm.JG4203.value) +
    parseFloat(0 + document.frm.JG4204.value) +
    parseFloat(0 + document.frm.JG4205.value);
  total43 =
    parseFloat(0 + document.frm.JG4301.value) +
    parseFloat(0 + document.frm.JG4302.value) +
    parseFloat(0 + document.frm.JG4303.value) +
    parseFloat(0 + document.frm.JG4304.value) +
    parseFloat(0 + document.frm.JG4305.value);
  total44 =
    parseFloat(0 + document.frm.JG4401.value) +
    parseFloat(0 + document.frm.JG4402.value) +
    parseFloat(0 + document.frm.JG4403.value) +
    parseFloat(0 + document.frm.JG4404.value) +
    parseFloat(0 + document.frm.JG4405.value);
  total45 =
    parseFloat(0 + document.frm.JG4501.value) +
    parseFloat(0 + document.frm.JG4502.value) +
    parseFloat(0 + document.frm.JG4503.value) +
    parseFloat(0 + document.frm.JG4504.value) +
    parseFloat(0 + document.frm.JG4505.value);
  total46 =
    parseFloat(0 + document.frm.JG4601.value) +
    parseFloat(0 + document.frm.JG4602.value) +
    parseFloat(0 + document.frm.JG4603.value) +
    parseFloat(0 + document.frm.JG4604.value) +
    parseFloat(0 + document.frm.JG4605.value);
  total47 =
    parseFloat(0 + document.frm.JG4701.value) +
    parseFloat(0 + document.frm.JG4702.value) +
    parseFloat(0 + document.frm.JG4703.value) +
    parseFloat(0 + document.frm.JG4704.value) +
    parseFloat(0 + document.frm.JG4705.value);
  total48 =
    parseFloat(0 + document.frm.JG4801.value) +
    parseFloat(0 + document.frm.JG4802.value) +
    parseFloat(0 + document.frm.JG4803.value) +
    parseFloat(0 + document.frm.JG4804.value) +
    parseFloat(0 + document.frm.JG4805.value);
  total49 =
    parseFloat(0 + document.frm.JG4901.value) +
    parseFloat(0 + document.frm.JG4902.value) +
    parseFloat(0 + document.frm.JG4903.value) +
    parseFloat(0 + document.frm.JG4904.value) +
    parseFloat(0 + document.frm.JG4905.value);
  total50 =
    parseFloat(0 + document.frm.JG5001.value) +
    parseFloat(0 + document.frm.JG5002.value) +
    parseFloat(0 + document.frm.JG5003.value) +
    parseFloat(0 + document.frm.JG5004.value) +
    parseFloat(0 + document.frm.JG5005.value);

  total51 =
    parseFloat(0 + document.frm.JG5101.value) +
    parseFloat(0 + document.frm.JG5102.value) +
    parseFloat(0 + document.frm.JG5103.value) +
    parseFloat(0 + document.frm.JG5104.value) +
    parseFloat(0 + document.frm.JG5105.value);
  total52 =
    parseFloat(0 + document.frm.JG5201.value) +
    parseFloat(0 + document.frm.JG5202.value) +
    parseFloat(0 + document.frm.JG5203.value) +
    parseFloat(0 + document.frm.JG5204.value) +
    parseFloat(0 + document.frm.JG5205.value);
  total53 =
    parseFloat(0 + document.frm.JG5301.value) +
    parseFloat(0 + document.frm.JG5302.value) +
    parseFloat(0 + document.frm.JG5303.value) +
    parseFloat(0 + document.frm.JG5304.value) +
    parseFloat(0 + document.frm.JG5305.value);
  total54 =
    parseFloat(0 + document.frm.JG5401.value) +
    parseFloat(0 + document.frm.JG5402.value) +
    parseFloat(0 + document.frm.JG5403.value) +
    parseFloat(0 + document.frm.JG5404.value) +
    parseFloat(0 + document.frm.JG5405.value);
  total55 =
    parseFloat(0 + document.frm.JG5501.value) +
    parseFloat(0 + document.frm.JG5502.value) +
    parseFloat(0 + document.frm.JG5503.value) +
    parseFloat(0 + document.frm.JG5504.value) +
    parseFloat(0 + document.frm.JG5505.value);
  total56 =
    parseFloat(0 + document.frm.JG5601.value) +
    parseFloat(0 + document.frm.JG5602.value) +
    parseFloat(0 + document.frm.JG5603.value) +
    parseFloat(0 + document.frm.JG5604.value) +
    parseFloat(0 + document.frm.JG5605.value);
  total57 =
    parseFloat(0 + document.frm.JG5701.value) +
    parseFloat(0 + document.frm.JG5702.value) +
    parseFloat(0 + document.frm.JG5703.value) +
    parseFloat(0 + document.frm.JG5704.value) +
    parseFloat(0 + document.frm.JG5705.value);
  total58 =
    parseFloat(0 + document.frm.JG5801.value) +
    parseFloat(0 + document.frm.JG5802.value) +
    parseFloat(0 + document.frm.JG5803.value) +
    parseFloat(0 + document.frm.JG5804.value) +
    parseFloat(0 + document.frm.JG5805.value);
  total59 =
    parseFloat(0 + document.frm.JG5901.value) +
    parseFloat(0 + document.frm.JG5902.value) +
    parseFloat(0 + document.frm.JG5903.value) +
    parseFloat(0 + document.frm.JG5904.value) +
    parseFloat(0 + document.frm.JG5905.value);
  total60 =
    parseFloat(0 + document.frm.JG6001.value) +
    parseFloat(0 + document.frm.JG6002.value) +
    parseFloat(0 + document.frm.JG6003.value) +
    parseFloat(0 + document.frm.JG6004.value) +
    parseFloat(0 + document.frm.JG6005.value);

  total61 =
    parseFloat(0 + document.frm.JG6101.value) +
    parseFloat(0 + document.frm.JG6102.value) +
    parseFloat(0 + document.frm.JG6103.value) +
    parseFloat(0 + document.frm.JG6104.value) +
    parseFloat(0 + document.frm.JG6105.value);
  total62 =
    parseFloat(0 + document.frm.JG6201.value) +
    parseFloat(0 + document.frm.JG6202.value) +
    parseFloat(0 + document.frm.JG6203.value) +
    parseFloat(0 + document.frm.JG6204.value) +
    parseFloat(0 + document.frm.JG6205.value);
  total63 =
    parseFloat(0 + document.frm.JG6301.value) +
    parseFloat(0 + document.frm.JG6302.value) +
    parseFloat(0 + document.frm.JG6303.value) +
    parseFloat(0 + document.frm.JG6304.value) +
    parseFloat(0 + document.frm.JG6305.value);
  total64 =
    parseFloat(0 + document.frm.JG6401.value) +
    parseFloat(0 + document.frm.JG6402.value) +
    parseFloat(0 + document.frm.JG6403.value) +
    parseFloat(0 + document.frm.JG6404.value) +
    parseFloat(0 + document.frm.JG6405.value);
  total65 =
    parseFloat(0 + document.frm.JG6501.value) +
    parseFloat(0 + document.frm.JG6502.value) +
    parseFloat(0 + document.frm.JG6503.value) +
    parseFloat(0 + document.frm.JG6504.value) +
    parseFloat(0 + document.frm.JG6505.value);
  total66 =
    parseFloat(0 + document.frm.JG6601.value) +
    parseFloat(0 + document.frm.JG6602.value) +
    parseFloat(0 + document.frm.JG6603.value) +
    parseFloat(0 + document.frm.JG6604.value) +
    parseFloat(0 + document.frm.JG6605.value);
  total67 =
    parseFloat(0 + document.frm.JG6701.value) +
    parseFloat(0 + document.frm.JG6702.value) +
    parseFloat(0 + document.frm.JG6703.value) +
    parseFloat(0 + document.frm.JG6704.value) +
    parseFloat(0 + document.frm.JG6705.value);
  total68 =
    parseFloat(0 + document.frm.JG6801.value) +
    parseFloat(0 + document.frm.JG6802.value) +
    parseFloat(0 + document.frm.JG6803.value) +
    parseFloat(0 + document.frm.JG6804.value) +
    parseFloat(0 + document.frm.JG6805.value);
  total69 =
    parseFloat(0 + document.frm.JG6901.value) +
    parseFloat(0 + document.frm.JG6902.value) +
    parseFloat(0 + document.frm.JG6903.value) +
    parseFloat(0 + document.frm.JG6904.value) +
    parseFloat(0 + document.frm.JG6905.value);
  total70 =
    parseFloat(0 + document.frm.JG7001.value) +
    parseFloat(0 + document.frm.JG7002.value) +
    parseFloat(0 + document.frm.JG7003.value) +
    parseFloat(0 + document.frm.JG7004.value) +
    parseFloat(0 + document.frm.JG7005.value);

  total71 =
    parseFloat(0 + document.frm.JG7101.value) +
    parseFloat(0 + document.frm.JG7102.value) +
    parseFloat(0 + document.frm.JG7103.value) +
    parseFloat(0 + document.frm.JG7104.value) +
    parseFloat(0 + document.frm.JG7105.value);
  total72 =
    parseFloat(0 + document.frm.JG7201.value) +
    parseFloat(0 + document.frm.JG7202.value) +
    parseFloat(0 + document.frm.JG7203.value) +
    parseFloat(0 + document.frm.JG7204.value) +
    parseFloat(0 + document.frm.JG7205.value);
  total73 =
    parseFloat(0 + document.frm.JG7301.value) +
    parseFloat(0 + document.frm.JG7302.value) +
    parseFloat(0 + document.frm.JG7303.value) +
    parseFloat(0 + document.frm.JG7304.value) +
    parseFloat(0 + document.frm.JG7305.value);
  total74 =
    parseFloat(0 + document.frm.JG7401.value) +
    parseFloat(0 + document.frm.JG7402.value) +
    parseFloat(0 + document.frm.JG7403.value) +
    parseFloat(0 + document.frm.JG7404.value) +
    parseFloat(0 + document.frm.JG7405.value);
  total75 =
    parseFloat(0 + document.frm.JG7501.value) +
    parseFloat(0 + document.frm.JG7502.value) +
    parseFloat(0 + document.frm.JG7503.value) +
    parseFloat(0 + document.frm.JG7504.value) +
    parseFloat(0 + document.frm.JG7505.value);

  total76 =
    parseFloat(0 + document.frm.JG7601.value) +
    parseFloat(0 + document.frm.JG7602.value) +
    parseFloat(0 + document.frm.JG7603.value) +
    parseFloat(0 + document.frm.JG7604.value) +
    parseFloat(0 + document.frm.JG7605.value);
  total77 =
    parseFloat(0 + document.frm.JG7701.value) +
    parseFloat(0 + document.frm.JG7702.value) +
    parseFloat(0 + document.frm.JG7703.value) +
    parseFloat(0 + document.frm.JG7704.value) +
    parseFloat(0 + document.frm.JG7705.value);
  total78 =
    parseFloat(0 + document.frm.JG7801.value) +
    parseFloat(0 + document.frm.JG7802.value) +
    parseFloat(0 + document.frm.JG7803.value) +
    parseFloat(0 + document.frm.JG7804.value) +
    parseFloat(0 + document.frm.JG7805.value);
  total79 =
    parseFloat(0 + document.frm.JG7901.value) +
    parseFloat(0 + document.frm.JG7902.value) +
    parseFloat(0 + document.frm.JG7903.value) +
    parseFloat(0 + document.frm.JG7904.value) +
    parseFloat(0 + document.frm.JG7905.value);
  total80 =
    parseFloat(0 + document.frm.JG8001.value) +
    parseFloat(0 + document.frm.JG8002.value) +
    parseFloat(0 + document.frm.JG8003.value) +
    parseFloat(0 + document.frm.JG8004.value) +
    parseFloat(0 + document.frm.JG8005.value);

  total81 =
    parseFloat(0 + document.frm.JG8101.value) +
    parseFloat(0 + document.frm.JG8102.value) +
    parseFloat(0 + document.frm.JG8103.value) +
    parseFloat(0 + document.frm.JG8104.value) +
    parseFloat(0 + document.frm.JG8105.value);
  total82 =
    parseFloat(0 + document.frm.JG8201.value) +
    parseFloat(0 + document.frm.JG8202.value) +
    parseFloat(0 + document.frm.JG8203.value) +
    parseFloat(0 + document.frm.JG8204.value) +
    parseFloat(0 + document.frm.JG8205.value);

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
  document.frm.SOMA22.value = total22;
  document.frm.SOMA23.value = total23;
  document.frm.SOMA24.value = total24;
  document.frm.SOMA25.value = total25;

  document.frm.SOMA26.value = total26;
  document.frm.SOMA27.value = total27;
  document.frm.SOMA28.value = total28;
  document.frm.SOMA29.value = total29;
  document.frm.SOMA30.value = total30;

  document.frm.SOMA31.value = total31;
  document.frm.SOMA32.value = total32;
  document.frm.SOMA33.value = total33;
  document.frm.SOMA34.value = total34;
  document.frm.SOMA35.value = total35;

  document.frm.SOMA36.value = total36;
  document.frm.SOMA37.value = total37;
  document.frm.SOMA38.value = total38;
  document.frm.SOMA39.value = total39;
  document.frm.SOMA40.value = total40;

  document.frm.SOMA41.value = total41;
  document.frm.SOMA42.value = total42;
  document.frm.SOMA43.value = total43;
  document.frm.SOMA44.value = total44;
  document.frm.SOMA45.value = total45;

  document.frm.SOMA46.value = total46;
  document.frm.SOMA47.value = total47;
  document.frm.SOMA48.value = total48;
  document.frm.SOMA49.value = total49;
  document.frm.SOMA50.value = total50;

  document.frm.SOMA51.value = total51;
  document.frm.SOMA52.value = total52;
  document.frm.SOMA53.value = total53;
  document.frm.SOMA54.value = total54;
  document.frm.SOMA55.value = total55;

  document.frm.SOMA56.value = total56;
  document.frm.SOMA57.value = total57;
  document.frm.SOMA58.value = total58;
  document.frm.SOMA59.value = total59;
  document.frm.SOMA60.value = total60;

  document.frm.SOMA61.value = total61;
  document.frm.SOMA62.value = total62;
  document.frm.SOMA63.value = total63;
  document.frm.SOMA64.value = total64;
  document.frm.SOMA65.value = total65;

  document.frm.SOMA66.value = total66;
  document.frm.SOMA67.value = total67;
  document.frm.SOMA68.value = total68;
  document.frm.SOMA69.value = total69;
  document.frm.SOMA70.value = total70;

  document.frm.SOMA71.value = total71;
  document.frm.SOMA72.value = total72;
  document.frm.SOMA73.value = total73;
  document.frm.SOMA74.value = total74;
  document.frm.SOMA75.value = total75;

  document.frm.SOMA76.value = total76;
  document.frm.SOMA77.value = total77;
  document.frm.SOMA78.value = total78;
  document.frm.SOMA79.value = total79;
  document.frm.SOMA80.value = total80;

  document.frm.SOMA81.value = total81;
  document.frm.SOMA82.value = total82;
}

// *********************************************************
// Muda a cor do botão igual ao numero digitado
// *********************************************************
function numero_escolhido(nr) {
  if (1 == nr) {
    document.frm.nr01.style.background = "#030f74";
  }
  if (2 == nr) {
    document.frm.nr02.style.background = "#030f74";
  }
  if (3 == nr) {
    document.frm.nr03.style.background = "#030f74";
  }
  if (4 == nr) {
    document.frm.nr04.style.background = "#030f74";
  }
  if (5 == nr) {
    document.frm.nr05.style.background = "#030f74";
  }

  if (6 == nr) {
    document.frm.nr06.style.background = "#030f74";
  }
  if (7 == nr) {
    document.frm.nr07.style.background = "#030f74";
  }
  if (8 == nr) {
    document.frm.nr08.style.background = "#030f74";
  }
  if (9 == nr) {
    document.frm.nr09.style.background = "#030f74";
  }
  if (10 == nr) {
    document.frm.nr10.style.background = "#030f74";
  }

  if (11 == nr) {
    document.frm.nr11.style.background = "#030f74";
  }
  if (12 == nr) {
    document.frm.nr12.style.background = "#030f74";
  }
  if (13 == nr) {
    document.frm.nr13.style.background = "#030f74";
  }
  if (14 == nr) {
    document.frm.nr14.style.background = "#030f74";
  }
  if (15 == nr) {
    document.frm.nr15.style.background = "#030f74";
  }

  if (16 == nr) {
    document.frm.nr16.style.background = "#030f74";
  }
  if (17 == nr) {
    document.frm.nr17.style.background = "#030f74";
  }
  if (18 == nr) {
    document.frm.nr18.style.background = "#030f74";
  }
  if (19 == nr) {
    document.frm.nr19.style.background = "#030f74";
  }
  if (20 == nr) {
    document.frm.nr20.style.background = "#030f74";
  }

  if (21 == nr) {
    document.frm.nr21.style.background = "#030f74";
  }
  if (22 == nr) {
    document.frm.nr22.style.background = "#030f74";
  }
  if (23 == nr) {
    document.frm.nr23.style.background = "#030f74";
  }
  if (24 == nr) {
    document.frm.nr24.style.background = "#030f74";
  }
  if (25 == nr) {
    document.frm.nr25.style.background = "#030f74";
  }

  if (26 == nr) {
    document.frm.nr26.style.background = "#030f74";
  }
  if (27 == nr) {
    document.frm.nr27.style.background = "#030f74";
  }
  if (28 == nr) {
    document.frm.nr28.style.background = "#030f74";
  }
  if (29 == nr) {
    document.frm.nr29.style.background = "#030f74";
  }
  if (30 == nr) {
    document.frm.nr30.style.background = "#030f74";
  }

  if (31 == nr) {
    document.frm.nr31.style.background = "#030f74";
  }
  if (32 == nr) {
    document.frm.nr32.style.background = "#030f74";
  }
  if (33 == nr) {
    document.frm.nr33.style.background = "#030f74";
  }
  if (34 == nr) {
    document.frm.nr34.style.background = "#030f74";
  }
  if (35 == nr) {
    document.frm.nr35.style.background = "#030f74";
  }

  if (36 == nr) {
    document.frm.nr36.style.background = "#030f74";
  }
  if (37 == nr) {
    document.frm.nr37.style.background = "#030f74";
  }
  if (38 == nr) {
    document.frm.nr38.style.background = "#030f74";
  }
  if (39 == nr) {
    document.frm.nr39.style.background = "#030f74";
  }
  if (40 == nr) {
    document.frm.nr40.style.background = "#030f74";
  }

  if (41 == nr) {
    document.frm.nr41.style.background = "#030f74";
  }
  if (42 == nr) {
    document.frm.nr42.style.background = "#030f74";
  }
  if (43 == nr) {
    document.frm.nr43.style.background = "#030f74";
  }
  if (44 == nr) {
    document.frm.nr44.style.background = "#030f74";
  }
  if (45 == nr) {
    document.frm.nr45.style.background = "#030f74";
  }

  if (46 == nr) {
    document.frm.nr46.style.background = "#030f74";
  }
  if (47 == nr) {
    document.frm.nr47.style.background = "#030f74";
  }
  if (48 == nr) {
    document.frm.nr48.style.background = "#030f74";
  }
  if (49 == nr) {
    document.frm.nr49.style.background = "#030f74";
  }
  if (50 == nr) {
    document.frm.nr50.style.background = "#030f74";
  }

  if (51 == nr) {
    document.frm.nr51.style.background = "#030f74";
  }
  if (52 == nr) {
    document.frm.nr52.style.background = "#030f74";
  }
  if (53 == nr) {
    document.frm.nr53.style.background = "#030f74";
  }
  if (54 == nr) {
    document.frm.nr54.style.background = "#030f74";
  }
  if (55 == nr) {
    document.frm.nr55.style.background = "#030f74";
  }

  if (56 == nr) {
    document.frm.nr56.style.background = "#030f74";
  }
  if (57 == nr) {
    document.frm.nr57.style.background = "#030f74";
  }
  if (58 == nr) {
    document.frm.nr58.style.background = "#030f74";
  }
  if (59 == nr) {
    document.frm.nr59.style.background = "#030f74";
  }
  if (60 == nr) {
    document.frm.nr60.style.background = "#030f74";
  }

  if (61 == nr) {
    document.frm.nr61.style.background = "#030f74";
  }
  if (62 == nr) {
    document.frm.nr62.style.background = "#030f74";
  }
  if (63 == nr) {
    document.frm.nr63.style.background = "#030f74";
  }
  if (64 == nr) {
    document.frm.nr64.style.background = "#030f74";
  }
  if (65 == nr) {
    document.frm.nr65.style.background = "#030f74";
  }

  if (66 == nr) {
    document.frm.nr66.style.background = "#030f74";
  }
  if (67 == nr) {
    document.frm.nr67.style.background = "#030f74";
  }
  if (68 == nr) {
    document.frm.nr68.style.background = "#030f74";
  }
  if (69 == nr) {
    document.frm.nr69.style.background = "#030f74";
  }
  if (70 == nr) {
    document.frm.nr70.style.background = "#030f74";
  }

  if (71 == nr) {
    document.frm.nr71.style.background = "#030f74";
  }
  if (72 == nr) {
    document.frm.nr72.style.background = "#030f74";
  }
  if (73 == nr) {
    document.frm.nr73.style.background = "#030f74";
  }
  if (74 == nr) {
    document.frm.nr74.style.background = "#030f74";
  }
  if (75 == nr) {
    document.frm.nr75.style.background = "#030f74";
  }

  if (76 == nr) {
    document.frm.nr76.style.background = "#030f74";
  }
  if (77 == nr) {
    document.frm.nr77.style.background = "#030f74";
  }
  if (78 == nr) {
    document.frm.nr78.style.background = "#030f74";
  }
  if (79 == nr) {
    document.frm.nr79.style.background = "#030f74";
  }
  if (80 == nr) {
    document.frm.nr80.style.background = "#030f74";
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

  var jogosArray15 = [
    document.frm.JG1501.value,
    document.frm.JG1502.value,
    document.frm.JG1503.value,
    document.frm.JG1504.value,
    document.frm.JG1505.value,
  ]; // OK
  var jogosArray16 = [
    document.frm.JG1601.value,
    document.frm.JG1602.value,
    document.frm.JG1603.value,
    document.frm.JG1604.value,
    document.frm.JG1605.value,
  ]; // OK
  var jogosArray17 = [
    document.frm.JG1701.value,
    document.frm.JG1702.value,
    document.frm.JG1703.value,
    document.frm.JG1704.value,
    document.frm.JG1705.value,
  ]; // OK
  var jogosArray18 = [
    document.frm.JG1801.value,
    document.frm.JG1802.value,
    document.frm.JG1803.value,
    document.frm.JG1804.value,
    document.frm.JG1805.value,
  ]; // OK
  var jogosArray19 = [
    document.frm.JG1901.value,
    document.frm.JG1902.value,
    document.frm.JG1903.value,
    document.frm.JG1904.value,
    document.frm.JG1905.value,
  ]; // OK
  var jogosArray20 = [
    document.frm.JG2001.value,
    document.frm.JG2002.value,
    document.frm.JG2003.value,
    document.frm.JG2004.value,
    document.frm.JG2005.value,
  ]; // OK
  var jogosArray21 = [
    document.frm.JG2101.value,
    document.frm.JG2102.value,
    document.frm.JG2103.value,
    document.frm.JG2104.value,
    document.frm.JG2105.value,
  ]; // OK

  var jogosArray22 = [
    document.frm.JG2201.value,
    document.frm.JG2202.value,
    document.frm.JG2203.value,
    document.frm.JG2204.value,
    document.frm.JG2205.value,
  ]; // OK
  var jogosArray23 = [
    document.frm.JG2301.value,
    document.frm.JG2302.value,
    document.frm.JG2303.value,
    document.frm.JG2304.value,
    document.frm.JG2305.value,
  ]; // OK
  var jogosArray24 = [
    document.frm.JG2401.value,
    document.frm.JG2402.value,
    document.frm.JG2403.value,
    document.frm.JG2404.value,
    document.frm.JG2405.value,
  ]; // OK
  var jogosArray25 = [
    document.frm.JG2501.value,
    document.frm.JG2502.value,
    document.frm.JG2503.value,
    document.frm.JG2504.value,
    document.frm.JG2505.value,
  ]; // OK
  var jogosArray26 = [
    document.frm.JG2601.value,
    document.frm.JG2602.value,
    document.frm.JG2603.value,
    document.frm.JG2604.value,
    document.frm.JG2605.value,
  ]; // OK
  var jogosArray27 = [
    document.frm.JG2701.value,
    document.frm.JG2702.value,
    document.frm.JG2703.value,
    document.frm.JG2704.value,
    document.frm.JG2705.value,
  ]; // OK
  var jogosArray28 = [
    document.frm.JG2801.value,
    document.frm.JG2802.value,
    document.frm.JG2803.value,
    document.frm.JG2804.value,
    document.frm.JG2805.value,
  ]; // OK
  var jogosArray29 = [
    document.frm.JG2901.value,
    document.frm.JG2902.value,
    document.frm.JG2903.value,
    document.frm.JG2904.value,
    document.frm.JG2905.value,
  ]; // OK
  var jogosArray30 = [
    document.frm.JG3001.value,
    document.frm.JG3002.value,
    document.frm.JG3003.value,
    document.frm.JG3004.value,
    document.frm.JG3005.value,
  ]; // OK

  var jogosArray31 = [
    document.frm.JG3101.value,
    document.frm.JG3102.value,
    document.frm.JG3103.value,
    document.frm.JG3104.value,
    document.frm.JG3105.value,
  ]; // OK
  var jogosArray32 = [
    document.frm.JG3201.value,
    document.frm.JG3202.value,
    document.frm.JG3203.value,
    document.frm.JG3204.value,
    document.frm.JG3205.value,
  ]; // OK
  var jogosArray33 = [
    document.frm.JG3301.value,
    document.frm.JG3302.value,
    document.frm.JG3303.value,
    document.frm.JG3304.value,
    document.frm.JG3305.value,
  ]; // OK
  var jogosArray34 = [
    document.frm.JG3401.value,
    document.frm.JG3402.value,
    document.frm.JG3403.value,
    document.frm.JG3404.value,
    document.frm.JG3405.value,
  ]; // OK
  var jogosArray35 = [
    document.frm.JG3501.value,
    document.frm.JG3502.value,
    document.frm.JG3503.value,
    document.frm.JG3504.value,
    document.frm.JG3505.value,
  ]; // OK

  var jogosArray36 = [
    document.frm.JG3601.value,
    document.frm.JG3602.value,
    document.frm.JG3603.value,
    document.frm.JG3604.value,
    document.frm.JG3605.value,
  ]; // OK
  var jogosArray37 = [
    document.frm.JG3701.value,
    document.frm.JG3702.value,
    document.frm.JG3703.value,
    document.frm.JG3704.value,
    document.frm.JG3705.value,
  ]; // OK
  var jogosArray38 = [
    document.frm.JG3801.value,
    document.frm.JG3802.value,
    document.frm.JG3803.value,
    document.frm.JG3804.value,
    document.frm.JG3805.value,
  ]; // OK
  var jogosArray39 = [
    document.frm.JG3901.value,
    document.frm.JG3902.value,
    document.frm.JG3903.value,
    document.frm.JG3904.value,
    document.frm.JG3905.value,
  ]; // OK
  var jogosArray40 = [
    document.frm.JG4001.value,
    document.frm.JG4002.value,
    document.frm.JG4003.value,
    document.frm.JG4004.value,
    document.frm.JG4005.value,
  ]; // OK

  var jogosArray41 = [
    document.frm.JG4101.value,
    document.frm.JG4102.value,
    document.frm.JG4103.value,
    document.frm.JG4104.value,
    document.frm.JG4105.value,
  ]; // OK
  var jogosArray42 = [
    document.frm.JG4201.value,
    document.frm.JG4202.value,
    document.frm.JG4203.value,
    document.frm.JG4204.value,
    document.frm.JG4205.value,
  ]; // OK
  var jogosArray43 = [
    document.frm.JG4301.value,
    document.frm.JG4302.value,
    document.frm.JG4303.value,
    document.frm.JG4304.value,
    document.frm.JG4305.value,
  ]; // OK
  var jogosArray44 = [
    document.frm.JG4401.value,
    document.frm.JG4402.value,
    document.frm.JG4403.value,
    document.frm.JG4404.value,
    document.frm.JG4405.value,
  ]; // OK
  var jogosArray45 = [
    document.frm.JG4501.value,
    document.frm.JG4502.value,
    document.frm.JG4503.value,
    document.frm.JG4504.value,
    document.frm.JG4505.value,
  ]; // OK

  var jogosArray46 = [
    document.frm.JG4601.value,
    document.frm.JG4602.value,
    document.frm.JG4603.value,
    document.frm.JG4604.value,
    document.frm.JG4605.value,
  ]; // OK
  var jogosArray47 = [
    document.frm.JG4701.value,
    document.frm.JG4702.value,
    document.frm.JG4703.value,
    document.frm.JG4704.value,
    document.frm.JG4705.value,
  ]; // OK
  var jogosArray48 = [
    document.frm.JG4801.value,
    document.frm.JG4802.value,
    document.frm.JG4803.value,
    document.frm.JG4804.value,
    document.frm.JG4805.value,
  ]; // OK
  var jogosArray49 = [
    document.frm.JG4901.value,
    document.frm.JG4902.value,
    document.frm.JG4903.value,
    document.frm.JG4904.value,
    document.frm.JG4905.value,
  ]; // OK
  var jogosArray50 = [
    document.frm.JG5001.value,
    document.frm.JG5002.value,
    document.frm.JG5003.value,
    document.frm.JG5004.value,
    document.frm.JG5005.value,
  ]; // OK

  var jogosArray51 = [
    document.frm.JG5101.value,
    document.frm.JG5102.value,
    document.frm.JG5103.value,
    document.frm.JG5104.value,
    document.frm.JG5105.value,
  ]; // OK
  var jogosArray52 = [
    document.frm.JG5201.value,
    document.frm.JG5202.value,
    document.frm.JG5203.value,
    document.frm.JG5204.value,
    document.frm.JG5205.value,
  ]; // OK
  var jogosArray53 = [
    document.frm.JG5301.value,
    document.frm.JG5302.value,
    document.frm.JG5303.value,
    document.frm.JG5304.value,
    document.frm.JG5305.value,
  ]; // OK
  var jogosArray54 = [
    document.frm.JG5401.value,
    document.frm.JG5402.value,
    document.frm.JG5403.value,
    document.frm.JG5404.value,
    document.frm.JG5405.value,
  ]; // OK
  var jogosArray55 = [
    document.frm.JG5501.value,
    document.frm.JG5502.value,
    document.frm.JG5503.value,
    document.frm.JG5504.value,
    document.frm.JG5505.value,
  ]; // OK

  var jogosArray56 = [
    document.frm.JG5601.value,
    document.frm.JG5602.value,
    document.frm.JG5603.value,
    document.frm.JG5604.value,
    document.frm.JG5605.value,
  ]; // OK
  var jogosArray57 = [
    document.frm.JG5701.value,
    document.frm.JG5702.value,
    document.frm.JG5703.value,
    document.frm.JG5704.value,
    document.frm.JG5705.value,
  ]; // OK
  var jogosArray58 = [
    document.frm.JG5801.value,
    document.frm.JG5802.value,
    document.frm.JG5803.value,
    document.frm.JG5804.value,
    document.frm.JG5805.value,
  ]; // OK
  var jogosArray59 = [
    document.frm.JG5901.value,
    document.frm.JG5902.value,
    document.frm.JG5903.value,
    document.frm.JG5904.value,
    document.frm.JG5905.value,
  ]; // OK
  var jogosArray60 = [
    document.frm.JG6001.value,
    document.frm.JG6002.value,
    document.frm.JG6003.value,
    document.frm.JG6004.value,
    document.frm.JG6005.value,
  ]; // OK

  var jogosArray61 = [
    document.frm.JG6101.value,
    document.frm.JG6102.value,
    document.frm.JG6103.value,
    document.frm.JG6104.value,
    document.frm.JG6105.value,
  ]; // OK
  var jogosArray62 = [
    document.frm.JG6201.value,
    document.frm.JG6202.value,
    document.frm.JG6203.value,
    document.frm.JG6204.value,
    document.frm.JG6205.value,
  ]; // OK
  var jogosArray63 = [
    document.frm.JG6301.value,
    document.frm.JG6302.value,
    document.frm.JG6303.value,
    document.frm.JG6304.value,
    document.frm.JG6305.value,
  ]; // OK
  var jogosArray64 = [
    document.frm.JG6401.value,
    document.frm.JG6402.value,
    document.frm.JG6403.value,
    document.frm.JG6404.value,
    document.frm.JG6405.value,
  ]; // OK
  var jogosArray65 = [
    document.frm.JG6501.value,
    document.frm.JG6502.value,
    document.frm.JG6503.value,
    document.frm.JG6504.value,
    document.frm.JG6505.value,
  ]; // OK

  var jogosArray66 = [
    document.frm.JG6601.value,
    document.frm.JG6602.value,
    document.frm.JG6603.value,
    document.frm.JG6604.value,
    document.frm.JG6605.value,
  ]; // OK
  var jogosArray67 = [
    document.frm.JG6701.value,
    document.frm.JG6702.value,
    document.frm.JG6703.value,
    document.frm.JG6704.value,
    document.frm.JG6705.value,
  ]; // OK
  var jogosArray68 = [
    document.frm.JG6801.value,
    document.frm.JG6802.value,
    document.frm.JG6803.value,
    document.frm.JG6804.value,
    document.frm.JG6805.value,
  ]; // OK
  var jogosArray69 = [
    document.frm.JG6901.value,
    document.frm.JG6902.value,
    document.frm.JG6903.value,
    document.frm.JG6904.value,
    document.frm.JG6905.value,
  ]; // OK
  var jogosArray70 = [
    document.frm.JG7001.value,
    document.frm.JG7002.value,
    document.frm.JG7003.value,
    document.frm.JG7004.value,
    document.frm.JG7005.value,
  ]; // OK

  var jogosArray71 = [
    document.frm.JG7101.value,
    document.frm.JG7102.value,
    document.frm.JG7103.value,
    document.frm.JG7104.value,
    document.frm.JG7105.value,
  ]; // OK
  var jogosArray72 = [
    document.frm.JG7201.value,
    document.frm.JG7202.value,
    document.frm.JG7203.value,
    document.frm.JG7204.value,
    document.frm.JG7205.value,
  ]; // OK
  var jogosArray73 = [
    document.frm.JG7301.value,
    document.frm.JG7302.value,
    document.frm.JG7303.value,
    document.frm.JG7304.value,
    document.frm.JG7305.value,
  ]; // OK
  var jogosArray74 = [
    document.frm.JG7401.value,
    document.frm.JG7402.value,
    document.frm.JG7403.value,
    document.frm.JG7404.value,
    document.frm.JG7405.value,
  ]; // OK
  var jogosArray75 = [
    document.frm.JG7501.value,
    document.frm.JG7502.value,
    document.frm.JG7503.value,
    document.frm.JG7504.value,
    document.frm.JG7505.value,
  ]; // OK

  var jogosArray76 = [
    document.frm.JG7601.value,
    document.frm.JG7602.value,
    document.frm.JG7603.value,
    document.frm.JG7604.value,
    document.frm.JG7605.value,
  ]; // OK
  var jogosArray77 = [
    document.frm.JG7701.value,
    document.frm.JG7702.value,
    document.frm.JG7703.value,
    document.frm.JG7704.value,
    document.frm.JG7705.value,
  ]; // OK
  var jogosArray78 = [
    document.frm.JG7801.value,
    document.frm.JG7802.value,
    document.frm.JG7803.value,
    document.frm.JG7804.value,
    document.frm.JG7805.value,
  ]; // OK
  var jogosArray79 = [
    document.frm.JG7901.value,
    document.frm.JG7902.value,
    document.frm.JG7903.value,
    document.frm.JG7904.value,
    document.frm.JG7905.value,
  ]; // OK
  var jogosArray80 = [
    document.frm.JG8001.value,
    document.frm.JG8002.value,
    document.frm.JG8003.value,
    document.frm.JG8004.value,
    document.frm.JG8005.value,
  ]; // OK
  var jogosArray81 = [
    document.frm.JG8101.value,
    document.frm.JG8102.value,
    document.frm.JG8103.value,
    document.frm.JG8104.value,
    document.frm.JG8105.value,
  ]; // OK
  var jogosArray82 = [
    document.frm.JG8201.value,
    document.frm.JG8202.value,
    document.frm.JG8203.value,
    document.frm.JG8204.value,
    document.frm.JG8205.value,
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
  var soma15 = [document.frm.SOMA15.value];

  var soma16 = [document.frm.SOMA16.value];
  var soma17 = [document.frm.SOMA17.value];
  var soma18 = [document.frm.SOMA18.value];
  var soma19 = [document.frm.SOMA19.value];
  var soma20 = [document.frm.SOMA20.value];

  var soma21 = [document.frm.SOMA21.value];
  var soma22 = [document.frm.SOMA22.value];
  var soma23 = [document.frm.SOMA23.value];
  var soma24 = [document.frm.SOMA24.value];
  var soma25 = [document.frm.SOMA25.value];

  var soma26 = [document.frm.SOMA26.value];
  var soma27 = [document.frm.SOMA27.value];
  var soma28 = [document.frm.SOMA28.value];
  var soma29 = [document.frm.SOMA29.value];
  var soma30 = [document.frm.SOMA30.value];

  var soma31 = [document.frm.SOMA31.value];
  var soma32 = [document.frm.SOMA32.value];
  var soma33 = [document.frm.SOMA33.value];
  var soma34 = [document.frm.SOMA34.value];
  var soma35 = [document.frm.SOMA35.value];

  var soma36 = [document.frm.SOMA36.value];
  var soma37 = [document.frm.SOMA37.value];
  var soma38 = [document.frm.SOMA38.value];
  var soma39 = [document.frm.SOMA39.value];
  var soma40 = [document.frm.SOMA40.value];

  var soma41 = [document.frm.SOMA41.value];
  var soma42 = [document.frm.SOMA42.value];
  var soma43 = [document.frm.SOMA43.value];
  var soma44 = [document.frm.SOMA44.value];
  var soma45 = [document.frm.SOMA45.value];

  var soma46 = [document.frm.SOMA46.value];
  var soma47 = [document.frm.SOMA47.value];
  var soma48 = [document.frm.SOMA48.value];
  var soma49 = [document.frm.SOMA49.value];
  var soma50 = [document.frm.SOMA50.value];

  var soma51 = [document.frm.SOMA51.value];
  var soma52 = [document.frm.SOMA52.value];
  var soma53 = [document.frm.SOMA53.value];
  var soma54 = [document.frm.SOMA54.value];
  var soma55 = [document.frm.SOMA55.value];

  var soma56 = [document.frm.SOMA56.value];
  var soma57 = [document.frm.SOMA57.value];
  var soma58 = [document.frm.SOMA58.value];
  var soma59 = [document.frm.SOMA59.value];
  var soma60 = [document.frm.SOMA60.value];

  var soma61 = [document.frm.SOMA61.value];
  var soma62 = [document.frm.SOMA62.value];
  var soma63 = [document.frm.SOMA63.value];
  var soma64 = [document.frm.SOMA64.value];
  var soma65 = [document.frm.SOMA65.value];

  var soma66 = [document.frm.SOMA66.value];
  var soma67 = [document.frm.SOMA67.value];
  var soma68 = [document.frm.SOMA68.value];
  var soma69 = [document.frm.SOMA69.value];
  var soma70 = [document.frm.SOMA70.value];

  var soma71 = [document.frm.SOMA71.value];
  var soma72 = [document.frm.SOMA72.value];
  var soma73 = [document.frm.SOMA73.value];
  var soma74 = [document.frm.SOMA74.value];
  var soma75 = [document.frm.SOMA75.value];

  var soma76 = [document.frm.SOMA76.value];
  var soma77 = [document.frm.SOMA77.value];
  var soma75 = [document.frm.SOMA78.value];
  var soma79 = [document.frm.SOMA79.value];
  var soma80 = [document.frm.SOMA80.value];

  var soma81 = [document.frm.SOMA81.value];
  var soma82 = [document.frm.SOMA82.value];

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
    "\n Jogo 15: " +
    jogosArray15.sort() +
    " = " +
    soma15 +
    "\n";

  escreveJogos =
    escreveJogos +
    "\n Jogo 16: " +
    jogosArray16.sort() +
    " = " +
    soma16 +
    "\n Jogo 17: " +
    jogosArray17.sort() +
    " = " +
    soma17 +
    "\n Jogo 18: " +
    jogosArray18.sort() +
    " = " +
    soma18 +
    "\n Jogo 19: " +
    jogosArray19.sort() +
    " = " +
    soma19 +
    "\n Jogo 20: " +
    jogosArray20.sort() +
    " = " +
    soma20 +
    "\n";

  escreveJogos =
    escreveJogos +
    "\n Jogo 21: " +
    jogosArray21.sort() +
    " = " +
    soma21 +
    "\n Jogo 22: " +
    jogosArray22.sort() +
    " = " +
    soma22 +
    "\n Jogo 23: " +
    jogosArray23.sort() +
    " = " +
    soma23 +
    "\n Jogo 24: " +
    jogosArray24.sort() +
    " = " +
    soma24 +
    "\n Jogo 25: " +
    jogosArray25.sort() +
    " = " +
    soma25 +
    "\n";

  escreveJogos =
    escreveJogos +
    "\n Jogo 26: " +
    jogosArray26.sort() +
    " = " +
    soma26 +
    "\n Jogo 27: " +
    jogosArray27.sort() +
    " = " +
    soma27 +
    "\n Jogo 28: " +
    jogosArray28.sort() +
    " = " +
    soma28 +
    "\n Jogo 29: " +
    jogosArray29.sort() +
    " = " +
    soma29 +
    "\n Jogo 30: " +
    jogosArray30.sort() +
    " = " +
    soma30 +
    "\n";

  escreveJogos =
    escreveJogos +
    "\n Jogo 31: " +
    jogosArray31.sort() +
    " = " +
    soma31 +
    "\n Jogo 32: " +
    jogosArray32.sort() +
    " = " +
    soma32 +
    "\n Jogo 33: " +
    jogosArray33.sort() +
    " = " +
    soma33 +
    "\n Jogo 34: " +
    jogosArray34.sort() +
    " = " +
    soma34 +
    "\n Jogo 35: " +
    jogosArray35.sort() +
    " = " +
    soma35 +
    "\n";

  escreveJogos =
    escreveJogos +
    "\n Jogo 26: " +
    jogosArray36.sort() +
    " = " +
    soma36 +
    "\n Jogo 37: " +
    jogosArray37.sort() +
    " = " +
    soma37 +
    "\n Jogo 38: " +
    jogosArray38.sort() +
    " = " +
    soma38 +
    "\n Jogo 39: " +
    jogosArray39.sort() +
    " = " +
    soma39 +
    "\n Jogo 40: " +
    jogosArray40.sort() +
    " = " +
    soma40 +
    "\n";

  escreveJogos =
    escreveJogos +
    "\n Jogo 41: " +
    jogosArray41.sort() +
    " = " +
    soma41 +
    "\n Jogo 42: " +
    jogosArray42.sort() +
    " = " +
    soma42 +
    "\n Jogo 43: " +
    jogosArray43.sort() +
    " = " +
    soma43 +
    "\n Jogo 44: " +
    jogosArray44.sort() +
    " = " +
    soma44 +
    "\n Jogo 45: " +
    jogosArray45.sort() +
    " = " +
    soma45 +
    "\n";

  escreveJogos =
    escreveJogos +
    "\n Jogo 46: " +
    jogosArray46.sort() +
    " = " +
    soma46 +
    "\n Jogo 47: " +
    jogosArray47.sort() +
    " = " +
    soma47 +
    "\n Jogo 48: " +
    jogosArray48.sort() +
    " = " +
    soma48 +
    "\n Jogo 49: " +
    jogosArray49.sort() +
    " = " +
    soma49 +
    "\n Jogo 50: " +
    jogosArray50.sort() +
    " = " +
    soma50 +
    "\n";

  escreveJogos =
    escreveJogos +
    "\n Jogo 51: " +
    jogosArray51.sort() +
    " = " +
    soma51 +
    "\n Jogo 52: " +
    jogosArray52.sort() +
    " = " +
    soma52 +
    "\n Jogo 53: " +
    jogosArray53.sort() +
    " = " +
    soma53 +
    "\n Jogo 54: " +
    jogosArray54.sort() +
    " = " +
    soma54 +
    "\n Jogo 55: " +
    jogosArray55.sort() +
    " = " +
    soma55 +
    "\n";

  escreveJogos =
    escreveJogos +
    "\n Jogo 56: " +
    jogosArray56.sort() +
    " = " +
    soma56 +
    "\n Jogo 57: " +
    jogosArray57.sort() +
    " = " +
    soma57 +
    "\n Jogo 58: " +
    jogosArray58.sort() +
    " = " +
    soma58 +
    "\n Jogo 59: " +
    jogosArray59.sort() +
    " = " +
    soma59 +
    "\n Jogo 60: " +
    jogosArray60.sort() +
    " = " +
    soma60 +
    "\n";

  escreveJogos =
    escreveJogos +
    "\n Jogo 61: " +
    jogosArray61.sort() +
    " = " +
    soma61 +
    "\n Jogo 62: " +
    jogosArray62.sort() +
    " = " +
    soma62 +
    "\n Jogo 63: " +
    jogosArray63.sort() +
    " = " +
    soma63 +
    "\n Jogo 64: " +
    jogosArray64.sort() +
    " = " +
    soma64 +
    "\n Jogo 65: " +
    jogosArray65.sort() +
    " = " +
    soma65 +
    "\n";

  escreveJogos =
    escreveJogos +
    "\n Jogo 66: " +
    jogosArray66.sort() +
    " = " +
    soma66 +
    "\n Jogo 67: " +
    jogosArray67.sort() +
    " = " +
    soma67 +
    "\n Jogo 68: " +
    jogosArray68.sort() +
    " = " +
    soma68 +
    "\n Jogo 69: " +
    jogosArray69.sort() +
    " = " +
    soma69 +
    "\n Jogo 70: " +
    jogosArray70.sort() +
    " = " +
    soma70 +
    "\n";

  escreveJogos =
    escreveJogos +
    "\n Jogo 71: " +
    jogosArray71.sort() +
    " = " +
    soma71 +
    "\n Jogo 72: " +
    jogosArray72.sort() +
    " = " +
    soma72 +
    "\n Jogo 73: " +
    jogosArray73.sort() +
    " = " +
    soma73 +
    "\n Jogo 74: " +
    jogosArray74.sort() +
    " = " +
    soma74 +
    "\n Jogo 75: " +
    jogosArray75.sort() +
    " = " +
    soma75 +
    "\n\n";

  escreveJogos =
    escreveJogos +
    "\n Jogo 76: " +
    jogosArray76.sort() +
    " = " +
    soma76 +
    "\n Jogo 77: " +
    jogosArray77.sort() +
    " = " +
    soma77 +
    "\n Jogo 78: " +
    jogosArray78.sort() +
    " = " +
    soma78 +
    "\n Jogo 79: " +
    jogosArray79.sort() +
    " = " +
    soma79 +
    "\n Jogo 80: " +
    jogosArray80.sort() +
    " = " +
    soma80 +
    "\n\n";

  escreveJogos =
    escreveJogos +
    "\n Jogo 81: " +
    jogosArray81.sort() +
    " = " +
    soma81 +
    "\n Jogo 82: " +
    jogosArray82.sort() +
    " = " +
    soma82 +
    "\n\n";

  /* Chama a funººo de mostraJogos */
  mostraJogos(escreveJogos);
}
