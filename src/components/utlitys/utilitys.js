const getLocalStoredBooks = (keysName) => {
  const stroedBooks=localStorage.getItem(keysName);
  if(stroedBooks){
      return JSON.parse(stroedBooks)
    }else{
      return []
    }
}


const saveBook = (id,keysName) => {
  const stroedBook=getLocalStoredBooks(keysName)
  const exisit=stroedBook.find(book=>book.bookId===id)
    if(!exisit){
          stroedBook.push(id)
      localStorage.setItem(keysName,JSON.stringify(stroedBook))
  }

}

export{saveBook,getLocalStoredBooks}