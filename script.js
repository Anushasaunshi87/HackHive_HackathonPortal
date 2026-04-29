const hackathons = [
  { name: "AI Innovate 2026", domain: "AI", location: "Online" },
  { name: "Web Dev Jam", domain: "Web", location: "New York" },
  { name: "BlockHack", domain: "Blockchain", location: "San Francisco" },
  { name: "CyberSecure Hack", domain: "Cybersecurity", location: "Online" }
];

const list = document.getElementById("hackathon-list");
const searchInput = document.getElementById("search");
const filter = document.getElementById("filter");

function display(data) {
  list.innerHTML = "";

  data.forEach(hack => {
    const div = document.createElement("div");
    div.classList.add("card");

    div.innerHTML = `
      <h3>${hack.name}</h3>
      <p><strong>Domain:</strong> ${hack.domain}</p>
      <p><strong>Location:</strong> ${hack.location}</p>
    `;

    list.appendChild(div);
  });
}

function filterData() {
  const search = searchInput.value.toLowerCase();
  const selected = filter.value;

  const filtered = hackathons.filter(hack => {
    return (
      (selected === "all" || hack.domain === selected) &&
      hack.name.toLowerCase().includes(search)
    );
  });

  display(filtered);
}

searchInput.addEventListener("input", filterData);
filter.addEventListener("change", filterData);

// initial load
display(hackathons);