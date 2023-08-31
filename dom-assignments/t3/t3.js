'use strict';

const date = new Date();
const options = {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
};

const target = document.getElementById('target');

const uA = `<p><b>Selain(versio) sekä käyttöjärjestelmä:</b> ${navigator.userAgent}</p>`;
const screenInfo = `<p><b>Näytön leveys ja korkeus:</b> ${screen.width} x ${screen.height}</p>`;
const screenAvail = `<p><b>Selaimella käytettävä näyttötila:</b> ${screen.availWidth} x ${screen.availHeight}</p>`;
const liveDate = `<p><b>Tänään on</b> ${date.toLocaleDateString(
  'fi-FI',
  options
)}</p>`;
const liveTime = `<p><b>Kello on</b> ${date.getHours()}.${date.getMinutes()}</p>`;

target.insertAdjacentHTML('beforeend', uA);
target.insertAdjacentHTML('beforeend', screenInfo);
target.insertAdjacentHTML('beforeend', screenAvail);
target.insertAdjacentHTML('beforeend', liveDate);
target.insertAdjacentHTML('beforeend', liveTime);
