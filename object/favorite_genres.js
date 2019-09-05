'use strict';

// Function gives the genres of songs to a person with respect to plylist
function listFavorite (userMap,genreMap)
{
  let favMap = [];
  let i;
  let j;
  let k;
  let keyu;
  let keyg;
  let userSelection;
  let maxGenre;
  let JSONiter = 0;

  // Go through each users and get their songs title
  for (keyu in userMap)
  {
    //console.log(userMap[keyu]);
    // Go through each song for that user and get their corresponding genre
    for (i = 0; i<=userMap[keyu].length - 1;i++)
    {
      // Get the genre for this song
      for (keyg in genreMap)
      {
        if (genreMap[keyg].indexOf(userMap[keyu][i]) != -1)
        {
          //console.log(keyg);
          // Now register each genre per user and the number of songs
          if (getUserGenre(favMap,keyu,keyg))
          {
            for (k=0;k<=favMap.length - 1;k++)
            {
              if (favMap[k].User == keyu && favMap[k].Genre == keyg)
                favMap[k].Number += 1;
            }
          }
          else
          {
            favMap.push({"User":keyu,"Genre":keyg,"Number":1});
          }
        }
      }

    }

  }


  // Now get the most frequent genres for one user
  let result = "{";
  let userGenres = [];
  for (keyu in userMap)
  {
    if (result.length > 1)
      result += ",\"" + keyu + "\":";
    else
      result += "\"" + keyu + "\":";

    // Get only the favMap for that user and check its max
    userSelection = favMap.filter(function(element){
      return element.User == keyu;
    });

    // Now sort it and get the biggest number
    userSelection.sort(function(a,b){
      return b.Number - a.Number;
    });
    // Take the max value for that user
    maxGenre = userSelection[0].Number;

    // Now construct
    userSelection = userSelection.filter(function(e){
      return e.Number == maxGenre;
    });

    console.log(userSelection);
    result += "[";
   // For each Genres build the user partial object
    JSONiter = 0;
    userSelection.forEach(function(el){
      userGenres.push(el);
      if (JSONiter > 0)
        result += ",\"" + el.Genre + "\"";
      else
        result += "\"" + el.Genre + "\"";
      JSONiter++;
    });
    result += "]";
    //result.push({keyu:userGenres});
  }

  result += "}";

    return JSON.parse(result);
  //return favMap;
}



function getUserGenre(favMap,user,genre)
{

  let isListed = false;

  let occurence = favMap.filter(function(element){
    return element.User == user && element.Genre == genre;
  });
  if (occurence.length >0)
    isListed = true;

  return isListed;

}

// MAIN function
function main()
{

  var userMap = {
    "David": ["song1", "song2", "song3", "song4", "song8"],
    "Emma":  ["song5", "song6", "song7"]
  };

  var genreMap = {
    "Rock":    ["song1", "song3"],
    "Dubstep": ["song7"],
    "Techno":  ["song2", "song4"],
    "Pop":     ["song5", "song6"],
    "Jazz":    ["song8", "song9"]
  };


  console.log(listFavorite(userMap,genreMap));


}



// MAIN----------------------------------------------------------

main();
