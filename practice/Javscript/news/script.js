function fetchNews(){
    fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=6d2b69987c15492f8532359334664d6b')
.then((result)=>{
return result.json()
}).then((response)=>{
    console.log(response)
})
}
fetchNews()