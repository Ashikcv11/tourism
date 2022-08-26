const form = document.getElementById('form');
const username = document.getElementById('username');
const number = document.getElementById('Number');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const usernameValue = username.value.trim();
	const numberValue = number.value.trim();
	const emailValue = email.value.trim();
	const passwordValue = password.value.trim();
	const password2Value = password2.value.trim();
	//let warn = document.getElementById("warn");
	
	if(usernameValue === '') {
		setErrorFor(username, 'Username cannot be blank');
	} else {
		setSuccessFor(username);
	}

	if(numberValue ==='') {
		setErrorFor(number, 'number cannot be blank');
	} else if(!isnumber(numberValue)) {
		setErrorFor(number, 'number should be 10 digits');
	} else{
		setSuccessFor(number);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'Email cannot be blank');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Not a valid email');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password cannot be blank');
	}else if(!i1spassword(passwordValue)) {
		setErrorFor(password,'password is poor it should be atleast 8 characters');
		warn.style.marginBottom="0px";
		warn.style.color="red";
		document.getElementById("password").style.borderColor="red";
		document.getElementById("opt2").style.color="red";
	}else if(!i3spassword(passwordValue)){
		setErrorFor(password,"password strength is poor pleas include uppercase , lowercase , special characters and digit and make it strong");
		warn.style.marginBottom="-15px";
		warn.style.color="orange";
		document.getElementById("password").style.borderColor="orange";
		document.getElementById("opt2").style.color="orange";

		}
		else{
			setSuccessFor(password);
			document.getElementById("password").style.borderColor="#2ecc71";

		}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password conformation cannot be blank');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords does not match');
	} else{
		setSuccessFor(password2);
	}
}


function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

	
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}

function isnumber(number){
	return /^\+?([0-9]{2})\)?[-. ]?([0-9]{4})[-. ]?([0-9]{4})$/.test(number);
}

function i1spassword(password){
	return  /(?=.{8,})/.test(password);
}

function i2password(password){
	return /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{6,}) or (?=.*[a-z])(?=.*[A-Z])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(password);
}

function i3spassword(password){
	return  /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/.test(password);
}
