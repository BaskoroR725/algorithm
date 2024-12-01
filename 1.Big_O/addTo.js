function addTo(n){
  let total = 0;
  for( let i = 0; i<=n;i++){
    total +=i;
  }
  return total;
}
addTo(6);

var time1 = performance.now();
addTo(1000000000);
var time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`);