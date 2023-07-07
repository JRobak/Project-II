function esteregg(){
	var zdjecie = document.getElementById('esteregg');
	if(zdjecie.src.match('grafika/worm.png')){
		zdjecie.src = 'grafika/worm2.png';	
	} else{
		zdjecie.src = 'grafika/worm.png';	
	}
}
function data(){
    var data = new Date();
    var dzien = data.getDate();
    var dzienN = data.getDay();
    var miesiac = data.getMonth();
    var rok = data.getFullYear();
                      
    var dni = new Array("niedziela", "poniedziałek", "wtorek", "środa", "czwartek", "piątek", "sobota");
    var miesiace = new Array("stycznia", "lutego", "marca", "kwietnia", "maja", "czerwca", "lipca", "sierpnia", "września", "października", "listopada", "grudnia");
           
    var pokazDate = dni[dzienN] + ', ' + dzien + "<br />" + miesiace[miesiac] + ' ' + rok + ' r.';
	document.getElementById("data").innerHTML = pokazDate;
           
}        
function zegarek(){
    var data = new Date();
    var godzina = data.getHours();
    var minuta = data.getMinutes();
    var sekunda = data.getSeconds();
           
    if (minuta < 10) minuta = "0" + minuta;
    if (sekunda < 10) sekunda = "0" + sekunda;          
           
    var pokazDate = godzina + ':' + minuta + ':' + sekunda;
    document.getElementById("zegar").innerHTML = pokazDate;
           
    setTimeout(zegarek, 1000);            
}

function wypisywanieTekstu(){
	let tekstDoWys = document.getElementById('tekstDoWys');
	let tekst = document.getElementById('tekstButton44');
	
	tekstDoWys.innerHTML = tekst.value;	
}
function zmianaKoloru(){
	let kolorNapisu = document.getElementById('kolorNapisu');
	let kolorTla = document.getElementById('kolorTla');
	let tekstDoWys = document.getElementById('tekstDoWys');
	
	tekstDoWys.style.color = kolorNapisu.value;
	tekstDoWys.style.backgroundColor = kolorTla.value;
}
function rozmiar(val){
	document.getElementById('tekstDoWys').style.fontSize = val + "px";
}
function rozmiarRadius(val){
	document.getElementById('tekstDoWys').style.borderRadius = val + "px";
}
function czcionka(selectTag){
	var wybor = selectTag.options[selectTag.selectedIndex].text;
	
	document.getElementById('tekstDoWys').style.fontFamily=wybor;
}
function textShadow(){
	var numerShadow1 = document.getElementById('numerShadow1').value;
	var numerShadow2 = document.getElementById('numerShadow2').value;
	var numerShadow3 = document.getElementById('numerShadow3').value;
	var colorShadow = document.getElementById('colorShadow').value;
	
	document.getElementById('tekstDoWys').style.textShadow = numerShadow1 + 'px ' + numerShadow2 + 'px ' + numerShadow3 + 'px ' + colorShadow;
}
function border(selectTag){
	var numerBorder = document.getElementById('numerBorder').value;
	var colorBorder = document.getElementById('colorBorder').value;
	var wybor = selectTag.options[selectTag.selectedIndex].text;
	
	document.getElementById('tekstDoWys').style.border = numerBorder + 'px ' + wybor + colorBorder;
}
function checkboxText(){
	if (document.getElementById('checkbox2').checked == true){
    document.getElementById('tekstDoWys').style.fontStyle = "italic";
	} else{
    document.getElementById('tekstDoWys').style.fontStyle = "normal";
	}
  
	if (document.getElementById('checkbox1').checked == true){
    document.getElementById('tekstDoWys').style.fontWeight = "bold";
	} else{
    document.getElementById('tekstDoWys').style.fontWeight = "normal";
	}
}	

function wylosuj(){
	var min = document.getElementById('min').value;
	var max = document.getElementById('max').value;
	
	document.getElementById('wylosowanaLiczba').innerHTML = Math.floor(Math.random() * (+max + 1 - +min)) + +min;
}	






