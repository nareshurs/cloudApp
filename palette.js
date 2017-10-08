$(document).ready(function(){

    $("#save").click(function() {

     var ip=   $("#ipVal").text()
alert( $("#nameVal").text() + ip);

  

  });
 
$("#properties").hide();
    $( function() {
     $(".objectDrag").draggable({
        helper:'clone'
    });  

    $("#artCanvas").droppable({
        accept: ".objectDrag",
        drop: function(event,ui){
           var new_signature = $(ui.helper).clone().removeClass('objectDrag');
            new_signature.draggable();
            new_signature.click(function() {
  
   $("#properties").show();
   $("#nameVal").attr('contenteditable',true);
      $("#ipVal").attr('contenteditable',true)
});
            $(this).append(new_signature);
           
        }
    });

   

});

});

