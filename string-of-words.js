//

// Leon's try
function high (str) {
    const alphabet = " abcdefghijklmnopqrstuvwxz";
    // word is split into an array of letters, reduce will add the index of each letter for a total score
    const score = word => word.split("").reduce((a,c) => a + alphabet.indexOf(c),0);

    let highestWord = "";
    let highestCount = 0;

    str.split(" ").forEach(w => {
        const scoreCheck = score(w);
        if (scoreCheck > highestCount) {
            highestWord = w;
            highestCount = scoreCheck;
        }
    })
    return highestWord
}

console.log(high("man i need a taxi up to ubud"), "taxi")