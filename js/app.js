  // option one
  let h1 = document.getElementsByTagName('h1');
     
  // console.log(h1);
  
  var arr = [].slice.call(h1);
  
  arr.forEach((item) => {
    item.addEventListener('click',() =>{
      if(item.id === 'balazs'){
        // console.log('balazs')
        document.getElementById('balazs_audio').play();
        return
      }
      if(item.id === 'ferencz'){
        // console.log('ferencz')
        document.getElementById('ferencz_audio').play();
        return
      }
    })
  })
  
  //option 2 
  // h1.addEventListener('click', () => {
  //   console.log('h1 clicked')
  // });
  
  // function playBalazs(){
  //   document.getElementById('balazs_audio').play(); 
  // }
  
  // function playFerencz(){
  //   document.getElementById('ferencz_audio').play(); 
  // }