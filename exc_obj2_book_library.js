
const table = document.getElementById("book_table");

class Book {
  constructor(title1, author1, pages1, read1) {
    
    this.title = title1;
    this.author = author1;
    this.pages = pages1;
    this.read = read1;
  }
  setRead() {
    
   if (this.read === 'read'){
    console.log(this.read);
    this.read = 'not read yet'
    console.log(this.read);
   } else {
    this.read = 'read';
   }
   
}
  // this.info = function(){
  //     return title + ' by ' + author + ', ' + pages + ' pages, ' + read;
  // }
}

const myLibrary = [];
const theHobbit = new Book(
  "The Hobbit",
  "J.R.R. Tolkien",
  295,
  "not read yet"
);
const theHobbit1 = new Book(
  "The Hobbit",
  "J.R.R. Tolkien",
  295,
  "not read yet"
);
const theHobbit2 = new Book(
  "The Hobbit",
  "J.R.R. Tolkien",
  295,
  "not read yet"
);
const theHobbit3 = new Book(
  "The Hobbit",
  "J.R.R. Tolkien",
  295,
  "not read yet"
);

myLibrary.push(theHobbit, theHobbit1, theHobbit2, theHobbit3);

function addBookToLibrary() {
  
  let get_title = document.getElementById("title").value;

  let get_author = document.getElementById("author").value;
  let get_pages = document.getElementById("pages").value;
  let get_read = document.getElementById("read");
  console.log(get_read);
  let get_read_text;
  if (get_read.checked) {
    get_read_text = "read";
  } else {
    get_read_text = "not read yet";
  }
  let newBook = new Book(get_title, get_author, get_pages, get_read_text);
  myLibrary.push(newBook);
  var number_of_books = myLibrary.length - 1;
 
  displayBooks(myLibrary);
}


function displayBooks(myLibrary) {
   
  for (var i = 1; i < table.rows.length; ) {
    table.deleteRow(i);
  }
  updateTable();
}

function updateTable(){
    for (var i = 1; i < table.rows.length; ) {
        table.deleteRow(i);
      }
      for (var j = 0; j < myLibrary.length; j++) {
        var changeStatusButton = document.createElement("button");
        changeStatusButton.innerText = "Read status";
        changeStatusButton.className = "btn_read";
        var td1= document.createElement("td");
        changeStatusButton.setAttribute("onclick", "changeReadStatus(this);");
        td1.append(changeStatusButton);

        var deleteRowButton = document.createElement("button");
        deleteRowButton.innerText = "Delete";
        deleteRowButton.className = "btn_delete";
        var td2= document.createElement("td");
        deleteRowButton.setAttribute("onclick", "deleteFunction(this);");
        td2.append(deleteRowButton);

        var row = table.insertRow();
        var cell1 = row.insertCell(0);
        var cell2 = row.insertCell(1);
        var cell3 = row.insertCell(2);
        var cell4 = row.insertCell(3);
        var cell5 = row.insertCell(4);
        var cell6 = row.insertCell(5);
        cell1.innerHTML = myLibrary[j].title;
        cell2.innerHTML = myLibrary[j].author;
        cell3.innerHTML = myLibrary[j].pages;
        cell4.innerHTML = myLibrary[j].read;
        cell5.appendChild(td1);
        cell6.appendChild(td2);
      }
}


function changeReadStatus(x) {
  let changeStatusButtonIndex = x.parentElement.parentNode.parentNode.rowIndex - 1;
  myLibrary[changeStatusButtonIndex].setRead(); 
  updateTable();
}

function deleteFunction(x) {
  let deleteRowIndex = x.parentElement.parentNode.parentNode.rowIndex - 1;
  myLibrary.splice(deleteRowIndex, 1);
  updateTable();
}
