const quote = document.querySelector('#quotes div:first-child');
const author = document.querySelector('#quotes div:last-child');

const quotes = [
    {
        quote: '"지금이야말로 나를 더 훌륭한 사람으로 만들 때이다. 오늘 못하면 내일 그것을 할 수 있는가."',
        author: "-Thomas à Kempis-",
    },
    {
        quote: '"배는 항구에 있을 때 가장 안전하지만 그러기 위해 만들어진 것은 아니다."',
        author: "-Johann Wolfgang von Goethe, 괴테-",
    },
    {
        quote: '"‘가능성 있는 나’에 중독 되지 말 것."',
        author: "-Unknown-",
    },
    {
        quote: '"너 자신이 되어라 다른 사람은 이미 있으니까."',
        author: "-Oscar Wilde-",
    },
    {
        quote: '"할 수 있다고 믿든 할 수 없다고 믿든 믿는대로 될것이다."',
        author: "-Hanry Ford-",
    },
    {
        quote: '"나 자신을 최대한 활용하라, 그것이 나에게 주어진 전부이다."',
        author: "-Unknown-",
    },
    {
        quote: '"늦었다는 사람 따로있고 그냥 해버리는 사람 따로있다. 그 둘은 완전히 다른삶을 산다."',
        author: "-Unknown-",
    },
    {
        quote: '"힘들면 쉬었다하면 되고, 잘 안되면 다시하면 된다. 스스로에게 물어볼 중요한 것은 계속하고 싶은가이다."',
        author: "-글배우-",
    },
    {
        quote: '"당신에게 놀라운 동기부여가 찾아올 것이라 믿지 마라. 대신 해야한다고 말하는 작은 목소리를 경청하고 그 말을 따라라."',
        author: "-유재석-",
    },
    {
        quote: '"어두운 시절에 남이 내 곁을 지켜줄거라 생각하지 마라 해가 지면 내 그림자 조차도 나를 버리기 마련이다."',
        author: "-Ibn Taymiyyah, 시리아 법학자-",
    },
    
];

function randomQuotes(){
    const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerText = todaysQuote.quote;
    author.innerText = todaysQuote.author;
}

randomQuotes()
setInterval(randomQuotes, 6000);