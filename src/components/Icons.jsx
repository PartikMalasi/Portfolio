const Icons = () => {
  return (
    <div className="container">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
      />
      <link rel="stylesheet" href="/icons.css"></link>

      <hr class="b-0 w-64 h-1 mx-auto bg-gray-100 border-0 rounded md: dark:bg-gray-700" />
      <div className="icons">
        <ul>
          <li className="item">
            <a href="https://github.com/PartikMalasi">
              <i className="fab fa-github icon"></i>
            </a>
          </li>
          <li className="item">
            <a href="https://www.instagram.com/thisispartik/">
              <i className="fab fa-instagram icon"></i>
            </a>
          </li>
          <li className="item">
            <a href="https://linkedin.com/in/partik-malasi-736686249/">
              <i className="fab fa-linkedin icon"></i>
            </a>
          </li>
          <li className="item">
            <a href="https://x.com/MalasiPartik">
              <i className="fab fa-twitter icon"></i>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Icons;
