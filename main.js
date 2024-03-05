const loadCard = async () => {
    loadingSpinner(true);

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


    });

    // hide loading spinner
    loadingSpinner(false)

}


const loadPost = async () => {
    loadingLoader(true)

    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/posts');
    const data = await res.json();
    const posts = data.posts;
    // console.log(posts);
    displayPosts(posts);
    allPost = posts;


}


const displayPosts = posts => {
    // console.log(posts);

    const postContainer = document.getElementById('allPosts');
    // postContainer.textContent = '';


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
                    <button onclick="handleMark(${post.id})"
    class="btn bg-[#10B981] mt-4  rounded-full" > <i
        class="fa-regular fa-envelope text-white"></i></button >
                </div >

            </div >
        </div >
    </div >




    `;
        postContainer.appendChild(allPosts)
    });

    loadingLoader(false);


}




// handle search button
const loadSearch = async (searchText) => {
    loadingLoader(true);
    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts?category=${searchText}`);
    const data = await res.json();
    const posts = data.posts;
    // console.log(posts);
    displaySearch(posts)

}


const displaySearch = posts => {
    // console.log(posts);
    const postContainer = document.getElementById('allPosts');
    postContainer.textContent = '';
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
                    <button onclick="handleMark(${post.id})" class="btn bg-[#10B981] mt-4  rounded-full"><i
    class="fa-regular fa-envelope text-white" ></i ></button >
                </div >

            </div >
        </div >
    </div >




    `;
        postContainer.appendChild(allPosts)
    });
    loadingLoader(false)

}



const handleSearch = () => {
    const inputField = document.getElementById('input-field');
    const searchText = inputField.value;
    // console.log(searchText);
    loadSearch(searchText)
}



let count = 0
let allPost = [];
const loadMark = (id) => {
    const selectedPost = allPost.find(post => {
        return post.id.toString() === id;
    })


    displayMark(selectedPost)
}
const displayMark = post => {
    const postContainer = document.getElementById('mark-read');

    const markedPost = document.createElement('div');
    markedPost.classList = 'flex justify-between gap-2 p-2 border m-2 bg-base-200 rounded-2xl';
    markedPost.innerHTML = `
    <h1 class="lg:text-lg lg:font-semibold">${post.title}</h1>
    <p><i class="fa-regular fa-eye"></i>${post.view_count}</p>
    `

    postContainer.appendChild(markedPost);

}
const handleMark = (id) => {
    count = count + 1;
    document.getElementById('read-count').innerText = count;
    loadMark(id.toString())


}



// loading function
const loadingSpinner = (isLoading) => {
    const spinner = document.getElementById('loading-spinner');
    if (isLoading) {
        spinner.classList.remove('hidden');


    }
    else {
        spinner.classList.add('hidden')

    }
}

const loadingLoader = (isLoading) => {
    const loader = document.getElementById('loading-loader');
    if (isLoading) {
        loader.classList.remove('hidden')
    }
    else {
        loader.classList.add('hidden')
    }
}





loadCard()
loadPost()