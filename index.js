// !1.
// function stringIndex(string) {
//     if (string.length > 5) {
//         console.log("long");
//     }
//     else {
//         console.log("short");
//     }
// }
// var result = stringIndex("you are here?");
// !2.
// function findStringIndexOf(string) {

//     if (string.match("a")) {
//         var a = string.match("a");
//         return a;
//     }
//     var b = "not found"
//     return b;
// }
// var result = findStringIndexOf("bbbbb");
// !3.
// function getMatchOstring(string) {
//     if (string.match("r")) {
//         return true;
//     }
//     return false;
// }
// var result = getMatchOstring("bbbbgghhghr");
// !4.

// function getMatchOstring(string, tav) {
//     for (let i = 0; i < string.length; i++) {
//         if (string[i].toString(string) == tav[i].toString(tav)) {

//             return true;
//         }
//         return false;
//     }
// }

// var result = getMatchOstring("ruuu", "ti");
// !5
// function getMatchOstring(string, tav) {
//     for (let i = 0; i < string.length; i++) {
//         if (string[i].toString(string) == tav[i].toString(tav)) {
//             console.log(i);
//         }
//         else {
//             console.log("it doesn't exist");
//         }

//     }
// }

// var result = getMatchOstring("abcdef", "abcd");
// !6.
// function getThreeStr(str) {
//     var a = str.substr(0, 6);

//     return a;

// }
// var result = getThreeStr("sayonara");
// !9
// function getThreeStr(str) {
//     var a = str.substring(0, 9);
//     return a;
// }
// var result = getThreeStr("sayonara");
// !10.
// function getStringAndIndex(string, index) {
//     for (let i = 0; i < index.length; i++) {
//         if (string.length < index.length) {
//             console.log("the word is to much longer");
//             return "the word is to much longer";
//         }
//         else if (string.length == index.length) {
//             console.log(index.substr(2, 5));
//             return index.substr(2, 5);
//         }
//     }

// }
// var result = getStringAndIndex("abcdefg", "higklmp");
// !11.
// function getStringAndIndex(string, index) {
//     for (let i = 0; i < index.length; i++) {
//         if (string.length < index.length) {
//             console.log("the word is to much longer");
//             return "the word is to much longer";
//         }
//         else if (string.length == index.length) {
//             console.log(string.substr(0, 3));
//             return string.substr(0, 3);
//         }
//     }

// }
// var result = getStringAndIndex("abcdefg", "higklmp");
// !12. go back and fix it again
// function getNumAndStr(string, num) {
//     for (let i = 0; i < string.length; i++) {
//         if (num.length == Number) {
//             console.log("o");
//         }
//     }

// }
// var result = getNumAndStr("aa", 85)
// !13.
// function getThreeSubString(string) {

//     return string.substring(0, 3);
// }
// var result = getThreeSubString("substrin syorana");
// !14.

// function getFourSubString(string) {
//     return string.substr(2, 4);
// }
// var result = getFourSubString("sayonara");
//!15. 
// function getFourSubString(string) {
//     string.substring(2, 4);
//     console.log(string.substring(3, 8));
// }
// var result = getFourSubString("sayonara");
//!16 
// function getFullName (fullName){
//     console.log(fullName.length);

//     if(fullName.match(" ")){
//         console.log("thre is space");
//     }
//     console.log(fullName.substr(0,4));
//     console.log(fullName.substring(5,20));
// }
// var result=getFullName("bari kassa");
//!17.18 
// function getTwostrings(string1, string2){
// var lowerCase=string1.toLowerCase();
// if(lowerCase.toString()==string2.toString()){
//     console.log("a");
// }
// }

// var result= getTwostrings("MAFI","mafi");
// //!19 לעשות את התרגיל גם עם אינפוט

// function printTheLongestName(firstName, lastName) {

//     if (firstName.length > lastName.length) {
//         console.log("firstName");
//     }
//     else {
//         console.log(lastName);
//     }
// }
// var result = printTheLongestName("tttt", "ruuur");
//!20. 

// function printTheLongestName(firstName, lastName) {
//     if (firstName.match("a")) {
//         console.log(firstName);
//     }
    
//     if(lastName.match("api")){
//         console.log(lastName);
//   }
// }
// var result = printTheLongestName("a", "api");
//!21. 
// function getString(string){
//     if(string.length>5){
//         return "long";
//     }
//     else{
        
//         return "short";
//     }
// }
// var result= getString("fggffuu");
//!22. 
// function getCountryName(cauntry){
//      if(cauntry.length>3){
//          return "yes"
//      }
//      else{
//         return "no"
//      }
// }
// var result= getCountryName("uyghj");
//!23. 
// function CompareStringAndletter(string,leter){
    
//     if(string.length>6){
//         console.log(string);
//     }
//     else {
//         console.log(leter);
//     }
// }

// var result=CompareStringAndletter("aga","tyy fghgfh ghgh");
//!24.
// function CompareStringAndletter(string,leter){
    
//     if(string.match("a")==leter.match("a")){
//         console.log(leter.indexOf("a"));
//     }
//     else {
//         console.log(leter);
//     }
// }

// var result=CompareStringAndletter("aga","hhhah");
//!25/26. 
// function printTheLongestName(firstName, lastName) {
//       let a= lastName.toUpperCase();
//     console.log(firstName.substr(0,1)+"."+" "+a );
// }
// var result = printTheLongestName("avi", "popv");
//!27
// function CompareStringAndletter(string,leter){
    
//     if(string.match("a")==leter.match("a")){
//         console.log(string);
//     }
//     else {
//         console.log("do not xist");
//     }
// }
// var result= CompareStringAndletter("agf","agf")
