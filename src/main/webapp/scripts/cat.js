/**
 * 
 */
let catText = document.getElementById('cat').textContent
let catDiv =document.getElementById('cat');


catDiv.onmouseover = function(){
	document.getElementById('cat').textContent="meow";
}
catDiv.onmouseout = function(){
	document.getElementById('cat').textContent=catText;
}