var x=0;
var p=0;
i=0;
percent1=0;
percent2=0;
percent3=0;
num1=0;
num2=0;
num3=0;
num4=0;
z=0;
var slider=["../img/sl1.jpg","../img/sl2.jpg","../img/sl3.jpg"]
$(document).ready(function(){
	setInterval(slide,2000)
})
function slide(){
	if(x<2){
	x++;
		$("#header").css("transition","all 2s ease")
		$("#header").css("background-image","url("+slider[x]+")")

}
else{

	x=-1
}


}

$(".left>ul>li").mouseover(function(){
	$(this).children().children().fadeIn(300)


})
// $(".left>ul>li>ul>li").mouseover(function(){
// 	$(this).children().children().fadeIn(300)
	

// })

$(".left>ul>li").mouseout(function(){
	$(this).children().children().fadeOut(300)
})
// $(window).scroll(){
// if($(window).scrollTop()>=700){
//  alert("catdig")
// }
// }
$("img").addClass("img-responsive")

$(window).scroll(function(){

if($(window).scrollTop()>100){


$(".menu").css("position","fixed")
	$(".menu").css("background","#0a6abd")
	$(".menu").css("width","87%")
	$(".menu li").css("margin-right","#0a6abd")


}
else {
	$(".menu").css("position","relative")
		$(".menu").css("width","initial")
	$(".menu").css("background","transparent")
		$(".menu").css("z-index","5")


}
})