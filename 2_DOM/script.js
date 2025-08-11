const parent = document.querySelector('.parent')
    console.log(parent);
    console.log(parent.children);
    console.log(parent.children[1].innerHTML);

    for (let i = 0; i < parent.children.length; i++) {
        //  console.log(parent.children[i]);
    }

    /*for(const child of parent){
        console.log(parent.children[child]);
    } */

    parent.children[0].style.color = "orange"
    // console.log(parent.firstElementChild);
    // console.log(parent.lastElementChild);

    const dayOne = document.querySelector('.day')
    // console.log(dayOne);  //div.day
    // console.log(dayOne.parentElement);  
    // <div class="parent">
    //     <!-- this is a comment -->
    //     <div class="day">Monday</div>
    //     <div class="day">Tuesday</div>
    //     <div class="day">Wednesday</div>
    //     <div class="day">Thursday</div>
    // </div> 

    console.log(dayOne.nextElementSibling);  // <div class="day">Tuesday</div>

    // console.log("NODES: ", parent.childNodes);
    // NODES:  NodeList(11) [text, comment, text, div.day, text, div.day, text, div.day, text, div.day, text]


/*What is a legal HTML DOM method for accessing HTML elements?
fetchId
getElementById() //answer
element()

What is a legal HTML DOM property for changing the value of an HTML element?
content
tagValue
innerHTML  //answer

What is a NOT a legal HTML DOM document method?
getElementsByClassName()
getElementsByTagName()
getElementsByAttributeName()  //answer false


What is a correct syntax for returning a collection of all <a> elements?
document.links
document.anchors  //answer
document.hrefs


What is a legal syntax for returning all the <p> elements of a document?
document.getElementsByTagName('p') //answer
document.paragraphs
document.getElements('p')

What is a legal syntax for returning all the <p> elements with the class name 'menu-item'?
document.querySelectorAll('p.menu-item'); //answer
document.getParagraphsByClassName('menu-item');
document.getAll('p', 'menu-item');

Use the getElementsByTagName method to find the first <p> element, and change its text to "Hello".
<p id="demo"></p>
<script>
document.getElementsByTagName("p")[0].innerHTML = "Hello";
</script>

Change the text of the first element that has the class name "test".
<p class="test"></p>
<p class="test"></p>
<script>
document.getElementsByClassName("test")[0].innerHTML
 = "Hello";
</script>

Use HTML DOM to change the value of the image's src attribute.
<img id="image" src="smiley.gif">
<script>
document.getElementById("image").src= "pic_mountain.jpg";
</script>

What is a legal syntax for returning all the form elements of a document?
document.forms;
document.all('form');
document.getForms();
*/