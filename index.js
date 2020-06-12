const twoStrings = (s1, s2)=>{
    let longString, shortString;

    if(s1.length > s2.length){
      longString = s1;
      shortString = s2;
    }else{
      if(s2 > s1){
        longString = s2;
        shortString = s1;
      }
    }

  if(longString.indexOf(shortString) !== -1){
    return "YES!"
  } else {
    return "no"
  }

}
twoStrings('onesy', 'one');
