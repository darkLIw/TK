// 选项卡


// $(".login_denglu li").on("click",function(){
// 			$(this).addClass("active")
// 			.siblings().removeClass("active");
// 			var index = $(this).index()
// 			$($(".content")[index]).css("display","block")
// 			.siblings().css("display","none")
// 		})


var log = document.querySelector('#login_block');
var list = log.getElementsByTagName('li');
var divs = document.getElementsByClassName("content");
// console.log(divs);

for( var i = 0; i < list.length; i++){
	list[i].index = i;
	list[i].onclick = function(){
		for(var j = 0; j < list.length; j++){
			list[j].className = "";
			divs[j].style.display = "none";
		}
		this.className = "active";
		var ind = this.index;
		divs[ind].style.display = "block";
	}
}


// $('#login_block .login_denglu li').click(function(){
// 	$(this).addClass('active').siblings().removeClass('active');
// 	let index = $(this).index();
// 	$('.content').eq(index).show().siblings().hide();
// 	
// })

// 验证

























