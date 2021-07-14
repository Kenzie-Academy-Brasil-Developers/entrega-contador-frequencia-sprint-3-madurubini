const button = document.getElementById("countButton");
button.addEventListener("click", function() {  
    let typedText = document.getElementById("textInput").value;
    typedText = typedText.toLowerCase(); 
    typedText = typedText.replace(/[^a-z'\s]+/g, ""); 
    let words = typedText.split(/\s/);
    
    let letterCounts = {};
    for (let i = 0; i < typedText.length; i++) {
        currentLetter = typedText[i];
        if (letterCounts[currentLetter] === undefined) {
            letterCounts[currentLetter] = 1; 
         } else { 
            letterCounts[currentLetter]++; 
         }
     } for (let letter in letterCounts) { 
        const span = document.createElement("span"); 
        const textContent = `"${letter}": ${letterCounts[letter]}, `;
        span.innerText = textContent; 
        const letters = document.getElementById("lettersDiv");
        letters.appendChild(span); 
     }
     let wordsCounts = {};
     for(let count = 0; count < words.length; count++){
         word = words[count];
         if(wordsCounts[word] === undefined){
             wordsCounts[word] = 1;
         } else {
             wordsCounts[word]++
         }
     }
     for (let word in wordsCounts) { 
        const span = document.createElement("span"); 
        const textContent = `"${word}": ${wordsCounts[word]}, `;
        span.innerText = textContent; 
        const letters = document.getElementById("wordsDiv");
        letters.appendChild(span); 
     }

      
                 
});

// const buttonReset = document.getElementById("resetButton");
// buttonReset.addEventListener("click", function(){
//     let typedText = document.getElementById("textInput").value;
//     typedText = typedText.toLowerCase(); 
//     typedText = typedText.replace(/[^a-z'\s]+/g, ""); 
//      typedText = {};
   

// })


