/*
2023.11.22
소멘텀 메인에 뜨는 명언
*/
const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#author span:first-child");
const quotes=[
    {
        quote:"When you believe in a thing, believe in it all the way, implicitly and unquestionable.",
        author:"Walt Disney"
    },{
        quote:"Never say goodbye because goodbye means going away and going away means forgetting.",
        author:"Peter Pan"
    },{
        quote:"The flower that blooms in adversity is the most rare and beautiful of all.",
        author:"Mulan"
    },{
        quote:"Anyone can be anything.",
        author:"Zootopia"
    },{
        quote:"But the thing that makes Woody special is he will never give up on you, ever.",
        author:"Toy Story"
    },{
        quote:"Don’t close your eyes. Look! The reality of fear can be different than you think.",
        author:"Finding Nemo"
    },{
        quote:"Today’s special moments are tomorrow’s memories.",
        author:"Aladdin"
    },{
        quote:"Remember, you’re the one who can fill the world with sunshine.",
        author:"Snow White and the Seven Dwarves"
    },{
        quote:"Venture outside your comfort zone. The rewards are worth it.",
        author:"Rapunzel"
    },{
        quote:"To love someone, you have to love yourself first.",
        author:"Beauty and the Beast"
    },{
        quote:"You cannot be happy every day. But there are happy things every day.",
        author:"Winnie the Pooh"
    },{
        quote:"If you focus on what you left behind, you will never see what lies ahead.",
        author:"Ratatouille"
    }
];

const todatQuote = quotes[Math.floor(Math.random()*quotes.length)];

quote.innerHTML=todatQuote.quote;
author.innerHTML="- "+ todatQuote.author;

console.log(quotes[Math.floor(Math.random()*quotes.length)].author);

/*
Math.random()
Math.floor() 버림
*/
