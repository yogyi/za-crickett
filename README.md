# ZA Cricket

Premium Singapore-based cricket e-commerce website.

## Quick Start

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### Gemini sales assistant

The floating ZA Cricket Assistant works in verified catalogue mode without an
API key. To enable personalised Gemini guidance, copy `.env.example` to
`.env.local` and add your server-side key:

```bash
GEMINI_API_KEY=your_key_here
```

Restart the development server after changing environment variables. Never use
a `NEXT_PUBLIC_` prefix for this key. The default model is `gemini-3.5-flash`.

## Features

- Full product catalogue (bats, gloves, pads, wicket keeping, bundles)
- Custom bat configurator for The Signature
- Gemini-powered cricket equipment sales and bat-fitting assistant
- Shopping cart with persistent storage
- Athlete sponsorship pages
- About, Contact, Privacy, Exchange, and Shipping policies
- White + purple professional design inspired by premium sports retail

## Tech Stack

- Next.js 16 (App Router)
- Tailwind CSS v4
- Motion (animations)
- Zustand (cart state)
- Phosphor Icons
- Google Gen AI SDK

## Product Images

Replace placeholder images in `public/images/` with client assets from the Google Drive folder when available.

## Contact

- Email: zacricket26@gmail.com
