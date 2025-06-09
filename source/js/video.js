const videoImage = document.querySelector('.about__video');
const playButton = document.querySelector('.about__video-play');
const playVideo = document.querySelector('.about__youtube');

playButton.addEventListener('click', () => {
  videoImage.style.display = 'none';
  playButton.style.display = 'none';
  playVideo.src = `${playVideo.getAttribute('data-src')}&autoplay=1`;
  playVideo.hidden = false;
});
