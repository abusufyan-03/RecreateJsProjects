const form = document.getElementById('form');
let input;
const subBtn = document.getElementById('sub-btn');
const profileImg = document.getElementById('profile-img');
const name = document.getElementById('name');
const bio = document.getElementById('bio');
const followers = document.getElementById('followers');
const following = document.getElementById('following');
const repos = document.getElementById('repos');
const profileCard = document.querySelector('.profile-card');
const loader = document.getElementById('spin-loading');
const errorMessage = document.querySelector('.error-message');
errorMessage.style.display = 'none';

form.addEventListener('submit', function(e){
    e.preventDefault();
    input = document.getElementById('input').value;
    let url = `https://api.github.com/users/${input}`;

    if(input.trim() === '') {
        errorMessage.innerHTML = `Please Enter a Username`;
        errorMessage.style.display = 'block';
        return;
    }
    const xhr = new XMLHttpRequest();
    xhr.open('GET', url);
    xhr.onreadystatechange = function(){
        errorMessage.style.display = 'none';
        if(xhr.readyState === 4) {
            if(xhr.status === 200){
            let data = JSON.parse(xhr.responseText);
            console.log(data);
            errorMessage.style.display = 'none';
            loader.style.display = 'none';
            profileCard.style.display = 'flex';
            profileImg.src = data.avatar_url;
            name.innerHTML = data.name;
            bio.innerHTML = data.bio;
            followers.innerHTML = data.followers;
            following.innerHTML = data.following;
            repos.innerHTML = data.public_repos;
        } else if(xhr.status === 404){
            loader.style.display = 'none';
            profileCard.style.display = 'none';
            errorMessage.innerHTML = `Please Enter a valid Username`;
            errorMessage.style.display = 'block'

        }
        }
    }
    loader.style.display = 'flex';
    xhr.send();
    
});