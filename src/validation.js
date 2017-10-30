let countInput = (count) => {
	
}

let email = (email) => {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}
let phone = (phone) => {
	var re = /^([+]?[0-9\s-\(\)]{3,25})*$/i;

	if(phone.length == 0 || phone.length > 16) return false
	else if(phone.match(re)) return true;
	else return false;
}

module.exports = {
	valid: (name, value) => {
		if(name == 'email'){
			return email(value);
		}else if(name == 'phone'){
			return phone(value);
		}
	}
 }