## LumenVPN

LumenVPN is a marketing site for a secure, privacy-first VPN platform. It highlights key product capabilities, global server coverage, pricing tiers, and platform availability through a high-performance Next.js application styled with Tailwind CSS.

### Tech Stack
- Next.js App Router with TypeScript
- Tailwind CSS with custom gradients and components
- Geist font via `next/font`

### Development
Install dependencies (already installed if you ran the generator):

```bash
npm install
```

Run the local development server:

```bash
npm run dev
```

### Production Build
Generate an optimized build and run the production server locally:

```bash
npm run build
npm run start
```

### Project Structure
- `src/app/page.tsx` - main landing page with hero, features, network coverage, security, pricing, testimonials, and download CTA sections
- `src/app/layout.tsx` - root layout with metadata and fonts
- `src/app/globals.css` - Tailwind base layer and global token definitions

### Deployment
The project is ready for deployment on Vercel. After building locally, deploy with:

```bash
vercel deploy --prod --yes --token $VERCEL_TOKEN --name agentic-e7697d62
```

Once DNS has propagated, verify with:

```bash
curl https://agentic-e7697d62.vercel.app
```
