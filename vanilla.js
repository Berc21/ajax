function loadDoc() {
  const URL = "fake.json";
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", URL, true);
  xhttp.send(null);
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4 && this.status === 200) {
      let response = this.response;
      let jsonResponse = JSON.parse(response);

      jsonResponse.articles.map((post) => {

        const templateMarkup = `
      <div class="post-item">
      <a target="_blank" href="${post.url}" class="post-thumbnail">
        <img src="${post.urlToImage}" alt="">
      </a>
      <div class="post-text">
        <a target="_blank" href="${post.url}">
          <h3 class="post-title">${post.title}</h3>
        </a>
        <div class="post-meta">
          <span class="meta"><span class="meta-icon fa fa-user-circle-o" aria-hidden="true"></span><a class="meta-text">${post.author}</a></span>
          <span class="meta"><span class="meta-icon fa fa-clock-o" aria-hidden="true"></span><span class="meta-text">${post.publishedAt}</span></span>
        </div>
        <div class="post-summary">
          <p>
            ${post.description}
            <a target="_blank" href="${post.url}" class="post-read-more">Read more<span class="fa fa-chevron-circle-right" aria-hidden="true"></span></a>
          </p>
        </div>
      </div>
    </div>
      `;

        document.querySelector('.posts-list').insertAdjacentHTML('afterbegin', templateMarkup);
      });
    };
  }
}

loadDoc();