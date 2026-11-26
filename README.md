# Free Audio Transcriber

A free, open-source audio and video to text transcriber that runs entirely in the browser.

- No sign up, no limits, no watermark
- Private: files never leave the user's device
- Supports English, Tagalog/Taglish, Cebuano and many more languages
- Accepts MP3, WAV, M4A, OGG, MP4, MOV, WEBM
- Exports plain text (.txt) and captions (.srt) for Premiere Pro, DaVinci Resolve and CapCut
- Uses the GPU (WebGPU) when available, falls back to CPU automatically

## How it works

The page loads [Transformers.js](https://github.com/huggingface/transformers.js) from a CDN and downloads an
[OpenAI Whisper](https://github.com/openai/whisper) model (tiny, base or small) from Hugging Face the first time
it is used. The browser caches the model, and all transcription runs locally in a Web Worker.

There is no backend. The whole app is one file: `index.html`.

## Hosting

Upload `index.html` (and optionally `apple-touch-icon.png`) to any static host:
GitHub Pages, Netlify, Cloudflare Pages, or your own server. It must be served over HTTPS.

Opening the file directly from your computer also works in Chrome and Edge.

## Browser support

Best in desktop Chrome or Edge. Firefox and Safari work in CPU mode. Phones can handle short clips.

## Credits

- Speech recognition: OpenAI Whisper (MIT License)
- Runtime: Transformers.js by Hugging Face (Apache 2.0 License)

## License

MIT. See `LICENSE`. Free to use, copy, modify and share.
