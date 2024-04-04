
const quotes = [
    "What goes around comes around", 
    "Good things come to those who wait", 
    "Rules are made to be broken", 
    "When one door closes, another door opens", 
    "Don't worry, be happy", 
    "There is no such thing as a stupid question, only stupid people",
    "Pick the low hanging fruit first",
    "When life gives you lemons, make lemonade", 
    "No use crying over spilled milk", 
    "An apple a day keeps the doctor away", 
    "Money cannot buy happiness", 
    "Please do not try this at home", 
    "It's darkest just before dawn", 
    "It takes more muscles to frown than to smile", 
    "Low man on the totem pole"]

const usedIndexes = new Set()
const quoteElement = document.getElementById("quote")

function generateQuote() {
    if (usedIndexes.size >= quotes.length) {
        usedIndexes.clear()
    }

    while (true) {
        const randIndex = Math.floor(Math.random() * quotes.length)

        if (usedIndexes.has(randIndex)) continue

        quoteElement.innerHTML = quotes[randIndex];
        usedIndexes.add(randIndex)
        break
    }
    
}