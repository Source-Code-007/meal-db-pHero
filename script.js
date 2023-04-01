let foodInner = document.querySelector('.food-inner')
let searchInp = document.getElementById('searchInp')
document.getElementById('searchBtn').addEventListener('click', () => {
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchInp.value}`)
        .then(res => res.json())
        .then(data => foodCard(data.meals))
})

function foodCard(foods){
    foodInner.innerHTML = ''
    for(food of foods){
        let foodDiv = document.createElement('div')
        foodDiv.className = 'card card-side bg-base-100 shadow-xl'
        foodDiv.innerHTML = `
                <figure class='w-3/6'><img src="${food.strMealThumb}" class='h-full' alt="Movie"/></figure>
                <div class="card-body w-3/6">
                  <h2 class="card-title justify-center">${food.strMeal}</h2>
                  <p>${food.strCategory}</p>
                  <div class="card-actions justify-center">
                        <a href="#foodModal" class="btn btn-primary">Details</a>
                        <div class="modal" id="foodModal">
                            <div class="modal-box">
                                <h3 class="font-bold text-lg">${food.strMeal}</h3>
                                <p class="py-4">${food.strInstructions}</p>
                                <div class="modal-action">
                                    <a href="#" class="btn">Yay!</a>
                                </div>
                            </div>
                        </div>
                  </div>
                </div>
        `
        foodInner.appendChild(foodDiv)
    }
}

// Showing items
let showAllBtn = document.getElementById('showAllItem')
let isShowing = false
showAllBtn.addEventListener('click', ()=>{
    let cards = document.querySelectorAll('.card')
    if(isShowing){
        for(let i = 6; i < cards.length; i++){
            cards[i].style.display = 'none'
        }
        isShowing =  false
        showAllBtn.innerText = 'show all'
    } else{
        for(card of cards){
            card.style.display = 'flex'
        }
        isShowing =  true
        showAllBtn.innerText = 'hide all'
    }
})