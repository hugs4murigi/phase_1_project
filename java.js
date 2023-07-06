


fetch('http://localhost:3000/quotes')
.then((res)=> res.json())
.then((quotes)=>{
    const button = document.getElementById('button')
    const author = document.getElementById('author')
    const content = document.getElementById('qoute')

    button.addEventListener('click', function(){
       const index = Math.floor(Math.random()* quotes.length)

       author.innerHTML=quotes[index].author
       content.innerHTML=quotes[index].quote
    })
}).catch(error => console.log('error'))




// const api_url='http://localhost:3000/quotes';
//  async function getQuote(url){
//    const response=await fetch(url);
//    let quotes=await response.json();
//    console.log(quotes);

//    const Quote= document.getElementById("quote");
//    const Author= document.getElementById("author");
//    Quote.innerHTML=quotes.quote
//    Author.innerHTML=quotes.author
   
//  }
//  getQuote(api_url)


