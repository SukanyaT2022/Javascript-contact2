
// step 1 make object constructure
function Person(id, first, last, address, phone) {
    this.id = id;
    this.firstName = first;
    this.lastName = last;
    this.address = address;
    this.phone = phone;
  }

  //step 2 create function when user --add function
//  2.1crate empty object array evry time user add info 
//and click add it will add to new object and add to objArrsy
//2.2 read value then add contact
var objArray = []
function addContactFunc(){
    let storeID = document.getElementById('readID').value
    let storeFirstName = document.getElementById('readFirstName').value
    let storeILastName = document.getElementById('readLastName').value
    let storeAddress = document.getElementById('readAddress').value
    let storePhoneNumber = document.getElementById('readPhoneNo').value


    // 2.2 create an new object with value that read
    const contactList = new Person(storeID, storeFirstName, storeILastName, storeAddress, storePhoneNumber);

//2.3 add new object to array
objArray.push(contactList)
displayContact()


//make input empyty after click add button
document.getElementById('readID').value = " "
document.getElementById('readFirstName').value = " "
document.getElementById('readLastName').value = " "
document.getElementById('readAddress').value = " "
document.getElementById('readPhoneNo').value = " "

}

// step3 display -- before put new contact clear it out and then add new contact
function displayContact(){
  //3.1 remove div when user add second time and third time so it 's not duplicate
  //we use while loop coz we donot know how many time user will add new contact


  let div = document.getElementById('contactList')
  //id contactList control the whole section of new contact


  //first child what inside div --remove it all
  while(div.firstChild){
div.removeChild(div.firstChild)
  }
//3.2  newdiv is small box when user type then show on the right box
for(i=0; i < objArray.length; i++){
    //crate small box
    var newdiv = document.createElement('div')
    newdiv.setAttribute('class', 'contact')// we crate class for small box for style css


    //create paragprah inside div --only id
    var p2 = document.createElement('p')//make p tag
    var text2= document.createTextNode('ID:' + objArray[i].id)// we crate text ID-so show ID on the box
    p2.appendChild(text2) //appendchild put text2 to p2 the paragraph
    newdiv.appendChild(p2)
  

    //create first name -- and put p tag insidediv
    var p3 = document.createElement('p')
    var text3 = document.createTextNode('First Name' + objArray[i].firstName)
    p3.appendChild(text3) // put text in the paragraph
    newdiv.appendChild(p3)//put paragraph in div

    //create last name -- and put p tag insidediv
    var p4 = document.createElement('p')
    var text4 = document.createTextNode('Last Name' + objArray[i].lastName)
    p4.appendChild(text4) // put text in the paragraph
    newdiv.appendChild(p4)//put paragraph in div

      //create address -- and put p tag inside div
      var p5 = document.createElement('p')
      var text5 = document.createTextNode('Address' + objArray[i].address)
      p5.appendChild(text5) // put text in the paragraph
      newdiv.appendChild(p5)//put paragraph in div

          //create phone
          var p6 = document.createElement('p')
          var text6 = document.createTextNode('Phone' + objArray[i].phone)
          p6.appendChild(text6) // put text in the paragraph
          newdiv.appendChild(p6)//put paragraph in div

   //create delete button
   var deleteButton = document.createElement('input')
   deleteButton.setAttribute('type', 'button')
   deleteButton.setAttribute('class', 'styelDeleteButton')
     deleteButton.setAttribute('value', 'Delete') 
     //line 99  where we call function delete --function line 110
     deleteButton.setAttribute('onclick', 'deleteContactFunc('+ objArray[i].id +')')  
      //call delete function from here and then pass id- identify which box to delete
      newdiv.appendChild(deleteButton)


//final step -put all id first name last name in the div
    document.getElementById('contactList').appendChild(newdiv)// add the whole div to the contactList id

}

}
// delete function - which id in parameter
function deleteContactFunc(id){
for(i=0;i<objArray.length;i++){
  if (id==objArray[i].id){
objArray.splice(i,1)//position i  we want to remove one value
break
  } 
}
displayContact()//refresh the page and display
}





// id is from user so no parameter here
function searchFromIDFunc(){
  var id = document.getElementById('searchID').value
  let div = document.getElementById('myModal')
  //id contactList control the whole section of new contact


  //purpose for while loop everytime when refresh it delete old one --for new one appear
  while(div.firstChild){
div.removeChild(div.firstChild)
  } 

  for(i=0; i<objArray.length; i++){
    if(id==objArray[i].id){
      // alert(objArray[i].firstName + " " +objArray[i].lastName)

      //modal
//3.2  newdiv is small box when user type then show on the right box

    //crate small box
    var newdiv = document.createElement('div')
    newdiv.setAttribute('class', 'contact')// we crate class for small box for style css


    //create paragprah inside div --only id
    var p2 = document.createElement('p')//make p tag
    var text2= document.createTextNode('ID:' + objArray[i].id)// we crate text ID-so show ID on the box
    p2.appendChild(text2) //appendchild put text2 to p2 the paragraph
    newdiv.appendChild(p2)
  

    //create first name -- and put p tag insidediv
    var p3 = document.createElement('p')
    var text3 = document.createTextNode('First Name' + objArray[i].firstName)
    p3.appendChild(text3) // put text in the paragraph
    newdiv.appendChild(p3)//put paragraph in div

    //create last name -- and put p tag insidediv
    var p4 = document.createElement('p')
    var text4 = document.createTextNode('Last Name' + objArray[i].lastName)
    p4.appendChild(text4) // put text in the paragraph
    newdiv.appendChild(p4)//put paragraph in div

      //create address -- and put p tag inside div
      var p5 = document.createElement('p')
      var text5 = document.createTextNode('Address' + objArray[i].address)
      p5.appendChild(text5) // put text in the paragraph
      newdiv.appendChild(p5)//put paragraph in div

          //create phone
          var p6 = document.createElement('p')
          var text6 = document.createTextNode('Phone' + objArray[i].phone)
          p6.appendChild(text6) // put text in the paragraph
          newdiv.appendChild(p6)//put paragraph in div

  

//final step -put all id first name last name in the div
    document.getElementById('myModal').appendChild(newdiv)// add the whole div to the contactList id

}
    }
  
}


