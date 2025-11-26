# Her Treat Collective Website

A responsive, collage-style event website for Her Treat Collective, built with Next.js, Tailwind CSS, and Sanity CMS.

## Features

- **Collage Visual Style**: Torn paper effects, tape overlays, and polaroid-style image presentations.
- **Event Management**: Sanity CMS integration for managing events, including a custom collage header builder.
- **Responsive Design**: Fully responsive layout that adapts to mobile devices.
- **Donation Integration**: Setup for Stripe Checkout (requires API keys).

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd her-treat
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with the following keys:
   ```env
   # Sanity
   NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

   # Stripe
   NEXT_PUBLIC_STRIPE_PK=your_stripe_publishable_key
   STRIPE_SECRET=your_stripe_secret_key
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### CMS Setup (Sanity)

1. Create a new project at [sanity.io](https://www.sanity.io).
2. Get your Project ID and Dataset name.
3. Add them to your `.env.local` file.
4. The schema is already defined in `sanity/schemaTypes`.
5. Visit `http://localhost:3000/studio` to access the Sanity Studio and start adding content.

#### Creating an Event with Collage Header

1. In Sanity Studio, create a new **Event**.
2. Fill in the basic details (Title, Date, Location, etc.).
3. In the **Collage Header Layers** section, add layers:
   - **Image**: Upload a background image or photo.
   - **Polaroid**: Upload an image to be framed as a polaroid.
   - **Sticker**: Upload a decorative sticker (transparent PNG).
   - **Tape**: Upload a tape image.
   - **Text**: Add text content.
4. Adjust the `X` and `Y` position (percentage), `Rotation` (degrees), `Scale`, and `Z Index` to position each layer.

## Deployment

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a GitHub repository.
2. Import the project in Vercel.
3. Add the environment variables from your `.env.local` file to the Vercel project settings.
4. Deploy!

## Tech Stack

- **Framework**: Next.js 14
- **Styling**: Tailwind CSS
- **CMS**: Sanity
- **Fonts**: Anton, Shantell Sans, Caveat (Google Fonts)
- **Icons**: Lucide React
