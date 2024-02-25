window.addEventListener('load', () => {
        Swal.fire
        .then((result) => {
            if (result.isConfirmed) {
                document.querySelector('.song').play();
            }
        });
    });
onload = () =>{
        document.body.classList.remove("container");
};
