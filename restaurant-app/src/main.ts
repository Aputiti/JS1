import {errorModal, restaurantModal, restaurantRow, weekModal} from './components';
import {fetchData} from './functions';
import { Restaurant } from './interfaces/Restaurant';
import {apiUrl, positionOptions} from './variables';
import './main.css';
import { Menu, WeeklyMenu } from './interfaces/Menu';
import { map, latLng, tileLayer, MapOptions } from "leaflet";
import L from 'leaflet';

const checkbox = document.getElementById('mode');
checkbox?.addEventListener('change', () => {
  document.body.classList.toggle('dark');
});

const options: MapOptions = {
  center: latLng(63.252401, 26.424600),
  zoom: 4,
};

const mymap = map('map', options);

tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(mymap);

const modal = document.querySelector('dialog');
if (!modal) {
  throw new Error('Modal not found');
}

// modal.addEventListener('click', () => {
//   modal.close();

//   const allHighs = document.querySelectorAll('.highlight');
//   allHighs.forEach((high) => {
//     high.classList.remove('highlight');
//   });

// });

const calculateDistance = (x1: number, y1: number, x2: number, y2: number) =>
  Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

const createTable = (restaurants: Restaurant[]) => {
  const table = document.querySelector('table');
  if (!table) {
    throw new Error ("Null table!");
  }
  table.innerHTML = '';
  restaurants.forEach((restaurant) => {
    const tr = restaurantRow(restaurant);
    table.appendChild(tr);
    tr.addEventListener('click', async () => {
      try {
        // remove all highlights
        const allHighs = document.querySelectorAll('.highlight');
        allHighs.forEach((high) => {
          high.classList.remove('highlight');
        });

        // add highlight
        tr.classList.add('highlight');

        // add restaurant data to modal
        modal.innerHTML = '';

        // fetch menu
        const menu = await fetchData<Menu>(
          apiUrl + `/restaurants/daily/${restaurant._id}/fi`
        );
        console.log(menu);

        const menuHtml = restaurantModal(restaurant, menu);
        modal.insertAdjacentHTML('beforeend', menuHtml);

        const closebutton = document.querySelector('#closebutton');
        closebutton?.addEventListener('click', () => {
          modal.close();

          const allHighs = document.querySelectorAll('.highlight');
          allHighs.forEach((high) => {
            high.classList.remove('highlight');
          });
        });

        const weeklymenu = await fetchData<WeeklyMenu>(
          apiUrl + `/restaurants/weekly/${restaurant._id}/fi`
        );

        const weeklybutton = document.querySelector('#weeklymenu');
        const menuTable = document.querySelector(".tabletest");
        weeklybutton?.addEventListener('click', () => {
          console.log(weeklymenu);
          menuTable?.remove();

          const weekMenu = weekModal(weeklymenu);
          modal.insertAdjacentHTML('beforeend', weekMenu);
        })

        modal.showModal();
      } catch (error) {
        modal.innerHTML = errorModal((error as Error).message);
        modal.showModal();
      }
    });
  });
};

const error = (err: GeolocationPositionError) => {
  console.warn(`ERROR(${err.code}): ${err.message}`);
};

const success = async (pos: GeolocationPosition) => {
  try {
    const crd = pos.coords;
    const restaurants = await fetchData<Restaurant[]>(apiUrl + '/restaurants');
    console.log(restaurants);
    restaurants.sort((a, b) => {
      const x1 = crd.latitude;
      const y1 = crd.longitude;
      const x2a = a.location.coordinates[1];
      const y2a = a.location.coordinates[0];
      const distanceA = calculateDistance(x1, y1, x2a, y2a);
      const x2b = b.location.coordinates[1];
      const y2b = b.location.coordinates[0];
      const distanceB = calculateDistance(x1, y1, x2b, y2b);
      return distanceA - distanceB;
    });
    createTable(restaurants);
    // buttons for filtering
    const sodexoBtn = document.querySelector('#sodexo');
    const compassBtn = document.querySelector('#compass');
    const resetBtn = document.querySelector('#reset');

    if (!sodexoBtn || !compassBtn || !resetBtn) {
      throw new Error ('Button not found!');
    }
    sodexoBtn.addEventListener('click', () => {
      const sodexoRestaurants = restaurants.filter(
        (restaurant) => restaurant.company === 'Sodexo'
      );
      console.log(sodexoRestaurants);
      createTable(sodexoRestaurants);
    });

    compassBtn.addEventListener('click', () => {
      const compassRestaurants = restaurants.filter(
        (restaurant) => restaurant.company === 'Compass Group'
      );
      console.log(compassRestaurants);
      createTable(compassRestaurants);
    });

    resetBtn.addEventListener('click', () => {
      createTable(restaurants);
    });

    for (const spot of restaurants) {
      const marker = L.marker([
        spot.location.coordinates[1],
        spot.location.coordinates[0],
      ]).addTo(mymap);

      marker.bindPopup(`<h3>${spot.name}</h3><p>${spot.address}</p><p>${spot.phone}</p>`);
    };

  } catch (error) {
    modal.innerHTML = errorModal((error as Error).message);
    modal.showModal();
  }
};

navigator.geolocation.getCurrentPosition(success, error, positionOptions);
