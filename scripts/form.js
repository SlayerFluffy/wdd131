// footer script, add copywrite year and last modified date
const today = new Date();

currentyear.innerHTML = today.getFullYear();

lastmodified.innerHTML = document.lastModified;

const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
];
 
// populate products dropdown
if (window.location.pathname.endsWith("form")) {
  const productSelect = document.getElementById("productName");
  products.forEach(product => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = `${product.name}`;
    productSelect.appendChild(option);
  });
}

// track number of reviews submitted
// initialize review count in localStorage if not already set

if (window.location.pathname.endsWith("review")) {
  if (!localStorage.getItem("reviewCount")) {
    localStorage.setItem("reviewCount", 0);
  }
  let reviewCount = Number(localStorage.getItem("reviewCount"));

  reviewCount++;
  localStorage.setItem("reviewCount", reviewCount);
}