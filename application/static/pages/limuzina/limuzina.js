function init() {

    const token = JSON.parse(localStorage.getItem('token'));

    fetch('http://localhost:4000/admin/limuzina/getAll', {
        headers: {
            'Authorization': `${token}`
        }
    })
        .then( res => res.json() )
        .then( data => {
            const allLimuzinas = document.getElementById('getAllLimuzinas');

            data.forEach( el => {
                allLimuzinas.innerHTML += `<li>limuzinaId: ${el._id}, marka: ${el.marka}, 
                    model: ${el.model}, snaga: ${el.snaga}, kubikaza: ${el.kubikaza},
                    brojVrata: ${el.brojVrata},cenaPoDanu: ${el.cenaPoDanu}</li>`;
            });
        });

    document.getElementById('addLimuzina').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            marka: document.getElementById('marka').value,
            model: document.getElementById('model').value,
            snaga: document.getElementById('snaga').value,
            kubikaza: document.getElementById('kubikaza').value,
            brojVrata: document.getElementById('brojVrata').value,
            cenaPoDanu: document.getElementById('cenaPoDanu').value
        };

        fetch('http://localhost:4000/admin/limuzina/add', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', Authorization: `${token}`},
            body: JSON.stringify(data),

        })

            .then( res => res.json() )
            .then( el => {

                // document.cookie = `token=${el.token};SameSite=Lax`;
                window.location.href = 'limuzina.html';
            });
    });

    document.getElementById('deleteLimuzina').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            limuzinaId: document.getElementById('limuzinaId').value
        };

        fetch('http://localhost:4000/admin/limuzina/delete', { //+ ID.value, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', Authorization: `${token}`},
            body: JSON.stringify(data),
        })
            .then( res => res.json() )
            .then( el => {
                //document.cookie = `token=${el.token};SameSite=Lax`;
                window.location.href = 'limuzina.html';
            });
    });


    document.getElementById('updateLimuzina').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            marka: document.getElementById('marka').value,
            model: document.getElementById('model').value,
            snaga: document.getElementById('snaga').value,
            kubikaza: document.getElementById('kubikaza').value,
            brojVrata: document.getElementById('brojVrata').value,
            cenaPoDanu: document.getElementById('cenaPoDanu').value
        };

        fetch('http://localhost:4000/admin/limuzina/update', { //+id.value, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', Authorization: `${token}`},
            body: JSON.stringify(data),
        })

            .then( res => res.json() )
            .then( el => {

                //document.cookie = `token=${el.token};SameSite=Lax`;
                window.location.href = 'limuzina.html';
            });
    });


    document.getElementById('getLimuzina').addEventListener('click', e => {
        e.preventDefault();

        const data = {
            limuzinanId: document.getElementById('limuzinaId').value
        };

        fetch('http://localhost:4000/admin/limuzina/getOne', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json'}

        })

            .then( res => res.json() )
            .then( el => {

                //document.cookie = `token=${el.token};SameSite=Lax`;
                window.location.href = 'user.html';
            });
    });

    document.getElementById('logout').addEventListener('click', e => {
        //document.cookie = `token=;SameSite=Lax`;
        window.location.href = 'login.html';
    });
}
