const burger = document.querySelector(".burger");
const overlay = document.querySelector(".overlay");
const lineup = document.querySelector(".lineup");
const linedown = document.querySelector(".linedown");
const linemed = document.querySelector(".linemed");

burger.addEventListener('click', () =>{
    overlay.classList.toggle('overlayop')
    lineup.classList.toggle('toggle')
    linedown.classList.toggle('toggle')
    linemed.classList.toggle('toggle')
})

const data = 'https://disease.sh/v3/covid-19/countries/MA?yesterday=false';

async function getdata() {
    const response = await fetch(data)
    const dt = await response.json();

    let trec = dt.recovered;
    let tconfirmed = dt.cases;
    let nconfirmed = dt.todayCases;
    let ndth = dt.todayDeaths;
    let tdth = dt.deaths;
    let nrec = dt.todayRecovered;

    document.title = "CoroMaroc • " + tconfirmed + " • حصيلة اليوم";
    document.getElementById('NewRecovered').textContent = '+ ' + nrec;
    document.getElementById('TotalRecovered').textContent = trec;
    document.getElementById('TotalConfirmed').textContent = tconfirmed;
    document.getElementById('NewConfirmed').textContent = '+ ' + nconfirmed;
    document.getElementById('NewDeaths').textContent = '+ ' + ndth;
    document.getElementById('TotalDeaths').textContent = tdth;
}
getdata();

let d = new Date();
let d2 = new Date();
let days = ["الاثنين", "الثلاثاء", "الأربعاء", "الخميس", "الجمعة", "السبت", "الأحد"];
let m = new Date();
let month = ['يناير', 'فبراير', 'مارس', 'أبريل', 'ماي', 'يونيو', 'يوليو', 'أغسطس', 'سبتمبر', 'أكتوبر' ,'نوفمبر', 'ديسمبر']
document.getElementById('date').innerHTML = days[d.getDay() - 1] + ' ' + d2.getDate() + ' ' + month[m.getMonth()];

function alt(){
    alert("هذا الموقع غير رسمي ولا يتبع لوزارة الصحة المغربية")
}
