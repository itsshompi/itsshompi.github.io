Number.prototype.format = function(n, x, s, c) {
    var re = '\\d(?=(\\d{' + (x || 3) + '})+' + (n > 0 ? '\\D' : '$') + ')',
        num = this.toFixed(Math.max(0, ~~n));

    return (c ? num.replace('.', c) : num).replace(new RegExp(re, 'g'), '$&' + (s || ','));
};
Array.prototype.clone = function() {
    var arr = this.slice(0);
    for( var i = 0; i < this.length; i++ ) {
        if( this[i].clone ) {
            //recursion
            arr[i] = this[i].clone();
        }
    }
    return arr;
}

var cont = [];
var numID = 0;
var data = {};
var amount = 0;
var grossAmount = 0;
var interestAmount = 0;
var studentsData = []
var projectedChecks = [];
var checksData = [];
var calculatedChecks = [];
var calculatedChecksData = [];
var totalChecksGenerate = 0;

function loadData(){
  $.ajax({
    url: "./config.json",
    dataType: "json",
    success: function(response){
      console.log("Datos cargados!");
      data = response;
      for (i = 0; i < data.students.length; i++) {
        $('#students').append('<option value="'+parseInt(i+1)+'">'+data.students[i].desc+'</option>');
        cont.push(0);
      }
    },
    error: function(xhr, ajaxOptions, thrownError){
      console.log(xhr.status);
      console.log(thrownError);
    }
  });
}

function calculateInterest(date, amount){
  var date1 = Date.now();
  var date2 = new Date(date);
  var diff = Math.abs(date1 - date2);
  var days = Math.floor((diff/1000)/86400);
  if(date1 > date2){
    interest = Math.round(amount*(data.interest*days));
  }else{
    interest = 0;
  }
  var d = interest % 10;
  if(d > 0){
    if(d >= 5){
      interest += 10-d;
    }else{
      interest -= d;
    }
  }
  return interest;
}

function calculateProjectedInterest(projectedDate, date, amount){
  var date1 = new Date(projectedDate);
  var date2 = new Date(date);
  var diff = Math.abs(date1 - date2);
  var days = Math.floor((diff/1000)/86400);
  if(date1 > date2){
    interest = Math.round(amount*(data.interest*days));
  }else{
    interest = 0;
  }
  var d = interest % 10;
  if(d > 0){
    if(d >= 5){
      interest += 10-d;
    }else{
      interest -= d;
    }
  }
  return interest;
}

function addProjectedChecks(){
  var ff = $('#fecha').val();
  var checkAmount = $('#p').val();
  $('#div-p').removeClass('has-error');
  $('#help-p').html('');
  $('#div-fecha').removeClass('has-error');
  $('#help-fecha').html('');
  if(checkAmount == "" || isNaN(checkAmount) || parseInt(checkAmount) <= 0){
    $('#div-p').addClass('has-error');
    $('#p').focus();
    $('#help-p').html('Ingrese una cantidad valida...');
  }else if(ff == ""){
    $('#div-fecha').addClass('has-error');
    $('#fecha').focus();
    $('#help-fecha').html('Ingrese una fecha valida...');
  }else{
    var check = [ff, parseInt(checkAmount), Math.floor(Date.now() / 1000)];
    projectedChecks.push(check);
    $('#modalDocument').modal('hide');
    $('#p').val('');
    projectedChecks.sort(function(a,b){
      return new Date(a[0]) - new Date(b[0]);
    });
    showProjectedChecks();
  }
}

function showProjectedChecks(){
  if(projectedChecks.length > 0){
    $('#checks-div').removeClass('hide');
    generateRowsChecks();
  }else{
    $('#checks-div').addClass('hide');
    calculateProjectedChecks();
  }
}

function deleteCheck(index){
  projectedChecks.splice(index, 1);
  showProjectedChecks();
}

function calculateProjectedChecks(){
  checksData = [];
  for(i = 0; i < data.dues; i++){
    for(j = 0; j < studentsData.length; j++){
      if(studentsData[j][3][i][1] > 0){
        checksData.push([studentsData[j][3][i][0], studentsData[j][3][i][1], studentsData[j][3][i][2], 0, 0])
      }
    }
  }
  var check_nn = 0;
  for(i = 0; i < projectedChecks.length; i++){
    check_nn = projectedChecks[i][1];
    for(j = 0; j < checksData.length; j++){
      if(checksData[j][4] == 0){
        var projectedInterest = calculateProjectedInterest(projectedChecks[i][0],checksData[j][0],checksData[j][1]);
        var nn = (((checksData[j][1]+projectedInterest)-checksData[j][2])-checksData[j][3]);
        if(nn > check_nn){
          checksData[j][3] = check_nn;
          check_nn = 0;
          break;
        }else{
          checksData[j][4] = 1;
          checksData[j][3] = 0;
          check_nn -= nn;
        }
      }
    }
  }
  generateRows();
  if(check_nn > 0){
    $('#table').append('<tr class="warning"><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td colspan="4"><strong>Existe un sobre pago en los cheques de:</strong> $'+check_nn.format(0,3,".")+'</td></tr>');
  }
}

function generateRowsChecks(){
  $('#tableProyectedChecks').html('');
  for(i = 0; i < projectedChecks.length; i++){
    var t = '<tr id="row-proyected-checks-'+i+'">';
    t += '<td>'+projectedChecks[i][0]+'</td>';
    t += '<td>$'+projectedChecks[i][1].format(0,3,".")+'</td>';
    t += '<td><button onclick="deleteCheck('+i+')" type="button" class="btn btn-xs btn-danger"name="button">Eliminar</button></td>  </tr>';
    $('#tableProyectedChecks').append(t);
  }
  calculateProjectedChecks();
}

function addStudent(){
  var a = parseInt($('#students').val());
  var tag = $('#tag-student').val();
  if(a != null && a != "" && a > 0){
    cont[a-1] += 1;
    var payments = [];
    if(tag == ""){
      tag = data.students[a-1].desc+' #'+cont[a-1];
    }
    for(j = 0; j < data.dues; j++){
      var date = new Date(data.start_date);
      date.setMonth(date.getMonth()+j);
      var dd = date.getDate()+1;
    	var mm = date.getMonth()+1;
      var yyyy = date.getFullYear();
      if(dd < 10){
        dd = '0'+dd;
      }
      if(mm < 10){
          mm = '0'+mm;
      }
      var date = yyyy+'-'+mm+'-'+dd
      payments[j] = [date, data.students[a-1].monthly_payment, 0];
    }
    studentsData[numID] = [tag, data.students[a-1].monthly_payment, [], payments]
    $('#student-created').prepend('<option value="'+numID+'">'+tag+'</option>');
    numID += 1;
    calculateProjectedChecks();
    $('#tag-student').val('');
  }
}

function addDiscount(){
  var id = $('#student-created').val();
  var discount = $('#discount').val();
  $('#div-discount').removeClass('has-error');
  $('#student-created').removeClass('has-error');
  $('#help-student-created').html('');
  if(id == 9999 || id == null){
    $('#div-student-created').addClass('has-error');
    $('#student-created').focus();
    $('#help-student-created').html('Debe seleccionar un alumno...');
  }else if(discount == "" || isNaN(discount) || parseInt(discount) > 100 || parseInt(discount) <= 0){
    $('#div-discount').addClass('has-error');
    $('#discount').focus();
  }else{
    studentsData[id][2].push(discount);
    $('#discount').val('');
  }
  calculateProjectedChecks();
}

function generateRows(){
  $('#table').html('');
  amount = 0;
  grossAmount = 0;
  interestAmount = 0;
  var ccount = 0;
  for(i = 0; i < data.dues; i++){
    for(j = 0; j < studentsData.length; j++){
      if(studentsData[j][3][i][1] > 0){
        studentsData[j][3][i][1] = studentsData[j][1];
        for(k = 0; k < studentsData[j][2].length; k++){
          studentsData[j][3][i][1] = studentsData[j][3][i][1]-(studentsData[j][3][i][1]*(studentsData[j][2][k]*0.01));
        }
        var interest = calculateInterest(studentsData[j][3][i][0],studentsData[j][3][i][1]);
        var totalMonthly = (studentsData[j][3][i][1]+interest);
        if(totalMonthly <= studentsData[j][3][i][2]){
          studentsData[j][3][i][2] = 0;
        }
        totalMonthly -= studentsData[j][3][i][2];
        if(checksData.length > 0){
          if(checksData[ccount][4] == 1){
            var t = '<tr id="row-'+j+'-'+i+'" class="success">';
            t += '<td>'+studentsData[j][0]+'</td>';
            t += '<td>['+studentsData[j][2].toString()+']%</td>';
            t += '<td>'+(i+1)+'/'+data.dues+'</td>';
            t += '<td>'+studentsData[j][3][i][0]+'</td>';
            t += '<td id="gross-'+j+'-'+i+'">$'+studentsData[j][3][i][1].format(0,3,".")+'</td>';
            t += '<td id="interest-'+j+'-'+i+'">$'+interest.format(0,3,".")+'</td>';
            t += '<td><input type="text" value="'+studentsData[j][3][i][2].format(0,3,".")+'" id="deposit-'+j+'-'+i+'"> <button class="btn btn-xs btn-info" onclick="addDeposit('+j+','+i+')">Aplicar</button></td>';
            t += '<td id="amount-total-'+j+'-'+i+'">$'+totalMonthly.format(0,3,".")+'</td>';
            t += '<td>Pagado</td>';
            t += '<td><input type="checkbox" value="'+j+'-'+i+'"></td>';
            t += '<td><button onclick="deleteDue('+j+','+i+')" type="button" class="btn btn-xs btn-danger"name="button">Eliminar</button></td>  </tr>';
          }else if(checksData[ccount][4] == 0 && checksData[ccount][3] > 0){
            var t = '<tr id="row-'+j+'-'+i+'" class="info">';
            t += '<td>'+studentsData[j][0]+'</td>';
            t += '<td>['+studentsData[j][2].toString()+']%</td>';
            t += '<td>'+(i+1)+'/'+data.dues+'</td>';
            t += '<td>'+studentsData[j][3][i][0]+'</td>';
            t += '<td id="gross-'+j+'-'+i+'">$'+studentsData[j][3][i][1].format(0,3,".")+'</td>';
            t += '<td id="interest-'+j+'-'+i+'">$'+interest.format(0,3,".")+'</td>';
            t += '<td><input type="text" value="'+studentsData[j][3][i][2].format(0,3,".")+'" id="deposit-'+j+'-'+i+'"> <button class="btn btn-xs btn-info" onclick="addDeposit('+j+','+i+')">Aplicar</button></td>';
            t += '<td id="amount-total-'+j+'-'+i+'">$'+totalMonthly.format(0,3,".")+'</td>';
            t += '<td>Abono de $'+checksData[ccount][3].format(0,3,".")+'</td>';
            t += '<td><input type="checkbox" value="'+j+'-'+i+'"></td>';
            t += '<td><button onclick="deleteDue('+j+','+i+')" type="button" class="btn btn-xs btn-danger"name="button">Eliminar</button></td>  </tr>';
          }else{
            var t = '<tr id="row-'+j+'-'+i+'">';
            t += '<td>'+studentsData[j][0]+'</td>';
            t += '<td>['+studentsData[j][2].toString()+']%</td>';
            t += '<td>'+(i+1)+'/'+data.dues+'</td>';
            t += '<td>'+studentsData[j][3][i][0]+'</td>';
            t += '<td id="gross-'+j+'-'+i+'">$'+studentsData[j][3][i][1].format(0,3,".")+'</td>';
            t += '<td id="interest-'+j+'-'+i+'">$'+interest.format(0,3,".")+'</td>';
            t += '<td><input type="text" value="'+studentsData[j][3][i][2].format(0,3,".")+'" id="deposit-'+j+'-'+i+'"> <button class="btn btn-xs btn-info" onclick="addDeposit('+j+','+i+')">Aplicar</button></td>';
            t += '<td id="amount-total-'+j+'-'+i+'">$'+totalMonthly.format(0,3,".")+'</td>';
            t += '<td>En Deuda</td>';
            t += '<td><input type="checkbox" value="'+j+'-'+i+'"></td>';
            t += '<td><button onclick="deleteDue('+j+','+i+')" type="button" class="btn btn-xs btn-danger"name="button">Eliminar</button></td>  </tr>';
          }
        }else{
          var t = '<tr id="row-'+j+'-'+i+'">';
          t += '<td>'+studentsData[j][0]+'</td>';
          t += '<td>['+studentsData[j][2].toString()+']%</td>';
          t += '<td>'+(i+1)+'/'+data.dues+'</td>';
          t += '<td>'+studentsData[j][3][i][0]+'</td>';
          t += '<td id="gross-'+j+'-'+i+'">$'+studentsData[j][3][i][1].format(0,3,".")+'</td>';
          t += '<td id="interest-'+j+'-'+i+'">$'+interest.format(0,3,".")+'</td>';
          t += '<td><input type="text" value="'+studentsData[j][3][i][2].format(0,3,".")+'" id="deposit-'+j+'-'+i+'"> <button class="btn btn-xs btn-info" onclick="addDeposit('+j+','+i+')">Aplicar</button></td>';
          t += '<td id="amount-total-'+j+'-'+i+'">$'+totalMonthly.format(0,3,".")+'</td>';
          t += '<td>En Deuda</td>';
          t += '<td></td>';
          t += '<td><button onclick="deleteDue('+j+','+i+')" type="button" class="btn btn-xs btn-danger"name="button">Eliminar</button></td>  </tr>';
        }
        $('#table').append(t);
        ccount += 1;
        amount += totalMonthly;
        grossAmount += studentsData[j][3][i][1];
        interestAmount += interest;
    }else{
      var t = '<tr id="row-'+j+'-'+i+'" class="danger">';
      t += '<td>'+studentsData[j][0]+'</td>';
      t += '<td>['+studentsData[j][2].toString()+']%</td>';
      t += '<td>'+(i+1)+'/'+data.dues+'</td>';
      t += '<td>'+studentsData[j][3][i][0]+'</td>';
      t += '<td>$0</td>';
      t += '<td>$0</td>';
      t += '<td></td>';
      t += '<td>$0</td>';
      t += '<td>Cancelado</td>';
      t += '<td></td>';
      t += '<td><button onclick="restoreDue('+j+','+i+')" type="button" class="btn btn-xs btn-success"name="button">Resturar</button></td>  </tr>';
      $('#table').append(t);
    }
    }
  }
  $('#table').append('<tr id="row-total"><td></td><td></td><td></td><td></td><td><strong>Deuda Capital:</strong> $'+grossAmount.format(0,3,".")+'</td><td><strong>Intereses:</strong> $'+interestAmount.format(0,3,".")+'</td><td></td><td><strong>Total:</strong> $'+amount.format(0,3,".")+'</td><td></td><td></td><td></td></tr>');
}

function addDeposit(j,i){
  var deposit = $('#deposit-'+j+'-'+i).val().replace(".","");
  if(deposit == "" || isNaN(deposit) || parseInt(discount) < 0){
    $('#deposit-'+j+'-'+i).focus();
  }else{
    studentsData[j][3][i][2] = parseInt(deposit);
    calculateProjectedChecks();
  }
}

function deleteDue(j,i){
  studentsData[j][3][i][1] = 0;
  calculateProjectedChecks();
};

function restoreDue(j,i){
  studentsData[j][3][i][1] = studentsData[j][1];
  calculateProjectedChecks();
};

function calculateChecks(){
  calculatedChecks = [];
  calculatedChecksData = [];
  $('#table :checked').each(function() {
    calculatedChecks.push($(this).val());
  });
  if(calculatedChecks.length > 0){
    for(k = 0; k < calculatedChecks.length; k++){
      var jj = calculatedChecks[k].split("-");
      var i = parseInt(jj[1]);
      var j = parseInt(jj[0]);
      calculatedChecksData.push([studentsData[j][0],(i+1)+'/'+data.dues,studentsData[j][3][i]]);
    }
    $('#page-1').addClass('hide');
    $('#page-2').removeClass('hide');
    generateRowsChecksSeleted();
  }else{
    console.log("nada");
  }
}
function generateRowsChecksSeleted(){
  $('#table-3-checks').addClass('hide');
  $('#n_checks').val('');
  var ttotal = 0;
  $('#table-2').html('');
  for(k = 0; k < calculatedChecksData.length; k++){
    var interest = calculateInterest(calculatedChecksData[k][2][0],calculatedChecksData[k][2][1]);
    var totalMonthly = (calculatedChecksData[k][2][1]+interest)-calculatedChecksData[k][2][2];
    var t = '<tr>';
    t += '<td>'+calculatedChecksData[k][0]+'</td>';
    t += '<td>'+calculatedChecksData[k][1]+'</td>';
    t += '<td>'+calculatedChecksData[k][2][0]+'</td>';
    t += '<td>$'+calculatedChecksData[k][2][1].format(0,3,".")+'</td>';
    t += '<td>$'+totalMonthly.format(0,3,".")+'</td>';
    t += '</tr>';
    ttotal += totalMonthly;
    $('#table-2').append(t);
  }
  $('#table-2').append('<tr><td></td><td></td><td></td><td></td><td><strong>Total:</strong> $'+ttotal.format(0,3,".")+'</td></tr>');
}

function generateNumberOfChecks(){
  totalChecksGenerate = 0;
  var n = $('#n_checks').val();
  if(n == "" || isNaN(n) || parseInt(n) < 0){
    $('#n_checks').focus();
  }else{
    $('#table-3-checks').removeClass('hide');
    totalChecksGenerate = n;
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd;
    }
    if(mm<10){
        mm='0'+mm;
    }
    var today = yyyy+'-'+mm+'-'+dd;
    $('#table-3').html('');
    for(k = 0; k < n; k++){
      var t = '<tr>';
      t += '<td> Cheque Nº '+(k+1)+'</td>';
      t += '<td><input type="text" class="form-control" id="fecha-cheque-'+k+'" data-date-format="yyyy-mm-dd"></td>';
      t += '<td id="total-cheque-'+k+'">$0</td>';
      t += '</tr>';
      $('#table-3').append(t);
      $('#fecha-cheque-'+k).datepicker({
        format: 'yyyy-mm-dd',
        language: 'es',
        autoclose: true,
        startDate: '-1d'
      });
      $('#fecha-cheque-'+k).val(today);
    }
  }
}

function calculateAmountChecks(){
  var ttcal = 0;
  var amountByCheck = 0;
  var aux = calculatedChecksData.clone();
  for(k = 0; k < aux.length; k++){
    ttcal += aux[k][2][1];
  }
  amountByCheck = Math.ceil(ttcal/totalChecksGenerate);
  amountCheck = [];
  for(i = 0; i < totalChecksGenerate; i++){
    auxAmountCheck = 0;
    for(k = 0; k < aux.length; k++){
      console.log(aux[k][2][1]);
      if(aux[k][2][1] > 0){
        var aux3 = aux[k][2][1]+auxAmountCheck;
        if(aux3 <= amountByCheck){
          auxAmountCheck += (aux[k][2][1]);
          amountCheck.push([i,aux[k][2][0],aux[k][2][1]]);
          aux[k][2][1] = 0;
        }else{
          var aux2 = amountByCheck - auxAmountCheck;
          amountCheck.push([i,aux[k][2][0],aux2]);
          aux[k][2][1] -= aux2;
          break;
        }
      }
    }
  }
  var finalAmountChecks = 0;
  var finalAbon = 0;
  for(i = 0; i < totalChecksGenerate; i++){
    var date = $('#fecha-cheque-'+i).val();
    var tot = 0;
    for(k = 0; k < amountCheck.length; k++){
      if(amountCheck[k][0] == i){
        tot += calculateProjectedInterest(date, amountCheck[k][1], amountCheck[k][2]);
        tot += amountCheck[k][2];
      }
    }
    finalAmountChecks += tot;
  }
  for(k = 0; k < aux.length; k++){
    finalAbon += aux[k][2][2];
  }
  finalAmountChecks -= finalAbon;
  var addFinalCheck =  finalAmountChecks % totalChecksGenerate;
  for(i = 0; i < totalChecksGenerate; i++){
    var naux = parseInt(finalAmountChecks / totalChecksGenerate);
    if(i == 0){
      naux += addFinalCheck;
    }
    var d = naux % 10;
    if(d > 0){
      if(d >= 5){
        naux += 10-d;
      }else{
        naux -= d;
      }
    }
    $('#total-cheque-'+i).html('$'+naux.format(0,3,"."));
  }
}

function calculateAmountChecks2(){
  var ttcal = 0;
  var amountByCheck = 0;
  var aux = calculatedChecksData.clone();
  for(k = 0; k < aux.length; k++){
    ttcal += aux[k][2][1];
  }
  amountByCheck = Math.ceil(ttcal/totalChecksGenerate);
  amountCheck = [];
  for(i = 0; i < totalChecksGenerate; i++){
    auxAmountCheck = 0;
    for(k = 0; k < aux.length; k++){
      console.log(aux[k][2][1]);
      if(aux[k][2][1] > 0){
        var aux3 = aux[k][2][1]+auxAmountCheck;
        if(aux3 <= amountByCheck){
          auxAmountCheck += aux[k][2][1];
          amountCheck.push([i,aux[k][2][0],aux[k][2][1],aux[k][2][2]]);
          aux[k][2][1] = 0;
          aux[k][2][2] = 0;
        }else{
          var aux2 = amountByCheck - auxAmountCheck;
          amountCheck.push([i,aux[k][2][0],aux2,aux[k][2][2]]);
          aux[k][2][1] -= aux2;
          aux[k][2][2] = 0;
          break;
        }
      }
    }
  }
  for(i = 0; i < totalChecksGenerate; i++){
    var date = $('#fecha-cheque-'+i).val();
    var tot = 0;
    for(k = 0; k < amountCheck.length; k++){
      if(amountCheck[k][0] == i){
        var inte2 = calculateProjectedInterest(date, amountCheck[k][1], amountCheck[k][2]);
        tot += (amountCheck[k][2]+inte2)-amountCheck[k][3];
      }
    }
    var d = tot % 10;
    if(d > 0){
      if(d >= 5){
        tot += 10-d;
      }else{
        tot -= d;
      }
    }
    $('#total-cheque-'+i).html('$'+tot.format(0,3,"."));
  }
}

function getBackSimulator(){
  $('#page-2').addClass('hide');
  $('#page-1').removeClass('hide');
}

$(function() {
    loadData();
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1;
    var yyyy = today.getFullYear();
    if(dd<10){
        dd='0'+dd;
    }
    if(mm<10){
        mm='0'+mm;
    }
    var today = yyyy+'-'+mm+'-'+dd;
    $('#fecha').datepicker({
      format: 'yyyy-mm-dd',
      language: 'es',
      autoclose: true,
      startDate: '-1d'
    });
    $('#fecha').val(today);
    $('#tag-student').keypress(function(e) {
      if(e.which == 13) {
        addStudent();
      }
    });
    $('#discount').keypress(function(e) {
      if(e.which == 13) {
        addDiscount();
      }
    });
});
