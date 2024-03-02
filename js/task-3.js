
function getElementWidth(content, padding, border){
    const contentWidth = Number.parseFloat(content);
    const paddingWidth = Number.parseFloat(padding);
    const borderWidth = Number.parseFloat(border);

    return contentWidth + (paddingWidth * 2) + (borderWidth * 2);
}

console.log(getElementWidth("50px", "8px", "4px")); // 74
console.log(getElementWidth("60px", "12px", "8.5px")); // 101
console.log(getElementWidth("200px", "0px", "0px")); // 200


//conspect-unit-2

//task1
function checkAge(age) {
    if (age >= 18) {
      return "You are an adult";
    }
    }

    console.log(checkAge(20));
    console.log(checkAge(15));
    console.log(checkAge(18));


//task2

        function checkStorage(available, ordered) {
            if(available < ordered){
            return "Not enough goods in stock!"
            }
            if(available > ordered)
             return "Order is processed, our manager will contact you"
                }
    
        console.log(checkStorage(100, 50));
    console.log(checkStorage(100, 130));
    console.log(checkStorage(200, 20));
    console.log(checkStorage(200, 150));
    console.log(checkStorage(150, 180));
   



    //task3
    function checkStorage(available, ordered) {
        if(ordered === 0){
            return "There are no products in the order!"
            }
           else if(ordered > available ){
                return "Your order is too large, there are not enough items in stock!"
                }
               else if(ordered <= available ){
                    return "The order is accepted, our manager will contact you"
                    }
    }

    console.log(checkStorage(100, 50));
    console.log(checkStorage(100, 130));
    console.log(checkStorage(70, 0));
    console.log(checkStorage(200, 20));
    console.log(checkStorage(200, 150));
    console.log(checkStorage(150, 0));
    console.log(checkStorage(80, 80));
    
//task4
//function checkPassword(password) {
    //const correctPassword = "jqueryismyjam";
   // if(password === correctPassword){
      //  return "Access granted"
       // }
       // if(password !== correctPassword)
        // return "Access denied, wrong password!"
           // }

function checkPassword(password) {
    const correctPassword = "jqueryismyjam";
     return password === correctPassword ? "Access granted" : "Access denied, wrong password!";
            }
  
 console.log(checkPassword("jqueryismyjam"));
    console.log(checkPassword("angul4r1sl1f3"));
    console.log(checkPassword("r3actsux"));
//task5
function getSubscriptionPrice(type) {
  
    switch(type){
      case "starter" : return '0';
      break;
        case "professional" : return '20';
        break;
        case "organization" : return '50';
        break;
        default : return "Invalid subscription type!";
        break;
    }
  }
  console.log(getSubscriptionPrice("professional"));
  console.log(getSubscriptionPrice("organization"));
  console.log(getSubscriptionPrice("starter"));
  console.log(getSubscriptionPrice("random"));
  console.log(getSubscriptionPrice("premium"));

  //task5

  function isNumberInRange(start, end, number) {
return (number >= start && number <= end)
  }
  console.log(isNumberInRange(10, 30, 17));
  console.log(isNumberInRange(10, 30, 5));
  console.log(isNumberInRange(20, 50, 24));
  console.log(isNumberInRange(20, 50, 76));


  //task6

  function checkAccess(subType) {
  return (subType === "pro" || subType === "vip")
  }

  console.log(checkAccess("pro"));
  console.log(checkAccess("starter"));
  console.log(checkAccess("vip"));
  console.log(checkAccess("free"));

  //task7

  function toggleModalVisibility(isVisible) {

    return (isVisible === !true)
  }

  console.log(toggleModalVisibility(true));
  console.log(toggleModalVisibility(false));

  //task8

  function getSubstring(string, length) {
  return (string.slice(0, length))
  }
  console.log(getSubstring("Hello world", 3));
  console.log(getSubstring("Hello world", 5));
  console.log(getSubstring("Hello world", 8));
  console.log(getSubstring("Hello world", 11));
  console.log(getSubstring("Hello world", 0));

  //task9

  function normalizeInput(input, to) {
    if(to === "lower"){
return (input.toLowerCase())
    }
    if(to === "upper")
return (input.toUpperCase())
  }

  console.log(normalizeInput("This ISN'T SpaM", "lower"));
  console.log(normalizeInput("This ISN'T SpaM", "upper"));
  console.log(normalizeInput("Big SALE", "lower"));
  console.log(normalizeInput("Big SALE", "upper"));
  console.log(normalizeInput("Stay Awhile and Listen", "lower"));
  console.log(normalizeInput("Stay Awhile and Listen", "upper"));

  //task10

  function checkForName(fullName, firstName) {
    fullName = (fullName.toLowerCase());
    firstName = (firstName.toLowerCase());
    return (fullName.includes(firstName))
  }
  console.log(checkForName("Jason Neis", "Jason"));
  console.log(checkForName("Jason Neis", "jAsOn"));
  console.log(checkForName("Jason Neis", "Jacob"));
  console.log(checkForName("Caty Stars", "Caty"));
  console.log(checkForName("Caty Stars", "cAtY"));
  console.log(checkForName("Caty Stars", "Andromeda"));

  //task11

  function checkFileExtension(fileName, ext) {
    if(fileName.endsWith(ext)) {
    return "File extension matches"
}
    if(!fileName.endsWith(ext)) 
    return "File extension does not match"

  }
  console.log(checkFileExtension("styles.css", ".css"));
  console.log(checkFileExtension("styles.css", ".js"));
  console.log(checkFileExtension("app.js", ".js"));
  console.log(checkFileExtension("app.js", ".html"));
  console.log(checkFileExtension("index.html", ".html"));
  console.log(checkFileExtension("index.html", ".css"));
  console.log(checkFileExtension("index.html", ".js"));
 
  //task12
  function getFileName(file) {
  if (file.indexOf(".") > -1){
    return file.slice(0, file.indexOf("."));
  }else {
    return file;
  }
  }

  console.log(getFileName("styles.css"));
  console.log(getFileName("app.js"));
  console.log(getFileName("app"));
  console.log(getFileName("index.js"));
  console.log(getFileName("index.html"));
  console.log(getFileName("index.css"));
  console.log(getFileName("index"));

  //task13
  function createFileName(name, ext) {
const nameTrim = name.trim()
    return (nameTrim + "." + ext)
  }

  console.log(createFileName(" order ", "txt"));
  console.log(createFileName("report ", "csv"));
  console.log(createFileName(" presentation", "xml"));

  //task14
  function calculateTotal(number) {
   let count = 0;
   for (let i = 1; i <= number; i++){
    count += i;}
    return count;
  }

  console.log(calculateTotal(1));
  console.log(calculateTotal(3));
  console.log(calculateTotal(0));
  console.log(calculateTotal(18));
  console.log(calculateTotal(24));

  //exemple_1
  for (let i = 0; i <= 20; i += 5) {
    console.log(i);
    //exemple_2
    for (let i = 20; i >= 0; i -= 5) {
      console.log(i);
    }
  }
  

  //task15
  function calculateTotal(number) {
    let count = 0;
    for (let i = 1; i <= number; i+=5){
     count += i;}
     return count;
   }
 
   console.log(calculateTotal(1));
   console.log(calculateTotal(3));
   console.log(calculateTotal(0));
   console.log(calculateTotal(18));
   console.log(calculateTotal(24));

   //task16
   function calculateEvenTotal(number) {
    let count = 0;
    for (let i = 2; i <= number; i+=2){
     count += i;}
     return count;
   }
 
   console.log(calculateEvenTotal(1));
   console.log(calculateEvenTotal(3));
   console.log(calculateEvenTotal(7));
   console.log(calculateEvenTotal(18));
   console.log(calculateEvenTotal(27));
   console.log(calculateEvenTotal());

   //task17
   const start = 6;
const end = 17;
let number;
for (let i = start; i <= end; i++) {
  if (i%5===0) {
    number = i;
    break;
  }
}
console.log(number);

//task18
function findNumber(start, end, divisor) {
  let number;
  for (let i = start; i <= end; i++) {
    if (i%divisor===0)
      return number=i;
    }
  }

  console.log(findNumber(2, 6, 5));
  console.log(findNumber(8, 17, 3));
  console.log(findNumber(6, 9, 4));
  console.log(findNumber(16, 35, 7));
  console.log(findNumber(157, 465, 150));