// Part 1: Select and cache the <main> element
const mainEl = document.querySelector("main");

// Set the background color using the CSS custom property
mainEl.style.backgroundColor = "var(--main-bg)";

// Set the content of mainEl to <h1>DOM Manipulation</h1>
mainEl.innerHTML = "<h1>DOM Manipulation</h1>";

// Add a class of flex-ctr to mainEl
mainEl.classList.add("flex-ctr");

//Select and cache the <nav id="top-menu"> element
const topMenuEl = document.getElementById("top-menu");

// Set the height of topMenuEl to 100%
topMenuEl.style.height = "100%";

// Set the background color using the CSS custom property
topMenuEl.style.backgroundColor = "var(--top-menu-bg)";

// Add a class of flex-around to topMenuEl
topMenuEl.classList.add("flex-around");

// Part 4: Menu data structure
var menuLinks = [
  { text: "about", href: "/about" },
  {
    text: "catalog",
    href: "#",
    subLinks: [
      { text: "all", href: "/catalog/all" },
      { text: "top selling", href: "/catalog/top" },
      { text: "search", href: "/catalog/search" },
    ],
  },
  {
    text: "orders",
    href: "#",
    subLinks: [
      { text: "new", href: "/orders/new" },
      { text: "pending", href: "/orders/pending" },
      { text: "history", href: "/orders/history" },
    ],
  },
  {
    text: "account",
    href: "#",
    subLinks: [
      { text: "profile", href: "/account/profile" },
      { text: "sign out", href: "/account/signout" },
    ],
  },
];

menuLinks.forEach((link) => {
  const aEl = document.createElement("a");
  aEl.setAttribute("href", link.href);
  aEl.textContent = link.text;
  topMenuEl.appendChild(aEl);
});

// Part 3: Select and cache the <nav id="sub-menu"> element
const subMenuEl = document.getElementById("sub-menu");

// Set the height of subMenuEl to "100%"
subMenuEl.style.height = "100%";

// Set the background color using the CSS custom property
subMenuEl.style.backgroundColor = "var(--sub-menu-bg)";

// Add the class of flex-around to subMenuEl
subMenuEl.classList.add("flex-around");

// Hide the submenu initially
subMenuEl.style.position = "absolute";
subMenuEl.style.top = "0";

//Part 4: Adding interaction to top menu with active state and submenu toggling
// Select all <a> elements inside topMenuEl
const topMenuLinks = topMenuEl.querySelectorAll("a");

// Helper function to build the submenu dynamically
function buildSubmenu(subLinks) {
  // Clear the current submenu contents
  subMenuEl.innerHTML = "";

  // Iterate over the subLinks array and create <a> elements
  subLinks.forEach((link) => {
    const aEl = document.createElement("a"); // Create new <a> element
    aEl.setAttribute("href", link.href); // Set href attribute
    aEl.textContent = link.text; // Set link text
    subMenuEl.appendChild(aEl); // Append to subMenuEl
  });
}

// Add event listener to the top menu
topMenuEl.addEventListener("click", function (event) {
  // Prevent the default link behavior
  event.preventDefault();

  // Return if the clicked element is not an <a>
  if (event.target.tagName !== "A") return;

  // Log the text content of the clicked <a> element
  console.log(event.target.textContent);

  // Find the clicked link object in menuLinks
  const clickedLink = menuLinks.find(
    (link) => link.text === event.target.textContent
  );

  // Remove "active" class from all top menu links
  topMenuLinks.forEach((link) => link.classList.remove("active"));

  // Toggle "active" class on the clicked link
  if (!event.target.classList.contains("active")) {
    event.target.classList.add("active");

    // Check if the clicked menu item has subLinks
    if (clickedLink && clickedLink.subLinks) {
      buildSubmenu(clickedLink.subLinks); // Dynamically build submenu
      subMenuEl.style.top = "100%"; // Show submenu
    } else {
      subMenuEl.style.top = "0"; // Hide submenu
    }
  } else {
    event.target.classList.remove("active");
    subMenuEl.style.top = "0"; // Hide submenu
  }
});

// Part 5: Adding interaction to the submenu
subMenuEl.addEventListener("click", function (event) {
  // Prevent the default link behavior
  event.preventDefault();

  // Return if the clicked element is not an <a>
  if (event.target.tagName !== "A") return;

  // Log the text content of the clicked <a> element
  console.log(event.target.textContent);

  // Hide the submenu
  subMenuEl.style.top = "0";

  // Remove the active class from all top menu links
  topMenuLinks.forEach((link) => link.classList.remove("active"));

  // Update the main content with the clicked submenu item
  mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
});

//Part 6: Completion and Code Review
// Test your menu! If it works in a way that makes sense, you have likely been successful. Your instructor has been provided with a completed version of this assignment, and time permitting, will do a brief code review so that you can make comparisons with your own approaches.
// Remember, functionality is key! There are many ways to arrive at the same solution in development, and often the difference in syntax between two solutions is inconsequential. If it works, good job!
// Remember to submit the link to this part of the project to Canvas using the submission instructions at the beginning of this document.