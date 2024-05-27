var a = [
    [1,2,3, 4,5,6, 7,8,9],
    [4,5,6, 7,8,9, 1,2,3],
    [7,8,9, 1,2,3, 4,5,6],
    [2,3,1, 5,6,4, 8,9,7],
    [5,6,4, 8,9,7, 2,3,1],
    [8,9,7, 2,3,1, 5,6,4],
    [6,4,5, 3,1,2, 9,7,8],
    [3,1,2, 9,7,8, 6,4,5],
    [9,7,8, 6,4,5, 3,1,2]
  ];
  var c = new Array(10).fill(0);
  
  function rowCheck() {
    for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
        c[a[i][j]]++;
      }
      for (let k = 1; k <= 9; k++) {
        if (c[k] != 1) {
          return 0;
        }
      }
     
      c.fill(0);
    }
    return 1;
  }
  function columnCheck (){
    for(let i=0;i<9;i++){
      for(let j=0;j<9;j++){
        c[a[j][i]]++;
      }
      for(let k=1;k<=9;k++){
        if(c[k]!=1){
          return 0;
        }
      }
      c.fill(0);
    }
    return 1;
  }
  function cubeCheck(){
    for(let cr=0;cr<9;cr+=3){
      for(let cc=0;cc<9;cc+=3){
        for(let i=cr; i<cr+3;i++){
          for(let j=cc;j<cc+3;j++){
            c[a[i][j]]++;
          }
        }
        for (let k = 1; k <= 9; k++) {
          if (c[k] != 1) {
  
  
            return 0;
          }
        }
        c.fill(0);
      }
    }
    return 1;
  }
  
  console.log("row: " + rowCheck());
  console.log('column ' + columnCheck());
  console.log('cube :' + cubeCheck());
  if (rowCheck()==1 && columnCheck()==1 && cubeCheck()==1) {
    console.log('mission success');
  }else{
    console.log('not success');
  }