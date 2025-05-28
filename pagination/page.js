
const dataContainer = document.getElementById("data-container");
const cardContainer = document.querySelector(".card-container");
const pagination = document.getElementById("pagination");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const pageNumbers = document.getElementById("page-numbers");
const pageLinks = document.querySelectorAll('.page-link'); 


const cards = Array.from(dataContainer.getElementsByClassName('card')); 

// Calculate the total number of pages 
const totalPages = Math.ceil(cards.length / cardsPerPage); 
let currentPage = 1;

function displayPage(){
    const startIndex = (page -1) * cardsPerPage;
    const endIndex = startIndex + cardsPerPage; 

    cards.forEach(card , index){
        if(index >= startIndex && index<endIndex){
            card.style.display = "block";  
        }
        else {
            card.style.display = "none";
        }
    }

}







