// footer script, add copywrite year and last modified date
const today = new Date();

currentyear.innerHTML = today.getFullYear();

lastmodified.innerHTML = document.lastModified;

// function to toggle the nav menu open and close, and change the burger menu icon

const burgerMenu = document.querySelector("#hamburgerMenuButton");
const nav = document.querySelector("nav");
burgerMenu.addEventListener('click', function() {
    nav.classList.toggle("open");
    if (nav.classList.contains("open")) {
        burgerMenu.innerHTML = "&#10005;";
    }else {
        burgerMenu.innerHTML = "&#9776;";
    }
});


// array of temple objects to be used in the filter function
const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
        "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    // Add more temple objects here...
    {
        templeName: "Madrid Spain",
        location: "Madrid, Spain",
        dedicated: "1999, March, 19",
        area: 45800,
        imageUrl:
        "https://www.churchofjesuschrist.org/imgs/c5cc2a1d92a020ae4358dfeedb3085d924954f66/full/3840%2C/0/default"
      },
      {
        templeName: "Manila Philippines",
        location: "Manila, Philippines",
        dedicated: "1984, September, 25",
        area: 26683,
        imageUrl:
          "https://www.churchofjesuschrist.org/imgs/c09f89d28ed71e6f874e5e2193b2d67d8e2d53da/full/3840%2C/0/default"
      },
      {
        templeName: "Nauvoo Illinois Temple",
        location: "Nauvoo, Illinois, United States",
        dedicated: "2002, June, 27",
        area: 54000,
        imageUrl:
          "https://churchofjesuschrist.org/imgs/44d4157ef06ea7826b23919ad030a1112aee9eac/full/1920%2C/0/default"
      },
];
  
// function to filter temples by size
function filterTemplesSmall(temples) {
  const smallTemples = temples.filter(temples => temples.area < 10000);
  return smallTemples;
}

// function to filter temples by size
function filterTemplesLarge(temples) {
  const largeTemples = temples.filter(temples => temples.area > 90000);
  return largeTemples;
}

// function to filter temples by age
function filterTemplesOld(temples) {
  const oldTemples = temples.filter(temples => {
    const dedicatedYear = parseInt(temples.dedicated.split(",")[0]);
    return dedicatedYear < 1900;
  });
  return oldTemples;
}

// function to filter temples by age
function filterTemplesNew(temples) {
  const newTemples = temples.filter(temples => {
    const dedicatedYear = parseInt(temples.dedicated.split(",")[0]);
    return dedicatedYear >= 2000;
  });
  return newTemples;
}

// create temple card
function createTempleCard(temples) {
  temples.forEach(temple => {
    // variables
    let templeCard = document.createElement("section");
    let templeName = document.createElement("h3");
    let templeLocation = document.createElement("p");
    let templeDedicated = document.createElement("p");
    let templeArea = document.createElement("p");
    let templeImage = document.createElement("img");

    // set attributes from temple objects in array to the variables
    templeName.textContent = temple.templeName;
    templeLocation.textContent = `Location: ${temple.location}`;
    templeDedicated.textContent = `Dedicated: ${temple.dedicated}`;
    templeArea.textContent = `Area: ${temple.area} sq ft`;
    templeImage.setAttribute("src", temple.imageUrl);
    templeImage.setAttribute("alt", `Image of the ${temple.templeName} temple`);
    templeImage.setAttribute("loading", "lazy");
    templeImage.setAttribute("width", "300");

    // condense all variables into the card section
    templeCard.appendChild(templeName);
    templeCard.appendChild(templeLocation);
    templeCard.appendChild(templeDedicated);
    templeCard.appendChild(templeArea);
    templeCard.appendChild(templeImage);

    // append to the gallery section in the HTML
    document.querySelector(".gallery").appendChild(templeCard);
  });
}

createTempleCard(temples);


// event listeners for the filter buttons
document.querySelector("#smallTemples").addEventListener("click", function() {
  document.querySelector(".gallery").innerHTML = ""; // clear the gallery
  const smallTemples = filterTemplesSmall(temples);
  createTempleCard(smallTemples);
});

document.querySelector("#largeTemples").addEventListener("click", function() {
  document.querySelector(".gallery").innerHTML = ""; // clear the gallery
  const largeTemples = filterTemplesLarge(temples);
  createTempleCard(largeTemples);
});

document.querySelector("#oldTemples").addEventListener("click", function() {
  document.querySelector(".gallery").innerHTML = ""; // clear the gallery
  const oldTemples = filterTemplesOld(temples);
  createTempleCard(oldTemples);
});

document.querySelector("#newTemples").addEventListener("click", function() {
  document.querySelector(".gallery").innerHTML = ""; // clear the gallery
  const newTemples = filterTemplesNew(temples);
  createTempleCard(newTemples);
});

// event listener for the reset button

document.querySelector("#allTemples").addEventListener("click", function() {
  document.querySelector(".gallery").innerHTML = ""; // clear the gallery
  createTempleCard(temples); // recreate the temple cards
});

