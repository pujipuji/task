var mongoose = require('mongoose');
var Schema = mongoose.Schema;

contactSchema = new Schema( {
	
	unique_id: Number,
	email: String,
	name: String,
	number: String,
    userId: String
}),
Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;