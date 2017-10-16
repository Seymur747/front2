var x=0;
var y=1;
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
$(".menu").css("width","initial")
		$(".menu").children().css("color","initial")
		$(".menu").css("z-index","5")


}
})

$(".yazi").hide()






	$(".heading i").click(function(){	

		if(y==1){
			
			$(".yazi").hide(400)
			$(this).removeClass("fa fa-minus-square")
				$(this).addClass("fa fa-plus-square")
			$(this).parent().parent().children().eq(1).show(400)
		
			
			y=0;
console.log(y)
		}
		else{

	       
			$(this).parent().parent().children().eq(1).hide(400)
			$(this).removeClass("fa fa-plus-square")
			$(this).addClass("fa fa-minus-square")
			
			y=1;
			console.log(y)

		
       }
   })   


		


// if(y==1){

// 	$(".heading i").click(function(){
		
// 		$(this).parent().parent().children().eq(1).hide(400)

// 		$(this).parent().parent().children().eq(1)
// 			$(this).addClass("fa fa-plus-square")

// 	     y=0;
// 	     console.log(y)

//  })   }





