let SportsApi =
  "http://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=c995723aef344edb8a8f079017657e28";
// let businesApi =
//   "http://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=c995723aef344edb8a8f079017657e28";

// let tecnologyApi =
//   "http://newsapi.org/v2/top-headlines?country=in&category=technology&apiKey=c995723aef344edb8a8f079017657e28";

// let scienceApi =
//   "http://newsapi.org/v2/top-headlines?country=in&category=science&apiKey=c995723aef344edb8a8f079017657e28";
// let entertainement =
//   "http://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=c995723aef344edb8a8f079017657e28";
// let healthApi =
//   "http://newsapi.org/v2/top-headlines?country=in&category=health&apiKey=c995723aef344edb8a8f079017657e28";

window
  .fetch(SportsApi)
  .then((sportsData) => {
    sportsData
      .json()
      .then((sports) => {
        console.log(sports.articles);
        let sportsFeed = sports.articles;
        let firstSportsBlock = sports.articles;

        let sportsnewsBlockOne = firstSportsBlock[0];
        document.getElementById("sportsFirstTemplate").innerHTML = `<ul>
             <img src="${sportsnewsBlockOne.urlToImage}" />
             <a href="${sportsnewsBlockOne.url}" target="_blank">
            
             </a>
          </ul>
          `;

        let output = [];
        for (let sport of sportsFeed) {
          output += `
            <ul class="list-group">
             <a href="${sport.url}" target="_blank">
               <li class="text-dark">
              ${sport.title}</li></a>
            </ul>
          `;
          document.getElementById("sportsAllTemplate").innerHTML = output;
        }
      })
      .catch((err) => console.log(err));
  })
  .catch((err) => console.log(err));

/*==========================Sports Section ends here===========================*/
