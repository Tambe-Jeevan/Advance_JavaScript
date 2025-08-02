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