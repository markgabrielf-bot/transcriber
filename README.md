# Free Audio Transcriber

A free, open-source audio and video to text transcriber that runs entirely in the browser.

- No sign up, no limits, no watermark
- Private: files never leave the user's device
- Supports English, Tagalog/Taglish, Cebuano and many more languages
- Accepts MP3, WAV, M4A, OGG, MP4, MOV, WEBM
- Exports plain text (.txt) and captions (.srt) for Premiere Pro, DaVinci Resolve and CapCut
- Uses the GPU (WebGPU) when available, falls back to CPU automatically
- Uses multiple CPU cores when hosted over HTTPS (via `coi-sw.js`)
- Skips long silences to save time, with timestamps mapped back to the original audio
- Long MP3s are processed part by part with live results and a time-left estimate

## How it works

The page loads [Transformers.js](https://github.com/huggingface/transformers.js) from a CDN and downloads an
[OpenAI Whisper](https://github.com/openai/whisper) model (tiny, base or small) from Hugging Face the first time
it is used. The browser caches the model, and all transcription runs locally in a Web Worker.

There is no backend. The app is `index.html` plus a tiny service worker, `coi-sw.js`.

`coi-sw.js` adds the `Cross-Origin-Opener-Policy` and `Cross-Origin-Embedder-Policy` headers so the page becomes
cross-origin isolated. That unlocks multi-threaded WebAssembly, which makes CPU transcription several times faster.
Static hosts like GitHub Pages cannot set these headers, so the service worker does it. The page reloads once on the
first visit to turn it on. If your host can set the headers itself, you can skip the file.

## Hosting

Upload `index.html` and `coi-sw.js` (and optionally `apple-touch-icon.png`) to the same folder on any static host:
GitHub Pages, Netlify, Cloudflare Pages, or your own server. It must be served over HTTPS.

Opening the file directly from your computer also works in Chrome and Edge, but CPU mode is limited to one core there.

## Browser support

Best in desktop Chrome or Edge. Firefox and Safari work in CPU mode. Phones can handle short clips.

## Credits

- Speech recognition: OpenAI Whisper (MIT License)
- Runtime: Transformers.js by Hugging Face (Apache 2.0 License)

## License

MIT. See `LICENSE`. Free to use, copy, modify and share.
