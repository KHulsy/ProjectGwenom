<div class="test" contenteditable>
  Squiggly Text
  <p class="small">– with – <p/>
  SVG Filters 
  <p class="small">(you can even edit this text)</p>
  <p class="smaller">(only tested on Chrome so far)</p>
</div>

<svg xmlns="http://www.w3.org/2000/svg" version="1.1">
  <defs>

    
    <filter id="squiggly-0">
      <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="0"/>
      <feDisplacementMap id="displacement" in="SourceGraphic" in2="noise" scale="6" />
    </filter>
    <filter id="squiggly-1">
      <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="1"/>
<feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
    </filter>
    
    <filter id="squiggly-2">
      <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="2"/>
<feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
    </filter>
    <filter id="squiggly-3">
      <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="3"/>
<feDisplacementMap in="SourceGraphic" in2="noise" scale="8" />
    </filter>
    
    <filter id="squiggly-4">
      <feTurbulence id="turbulence" baseFrequency="0.02" numOctaves="3" result="noise" seed="4"/>
<feDisplacementMap in="SourceGraphic" in2="noise" scale="6" />
    </filter>
  </defs> 
</svg>
@import url('https://fonts.googleapis.com/css?family=Amatic+SC:400,700');

body
  font-family 'Amatic SC', sans-serif
  font-size 100px

@keyframes squiggly-anim
  0%
    filter url('#squiggly-0')
  
  25%
    filter url('#squiggly-1')
  
  50%
    filter url('#squiggly-2')
  
  75%
    filter url('#squiggly-3')
  
  100%
    filter url('#squiggly-4')
  
$squiggly
  animation squiggly-anim 0.34s linear infinite

body
  line-height 100vh
  background #111
  color white
  
.test
  @extend $squiggly
  display inline-block
  vertical-align middle
  width 100%
  
  outline none
  text-align center
  line-height 1


.small
  font-size 0.5em

.smaller
  font-size 0.4em
p
  margin 0
View CompiledRun Pen 

Resources


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

</body>
</html>
<!DOCTYPE html>
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
