const searchInput = document.getElementById("film-arama-kutusu");
const clearButton = document.getElementById("arama-temizle");
const resultCount = document.getElementById("sonuc-sayaci");
const emptyMessage = document.getElementById("bos-sonuc-mesaji");
const filmCards = document.querySelectorAll(".film-karti");

function filterFilms() {
  const query = searchInput.value.trim().toLowerCase();
  let visibleCount = 0;

  filmCards.forEach((card) => {
    const title = card.querySelector("h2").textContent
      .trim()
      .toLowerCase();
    const matches = title.includes(query);

    card.hidden = !matches;
    if (matches) {
      visibleCount += 1;
    }
  });

  resultCount.textContent = `${visibleCount} sonuç`;
  emptyMessage.hidden = visibleCount !== 0;
}

searchInput.addEventListener("input", filterFilms);
clearButton.addEventListener("click", () => {
  searchInput.value = "";
  filterFilms();
  searchInput.focus();
});

filterFilms();