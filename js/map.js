const PLACES = [
  { id: "sjo", kind: "airport", name: "SJO · Juan Santamaría", lat: 9.9939, lng: -84.2088, loop: null,
    summary: "The main airport, in Alajuela, about 20 minutes from San José. Not downtown.",
    suits: "Most international flights" },
  { id: "lir", kind: "airport", name: "LIR · Liberia", lat: 10.5933, lng: -85.5444, loop: null,
    summary: "Daniel Oduber Quirós International Airport, closer to the Pacific northwest beaches.",
    suits: "Gateway to Guanacaste" },
  { id: "sanjose", kind: "town", name: "Central Valley", lat: 9.9281, lng: -84.0907, loop: true,
    summary: "San José and the coffee highlands, with Poás and Irazú nearby.",
    suits: "Arrival, departure, and coffee" },
  { id: "freddo-fresas", kind: "restaurant", name: "Restaurante Freddo Fresas", lat: 10.15721, lng: -84.19561, loop: false, status: "Not on the 8-day loop",
    summary: "A Costa Rican food stop known for strawberries, on the road up to Poás volcano.",
    suits: "A stop on the way to Poás",
    address: "Carretera Principal al Volcán Poás, 200 m norte del cementerio de Fraijanes, Fraijanes, Alajuela",
    phone: "+506 2482 2800",
    maps: "https://www.google.com/maps/place/?q=place_id:ChIJUYSvSHv0oI8RLmXjPu7HF1Q" },
  { id: "dinoland", kind: "nature", name: "Dinoland", lat: 10.23772, lng: -84.27905, loop: false, status: "Not on the 8-day loop",
    summary: "A family theme park with more than 25 life-size animatronic dinosaurs on a forest trail, plus the turquoise Río Agrio waterfall.",
    suits: "Families with kids",
    address: "4 km north of the Bajos del Toro sports field, Toro Amarillo, Sarchí, Alajuela",
    phone: "+506 8887 0310",
    website: "https://dinolandcostarica.com/en/",
    maps: "https://maps.app.goo.gl/oxWCEdKS8Tu86E4V9" },
  { id: "fortuna", kind: "nature", name: "Arenal / La Fortuna", lat: 10.4716, lng: -84.6455, loop: true,
    summary: "The viewpoint, hanging bridges, the waterfall, and hot springs.",
    suits: "A first volcano and an easy base" },
  { id: "monteverde", kind: "nature", name: "Monteverde", lat: 10.3085, lng: -84.8203, loop: true,
    summary: "Cloud forest on the continental divide.",
    suits: "Forest, canopy walks, and cooler nights" },
  { id: "manuel", kind: "nature", name: "Manuel Antonio", lat: 9.3923, lng: -84.1398, loop: true,
    summary: "Park trails, monkeys, sloths, and a swimable beach.",
    suits: "Wildlife and beach in one stop" },
  { id: "guanacaste", kind: "beach", name: "Guanacaste", lat: 10.2995, lng: -85.8414, loop: false,
    summary: "Tamarindo, with Nosara and the Papagayo gulf along the same coast.",
    suits: "Sun, swimming, and surf" },
  { id: "puerto-viejo", kind: "beach", name: "Puerto Viejo", lat: 9.6559, lng: -82.7549, loop: false,
    summary: "Caribbean beaches and food, with Cahuita just up the road.",
    suits: "A different coast and Caribbean food" },
  { id: "tortuguero", kind: "nature", name: "Tortuguero", lat: 10.5428, lng: -83.5024, loop: false,
    summary: "Reached by boat or a small plane, not by a coastal drive.",
    suits: "Canals and turtles in season" },
  { id: "osa", kind: "nature", name: "Osa Peninsula", lat: 8.538, lng: -83.3054, loop: false,
    summary: "Puerto Jiménez, the usual gateway to Corcovado.",
    suits: "A wilder trip, with extra days" }
];

const ICONS = {
  airport: '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
  restaurant: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
  beach: '<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',
  nature: '<path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"/><path d="M7 16v6"/><path d="M13 19v3"/><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"/>',
  town: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>'
};

const KIND_LABELS = {
  airport: "Airport",
  restaurant: "Restaurant",
  town: "Town or region",
  beach: "Beach",
  nature: "Nature or park"
};

function glyph(kind, size) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${ICONS[kind]}</svg>`;
}

const WMO = {
  0: "Clear", 1: "Mostly clear", 2: "Partly cloudy", 3: "Overcast",
  45: "Fog", 48: "Fog", 51: "Light drizzle", 53: "Drizzle", 55: "Heavy drizzle",
  56: "Freezing drizzle", 57: "Freezing drizzle", 61: "Light rain", 63: "Rain", 65: "Heavy rain",
  66: "Freezing rain", 67: "Freezing rain", 71: "Light snow", 73: "Snow", 75: "Heavy snow", 77: "Snow grains",
  80: "Rain showers", 81: "Rain showers", 82: "Heavy showers", 85: "Snow showers", 86: "Snow showers",
  95: "Thunderstorm", 96: "Thunderstorm with hail", 99: "Thunderstorm with hail"
};

let weatherRequest = null;

function loadWeather() {
  if (weatherRequest) return weatherRequest;
  const params = new URLSearchParams({
    latitude: PLACES.map((place) => place.lat).join(","),
    longitude: PLACES.map((place) => place.lng).join(","),
    current: "temperature_2m,weather_code,precipitation_probability",
    timezone: "America/Costa_Rica"
  });
  weatherRequest = fetch(`https://api.open-meteo.com/v1/forecast?${params}`)
    .then((response) => {
      if (!response.ok) throw new Error(`Weather ${response.status}`);
      return response.json();
    })
    .then((data) => (Array.isArray(data) ? data : [data]))
    .catch(() => null);
  return weatherRequest;
}

function weatherText(current) {
  if (!current || typeof current.temperature_2m !== "number") return "";
  const c = Math.round(current.temperature_2m);
  const f = Math.round(current.temperature_2m * 9 / 5 + 32);
  const parts = [`Now ${c}°C / ${f}°F`];
  if (WMO[current.weather_code]) parts.push(WMO[current.weather_code]);
  if (typeof current.precipitation_probability === "number") parts.push(`${current.precipitation_probability}% chance of rain`);
  return parts.join(" · ");
}

const mapCanvas = document.querySelector("#place-map");

if (mapCanvas && window.L) {
  mapCanvas.replaceChildren();

  const map = L.map(mapCanvas, { scrollWheelZoom: false, minZoom: 5, maxZoom: 14 });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 14
  }).addTo(map);

  map.setMaxBounds([[5.2, -90.5], [13.8, -77.5]]);

  const markers = new Map();

  function statusText(place) {
    if (place.status) return place.status;
    if (place.loop === true) return "On the 8-day loop";
    if (place.loop === false) return "Worth extra days";
    return "International airport";
  }

  function mapsUrl(place) {
    return place.maps || `https://www.google.com/maps/search/?api=1&query=${place.lat},${place.lng}`;
  }

  function tone(place) {
    if (place.loop === true) return "loop";
    if (place.loop === false) return "extra";
    return "gateway";
  }

  function pinIcon(place, active) {
    return L.divIcon({
      className: "place-marker",
      html: `<span class="pin pin-${tone(place)}${active ? " pin-active" : ""}">${glyph(place.kind, 18)}</span>`,
      iconSize: [34, 34],
      iconAnchor: [17, 17],
      popupAnchor: [0, -18]
    });
  }

  const legend = L.control({ position: "bottomleft" });
  legend.onAdd = () => {
    const box = L.DomUtil.create("div", "map-key");
    const kinds = Object.keys(ICONS).map((kind) =>
      `<li><span class="pin pin-key">${glyph(kind, 14)}</span>${KIND_LABELS[kind]}</li>`).join("");
    box.innerHTML = `<ul>${kinds}</ul><ul>
      <li><span class="swatch swatch-loop"></span>On the 8-day loop</li>
      <li><span class="swatch swatch-extra"></span>Worth extra days</li>
      <li><span class="swatch swatch-gateway"></span>Airport gateway</li></ul>`;
    L.DomEvent.disableClickPropagation(box);
    return box;
  };
  legend.addTo(map);

  function el(tag, className, text) {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function popupNode(place) {
    const root = el("div", "popup");
    root.append(
      el("strong", "popup-title", place.name),
      el("p", "", place.summary),
      el("p", "popup-suits", place.suits),
      ...(place.address ? [el("p", "popup-address", place.address)] : []),
      el("p", `popup-status popup-status-${tone(place)}`, `${KIND_LABELS[place.kind]} · ${statusText(place)}`)
    );
    const weather = el("p", "popup-weather");
    weather.hidden = true;
    weather.dataset.place = place.id;
    root.append(weather);
    const links = el("p", "popup-links");
    if (place.phone) {
      const tel = el("a", "", place.phone);
      tel.href = `tel:${place.phone.replace(/\s+/g, "")}`;
      links.append(tel);
    }
    if (place.website) {
      const site = el("a", "", "Website");
      site.href = place.website;
      site.target = "_blank";
      site.rel = "noopener";
      links.append(site);
    }
    const gmaps = el("a", "", "Google Maps");
    gmaps.href = mapsUrl(place);
    gmaps.target = "_blank";
    gmaps.rel = "noopener";
    links.append(gmaps);
    root.append(links);
    return root;
  }

  function selectPlace(id) {
    PLACES.forEach((item) => markers.get(item.id).setIcon(pinIcon(item, item.id === id)));
  }

  PLACES.forEach((place) => {
    const marker = L.marker([place.lat, place.lng], { icon: pinIcon(place, false), title: place.name })
      .addTo(map)
      .bindPopup(popupNode(place), { maxWidth: 280 });
    marker.on("popupopen", (event) => {
      selectPlace(place.id);
      const line = event.popup.getElement().querySelector(".popup-weather");
      loadWeather().then((results) => {
        const index = PLACES.indexOf(place);
        const text = results && results[index] ? weatherText(results[index].current) : "";
        if (!line || !text) return;
        line.textContent = text;
        line.hidden = false;
        event.popup.update();
      });
    });
    marker.on("popupclose", () => selectPlace(null));
    markers.set(place.id, marker);
  });

  const bounds = L.latLngBounds(PLACES.map((place) => [place.lat, place.lng]));

  let fitted = false;
  const watcher = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;
    map.invalidateSize();
    if (!fitted) {
      map.fitBounds(bounds, { padding: [32, 32] });
      fitted = true;
    }
  });
  watcher.observe(mapCanvas);

  window.addEventListener("resize", () => map.invalidateSize());
}
