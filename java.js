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

const timer = document.getElementById('time')
const textArea =document.getElementById('text-area')
const myButton = document.getElementById('button')

myButton.addEventListener("click", function(){
    timer.style.display="block"
    textArea.style.display="none"
     let second =3


     const interval1 = setInterval(()=>{
        second--

        if(second/3===0){
            clearInterval(interval1)
            timer.style.display="none"
            textArea.style.display="block"
            second = 3
        }
        document.getElementById('time').innerHTML=second

     },1000)
})
