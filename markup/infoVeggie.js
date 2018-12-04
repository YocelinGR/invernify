let verdura = document.getElementById("verdura");

verdura.addEventListener("click", function(event){
    event.preventDefault();
    swal({
        title: 'Jitomate',
        text: 'Sabías que la temperatura óptima, de desarrollo del cultivo de tomate oscila entre los 20 y 30° C durante el día y entre 10 y 17° C durante la noche. Las temperaturas superiores a los 35° C impactan negativamente sobre el desarrollo de los óvulos fecundados y, por ende, afectan el crecimiento de los frutos. ',
        icon: 'https://github.com/JudithCortes/invernify/issues/1',
        imageWidth: 400,
        imageHeight: 200,
      
      });
});
