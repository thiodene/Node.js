'use strict';
// Count most common Words in a phrase
function countWords(phrase,exwords){

    let word_list = [];
    let phrase_arr = [];
    let word_count = [];
    let new_phrase = '';
    let word;
    let occur = false;

    // Replace the punctuation and special characters by space, nothing or empty string
    new_phrase = phrase.replace(/'/g," ");
    new_phrase = new_phrase.replace(/’/g," ");
    new_phrase = new_phrase.replace(/\./g, "");
    new_phrase = new_phrase.replace(/,/g, "");
    new_phrase = new_phrase.replace(/;/g, "");

    // Remove excluded words
    for (let i=0; i<= exwords.length-1; i++){
        //new_phrase = new_phrase.replace(new RegExp(exwords[i], "gi"), "");
        new_phrase = new_phrase.replace(new RegExp("\\b" + exwords[i] + "\\b", "gi"), "");
        new_phrase = new_phrase.replace(/\s\s+/g, ' ');
        new_phrase = new_phrase.trim();
    }

    // Count every occurences of each words and put them into an array of object
    phrase_arr = new_phrase.split(" ");
    phrase_arr.forEach(function(word){

        for (let key in word_count){

            if(word_count[key].Word == word.toLowerCase()){
                occur = true;
                word_count[key].Value += 1;
            }

        }

        if (!occur)
            word_count.push({"Word":word.toLowerCase(), "Value":1}) ;
        else
            occur = false;



    });


    // Sort the array to return the most frequent words
    word_count.sort(function(a,b){return b.Value - a.Value;});

    // Now mFilter the array keeping only the ,max value records
    var max_value = word_count[0].Value;

    var filtered = word_count.filter(function(object){
        return object.Value == max_value;
    });

    // Build final matrix
    var final_matrix = [];

    for (let last_key in filtered){
        final_matrix.push(filtered[last_key].Word);
    }

    return final_matrix;
    //return filtered;
    //return word_count ;
    //return new_phrase ;
    //return word_list;
}



function main() {

    let phrase = "Jack and Jill went to the market to buy bread and cheese. Cheese is Jack’s and Jill’s favorite food.";
    let exwords = ["and", "he", "the", "to", "is", "Jack", "Jill"];

    // Execute the countWords function
    console.log(countWords(phrase,exwords));

}





// Execute the main() script

main();
