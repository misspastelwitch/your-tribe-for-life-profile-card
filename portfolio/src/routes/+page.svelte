<script>

    const imgContent = document.querySelectorAll(".img-content-hover");

function showImgContent(e) {
  for (var i = 0; i < imgContent.length; i++) {
    x = e.pageX;
    y = e.pageY;
    imgContent[i].style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }
}

document.addEventListener("mousemove", showImgContent);

const [red, green, blue] = [69, 111, 225]
const section1 = document.querySelector('.section1')

window.addEventListener('scroll', () => {
  const y = 1 + (window.scrollY || window.pageYOffset) / 150
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
  section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})
</script>


<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Stella Clough</title>
<link rel="stylesheet" href="styles.css">
<link rel="icon" type="image/x-icon" href="/assets/faviconiloveweb.png">
</head>
<body>
<nav>
  <div class="container">
    <div class="grid">
      <div class="column-xs-12 column-md-10">
        <p id="highlight">Stella Clough</p>
      </div>
      <div class="column-xs-12 column-md-2">
        <ul>
          <li><a id="body" href="#">Projects</a></li>
          <li><a href="#">About</a></li>
        </ul>
      </div>
    </div>
  </div>
</nav>
<section class="gallery">
  <div class="container">
    <div class="grid">
      <div class="column-xs-12 column-md-4">
        <figure class="img-container">
        <a href=https://misspastelwitch.github.io/I-love-web/>
          <img src="./assets/iloveweb.png" />
          <figcaption class="img-content">
            <h2 class="title">I love web</h2>
            <h3 class="category">Have a look</h3>
          </figcaption>
          <span class="img-content-hover">
            <h2 class="title">I love web</h2>
            <h3 class="category">Have a look</h3>
          </span>
        </figure>
      </div>
      <div class="column-xs-12 column-md-4">
        <figure class="img-container">
        <a href=https://dutchdigitalagencies-vacatures.onrender.com>
          <img src="./assets/DDA.png" />
        </a>
          <figcaption class="img-content">
            <h2 class="title">Dutch Digital Agencies</h2>
            <h3 class="category">Have a look</h3>
          </figcaption>
          <span class="img-content-hover">
            <h2 class="title">Dutch Digital Agencies</h2>
            <h3 class="category">Have a look</h3>
          </span>
        </figure>
      </div>
      <div class="column-xs-12 column-md-4">
        <figure class="img-container">
        <a href=https://github.com/misspastelwitch/the-startup-responsive-interactive-website>
          <img src="./assets/weirdcoolstuff.png">
        </a>
          <figcaption class="img-content">
            <h2 class="title">Weird Cool Stuff</h2>
            <h3 class="category">Have a look</h3>
          </figcaption>
          <span class="img-content-hover">
            <h2 class="title">Weird Cool Stuff</h2>
            <h3 class="category">Have a look</h3>
          </span>
        </figure>
      </div>
      <div class="column-xs-12 column-md-6">
        <figure class="img-container">
          <img src="./assets/noimage.png" />
          <figcaption class="img-content">
            <h2 class="title">Project</h2>
            <h3 class="category">Have a look</h3>
          </figcaption>
          <span class="img-content-hover">
            <h2 class="title">Project</h2>
            <h3 class="category">Have a look</h3>
          </span>
        </figure>
      </div>
      <div class="column-xs-12 column-md-6">
        <figure class="img-container">
          <img src="./assets/noimage.png" />
          <figcaption class="img-content">
            <h2 class="title">Project</h2>
            <h3 class="category">Have a look</h3>
          </figcaption>
          <span class="img-content-hover">
            <h2 class="title">Project</h2>
            <h3 class="category">Have a look</h3>
          </span>
        </figure>
      </div>
      <div class="column-lg-12">
        <figure class="img-container">
            <a href="https://misspastelwitch.github.io/repositorie/">
          <img src="./assets/repositorie.png" />
          </a>
          <figcaption class="img-content">
            <h2 class="title">Repositorie</h2>
            <h3 class="category">Have a look</h3>
          </figcaption>
          <span class="img-content-hover">
            <h2 class="title">Repositorie</h2>
            <h3 class="category">Have a look</h3>
          </span>
        </figure>
      </div>
    </div>
  </div>
</section>
<footer>
  <div class="container">
    <div class="grid">
      <div class="column-lg-3">
        <p> Made by Stella Clough</p>
      </div>
            <div class="column-lg-7">
        <a class="back" href="#body">Back to top</a>
      </div>
    </div>
  </div>
</footer>
</body>
</html>

<style>
     .container {
	 margin: auto;
	 padding: 0 1rem;
	 max-width: 71.25rem;
	 width: 100%;
    scroll-behavior: smooth;
}

@media (min-width: 48rem) {
 .container {
	 margin: 0;
	 padding: 0;
	 max-width: 100%;
	 width: 100%;
}


@media (max-width: 48rem) {
  .grid {
    display: grid;
    max-width: 80%;
}
}

}
 .grid {
	 display: flex;
	 flex-direction: column;
	 flex-flow: row wrap;
}
 .grid > [class*="column-"] {
	 display: block;
}
 .first {
	 order: -1;
}
 .last {
	 order: 12;
}
 .align-top {
	 align-items: start;
}
 .align-center {
	 align-items: center;
}
 .align-bottom {
	 align-items: end;
 }
     
     @import url("https://fonts.googleapis.com/css?family=Barlow:400,500,700");
 * {
	 box-sizing: border-box;
}
 *::before, *::after {
	 box-sizing: border-box;
}
 body {
	 font-family: "Barlow", sans-serif;
	 font-size: 1.125rem;
	 line-height: 1.5;
	 color: #787878;
	 background: #fef7f7;
	 text-rendering: optimizeLegibility;
}
 ul li {
	 margin: 0 1.5rem 0 0;
}
 a {
	 color: #787878;
	 text-decoration: none;
	 transition: all 0.2s ease;
}
 a:hover {
	 color: #ea8478;
}
 a.active {
	 color: #c63121;
}
 nav {
	 padding: 2.5rem 0 2.5rem 2.5rem;
}
@media (max-width: 48rem) {
 nav {
    padding: 2.5rem 0 2.5rem 0;
}
}

 nav ul {
	 display: flex;
	 justify-content: flex-start;
}
 nav li {
	 font-size: 1.25rem;
}
 nav li:nth-child(2) {
	 margin: 0;
}
 #highlight {
	 color: #ea8478;
	 font-size: 1.25rem;
}
 .gallery {
	 padding: 0 0 4rem 0;
     background-image: linear-gradient(#ea8478,#fce2e2,#fce2e2,#fce2e2,#fce2e2,#fce2e2, #fef7f7, #fef7f7, #fef7f7, #fef7f7, #fef7f7, #fef7f7);
}

 .img-container {
	 width: 100%;
	 height: 500px;
	 cursor: pointer;
	 overflow: hidden;
     padding: 0%;
}
 .img-container:hover .img-content-hover {
	 display: block;
}
 img {
	 width: 100%;
	 height: 500px;
	 object-fit: cover;
	 transform: scale(1);
	 transition: all 0.3s ease-in-out;
}
 img:hover {
	 transform: scale(1.05);
}
 .img-content-hover {
	 z-index: 1;
	 position: absolute;
	 top: 0;
	 left: 0;
	 white-space: nowrap;
	 display: none;
	 padding: 1rem;
	 background: #fff;
	 font-weight: 400;
	 margin-top: 1.25rem;
	 margin-left: -2rem;
}
 .title {
	 color: #2e2e2e;
	 font-size: 1.5rem;
	 font-weight: 700;
}

.back{
text-decoration: underline;
font-size: 1.5rem;
}

 .category {
	 font-size: 1rem;
	 color: #787878;
}
 .img-content {
	 display: none;
}

 .social li {
     margin: 1rem;
	 display: inline-block;
     color: #787878;
}
 footer {
	 padding: 1rem 0;
	 background: #f7f7f7;
	 text-align: center;
}
 @supports (display: grid) {
	 .gallery .grid {
		 grid-gap: 1rem;
	}
}

.grid {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: vertical;
  -webkit-box-direction: normal;
  -ms-flex-direction: column;
  flex-direction: column;
  -ms-flex-flow: row wrap;
  flex-flow: row wrap; }
  .grid > [class*="column-"] {
    display: block; }

.first {
  -webkit-box-ordinal-group: 0;
  -ms-flex-order: -1;
  order: -1; }

.last {
  -webkit-box-ordinal-group: 13;
  -ms-flex-order: 12;
  order: 12; }

.align-top {
  -webkit-box-align: start;
  -ms-flex-align: start;
  align-items: start; }

.align-center {
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center; }

.align-bottom {
  -webkit-box-align: end;
  -ms-flex-align: end;
  align-items: end; }

.column-xs-1 {
  -ms-flex-preferred-size: 8.33333%;
  flex-basis: 8.33333%;
  max-width: 8.33333%; }

.column-xs-2 {
  -ms-flex-preferred-size: 16.66667%;
  flex-basis: 16.66667%;
  max-width: 16.66667%; }

.column-xs-3 {
  -ms-flex-preferred-size: 25%;
  flex-basis: 25%;
  max-width: 25%; }

.column-xs-4 {
  -ms-flex-preferred-size: 33.33333%;
  flex-basis: 33.33333%;
  max-width: 33.33333%; }

.column-xs-5 {
  -ms-flex-preferred-size: 41.66667%;
  flex-basis: 41.66667%;
  max-width: 41.66667%; }

.column-xs-6 {
  -ms-flex-preferred-size: 50%;
  flex-basis: 50%;
  max-width: 50%; }

.column-xs-7 {
  -ms-flex-preferred-size: 58.33333%;
  flex-basis: 58.33333%;
  max-width: 58.33333%; }

.column-xs-8 {
  -ms-flex-preferred-size: 66.66667%;
  flex-basis: 66.66667%;
  max-width: 66.66667%; }

.column-xs-9 {
  -ms-flex-preferred-size: 75%;
  flex-basis: 75%;
  max-width: 75%; }

.column-xs-10 {
  -ms-flex-preferred-size: 83.33333%;
  flex-basis: 83.33333%;
  max-width: 83.33333%; }

.column-xs-11 {
  -ms-flex-preferred-size: 91.66667%;
  flex-basis: 91.66667%;
  max-width: 91.66667%; }

.column-xs-12 {
  -ms-flex-preferred-size: 100%;
  flex-basis: 100%;
  max-width: 100%; }

@media (min-width: 48rem) {
  .column-sm-1 {
    -ms-flex-preferred-size: 8.33333%;
    flex-basis: 8.33333%;
    max-width: 8.33333%; }
  .column-sm-2 {
    -ms-flex-preferred-size: 16.66667%;
    flex-basis: 16.66667%;
    max-width: 16.66667%; }
  .column-sm-3 {
    -ms-flex-preferred-size: 25%;
    flex-basis: 25%;
    max-width: 25%; }
  .column-sm-4 {
    -ms-flex-preferred-size: 33.33333%;
    flex-basis: 33.33333%;
    max-width: 33.33333%; }
  .column-sm-5 {
    -ms-flex-preferred-size: 41.66667%;
    flex-basis: 41.66667%;
    max-width: 41.66667%; }
  .column-sm-6 {
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    max-width: 50%; }
  .column-sm-7 {
    -ms-flex-preferred-size: 58.33333%;
    flex-basis: 58.33333%;
    max-width: 58.33333%; }
  .column-sm-8 {
    -ms-flex-preferred-size: 66.66667%;
    flex-basis: 66.66667%;
    max-width: 66.66667%; }
  .column-sm-9 {
    -ms-flex-preferred-size: 75%;
    flex-basis: 75%;
    max-width: 75%; }
  .column-sm-10 {
    -ms-flex-preferred-size: 83.33333%;
    flex-basis: 83.33333%;
    max-width: 83.33333%; }
  .column-sm-11 {
    -ms-flex-preferred-size: 91.66667%;
    flex-basis: 91.66667%;
    max-width: 91.66667%; }
  .column-sm-12 {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%; } }

@media (min-width: 62rem) {
  .column-md-1 {
    -ms-flex-preferred-size: 8.33333%;
    flex-basis: 8.33333%;
    max-width: 8.33333%; }
  .column-md-2 {
    -ms-flex-preferred-size: 16.66667%;
    flex-basis: 16.66667%;
    max-width: 16.66667%; }
  .column-md-3 {
    -ms-flex-preferred-size: 25%;
    flex-basis: 25%;
    max-width: 25%; }
  .column-md-4 {
    -ms-flex-preferred-size: 33.33333%;
    flex-basis: 33.33333%;
    max-width: 33.33333%; }
  .column-md-5 {
    -ms-flex-preferred-size: 41.66667%;
    flex-basis: 41.66667%;
    max-width: 41.66667%; }
  .column-md-6 {
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    max-width: 50%; }
  .column-md-7 {
    -ms-flex-preferred-size: 58.33333%;
    flex-basis: 58.33333%;
    max-width: 58.33333%; }
  .column-md-8 {
    -ms-flex-preferred-size: 66.66667%;
    flex-basis: 66.66667%;
    max-width: 66.66667%; }
  .column-md-9 {
    -ms-flex-preferred-size: 75%;
    flex-basis: 75%;
    max-width: 75%; }
  .column-md-10 {
    -ms-flex-preferred-size: 83.33333%;
    flex-basis: 83.33333%;
    max-width: 83.33333%; }
  .column-md-11 {
    -ms-flex-preferred-size: 91.66667%;
    flex-basis: 91.66667%;
    max-width: 91.66667%; }
  .column-md-12 {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%; } }

@media (min-width: 75rem) {
  .column-lg-1 {
    -ms-flex-preferred-size: 8.33333%;
    flex-basis: 8.33333%;
    max-width: 8.33333%; }
  .column-lg-2 {
    -ms-flex-preferred-size: 16.66667%;
    flex-basis: 16.66667%;
    max-width: 16.66667%; }
  .column-lg-3 {
    -ms-flex-preferred-size: 25%;
    flex-basis: 25%;
    max-width: 25%; }
  .column-lg-4 {
    -ms-flex-preferred-size: 33.33333%;
    flex-basis: 33.33333%;
    max-width: 33.33333%; }
  .column-lg-5 {
    -ms-flex-preferred-size: 41.66667%;
    flex-basis: 41.66667%;
    max-width: 41.66667%; }
  .column-lg-6 {
    -ms-flex-preferred-size: 50%;
    flex-basis: 50%;
    max-width: 50%; }
  .column-lg-7 {
    -ms-flex-preferred-size: 58.33333%;
    flex-basis: 58.33333%;
    max-width: 58.33333%; }
  .column-lg-8 {
    -ms-flex-preferred-size: 66.66667%;
    flex-basis: 66.66667%;
    max-width: 66.66667%; }
  .column-lg-9 {
    -ms-flex-preferred-size: 75%;
    flex-basis: 75%;
    max-width: 75%; }
  .column-lg-10 {
    -ms-flex-preferred-size: 83.33333%;
    flex-basis: 83.33333%;
    max-width: 83.33333%; }
  .column-lg-11 {
    -ms-flex-preferred-size: 91.66667%;
    flex-basis: 91.66667%;
    max-width: 91.66667%; }
  .gallery {
    -ms-flex-preferred-size: 100%;
    flex-basis: 100%;
    max-width: 100%;
 } }

@supports (display: grid) {
  .grid {
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows: auto; }
    .grid > [class*="column-"] {
      margin: 0;
      max-width: 80%; }
  .column-xs-1 {
    grid-column-start: span 1;
    grid-column-end: span 1; }
  .column-xs-2 {
    grid-column-start: span 2;
    grid-column-end: span 2; }
  .column-xs-3 {
    grid-column-start: span 3;
    grid-column-end: span 3; }
  .column-xs-4 {
    grid-column-start: span 4;
    grid-column-end: span 4; }
  .column-xs-5 {
    grid-column-start: span 5;
    grid-column-end: span 5; }
  .column-xs-6 {
    grid-column-start: span 6;
    grid-column-end: span 6; }
  .column-xs-7 {
    grid-column-start: span 7;
    grid-column-end: span 7; }
  .column-xs-8 {
    grid-column-start: span 8;
    grid-column-end: span 8; }
  .column-xs-9 {
    grid-column-start: span 9;
    grid-column-end: span 9; }
  .column-xs-10 {
    grid-column-start: span 10;
    grid-column-end: span 10; }
  .column-xs-11 {
    grid-column-start: span 11;
    grid-column-end: span 11; }
  .column-xs-12 {
    grid-column-start: span 12;
    grid-column-end: span 12; }
  @media (min-width: 48rem) {
    .column-sm-1 {
      grid-column-start: span 1;
      grid-column-end: span 1; }
    .column-sm-2 {
      grid-column-start: span 2;
      grid-column-end: span 2; }
    .column-sm-3 {
      grid-column-start: span 3;
      grid-column-end: span 3; }
    .column-sm-4 {
      grid-column-start: span 4;
      grid-column-end: span 4; }
    .column-sm-5 {
      grid-column-start: span 5;
      grid-column-end: span 5; }
    .column-sm-6 {
      grid-column-start: span 6;
      grid-column-end: span 6; }
    .column-sm-7 {
      grid-column-start: span 7;
      grid-column-end: span 7; }
    .column-sm-8 {
      grid-column-start: span 8;
      grid-column-end: span 8; }
    .column-sm-9 {
      grid-column-start: span 9;
      grid-column-end: span 9; }
    .column-sm-10 {
      grid-column-start: span 10;
      grid-column-end: span 10; }
    .column-sm-11 {
      grid-column-start: span 11;
      grid-column-end: span 11; }
    .column-sm-12 {
      grid-column-start: span 12;
      grid-column-end: span 12; } }
  @media (min-width: 62rem) {
    .column-md-1 {
      grid-column-start: span 1;
      grid-column-end: span 1; }
    .column-md-2 {
      grid-column-start: span 2;
      grid-column-end: span 2; }
    .column-md-3 {
      grid-column-start: span 3;
      grid-column-end: span 3; }
    .column-md-4 {
      grid-column-start: span 4;
      grid-column-end: span 4; }
    .column-md-5 {
      grid-column-start: span 5;
      grid-column-end: span 5; }
    .column-md-6 {
      grid-column-start: span 6;
      grid-column-end: span 6; }
    .column-md-7 {
      grid-column-start: span 7;
      grid-column-end: span 7; }
    .column-md-8 {
      grid-column-start: span 8;
      grid-column-end: span 8; }
    .column-md-9 {
      grid-column-start: span 9;
      grid-column-end: span 9; }
    .column-md-10 {
      grid-column-start: span 10;
      grid-column-end: span 10; }
    .column-md-11 {
      grid-column-start: span 11;
      grid-column-end: span 11; }
    .column-md-12 {
      grid-column-start: span 12;
      grid-column-end: span 12; } }
  @media (min-width: 75rem) {
    .column-lg-1 {
      grid-column-start: span 1;
      grid-column-end: span 1; }
    .column-lg-2 {
      grid-column-start: span 2;
      grid-column-end: span 2; }
    .column-lg-3 {
      grid-column-start: span 3;
      grid-column-end: span 3; }
    .column-lg-4 {
      grid-column-start: span 4;
      grid-column-end: span 4; }
    .column-lg-5 {
      grid-column-start: span 5;
      grid-column-end: span 5; }
    .column-lg-6 {
      grid-column-start: span 6;
      grid-column-end: span 6; }
    .column-lg-7 {
      grid-column-start: span 7;
      grid-column-end: span 7; }
    .column-lg-8 {
      grid-column-start: span 8;
      grid-column-end: span 8; }
    .column-lg-9 {
      grid-column-start: span 9;
      grid-column-end: span 9; }
    .column-lg-10 {
      grid-column-start: span 10;
      grid-column-end: span 10; }
    .column-lg-11 {
      grid-column-start: span 11;
      grid-column-end: span 11; }
    .column-lg-12 {
      grid-column-start: span 12;
      grid-column-end: span 12; }
    }} 
</style>