// add, 
// subtract, 
// multiply
// and divide.

//  Hmm, what about negative numbers - so we also need to be able to change the sign of a number. What else?
//  Well, we're going to allow rather big numbers, so it's a good idea to have a button that easily allows 
//  us to enter an exponent (the number times 10something). We need a decimal point. And we need to be able to
//   clear the display (a CLEAR button), and to clear everything (ALL CLEAR). Let's list out requirements up to now:

// A display area for numbers
// Buttons for 0,1,2, up to 9
// A decimal point button
// A button to change the sign (+/-)
// Clear and all clear (C, AC buttons)
// Function buttons (* / + -)
// A 'calculate' button (The = button)

//o get a negative version of a number in JavaScript you can always you the ~ bitwise operator.
//For example, if you have a = 1000 and you need to convert it to a negative you could do the following:
//a = ~a + 1;

$("button").css({width: "50px", height:"50px"});

