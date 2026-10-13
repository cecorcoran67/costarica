const PLACES = [
  { id: "sjo", name: "SJO · Juan Santamaría", lat: 9.9939, lng: -84.2088, loop: null,
    summary: "The main airport, in Alajuela, about 20 minutes from San José. Not downtown.",
    suits: "Most international flights" },
  { id: "lir", name: "LIR · Liberia", lat: 10.5933, lng: -85.5444, loop: null,
    summary: "Daniel Oduber Quirós International Airport, closer to the Pacific northwest beaches.",
    suits: "Gateway to Guanacaste" },
  { id: "sanjose", name: "Central Valley", lat: 9.9281, lng: -84.0907, loop: true,
    summary: "San José and the coffee highlands, with Poás and Irazú nearby.",
    suits: "Arrival, departure, and coffee" },
  { id: "fortuna", name: "Arenal / La Fortuna", lat: 10.4716, lng: -84.6455, loop: true,
    summary: "The viewpoint, hanging bridges, the waterfall, and hot springs.",
    suits: "A first volcano and an easy base" },
  { id: "monteverde", name: "Monteverde", lat: 10.3085, lng: -84.8203, loop: true,
    summary: "Cloud forest on the continental divide.",
    suits: "Forest, canopy walks, and cooler nights" },
  { id: "manuel", name: "Manuel Antonio", lat: 9.3923, lng: -84.1398, loop: true,
    summary: "Park trails, monkeys, sloths, and a swimable beach.",
    suits: "Wildlife and beach in one stop" },
  { id: "guanacaste", name: "Guanacaste", lat: 10.2995, lng: -85.8414, loop: false,
    summary: "Tamarindo, with Nosara and the Papagayo gulf along the same coast.",
    suits: "Sun, swimming, and surf" },
  { id: "puerto-viejo", name: "Puerto Viejo", lat: 9.6559, lng: -82.7549, loop: false,
    summary: "Caribbean beaches and food, with Cahuita just up the road.",
    suits: "A different coast and Caribbean food" },
  { id: "tortuguero", name: "Tortuguero", lat: 10.5428, lng: -83.5024, loop: false,
    summary: "Reached by boat or a small plane, not by a coastal drive.",
    suits: "Canals and turtles in season" },
  { id: "osa", name: "Osa Peninsula", lat: 8.538, lng: -83.3054, loop: false,
    summary: "Puerto Jiménez, the usual gateway to Corcovado.",
    suits: "A wilder trip, with extra days" }
];

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
    if (place.loop === true) return "On the 8-day loop";
    if (place.loop === false) return "Worth extra days";
    return "International airport";
  }

  function mapsUrl(place) {
    return place.maps || `https://www.google.com/maps/search/?api=1&query=${place.lat},${place.lng}`;
  }

  function pinIcon(place, active) {
    const cls = ["place-pin"];
    if (place.loop === true) cls.push("place-pin-loop");
    if (place.loop === null) cls.push("place-pin-airport");
    if (active) cls.push("place-pin-active");
    return L.divIcon({
      className: "place-marker",
      html: `<span class="${cls.join(" ")}"></span>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
      popupAnchor: [0, -12]
    });
  }

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
      el("p", "popup-status", statusText(place))
    );
    const links = el("p", "popup-links");
    if (place.phone) {
      const tel = el("a", "", place.phone);
      tel.href = `tel:${place.phone.replace(/\s+/g, "")}`;
      links.append(tel);
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
    marker.on("popupopen", () => selectPlace(place.id));
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
