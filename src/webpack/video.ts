/* eslint-disable class-methods-use-this */
/* eslint-disable no-useless-constructor */

interface VideoPlayerElements {
  video: HTMLVideoElement,
  playButton: HTMLButtonElement,
  pauseButton: HTMLButtonElement,
}

interface VideoPlayerProtocol {
  playToggle(): void,
  pause(): void,
  iniciarEventos(): void,
}

export class VideoPlayer implements VideoPlayerProtocol {
  private video: HTMLVideoElement;

  private playButton: HTMLButtonElement;

  private pauseButton: HTMLButtonElement;

  constructor(VideoPlayerElements: VideoPlayerElements) {
    this.video = VideoPlayerElements.video;
    this.playButton = VideoPlayerElements.playButton;
    this.pauseButton = VideoPlayerElements.pauseButton;
  }

  iniciarEventos(): void {
    this.playButton.addEventListener('click', () => {
      this.playToggle();
    });
    this.pauseButton.addEventListener('click', () => {
      this.pause();
    });
  }

  playToggle(): void {
    if (this.video.paused) {
      this.video.play();
    } else this.video.pause();
  }

  pause(): void {
    this.video.pause();
  }
}

const videoPlayer = new VideoPlayer({
  video: document.querySelector('.video') as HTMLVideoElement,
  playButton: document.querySelector('.startAndPlay') as HTMLButtonElement,
  pauseButton: document.querySelector('.pause') as HTMLButtonElement,
});

videoPlayer.iniciarEventos();
