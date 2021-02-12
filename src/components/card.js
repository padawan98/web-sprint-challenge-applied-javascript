import axios from "axios"

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  let card = document.createElement('div');
  let headLine = document.createElement('div');
  let author = document.createElement('div');
  let imgContainer = document.createElement('div');
  let img = document.createElement('img');
  let authorname = document.createElement('span');

  card.classList.add('card');
  headLine.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');
  //img and authorName not classes

  //info inside containers
  headLine.textContent = article.headline;
  img.src = article.authorPhoto;
  authorname.textContent = article.authorName;
  
  //appending
  card.appendChild(headLine);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(authorname);
  imgContainer.appendChild(img);
  card.addEventListener('click', console.log(article.headline));

  return card;
}

const cardAppender = (selector) => {
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //

  let container = document.querySelector(selector);
  axios.get('https://lambda-times-api.herokuapp.com/articles')
  .then(sel => 
    {
      console.log(sel.data.articles);
      let arr = (Object.keys(sel.data.articles));
      //object.keys puts key in an array
      arr.forEach(element =>
        {
          //rem.data.articles[topic] = object passed through function
          sel.data.articles[element].forEach(el =>
            {
              container.appendChild(Card(el));
            });
        });
    })
  .catch(err => {console.log(err)});
  //object.keys puts key in an array
  //rem.data.articles[topic] = object passed through function
}













export { Card, cardAppender }
