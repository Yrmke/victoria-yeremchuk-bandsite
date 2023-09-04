
const apiKey = "8d7811c5-bb68-4bf0-8d6a-efe34ee81cfa";
const usersURL = `https://project-1-api.herokuapp.com/showdates?api_key=${apiKey}`;



axios
  .get(usersURL)
  .then((response) => {
    console.log(response.data);

    const showSection = document.querySelector(".shows");
    const showTitle = document.createElement("h2");
        showTitle.classList.add("shows-title");
        showTitle.innerText = "Shows";
        showSection.appendChild(showTitle);

        response.data.forEach((tickets) => {

        // FORMATTED DATE
        const date = new Date(tickets.date);
        const formattedDate = date.toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
        
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
        titleItem.innerText = "DATE";
        itemList.appendChild(titleItem);
    
        // DAY MON YEAR
        const dateItem = document.createElement("p");
        dateItem.classList.add("shows-list__infob");
        dateItem.innerText = formattedDate;
        itemList.appendChild(dateItem);
    
        // VENUE
        const placeItem = document.createElement("p");
        placeItem.classList.add("shows-list__title");
        placeItem.innerText = "VENUE";
        itemList.appendChild(placeItem);
        
        // VENUE DETAILS
        const venueItem = document.createElement("p");
        venueItem.classList.add("shows-list__info");
        venueItem.innerText = tickets.place;
        itemList.appendChild(venueItem);
    
        // LOCATION
        const areaItem = document.createElement("p");
        areaItem.classList.add("shows-list__title");
        areaItem.innerText = "LOCATION";
        itemList.appendChild(areaItem);
        
        const locationItem = document.createElement("p");
        locationItem.classList.add("shows-list__info");
        locationItem.innerText = tickets.location;
        itemList.appendChild(locationItem);
    
        const button = document.createElement("button");
        button.classList.add("show-list__button");
        button.innerText = "BUY TICKETS";
        itemList.appendChild(button);
});
})
  .catch(function (error) {
    console.log(error);
  });
  