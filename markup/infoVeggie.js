$('[data-veggie-modal]').on("click", function(event){
    event.preventDefault();
    swal({
        title: 'Jitomate',
        text: 'Sabías que la temperatura óptima, de desarrollo del cultivo de tomate oscila entre los 20 y 30° C durante el día y entre 10 y 17° C durante la noche. Las temperaturas superiores a los 35° C impactan negativamente sobre el desarrollo de los óvulos fecundados y, por ende, afectan el crecimiento de los frutos. ',
        icon: 'https://user-images.githubusercontent.com/39841876/49450316-59e8ed00-f7a2-11e8-9537-10c8236009fb.png',
        imageWidth: 50,
        imageHeight: 50,
      
      });
});

let pepino = document.getElementById("cucumber");

pepino.addEventListener("click", function(event){
    event.preventDefault();
    swal({
        title: 'Pepino',
        text: 'Sabías que La planta del pepino pertenece a la familia botánica de las Cucurbitáceas, igual que la sandía, el melón, el calabacín o zucchini y la calabaza o zapallo. Esta planta anual trepadora parece ser originaria de Asia. Vamos a conocer algunos datos importantes que debemos tener en cuenta a la hora de cultivar pepino en el huerto. ',
        icon: 'https://user-images.githubusercontent.com/39841876/49450307-58b7c000-f7a2-11e8-9f35-f4ceb3dbf06a.png',
        imageWidth: 50,
        imageHeight: 50,     
      });
});
