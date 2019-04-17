
function Choose (){

	let chooseS = document.getElementById('un').selectedIndex;
	let opt =  document.getElementById('un').options;
			alert(`Do you want learn this ${opt[chooseS].text}`);		
};

/////////////////////////////////////////

function check () {
let checking = document.getElementById('one');
let checkBoxs = document.getElementById("two");
let checkBoxes = document.getElementById("three");
let checkBoxx = document.getElementById("four");
let checkBox5 = document.getElementById("five");
let checkBox6 = document.getElementById("six");
let checkBox7 = document.getElementById("seven");
let checkBox8 = document.getElementById("eight");
let checkBox9 = document.getElementById("nine");
let checkBox10 = document.getElementById("ten");
let checkBox11 = document.getElementById("eleven");
let checkBox12 = document.getElementById("twelve");

if(checking.checked || checkBoxs.checked || checkBoxes.checked || checkBoxx.checked || checkBox5.checked || checkBox6.checked || checkBox7.checked || checkBox8.checked || checkBox9.checked || checkBox10.checked || checkBox11.checked || checkBox12.checked ) {
	alert('You chose this unit');
} else {
	alert('You did not choose this unit');
}

};
function bod (){
	console.log(document.getElementById("cursors"));

}
	bod();

	let col = document.getElementById("number");
	console.log(col);

	 let tagName = document.getElementsByTagName("li");
	 console.log(tagName);



let sect = document.getElementById("sect");
let lab = sect.getElementsByTagName("label"); // children (label) to  parent (section)
	 for (let i = 0; i < lab.length; i++) {
	 let label = lab[i];
     console.log(label);
}

let count = lab;
console.log(count.length); // 12 // We have 12 items to label




let colection = document.getElementById("rad");
let rad = colection.getElementsByTagName("input");
for (let i = 0; i < rad.length; i++) {
	let radio = rad[i];
console.log(radio);
	
}


 let names = document.getElementsByName('r12');
console.log(names);
 let classNav = document.getElementsByClassName("nav");
 console.log(classNav);
 
