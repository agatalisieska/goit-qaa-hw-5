function myFunction() {
  const element = document.getElementById("id01");
  element.innerHTML = "Nowy nagłówek";
}

function myColorChange() {
  const element = document.getElementById("id01");
  element.style.color = "red";
}

/////// Wyjaśnienie słowa kluczowego this w JavaScript.

// "This" będzie wskazywało na konkretny obiekt, który tworzymy - dzięki jego użyciu JavaScript nie będzie przeszukiwał całego kodu
// w poszukiwaniu elementu, do którego się odwołujemy, tylko skupi się na danym obiekcie w obrębie, którego użyto słówko 'this'. Wykorzystując słówko 'this' w klasie oznacza, że tworzymy pewien obiekt.

/////// Dwa przykłady demonstrujące użycie this w JavaScript.

// PRYKŁAD NR 1

// Utworzyłam stałą name, która jest dostępna globalnie
const name = "Agata";

// utowrzyłam obiekt "person", który posiada element o tej samej nazwie, co mój obiekt "name", ale jest on dostępny lokalnie, tylko w obiekcie.
const person = {
  name: "Szajba",
  greet: function () {
    // jeśli nie użyję słówka 'this', to po wywołaniu funkcji person.greet() wyswietli się "Cześć, jestem Agata", czyli nastapi odwołanie się do obiektu dostępnego globalnie (zostanie wyszukany w pierwszej kolejności przez Java Script).
    // jeśli użyję słówka 'this', to po wywołaniu funkcji person.greet() wyswietli się "Cześć, jestem Szajba", czyli funkcja odwoła się do obietu dostępnego lokalnie.
    console.log("Cześć, jestem " + this.name);
  },
};

person.greet(); // Wyświetla: "Cześć, jestem Szajba"

// PRZYKŁAD NR 2

// Tworzę funkcję showThis z wykorzystaniem metody z this.

function showThis() {
  console.log("To jest funkcja showThis: ", this);
}

showThis(); // odwołanie do obiektu globalnego window

// Jeśli stworzę obiekt z wykorzystaniem metody z this, to odwołam się bezpośrednio do obiektu "pet"

const pet = {
  petname: "Zad",
  showThis() {
    //mamy również odwołanie do 'this', ale w tym wypadku odwołujemy się do naszego konkretnego obiektu "pet", a nie do globalnego window
    console.log(this);
  },
  showName() {
    console.log(this.petname);
  },
};
pet.showThis(); // funkcja wywołująca cały nasz obiekt
pet.showName(); // funkcja wywyłująca imię naszego obiektu

///////// OBIEKT reprezentujący osobę o imieniu "Maciej"

const friend = {
  userName: "Maciej",
  // Metoda zapisująca imię "friend" w konsoli
  showName() {
    console.log(`Mam na imię ${this.userName}`);
  },
};
// Wywołanie metody showName dla obiektu "friend"
friend.showName();

/////// przykład rozszerzony z półką na ksiażki

const bookShelf = {
  authors: [],
  // metoda zwracająca tablicę autorów
  getAuthors() {
    return this.authors;
  },
  //metoda dodająca autora do tablicy autorów
  addAuthor(authorName) {
    this.authors.push(authorName);
  },
};

// dodanie autora nr 1
bookShelf.addAuthor("Remigiusz Mroz");

// dodanie autora nr 2
bookShelf.addAuthor("Olga Tokarczuk");

//zapisanie wywołania funkcji getAuthors jako stałej
const authorsList = bookShelf.getAuthors();

//wyświetlenie stałej, czyli naszej listy autorów, pochodzącej z wywołania funkcji getAuthors
console.log(authorsList);
