<script>
    import Logo from "./Logo.svelte";
</script>

<section class="relative h-[100dvh] md:h-[70dvh] flex flex-col items-center justify-center text-center text-white ">
    <div class="video-docker absolute top-0 left-0 w-full h-full overflow-hidden">
        <video class="min-w-full min-h-full absolute object-cover"
            src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4"
            type="video/mp4" autoplay muted loop></video>
    </div>
    <div class="video-content z-10">
        <Logo showText />
        <a
            href="/signup"
            class="uppercase py-3 px-4 mt-4 text-center text-primary-900 bg-primary-500 hover:bg-primary-300 rounded-md block md:inline-flex"
        >
            Faça parte
        </a>
    </div>
</section>

<style>
    .video-docker video {
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    .video-docker::after {
        content: "";
        position: absolute;
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.6);
        z-index: 1;
    }
</style>