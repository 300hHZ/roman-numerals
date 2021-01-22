function romanNumeral(number){
  if(number<1 || number>3999)
  {
    alert("nah. try again.");
    return;
  }
  const conv = ["M","D","C","L","X","V","I"]; 
  let answer = "";
  let factor = 1000;
  let multiple;
  for(let i = 0; i < conv.length; i++)
  {
    if(number >= factor) 
    {
      multiple = Math.floor(number/factor);
      if(multiple === 4) 
      {
        answer += conv[i];
        answer += conv[i-1];
      }
      else{ 
        while(multiple-- > 0) answer += conv[i];
      }
    }
    if(i%2==0){ 
      if(Math.floor((number%factor)/(factor/10)) === 9)
      {
        answer += conv[i+2] + conv[i];
        i += 2; 
        factor /= 5;
      }
      factor /= 2;
    }
    else{ factor /= 5;}
    number = number%factor;
  }
return answer;
}