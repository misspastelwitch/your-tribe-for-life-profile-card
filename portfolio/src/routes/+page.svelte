<!-- Font import moved to CSS for Svelte compatibility -->

  <header>
    <h1 class="title">
      Stella Clough
    </h1>
  </header>

  <!-- funky sentences -->
   
  <div class="wrapper">
    <div class="containera">
      <ul>
        <li class="role">
          I love web.
        </li>
        <li class="role">
          I create.
        </li>
        <li class="role">
          I learn.
        </li>
        <li class="role">
          I travel.
        </li>
        <li class="role">
          I bake.
        </li>
        <li class="role">
          I read.
        </li>
      </ul>
    </div>
        <!-- scroll down button -->
  <section>
    <a href="#" class="go-down" address="true"></a>
    </section>
    <section class="ok">
    </section>
  </div>

<section class="aboutme">
  <div class="container">
    <h2 class="subtitle">About me</h2>
    <p class="text">
      Hey there! I'm Stella, a 23 year old (aspiring) frontend designer based
    in the Netherlands. I've always been interested in design and aesthetics,
    and routinely find myself wishing websites were designed better. I hope
    that I can one day make people's experiences on the internet a little smoother,
    easier and prettier. You can check out all of my latest work via the projects below.
    </p>
  </div>
</section>


<section class="gallery">
  <div class="container">
    <div class="grid">


            <div class="column-xs-12 column-md-6">
        <figure class="img-container">
          <a href=https://misspastelwitch.github.io/I-love-web/>
          <img src="../src/lib/assets/iloveweb.png" />
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

                <div class="column-xs-12 column-md-5">
        <figure class="img-container">
        <a href=https://dutchdigitalagencies-vacatures.onrender.com>
          <img src="../src/lib/assets/DDA.png" />
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

      <div class="column-xs-12 column-md-5">
        <figure class="img-container">
                      <a href="https://misspastelwitch.github.io/repositorie/">
          <img src="../src/lib/assets/repositorie.png" />
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


            <div class="column-xs-12 column-md-7">
        <figure class="img-container">
          <a href="https://github.com/julia-stevens/your-tribe-for-life-squad-page">
          <img src=".../src/lib/assets/squadpage.png" />
          </a>
          <figcaption class="img-content">
            <h2 class="title">FDND Squadpage</h2>
            <h3 class="category">Have a look</h3>
          </figcaption>
          <span class="img-content-hover">
            <h2 class="title">FDND Squadpage</h2>
            <h3 class="category">Have a look</h3>
          </span>
        </figure>
      </div>

      <div class="column-xs-12 column-md-8">
        <figure class="img-container">
          <a href="https://www.sron.nl/en/missions/in-development/missies-in-development-nebula-xplorer/">
           <img src="../src/lib/assets/nebula.png" />
           </a>
          <figcaption class="img-content">
             <h2 class="title">SRON - Nebula Explorer</h2>
            <h3 class="category">Something's coming here soon!</h3>
          </figcaption>
          <span class="img-content-hover">
            <h2 class="title">SRON - Nebula Explorer</h2>
            <h3 class="category">Something's coming here soon!</h3>
          </span>
        </figure>
      </div>


      <div class="column-xs-12 column-md-4">
        <figure class="img-container">
           <img src="../src/lib/assets/noimage.png" />
          <figcaption class="img-content">
             <h2 class="title">An upcoming project</h2>
            <h3 class="category">Something's coming here soon!</h3>
          </figcaption>
          <span class="img-content-hover">
            <h2 class="title">An upcoming project</h2>
            <h3 class="category">Something's coming here soon!</h3>
          </span>
        </figure>
      </div>

    </div>
  </div>
</section>

<!-- scroll down button -->
  <section>
    <a href="#" class="scroll-up" address="true"></a>
    </section>
    <section class="ok">
    </section>


<footer>
  <p class="footer-text">© 2024 Stella Clough</p>
</footer>



<style>
@import url('https://fonts.googleapis.com/css?family=Space+Mono:400,700&display=swap');
/* 12columns.css | Created by Katherine Kato | Released under the MIT license */

/* Ensure font-display: swap for optimal performance */
:root {
  font-family: 'Space Mono', monospace;
  font-display: swap;
}
/* GitHub: https://kathykato.github.io/12columns/ */


*,
*::before,
*::after {
  box-sizing: border-box;
}

html {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
  cursor: url(docs/assets/cursor.cur), crosshair;
}

body {
  font-family: 'Space Mono', monospace;
  line-height: 1.5;
  color: lightcoral;
  margin: 0 auto;
  padding: 0;
  max-width: fit-content;
  overflow-x: hidden;
}

* {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  -ms-box-sizing: border-box;
  box-sizing: border-box;
}



/* Global Typography */

h1 {
  font-size: 6rem;
}

h2 {
  font-size: 2rem;
}

h3 {
  font-size: 1.5rem;
}

p {
  font-size: 1rem;
}

form,
textarea {
  font-size: 1rem;
}

/* HEADER */

header {
  text-align: center;
  margin: 1em auto;
  margin-top: 250px;
}

.section {
  padding: 1em 1em;
  width: 100%;
  margin: 1em auto;
}


/* Buttons */

.button,
.btn-light,
.btn-dark {
  display: block;
  padding: 0.6rem 2rem;
  margin: 1rem;
  transition: all 0.1s;
  border: none;
  border-radius: 2px;
  cursor: pointer;
}

.button {
  color: lightgoldenrodyellow;
  background-color: lightcoral;
  width: 15em;

}

.btn-light {
  color: #0a2472;
  background-color: white;
}

.btn-dark {
  color: white;
  background-color: #0a2472;
}



a[class='button']:hover,
input[class='button']:hover {
  background-color: lightgoldenrodyellow;
  color: lightcoral;
  font-weight: 700;
  transform: scale(1.08);
}

/* funky sentences */
.wrapper {
  padding: 1em;
  width: 400px;
  margin: 0 auto;
  text-align: start;
  margin-bottom: 400px;
}

.containera {
  display: inline-block;
  height: 64px;
  vertical-align: middle;
  overflow: hidden;
}

.containera ul {
  animation: cycle-items 4s steps(6) alternate infinite;
}

.containera li {
  font-size: 40px;
  height: 70px;
}


@keyframes cycle-items {
  to {
    transform: translateY(-100%)
  }
}

/* about me */

.aboutme {
  background-color: #fef7f7;
  padding: 5rem;
  margin-top: -5rem;
}

/*up button*/



.scroll-up {
  opacity: 1;
  -webkit-transition: all .5s ease-in 3s;
  transition: all .5s ease-in 3s;
}

.scroll-up {
  margin-top: 5%;
  margin-left: 47%;
  display: block;
  width: 32px;
  height: 32px;
  border: 2px solid lightcoral;
  background-size: 14px auto;
  border-radius: 50%;
  z-index: 2;
  -webkit-animation: bounce 2s infinite 2s;
  animation: bounce 2s infinite 2s;
  -webkit-transition: all .2s ease-in;
  transition: all .2s ease-in;
}

.scroll-up:before {
    position: absolute;
    top: calc(70% - 8px);
    left: calc(50% - 6px);
    transform: rotate(135deg);
    display: block;
    width: 12px;
    height: 12px;
    content: "";
    border: 2px solid lightcoral;
    border-width: 0px 0 2px 2px;

}

@keyframes bounce {
  0%,
  100%,
  20%,
  50%,
  80% {
    -webkit-transform: translateY(0);
    -ms-transform: translateY(0);
    transform: translateY(0);
  }
  40% {
    -webkit-transform: translateY(-10px);
    -ms-transform: translateY(-10px);
    transform: translateY(-10px);
  }
  60% {
    -webkit-transform: translateY(-5px);
    -ms-transform: translateY(-5px);
    transform: translateY(-5px);
  }
}

/*down button*/



.go-down {
  opacity: 1;
  -webkit-transition: all .5s ease-in 3s;
  transition: all .5s ease-in 3s;
}

.go-down {

  left: 50%;
  margin-top: 10em;
  margin-left: 45%;
  display: block;
  width: 32px;
  height: 32px;
  border: 2px solid lightcoral;
  background-size: 14px auto;
  border-radius: 50%;
  z-index: 2;
  -webkit-animation: bounce 2s infinite 2s;
  animation: bounce 2s infinite 2s;
  -webkit-transition: all .2s ease-in;
  transition: all .2s ease-in;
}

.go-down:before {
    position: absolute;
    top: calc(50% - 8px);
    left: calc(50% - 6px);
    transform: rotate(-45deg);
    display: block;
    width: 12px;
    height: 12px;
    content: "";
    border: 2px solid lightcoral;
    border-width: 0px 0 2px 2px;

}

.footer-text{
  margin-left: 5%;
  margin-top: 2rem;
}



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
}


@media (max-width: 48rem) {
  .grid {
    display: grid;
    max-width: 80%;
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
     
 * {
	 box-sizing: border-box;
}
 *::before, *::after {
	 box-sizing: border-box;
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
	 padding: 0 0 1em 0;
    background-image:#fef7f7;
}

 .img-container {
	 width: 100%;
	 height: 500px;
	 cursor: pointer;
	 overflow: hidden;
   padding: 0%;
   padding-right: 0;
   padding-left: 5%;
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
	 font-size: 3rem;
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


</style>
