window.addEventListener('load', function(){
    const context = document.getElementById('body')
    // const ctx = canvas.getContext('2d');

 
     let playerImage = document.getElementById('idle');
        console.log(playerImage)
    let player = document.querySelector('.player')
        function draw(){
            a = document.querySelector('.game')
            a.style.width = 10+'px';
            a.style.height = h+'px';
            a.style.background = '#ccc';
            a.style.position = 'absolute'
            a.style.top = '0px';
            a.style.left = (cW-5)+'px';
        }
        function move() {
            b = document.querySelector('.player');
            c = document.querySelector(".troll");
            
            c.style.display = 'none';
            c.style.width = '100px';
            c.style.height = '100px';
            c.style.background = '#198ae4';
            c.style.position = "fixed";
            c.style.webkitTransform = "rotateY(180deg)";
            
            b.style.width = '100px';
            b.style.height = '100px';
            b.style.background = '#198ae4';
            b.addEventListener("keypress", function(e){
              e.preventDefault();
              e = e.changedKeyPresses[0];
              x = e.pageX;
              y = e.pageY;
              
              this.style.position = "fixed";
              c.style.display = 'block';
              
              //prevent right
              if (x >= (cW-55)) {
                this.style.left = (cW-105) + "px";
                this.style.top = (y-50) + "px";
                
                c.style.left = (cW+5) + "px";
                c.style.top = (y-50) + "px";
                
                //prevent top right
                if (y <= 50) {
                  this.style.left = (cW-105) + "px";
                  this.style.top = 0 + "px";
                 
                  c.style.left = (cW+5) + "px";
                  c.style.top = 0 + "px";
                }
                
                //prevent bottom right
                if (y >= (h-55)) {
                  this.style.left = (cW-105) + "px";
                  this.style.top = (h-100) + "px";
                
                  c.style.left = (cW+5) + "px";
                  c.style.top = (h-100) + "px";
                }
              }
              
              //prevent left
              else if (x <= 50) {
                this.style.left = 0 + "px";
                this.style.top = (y-50) + "px";
                
                c.style.left = (w-100) + "px";
                c.style.top = (y-50) + "px";
                
                //prevent top left
                if (y <= 50) {
                  this.style.left = 0 + "px";
                  this.style.top = 0 + "px";
                 
                  c.style.left = (w-100) + "px";
                  c.style.top = 0 + "px";
                }
                
                //prevent bottom left
                if (y >= (h-55)) {
                  this.style.left = 0 + "px";
                  this.style.top = (h-100) + "px";
                
                  c.style.left = (w-100) + "px";
                  c.style.top = (h-100) + "px";
                }
              }
              
              //prevent top
              else if (y <= 50) {
                this.style.left = (x-50) + "px";
                this.style.top = 0 + "px";
                
                c.style.left = (w-50)-x + "px";
                c.style.top = 0 + "px";
              }
              
              //prevent bottom
              else if (y >= (h-55)) {
                this.style.left = (x-50) + "px";
                this.style.top = (h-100) + "px";
                
                c.style.left = (w-50)-x + "px";
                c.style.top = (h-100) + "px";
              }
              
              //move
              else {
                this.style.left = (x-50) + "px";
                this.style.top = (y-50) + "px";
                
                c.style.left = (w-50)-x + "px";
                c.style.top = (y-50) + "px";
              }
            }, false);
        }
        
        onload = function() {
          draw();
          move();
        }
        
    
    
    window.addEventListener('keydown', e => {
        if(   e.key === 'a'){

            // player.velocity.x = 1
            player.style.left = (player.style.left.split('px')[0] -4)+'px'
            playerImage.src = './assets/SoulslikeKnight/RUN/runLeft.gif'
            console.log(playerImage)

            

        }  //left//


        if(   e.key === 'd'){
            // player.velocity.x = -1
            player.style.left = (+player.style.left.split('px')[0] +4)+'px'
            playerImage.src = './assets//SoulslikeKnight/RUN/run.gif'
          
        }  //right//


        if(    e.key === ' '){
            
           playerImage.src = './assets/SoulslikeKnight/ATTACK/atk1.gif';
                maxFrames = 5;
            setTimeout( () => {
                    playerImage.src = './assets/SoulslikeKnight/IDLE/idle.gif';
            }, 1000)

        }   //attack
    });

    
    

    window.addEventListener('keyup', e => {
        if(   e.key === 'a'){
            playerImage.src = './assets/SoulslikeKnight/IDLE/idleLeft.gif'
           
        }  //left//


        if(   e.key === 'd'){

            playerImage.src = './assets/SoulslikeKnight/IDLE/idle.gif'
            
        } //right//



    });

  

    
    function handlEnemies(){

    }


  
});


// function isCollide(a, b) {
            //     return !(
            //         ((a.y + a.height) < (b.y)) ||
            //         (a.y > (b.y + b.height)) ||
            //         ( (a.x + a.width) < b.x) ||
            //         (a.x > (b.x + b.width))
            //     );
                
            //     console.log(isCollide)

            // }
// function checkHits(){
    //     for(var i=tables.length-1;i>=0;i--){
    //         var t = tables[i];
    //         var tx = t.dom.offsetLeft;
    //         var tw = t.dom.offsetWidth;
    //         var th = t.dom.offsetHeight;
    //         var ty = t.height;
    //         var hit = false;
    //         for(var j=0;j<player.length;j++){
    //             var p = player[j];
    //             if(t.id === p.id){
    //                 continue;
    //             }
    //             var px = p.dom.offsetLeft;
    //             var pw = p.pSprite.offsetWidth;
    //             var ph = p.pSprite.offsetHeight;
    //             var py = p.jumpPos;
    //             if(tx >= px && tx + tw <= px + pw && ty >= py && ty <= py + ph){
    //                 hit = true;
    //                 p.takeDamage();
    //                 break;
    //             }
    //         }
    //         if(hit){
    //             arena.removeChild(t.dom);
    //             tables.splice(i, 1);
    //         }
    //         console.log(checkHits)
    //     }
    // }