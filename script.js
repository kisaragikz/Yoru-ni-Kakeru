let play = document.querySelector('#play');
      let recent_volume = document.querySelector('#volume');
      let slider = document.querySelector('#duration');
      let show_duration = document.querySelector('#show_duration');
      let auto_play = document.querySelector('#auto');
      let volumeicon = document.querySelector("#volumeicon");

      let timer;
      let autoplay=0;

      let index_no=0;
      let playingsong=false;

      let track = document.createElement('audio');
      let sound=false;

      let song = [
			{
			name: "Yoru ni kakeru",
         path: "https://cdn.discordapp.com/attachments/468800874924474369/943833817888731156/yoruni.mp4"
         }
      ];
      function load_track(index_no){
			track.src = song[index_no].path;
         track.load();
         timer = setInterval(range_slider, 1000);
      }
      load_track(index_no);

      function change_sound(){
        if (sound==true){
          mutesound();
        }else{
          playsound();
          }
      }
      function playsound(){
			track.volume = 0/100;
      	recent_volume.value = 0;
        sound=true;
        volumeicon.innerHTML = '<i class="fa fa-volume-off" style="color:black;" aria-hidden="true"></i>'
      }
      function mutesound(){
			track.volume = 50/100;
        	recent_volume.value = 50;
      	sound=false;
        volumeicon.innerHTML = '<i class="fa fa-volume-up" style="color:black;" aria-hidden="true"></i>'
      }
      function justplay(){
			if (playingsong==false){
				playsong();
         }else{
				pausesong();
         }
      }
      function playsong(){
			track.play();
        playingsong=true;
        play.innerHTML = '<i class="fa fa-pause" style="font-size:20px;color:black" aria-hidden="true"><\i>';
      }
      function pausesong(){
			track.pause();
        playingsong=false;
        play.innerHTML = '<i class="fa fa-play" style="font-size:20px;color:black" aria-hidden="true"><\i>';
      }
		function volume_change(){
	    track.volume = recent_volume.value / 100;
			}
      function duration_change(){
			slider_position = track.duration * (slider.value / 100);
        track.currentTime = slider_position;
      }
      function range_slider(){
			let position = 0;
        if (!isNaN(track.duration))
          position = track.currentTime * (100 / track.duration);
        slider.value = position;
      }