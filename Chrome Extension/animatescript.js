function myMove() {
  var elem = document.getElementById("animate");   
  var pos = 0;
  var pos2 = 350;
  var x = Math.floor((Math.random() * 10) + 1);
  var words = ["Wow", "Such cool", "Arent you nice", "Litty", 
  "why you playing with my life", "Im depressed","Dang", "Who dat", "Huh", 
  "Wha", "Miss Keisha"];
  var y = Math.floor((Math.random() * 10) + 1);

  if(x < 3) {
  var id = setInterval(frame, 1);
  document.getElementById("wordid").innerHTML = words[y-1];
  function frame() {
    if( pos2 <= -1) {
      clearInterval(id);
      elem.style.animationPlayState = "paused";
    }
    else if (pos >= 350) {
      pos2 -= 2;
      elem.style.top = pos2 + 'px'; 
      elem.style.left = pos2 + 'px';
    } 
    else {
      elem.style.animationPlayState = "";
      pos += 2; 
      elem.style.top = pos + 'px'; 
      elem.style.left = pos + 'px'; 
    }
  }
  }

  else if(x < 5) {
  var id = setInterval(frame, 1);
  document.getElementById("wordid").innerHTML = words[y-1];
  function frame() {
    if( pos2 <= -1) {
      elem.style.animationPlayState = "paused";
      clearInterval(id);
    }
    else if (pos >= 350) {
      pos2 -= 2;
      elem.style.top = pos2 + 'px'; 
    } 
    else {
      elem.style.animationPlayState = "";
      pos += 2;  
      elem.style.top = pos + 'px';  
    }
  }
  }

  else if(x < 7) {
  var id = setInterval(frame, 1);
  document.getElementById("wordid").innerHTML = words[y-1];
  function frame() {
    if( pos2 <= -1) {
      elem.style.animationPlayState = "paused";
      clearInterval(id);
    }
    else if (pos >= 350) {
      pos2 -= 2;
      elem.style.bottom = pos2 + 'px';
      elem.style.right = pos2 + 'px';
    } 
    else {
      elem.style.animationPlayState = "";
      pos += 2;  
      elem.style.bottom = pos + 'px';
      elem.style.right = pos + 'px'; 
    }
  }
  }

  else if(x < 9) {
  var id = setInterval(frame, 1);
  document.getElementById("wordid").innerHTML = words[y-1];
  function frame() {
    if( pos2 <= -1) {
      elem.style.animationPlayState = "paused";
      clearInterval(id);
    }
    else if (pos >= 350) {
      pos2 -= 2;
      elem.style.bottom = pos2 + 'px';
      elem.style.left = pos2 + 'px';
    } 
    else {
      elem.style.animationPlayState = "";
      pos += 2;  
      elem.style.bottom = pos + 'px';
      elem.style.left = pos + 'px'; 
    }
  }
  }
  
  else {
  var id = setInterval(frame, 1);
  document.getElementById("wordid").innerHTML = words[y-1];
  function frame() {
    if( pos2 <= -1) {
      elem.style.animationPlayState = "paused";
      clearInterval(id);
    }
    else if (pos >= 350) {
      pos2 -= 2;
      elem.style.top = pos2 + 'px'; 
      elem.style.right = pos2 + 'px';
    } 
    else {
      elem.style.animationPlayState = "";
      pos += 2;  
      elem.style.top = pos + 'px'; 
      elem.style.right = pos + 'px'; 
    }
  }
  }
}

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('animate');
    // onClick's logic below:
    link.addEventListener('click', function() {
        link.style.animation = "spin 4s linear infinite";
        myMove();
    });
});