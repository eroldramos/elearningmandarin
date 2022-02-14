
//filter search
var verifyer_patient = 0;
$(document).ready(function(){
  $("#search_Dictionary").on("keyup", function() {

    var select_val = $("#filter_category option:selected" ).text();
    var input, filter, table, tr, td, i, txtValue;
    input = document.getElementById("search_Dictionary");
    filter = input.value.toUpperCase();
    table = document.getElementById("table_dictionary");
    tr = table.getElementsByTagName("tr");


  if(select_val === "ALL"){
    for (i = 0; i < tr.length; i++) {
      td0 = tr[i].getElementsByTagName("td")[0];
      td1 = tr[i].getElementsByTagName("td")[1];
      td2 = tr[i].getElementsByTagName("td")[2];
      td3 = tr[i].getElementsByTagName("td")[3];
      td4 = tr[i].getElementsByTagName("td")[4];
      td5 = tr[i].getElementsByTagName("td")[5];
      if (td0 || td1 || td2 || td3 || td4 || td5) {
        txtValue0 = td0.textContent || td0.innerText;
        txtValue1 = td1.textContent || td1.innerText;
        txtValue2 = td2.textContent || td2.innerText;
        txtValue3 = td3.textContent || td3.innerText;
        txtValue4 = td4.textContent || td4.innerText;
        txtValue5 = td5.textContent || td5.innerText;

        if (txtValue0.toUpperCase().indexOf(filter) > -1 || txtValue1.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1 || txtValue3.toUpperCase().indexOf(filter) > -1 || txtValue4.toUpperCase().indexOf(filter) > -1 || txtValue5.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          document.getElementById("no_dataVerifyer").style.display = "none"
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  else if(select_val === "ID"){
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[0];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          document.getElementById("no_dataVerifyer").style.display = "none"
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  else if(select_val === "HANZI"){
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[1];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          document.getElementById("no_dataVerifyer").style.display = "none"
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  else if(select_val === "PINYIN"){
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[2];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          document.getElementById("no_dataVerifyer").style.display = "none"
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  else if(select_val === "ENGLISH"){
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[3];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          document.getElementById("no_dataVerifyer").style.display = "none"
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  else if(select_val === "Date Created"){
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[4];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          document.getElementById("no_dataVerifyer").style.display = "none"
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  else if(select_val === "PART OF SPEECH"){
    for (i = 0; i < tr.length; i++) {
      td = tr[i].getElementsByTagName("td")[5];
      if (td) {
        txtValue = td.textContent || td.innerText;
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          tr[i].style.display = "";
          document.getElementById("no_dataVerifyer").style.display = "none"
        } else {
          tr[i].style.display = "none";
        }
      }       
    }
  }
  
    var verifyer_ctr = $('#table_dictionary #tr_Search:visible').length;
    var inplen = $("#search_Dictionary").val();

    if(verifyer_ctr === 0) {
      document.getElementById("no_dataVerifyer").style.display = "flex"
    }
    else if(inplen.length === 0){
      document.getElementById("no_dataVerifyer").style.display = "none"
    }

});

//----------------------------------------------------

$("#search_User").on("keyup", function() {

  var select_val = $("#filter_category option:selected" ).text();
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search_User");
  filter = input.value.toUpperCase();
  table = document.getElementById("table_user");
  tr = table.getElementsByTagName("tr");


if(select_val === "ALL"){
  for (i = 0; i < tr.length; i++) {
    td0 = tr[i].getElementsByTagName("td")[0];
    td1 = tr[i].getElementsByTagName("td")[1];
    td2 = tr[i].getElementsByTagName("td")[2];
    td3 = tr[i].getElementsByTagName("td")[3];
    td4 = tr[i].getElementsByTagName("td")[4];
    td5 = tr[i].getElementsByTagName("td")[5];
    if (td0 || td1 || td2 || td3 || td4 || td5) {
      txtValue0 = td0.textContent || td0.innerText;
      txtValue1 = td1.textContent || td1.innerText;
      txtValue2 = td2.textContent || td2.innerText;
      txtValue3 = td3.textContent || td3.innerText;
      txtValue4 = td4.textContent || td4.innerText;
      txtValue5 = td5.textContent || td5.innerText;

      if (txtValue0.toUpperCase().indexOf(filter) > -1 || txtValue1.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1 || txtValue3.toUpperCase().indexOf(filter) > -1 || txtValue4.toUpperCase().indexOf(filter) > -1 || txtValue5.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
else if(select_val === "ID"){
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
else if(select_val === "FIRST NAME"){
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
else if(select_val === "LAST NAME"){
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
else if(select_val === "USERNAME"){
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
else if(select_val === "EMAIL"){
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[4];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
else if(select_val === "DATE JOINED"){
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[5];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

  var verifyer_ctr = $('#table_user #tr_Search:visible').length;
  var inplen = $("#search_User").val();

  if(verifyer_ctr === 0) {
    document.getElementById("no_dataVerifyer").style.display = "flex"
  }
  else if(inplen.length === 0){
    document.getElementById("no_dataVerifyer").style.display = "none"
  }

});


//----------------------------------------------------

$("#search_lesson").on("keyup", function() {

  var select_val = $("#filter_category option:selected" ).text();
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search_lesson");
  filter = input.value.toUpperCase();
  table = document.getElementById("table_lesson");
  tr = table.getElementsByTagName("tr");


if(select_val === "ALL"){
  for (i = 0; i < tr.length; i++) {
    td0 = tr[i].getElementsByTagName("td")[0];
    td1 = tr[i].getElementsByTagName("td")[1];
    td2 = tr[i].getElementsByTagName("td")[2];
    td3 = tr[i].getElementsByTagName("td")[3];
    td4 = tr[i].getElementsByTagName("td")[4];

    if (td0 || td1 || td2 || td3 || td4) {
      txtValue0 = td0.textContent || td0.innerText;
      txtValue1 = td1.textContent || td1.innerText;
      txtValue2 = td2.textContent || td2.innerText;
      txtValue3 = td3.textContent || td3.innerText;
      txtValue4 = td4.textContent || td4.innerText;

      if (txtValue0.toUpperCase().indexOf(filter) > -1 || txtValue1.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1 || txtValue3.toUpperCase().indexOf(filter) > -1 || txtValue4.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
else if(select_val === "ID"){
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
else if(select_val === "TITLE"){
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
else if(select_val === "DESCRIPTION"){
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
else if(select_val === "HSK LEVEL"){
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
else if(select_val === "DATE CREATED"){
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[4];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}


  var verifyer_ctr = $('#table_lesson #tr_Search:visible').length;
  var inplen = $("#search_lesson").val();

  if(verifyer_ctr === 0) {
    document.getElementById("no_dataVerifyer").style.display = "flex"
  }
  else if(inplen.length === 0){
    document.getElementById("no_dataVerifyer").style.display = "none"
  }

});


//----------------------------------------------------

$("#search_User").on("keyup", function() {

  var select_val = $("#filter_category option:selected" ).text();
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search_User");
  filter = input.value.toUpperCase();
  table = document.getElementById("table_user");
  tr = table.getElementsByTagName("tr");


if(select_val === "ALL"){
  for (i = 0; i < tr.length; i++) {
    td0 = tr[i].getElementsByTagName("td")[0];
    td1 = tr[i].getElementsByTagName("td")[1];
    td2 = tr[i].getElementsByTagName("td")[2];
    td3 = tr[i].getElementsByTagName("td")[3];
    td4 = tr[i].getElementsByTagName("td")[4];
    td5 = tr[i].getElementsByTagName("td")[5];
    if (td0 || td1 || td2 || td3 || td4 || td5) {
      txtValue0 = td0.textContent || td0.innerText;
      txtValue1 = td1.textContent || td1.innerText;
      txtValue2 = td2.textContent || td2.innerText;
      txtValue3 = td3.textContent || td3.innerText;
      txtValue4 = td4.textContent || td4.innerText;
      txtValue5 = td5.textContent || td5.innerText;

      if (txtValue0.toUpperCase().indexOf(filter) > -1 || txtValue1.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1 || txtValue3.toUpperCase().indexOf(filter) > -1 || txtValue4.toUpperCase().indexOf(filter) > -1 || txtValue5.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
else if(select_val === "ID"){
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
else if(select_val === "FIRST NAME"){
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
else if(select_val === "LAST NAME"){
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
else if(select_val === "USERNAME"){
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
else if(select_val === "EMAIL"){
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[4];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
else if(select_val === "DATE JOINED"){
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[5];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}

  var verifyer_ctr = $('#table_user #tr_Search:visible').length;
  var inplen = $("#search_User").val();

  if(verifyer_ctr === 0) {
    document.getElementById("no_dataVerifyer").style.display = "flex"
  }
  else if(inplen.length === 0){
    document.getElementById("no_dataVerifyer").style.display = "none"
  }

});


//----------------------------------------------------

$("#search_quizes").on("keyup", function() {

  var select_val = $("#filter_category option:selected" ).text();
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search_quizes");
  filter = input.value.toUpperCase();
  table = document.getElementById("table_quizes");
  tr = table.getElementsByTagName("tr");


if(select_val === "ALL"){
  for (i = 0; i < tr.length; i++) {
    td0 = tr[i].getElementsByTagName("td")[0];
    td1 = tr[i].getElementsByTagName("td")[1];
    td2 = tr[i].getElementsByTagName("td")[2];
    td3 = tr[i].getElementsByTagName("td")[3];


    if (td0 || td1 || td2 || td3) {
      txtValue0 = td0.textContent || td0.innerText;
      txtValue1 = td1.textContent || td1.innerText;
      txtValue2 = td2.textContent || td2.innerText;
      txtValue3 = td3.textContent || td3.innerText;


      if (txtValue0.toUpperCase().indexOf(filter) > -1 || txtValue1.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1 || txtValue3.toUpperCase().indexOf(filter) > -1 ) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
else if(select_val === "ID"){
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
else if(select_val === "TITLE"){
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
else if(select_val === "DESCRIPTION"){
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
else if(select_val === "DATE CREATED"){
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}


  var verifyer_ctr = $('#table_quizes #tr_Search:visible').length;
  var inplen = $("#search_quizes").val();

  if(verifyer_ctr === 0) {
    document.getElementById("no_dataVerifyer").style.display = "flex"
  }
  else if(inplen.length === 0){
    document.getElementById("no_dataVerifyer").style.display = "none"
  }

});


//----------------------------------------------------

$("#search_logs").on("keyup", function() {

  var select_val = $("#filter_category option:selected" ).text();
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search_logs");
  filter = input.value.toUpperCase();
  table = document.getElementById("table_logs");
  tr = table.getElementsByTagName("tr");


if(select_val === "ALL"){
  for (i = 0; i < tr.length; i++) {
    td0 = tr[i].getElementsByTagName("td")[0];
    td1 = tr[i].getElementsByTagName("td")[1];
    td2 = tr[i].getElementsByTagName("td")[2];
    td3 = tr[i].getElementsByTagName("td")[3];


    if (td0 || td1 || td2 || td3) {
      txtValue0 = td0.textContent || td0.innerText;
      txtValue1 = td1.textContent || td1.innerText;
      txtValue2 = td2.textContent || td2.innerText;
      txtValue3 = td3.textContent || td3.innerText;


      if (txtValue0.toUpperCase().indexOf(filter) > -1 || txtValue1.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1 || txtValue3.toUpperCase().indexOf(filter) > -1 ) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
else if(select_val === "ID"){
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
else if(select_val === "USER"){
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
else if(select_val === "ACTIVITY"){
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
else if(select_val === "TIME STAMP"){
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}


  var verifyer_ctr = $('#table_logs #tr_Search:visible').length;
  var inplen = $("#search_logs").val();

  if(verifyer_ctr === 0) {
    document.getElementById("no_dataVerifyer").style.display = "flex"
  }
  else if(inplen.length === 0){
    document.getElementById("no_dataVerifyer").style.display = "none"
  }

});


//----------------------------------------------------

$("#search_achievements").on("keyup", function() {

  var select_val = $("#filter_category option:selected" ).text();
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("search_achievements");
  filter = input.value.toUpperCase();
  table = document.getElementById("table_achievements");
  tr = table.getElementsByTagName("tr");


if(select_val === "ALL"){
  for (i = 0; i < tr.length; i++) {
    td0 = tr[i].getElementsByTagName("td")[0];
    td1 = tr[i].getElementsByTagName("td")[1];
    td2 = tr[i].getElementsByTagName("td")[2];
    td3 = tr[i].getElementsByTagName("td")[3];
    td4 = tr[i].getElementsByTagName("td")[4];


    if (td0 || td1 || td2 || td3 || td4) {
      txtValue0 = td0.textContent || td0.innerText;
      txtValue1 = td1.textContent || td1.innerText;
      txtValue2 = td2.textContent || td2.innerText;
      txtValue3 = td3.textContent || td3.innerText;
      txtValue4 = td4.textContent || td4.innerText;

      if (txtValue0.toUpperCase().indexOf(filter) > -1 || txtValue1.toUpperCase().indexOf(filter) > -1 || txtValue2.toUpperCase().indexOf(filter) > -1 || txtValue3.toUpperCase().indexOf(filter) > -1  || txtValue4.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
else if(select_val === "ID"){
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
else if(select_val === "USER"){
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
else if(select_val === "LESSON"){
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[2];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
else if(select_val === "SCORE"){
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[3];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}
else if(select_val === "DATE TAKEN"){
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[4];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
        document.getElementById("no_dataVerifyer").style.display = "none"
      } else {
        tr[i].style.display = "none";
      }
    }       
  }
}


  var verifyer_ctr = $('#table_achievements #tr_Search:visible').length;
  var inplen = $("#search_achievements").val();

  if(verifyer_ctr === 0) {
    document.getElementById("no_dataVerifyer").style.display = "flex"
  }
  else if(inplen.length === 0){
    document.getElementById("no_dataVerifyer").style.display = "none"
  }

});



});