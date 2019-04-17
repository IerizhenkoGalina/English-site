
//  Изначально мы записываем в переменную table дочерний элемент "table"
// let table = document.body.children[0];

// после мы циклом делаем следующее: берём количество строк у таблицы "j < table.rows.length"
// и j раз делаем следующее: записываем в переменную row строку j. 
//После чего в строке j выбираем столбец j и задаем ему стиль.

let table = document.body.children[0];
for(let j = 0; j<table.rows.length; j++) {
 	let el = table.rows[j];
 	el.cells[j].style.backgroundColor = "red";
 	//console.log(el.cells[j]);
}



