const form = document.getElementById("myForm");

const expText = /^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/;
const expEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/;


const processData = (e) =>{
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const term = document.getElementById('term').checked;

    let data = {
        name: name,
        email: email,
        message: message,
        term: term
    }

    validation(data);
}

form.addEventListener('submit', processData);

const validation = (data) =>{
    console.log(data.name);
    console.log(expText.test(data.name));



    // nombre del formulario
    if (data.name == '' || data.name == undefined || !(expText.test(data.name))) {
        // alert('Ingrese un nombre valido');
        Swal.fire(
            'Ingrese un nombre valido!',
            'no escriba numeros',
            'error'
        )
 
    }
    // correo del formulario
    else if (data.email == '' || data.email == undefined || !(expEmail.test(data.email))) {
        // alert('Ingrese un correo valido');
        Swal.fire({
            title: '<strong>Correo <u>ejemplo</u></strong>',
            icon: 'info',
            html:
                'Puedes caracteres como: <b> @,-,_ Ó</b>, ' +
                '<a href="//sweetalert2.github.io">MAYUSCULAS y minusculas</a> ' +
                'Ejemplo: Don_juan@example.com',
            showCloseButton: true,
            showCancelButton: true,
            focusConfirm: false,
            confirmButtonText:
                '<i class="fa fa-thumbs-up"></i> Intentar de nuevo!',
            confirmButtonAriaLabel: 'Thumbs up, great!',
            
        })


    }
    // mensaje de el formulario
    else if (data.message == '' || data.message == undefined) {
        // alert('Ingrese el mensaje');
        // Swal.fire({
        //     title: 'ingrese el mensaje',
        //     imageUrl: 'https://img.global.news.samsung.com/latin/wp-content/uploads/2020/05/02_search-for-sticker_1_1.gif',
        //     imageWidth: 1000,
        //     imageHeight: 425
        // })

        Swal.fire({
            title: 'Escriba el mensaje',
            text: '¡No deje campo vacio!',
            imageUrl: 'https://img.global.news.samsung.com/latin/wp-content/uploads/2020/05/02_search-for-sticker_1_1.gif',
            imageWidth: 600,
            imageHeight: 300,
            imageAlt: 'Custom image',
        })
    }

    // terminos y condiciones del formulario
    else if (!data.term) {
        // alert('Acepte los terminos y condiciones');
        Swal.fire({
            title: 'Acepte los terminos y condiciones',
            width: 600,
            padding: '3em',
            color: '#716add',
            background: '#fff url(/images/trees.png)',
            backdrop: `
            rgba(0,0,123,0.4)
            url("https://thumbs.gfycat.com/EasygoingWastefulIridescentshark-size_restricted.gif")
            left top
            no-repeat 
            
        `
        })
    }
    else {
        // alert("Información enviada");
        Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Informacion enviada',
            showConfirmButton: false,
            timer: 1950
        })
    }
}
// https://media.tenor.com/pXVHa4fLK6EAAAAM/check.gif

// https://gfycat.com/naivegracefulcavy