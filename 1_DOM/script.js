    // Selectors types
        const div = document.querySelector('div')
        // console.log(div);

        const list =  document.querySelectorAll('li')
        // console.log(list)

        for(const list_item of list){
            // console.log(list_item);
        }

        for(const list_item in list){
            // console.log(list_item);
        }

        list.forEach( (item, indx) => console.log(item, indx))


/*Who has created the DOM standard?
Microsoft
Apple
W3C  //answer W3C (World Wide Web Consortium)

With the HTML Dom, you can use JavaScript to access HTML elements.
True  //answer
False*/