

const title = document.querySelector('#title');
const heroImg = document.querySelector('#heroImg');

function loadPage(season){
 
    if(season == 'spring'){
        title.textContent = 'Welcome to Spring';
        heroImg.innerHTML = '<img class="img-xxl" src="assets/images/spring.png" alt="Spring" />';
    }

    if(season == 'summer'){
        title.textContent = 'Welcome to Summer';
        heroImg.innerHTML = '<img class="img-xxl" src="assets/images/summer.png" alt="Spring" />';
    }

    if(season == 'winter'){
        title.textContent = 'Welcome to Winter';
        heroImg.innerHTML = '<img class="img-xxl" src="assets/images/winter.png" alt="Spring" />';
    }

    if(season == 'fall'){
        title.textContent = 'Welcome to Fall';
        heroImg.innerHTML = '<img class="img-xxl" src="assets/images/fall.png" alt="Spring" />';
    }

    if(season == 'allseasons'){
        title.textContent = 'Welcome to all Seasons';
        heroImg.innerHTML += '<img class="img-xxl" src="assets/images/spring.png" alt="Spring" />';
        heroImg.innerHTML += '<img class="img-xxl" src="assets/images/winter.png" alt="Spring" />';
        heroImg.innerHTML += '<img class="img-xxl" src="assets/images/summer.png" alt="Spring" />';
        heroImg.innerHTML += '<img class="img-xxl" src="assets/images/fall.png" alt="Spring" />';
    }
}