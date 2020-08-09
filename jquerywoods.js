<head>
<script src="jquery-3.5.1.min.js"></script>
</head>
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("p").click(function(){
    $(this).hide();
  });
});
</script>
</head>
<body>

<p>This Way!</p>
<p>That Way!</p>
<p>Click your heels home!</p>

</body>
</html>
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("button").click(function(){
    $("#p1").css("color", "red")
      .slideUp(2000)
      .slideDown(2000);
  });
});
</script>
</head>
<body>

<p id="p1">jQuery is fun!!</p>

<button>Drink Me!</button>
<div class="container">
	<div class="glass"></div>
	<div class="thorns">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
	<div class="glow"></div>
	<div class="rose-leaves">
		<div></div>
		<div></div>
	</div>
	<div class="rose-petals">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
	<div class="sparkles">
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
		<div></div>
	</div>
</div>
</body>
</html>
@import 'compass/css3';
$bg: #122139;
$rose1 : #d52d58;
$rose2: #9e183a;
$rose3: #b81b43;
$rose4 :#c9204b;

@function randomNum($min, $max) {
  $rand: random();
  $randomNum: $min + floor($rand * (($max - $min) + 1));

  @return $randomNum;
}

@mixin keyframes($animationName) {
  @-webkit-keyframes #{"$animationName"} {
    @content;
  }
  @-moz-keyframes #{$animationName} {
    @content;
  }

  @-ms-keyframes #{$animationName} {
    @content;
  }

  @keyframes #{$animationName} {
    @content;
  }
}

html,body {
	height: 100%;
	width: 100%;
	background: $bg;
	overflow:hidden;
}

.container 
{
    width: 100px;
    height: 300px;
	position: absolute;
	left: 0;
	right: 0;
	top:0;
	bottom: 0;
	margin:auto;
	@include transform(scale(0.6));
	div
	{
		position: absolute;
	}
	.glass {
		height: 420px;
		width: 250px;
		border:3px solid rgba(255, 255, 255, 0.5);
		@include border-radius(300px 300px 0px 0px);
		left: -80px;
		top: -100px;
		border-bottom:15px solid rgba(255, 255, 255, 0.5);
		&:after {
		    width: 8px;
		    background: rgba(255, 255, 255, 0.28);
		    content: '';
		    position: absolute;
		    height: 80px;
		    top: 430px;
		    border-radius: 100px;
		    left: 10px;
		    top: 180px;
		}
		&:before {
			width: 8px;
			background: rgba(255, 255, 255, 0.28);
			content: '';
			position: absolute;
			height: 15px;
			top: 430px;
			border-radius: 100px;
			left: 10px;
			top: 280px;
		}
	}
	.glow {
		position:absolute;
		width: 170px;
		height: 170px;
		@include border-radius(100%);
		border:1px solid rgba(245, 148, 184, 0.47);
		box-shadow: 0px 0px 10px rgba(245, 148, 184, 1);
		left: -40px;
		top: -40px;
		@include transition(all 0.5s ease);
		@include animation(glowing 2.5s ease-in-out infinite);
	}
	.rose-petals {
		&>div {
			background:$rose1;
			width: 45px;
			height: 80px;
			position: absolute;
			@include transition(all 0.5s ease-out);
		}
		&>div:nth-child(1) {
			border-radius: 15px;
			left: 20px;
			top: -6px;
			background:$rose1;
		}
		
		&>div:nth-child(2),
		&>div:nth-child(4),
		&>div:nth-child(6){
			border-radius:  0px 30px 0px 30px;
			background: $rose3;
			left:0;
			transform-origin:bottom right;
		}
		
		&>div:nth-child(3),
		&>div:nth-child(5),
		&>div:nth-child(7){
			border-radius:  30px 0px 30px 0px;
			left: 40px;
			transform-origin:bottom left;
		}
		
		@for $i from 2 to 8 {
			$background:'';
			$top:'';
			$h:'';
			@if($i==2 or $i==3) {
				$background:$rose2;
				$top:10px;
				$h:70px;
			}
			@if($i==4 or $i==5) {
				$background:$rose3;
				$top:5px;
				$h:75px;
			}
			@if($i==6 or $i==7) {
				$background:$rose4;
			}
			
			&>div:nth-child(#{$i}) {
				@include animation(openRose+$i 3s ease-in-out);
				@include animation-fill-mode(forwards);
				z-index:7-$i;
				background:$background;
				top:$top;
				height:$h;
				@include animation-delay(2s)
			}
		}
		
	} //end of rose petals
	.rose-leaves {
		&>div:nth-last-child(1) {
		    width: 55px;
		    height: 30px;
		    background: #338f37;
		    position: absolute;
		    top: 60px;
		    left: 15px;
		    @include border-radius(100px);
		}
		& > div:nth-child(1) { 
			width: 6px;
			height: 230px;
			border: none;
			top: 80px;
			background: #066406;
			left: 40px;
		}
	} //end of rose-leaves/stem
	.thorns {
		& > div {
			width: 30px;
			height: 30px;
			background: #066406;
			top: 100px;
			left: 10px;
			
			&:after {
				width: 41px;
				height: 31px;
				@include border-radius(100%);
				background: #122139;
				content: "";
				position: absolute;
				left: -12px;
				top: 17px;
			}
			&:before {
				width: 41px;
				height: 31px;
				@include border-radius(100%);
				background: #122139;
				content: "";
				position: absolute;
				left: -11px;
				top: -11px;
				z-index: 0;
			}
			
			&:nth-child(2) {
				top: 150px;
				@include transform(rotate(180deg));
				left: 45px;
			}
			&:nth-child(3) {
				top: 180px;
			}
			&:nth-child(4) {
				top: 220px;
				@include transform(rotate(180deg));
				left: 45px;
			}
			
		}
		
	} //end of thorns
	
	.sparkles {
		bottom: -40px;
		& > div{
			width: 4px;
			height: 4px;
			border-radius: 100px;
			background:#ff96c0;
			box-shadow: 0px 0px 12px 2px #ff4e85;
			bottom:0;
			opacity: 0;
			@include animation(sparkle 4s ease-in-out infinite);
		}
		@for $i from 1 to 10{
			&>div:nth-child(#{$i}) {
				left: randomNum(-100,180)+px;
				@include animation-delay(randomNum(1,3)+s);
			}			
		}
	}
}

@include keyframes(sparkle) {
	50%{opacity:1;}
	100%{bottom:250px;}
}
@include keyframes(openRose2){
	50% {
		@include transform(rotate(-90deg));
		top:80px;
		left: 100px;
	}
	100% {
		@include transform(rotate(-60deg));
		top:210px;
		left: -30px;
	}
}
@include keyframes(openRose3){
	100% {
		@include transform(rotate(60deg));
	}
}

@include keyframes(openRose4){
	100% {
		@include transform(rotate(-30deg));
	}
}
@include keyframes(openRose5){
	100% {
		@include transform(rotate(30deg));
	}
}

@include keyframes(glowing) {
	50% {
		box-shadow: 0px 0px 60px rgba(245, 148, 184, 1);
	}
}<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("button").click(function(){
    $("p").hide("slow", function(){
      alert("Oh, goodness. Your magic made the text go away. Well done, young one! ");
    });
  });
});
</script>
</head>
<body>

<button>Follow Me!</button>
<!DOCTYPE html>
<html>
<head>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js"></script>
<script>
$(document).ready(function(){
  $("#btn1").click(function(){
    alert("Text: " + $("#test").text());
  });
  $("#btn2").click(function(){
    alert("HTML: " + $("#test").html());
  });
});
</script>
</head>
<body>

<p id="test">Did you want to go that way?</p>


<button id="btn2">Upbackwards</button>

</body>
</html>
<p> You find yourself spinning in a mirrored wood. The trees are mirrored, the path is mirrored, and there are so many places to not go. Which way is home?</p>

</body>
</html>
