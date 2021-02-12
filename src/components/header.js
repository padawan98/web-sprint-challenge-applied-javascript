const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //

  let fileHeader = document.createElement('div');
  let fileDate = document.createElement('span');
  let fileTitle = document.createElement('h1');
  let fileTemp = document.createElement('span');

  fileHeader.classList.add('header');
  fileDate.classList.add('date');
  fileTemp.classList.add('temp');

  fileTitle.textContent = title;
  fileDate.textContent = date;
  fileTemp.textContent = temp;

  fileHeader.appendChild(fileDate);
  fileHeader.appendChild(fileTitle);
  fileHeader.appendChild(fileTemp);

  return fileHeader;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  let title = document.querySelector(selector);
  title.appendChild(Header('Luiza Nacif', '1998', 'Hi, my name is Luiza and I was born in 1998!'));
}

export { Header, headerAppender }
