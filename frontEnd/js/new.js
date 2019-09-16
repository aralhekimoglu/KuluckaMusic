$(document).ready(function(){
    // click on button submit
    $("#submitButton").on('click', function(){
        
        $.ajax({
            type : "POST", // type of action POST || GET
            url: "http://localhost:3000/songs/create",// url where to submit the request
            dataType : 'json', // data type
            data : $("#newForm").serialize(), // post data || get data
            success : function(data) {
                var newSong = new Object();
                newSong.song_name = data.sn;
                newSong.singer_name = data.ss;
                newSong.genre = data.sg;
                newSong.channels[0].url=data.u1;
                newSong.channels[1].url=data.u2;
                newSong.channels[2].url=data.u3;
                newSong.channels[3].url=data.u4;
                newSong.channels[4].url=data.u5;
                newSong.channels[5].url=data.u6;
                },
            error : function(result) {
                console.log(result);
            }, 
        })
    });
});