const agregar = () => {
    document.getElementById('agregar').addEventListener('click', () => {
        const form = document.forms[0];

        if (form['nombre'].value != '' && form['apellido'].value != '') {
            const li = document.createElement('li');
            li.appendChild(document.createTextNode(form['nombre'].value + " " + form['apellido'].value))
            document.getElementById('lista').appendChild(li);
            form['nombre'].value = '';
            form['apellido'].value = '';
        }
    })
}

agregar();