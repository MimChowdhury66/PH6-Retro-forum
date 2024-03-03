const loadCard = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/retro-forum/latest-posts');
    const data = await res.json();
    const cards = [data];
    cards.forEach(function (card) {
        console.log(card);
    })


}








loadCard()
