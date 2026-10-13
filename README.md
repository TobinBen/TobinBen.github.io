# Ben Tobin — journalism portfolio

A responsive, lightweight journalism portfolio for GitHub Pages. No frameworks, build tools or hosting costs required.

## Preview locally

Open `index.html` in a browser, or from this folder run:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Publish on GitHub Pages

1. Create a public GitHub repository named `ben-tobin-portfolio` (or any name you prefer).
2. Upload **all four files** (`index.html`, `styles.css`, `script.js`, `stories.js`) to the root of the repository.
3. Open repository **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**; select **main** and **/(root)**, then Save.
5. Your site will be available at `https://YOUR-USERNAME.github.io/ben-tobin-portfolio/` once deployed.
6. Optional: Rename the repository to `YOUR-USERNAME.github.io` to host at the root URL.

## Customize your reporting

Edit `stories.js`. Each story has publication, tag, title, description, URL, and link text. The filters and cards update automatically.

**Important editorial note:** Some article entries currently link to confirmed TBJ author archive pages rather than individual articles. The Business Insider and Courier Journal cards are explicitly marked as placeholders and link to a clips profile or Pulitzer page. Replace these with your own selected direct article URLs before publicly promoting the site. This avoids fabricating links or misattributing specific clips.

## Other edits

- Change biography, email, and social links in `index.html`.
- Adjust fonts, colors, and layout in `styles.css`.
- No images or copyrighted publisher assets are required.
- The site uses Google Fonts; if blocked, it falls back to Georgia and Arial.

## Updated selected work
The `stories.js` file now includes 12 researched clips and custom descriptions. See `CLIP-LINKS.md` for which links go directly to articles and which still need replacing. To update the live GitHub Pages site, replace `stories.js` in the repository and commit.
