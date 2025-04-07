let remove = document.getElementById("remove");
let color = document.getElementById("colorSelect");

document.getElementById("remove").addEventListener("click", function(){
	let selectedIndex = color.selectedIndex;
	if(selectedIndex !== -1){
		color.remove(selectedIndex)
	}
})