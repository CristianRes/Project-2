$(document).ready(()=>{

        $("submit").click(()=>{
            let userInput = $('#search').val()
            alert(userInput)

        })
        $.ajax({
            url:'https://api.giphy.com/v1/gifs/search?api_key={pCR0lOkznMC9UJnexnpr7moSijsIX80w}'
    })