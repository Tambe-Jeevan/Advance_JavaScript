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