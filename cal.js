function getHistory(){
	return document.getElementById('history-value').innerText;
}
alert(getHistory());
function printHistory(num){
	document.getElementById('history-value').innerText=num;

}

function printOutput(num){
	document.getElementById('output-value').innerText=num;
}