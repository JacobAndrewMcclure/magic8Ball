//Array of message responses 20 total
let randomMessages = 
["As I see it, yes.",
"Ask again later.",
"Better not tell you now.",
"Cannot predict now.",
"Concentrate and ask again.",
"Don’t count on it.",
"It is certain.",
"It is decidedly so.",
"Most likely.",
"My reply is no.",
"My sources say no.",
"Outlook not so good.",
"Outlook good.",
"Reply hazy, try again.",
"Signs point to yes.",
"Very doubtful.",
"Without a doubt.",
"Yes.",
"Yes – definitely.",
"You may rely on it."]

//Onclick method that randomizes a number & displays message
function shakeBall() {
    var randomNumber = Math.floor(Math.random() * (randomMessages.length));
    document.getElementById("ballMess").innerHTML = randomMessages[randomNumber];
}