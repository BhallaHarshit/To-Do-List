//check on and off specific todo by clicking
//using on method instead of .click() as with the help of on()...
//...we can add listeners to <li> which may or may not were there when the page was loaded
//the second argument specifies <li> which may or may not were present inside of <ul>...
//... which was definitely present when the page loaded
$("ul").on("click", "li", function(){
    $(this).toggleClass("completed");
});

//click on X to delete ToDo
$("ul").on("click", "span", function(event){
    $(this).parent().fadeOut(function (){
        $(this).remove();       //here, $(this) refers to what its being
    });                         //called on, which is $(this).parent()
    event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
    if(event.which === 13){
        //grabbing new todo text from user
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add it to ul
        $("ul").append("<li><span><i class='fas fa-trash'></i></span> " + todoText + "</li>");
    }
});

$(".fa-plus").click(function(){
    $("input[type='text']").fadeToggle();
});