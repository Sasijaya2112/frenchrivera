# French Rivera Heritage Boutique Villa: website

Plain HTML, CSS and JavaScript. No build step.

```
index.html
css/style.css
js/main.js            booking links (bookingLinks), amenities, nearby places, FAQ, gallery list
assets/images/        all photos (webp) + og-image.jpg
assets/favicon.svg
```

## Run locally
`python3 -m http.server 8000` then open http://localhost:8000

## Edit
- Booking, WhatsApp, Maps and phone links: `bookingLinks` at the top of `js/main.js`.
- Photos: replace files in `assets/images/` keeping the names, or edit the `IMG` list in `js/main.js` and the `<img src>` paths in `index.html`.
- Colours and fonts: variables at the top of `css/style.css`.

## Deploy
Upload the whole folder to Netlify (drag and drop), Vercel, Cloudflare Pages or GitHub Pages. The site root must contain `index.html`.

## Before going live
1. In `index.html`, replace `https://YOUR-DOMAIN` in the `og:image` tag with your real domain. Add a `canonical` link too.
2. Confirm the exact Google Maps pin for the villa.
3. Confirm check-in 12:00 and check-out 11:00, airport distance (about 4.2 km), parking, breakfast, family rooms and terrace rooms (all taken from third-party listings).
4. Confirm room types and which rooms the photos show.
5. Confirm the "Dappled light on yellow walls" photo belongs to your property.
6. Re-check the Booking.com scores (7.7 from 19 reviews; location 9.1) before launch, since they change.
7. Replace the small interior photos with higher-resolution originals if you have them.
