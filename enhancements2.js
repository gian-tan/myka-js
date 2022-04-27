"use strict";

/* get variables from application and check rules */
function validate() {
	var errMsg = "";
	var result = true;
	
	/* Ref Number */
	var refno = document.getElementById("refno").value;
	var errref = document.getElementById("errref");
	if (!refno.match(/\d{5}/)){
		// errMsg = errMsg + "Your reference number is invalid\n";
		errref.style.display = "block";
		result = false;
	}
	
	/* First Name */
	var names = document.getElementById("names").value;
	var errnames = document.getElementById("errnames");
	if (!names.match(/^[a-zA-Z]+$/)){
		// errMsg = errMsg + "Your first name must only contain alpha characters\n";
		errnames.style.display = "block";
		result = false;
	}
	
	/* Last Name */
	var fnames = document.getElementById("fnames").value;
	var errfnames = document.getElementById("errfnames");
	if (!fnames.match(/^[a-zA-Z-]+$/)){
		// errMsg = errMsg + "Your last name must only contain alpha characters and hyphen\n";
		errfnames.style.display = "block";
		result = false;
	}
	
	/* age */
	var age = calculate_age();
	var errdate1 = document.getElementById("errdate1");
	var errdate2 = document.getElementById("errdate2");
	if (age < 15) {
		// errMsg = errMsg + "Your age must be 15 or older.\n";
		errdate1.style.display = "block";
		result = false;
	}
	else if (age > 80){
		// errMsg = errMsg + "Your age must be 80 or younger.\n";
		errdate2.style.display = "block";
		result = false;
	}
	
	/* Gender */
	var male = document.getElementById("male").checked;
	var female = document.getElementById("female").checked;
	var errgender = document.getElementById("errgender");
	/* pick 1 gender */
	if (!(male || female)) {
		errgender.style.display = "block";
	}
	
	/* Address */
	var street = document.getElementById("street").value;
	var errstreet = document.getElementById("errstreet");
	if (!street.match(/^\d+\s[A-z'-]+\s[A-z]+/)){
		// errMst += "Your street address format might be wrong\n";
		errstreet.style.display = "block";
		result = false;
	}
	
	var subtown = document.getElementById("subtown").value;
	var errsubtown = document.getElementById("errsubtown");
	if (!subtown.match(/^[a-zA-Z]+$/)){
		// errMsg = errMsg + "Your suburb/town must only contain alpha characters\n";
		errsubtown.style.display = "block";
		result = false;
	}
	
	/* contact */
	var emailad = document.getElementById("emailad").value;
	var erremail = document.getElementById("erremail");
	if (!emailad.match(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/)){
		// errMsg = errMsg + "Your email address is in an invalid format\n";
		erremail.style.display = "block";
		result = false;
	}
	var phone = document.getElementById("phone").value;
	var errphone = document.getElementById("errphone");
	if (!phone.match(/\d{8,12}/)){
		// errMsg = errMsg + "Your phone number must be 8 to 12 numbers long\n";
		errphone.style.display = "block";
		result = false;
	}
	
	/* state and postcode */
	var state = document.getElementById("state").value;
	var errstate = document.getElementById("errstate");
	if (state == "Please Select"){
		errstate.style.display = "block";
		result = false;
	}
	var postcode = document.getElementById("postcode").value;
	var errpost = document.getElementById("errpost");
	if (!postcode.match(/\d{4}/)){
		errpost.style.display = "block";
		result = false;
	}
	/* parameters */
	if (state == "VIC" && !postcode.toString().startsWith("3") && !postcode.toString().startsWith("8") ||
		(state == "NSW" && !postcode.toString().startsWith("1") && !postcode.toString().startsWith("2")) ||
		(state == "QLD" && !postcode.toString().startsWith("4") && !postcode.toString().startsWith("9")) ||
		(state == "NT" && !postcode.toString().startsWith("0")) ||
		(state == "WA" && !postcode.toString().startsWith("6")) ||
		(state == "SA" && !postcode.toString().startsWith("5")) ||
		(state == "TAS" && !postcode.toString().startsWith("7")) ||
		(state == "ACT" && !postcode.toString().startsWith("0"))	
	){
		errpost.style.display = "block";
		result = false;
	}
	
	
	/* skills */
	var html = document.getElementById("html").checked;
	var css = document.getElementById("css").checked;
	var photoshop = document.getElementById("photoshop").checked;
	var indesign = document.getElementById("indesign").checked;
	var ruby = document.getElementById("ruby").checked;
	var cplus = document.getElementById("cplus").checked;
	var csharp = document.getElementById("csharp").checked;
	var oskills = document.getElementById("oskills").checked;
	var otherskills = document.getElementById("otherskills").value;
	/* select at least 1 skill */
	if (!(html || css || photoshop || indesign || ruby || cplus || csharp || oskills)){
		// errMsg += "choose skill";
		errskill.style.display = "block";
		result = false;
	}
	
	if (oskills && otherskills == 0) {
		errskill2.style.display = "block";
		result = false;
	}
	
	
	if (errMsg != ""){
		alert(errMsg);
	}
	return result; //wrong info won't be send
}

/* get genders as string */
function getGender() {
	var genderName = "unknown";
	var genderArray = document.getElementById("gender").getElementsByTagName("input");
		for (var i = 0; i < genderArray.length; i++) {
			if (genderArray[i].checked)
				genderName = genderArray[i].value;
		}
	return genderName;
}

/* carry over reference number */
function savejob1() {
	
	// alert("test");
	window.location.href = 'apply.html';
	localStorage.setItem("jobNumber", "75369");
	document.getElementById("refno").value = localStorage.getItem("jobNumber");
	
}

function savejob2() {
	
	// alert("test");
	window.location.href = 'apply.html';
	localStorage.setItem("jobNumber", "95147");
	document.getElementById("refno").value = localStorage.getItem("jobNumber");
	
}


function data() {
	if (window.localStorage.length != 0) {
	document.getElementById("names").value = window.localStorage.getItem("names");
	document.getElementById("fnames").value = window.localStorage.getItem("fnames");
	document.getElementById("dob").value = window.localStorage.getItem("dob");
	document.getElementById("street").value = window.localStorage.getItem("street");
	document.getElementById("subtown").value = window.localStorage.getItem("subtown");
	document.getElementById("postcode").value = window.localStorage.getItem("postcode");
	document.getElementById("emailad").value = window.localStorage.getItem("emailad");
	document.getElementById("phone").value = window.localStorage.getItem("phone");
	document.getElementById("state").value = window.localStorage.getItem("state");
	document.getElementById("skills").value = window.localStorage.getItem("skills");
	document.getElementById("refno").value = localStorage.getItem("jobNumber");
	
	// localStorage.getItem("skills");
	}
	
	switch(localStorage.gender){
		case "male":
		document.getElementById("male").checked = true;
		break;
		case "female":
		document.getElementById("female").checked = true;
		break;
	}
	
	var skills = localStorage.skills;
	if (skills.includes("html")) {
		document.getElementById("html").checked = true;
	}
	if (skills.includes("css")) {
		document.getElementById("css").checked = true;
	}
	if (skills.includes("photoshop")) {
		document.getElementById("photoshop").checked = true;
	}
	if (skills.includes("indesign")) {
		document.getElementById("indesign").checked = true;
	}
	if (skills.includes("ruby")) {
		document.getElementById("ruby").checked = true;
	}
	if (skills.includes("cplus")) {
		document.getElementById("cplus").checked = true;
	}
	if (skills.includes("csharp")) {
		document.getElementById("csharp").checked = true;
	}
	if (skills.includes("oskills")) {
		document.getElementById("oskills").checked = true;
	}
}

function storeLocalContent(names, fnames, dob, gender, skills, street, subtown, postcode, emailad, phone, state, html, css, photoshop, indesign, ruby, cplus, csharp, oskills) {
	/* text input */
	window.localStorage.setItem("names", names);
	window.localStorage.setItem("fnames", fnames);
	window.localStorage.setItem("dob", dob);
	window.localStorage.setItem("street", street);
	window.localStorage.setItem("subtown", subtown);
	window.localStorage.setItem("postcode", postcode);
	window.localStorage.setItem("emailad", emailad);
	window.localStorage.setItem("phone", phone);
	window.localStorage.setItem("state", state);
	/* radio */
	window.localStorage.gender = getGender();
	/* checkbox */
	var skills = "";
	if (html) skills = "html\n";
	if (css) skills = "css\n";
	if (photoshop) skills = "photoshop\n";
	if (indesign) skills = "indesign\n";
	if (ruby) skills = "ruby\n";
	if (cplus) skills = "cplus\n";
	if (csharp) skills = "csharp\n";
	if (oskills) skills = "oskills\n";
	window.localStorage.skills = skills;
	
	// localStorage.setItem("skills", skills);
	
	// skills = "html";
	
	// if( document.getElementById("css").checked == "true" ) skills = "css\n";
	// alert(skills);
	
	// alert (skills);
	
	// var cssCheck = document.getElementById("css");
	// alert(cssCheck.checked);
	
}

function clearLocalContent() {
	window.localStorage.clear();
}

function calculate_age() {
	// get current date
	var today = new Date();
	var dd = String(today.getDate()).padStart(2, '0');
	var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
	var yyyy = today.getFullYear();

	// get input DOB
	var date = document.getElementById("dob").value.split("-");
	var day = date[2];
  	var month = date[1];
  	var year = date[0];

  	// Validate
  	var age = yyyy- year;
  	var diffYear = yyyy- year;
  	
	return age;
}


function init() {
	
	var register = document.getElementById("register");
	register.onsubmit = validate;
	
	data();

}

window.onload = init;