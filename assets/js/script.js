const searchInput = document.getElementById("searchInput");
const results = document.getElementById("results");
const loading = document.getElementById("loading");

const data = [
  "JavaScript",
  "Java",
  "Python",
  "React",
  "Node.js",
  "HTML",
  "CSS",
  "MongoDB",
  "Express",
  "TypeScript",
  "Angular",
  "Vue",
  "Tailwind CSS",
  "Bootstrap",
  "C Programming",
  "C++",
  "PHP",
  "Flutter",
  "Django",
  "SQL"
];

function displayResults(items){

  results.innerHTML = "";

  if(items.length === 0){
    results.innerHTML =
      `<div class="empty">No results found</div>`;
    return;
  }

  items.forEach(item => {

    const div = document.createElement("div");

    div.classList.add("item");

    div.innerText = item;

    results.appendChild(div);

  });
}

function searchData(value){

  loading.style.display = "block";

  setTimeout(() => {

    const filtered = data.filter(item =>
      item.toLowerCase().includes(value.toLowerCase())
    );

    loading.style.display = "none";

    displayResults(filtered);

  },700);
}

function debounce(func, delay){

  let timer;

  return function(...args){

    clearTimeout(timer);

    timer = setTimeout(() => {
      func.apply(this, args);
    }, delay);

  };
}

const debouncedSearch = debounce((e) => {

  const value = e.target.value.trim();

  if(value === ""){
    results.innerHTML =
      `<div class="empty">Start typing to search...</div>`;
    return;
  }

  searchData(value);

}, 500);

searchInput.addEventListener("input", debouncedSearch);

results.innerHTML =
  `<div class="empty">Start typing to search...</div>`;