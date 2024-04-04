
const input = document.getElementById("input")

function reverseString(str){
    // split(delim): takes the string and splits based off the delimiter given. In this case, we are splitting on an empyth string so it will retrun an array with each character of the string as the elements.
    // reverse(): reverses an array in the opposite directon.
    // join(delim): joins the array back into a string that we can now use to compare. 
    return str.split("").reverse().join("")
}

function check() {
    const value = input.value
    const rev = reverseString(value)

    if (value === rev) {
        alert(rev + " is a palindrome")
    }else{
        alert(value + " is a not palindrome")
    }

    input.value = ""
        
}