name  = `
# welcome 

### welcome 
`

/*
var index = 0
while (index < breakedEssay.length) {
    if (breakedEssay[index] === breakedSearchedWord[0]) {
       var checkWord =  breakedEssay.slice(index, breakedSearchedWord.length + index).join("");
       if(checkWord === searchedWord) {
           positions.push(index)
           index = breakedSearchedWord.length + index - 1
       }
    }
    index++;
}

*/


var h1 = /#{1}\s.* (\n)/gi ;
var h2 = /(\n)#{2}\s.* (\n)/gi ;
var h3 = /(\n)#{3\s (\n)/gi ;
var h4 = /(\n)#{4}\s.* (\n)/gi ;
var h5 = /(\n)#{5}\s.* (\n)/gi ;
var h6 = /(\n)#{6}\s.* (\n)/gi ;



while (match = h1.exec(name)) {
    console.log(match)
}


