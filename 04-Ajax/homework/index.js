const url = 'http://localhost:5000/amigos';

const showFriend = () => {
    $('#lista').empty();
    $.get(`${url}`, data => {
        console.log(data)

        data.forEach(obj => {
            $('#lista').append(`<li id=${obj.id}>${obj.name} 
                                    <button id=${obj.id} onclick=deleteFriend(${obj.id})>X</button>
                                </li>`)
        })
    })
};
 
$('#boton').click(showFriend);


const searchFriend = () => {
    let id = $('#input').val();
    console.log(id)

    if(id && Number(id) && id > 0 && id < 7){
        $.get(`${url}/${id}`, obj => {
            console.log(obj)
            
            $('#amigo').text(`${obj.name} ${obj.age} ${obj.email}`)
        })
    }
    else{
        // alert('Debes ingresar un número < 0 y > 7')
        $('#amigo').text('Debes ingresar un número < 0 y > 7')
    }
    $('#input').val('')
};

$('#search').click(searchFriend);


const deleteFriend = (idObj) => {
    let id; 
    
    if(idObj && Number(idObj)){
        id = idObj
    }
    else{
        id = $('#inputDelete').val(); 
    }
    

    if(id && Number(id) && id > 0 && id < 7){
        // url, type, success
        $.ajax({
            url: `${url}/${id}`,
            type: 'DELETE',
            success: () => {
                $('#success').text(`Tu amigo con id: ${id}, fue eliminado con éxito`)
                showFriend()
            } 
        })
    }
    else{
        $('#success').text(`Debes ingresar un número entre 1 y 6`)
    }
    $('#inputDelete').val('')
}

$('#delete').click(deleteFriend)