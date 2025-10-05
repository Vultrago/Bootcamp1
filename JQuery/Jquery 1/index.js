
/*
Clicking the h1 makes it turn purple

$("h1").click(function(){
    $("h1").css("color", "purple")
});




for (var i = 0; i<5; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        document.querySelector("h1").style.color = "red";
    });
}
Same thing below but using Jquery

$("button").click(function (){
    $("h1").css("color", "red");
})


Detect which key gets pressed down

$(document).keypress(function (event) {
    console.log(event.key);
});


Chalenge: Whenever a key is pressed down , it needs to get shown in the h1.

$("input").keypress(function (event) {
    // console.log(event.key);
    $("h1").html(event.key);
});

Other ways to add an event listener

$("h1").on("mouseover", function(){
    $("h1").css("color", "red")
})

Creating a button before the h1
This will add the method before the opening tag of the h1 element

$("h1").before("<button>New</button>")

Creating a button after the h1
This will add the method after the opening tag of the h1 element

$("h1").after("<button>New</button>")

prepend
This will add the element just before the content of the h1 element and right after the opening tag
$("h1").prepend("<button>New</button>")


append
This will add the element just after the content of the h1 element and right before the closing tag

$("h1").append("<button>New</button>")


remove()
Removing all buttons elements inside current webpage

$("button").remove();



19//158 Website Animations

Hide H1 when click on any button
$("button").on("click", function(){
    $("h1").hide();
})

To make it reappear
$("h1").show();


//Toggle function: Make the h1 appear or disappear when any button is clicked
$("button").on("click", function(){
    $("h1").toggle();
})

//fadeOut function: Make the h1 fade out when any button is clicked
//fadeIn function: Make the h1 fade in when any button is clicked
fadeToggle() just like the toggle function but fading

$("button").on("click", function(){
    $("h1").fadeToggle();
})


slideDown()	Slides-down (shows) the selected elements
slideToggle()	Toggles between the slideUp() and slideDown() methods
slideUp()	Slides-up (hides) the selected elements


animate()	Runs a custom animation on the selected elements

$("button").on("click", function(){
    $("h1").animate({opacity: 0.5});
})


Chainning
*/
$("button").on("click", function(){
    $("h1").slideUp().slideDown().animate({opacity: 0.5})
})




