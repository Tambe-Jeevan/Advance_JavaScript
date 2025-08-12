const div = document.createElement('div')
    console.log(div);
    div.className = "main"
    div.id = Math.round(Math.random() * 10 + 1)
    div.setAttribute("title", "generated title")
    div.style.backgroundColor = "green"
    div.style.padding = "20px"
    div.style.borderRadius = "15px"
    // div.innerText = "Hello!!! Everyoe!"
    const addText = document.createTextNode("Hello!!! Jeevan")
    div.appendChild(addText)

    document.body.appendChild(div)