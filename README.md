# Orchid Homes LLC Website

A simple Next.js + React landing page concept for Orchid Homes LLC, a private landlord in Raleigh, North Carolina. The design uses orchid purple, lilac, and warm cream tones.

## Run locally

1. Install Node.js (LTS).
2. Clone the repository:

   ```bash
   git clone git@github.com:Tequilla21/Orchid-Homes-llc.git
   cd Orchid-Homes-llc
   ```

3. Install dependencies and start the development server:

   ```bash
   npm install
   npm run dev
   ```

4. Open http://localhost:3000.

## Updating rent and availability

Edit `src/data/properties.ts`:

- Change `rent` to the confirmed monthly rent (number, e.g. `1099`). Use `null` when a price should not be shown yet.
- Change `available` to `true` or `false` for each unit.
- Update the other details only after they are confirmed by the landlord.

The homepage displays units where `available` is `true` and calculates the available count from this data file. Changes require a code edit and a Git commit/push; this is not yet a secure owner dashboard or a browser-based content manager.

## Before publishing

- Confirm all listing availability, prices, addresses, amenities, and rental terms with the landlord.
- Replace decorative listing artwork with approved property photos.
- Add the landlord's approved contact details and a real inquiry delivery mechanism.
- Review accessibility, fair-housing language, privacy, and hosting/domain arrangements.

This repository contains a prototype for review and is not yet a production-ready property management system.
