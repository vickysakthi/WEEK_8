const balls = document.getElementsByClassName('ball');

document.onmousemove = (item) => {
  const x = (item.clientX * 100) / window.innerWidth +'%';
  const y = (item.clientY * 70) / window.innerHeight + '%';
  for ( i=0;i<balls.length;i++){
     balls[i].style.left = x;
     balls[i].style.top = y;
    //  balls[i].trasform = 'translate(-' + x + ',-' + y + ')';
  }
} 