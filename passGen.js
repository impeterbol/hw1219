//my lets
let specChar = ' HOW TO DECLARE SPEC CHARS???';
let numChar = '0123456789';
let lowChar = 'abcdefghijklmnopqrstuvwxyz';
let upChar = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let charsAll = [specChar, numChar, lowChar,upChar];
let retPassword = '';


// user presses the generate password button 

document.getElementById("generate").addEventListener("click", passGen);


// user gets a prompt that is stored to a let length: to choose a length of 8-128

function passGen () {
    let passwordLength = prompt('Please choose lenght, enter number between 8-128');
    let passwordNum = parseInt(passwordLength);

    // if number is less than 8 or more that 128 user gets an alert 
    if (parseInt(passwordLength)<8 || parseInt(passwordLength)>128) {
        alert("please press Generate button and enter a number between 8 - 128");
    };
    console.log(passwordNum);

// user gets a confirm about  future password 
    let wantsToProceedQ = confirm(' Now you will be asked about other parameters for your password: If you want your password to have special characters, numeric characters, lowercase characters, UPPERCASE characters. Do you want to proceed? (Press OK to proceed and Cancel to stop');
if (wantsToProceedQ === false){
    alert("ok thanks!")
    return stop;
    
};

// user gets a prompt that is stored to a let (HOW TO DECLARE SPEC CHAR???)
let specCharQ = confirm('(1/4) Would you like to have special characters in your password? Example:!"#$%&()*+,-./:;<=>?@[\]^_`{|}~')
console.log(specCharQ);
alert("Ok! Moving to the next question (2/4)!");

// user gets a prompt about numeric char that is stored to a let 
let numCharQ = confirm('(2/4) Would you like to have numeric characters in your password?  (Press OK to include or Cancel to exclude and proceed to the next question');
console.log(numCharQ);
alert("Ok! Moving to the next question (3/4)!");

// user gets a prompt about lower char that is stored to a let 
let lowCharQ= confirm('(3/4) Would you like to have lowercase characters in your password? (Press OK to include or Cancel to exclude and proceed to the next question');
console.log(lowCharQ);
alert("Ok! Moving to the next question (4/4)!");

// user gets a prompt about UPPER char that is stored to a let 
let upCharQ= confirm('(4/4) Would you like to have UPPERCASE characters in your password?  (Press OK to include or Cancel to exclude and proceed to the next question');
console.log(upCharQ);
alert("Ok! please see your password!");


function readyToGenerate(){
//   generating password using the parameters -- testing on just NUMBERS
for (var i=0;i<passwordNum;i++){
retPassword+=numChar.charAt(Math.floor(Math.random()*numChar.length));
}
console.log(retPassword);
return retPassword;

}
    readyToGenerate();

}








