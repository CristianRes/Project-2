
$(document).ready(()=>{

    $("#submit").click(()=>{
        let userInput = $("#search").val()
        alert(userInput)
    })
        $.ajax({
            url:"api.giphy.com/v1/gifs/search/?apikey=pCR0lOkznMC9UJnexnpr7moSijsIX80w&"
    })
})