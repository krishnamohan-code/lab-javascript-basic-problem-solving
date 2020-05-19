// Important Note - No Built-in functions to be used
// Progression 1: Names and Input

// 1.1 Create a variable `ProGrad-1` with the driver's name.
// 1.2 Print `"The driver's name is XXXX"`.
// 1.3 Create a variable `ProGrad-2` with the navigator's name.
// 1.4 Print `"The navigator's name is YYYY"`.
var ProGrad_1=prompt("Please Enter driver's name ");
console.log("The driver's name is "+ProGrad_1);
var ProGrad_2= prompt("Enter Navitagor's name ");
console.log("The Navigator's name is "+ProGrad_2);
// Progression 2: Control Statements - 1
// 2.1. Depending on which name is longer, print:
// - The driver has the longest name, it has XX characters. or
// - It seems that the navigator has the longest name, it has XX characters. or
// - Wow, you both have equally long names, XX characters!.
len1=ProGrad_1.length;
len2=ProGrad_2.length;
if(len1>len2){
    console.log("The driver has longtest name it has "+len1+" Characters");
     }
    else if(len1==len2)
    {
        console.log("Wow, you both have equally long name,"+ len2+" characters!.")
    }
    else 
    console.log("The Navigator  has longtest name it has "+len2+" Characters")

// 2.2. Check if the string contains vowels or not.
// - If it contains vowels, print the number of name, and also print the vowel letters along with the vowel characters. or
// - print no vowels
 /*************************************To find the vowels letters******************** */
 var i; //KrishnaMohan
 for(i=0;i<ProGrad_1.length;i++)
 {
     if(ProGrad_1[i].toLowerCase()=="a"||ProGrad_1[i].toLowerCase()=="i"||ProGrad_1[i].toLowerCase()=="e"||ProGrad_1[i].toLowerCase()=="o"||ProGrad_1[i].toLowerCase()=="u")
       {
        console.log("The vowel letter is "+ProGrad_1[i]);
       }
 }
 for(i=0;i<ProGrad_2.length;i++)
 {
     if(ProGrad_2[i].toLowerCase()=="a"||ProGrad_2[i].toLowerCase()=="i"||ProGrad_2[i].toLowerCase()=="e"||ProGrad_2[i].toLowerCase()=="o"||ProGrad_2[i].toLowerCase()=="u")
     {
         console.log("The vowel letter is "+ProGrad_2[i]);
     }
 }

// 2.3. Check if the string contains uppercase and lowercase characters Xx
// - Print the number of upper case characters
// - Print the number of lower case characters
count= 0;flag = 0;
for (let i = 0; i < ProGrad_1.length; i++) {
    char = ProGrad_1.charAt(i);
    if (char == char.toUpperCase()) {
        count += 1
    }
    else
        if (char == char.toLowerCase()) {
            flag += 1
        }
}
console.log("the number of upper case characters "+count);
console.log("the number of lower case characters "+flag);

// Progression 3: Control Statements - 2
// 3.1 Print all the characters of the driver's name, separated by a space and in capitals i.e. "ProGrad"
var st=ProGrad_1.toUpperCase()
for(var i=0;i<st.length;i++)
{ 
   console.log(st[i]+" ");
    
}

// 3.2 Print all the characters of the navigator's name, in reverse order. i.e. "darGorP"
revstr=""
for(var i=ProGrad_2.length-1;i>=0;i--){
    revstr+=ProGrad_2[i]
}
console.log("The reverse order of navigator name is "+revstr);

// 3.3 Merge both the characters such that driver is followed by Navigator like "ProGrad FACEPrep"
// - Now bring the FACEPrep to the start and send ProGrad to the back like "FACEPrep ProGrad"
st=ProGrad_1.concat(ProGrad_2)
st=st.slice(" ")
console.log(st)

// 3.3 Depending on the lexicographic order of the strings, print:
// - The driver's name goes first.
// - Yo, the navigator goes first definitely.
// - What?! You both have the same name?

// Bonus Time!
// Bonus 1:
// Go to lorem ipsum generator and:
// Generate 3 paragraphs. Store the text in a variable type of string.
// Make your program count the number of words in the string.
// Make your program count the number of times the Latin word et appears.
count=0
var string=prompt("Enter the string")
for (x of string){
    if(x==" "){
        count+=1
    }
    
}
count+=1
console.log("No of words in the string is "+count);
// Bonus 2:
// Create a new variable phraseToCheck and have it contain some string value. Write a code that will check if the value we assigned to this variable is a Palindrome. Here are some examples of palindromes:

// "A man, a plan, a canal, Panama!"
// "Amor, Roma"
// "race car"
// "stack cats"
// "step on no pets"
// "taco cat"
// "put it up"
// "Was it a car or a cat I saw?" and "No 'x' in Nixon".

// Hint: If you use Google to help you to find solution to this iteration, you might run into some solutions that use advanced string or array methods (such as join(), reverse(), etc.). However, try to apply the knowledge you currently have since you can build pretty nice solution with just using for loop, if-else statements with some break and continue... Just sayin' 



var array=[]
input=prompt("Enter the string")
var st1=input.toUpperCase();
for(x in st1)
{
     array.push(i)      
}
console.log(array)
if (array[i]==",")
{
    console.log(" ");
}
else{
    console.log(array[i]);
}
