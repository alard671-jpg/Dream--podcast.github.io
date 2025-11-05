// player.js - reveal the live player and scroll into view
function playLive(){
  const player = document.getElementById('live-player');
  if(!player) return;
  player.classList.remove('player-hidden');
  player.style.display = 'block';
  setTimeout(()=> {
    player.scrollIntoView({ behavior:'smooth', block:'center' });
  }, 80);
}