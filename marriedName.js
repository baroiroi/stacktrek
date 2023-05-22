function marriedName(name1, name2){
   const husbandName = name1;
   const wifeName = name2;
   const husbandLast = husbandName.split(" ");
   const wifeLast = wifeName.split(" ");
   console.log('Husband: ' + husbandName)
   console.log('Wife: ' + wifeName)
   console.log('Husband lastname: ' + husbandLast[1])
   console.log('Married Name: ' + wifeLast[0] + ' ' + husbandLast[1])
   
   
}
marriedName('Lebron James', 'Stephen Curry');
