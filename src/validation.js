module.exports = {
	email: (email) => {
	  var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	  return re.test(email);
	},
	phone: (phone) => {
	  var re = /^([+]?[0-9\s-\(\)]{3,25})*$/i;

	  if(phone.length == 0 || phone.length > 16) return false
	  else if(phone.match(re)) return true;
	  else return false;
	}
 }