export const perfiles = async(info) => {
    let plantilla = "";
    for (let i = 0; i < info.length; i++){
        plantilla += /*html*/`
        <div class="profile">
            <img src="./storage/img/imgPerfilUsuario.avif" alt="img">
            <div class="profile_info">
                <h2>${info[i].name_full}</h2>
                <p>${info[i].description}</p>
            </div>
        </div>
        <hr>
        `;
    }
    return plantilla;
};