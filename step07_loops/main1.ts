  //  NESTED LOOP
  for (let i = 0; i < 3; i++) {
    console.log("parent loop", i);
    for (let j = 0; j < 4; j++) {
      console.log("child loop", i);
    }
  }
  
  // FOR VIDEO
  let video1 = ["vid1", "vid2", "vid3"];
  for (let i = 0; i < video1.length; i++) {
    console.log(video1[i]);
  
    let video2 = ["vid1", "vid2", "vid3"];
    for (let i = 0; i < video2.length; i++) {
      console.log(video1[i]);
      // break;
    }
  }
  