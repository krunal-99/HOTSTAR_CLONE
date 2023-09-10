let movies = [
    {
        title : "https://img1.hotstarext.com/image/upload/f_auto,h_136/sources/r1/cms/prod/7778/1387778-t-cc992c4fc3f1",
        desc : "When Mirabel, the only ordinary member of the Madrigal family, discovers the magic surrounding their home is in danger, she may be her family's last hope.",
        genre : "Fantasy | Musical | Adventure | Kids",
        watchbtn : "",
        watchlist : "",
        background : "https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/7776/1387776-i-4ee598473544"
    },
    {
        title : "https://img1.hotstarext.com/image/upload/f_auto,h_148/sources/r1/cms/prod/3134/1383134-t-aeff48613307",
        desc : "The mother of all wars, the epitome of all rivalries, the cauldron of emotions, insecurities, jealousies, and power play - Mahabharat..!!",
        genre : "Mythology | Period | Drama ",
        watchbtn : "",
        watchlist : "",
        background : "https://img1.hotstarext.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/3132/1383132-i-011cefc50da9"
    },
    {
        title : "https://img10.hotstar.com/image/upload/f_auto,h_136/sources/r1/cms/prod/4910/1374910-t-c524f5224090",
        desc : "With the powerful Thanos on the verge of raining destruction upon the universe, the Avengers will have to risk everything to stop him.",
        genre : "Superhero | Action | Dark Humour | Fantasy",
        watchbtn : "",
        watchlist : "",
        background : "https://img10.hotstar.com/image/upload/f_auto/sources/r1/cms/prod/4908/1374908-i-7da93f401ac7",
    },
    {
        title : "https://img1.hotstarext.com/image/upload/f_auto,h_136/sources/r1/cms/prod/2600/1372600-t-f0d3579894ec",
        desc : "The unlikely duo of super spy Lance Sterling and scientist Walter Beckett is forced to work as a team for an ultimate undercover mission.",
        genre : "Animation | Action | Science Fiction | Light-hearted",
        watchbtn : "",
        watchlist : "",
        background : "https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/2598/1372598-i-8332fdf8601d"
    },
    {
        title : "https://img1.hotstarext.com/image/upload/f_auto,h_136/sources/r1/cms/prod/1138/1371138-t-b91786ea2bca",
        desc : "Captain Jack Sparrow senses the winds of ill-fortune when his nemesis Captain Salazar escapes from the Devil's Triangle, to kill every pirate at sea including him.",
        genre : "Action | Adventure | Creatures & Monsters | Fantasy",
        watchbtn : "",
        watchlist : "",
        background : "https://img1.hotstarext.com/image/upload/f_auto/sources/r1/cms/prod/1136/1371136-i-9654229f4d23"
    }
]

const carousel = document.querySelector(".carousel");
// console.log(carousel);
let sliders = [];

let slideIndex = 0;

const createSlide = () =>{
    if(slideIndex >= movies.length){
        slideIndex = 0;
    }
    
    let slide = document.createElement('div');
    var imageElement = document.createElement('img');
    let content = document.createElement('div');
    var titleImage = document.createElement('img');
    let descEl = document.createElement('p');
    let genreEl = document.createElement('h4');
    let watchBtnEl = document.createElement('button');
    let playSymbol = document.createElement('i');
    let spanEl = document.createElement('span');
    let watchListBtnEl = document.createElement('button');
    let watchSymbol = document.createElement('i');
    
    carousel.appendChild(slide);
    slide.appendChild(content);
    imageElement.appendChild(document.createTextNode(''));
    titleImage.appendChild(document.createTextNode(''));
    playSymbol.appendChild(document.createTextNode(''));
    watchSymbol.appendChild(document.createTextNode(''));
    descEl.appendChild(document.createTextNode(movies[slideIndex].desc));
    genreEl.appendChild(document.createTextNode(movies[slideIndex].genre));
    watchBtnEl.appendChild(playSymbol);
    watchListBtnEl.appendChild(watchSymbol);
    watchBtnEl.appendChild(spanEl);
    spanEl.appendChild(document.createTextNode('Watch Now'));
    watchBtnEl.appendChild(document.createTextNode(movies[slideIndex].watchbtn));
    watchListBtnEl.appendChild(document.createTextNode(movies[slideIndex].watchlist));
    slide.appendChild(imageElement);
    content.appendChild(titleImage);
    content.appendChild(descEl);
    content.appendChild(genreEl);
    content.appendChild(watchBtnEl);
    content.appendChild(watchListBtnEl);

    imageElement.src = movies[slideIndex].background;
    titleImage.src = movies[slideIndex].title;
    slideIndex++;

    slide.className = "slider";
    content.className = "slider-content";
    imageElement.className = "slider-img"; 
    titleImage.className = "title-img";
    descEl.className = "movie-desc";
    genreEl.className = "movie-desc";
    watchBtnEl.className = "watch";
    watchListBtnEl.className = "watchlist-btn";
    playSymbol.className = "fa-solid fa-play";
    watchSymbol.className = "fa-solid fa-plus";

    sliders.push(slide);
    
    if(sliders.length){
        sliders[0].style.marginLeft = `calc(-${100 * (sliders.length - 2)}% - ${30 * (sliders.length - 2)}px)`;
    }
}
for(i=0;i<3;i++){
    createSlide();
}

setInterval(() => {
    createSlide();
} , 2500);


const videoCards = [...document.querySelectorAll(".video-card")];

videoCards.forEach((item) => {
    item.addEventListener("mouseover" , () =>{
        let video = item.children[1];
        video.play();
    });
    item.addEventListener("mouseleave" , () =>{
        let video = item.children[1];
        video.pause();
    });
});

let cardContainers = [...document.querySelectorAll(".card-container")];
let preBtns = [...document.querySelectorAll(".pre-btn")];
let nxtBtns = [...document.querySelectorAll(".nxt-btn")];

cardContainers.forEach((items , i) => {
    let containerDimensions = items.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtns[i].addEventListener('click' , ()=>{
        items.scrollLeft += containerWidth -200;
    })

    preBtns[i].addEventListener('click' , ()=>{
        items.scrollLeft -= containerWidth + 200;
    })
})