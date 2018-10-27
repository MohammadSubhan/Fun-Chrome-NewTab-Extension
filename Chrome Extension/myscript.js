function displayNextImage() {
              x = Math.floor(Math.random() * 10);
              document.getElementById("img").src = images[x];
          }

var images = [], x = -1;
images[0] = "naruto.png";
images[1] = "sokka.png";
images[2] = "dragonball.gif";
images[3] = "avatar.png";
images[4] = "narutog.gif";
images[5] = "cool.gif";
images[6] = "blackclover.gif";
images[7] = "hero.gif";
images[8] = "basketball.gif";
images[9] = "lebron.gif";

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('img');
    link.addEventListener('click', function() {
        displayNextImage();
    });
});

animate = false;

function beginAnimation() {
              var obj = document.getElementById("first");
              obj.style.animation = "bannermove 30s linear infinite";
              obj.style.animationPlayState = "";
              animate = true;
              document.getElementById("start").textContent = "Pause";
          }

function endAnimation() {
              var obj = document.getElementById("first");
              obj.style.animationPlayState = "paused";
              animate = false;
              document.getElementById("start").textContent = "Play";
          }

document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('start');
    link.addEventListener('click', function() {
        if(animate == false) {
           beginAnimation();
        }
        else {
           endAnimation();
        }
    });
});



document.addEventListener('DOMContentLoaded', function() {
    var gifArray = document.getElementsByClassName('gif');

 for(var i = 0; i < gifArray.length; i++) {
    let gifhover = gifArray[i];
    gifhover.addEventListener('mouseover', function() {
      gifhover.src = gifhover.src.replace("png", "gif");
    });
  }

 for(var i = 0; i < gifArray.length; i++) {
    let gifhover = gifArray[i];
    gifhover.addEventListener('mouseout', function() {
      gifhover.src = gifhover.src.replace("gif","png");
    });
  }

  var imageArray = document.getElementsByTagName('img');
  for(var i = 0; i < imageArray.length; i++) {
    let imageClick = imageArray[i];
    imageClick.addEventListener('click', function() {
      document.getElementById("img").src = imageClick.src;
    });
  }

});

