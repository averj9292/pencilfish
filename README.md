# Pencil Fish Studio — Website

A 3-page static website for Max's art shop.

## File Structure

```
pencilfish/
├── index.html          ← Homepage
├── gallery.html        ← Art gallery
├── about.html          ← About Max
├── custom.html         ← Custom art request form
├── admin.html          ← Upload artwork (needs GitHub token)
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

## Custom Art Form

`custom.html` sends requests by email through [Web3Forms](https://web3forms.com) (free).
The access key is in the hidden `access_key` field near the top of the form.
To change which inbox gets requests, generate a new key at web3forms.com and swap it in.

---

## Hosting on GitHub Pages

1. Create a free GitHub account at github.com
2. Create a new repository named `pencilfishstudio` (or whatever you like)
3. Upload all these files
4. Go to Settings → Pages → set Source to "Deploy from branch: main"
5. Your site will be live at `https://yourusername.github.io/pencilfishstudio`

### Custom Domain (optional)
- Domain `pencilfishstudio.ca` is registered at Cloudflare
- DNS: four A records for `@` → 185.199.108–111.153, CNAME `www` → averj9292.github.io (grey cloud / DNS only)
- GitHub repo → Settings → Pages: custom domain set, Enforce HTTPS on

---

## Tips

- Best image size for gallery: square, around 1200×1200px
- JPG works great for photos of drawings; PNG if you need transparency
- The gallery handles any number of images automatically
