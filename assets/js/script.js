$(document).ready(function () {

  $("#consult").click(function(){
    var cep = $("#cep").val();

    $.get("https://viacep.com.br/ws/"+cep+"/json/", function(data){
      $("#result").html("A cidade é: " + data.localidade);
    })
    
  });

});