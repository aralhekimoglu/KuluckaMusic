var parameters = location.search.substring(1).split("&");
var songID = parameters[0];


function first(){//sets all button to off initially
    var button1 = document.getElementById("bassButton1");
    button1.value = "OFF";
    button1 = document.getElementById("bassButton2");
    button1.value = "OFF";
    button1 = document.getElementById("drumButton1");
    button1.value = "OFF";
    button1 = document.getElementById("drumButton2");
    button1.value = "OFF";
    button1 = document.getElementById("guitarButton1");
    button1.value = "OFF";
    button1 = document.getElementById("guitarButton2");
    button1.value = "OFF";
    button1 = document.getElementById("keyboardButton1");
    button1.value = "OFF";
    button1 = document.getElementById("keyboardButton2");
    button1.value = "OFF";
    button1 = document.getElementById("othersButton1");
    button1.value = "OFF";
    button1 = document.getElementById("othersButton2");
    button1.value = "OFF";
    button1 = document.getElementById("vocalsButton1");
    button1.value = "OFF";
    button1 = document.getElementById("vocalsButton2");
    button1.value = "OFF";
    }
window.onload = first;


        var x1 = document.getElementById("audio1");
        var x2 = document.getElementById("audio2");
        var x3 = document.getElementById("audio3");
        var x4 = document.getElementById("audio4");
        var x5 = document.getElementById("audio5");
        var x6 = document.getElementById("audio6");
        var bar1 = document.getElementById("volumeBar1");
        var bar2 = document.getElementById("volumeBar2");
        var bar3 = document.getElementById("volumeBar3");
        var bar4 = document.getElementById("volumeBar4");
        var bar5 = document.getElementById("volumeBar5");
        var bar6 = document.getElementById("volumeBar6");
        
   function playAll(){//play all audio files at same time
        x1.play();
        x2.play();
        x3.play();
        x4.play();
        x5.play();
        x6.play();
    }
    function pauseAll(){//pauses all the tracks
        x1.pause();
        x2.pause();
        x3.pause();
        x4.pause();
        x5.pause();
        x6.pause();
    }

    function playSolo(button, id,sliderId){//mute all the tracks except the audio whose id is given
        var but1 = document.getElementById("bassButton2");
        var but2 = document.getElementById("drumButton2");
        var but3 = document.getElementById("guitarButton2");
        var but4 = document.getElementById("keyboardButton2");
        var but5 = document.getElementById("othersButton2");
        var but6 = document.getElementById("vocalsButton2");
        var x7 = document.getElementById(id);
        var bar7 = document.getElementById(sliderId);
        if (button.value == "OFF") {
            x1.muted = true;
            x2.muted = true;
            x3.muted = true;
            x4.muted = true;
            x5.muted = true;
            x6.muted = true;
            x7.muted= false;
            
            but1.value="OFF";
            but2.value="OFF";
            but3.value="OFF";
            but4.value="OFF";
            but5.value="OFF";
            but6.value="OFF";
            
            bar1.value="0";
            bar2.value="0";
            bar3.value="0";
            bar4.value="0";
            bar5.value="0";
            bar6.value="0";
            bar7.value=x7.volume;
            
            button.value = "ON";
        }else {
            x1.muted = false;
            x2.muted = false;
            x3.muted = false;
            x4.muted = false;
            x5.muted = false;
            x6.muted = false;
            but1.value="OFF";
            but2.value="OFF";
            but3.value="OFF";
            but4.value="OFF";
            but5.value="OFF";
            but6.value="OFF";
            bar1.value=x1.volume;
            bar2.value=x2.volume;
            bar3.value=x3.volume;
            bar4.value=x4.volume;
            bar5.value=x5.volume;
            bar6.value=x6.volume;
            bar7.value= x7.volume;
            button.value = "OFF";
        }
    }

    function muteToggle(button,id,sliderId) {//mutes and unmutes given audio file
        var x1 = document.getElementById(id);
        var x2 = document.getElementById(sliderId);
        if (button.value == "OFF") {
            x1.muted= true;
            x2.value = "0";
            button.value = "ON";
        }else {
            x1.muted= false;
            x2.value = x1.volume;
            button.value = "OFF";
        }
    }
    function setVol(range,id){//sets volume of audio
        var audio = document.getElementById( id);
        audio.volume = range.value;
    
    }

    function setVolAll(range){//sets volume of all audio files
        x1.volume = range.value;
        x2.volume = range.value;
        x3.volume = range.value;
        x4.volume = range.value;
        x5.volume = range.value;
        x6.volume = range.value;
        bar1.value = range.value;
        bar2.value = range.value;
        bar3.value = range.value;
        bar4.value = range.value;
        bar5.value = range.value;
        bar6.value = range.value;
        
    }
    function setDuration(range){//sets durlation of audio files according to range input
        var value = (range.value/10000)*x1.duration;
        
        x1.currentTime = value;
        x2.currentTime = value;
        x3.currentTime = value;
        x4.currentTime = value;
        x5.currentTime = value;
        x6.currentTime = value;
    
    }
   
    function enable(id){//enable buttons
         $('#'+id).find("input,button").prop("disabled",false);
         $('#'+id).prop("disabled",false);
    }

    function isEnabledAll(){//checks if all tracks are loaded
        var isAllEnabled = $('#bassbutton1').prop(':disabled') && $('#drumbutton1').prop(':disabled') && $('#guitarbutton1').prop(':disabled') && $('#keyboardbutton1').prop(':disabled') && $('#othersbutton1').prop(':disabled') && $('#vocalsbutton1').prop(':disabled');
        if(!isAllEnabled)
            $("#masterButtons").find("input,button,div").prop("disabled",false);
    
    
    }
    (function(){//shows curlrent time of tracks
        var t1 = document.getElementById('bassTime');
        var t2 = document.getElementById('drumTime');
        var t3 = document.getElementById('guitarTime');
        var t4 = document.getElementById('keyboardTime');
        var t5 = document.getElementById('othersTime');
        var t6 = document.getElementById('vocalsTime');
     
        x1.addEventListener('timeupdate',function(event){
                        t1.innerHTML = 'CurrentTime: '+x1.currentTime+' sec.' ;
                        },false);
        x2.addEventListener('timeupdate',function(event){
                        t2.innerHTML = 'CurrentTime: '+x2.currentTime+' sec.' ;
                        },false);
        x3.addEventListener('timeupdate',function(event){
                         t3.innerHTML = 'CurrentTime: '+x3.currentTime+' sec.' ;
                         },false);
        x4.addEventListener('timeupdate',function(event){
                         t4.innerHTML = 'CurrentTime: '+x4.currentTime+' sec.' ;
                         },false);
        x5.addEventListener('timeupdate',function(event){
                         t5.innerHTML = 'CurrentTime: '+x5.currentTime+' sec.' ;
                         },false);
        x6.addEventListener('timeupdate',function(event){
                         t6.innerHTML = 'CurrentTime: '+x6.currentTime+' sec.' ;
                         },false);
     })();
     
     (function(){//shows currrent time-durlation of tracks not working
      var v1 = document.getElementById('audio1');
      if(Math.floor ( Math.floor(v1.durlation) -Math.floor(v1.durlation/60) * 60) <10)
         var durl = (Math.floor(v1.durlation/60))+ ':0' + (Math.floor ( Math.floor(v1.durlation) -Math.floor(v1.durlation/60) * 60));
      else
        var durl = (Math.floor(v1.durlation/60))+ ':' + (Math.floor ( Math.floor(v1.durlation) -Math.floor(v1.durlation/60) * 60));
      var slider= document.getElementById('durlation');
      v1.addEventListener('timeupdate',function(event){
                          if(Math.floor ( Math.floor(v1.curlrentTime) -Math.floor(v1.curlrentTime/60) * 60) <10){
                            slider.innerHTML = (Math.floor(v1.curlrentTime/60))+ ':0' + (Math.floor ( Math.floor(v1.curlrentTime) -Math.floor(v1.curlrentTime/60) * 60)) +' / '+ durl;
                          }
                          else
                            slider.innerHTML = (Math.floor(v1.curlrentTime/60))+ ':' + (Math.floor ( Math.floor(v1.curlrentTime) -Math.floor(v1.curlrentTime/60) * 60)) +' / '+ durl;
                       },false);
      })();
    
      (function(){//sets the time slider according to curlrent time of audio
       var slider = document.getElementById('durlSlider');
       var v1 = document.getElementById('audio1');
       v1.addEventListener('timeupdate',function(event){
                           slider.value = ( Math.floor(parseFloat(v1.curlrentTime/v1.durlation)*10000));
                           },false);
       })();
    
        $("#audio1").attr("src","musics/allofme.mp3");
        $("#audio2").attr("src","musics/demons.mp3");
        $("#audio3").attr("src","musics/fire.mp3");
        $("#audio4").attr("src","musics/hozier.mp3");
        $("#audio5").attr("src","musics/outloud.mp3");
        $("#audio6").attr("src","musics/passenger.mp3");

    // $.ajax({
    //     url:"http://localhost:3000/channels.json",
    //     success:function(data){
    //         var chan1url,chan2url,chan3url,chan4url,chan5url,chan6url;
    //         var matches = $.grep(data, function(param) { return param.song_id == "8" });//CHANGE 1 TO ID OF SONG PLAYING
    //         chan1url=matches[0].url;
    //         chan2url=matches[1].url;
    //         chan3url=matches[2].url;
    //         chan4url=matches[3].url;
    //         chan5url=matches[4].url;
    //         chan6url=matches[5].url;
    //         $("#audio1").attr("src","musics/"+chan1url);
    //         $("#audio2").attr("src","musics/"+chan2url);
    //         $("#audio3").attr("src","musics/"+chan3url);
    //         $("#audio4").attr("src","musics/"+chan4url);
    //         $("#audio5").attr("src","musics/"+chan5url);
    //         $("#audio6").attr("src","musics/"+chan6url);
    //         }});
