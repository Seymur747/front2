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
var slider=["img/sl1.jpg","img/sl2.jpg","img/sl3.jpg"]
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




$(window).scroll(function(){

if($(window).scrollTop()>1600){
setInterval(width,10)
setInterval(width1,10)
setInterval(width2,10)




}
})
function width(){
	if(z<600){
	$(".smalProg").eq(1).width(z)
	z=z+1
	$(".percent").eq(1).html(percent2)
	percent2=percent2+1

}}


function width1(){
	if(z<300){
	$(".smalProg").eq(2).width(z)
	z=z+1
	$(".percent").eq(2).html(percent3)
		percent3=percent3+1

}}

function width2(){
	if(z<500){
	$(".smalProg").eq(0).width(z)
	z=z+1
	$(".percent").eq(0).html(percent1)
	percent1=percent1+1

}}


$(window).scroll(function(){

if($(window).scrollTop()>1950){
setInterval(number0,30)
setInterval(number1,100)
setInterval(number2,70)
setInterval(number3,30)





}
})
function number0(){
if(num1<197){
	num1++
$(".hesab h1").eq(0).html(num1)

}}
function number1(){
if(num2<23){
	num2++	
$(".hesab h1").eq(1).html(num2)

}}
function number2(){
if(num3<98){
	num3++	
$(".hesab h1").eq(2).html(num3)

}
}
function number3(){
if(num4<7230){
num4=num4+51
$(".hesab h1").eq(3).html(num4)

}}

$(".leftbut").click(function(){
	if(p<1134){
		i++
	p=p+378

	$(".lent").css("right",p+"px")
}})
$(".rightbut").click(function(){
	if(p>0){
		i--
	p=p-378
		
	$(".lent").css("right",p+"px")


}})
$("img").addClass("img-responsive")

$(window).scroll(function(){

if($(window).scrollTop()>100){


$(".menu").css("position","fixed")
	$(".menu").css("background","darkgrey")
	$(".menu").css("width","87%")
		$(".menu").children().css("color","#272822")
	


}
else {
	$(".menu").css("position","relative")
	$(".menu").css("background","transparent")

		$(".menu").children().css("color","initial")
		$(".menu").css("z-index","5")


}
})