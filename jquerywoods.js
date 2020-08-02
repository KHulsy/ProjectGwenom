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

<p> You find yourself spinning in a mirrored wood. The trees are mirrored, the path is mirrored, and there are so many places to not go. Which way is home?</p>

</body>
</html>
