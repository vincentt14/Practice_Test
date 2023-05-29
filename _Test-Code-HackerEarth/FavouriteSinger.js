Q = "Bob has a playlist of N songs, each song has a singer associated with it (denoted by an integer)"

Q = "Favourite singer of Bob is the one whose songs are the most on the playlist."

Q = "Count the number of Favourite Singers of Bob."

let bobPlaylist1 = [1, 1, 2, 2, 3];
let bobPlaylist2 = [1, 1, 1, 2, 2, 3];
let bobPlaylist3 = [1, 1, 1, 2, 2, 3, 3, 3, 3, 3];
let fav = [];

const favourite = (playlist) => {
  for (let i = 0; i < playlist.length; i++){
    for(let j = 0; j < playlist.length; j++){
      if(i !== j){
        if(playlist[i] === playlist[j]){
          fav.push(playlist[i]);
          break;
        }
      }
    }
  }
  console.log(fav);
};

favourite(bobPlaylist2);

