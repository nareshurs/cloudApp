$( function() {
     $(".objectDrag").draggable({
        helper:'clone'
    });  

    $("#artCanvas").droppable({
        accept: ".objectDrag",
        drop: function(event,ui){
            var new_signature = $(ui.helper).clone().removeClass('objectDrag');
            new_signature.draggable();
            $(this).append(new_signature);
        }
    });

});

