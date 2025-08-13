const xhr = new XMLHttpRequest();
        xhr.open('GET', 'https://api.github.com/users/Tambe-Jeevan');
        // console.log(xhr.readyState)
        xhr.onreadystatechange = function(){
            // console.log(xhr.readyState)
            if(xhr.readyState === 4){
                const data = JSON.parse(this.responseText);
                // console.log(typeof(data));
                // console.log(data);
              

                const profilePhoto = document.querySelector('img');
                const name = document.getElementById('name');
                const followers = document.getElementById('followers');
                const following = document.getElementById('following');
                
                profilePhoto.setAttribute('src', `${data.avatar_url}`)
                // console.log(profilePhoto);

                name.innerHTML = `Name: ${data.login}`;
                followers.innerHTML = `GitHub Followers: ${data.followers}`
                following.innerHTML = `GitHub Following: ${data.following}`
            }
        }
        xhr.send();