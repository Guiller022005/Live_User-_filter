import { getAllNameUser, getAllProductsName } from "./modules/app.js";

let input__search = document.querySelector("#input_search");

let createProfileElement = (user) => {
    // Create main profile container
    let profile = document.createElement("div");
    profile.classList.add("profile");

    // Create and append profile image
    let img = document.createElement("img");
    img.src = user.avatar ? user.avatar : "./storage/img/imgPerfilUsuario.avif";
    img.alt = "Profile Image";
    profile.appendChild(img);

    // Create profile info container
    let profileInfo = document.createElement("div");
    profileInfo.classList.add("profile_info");

    // Create and append user name
    let userName = document.createElement("h2");
    userName.textContent = user.name_full;
    profileInfo.appendChild(userName);

    // Create and append user description
    let userDescription = document.createElement("p");
    userDescription.textContent = user.description;
    profileInfo.appendChild(userDescription);

    // Append profile info to profile container
    profile.appendChild(profileInfo);

    return profile;
};

let renderUsers = (users) => {
    const HTMLResponse = document.querySelector("#app");
    HTMLResponse.innerHTML = ''; // Clear existing content

    users.forEach(user => {
        let profileElement = createProfileElement(user);
        HTMLResponse.appendChild(profileElement);
        HTMLResponse.appendChild(document.createElement("hr")); // Add horizontal line
    });
};

let searchUsers = async (e) => {
    let params = new URLSearchParams(location.search);
    input__search.value = params.get("search") || "";
    let res = "";

    try {
        res = await getAllProductsName({ search: input__search.value });
        console.log(res); // Do something with the search results
        renderUsers(res);
    } catch (error) {
        console.error("Error in searchUsers function:", error);
    }
};

input__search.addEventListener("input", searchUsers);

// Fetch and display all users on page load
document.addEventListener("DOMContentLoaded", async () => {
    try {
        let users = await getAllNameUser();
        if (Array.isArray(users)) {
            renderUsers(users);
        } else {
            console.error("Expected an array of users but received:", users);
        }
    } catch (error) {
        console.error("Error fetching users:", error);
    }
});
