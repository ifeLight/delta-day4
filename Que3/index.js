var fs = require("fs");

var essay =  fs.readFileSync("./essay.txt").toString();
breakedEssay = essay.split("");

try {
    var searchedWord = process.argv[2] ;
breakedSearchedWord = searchedWord.split("");

positions = [];


for (var i = 0; i < breakedEssay.length; i++) {
    if (breakedEssay[i] === breakedSearchedWord[0]) {
       var checkWord =  breakedEssay.slice(i, breakedSearchedWord.length + i).join("");
       if(checkWord === searchedWord) {
           positions.push(i)
       }
    }
    
}

if (positions.length === 0) {
    console.log("There are no match for the string above in the essay")
}
else {
    console.log("\n");
    console.log("The matches positions are: ");
    positions.forEach(function(element) {
        console.log(element)
    }, this);
}
}

catch (err) {
    console.log("There is something wrong in your input");
    console.log("It should be:");
    console.log("node index WORD_TO_SEARCH");
}