const form = document.getElementById('form');
const subBtn = document.getElementById('sub-btn');
const profileImg = document.getElementById('profile-img');
const name = document.getElementById('name');
const bio = document.getElementById('bio');
const followers = document.getElementById('followers');
const following = document.getElementById('following');
const repos = document.getElementById('repos');
const profileCard = document.querySelector('.profile-card ');


console.log(subBtn)
form.addEventListener('submit', function(e){
    e.preventDefault();
    const input = document.getElementById('input').value;
    let url = `https://api.github.com/users/${input}`;

    const xhr = new XMLHttpRequest();
    xhr.open('GET', url)
    xhr.onload = function(){
        if(xhr.status === 200){
            let data = JSON.parse(xhr.responseText);
            console.log(data);
            profileCard.style.display = 'flex';
            profileImg.src = data.avatar_url;
            name.innerHTML = data.name;
            bio.innerHTML = data.bio;
            followers.innerHTML = data.followers;
            following.innerHTML = data.following;
            repos.innerHTML = data.public_repos;
        }
    }
    xhr.send();
    
});