const caseElement = document.querySelector(".places__list");
const cardTemplate = document.querySelector("#card-template").content;

// Функция удаления карточки
const deleteCard = (event) => {
  event.target.closest(".places__item").remove();
};

// Функция постановки лайка
const handleClickLike = (event) => {
  event.target.classList.toggle("card__like-button_is-active");
};

// Функция создания и вывода карточки
function createCard(data) {
  const cardElement = cardTemplate
    .querySelector(".places__item")
    .cloneNode(true);
  const placesImage = cardElement.querySelector(".card__image");
  cardElement.querySelector(".card__title").textContent = data.name;
  placesImage.src = data.link;
  placesImage.alt = data.name;
  cardElement
    .querySelector(".card__delete-button")
    .addEventListener("click", deleteCard);
  cardElement
    .querySelector(".card__like-button")
    .addEventListener("click", handleClickLike);
  return cardElement;
}

const addCard = (data) => {
  const newCard = createCard(data);
  caseElement.prepend(newCard);
};

initialCards.forEach((data) => {
  addCard(data);
});

const cardsFormHandler = (event) => {
  event.preventDefault();
  addCard({
    name: namePlace.value,
    link: placeImg.value,
  });
};


