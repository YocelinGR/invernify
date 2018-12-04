let verdura = document.getElementById("verdura");

verdura.addEventListener("click", function(event){
    event.preventDefault();
    swal({
        title: 'Calabaza',
        text: 'Sabías que el peso comercial varia de 1.2 a 1.5 kg, pero puede llegar a pesar hasta 3.5 kg. El ciclo del cultivo varía de 90 a 120 días. El corte del fruto se lleva a cabo cuando está completamente maduro .',
        icon: 'https://github.com/JudithCortes/invernify/issues/1',
        imageWidth: 400,
        imageHeight: 200,
      
      });
});
