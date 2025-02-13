var add=document.getElementsByClassName('add');
var cart=document.getElementById('cartid');
var total=0,chbut;
var incart=document.getElementById('incar');
let out=[0,0,0,0,0,0,0,0,0,0];
let cost=[0,0,0,0,0,0,0,0,0,0];
let pdt=['','','','','','','','','','','']
let price=[0,0,0,0,0,0,0,0,0,0];
let butct=[0,0,0,0,0,0,0,0,0,0];
let imadd=["",
"images/product-1-1.jpg",
"images/product-3-1.jpg",
"images/product-7-1.jpg",
"images/category-2.jpg",
"images/product-8-1.jpg",
"images/product-10-1.jpg",
"images/product-11-1.jpg",
"images/product-5-2.jpg",
"images/product-2-1.jpg",
];
window.onload=function(){
    if(window.innerWidth<775){        
    document.getElementById('carticon').click();
    }
}
function displaybut(b){
    var k= document.getElementById(b)
    var parent=k.parentElement;
    k.style.display="flex";
    document.getElementById("footid").style.display="block";
    document.getElementById("incar").style.display="block";
    document.getElementById("cargid").style.display="none";
    document.getElementById("ctxt").style.display="none";
    pdt[b]=parent.querySelector('p').textContent;
    cost[b]=parent.querySelector('p1').textContent.replace('$','');
    document.getElementById(b).parentElement.firstElementChild.style.border="1px solid hsl(14, 86%, 42%)";
    cart.style.height="21em";
    out[b]+=1;
    total+=out[b];
    price[b]=out[b]*cost[b];
    var temp=Number(b)+10;
    var ctem=Number(b)+30;
    k.querySelector('span').innerText=out[b];
    cart.querySelector('span').innerText=total;
    var newdiv=document.createElement("div");
    newdiv.setAttribute("class","in1");
    newdiv.setAttribute("id",temp);
    incart.appendChild(newdiv);
    var ctdiv=document.createElement("div");
    ctdiv.setAttribute("class","ct1");
    ctdiv.className +=" in1";
    ctdiv.setAttribute("id",ctem);
    document.getElementById("confid").appendChild(ctdiv);
    butct[b]=Number(b)+20;
    cartdisplay(b,temp,butct[b],ctem);
    final();
}
function increment(p){
    var s= document.getElementById(p)
    if(out[p]!=15){
        out[p]+=1;
        total+=1;
    }
    var temp=Number(p)+10;
    var ctem=Number(p)+30;
    butct[p]=Number(p)+20;
    s.querySelector('span').innerText=out[p];
    cart.querySelector('span').innerText=total;
    price[p]=out[p]*cost[p];    
    cartdisplay(p,temp,butct[p],ctem);
    final();
}
function decrement(p){
    var s= document.getElementById(p)
    if((out[p]!=0)&&(total!=0)){
        out[p]-=1;
        total-=1;
    }
    if(out[p]==0){
        document.getElementById(p).style.display="none";
        document.getElementById(p).parentElement.firstElementChild.style.border="none";
    }
    var temp=Number(p)+10;
    var ctem=Number(p)+30;
    butct[p]=Number(p)+20;
    s.querySelector('span').innerText=out[p];
    cart.querySelector('span').innerText=total;
    price[p]=out[p]*cost[p];   
    cartdisplay(p,temp,butct[p],ctem);
    final();
}
function cartdisplay(p,tem,but,ctem){
    document.getElementById(tem).innerHTML=`
    <p>${pdt[p]}</p> 
    <button id="${but}" ><svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="none" viewBox="0 0 10 10"><path fill="#CAAFA7" d="M8.375 9.375 5 6 1.625 9.375l-1-1L4 5 .625 1.625l1-1L5 4 8.375.625l1 1L6 5l3.375 3.375-1 1Z"/></svg></button>
    <p2><p1><span id="sp1">${out[p]}</span>x</p1> <p4>@$<span id="sp2">${cost[p]}</span></p4><p5> $<span id="sp3">${price[p]}</span></p5></p2>`
    document.getElementById(but).onclick=function(){close(but)} ;  
    try{
    if(out[p]==0){
        close(but);
        document.getElementById(ctem).remove();
    }
    document.getElementById(ctem).innerHTML=`
    <p>${pdt[p]}</p> <p5> $<span id="sp3">${price[p]}</span></p5>
    <p2><p1><span id="sp1">${out[p]}</span>x</p1> <p4>@$<span id="sp2">${cost[p]}</span></p4></p2>
    <img class="image" src="${imadd[p]}" alt="" >           `  
    }catch(error){

    }  
}
function close(cl){
    var pr=cl-20;
    var t=cl-10;
    var j=Number(cl)+10;
    total-=out[pr]
    cart.querySelector('span').innerText=total;
    document.getElementById(t).remove();
    document.getElementById(j).remove();
    out[pr]=0;
    price[pr]=0;
    document.getElementById(pr).style.display="none";
    final();
    if(total==0){
        document.getElementById("footid").style.display="none";
        document.getElementById("incar").style.display="none";
        document.getElementById("cargid").style.display="block";
        document.getElementById("ctxt").style.display="block";
        cart.style.height="20em";
    }   
}
function final(){
    var fincost=0;
    for(i=1;i<=9;i++){
        fincost+=price[i];
    }
    document.getElementById('footid').querySelector('span').innerText=fincost;
    document.getElementById('tot').querySelector('span').innerText=fincost;
}  
 function conforder(){
    document.getElementById('finconf').style.display="block";
    document.getElementById('contid').style.display="block";
 }   

 function cartside(x){
    var y=document.getElementById(x);
    if(y.style.display =='none'){
        y.style.display="flex";
    }else{
        y.style.display='none';
    }
 }
 window.onresize=function(){
    if(window.innerWidth >= 775){
        document.getElementById("cartid").style.display="flex";
        document.getElementById("cartid").style.height="66%";
}else{
    document.getElementById("cartid").style.display="none";
}
 }