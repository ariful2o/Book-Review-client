const getLocalStoredBooks = () => {
  const stroedBooks=localStorage.getItem('wishlist');
  if(stroedBooks){
      return JSON.parse(stroedBooks)
    }else{
      return []
    }
}


const saveBook = (id) => {
  const stroedBook=getLocalStoredBooks()
  const exisit=stroedBook.find(book=>book.bookId===id)
    if(!exisit){
          stroedBook.push(id)
      localStorage.setItem('wishlist',JSON.stringify(stroedBook))
  }

}

export{saveBook,getLocalStoredBooks}