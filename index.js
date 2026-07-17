const video = document.getElementById('player');
const url = 'https://192.168.1.1:557/live/stream.m3u8';
if (Hls.isSupported()) {
    const hls = new Hls();

    hls.loadSource(url);
    hls.attachMedia(video);

    hls.on(Hls.Events.MANIFEST_PARSED, () => {
        video.play();
    });

} else if (video.canPlayType('application/vnd.apple.mpegurl')) {
    video.src = url;
    video.play();
}
