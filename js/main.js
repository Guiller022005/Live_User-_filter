import { getAllInfoPeople } from "./modules/app.js";
import { perfiles } from "./components/perfil.js";

let search = document.querySelector("#search");
let main_section = document.querySelector(".main_section");

addEventListener("DOMContentLoaded", async () => {
    let info = await getAllInfoPeople();
    main_section.innerHTML = await perfiles(info);

    const names = info.map(person => person.name_full); // Obtener array de nombres
    
    search.addEventListener("input", e => {
        const searchString = e.target.value.toLowerCase();
        const filteredProfiles = info.filter(person =>
            person.name_full.toLowerCase().includes(searchString)
        );
        main_section.innerHTML = perfiles(filteredProfiles);
    });
});
