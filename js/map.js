const PLACES = [
  { id: "sjo", kind: "airport", name: "SJO · Juan Santamaría", lat: 9.9939, lng: -84.2088,
    summary: "The main airport, in Alajuela, about 20 minutes from San José. Not downtown.",
    suits: "Most international flights" },
  { id: "lir", kind: "airport", name: "LIR · Liberia", lat: 10.5933, lng: -85.5444,
    summary: "Daniel Oduber Quirós International Airport, closer to the Pacific northwest beaches.",
    suits: "Gateway to Guanacaste" },
  { id: "sanjose", kind: "town", name: "Central Valley", lat: 9.9281, lng: -84.0907,
    summary: "San José and the coffee highlands, with Poás and Irazú nearby.",
    suits: "Arrival, departure, and coffee" },
  { id: "freddo-fresas", kind: "restaurant", name: "Restaurante Freddo Fresas", lat: 10.15721, lng: -84.19561,
    summary: "A Costa Rican food stop known for strawberries, on the road up to Poás volcano.",
    suits: "A stop on the way to Poás",
    address: "Carretera Principal al Volcán Poás, 200 m norte del cementerio de Fraijanes, Fraijanes, Alajuela",
    phone: "+506 2482 2800",
    maps: "https://www.google.com/maps/place/?q=place_id:ChIJUYSvSHv0oI8RLmXjPu7HF1Q" },
  { id: "dinoland", kind: "nature", name: "Dinoland", lat: 10.23772, lng: -84.27905,
    summary: "A family theme park with more than 25 life-size animatronic dinosaurs on a forest trail, plus the turquoise Río Agrio waterfall.",
    suits: "Families with kids",
    address: "4 km north of the Bajos del Toro sports field, Toro Amarillo, Sarchí, Alajuela",
    phone: "+506 8887 0310",
    website: "https://dinolandcostarica.com/en/",
    maps: "https://maps.app.goo.gl/oxWCEdKS8Tu86E4V9" },
  { id: "alsacia", kind: "nature", name: "Hacienda Alsacia", lat: 10.10019, lng: -84.19495,
    summary: "Starbucks' working coffee farm and visitor center on the slopes of Poás, with guided coffee tours and a café looking out over the mountains.",
    suits: "Coffee lovers on the way to Poás",
    address: "Dulce Nombre de San Isidro, Alajuela, 12 km north of the Alajuela courthouse on the road to Poás volcano",
    phone: "+506 2103 4282",
    website: "https://www.starbuckscoffeefarm.com/",
    maps: "https://www.google.com/maps/search/?api=1&query=4R24%2B32F%20Dulce%20Nombre%2C%20Alajuela%2C%20Costa%20Rica" },
  { id: "fortuna", kind: "nature", name: "Arenal / La Fortuna", lat: 10.4716, lng: -84.6455,
    summary: "The viewpoint, hanging bridges, the waterfall, and hot springs.",
    suits: "A first volcano and an easy base" },
  { id: "monteverde", kind: "nature", name: "Monteverde", lat: 10.3085, lng: -84.8203,
    summary: "Cloud forest on the continental divide.",
    suits: "Forest, canopy walks, and cooler nights" },
  { id: "manuel", kind: "nature", name: "Manuel Antonio", lat: 9.3923, lng: -84.1398,
    summary: "Park trails, monkeys, sloths, and a swimable beach.",
    suits: "Wildlife and beach in one stop" },
  { id: "sky-arenal", kind: "zipline", name: "Sky Adventures Arenal Park", lat: 10.42477, lng: -84.73587,
    summary: "Ziplines that run mountain to mountain on the edge of Arenal, with hanging bridges and forest walks in the same park.",
    suits: "Big volcano views from the line",
    phone: "+506 2479 4100",
    website: "https://skyadventures.travel/" },
  { id: "ecoglide", kind: "zipline", name: "Ecoglide Arenal Park", lat: 10.47527, lng: -84.67695,
    summary: "An adventure and nature park by Arenal volcano with canopy tours and nature walks.",
    suits: "A zip line close to La Fortuna town",
    phone: "+506 2479 7120",
    website: "https://www.arenalecoglide.com/" },
  { id: "selvatura", kind: "zipline", name: "Selvatura Park", lat: 10.34243, lng: -84.79861,
    summary: "Thirteen ziplines and a Tarzan swing over the Monteverde cloud forest, with hanging bridges and a sloth habitat in the park.",
    suits: "Zip lining through cloud forest",
    phone: "+506 4001 7895",
    website: "https://www.selvatura.com/",
    maps: "https://maps.app.goo.gl/2ZTQ8sXrScv7yXqf6" },
  { id: "diamante", kind: "zipline", name: "Diamante Eco Adventure Park", lat: 10.52221, lng: -85.74478,
    summary: "A Guanacaste adventure park on the coast with ziplines, including a Superman line, plus animals and ATV tours.",
    suits: "A full adventure day near Playas del Coco",
    phone: "+506 2105 5200",
    website: "https://diamanteecoadventurepark.com/",
    maps: "https://maps.app.goo.gl/JJyAovTFh4Qsfpru7" },
  { id: "guachipelin", kind: "zipline", name: "Hacienda Guachipelín", lat: 10.75208, lng: -85.37965,
    summary: "A hotel and ranch at the foot of Rincón de la Vieja with a canopy tour of ziplines, rappel, rock climbing, a swing and bridges, plus hot springs.",
    suits: "Ziplines on a Rincón de la Vieja day",
    phone: "+506 2690 2900",
    website: "https://www.guachipelin.com/" },
  { id: "guanacaste", kind: "beach", name: "Guanacaste", lat: 10.2995, lng: -85.8414,
    summary: "Tamarindo, with Nosara and the Papagayo gulf along the same coast.",
    suits: "Sun, swimming, and surf" },
  { id: "sol-y-luna", kind: "stay", name: "Casas Sol y Luna", lat: 10.5315, lng: -85.7049,
    summary: "Two side-by-side private homes with 6 bedrooms and 2 pools between them, about 10 minutes from Playas del Coco and 40 minutes from Liberia airport (LIR).",
    suits: "Groups and families traveling together",
    address: "Coco, Guanacaste (approximate location)",
    website: "https://www.airbnb.com/rooms/1649298342055708571",
    websiteLabel: "View on Airbnb" },
  { id: "jaco-condo", kind: "stay", name: "Oceanfront Corner Condo, Jacó", lat: 9.6168, lng: -84.6324,
    summary: "A beachfront condo in the heart of Jacó with 3 bedrooms, 3 private balconies and ocean views, a walk from restaurants and shops.",
    suits: "Families or groups who want the beach at the door",
    address: "Jacó, Puntarenas (approximate location)",
    website: "https://www.airbnb.com/rooms/1148016778896940364",
    websiteLabel: "View on Airbnb" },
  { id: "conchal", kind: "beach", name: "Playa Conchal", lat: 10.4015, lng: -85.80554,
    summary: "Sand made of crushed shells and clear turquoise water, with calm swimming and the best snorkeling around the rocky points.",
    suits: "Swimming and snorkeling" },
  { id: "flamingo", kind: "beach", name: "Playa Flamingo", lat: 10.43544, lng: -85.79253,
    summary: "A long white-sand beach, mapped as Playa Blanca, with easy swimming that is calmest in the morning.",
    suits: "Swimming" },
  { id: "hermosa-gte", kind: "beach", name: "Playa Hermosa (Guanacaste)", lat: 10.57561, lng: -85.6784,
    summary: "A sheltered grey-sand bay near Liberia with gentle water, snorkeling off the rocky ends, and paddleboarding. Not the Jacó surf beach of the same name.",
    suits: "Families, calm swimming, snorkeling" },
  { id: "samara", kind: "beach", name: "Playa Sámara", lat: 9.87385, lng: -85.5119,
    summary: "A bay protected by an offshore reef, calm and shallow in the middle. Rips run by the western rocks and the eastern river mouth.",
    suits: "Families and safe swimming" },
  { id: "santa-teresa", kind: "beach", name: "Playa Santa Teresa", lat: 9.64381, lng: -85.17035,
    summary: "A long, exposed Pacific beach with consistent beach-break surf. Shifting sandbars and rips make it a poor swimming beach.",
    suits: "Surfing, intermediate and up" },
  { id: "montezuma", kind: "beach", name: "Playa Montezuma", lat: 9.6566, lng: -85.0653,
    summary: "A rocky, palm-backed beach in front of the village. Waves and rips make it better for walking, with a calmer cove south of town and waterfalls nearby.",
    suits: "Walks, waterfalls, beginner surf nearby" },
  { id: "manuel-beach", kind: "beach", name: "Playa Manuel Antonio", lat: 9.38088, lng: -84.1456,
    summary: "A sheltered cove inside Manuel Antonio National Park, usually calm for swimming, with snorkeling near the rocky ends.",
    suits: "Swimming with wildlife around" },
  { id: "ballena", kind: "beach", name: "Marino Ballena (Whale's Tail)", lat: 9.13048, lng: -83.7485,
    summary: "A marine national park at Uvita whose Whale's Tail sandbar can be walked at low tide. The protected water by Punta Uvita is the calmest swim in the area.",
    suits: "Low-tide walks, calm swimming, whales in season" },
  { id: "punta-uva", kind: "beach", name: "Punta Uva", lat: 9.63876, lng: -82.69354,
    summary: "A protected Caribbean bay south of Puerto Viejo with calm water and reef snorkeling on flat, clear mornings.",
    suits: "Swimming and snorkeling" },
  { id: "tortuga", kind: "beach", name: "Isla Tortuga", lat: 9.77326, lng: -84.89548,
    summary: "An island in the Gulf of Nicoya, kept as protected forest, with a white-sand beach and turquoise water that is good for swimming. Reached by day cruise from Puntarenas.",
    suits: "A boat day with swimming and snorkeling",
    tour: "https://bayislandcruises.com/",
    tourLabel: "Tour: Bay Island Cruises",
    tourPhone: "+506 2235 3536" },
  { id: "teatro", kind: "attraction", name: "Teatro Nacional", lat: 9.93316, lng: -84.07697,
    summary: "Costa Rica's national theater in downtown San José, opened in 1897 and declared a National Monument.",
    suits: "An hour in the capital",
    website: "https://www.teatronacional.go.cr/",
    maps: "https://www.google.com/maps/search/?api=1&query=Teatro%20Nacional%20de%20Costa%20Rica%2C%20San%20Jos%C3%A9%2C%20Costa%20Rica" },
  { id: "basilica", kind: "attraction", name: "Basílica de los Ángeles", lat: 9.86409, lng: -83.91288,
    summary: "The basilica in Cartago that holds La Negrita, the Virgin of the Angels, patron of Costa Rica. Pilgrims walk here from San José every 1 August.",
    suits: "History and culture near San José",
    maps: "https://www.google.com/maps/search/?api=1&query=Bas%C3%ADlica%20de%20Nuestra%20Se%C3%B1ora%20de%20los%20%C3%81ngeles%2C%20Cartago%2C%20Costa%20Rica" },
  { id: "guayabo", kind: "attraction", name: "Guayabo National Monument", lat: 9.97144, lng: -83.69524,
    summary: "Costa Rica's most important archaeological site, with pre-Hispanic stone structures near Turrialba occupied from about 1000 BC to 1400 AD.",
    suits: "Archaeology and forest trails",
    maps: "https://www.google.com/maps/search/?api=1&query=Monumento%20Nacional%20Guayabo%2C%20Costa%20Rica" },
  { id: "ecotermales", kind: "attraction", name: "Ecotermales Fortuna", lat: 10.48401, lng: -84.67507,
    summary: "Family-run natural hot springs near La Fortuna with five pools and a limited number of guests each day.",
    suits: "A quiet soak after an Arenal day",
    website: "https://ecotermalesfortuna.cr/",
    maps: "https://www.google.com/maps/search/?api=1&query=Ecotermales%20Fortuna%2C%20Costa%20Rica" },
  { id: "tabacon", kind: "attraction", name: "Tabacón Thermal Resort", lat: 10.48781, lng: -84.72299,
    summary: "A hot-springs resort on the Tabacón river at the foot of Arenal volcano.",
    suits: "Hot springs in a resort setting",
    website: "https://www.tabacon.com/",
    maps: "https://www.google.com/maps/search/?api=1&query=Tabac%C3%B3n%20Grand%20Spa%20Thermal%20Resort%2C%20Costa%20Rica" },
  { id: "puerto-viejo", kind: "beach", name: "Puerto Viejo", lat: 9.6559, lng: -82.7549,
    summary: "Caribbean beaches and food, with Cahuita just up the road.",
    suits: "A different coast and Caribbean food" },
  { id: "tortuguero", kind: "nature", name: "Tortuguero", lat: 10.5428, lng: -83.5024,
    summary: "Reached by boat or a small plane, not by a coastal drive.",
    suits: "Canals and turtles in season" },
  { id: "osa", kind: "nature", name: "Osa Peninsula", lat: 8.538, lng: -83.3054,
    summary: "Puerto Jiménez, the usual gateway to Corcovado.",
    suits: "A wilder trip, with time to spare" }
];

const ICONS = {
  airport: '<path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/>',
  restaurant: '<path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/>',
  beach: '<path d="M2 6c.6.5 1.2 1 2.5 1C7 7 7 5 9.5 5c2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 12c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/><path d="M2 18c.6.5 1.2 1 2.5 1 2.5 0 2.5-2 5-2 2.6 0 2.4 2 5 2 2.5 0 2.5-2 5-2 1.3 0 1.9.5 2.5 1"/>',
  nature: '<path d="M10 10v.2A3 3 0 0 1 8.9 16H5a3 3 0 0 1-1-5.8V10a3 3 0 0 1 6 0Z"/><path d="M7 16v6"/><path d="M13 19v3"/><path d="M12 19h8.3a1 1 0 0 0 .7-1.7L18 14h.3a1 1 0 0 0 .7-1.7L16 9h.2a1 1 0 0 0 .8-1.7L13 3l-1.4 1.5"/>',
  stay: '<path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"/><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>',
  zipline: '<path d="M10 3h.01"/><path d="M14 2h.01"/><path d="m2 9 20-5"/><path d="M12 12V6.5"/><rect width="16" height="10" x="4" y="12" rx="3"/><path d="M9 12v5"/><path d="M15 12v5"/><path d="M4 17h16"/>',
  attraction: '<line x1="3" x2="21" y1="22" y2="22"/><line x1="6" x2="6" y1="18" y2="11"/><line x1="10" x2="10" y1="18" y2="11"/><line x1="14" x2="14" y1="18" y2="11"/><line x1="18" x2="18" y1="18" y2="11"/><polygon points="12 2 20 7 4 7"/>',
  town: '<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"/><circle cx="12" cy="10" r="3"/>'
};

const KIND_LABELS = {
  airport: "Airport",
  restaurant: "Restaurant",
  town: "Town or region",
  beach: "Beach",
  nature: "Nature or park",
  stay: "Place to stay",
  zipline: "Zip line",
  attraction: "Culture or hot springs"
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

  function mapsUrl(place) {
    return place.maps || `https://www.google.com/maps/search/?api=1&query=${place.lat},${place.lng}`;
  }

  function pinIcon(place, active) {
    return L.divIcon({
      className: "place-marker",
      html: `<span class="pin pin-kind-${place.kind}${active ? " pin-active" : ""}">${glyph(place.kind, 18)}</span>`,
      iconSize: [34, 34],
      iconAnchor: [17, 17],
      popupAnchor: [0, -18]
    });
  }

  const activeKinds = new Set(Object.keys(ICONS));
  let applyFilter = () => {};

  const legend = L.control({ position: "bottomleft" });
  legend.onAdd = () => {
    const box = L.DomUtil.create("div", "map-key");
    const count = (test) => PLACES.filter(test).length;
    const kinds = Object.keys(ICONS).map((kind) => `<li><label class="key-toggle">
        <input type="checkbox" name="kind" value="${kind}" checked>
        <span class="pin pin-key pin-kind-${kind}">${glyph(kind, 14)}</span>
        <span class="key-label">${KIND_LABELS[kind]}</span>
        <span class="key-count">${count((p) => p.kind === kind)}</span></label></li>`).join("");
    box.innerHTML = `<details${window.matchMedia("(min-width: 48rem)").matches ? " open" : ""}>
      <summary>Filter places</summary>
      <div class="key-quick"><button type="button" data-all="on">All</button><button type="button" data-all="off">None</button></div>
      <fieldset><legend class="sr-only">Kinds of place</legend><ul>${kinds}</ul></fieldset>
      <p class="key-status" aria-live="polite"></p></details>`;
    box.addEventListener("change", (event) => {
      const input = event.target;
      if (!(input instanceof HTMLInputElement)) return;
      if (input.checked) activeKinds.add(input.value);
      else activeKinds.delete(input.value);
      applyFilter();
    });
    box.addEventListener("click", (event) => {
      const button = event.target.closest("button[data-all]");
      if (!button) return;
      const on = button.dataset.all === "on";
      box.querySelectorAll('input[name="kind"]').forEach((input) => {
        input.checked = on;
        if (on) activeKinds.add(input.value);
        else activeKinds.delete(input.value);
      });
      applyFilter();
    });
    L.DomEvent.disableClickPropagation(box);
    L.DomEvent.disableScrollPropagation(box);
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
      el("p", "popup-status", KIND_LABELS[place.kind])
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
      const site = el("a", "", place.websiteLabel || "Website");
      site.href = place.website;
      site.target = "_blank";
      site.rel = "noopener";
      links.append(site);
    }
    if (place.tour) {
      const tour = el("a", "", place.tourLabel || "Tour");
      tour.href = place.tour;
      tour.target = "_blank";
      tour.rel = "noopener";
      links.append(tour);
    }
    if (place.tourPhone) {
      const tourTel = el("a", "", `Tour ${place.tourPhone}`);
      tourTel.href = `tel:${place.tourPhone.replace(/\s+/g, "")}`;
      links.append(tourTel);
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

  const layer = L.markerClusterGroup
    ? L.markerClusterGroup({
        maxClusterRadius: 36,
        showCoverageOnHover: false,
        spiderfyOnMaxZoom: true,
        iconCreateFunction: (cluster) => L.divIcon({
          className: "place-marker",
          html: `<span class="pin pin-cluster">${cluster.getChildCount()}</span>`,
          iconSize: [34, 34],
          iconAnchor: [17, 17]
        })
      })
    : L.layerGroup();
  layer.addTo(map);
  window.placeMap = map;

  PLACES.forEach((place) => {
    const marker = L.marker([place.lat, place.lng], { icon: pinIcon(place, false), title: place.name })
      .addTo(layer)
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

  applyFilter = () => {
    let shown = 0;
    PLACES.forEach((place) => {
      const marker = markers.get(place.id);
      const visible = activeKinds.has(place.kind);
      if (visible) shown += 1;
      if (visible && !layer.hasLayer(marker)) layer.addLayer(marker);
      if (!visible && layer.hasLayer(marker)) {
        if (marker.isPopupOpen()) marker.closePopup();
        layer.removeLayer(marker);
      }
    });
    const status = mapCanvas.querySelector(".key-status");
    if (status) status.textContent = `Showing ${shown} of ${PLACES.length} places`;
  };
  applyFilter();

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
