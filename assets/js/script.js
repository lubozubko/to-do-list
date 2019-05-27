// check of individual tasks by clicking them
$("ul").on("click", "li", function(){
   $(this).toggleClass("completed");
});

// click on X to delete todo

$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
    event.stopPropagation();
});

// add new todo

$("input[type='text']").keypress(function(event) {
    if(event.which === 13) {
        // getting new todo from input
        var todoText = $(this).val();
        $(this).val(" ");
        // create new li and add to ul
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span> " + todoText + "</li>");
    }
});

// toggle input fade out - in

$(".fa-pencil-alt").click(function(){
    $("input[type='text']").fadeToggle();
});