const loadCard = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    const cards = [data];
    cards.forEach(function (card) {
        // console.log(card);
        displayCards(card)
    })


}


const displayCards = cards => {
    // console.log(cards)

    const cardContainer = document.getElementById('latest-card');

    cards.forEach(card => {
        console.log(card);

        const latestCards = document.createElement('div');
        latestCards.classList = 'card lg:w-96 bg-base-100 shadow-xl';
        latestCards.innerHTML = `
        <figure>
            <img class="p-8 pb-0 " src="${card.cover_image}"
                alt="" />
        </figure>
        <div class="card-body">
        <p><i class="fa-solid fa-calendar-plus"></i> ${card.author?.posted_date || 'No publish Date'}</p>

            <h2 class="card-title text-xl font-extrabold">
                ${card.title}
            </h2>
            <p>${card.description}
            </p>
            </div>

        <div class="flex m-4 mt-0 gap-4">
        <img class="w-[44px] h-[44px] rounded-full" src="${card.profile_image
            }"
                alt="" />
        <div>
        <h4>${card.author.name}
        </h4>
        <p>${card.author?.designation || 'Unknown'}
        </p>
        </div>
        </div>
        
        
    `;

        cardContainer.appendChild(latestCards);


    })

}





loadCard()
