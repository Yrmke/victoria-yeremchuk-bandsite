
const shows = [
    {
        date: "Mon Sept 06 2021",
        venue: "Ronald Lane",
        location: "San Francisko, CA"
    },
    {
        date: "Tue Sept 21 2021",
        venue: "Pier 3 East",
        location: "San Francisko, CA"
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisko, CA"
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisko, CA"
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisko, CA"
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisko, CA"
    }
]

// h2 title "SHOWS"
const showSection = document.querySelector(".shows");
const showTitle = document.createElement("h2");
    showTitle.classList.add("shows-title");
    showTitle.innerText = "Shows";
    showSection.appendChild(showTitle);

const displayShows = (tickets) =>{
    const showSection = document.querySelector(".shows");

    // h2 title
    // const showTitle = document.createElement("h2");
    // showTitle.classList.add("shows-title");
    // showTitle.innerText = "Shows";
    // showSection.appendChild(showTitle);

    // list
    const showList = document.createElement("ul");
  showList.classList.add("shows-list");
  showSection.appendChild(showList);

    // list items
    const itemList = document.createElement("li");
    itemList.classList.add("shows-list__item");
    showList.appendChild(itemList);

    // show info
    // DATE
    const titleItem = document.createElement("p");
    titleItem.classList.add("shows-list__title");
    titleItem.innerHTML = "DATE";
    itemList.appendChild(titleItem);

    // DAY MON YEAR
    const dateItem = document.createElement("p");
    dateItem.classList.add("shows-list__infob");
    dateItem.innerHTML = tickets.date;
    itemList.appendChild(dateItem);

    // VENUE
    const placeItem = document.createElement("p");
    placeItem.classList.add("shows-list__title");
    placeItem.innerHTML = "VENUE";
    itemList.appendChild(placeItem);
    
    // VENUE DETAILS
    const venueItem = document.createElement("p");
    venueItem.classList.add("shows-list__info");
    venueItem.innerHTML = tickets.venue;
    itemList.appendChild(venueItem);

    // LOCATION
    const areaItem = document.createElement("p");
    areaItem.classList.add("shows-list__title");
    areaItem.innerHTML = "LOCATION";
    itemList.appendChild(areaItem);
    
   
    const locationItem = document.createElement("p");
    locationItem.classList.add("shows-list__info");
    locationItem.innerHTML = tickets.location;
    itemList.appendChild(locationItem);

    const button = document.createElement("button");
    button.classList.add("show-list__button");
    button.innerHTML = "BUY TICKETS";
    itemList.appendChild(button);


}

//  FOR LOOP (ALL OF THE SHOWS)
for (let i = 0; i< shows.length; i++) {
    const tickets = shows[i];
    displayShows(tickets);
    
}

/* <section class="shows">
<h2 class="shows-title">Shows</h2>
<ul class="shows-list">
    <li class="shows-list__item">
        <h3 class="shows-list__title">Date</h3>
        <p class="shows-list__info">Mon Seot 06 2021</p>
        <h3 class="shows-list__title">Venue</h3>
        <p class="shows-list__info">Ronald Lane</p>
        <h3 class="shows-list__title">Location</h3>
        <p class="shows-list__info">San Francisko, CA</p>
        <button>BUY TICKETS</button>
    </li>
</ul>
</section> */