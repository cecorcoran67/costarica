const mapCanvas = document.querySelector("#place-map");
const placeButtons = [...document.querySelectorAll(".place-list button")];

if (mapCanvas && placeButtons.length && window.L) {
  const places = placeButtons.map((button) => ({
    id: button.dataset.place,
    name: button.querySelector("strong").textContent,
    summary: button.querySelector("span").textContent,
    suits: button.dataset.suits,
    lat: Number(button.dataset.lat),
    lng: Number(button.dataset.lng),
    kind: button.dataset.kind || (button.dataset.loop === "true" ? "loop" : "extra"),
    button
  }));

  mapCanvas.replaceChildren();

  const map = L.map(mapCanvas, {
    scrollWheelZoom: false,
    minZoom: 5,
    maxZoom: 14
  });

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
    maxZoom: 14
  }).addTo(map);

  map.setMaxBounds([[5.2, -90.5], [13.8, -77.5]]);

  const markers = new Map();
  const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function pinIcon(place, active) {
    return L.divIcon({
      className: "place-marker",
      html: `<span class="place-pin${place.kind === "loop" ? " place-pin-loop" : ""}${place.kind === "airport" ? " place-pin-airport" : ""}${active ? " place-pin-active" : ""}"></span>`,
      iconSize: [24, 24],
      iconAnchor: [12, 12],
      popupAnchor: [0, -12]
    });
  }

  function popupNode(place) {
    const root = document.createElement("div");
    const title = document.createElement("strong");
    title.className = "popup-title";
    title.textContent = place.name;
    const summary = document.createElement("p");
    summary.textContent = place.summary;
    const suits = document.createElement("p");
    suits.className = "popup-suits";
    suits.textContent = place.suits;
    root.append(title, summary, suits);
    return root;
  }

  places.forEach((place) => {
    const marker = L.marker([place.lat, place.lng], { icon: pinIcon(place, false) })
      .addTo(map)
      .bindPopup(popupNode(place));
    marker.on("click", () => selectPlace(place.id, false));
    markers.set(place.id, marker);
  });

  const bounds = L.latLngBounds(places.map((place) => [place.lat, place.lng]));

  function fitCountry() {
    map.invalidateSize();
    map.fitBounds(bounds, { padding: [28, 28] });
  }

  function selectPlace(id, pan) {
    const place = places.find((item) => item.id === id);
    if (!place) return;

    places.forEach((item) => {
      const selected = item.id === id;
      if (selected) item.button.setAttribute("aria-current", "true");
      else item.button.removeAttribute("aria-current");
      markers.get(item.id).setIcon(pinIcon(item, selected));
    });

    const marker = markers.get(id);
    marker.openPopup();
    if (pan) {
      map.flyTo([place.lat, place.lng], Math.max(map.getZoom(), 8), {
        duration: reducedMotion ? 0 : 0.6
      });
    }
  }

  placeButtons.forEach((button) => {
    button.addEventListener("click", () => selectPlace(button.dataset.place, true));
  });

  let fitted = false;
  const watcher = new IntersectionObserver((entries) => {
    if (!entries.some((entry) => entry.isIntersecting)) return;
    map.invalidateSize();
    if (!fitted) {
      fitCountry();
      fitted = true;
    }
  });
  watcher.observe(document.querySelector("#map"));

  window.addEventListener("resize", () => map.invalidateSize());
}
