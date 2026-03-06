# n8n-nodes-sarvam

[![npm version](https://img.shields.io/npm/v/n8n-nodes-sarvam.svg)](https://www.npmjs.com/package/n8n-nodes-sarvam)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE.md)
[![n8n community node](https://img.shields.io/badge/n8n-community%20node-ff6d5a)](https://www.npmjs.com/package/n8n-nodes-sarvam)

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
| **Text to Speech** | Convert text to natural-sounding speech with 39 voice options |

### Chat

| Operation | Description |
|---|---|
| **Complete** | Generate chat completions using Sarvam AI language models |

## Speech to Text Modes

| Mode | Description |
|---|---|
| **Transcribe** | Standard transcription in the original language |
| **Translate to English** | Translate speech from any Indic language to English |
| **Transliterate (Roman)** | Romanize speech to Latin script |
| **Code Mixed** | English words in English, Indic words in native script |
| **Verbatim** | Exact word-for-word transcription without normalization |

## Supported Languages

**Speech to Text (23 languages):** Assamese, Bengali, Bodo, Dogri, English, Gujarati, Hindi, Kannada, Kashmiri, Konkani, Maithili, Malayalam, Manipuri, Marathi, Nepali, Odia, Punjabi, Sanskrit, Santali, Sindhi, Tamil, Telugu, Urdu.

**Text to Speech (11 languages):** Bengali, English, Gujarati, Hindi, Kannada, Malayalam, Marathi, Odia, Punjabi, Tamil, Telugu.

**Chat:** Supports all languages via sarvam-m, sarvam-30b, sarvam-100b, gemma-4b, and gemma-12b models.

## Resources

- [Sarvam AI Documentation](https://docs.sarvam.ai)
- [API Reference](https://docs.sarvam.ai/api-reference-docs/introduction)
- [n8n Community Nodes](https://docs.n8n.io/integrations/community-nodes/)

## License

[MIT](LICENSE.md)
