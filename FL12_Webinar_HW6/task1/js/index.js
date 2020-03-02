// $("#someId").css({"prop" : "value", "prop1" : "value1", ...});

//body: add padding 20px

// id title: make align center, remove top margin

// div after header: add double border and padding 20px

// change color for all h2 and set top margin to 0

// set font size 18px for all .list direct child



// ******************************************************
// :even, :odd, :first, :last, :not(), :empty
// :gt() /* all elements at an index greater then specified */
// :lt() /* all elements at an index less then specified */
// :hidden /* display: none, type="hidden", width & height = 0, ancestor is hidden */
// :visible /* are visible */
// :parent /* are parents to other elements, including text node */
// :contains() /* contain the specified text */
// :has() /* contain at least one element that matches the specified selector */
// ******************************************************

// in #list-1
  // show all hidden and not cloned li

  // hide empty li

// in #list-3
  // for all even li set margin-left -20px

  // for the first li set any different color

  // for all li with index > 5 set color to #ccc

// show ul which is parent

// for li wich has 'em' add red color

// for li which contains text 'Buratino' set font weight to bold




// ******************************************************
// :first-child, :last-child, :only-child, :first-of-type, :last-of-type,
// :only-of-type, :nth-child(), :nth-last-child(), :nth-last-of-type(),
// :nth-of-type()
// ******************************************************

// for b in p which is the only child set font size 36px

// for em in p which is the last child of type set color to green




// ******************************************************
// [name], [name|='value'], [name*='value'], [name~='value'],
// [name$='value'], [name^='value']
// [name!='value'] /* neither such attribute nor specified value */
// ******************************************************

// set width 80px for input with attribute name ended by 'age'
// set width 120px for input with attribute name started by 'my'
// console.log checked checkbox
// show all images with a cat


// ******************************************************
// is(), not(), has()
// eq(), first(), last()
// find(), parent(), parents(), closest()
// children(), prev(), next(), siblings()
// ******************************************************
// for .mbox with index 3 set padding-top 50px
// for first div wraper for img set float left and border red
 
//--------------SOLUTION-------------------------

$('body').css({'padding': '20px'}); //body: add padding 20px

$('#title').css({'text-align': 'center', 'margin-top': '0'}); // id title: make align center, remove top margin
    
$('#header').next().css({'border': 'double red', 'padding': '20px'}) //div after header: add double border and padding 20px

$('h2').css({'color': '#0fbde9', 'margin-top': '0'}); // change color for all h2 and set top margin to 0

$('.list').children().css({'font-size': '18px'}) //set font size 18px for all .list direct child

$('#list-1 :hidden').not('.cloned').show() // // in #list-1 show all hidden and not cloned li

$('#list-1 :empty').hide() // in #list-1  hide empty li

$('#list-3 li:odd').css({'margin-left': '-20px'}); //in #list-3  for all even li set margin-left -20px

$('#list-3 li:first-child').css({'color': 'blue'}) //in #list-3 for the first li set any different color

$('#list-3 li:nth-child(n+6)').css({'color': '#ccc'}) // in #list-3 for all li with index > 5 set color to #ccc

$('ul:parent').css({'border': '1px solid green'}) // show ul which is parent

$('li').has('em').css({'color': 'red'}); // for li wich has 'em' add red color

$( "li:contains('Buratino')").css({'font-weight': 'bold'}); // for li which contains text 'Buratino' set font weight to bold

$('p b:only-child').css({'font-size': '36px'}); // for b in p which is the only child set font size 36px

$('p em:last-of-type').css({'color': 'red'}); // for em in p which is the last child of type set color to green

$('input[name$="age"]').css({'width': '80px'}); // set width 80px for input with attribute name ended by 'age'

$('input[name^="age"]').css({'width': '120px'}); // set width 120px for input with attribute name started by 'my'

console.log($('input:checked')); // console.log checked checkbox

$('img[src*="cat"]').show(); // show all images with a cat

$('.mbox img').eq(2).css({'padding-top': '50px'}); // for .mbox with index 3 set padding-top 50px

$('.mbox div:first-child img').css({'float': 'left', 'border': '4px solid red'}) // for first div wraper for img set float left and border red


