let container = document.querySelector(`.album`);
let playlist = document.querySelector(`.playlist`)
let search = new URLSearchParams(window.location.search);
let i = search.get(`i`);
let album = albums[i];

if(!album){
    container.innerHTML = `Редирект на главную через 5 секунд`;
    setTimeout(() => {
        window.location.href = `index.html`;
    }, 5000);
} else {
    container.innerHTML = `
        <div class="card mb-3">
            <div class="row">
                <div class="col-md-4">
                    <img src="${album.img}" alt="" class="img-fluid rounded-start">
                </div>
                <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title">${album.title}</h5>
                        <div class="card-text">${album.description}</div>
                        <div class="card-text"><small class="text-muted">Сборник выпущен в ${album.year} году</small></div>
                    </div>
                </div>
            </div>
        </div>
    `

    let tracks = album.tracks;
    for(let i = 0; i < tracks.length ; i++) {
        let track = tracks[i];
        playlist.innerHTML += `
            <li class="list-group-item d-flex align-items-center">
                <img src="assets/play.png" alt="" height="30px" class="me-3">
                <div>
                    <div>${track.title}</div>
                    <div class="text-secondary">${track.Author}</div>
                </div>
                <div class="ms-auto">${track.time}</div>
            </li>
        `
    }
}