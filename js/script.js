$("#form").submit(function (event){
    event.preventDefault();
    
    const key = "ooPHe1X64XXv8ueN0nXVK5Cnw5nUNKvCKrVu4NZr"
    const date = $("#data").val();

    const url = `https://api.nasa.gov/planetary/apod?api_key=${key}&date=${date}`
   
   $.get(url, function(data){
       const {title, url , explanation, media_type} = data; //desestruturação 
       $("#titulo").text(`Titulo: ${title}`);
       $("#descricao").text(`Descrição: ${explanation}`);

       if(media_type == 'image'){
           $("#video").hide();
           $("#img").show();
           $("#img").attr("src", url )
       } else{
           $("#video").show();
           $("#img").hide();
           $("#img").attr("src", url )
       }
   })
})



