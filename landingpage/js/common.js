(function (){
    var landingpage = {};//625
    landingpage.currentpage;
    landingpage.firstEl = document.getElementById("header");
    landingpage.secondEl = document.getElementById("header1");
    landingpage.thirdEl = document.getElementById("header2");
    landingpage.fixCl = "fixBackground" ;
    function hasClass(el, className) {
        if (el.classList)
            return el.classList.contains(className)
        else
            return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))
    }
    function addClass(el, className) {
        if (el.classList)
            el.classList.add(className)
        else if (!hasClass(el, className)) 
            el.className += " " + className
    }

    function removeClass(el, className) {
        if (el.classList)
            el.classList.remove(className)
        else if (hasClass(el, className)) {
            var reg = new RegExp('(\\s|^)' + className + '(\\s|$)')
            el.className=el.className.replace(reg, ' ')
        }
    }
    
    function onScrollEvnt(e){
       // console.log("scroll "+landingpage.lastKnownPosition);
        
        var presentScreen = Number.parseInt(landingpage.lastKnownPosition / window.innerHeight/*622*/);
        if(landingpage.currentpage !== presentScreen){
            landingpage.currentpage = presentScreen;
            switch(presentScreen){
                case 0 : console.log("Zero screen");
                         if(landingpage.lastKnownPosition > window.scrollY){
                             removeClass(landingpage.secondEl,landingpage.fixCl);
                             addClass(landingpage.firstEl,landingpage.fixCl);
                         }
                         break;
                case 1 : console.log("First screen");
                         removeClass(landingpage.firstEl,landingpage.fixCl);
                         removeClass(landingpage.thirdEl,landingpage.fixCl);
                         addClass(landingpage.secondEl,landingpage.fixCl);
                         break;
                case 2 : console.log("second screen");
                        removeClass(landingpage.firstEl,landingpage.fixCl);
                        removeClass(landingpage.secondEl,landingpage.fixCl);
                        addClass(landingpage.thirdEl,landingpage.fixCl);
                        break;
                default:removeClass(landingpage.firstEl,landingpage.fixCl);
                        removeClass(landingpage.secondEl,landingpage.fixCl);
                        removeClass(landingpage.thirdEl,landingpage.fixCl);
            }
        }
        
        landingpage.lastKnownPosition = window.scrollY;
    }
    document.addEventListener('scroll',onScrollEvnt);
})();

window.setTimeout(function(){console.log("BOOMMMMMM!!");
    document.querySelector(".img-container").style = "animation: bouncing 3s linear 0s ;";
    window.setTimeout(function(msg){
        var domElement = document.querySelector(".chat-desc");
        domElement.style = "display:block;";
        domElement.innerText = "This is a text tot test..???"+msg;
    },5000,"Message desc.xfdlksglkjfdsg fdsgjlfdsjgfdsgjlfdskgjf");
},1000);
window.onload() = function(){console.log("PAge loaded...");}