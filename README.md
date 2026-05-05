# Pencil Fish Studio — Website

A 3-page static website for Max's art shop.

## File Structure

```
pencilfish/
├── index.html          ← Homepage
├── gallery.html        ← Art gallery
├── about.html          ← About Max
├── style.css           ← Shared styles
├── gallery-data.js     ← ⭐ EDIT THIS to add artwork
├── assets/
│   ├── logo.png        ← Studio logo
│   └── portrait.png    ← Max's portrait
└── gallery/            ← Put artwork photos here
    └── (your images)
```

---

## Adding Artwork

1. Put the image file (JPG or PNG) in the `/gallery/` folder
2. Open `gallery-data.js` in any text editor
3. Add a line inside the `galleryImages` array, like this:

```js
const galleryImages = [
  { src: "fish.jpg",   title: "Swimming Fish", price: "$5" },
  { src: "dragon.jpg", title: "Blue Dragon",   price: "$5" },
];
```

The first 3 images automatically show up on the homepage too.

---

## Updating the Etsy Link

Once Max's Etsy shop is live, search for `https://etsy.com` in all 3 HTML files
and replace with the actual shop URL (e.g. `https://etsy.com/shop/pencilfishstudio`).

---

## Hosting on GitHub Pages

1. Create a free GitHub account at github.com
2. Create a new repository named `pencilfishstudio` (or whatever you like)
3. Upload all these files
4. Go to Settings → Pages → set Source to "Deploy from branch: main"
5. Your site will be live at `https://yourusername.github.io/pencilfishstudio`

### Custom Domain (optional)
- Buy `pencilfish.ca` or similar from Namecheap (~$12/yr)
- In GitHub Pages settings, enter the custom domain
- Follow Namecheap's DNS instructions to point it at GitHub

---

## Tips

- Best image size for gallery: square, around 1200×1200px
- JPG works great for photos of drawings; PNG if you need transparency
- The gallery handles any number of images automatically
