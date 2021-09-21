const alarm = function(alarmArr){
    for (const r of alarmArr){
    
        if(r >= 0)
      {
        let beep = r * 1000;
        setTimeout(() =>{
          process.stdout.write('.');
        }, beep); 
      } 
    else console.log("Not valid");
  }
      
    
  
 
}
alarm([5, 10, 2, 3]);
alarm(['fly', 6, -1])