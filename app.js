let form = document.getElementById("form");
let nome = document.getElementById("name");
let phone = document.getElementById("phone");
let birth = document.getElementById("birthdate");
let email = document.getElementById("email");
let city = document.getElementById("city");
let college = document.getElementById("college");
let radios1 = document.getElementsByName("knowing");
let radios2 = document.getElementsByName("radio2");

form.addEventListener("submit", function(stop){
	let error = 0;
	if(/[^0-9][a-z][^0-9]/ig.test(nome.value) == false){
		error += 1;
		document.getElementById("nametitle").innerText = nome.title;
	}
	else{
		error = 0;
		document.getElementById("nametitle").innerText = '';
	}
	if(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im.test(phone.value) == false){
		error += 1;
		document.getElementById("phonetitle").innerText = phone.title
	}
	else{
		error = 0;
		document.getElementById("phonetitle").innerText = ""
	}
	if(/^([a-zA-Z0-9\._]+)@([a-zA-Z0-9])+.([a-z]+).([a-z])?$/.test(email.value) == false){
		error += 1
		document.getElementById("emailtitle").innerText = email.title;
	}
	else{
		error = 0;
		document.getElementById("emailtitle").innerText = ""
	}
	if(/[^0-9][a-z][^0-9]/ig.test(college.value) == false){
		error += 1;
		document.getElementById("collegetitle").innerText = college.title;
	}
	else{
		error = 0
		document.getElementById("collegetitle").innerText = "";
	}
	/*if do campo da cidade/
	if(){
		error += 1;
		document.getElementById("citytitle").innerText = city.title ;
	}
	else{
		error = 0;
		document.getElementById("citytitle").innerText = "";
	}
	*/
	/* if do campo birthdate
	if(){
		error += 1
		document.getElementById("birthtitle").innerText = birthdate.title 
	}
	else{
		error = 0
		document.getElementById("birthtitle").innerText = "";
	}
	*/
	if (radios1[0].checked === false && radios1[1].checked === false && radios1[2].checked === false && radios1 [3].checked === false && radios1[4].checked === false && radios1[5].checked === false && radios1[6].checked === false){
		error += 1
		document.getElementById("radios1title").innerText = "Escolha uma Opção"; 
	}
	else{
		error = 0;
		document.getElementById("radios1title").innerText = "";
	}
	if (radios2[0].checked === false && radios2[1].checked === false && radios2[2].checked === false && radios2 [3].checked === false && radios2[4].checked === false && radios2[5].checked === false && radios2[6].checked === false){
		error += 1
		document.getElementById("radios2title").innerText = "Escolha um opção";
	}
	else{
		error = 0;
		document.getElementById("radios2title").innerText = "";
	}
	if (error > 0){
		stop.preventDefault();
	}

})
