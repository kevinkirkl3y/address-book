//Business Logic for AddressBook ------
function AddressBook() {
  this.contacts = [];
  this.currentId = 0;
}
AddressBook.prototype.addContact = function(contact) {
  this.contacts.push(contact);
}
AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
}
//Business Logic For Contacts --------
function Contact(firstName, lastName, phoneNumber){
  this.firstname = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}
