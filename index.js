window.onload = () => {
  getData('eminem');
  getData('metallica');
  getData('behemoth');
};
function getData(artistName) {
  fetch(`https://deezerdevs-deezer.p.rapidapi.com/search?q=${artistName}`, {
    method: 'GET',
    headers: {
      'x-rapidapi-key': '4ca85034femshac4896036082b6ep141e6ejsn8c8d85868e6c',
      'x-rapidapi-host': 'deezerdevs-deezer.p.rapidapi.com',
    },
  })
    .then((response) => {
      return response.json();
    })
    .then((music) => {
      const rowEm = document.getElementById('eminemRow');
      for (let i = 0; i < music.data.length; i++) {
        const item = music.data[i];
        console.log(item);
        rowEm.innerHTML += `<div class="col-12 col-md-3 columns" >
          <img src="${item.album.cover_big}" alt="" />
          <div class="infos">
            <div id='artist_name'>${item.artist.name}</div>
            <div>${item.album.title}</div>
          </div>
        </div>`;
      }
    })
    .catch((err) => {
      console.error(err);
    });
}
