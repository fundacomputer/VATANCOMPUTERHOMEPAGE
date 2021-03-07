
var aktif=0;
var pasif=null;
slider();

var ileri=document.createElement('div');
ileri.style.right="0";
ileri.innerHTML=">";
ileri.className="ileri";
ileri.onclick=function(){slider();}
var geri=document.createElement("div");
geri.style.left="0";
geri.innerHTML="<";
geri.className="geri";
geri.onclick=function(){ aktif-=2; slider();}
var anadiv=document.getElementById("slider");
anadiv.appendChild(ileri);
anadiv.appendChild(geri);


anadiv.onmouseover=function(){clearTimeout(slayt_zaman);}
anadiv.onmouseout=function(){slayt_zaman=setInterval(slider,5000);}

function slider(){
    
    if(aktif>=document.getElementsByClassName("slayt").length){ 
    aktif=0;
    }else if(aktif<0){ 
    aktif=document.getElementsByClassName("slayt").length-1; }
if(pasif!=null){
    
    var pasifdiv=document.getElementsByClassName("slayt")[pasif];
    pasifdiv.style.animation="hareketsagsol2 linear 1s";
    pasifdiv.style.right="-700px";
    
    }
    
    for(var s=0;s<document.getElementsByTagName("li").length;s++){
        document.getElementsByTagName("li")[s].setAttribute("class","");
    }
    
    var aktifdiv=document.getElementsByClassName("slayt")[aktif];
    aktifdiv.style.animation="hareketsagsol linear 1s";
    aktifdiv.style.opacity="1";
    aktifdiv.style.right="0px";
        document.getElementsByTagName("li")[aktif].setAttribute("class","aktifLi");
    
pasif=aktif;
aktif++;
}
    var slayt_zaman=setInterval(slider,5000);