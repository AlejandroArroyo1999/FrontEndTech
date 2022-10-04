const quotes = [
    {quote: "Hello", author: "Alejandro"},
    {quote: "I", author: "Alejandro"},
    {quote: "am", author: "Alejandro"},
    {quote: "Alex", author: "Alejandro"},
    {quote: "What", author: "Alejandro"},
    {quote: "is", author: "Alejandro"},
    {quote: "your", author: "Alejandro"},
    {quote: "name", author: "Alejandro"},
    {quote: "?", author: "Alejandro"},
    {quote: "Goodbye", author: "Alejandro"}
];

const getQuoteAndAuthor = function() {
    let index = Math.floor(Math.random() * 10);
    console.log(index);
    return quotes[index];
}

$(document).ready(function() {
    let newquote = getQuoteAndAuthor();
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    $("body, #tweet, #tumblr, #new-quote").animate({backgroundColor: randomColor});
    $("#text").text(newquote.quote);
    $("#author").text(newquote.author);
    $("#new-quote").click(function(){
        newquote = getQuoteAndAuthor();
        randomColor = Math.floor(Math.random()*16777215).toString(16);
        $("body, #tweet, #tumblr, #new-quote").animate({backgroundColor: randomColor});
        $("#text").text(newquote.quote);
        $("#author").text(newquote.author);
    });
})