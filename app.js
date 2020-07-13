const burger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");
const lineup = document.querySelector(".lineup");
const linedown = document.querySelector(".linedown");

burger.addEventListener('click', () =>{
    overlay.classList.toggle('overlayop')
    lineup.classList.toggle('toggle')
    linedown.classList.toggle('toggle')
})

const data = 'https://api.covid19api.com/summary';

async function getdata() {
    const response = await fetch(data)
    const dt = await response.json();

    let moro = dt.Countries[114]

    let trec = moro.TotalRecovered;
    let tconfirmed = moro.TotalConfirmed;
    let nconfirmed = moro.NewConfirmed;
    let ndth = moro.NewDeaths;
    let tdth = moro.TotalDeaths;
    let nrec = moro.NewRecovered;

    document.getElementById('NewRecovered').textContent = nrec;
    document.getElementById('TotalRecovered').textContent = trec;
    document.getElementById('TotalConfirmed').textContent = tconfirmed;
    document.getElementById('NewConfirmed').textContent = nconfirmed;
    document.getElementById('NewDeaths').textContent = ndth;
    document.getElementById('TotalDeaths').textContent = tdth;
}
getdata();