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
        // console.log(card);

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


const loadPost = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const posts = data.posts;
    // console.log(posts);
    displayPosts(posts)
}


const displayPosts = posts => {
    // console.log(posts);
    const postContainer = document.getElementById('allPosts');
    posts.forEach(post => {
        // console.log(post);

        const allPosts = document.createElement('div');
        allPosts.classList = 'hero bg-base-200 grid grid-cols-1 rounded-3xl ';
        allPosts.innerHTML = `
        <div
        class="hero bg-base-200 grid grid-cols-1 rounded-3xl">
        <div
            class="hero-content flex-col lg:flex-row ">
            <div
                class="indicator">
                <span
                    class="indicator-item badge ${post.isActive ? "bg-[#10B981]" : "bg-[#FF3434]"} "></span>
                <img class="w-[92px] h-[72px] rounded-2xl lg:mb-28"
                    src="${post.image}"
                    class="max-w-sm rounded-lg shadow-2xl" />
            </div>


            <div>
                <div
                    class="flex gap-5 mb-2">
                    <p>#${post.category
            }
                    </p>
                    <p>Author:
                        ${post.author.name}
                    </p>
                </div>
                <h1
                    class="text-xl font-bold">
                    ${post.title}
                </h1>
                <p
                    class="pt-2 pb-2 border-b-2 border-dashed">
                    ${post.
                description}
                </p>
                <div
                    class="flex justify-between ">
                    <div
                        class="mt-6 space-x-2">
                        <i
                            class="fa-regular fa-comment-dots "></i>
                        ${post.comment_count}
                        <i
                            class="fa-regular fa-eye"></i>
                        ${post.view_count}
                        <i
                            class="fa-regular fa-clock"></i>
                        ${post.posted_time}
                        min
                    </div>
                    <button
                        class="btn bg-[#10B981] mt-4  rounded-full"><i
                            class="fa-regular fa-envelope text-white"></i></button>
                </div>

            </div>
        </div>
    </div>
                    

        
        
        `;
        postContainer.appendChild(allPosts)
    })
}







loadCard()
loadPost()