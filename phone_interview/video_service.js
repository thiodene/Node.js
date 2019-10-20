'use strict';
// Build thaa function counts the most viewed videos
class video
{
  // construct video
  constructor(name,date)
  {
    this.name = name;
    this.date = date;
  }
}

class videoView
{
  constructor()
  {
    this.view = 1;
  }

  insert(name,date)
  {
    var newVideo = new video(name,date);
    return newVideo;
  }

}


//function rankVideos()
//{

  // Get a timestamp for the last 24 hours from now
  //var ts = Math.round(new Date().getTime() / 1000);
  //var tsYesterday = ts - (24 * 3600);

//}


// Build the main function
function main()
{


  var videos = [["Video 1", "2019-01-10 00:00:00"],["Video 2",""],["Video 3",""],["Video 4", ""],["Video 5", ""],["Video 5",""]];

  var video = new videoView();
  video.insert("Video 1","2019-01-10 00:00:00");
  console.log(video);


}


// MAIN------------------------------------------------

main();
