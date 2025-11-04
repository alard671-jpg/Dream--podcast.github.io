// Show English numbers for date/time and update every second
function two(n){return n<10? "0"+n : n}
function updateDateTime(){
  const d=new Date();
  const hh=two(d.getHours()), mm=two(d.getMinutes());
  const date = d.getFullYear() + '-' + two(d.getMonth()+1) + '-' + two(d.getDate());
  document.getElementById('datetime').textContent = hh+':'+mm + ' | ' + date;
}
setInterval(updateDateTime,1000);
updateDateTime();
