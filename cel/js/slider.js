var global = this;

// function begin() {
//     setGuideWidth()
// }
window.onload = function() {
    setGuideWidth()
};

function rollDelay(j, c, g, h) {
    clearInterval(global[h]);
    var i = 0;
    global[h] = setInterval(function() {
        var a = Math.exp( - g * i) * c;
        j.scrollLeft += a;
        moveBalloon(j);
        if (Math.abs(a) < 10) {
            setImgSrc(j);
            if (Math.abs(a) <= 1) {
                clearInterval(global[h])
            }
        }
        i++
    },
    16)
}

function calcWidth(m) {
    var i = [];
    var l = m.getElementsByClassName("timeline-text");
    for (var o = 0; o < l.length; o++) {
        i[o] = l[o].clientWidth * 1.11;
    }
    var n = 0;
    for (var o = 0; o < i.length; o++) {
        n += i[o]
    }
    var k = m.parentElement.parentElement.id;
    global[k + "_cw"] = n;
    global[k + "_aw"] = i;
    if (n < document.body.clientWidth) {
        n = document.body.clientWidth
    }
    m.getElementsByClassName("timeline-items")[0].style.width = n + "px"
}
function setGuideWidth() {
    var d = document.getElementsByClassName("timeline-container");
    for (var c = 0; c < d.length; c++) {
        calcWidth(d[c]);
        setProgress(d[c]);
        setImgSrc(d[c])
    }
}
function setProgress(l) {
    var h = l.parentElement.getElementsByClassName("timeline-progress")[0];
    var j = l.parentElement.parentElement.id;
    var i = global[j + "_aw"];
    var m = global[j + "_cw"];
    h.innerHTML = "";
    for (var n = 0; n < i.length; n++) {
        var k = document.createElement("div");
        k.style.width = i[n] / m * 100 + "%";
        if (n % 2 == 0) {
            k.style.backgroundColor = "#83A0A5"
        }
        h.appendChild(k)
    }
}
function moveBalloon(w) {
    var r = w.parentElement.getElementsByClassName("timeline-title_text")[0];
    var D = w.parentElement.getElementsByClassName("timeline-point")[0];
    var t = w.parentElement.getElementsByClassName("timeline-progress")[0];
    var B = w.parentElement.parentElement.id;
    var u = global[B + "_aw"];
    var A = global[B + "_cw"];
    var s = w.scrollLeft / (A - document.body.clientWidth);
    D.style.left = s * (D.parentElement.clientWidth - D.offsetWidth) + "px";
    r.style.left = s * (r.parentElement.clientWidth - r.offsetWidth) + "px";
    t.style.left = s * (t.parentElement.clientWidth - t.offsetWidth * 100 / 96) + "px";
    var z = s * A;
    for (var x = 0; x < u.length; x++) {
        z -= u[x];
        if (z < 0) {
            if (global[B + "_ti"] != x) {
                global[B + "_ti"] = x;
                var q = w.getElementsByClassName("timeline-item")[x];
                r.className = r.className.replace(/playing|canplay/g, "").replace(/(^\s)|(\s$)/g, "");
                var i = w.parentElement.getElementsByClassName("timeline-balloon")[0];
            }
            break
        }
    }
}
function setImgSrc(l) {
    var i = l.getElementsByTagName("img");
    var j = l.parentElement.parentElement.id;
    for (var g = 0; g < i.length; g++) {
        var h = i[g];
        if (h.src == "") {
            var k = h.offsetLeft - l.scrollLeft;
            if (k > -h.clientWidth && k < document.body.clientWidth) {
                h.src = h.getAttribute("img_src");
                h.onload = function() {
                    this.style.backgroundImage = "url()";
                    guideImgLoad(this)
                }
            }
        }
    }
}
function Mousedown(d, e) {
    if (!e) {
        e = (window || global).event;
        if (!e) {
            return
        }
    }
    e.preventDefault();
    var f = d.parentElement.parentElement.id;
    global[f + "st"] = e.pageX;
    global[f + "fg"] = 1;
    clearInterval(global[f + "int"])
}
function Mousemove(d, e) {
    var f = d.parentElement.parentElement.id;
    if (!global[f + "fg"]) {
        return
    }
    if (!e) {
        e = (window || global).event;
        if (!e) {
            return
        }
    }
    e.preventDefault();
    d.scrollLeft += global[f + "st"] - e.pageX;
    moveBalloon(d);
    global[f + "_sp"] = global[f + "st"] - e.pageX;
    if (global[f + "_sp"] < 5) {
        setImgSrc(d)
    }
    global[f + "st"] = e.pageX
}
function Mouseup(d, e) {
    if (!e) {
        e = (window || global).event;
        if (!e) {
            return
        }
    }
    e.preventDefault();
    var f = d.parentElement.parentElement.id;
    global[f + "fg"] = 0;
    rollDelay(d, global[f + "_sp"], 0.03, f + "int")
}
function Mouseout(d, e) {
    if (!e) {
        e = (window || global).event;
        if (!e) {
            return
        }
    }
    e.preventDefault();
    var f = d.parentElement.parentElement.id;
    global[f + "fg"] = 0
}
function Touchstart(d, e) {
    if (!e) {
        e = (window || global).event;
        if (!e) {
            return
        }
    }
    var f = d.parentElement.parentElement.id;
    global[f + "st"] = e.touches[0].pageX;
    clearInterval(global[f + "int"])
}
function Touchmove(d, e) {
    if (!e) {
        e = (window || global).event;
        if (!e) {
            return
        }
    }
    var f = d.parentElement.parentElement.id;
    global[f + "_sp"] = global[f + "st"] - e.touches[0].pageX;
    if (Math.abs(global[f + "_sp"]) >= 1000) {
        e.preventDefault()
    }
    if (Math.abs(global[f + "_sp"]) < 10) {
        setImgSrc(d)
    }
    d.scrollLeft += global[f + "_sp"];
    moveBalloon(d);
    global[f + "st"] = e.touches[0].pageX
}
function Touchend(d, e) {
    if (!e) {
        e = (window || global).event;
        if (!e) {
            return
        }
    }
    var f = d.parentElement.parentElement.id;
    rollDelay(d, global[f + "_sp"], 0.06, f + "int")
}
function guideImgLoad(b) {
    b = b.parentElement.parentElement.parentElement.parentElement;
    calcWidth(b);
    setProgress(b)
}

$(function() {
    $("#menu").click(function() {
        $(this).text($(".menu-nav").is(":hidden"));
        $(".menu-nav").slideToggle();
    });
});

function change_pic(){
    var imgObj = document.getElementById("menu");
    if(imgObj.getAttribute("src",2)=="images/menu.png"){ 
        imgObj.src="images/menu-x.png";
        
    }else{
        imgObj.src="images/menu.png";
        
    }  
}

function changePic(){
    var imgObj = document.getElementById("menu");
    if(imgObj.getAttribute("src",2)=="../images/menu.png"){ 
        imgObj.src="../images/menu-x.png";
        
    }else{
        imgObj.src="../images/menu.png";
        
    }  
}

function change_pics(){
    var imgObj = document.getElementById("menu");
    var buttonObj = document.getElementById("button");
    if(buttonObj.style.display=="block",imgObj.getAttribute("src",2)=="images/menu.png"){
        buttonObj.style.display = "none"; 
        imgObj.src="images/menu-x.png";
        
    }else{
        buttonObj.style.display = "block"; 
        imgObj.src="images/menu.png";
        
    }  
}

$(function(){
    $(".subNav").click(function(){
        $(this).toggleClass("v02").siblings(".subNav").removeClass("v02")
        $(this).next(".navContent").slideToggle(300).siblings(".navContent").slideUp(500);
    });

    $(".placesub").click(function(){
        $(this).toggleClass("v01").siblings(".placesub").removeClass("v01")
        $(this).next(".navContent").slideToggle(300).siblings(".navContent").slideUp(500);
    });

    // $('.bianse').click(function() {
    //     $(this).toggleClass("on").siblings(".bianse").removeClass("on")
    // });
})





