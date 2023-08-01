module.exports = function reverse (n) {
  let a = 0;
  let end = 0;
    if(Math.sign(n) == -1){
        a = n * (-1);
  } else a = n;
  let c = a.toString();
  let arr = c.split('');
  for(let i=c.length-1 ;i>=0;--i ){
    end = end + arr[i];
  }
  return end;
}
