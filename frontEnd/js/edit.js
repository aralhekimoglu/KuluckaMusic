var parameters = location.search.substring(1).split("&");
var songID = parameters[0];

function getSongInfo(IDsong)
{
    $.ajax({
        url:"http://localhost:3000/songs.json",
        success:function(data){
            var singer,songGenre,songName;
            var arrSong= $.grep(data,function(param){return param.id==IDsong});
                songName=arrSong[0].song_name;
                singer=arrSong[0].singer_name;
                songGenre=arrSong[0].genre;
                $("#nameinput").attr("value",songName);  
                $("#singerinput").attr("value",singer);   
                $("#genreinput").val(songGenre);
                $("#idinput").val(IDsong);}
    });
    $.ajax({
        url:"http://localhost:3000/channels.json",
        success:function(data){
            var chan1u,chan2u,chan3u,chan4u,chan5u,chan6u;
            var matches = $.grep(data, function(param) { return param.song_id == IDsong });
            chan1u=matches[0].url;
            chan1id=matches[0].id;
            chan2u=matches[1].url;
            chan2id=matches[1].id;
            chan3u=matches[2].url;
            chan3id=matches[2].id;
            chan4u=matches[3].url;
            chan4id=matches[3].id;
            chan5u=matches[4].url;
            chan5id=matches[4].id;
            chan6u=matches[5].url;
            chan6id=matches[5].id;
            $("#ch1Url").attr("value",chan1u);
            $("#ch2Url").attr("value",chan2u);
            $("#ch3Url").attr("value",chan3u);
            $("#ch4Url").attr("value",chan4u);
            $("#ch5Url").attr("value",chan5u);
            $("#ch6Url").attr("value",chan6u);
            $("#ch1Id").attr("value",chan1id);
            $("#ch2Id").attr("value",chan2id);
            $("#ch3Id").attr("value",chan3id);
            $("#ch4Id").attr("value",chan4id);
            $("#ch5Id").attr("value",chan5id);
            $("#ch6Id").attr("value",chan6id);}    
    });
}
getSongInfo(songID);

$(document).ready(function(){

    $("#deleteButton").on('click', function(){
        $.ajax({
            type : "POST", // type of action POST || GET
            url: "http://localhost:3000/songs/destroy",// url where to submit the request
            dataType : 'json', // data type
            data : $("#editSongForm :input").serialize(), // post data || get data
            success : function(data){
                console.log(data);
                // var delSong = new Object();
                // delSong.id = data.idinput;
                },
            error : function(result) {
                console.log(result);}, 
        })
    });    
    

    $("#editSongButton").on('click', function(){
        $.ajax({
            type : "POST", // type of action POST || GET
            url: "http://localhost:3000/songs/update",// url where to submit the request
            dataType : 'json', // data type
            data : $("#editSongForm :input").serialize(), // post data || get data
            success : function(data) {
                var editSong = new Object();
                editSong.id = data.idinput;
                editSong.song_name = data.nameinput;
                editSong.singer_name = data.singerinput;
                editSong.genre = data.genreinput;
                },
            error : function(result) {
                console.log(result);}, 
        })
    });    
    
    $("#editch1Button").on('click', function(){
        $.ajax({
            type : "POST", // type of action POST || GET
            url: "http://localhost:3000/channels/update",// url where to submit the request
            dataType : 'json', // data type
            data : $("#ch1form :input").serialize(), // post data || get data
            success : function(data) {
                var editCh1 = new Object();
                editCh1.id= data.ch1Id;
                editCh1.song_id = songID;
                editCh1.url = data.ch1Url;
                },
            error : function(result) {
                console.log(result);}, 
        })
    });    
    
    
    $("#editch2Button").on('click', function(){    
        $.ajax({
            type : "POST", // type of action POST || GET
            url: "http://localhost:3000/channels/update",// url where to submit the request
            dataType : 'json', // data type
            data : $("#ch2form :input").serialize(), // post data || get data
            success : function(data) {
                var editCh2 = new Object();
                editCh2.id= data.ch2Id;
                editCh2.song_id = songID;
                editCh2.url = data.ch2Url;
                },
            error : function(result) {
                console.log(result);}, 
        })
    });    
    
    
    $("#editch3Button").on('click', function(){
        $.ajax({
            type : "POST", // type of action POST || GET
            url: "http://localhost:3000/channels/update",// url where to submit the request
            dataType : 'json', // data type
            data : $("#ch3form :input").serialize(), // post data || get data
            success : function(data) {
                var editCh3 = new Object();
                editCh3.id= data.ch3Id;
                editCh3.song_id = songID;
                editCh3.url = data.ch3Url;
                },
            error : function(result) {
                console.log(result);}, 
        })
    });    
    
    
    $("#editch4Button").on('click', function(){
        $.ajax({
            type : "POST", // type of action POST || GET
            url: "http://localhost:3000/channels/update",// url where to submit the request
            dataType : 'json', // data type
            data : $("#ch4form :input").serialize(), // post data || get data
            success : function(data) {
                var editCh4 = new Object();
                editCh4.id= data.ch4Id;
                editCh4.song_id = songID;
                editCh4.url = data.ch4Url;
                },
            error : function(result) {
                console.log(result);}, 
        })
    });    
    
    
    $("#editch5Button").on('click', function(){
        $.ajax({
            type : "POST", // type of action POST || GET
            url: "http://localhost:3000/channels/update",// url where to submit the request
            dataType : 'json', // data type
            data : $("#ch5form :input").serialize(), // post data || get data
            success : function(data) {
                var editCh5 = new Object();
                editCh5.id= data.ch5Id;
                editCh5.song_id = songID;
                editCh5.url = data.ch5Url;
                },
            error : function(result) {
                console.log(result);}, 
        })
    });    
    
    
    $("#editch6Button").on('click', function(){
        $.ajax({
            type : "POST", // type of action POST || GET
            url: "http://localhost:3000/channels/update",// url where to submit the request
            dataType : 'json', // data type
            data : $("#ch6form :input").serialize(), // post data || get data
            success : function(data) {
                var editCh6 = new Object();
                editCh6.id= data.ch6Id;
                editCh6.song_id = songID;
                editCh6.url = data.ch6Url;
                },
            error : function(result) {
                console.log(result);}, 
        })
    });    
    

});