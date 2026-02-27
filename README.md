# n8n-nodes-sarvam

This is an n8n community node for [Sarvam AI](https://sarvam.ai) — Indian language AI APIs for transcription, speech synthesis, and chat across 22+ Indian languages.

## Installation

Follow the [n8n community nodes installation guide](https://docs.n8n.io/integrations/community-nodes/installation/).

In n8n, go to **Settings > Community Nodes** and install:

```
n8n-nodes-sarvam
```

## Authentication

You need a Sarvam AI API key. Get one from the [Sarvam AI Dashboard](https://dashboard.sarvam.ai) after signing up. You receive ₹1000 free credits on signup.

In n8n, create a new **Sarvam AI API** credential and paste your API key.

## Operations

### Speech

| Operation | Description |
|---|---|
| **Speech to Text** | Transcribe audio files with multiple modes — transcribe, translate to English, transliterate (roman), code-mixed, and verbatim |
| **Text to Speech** | Convert text to natural-sounding speech with 30+ voice options |

### Chat

| Operation | Description |
|---|---|
| **Complete** | Generate chat completions using Sarvam AI language models |

## Supported Languages

Bengali, English, Gujarati, Hindi, Kannada, Malayalam, Marathi, Odia, Punjabi, Tamil, Telugu, Assamese, Bodo, Dogri, Konkani, Kashmiri, Maithili, Manipuri, Nepali, Sanskrit, Santali, Sindhi, Urdu.

## Resources

- [Sarvam AI Documentation](https://docs.sarvam.ai)
- [API Reference](https://docs.sarvam.ai/api-reference-docs/introduction)
- [n8n Community Nodes](https://docs.n8n.io/integrations/community-nodes/)

## License

[MIT](LICENSE.md)
