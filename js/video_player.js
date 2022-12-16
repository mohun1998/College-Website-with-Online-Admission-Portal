// Declaring constants for each video player element
const video = document.getElementById('video');
const videoControls = document.getElementById('video-controls');
const videoControlsContainer = document.getElementById('video-controls-container');
const videoControlsBG = document.getElementById('video_controls_bg');
const videoPlayer = document.getElementById('video-player');
const playButton = document.getElementById('play');
const playIcon = document.getElementById('play_icon');
const pauseIcon = document.getElementById('pause_icon');
const playTooltip = document.getElementById('play_tooltip');
const timeElapsed = document.getElementById('time-elapsed');
const duration = document.getElementById('duration');
const progressBar = document.getElementById('progress-bar');
const progressBarCont = document.getElementById('progress_bar_container');
const seek = document.getElementById('seek');
const seekTooltip = document.getElementById('seek-tooltip');
const volumeButton = document.getElementById('volume-button');
const volumeIcons = document.querySelectorAll('.volume-button use');
const volumeMuteIcon = document.getElementById('vslash');
const volumeMuteIcon2 = document.getElementById('vslash2');
const volumeFull = document.getElementById('volume_full');
const volumeHalf = document.getElementById('volume_half');
const volumeDown = document.getElementById('volume_down');
const volumeTooltip = document.getElementById('vol_tooltip');
const playbackAnimation = document.getElementById('playback-animation');
const playbackPlay = document.getElementById('play_icon_large');
const playbackPause = document.getElementById('pause_icon_large');
const fullscreenButton = document.getElementById('fullscreen-button');
const fullscreenIcon = document.getElementById('full-screen');
const fullscreenTooltip = document.getElementById('fullscreen_tooltip');
const fullscreenExitIcon = document.getElementById('full-screen-exit');
const videoContainer = document.getElementById('video-container');
const pipButton = document.getElementById('pip-button');

var timedelay = 1;

const videoWorks = !!document.createElement('video').canPlayType;
if (videoWorks) {
  video.controls = false;
  videoControls.classList.remove('hidden');
}

// togglePlay toggles the playback state of the video.
// If the video playback is paused or ended, the video is played
// otherwise, the video is paused
function togglePlay() {
  if (video.paused || video.ended) {
    video.play();
    playbackPlay.classList.remove('hidden');
    playbackPause.classList.add('hidden');
  } else {
    video.pause();
    playbackPlay.classList.add('hidden');
    playbackPause.classList.remove('hidden');
  }
}

// updatePlayButton updates the playback icon and tooltip
// depending on the playback state
function updatePlayButton() {
  if (video.paused) {
    playTooltip.innerHTML = "Play&nbsp(P)";
    playIcon.classList.remove('hidden');
    pauseIcon.classList.add('hidden');
    playButton.classList.remove('play_pause_button');
    playButton.classList.add('play_pause_button2');
  } else {
    playTooltip.innerHTML = "Pause&nbsp(P)";
    pauseIcon.classList.remove('hidden');
    playIcon.classList.add('hidden');
    playButton.classList.remove('play_pause_button2');
    playButton.classList.add('play_pause_button');
  }
}

// formatTime takes a time length in seconds and returns the time in
// minutes and seconds
function formatTime(timeInSeconds) {
  const result = new Date(timeInSeconds * 1000).toISOString().substr(11, 8);

  return {
    minutes: result.substr(3, 2),
    seconds: result.substr(6, 2),
  };
}

// initializeVideo sets the video duration, and maximum value of the
// progressBar
function initializeVideo() {
  const videoDuration = Math.round(video.duration);
  seek.setAttribute('max', videoDuration);
  progressBar.setAttribute('max', videoDuration);
  const time = formatTime(videoDuration);
  duration.innerText = `${time.minutes}:${time.seconds}`;
  duration.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`);
}

// updateTimeElapsed indicates how far through the video
// the current playback is by updating the timeElapsed element
function updateTimeElapsed() {
  const time = formatTime(Math.round(video.currentTime));
  timeElapsed.innerText = `${time.minutes}:${time.seconds}`;
  timeElapsed.setAttribute('datetime', `${time.minutes}m ${time.seconds}s`);
}

// updateProgress indicates how far through the video
// the current playback is by updating the progress bar
function updateProgress() {
  seek.value = Math.floor(video.currentTime);
  progressBar.value = Math.floor(video.currentTime);
}

// updateSeekTooltip uses the position of the mouse on the progress bar to
// roughly work out what point in the video the user will skip to if
// the progress bar is clicked at that point
function updateSeekTooltip(event) {
  const skipTo = Math.round(
    (event.offsetX / event.target.clientWidth) *
      parseInt(event.target.getAttribute('max'), 10)
  );
  seek.setAttribute('data-seek', skipTo);
  const t = formatTime(skipTo);
  seekTooltip.textContent = `${t.minutes}:${t.seconds}`;
  const rect = video.getBoundingClientRect();
  seekTooltip.style.left = `${event.pageX - rect.left}px`;
}

// skipAhead jumps to a different point in the video when the progress bar
// is clicked
function skipAhead(event) {
  const skipTo = event.target.dataset.seek
    ? event.target.dataset.seek
    : event.target.value;
  video.currentTime = skipTo;
  progressBar.value = skipTo;
  seek.value = skipTo;
}

// updateVolume updates the video's volume
// and disables the muted state if active
function updateVolume() {
  if (video.muted) {
    video.muted = false;
  }

  video.volume = volume.value;
}

// updateVolumeIcon updates the volume icon so that it correctly reflects
// the volume of the video
function updateVolumeIcon() {

  if (video.muted || video.volume === 0) {
    volumeMuteIcon2.classList.add('hidden');
    volumeMuteIcon.classList.remove('hidden');
    volumeDown.classList.remove('hidden');
    volumeHalf.classList.add('hidden');
    volumeFull.classList.add('hidden');
    volumeTooltip.innerHTML = "Unmute&nbsp(M)";
  } else if (video.volume > 0 && video.volume <= 0.3) {
    volumeDown.classList.remove('hidden');
    volumeHalf.classList.add('hidden');
    volumeFull.classList.add('hidden');
    volumeMuteIcon2.classList.remove('hidden');
    volumeMuteIcon.classList.add('hidden');
    volumeTooltip.innerHTML = "Mute&nbsp(M)";
  } else if (video.volume > 0 && video.volume <= 0.5) {
    volumeDown.classList.add('hidden');
    volumeHalf.classList.remove('hidden');
    volumeFull.classList.add('hidden');
    volumeMuteIcon2.classList.remove('hidden');
    volumeMuteIcon.classList.add('hidden');
    volumeTooltip.innerHTML = "Mute&nbsp(M)";
  } else if (video.volume > 0.5 && video.volume < 1) {
    volumeDown.classList.add('hidden');
    volumeHalf.classList.add('hidden');
    volumeFull.classList.remove('hidden');
    volumeMuteIcon2.classList.remove('hidden');
    volumeMuteIcon.classList.add('hidden');
    volumeTooltip.innerHTML = "Mute&nbsp(M)";
  }
}

// toggleMute mutes or unmutes the video when executed
// When the video is unmuted, the volume is returned to the value
// it was set to before the video was muted
function toggleMute() {
  video.muted = !video.muted;

  if (video.muted) {
    volume.value = 0;
  } else {
    volume.value = volume.dataset.volume;
  }
}

// animatePlayback displays an animation when
// the video is played or paused
function animatePlayback() {
  playbackAnimation.animate(
    [
      {
        opacity: 1,
        transform: 'scale(1)',
      },
      {
        opacity: 0,
        transform: 'scale(1.3)',
      },
    ],
    {
      duration: 500,
    }
  );
}

// toggleFullScreen toggles the full screen state of the video
// If the browser is currently in fullscreen mode,
// then it should exit and vice versa.
function toggleFullScreen() {
  if (document.fullscreenElement) {
    document.exitFullscreen();
    fullscreenExitIcon.classList.add('hidden');
    fullscreenIcon.classList.remove('hidden');
    videoPlayer.classList.remove('video-player-f');
    videoPlayer.classList.add('video-player');
    fullscreenTooltip.innerHTML = "Enter&nbspFullscreen&nbsp(F)";
    
  } else if (document.webkitFullscreenElement) {
    // Need this to support Safari
    document.webkitExitFullscreen();
    fullscreenExitIcon.classList.add('hidden');
    fullscreenIcon.classList.remove('hidden');
    videoPlayer.classList.remove('video-player-f');
    videoPlayer.classList.add('video-player');
    fullscreenTooltip.innerHTML = "Enter&nbspFullscreen&nbsp(F)";
  } else if (videoContainer.webkitRequestFullscreen) {
    // Need this to support Safari
    videoContainer.webkitRequestFullscreen();
    fullscreenIcon.classList.add('hidden');
    fullscreenExitIcon.classList.remove('hidden');
    videoPlayer.classList.remove('video-player');
    videoPlayer.classList.add('video-player-f');
    fullscreenTooltip.innerHTML = "Exit&nbspFullscreen&nbsp(F)";
  } else {
    videoContainer.requestFullscreen();
    fullscreenIcon.classList.add('hidden');
    fullscreenExitIcon.classList.remove('hidden');
    videoPlayer.classList.remove('video-player');
    videoPlayer.classList.add('video-player-f');
    fullscreenTooltip.innerHTML = "Exit&nbspFullscreen&nbsp(F)";
  }
}

// togglePip toggles Picture-in-Picture mode on the video
async function togglePip() {
  try {
    if (video !== document.pictureInPictureElement) {
      pipButton.disabled = true;
      await video.requestPictureInPicture();
    } else {
      await document.exitPictureInPicture();
    }
  } catch (error) {
    console.error(error);
  } finally {
    pipButton.disabled = false;
  }
}

// hideControls hides the video controls when not in use
// if the video is paused, the controls must remain visible
function hideControls() {
  videoControlsContainer.classList.remove('show');
  videoControlsBG.classList.remove('bg_show');
  videoControlsContainer.classList.add('hide');
  videoControlsBG.classList.add('bg_hide');
}

// showControls displays the video controls
function showControls() {
  videoControlsContainer.classList.remove('hide');
  videoControlsBG.classList.remove('bg_hide');
  videoControlsContainer.classList.add('show');
  videoControlsBG.classList.add('bg_show');
}

var timedelay = 1;
    function delayCheck()
    {
      if(timedelay == 2)
      {
        hideControls();
        timedelay = 1;
      }
      timedelay = timedelay+1;
    }
    $(videoPlayer, videoControlsContainer, videoControls).mousemove(function() {
      showControls();
      timedelay = 1;
      clearInterval(_delay);
      _delay = setInterval(delayCheck, 1000);
    });
    _delay = setInterval(delayCheck, 1000)

// keyboardShortcuts executes the relevant functions for
// each supported shortcut key
function keyboardShortcuts(event) {
  const { key } = event;
  switch (key) {
    case 'p':
      togglePlay();
      animatePlayback();
      break;
    case ' ':
      togglePlay();
      animatePlayback();
      break;
    case 'm':
      toggleMute();
      break;
    case 'f':
      toggleFullScreen();
      break;
    case 'k':
      togglePip();
      break;
  }
}

// Event listeners
playButton.addEventListener('click', togglePlay);
video.addEventListener('play', updatePlayButton);
video.addEventListener('pause', updatePlayButton);
video.addEventListener('loadedmetadata', initializeVideo);
video.addEventListener('timeupdate', updateTimeElapsed);
video.addEventListener('timeupdate', updateProgress);
video.addEventListener('volumechange', updateVolumeIcon);
seek.addEventListener('mousemove', updateSeekTooltip);
seek.addEventListener('input', skipAhead);
volume.addEventListener('input', updateVolume);
volumeButton.addEventListener('click', toggleMute);
fullscreenButton.addEventListener('click', toggleFullScreen);
pipButton.addEventListener('click', togglePip);

document.addEventListener('DOMContentLoaded', () => {
  if (!('pictureInPictureEnabled' in document)) {
    pipButton.classList.add('hidden');
    progressBarCont.classList.remove('progress_bar_container');
    progressBarCont.classList.add('progress_bar_container_pip_void');
  }
});
document.addEventListener('keyup', keyboardShortcuts);
