import axios from "axios";

const Tabs = (topics) => {
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //
  // console.log(topics);
  let topic = document.createElement('div');
  let subdiv1 = document.createElement('div');
  let subdiv2 = document.createElement('div');
  let subdiv3 = document.createElement('div');

  

  topic.classList.add('topics');
  subdiv1.classList.add('tab');
  subdiv2.classList.add('tab');
  subdiv3.classList.add('tab');

  subdiv1.textContent = topics[0];
  subdiv2.textContent = topics[1];
  subdiv3.textContent = topics[2];

  topic.appendChild(subdiv1);
  topic.appendChild(subdiv2);
  topic.appendChild(subdiv3);
  return topic;
}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  let sel = document.querySelector(selector);
  axios.get('https://lambda-times-api.herokuapp.com/topics')
  .then(rem => 
  {
    let arr = rem.data.topics;
    sel.appendChild(Tabs(arr));
  })
  .catch(err => {console.log(err)});
}

export { Tabs, tabsAppender }
