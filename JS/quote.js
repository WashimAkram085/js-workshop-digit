var data;

const display = () =>{

    //generate a random index between 0 to no of data
    let i = Math.floor(Math.random()*data.length);

    let quote = data[i].text; //quote getting from api
    let author = data[i].author; // authors name getting from api

    //if authors name is unknown
    if(!author){
        author = "Unknown";
    }
        
    document.querySelector(".text").innerHTML = quote;
    document.querySelector(".author").innerHTML = author;
    
}

// Fetching the quotes from the type.fit API using promises
fetch("https://type.fit/api/quotes")
    .then(function(response) {
        return response.json(); 
    })
    .then(function(data) {
        this.data = data; 
        display() 
});


// for button
function reset(){
    display();
}
