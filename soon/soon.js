var x=0;
var p=0;
i=0;


$(".left>ul>li").mouseover(function(){
	$(this).children().children().fadeIn(200)


})
// $(".left>ul>li>ul>li").mouseover(function(){
// 	$(this).children().children().fadeIn(300)
	

// })

$(".left>ul>li").mouseout(function(){
	$(this).children().children().fadeOut(200)
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
	$(".menu").css("background","#0a6abd")
	$(".menu").css("width","87%")
	$(".menu li").css("margin-right","#0a6abd")


}
else {
	$(".menu").css("position","relative")
	$(".menu").css("background","transparent")
	$(".menu").css("width","initial")
		$(".menu").css("z-index","5")


}
})



$(function() {
  
  
function saniye(){
var x=new Date()
$(".time h3").eq(3).html(x.getSeconds())


};

setInterval(saniye,1000)

});
$(function() {
  
  
function deqiqe(){
var x=new Date()
$(".time h3").eq(2).html(x.getMinutes())


};

setInterval(deqiqe,1000)

});



$(function() {
  
  
function saat(){
var x=new Date()
$(".time h3").eq(1).html(x.getHours())


};

setInterval(saat,1000)

});
$(function() {
  
  
function il(){
var x=new Date()
$(".time h3").eq(0).html(x.getFullYear())


};

setInterval(il,1000)

});


// $(function() {
  
  
// function il(){
// var x=new Date()
// $(".time h3").eq(2).html(x.getMinutes())


// };

// setInterval(deqiqe,1000)

// });

// function il()
// {$(".time h3").eq(0).html(x.getDate())}
// il()
// function saat(){
// $(".time h3").eq(1).html(x.getHours())}
// saat()
// function deqiqe(){
// $(".time h3").eq(2).html(x.getMinutes())}
// deqiqe()




// function il()
// {$(".time h3").eq(0).html("b")}
// il()
// function saat(){
// $(".time h3").eq(1).html("b")}
// saat()
// function deqiqe(){
// $(".time h3").eq(2).html("b")}
// deqiqe()
// function saniye(){
// $(".time h3").eq(3).html("b")}



