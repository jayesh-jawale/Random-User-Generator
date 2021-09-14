document.getElementById('button').addEventListener('click', getData);

function getData() {
    fetch('https://randomuser.me/api/')
    .then(resp => resp.json())
    .then((data) => {
            var img = document.getElementById('image');
            img.src = data.results[0].picture.large;

            var name = document.getElementById('name');
            name.innerHTML =
            `Name: ${data.results[0].name.title+ " " +data.results[0].name.first+ " " +data.results[0].name.last}`;

            var email = document.getElementById('email');
            email.innerHTML = `Email: ${data.results[0].email}`

            var dob = document.getElementById('dob');
            dob.innerHTML = `DOB: ${data.results[0].dob.date}`
    })
    .catch((err) => {
        console.log(err, 'Unable to fetch data')
    })
}

getData();