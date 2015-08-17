
	var playIndex =1;
	var clientHeight = document.documentElement.clientHeight;
	var clientWidth = document.documentElement.clientWidth;
	var bgLeft = 0;
	var thebody = document.getElementsByTagName("body")[0];


	$("body").height(clientHeight);
	$(".bg").width(clientWidth*20);

	setTimeout(function(){
		$(".act").children('img').attr("src","img/grow02.png");
	},3000);
	function sec2(){
		$(".screen").css("background-color","#a5c9ea");
		setTimeout(function(){
			$(".tree1").fadeIn();
			$(".tree2").fadeIn();
			$(".tree3").fadeIn();
			$(".act").children('img').attr("src","img/grow03.png");
			$(".act").css("width","10%").css("marginLeft","-5%");
		},1000);
		setTimeout(function(){
			$(".tree5").fadeIn();
			$(".tree4").fadeIn();
			$(".tree6").fadeIn();
			$(".tree1").fadeOut();
			$(".tree2").fadeOut();
			$(".tree3").fadeOut();
			setTimeout(function(){
				$(".tree1").css("left","-2%").css("width","18%").children('img').attr("src","img/tree3.png");
				$(".tree2").css("left","20%").css("width","24%").children('img').attr("src","img/tree3.png");
				$(".tree3").css("left","83%").css("width","17%").children('img').attr("src","img/tree3.png");
				$(".act").children('img').attr("src","img/grow04.png");
				$(".act").css("width","20%").css("marginLeft","-10%").css("bottom","-5%");
			},1000);
		},2000);
		setTimeout(function(){
			$(".tree1").fadeIn();
			$(".tree2").fadeIn();
			$(".tree3").fadeIn();
			$(".tree5").fadeOut();
			$(".tree4").fadeOut();
			$(".tree6").fadeOut();
			setTimeout(function(){
				$(".tree4").css("left","63%").css("width","26%").children('img').attr("src","img/tree3.png");
				$(".tree5").css("left","5%").css("width","28%").children('img').attr("src","img/tree3.png");
				$(".tree5").fadeIn();
				$(".tree4").fadeIn();
			},1000);
		},3500);
		
	}
	function sec3(){
		$(".screen").css("background-color","#98babc");
		$(".tree1").animate({marginLeft:-clientWidth+'px'});
		$(".tree2").animate({marginLeft:-clientWidth+'px'});
		$(".tree3").animate({marginLeft:-clientWidth+'px'});
		$(".tree4").animate({marginLeft:-clientWidth+'px'});
		$(".tree5").animate({marginLeft:-clientWidth+'px'});
		setTimeout(function(){
			$(".bigTree1").fadeIn();
			$(".bigTree2").fadeIn();
			$(".act").children('img').attr("src","img/grow05.png");
			$(".act").css("width","30%").css("marginLeft","-15%").css("bottom","-6%;");
		},1000);
		
	}
	function sec4(){
		$(".screen").css("background-color","#b7cfcc");
		$(".bigTree1").animate({marginLeft:-clientWidth+'px'});
		$(".bigTree2").animate({marginLeft:-clientWidth+'px'});
		setTimeout(function(){
			$(".bird").fadeIn();
			$(".bigTree1").css("marginLeft",clientWidth).css("bottom","0px");
			$(".bigTree2").css("marginLeft",clientWidth).css("left","42%");
			$(".tree4").css("marginLeft",clientWidth);
			$(".tree4").fadeIn();
			$(".act").children('img').attr("src","img/grow06.png");
			$(".act").css("width","46%").css("marginLeft","-23%");
		},1000);
	}
	function sec5(){
		$(".screen").css("background-color","#dfd9bb");
		$(".bigTree1").animate({marginLeft:0+'px'});
		$(".bigTree2").animate({marginLeft:0+'px'});
		$(".tree4").animate({marginLeft:0+'px'});
		$(".bird").animate({marginLeft:-clientWidth+'px'});
		$(".act").children('img').attr("src","img/grow07.png");
		$(".act").css("width","50%").css("marginLeft","-25%");
			setTimeout(function(){
				$(".bigTree1").addClass("treeDownR");
			},1500);
			setTimeout(function(){
				$(".bigTree2").addClass("treeDownL");
			},2000);
			setTimeout(function(){
				$(".tree4").addClass("treeDownL");
			},1000);
	}
	function sec6(){
		$(".screen").css("background-color","#efe3c8");
		$(".bigTree1").animate({marginLeft:-clientWidth+'px'});
		$(".bigTree2").animate({marginLeft:-clientWidth+'px'});
		$(".tree4").animate({marginLeft:-clientWidth+'px'});
	}
	function sec7(){
		$(".screen").css("background-color","#52504b");
	}
	function sec9(){
		$(".screen").css("background-color","#3b3e44");
		setTimeout(function(){
			$(".lou1").addClass("fadeInUp animated");
			$(".lou2").addClass("fadeInUp animated");
			$(".lou3").addClass("fadeInUp animated");
			$(".lou4").addClass("fadeInUp animated");
			$(".diao").addClass("fadeInUp animated");
			$(".lou1").show();
			$(".diao").show();
			$(".act").children('img').attr("src","img/grow08-4.png");
			$(".act").css("width","56%").css("marginLeft","-28%");
			setTimeout(function(){
				$(".lou2").show();
				$(".diao").removeClass("fadeInUp");
			},500);
			setTimeout(function(){
				$(".lou3").show();
			},1000);
			setTimeout(function(){
				$(".lou4").show();
			},1500);
			setTimeout(function(){
				$(".diao").addClass("diaoR");
			},2000);
			
		},1000);
	}
	function sec10(){
		$(".screen").css("background-color","#3f4652");
		$(".lou1").animate({marginLeft:-clientWidth+'px'});
		$(".lou2").animate({marginLeft:-clientWidth+'px'});
		$(".lou3").animate({marginLeft:-clientWidth+'px'});
		$(".lou4").animate({marginLeft:-clientWidth+'px'});
		$(".diao").animate({marginLeft:-clientWidth+'px'});
		setTimeout(function(){
			$(".tower1").addClass("fadeInUp animated");
			$(".tower2").addClass("fadeInUp animated");
			$(".tower3").addClass("fadeInUp animated");
			$(".tower1").show();
			setTimeout(function(){
				$(".tower2").show();
			},500);
			setTimeout(function(){
				$(".tower3").show();
			},1000);
		},1000);
		$(".act").children('img').attr("src","img/grow08-5.png");
	}
	function sec11(){
		$(".screen").css("background-color","#686f7b");
		$(".tower1").animate({marginLeft:-clientWidth+'px'});
		$(".tower2").animate({marginLeft:-clientWidth+'px'});
		$(".tower3").animate({marginLeft:-clientWidth+'px'});
		setTimeout(function(){
			$(".tower4").addClass("fadeInUp animated");
			$(".tower5").addClass("fadeInUp animated");
			$(".tower6").addClass("fadeInUp animated");
			$(".tower4").show();
			setTimeout(function(){
				$(".tower5").show();
			},500);
			setTimeout(function(){
				$(".tower6").show();
				$(".plan1").addClass("plan2");
			},1000);
			setTimeout(function(){
				$(".dan").fadeIn();
			},2500);
			setTimeout(function(){
				$(".dan").addClass("fadeOutDownBig animated");
				$(".screen").css("background-color","#533330");
			},3000);
		},1000);
		$(".down1").css("marginLeft",clientWidth);
		$(".down2").css("marginLeft",clientWidth);
		$(".down3").css("marginLeft",clientWidth);
		
	}
	function sec12(){
		$(".screen").css("background-color","#90180c");
		setTimeout(function(){$(".act").children('img').attr("src","img/grow09.png");},1000);
		$(".tower4").animate({marginLeft:-clientWidth+'px'});
		$(".tower5").animate({marginLeft:-clientWidth+'px'});
		$(".tower6").animate({marginLeft:-clientWidth+'px'});
		$(".down1").animate({marginLeft:0+'px'});
		$(".down2").animate({marginLeft:0+'px'});
		$(".down3").animate({marginLeft:0+'px'});
		setTimeout(function(){
			$(".down1").addClass("treeDownL");
			$(".down2").addClass("treeDownR");
			$(".down3").addClass("treeDownL");
		},1000);
		$(".cast1").css("marginLeft",clientWidth);
		$(".cast2").css("marginLeft",clientWidth);
	}
	function sec13(){
		$(".screen").css("background-color","#827372");
		$(".down1").animate({marginLeft:-clientWidth+'px'});
		$(".down2").animate({marginLeft:-clientWidth+'px'});
		$(".down3").animate({marginLeft:-clientWidth+'px'});
		$(".cast1").animate({marginLeft:0+'px'});
		$(".cast2").animate({marginLeft:0+'px'});
		setTimeout(function(){
			$(".cast1").addClass("fadeOutDown animated");
			$(".cast2").addClass("fadeOutDown animated");
			setTimeout(function(){
				$(".cast1").hide();
				$(".cast2").hide();
			},1000);
		},1500);
	}
	function sec14(){
		$(".screen").css("background-color","#9192a6");
		setTimeout(function(){
			$(".act").addClass("treeDownR");
		},1000);
	}
	function sec15(){
		$(".screen").css("background-color","#bfbfc3");
		setTimeout(function(){
			$(".act").fadeOut();
		},1000);
	}
	function sec16(){
		$(".screen").css("background-color","#d8e6f5");
	}
	function sec17(){
		$(".screen").css("background-color","#7db7d7");
	}
	function sec18(){
		$(".screen").css("background-color","#0087d3");
	}
	function sec19(){
		$(".screen").css("background-color","#bde7ff");
	}
	function sec20(){
		$(".child").fadeIn();
		setTimeout(function(){
			$(".word").fadeIn();
		},1000);
		setTimeout(function(){
			$(".name").fadeIn();
		},2000);
		
	}
	function bgMove(){
		bgLeft = -clientWidth*playIndex;
		$(".bg").animate({left:bgLeft+'px'});
		
	}
	function nextScreen(){
		bgMove();
		switch(playIndex)
		{
		case 1:
			sec2();
		  break;
		case 2:
			sec3();
		  break;
		case 3:
			sec4();
			break;
		case 4:
			sec5();
			break;	
		case 5:
			sec6();
			break;
		case 6:
			sec7();
			break;
		case 8:
			sec9();
			break;	
		case 9:
			sec10();
			break;	
		case 10:
			sec11();
			break;	
		case 11:
			sec12();
			break;
		case 12:
			sec13();
			break;
		case 13:
			sec14();
			break;	
		case 14:
			sec15();
			break;	
		case 15:
			sec16();
			break;
		case 16:
			sec17();
			break;
		case 17:
			sec18();
			break;
		case 18:
			sec19();
			break;
		case 19:
			sec20();
			break;
		default:
		}
		if (playIndex<19) {
			playIndex++;
		}
	}

	thebody.onclick = function(){
		nextScreen();
	};
	


	var pressX = 0, pressY = 0;
	addObj = document.getElementsByTagName("body")[0].childNodes;
	for (var i = 1; i < addObj.length; i++) {
		addObj[i].addEventListener('touchstart', function(event) {
        // 如果这个元素的位置内只有一个手指的话
	        if (event.targetTouches.length === 1) {
	            var touch = event.targetTouches[0];
	            // 把元素放在手指所在的位置
	            pressX = touch.pageX;
	            pressY = touch.pageY;
	            console.log(pressY+pressX);
	        }
    	}, false);

    	addObj[i].addEventListener('touchmove', function(event) {
        // 如果这个元素的位置内只有一个手指的话
	        if (event.targetTouches.length === 1) {
	            var touch = event.targetTouches[0];
	            var spanX = touch.pageX - pressX;
	            var spanY = touch.pageY - pressY;
	            event.preventDefault();
	            if (Math.abs(spanX) > Math.abs(spanY)) {
	                //水平方向
	                if (spanX > 0) {
	                //向右
	                console.log("left");
	                } else {
	                //向左
	                console.log("right");
	                }
	            } 
	        }
    	}, false);

		addObj[i].addEventListener('touchend', function(event) {
 			var touch = event.changedTouches[0];
      			if(touch.pageX<pressX){	
	       			nextScreen();	
	     		}
	     		else if(touch.pageX>pressX){

	     		}
   event.stopPropagation();
    	}, false);

	}
$(document).ready(function(){	
});