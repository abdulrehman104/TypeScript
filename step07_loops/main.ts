// // FPR LOOP

//   initialization      condition         increment             decrement
for(let   i = 0;          i < 11;            i++    ,               i--      ){
    console.log("Hello World");
  }
  
  // AK VALUE KO MULTIPLE TIME PRINT KR DEGA
  for (let i = 0; i <= 10; i++) {
    console.log("Hello World");
  }
  
  // SIMPLE 1 TO 10 COYNTING PRINT KR DEGA
  for (let i = 1; i < 11; i++) {
    console.log(i);
  }
  
  // JIS INDEX KO CONSOLE KRE GE ARRAY KE US ELEMENT KO 5 TIME PRINT KR DEGA
  const std = ["AbdulRehman", "Hassan", "Ammar", "Atif", "Yousuf"];
  for (let i = 0; i <= 5; i++) {
    console.log(std[1]);
  }
  
  // ARRAY MN JINA DATA HE SAB KO AK AK KRKE PRINT KR DEGA
  const std1 = ["AbdulRehman", "Hassan", "Ammar", "Atif", "Yousuf"];
  for (let i = 0; i <= 4; i++) {
    console.log(std1[i]);
  }
  
  // ARRAY MN JINA DATA HE SAB KO AK AK KRKE PRINT KR DEGA & UNKE INDEX KO BHI PRINT KR DEGA
  const std2 = ["AbdulRehman", "Hassan", "Ammar", "Atif", "Yousuf"];
  for (let i = 0; i <= 4; i++) {
    console.log(std2[i]);
    console.log(i);
  }
  
  // AGR ABCD PRINT KRNE HE TO YE KRE GE
  let arr = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "S",
    "T",
    "U",
    "V",
    "W",
    "W",
    "x",
    "y",
    "z",
  ];
  console.log(arr);
  
  for (let i = 0; i <= 26; i++) {
    console.log(arr[i]);
  }
  
  // TABLE WRITE KRNA HE TO
  for (let i = 1; i < 11; i++) {
    let ans: number = i * 2;
    console.log("2", "*", i, "=", ans);
  }
  
  let n1: number = 3;
  for (let i = 1; i < 11; i++) {
    console.log(`${n1} *  ${i} = ${n1 * i}`);
  }
  
  let cleanestCities = ["Karahi", "Lahore", "Islamabad", "Peshawar"];
  for (let i = 0; i <= 4; i++)
    if ("Islamabad" === cleanestCities[i]) {
      console.log("It is one of the cleaniest city");
      break;
    }
     else {
        console.log("It is not a cleanest city");
     }
    
    let videos = ["video1", "video2", "video3", "video4", "video5"];
    
      console.log(videos.length) // 5
    
    for (let i = 0; i < videos.length; i++) {
      console.log(videos[i]);
    }
  
  

  