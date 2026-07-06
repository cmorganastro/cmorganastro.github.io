# Your personal site

A dark-mode astrophysics-themed personal site: about, research, publications, CV & contact.

## 1. Fill in your content

Open `index.html` and replace everything in `[brackets]` — name, institution, research
blurbs, publications, email, links. Then drop your CV into `assets/cv.pdf`.

## 2. Put it on GitHub Pages

1. Create a new GitHub repo. If you want it at `https://<username>.github.io`, name the
   repo exactly `<username>.github.io`. Otherwise any repo name works and the site will
   live at `https://<username>.github.io/<repo-name>`.
2. Push these files (`index.html`, `style.css`, `script.js`, `assets/`) to the repo's
   `main` branch:
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo-name>.git
   git push -u origin main
   ```
3. On GitHub: go to the repo → **Settings → Pages**.
4. Under "Build and deployment", set **Source** to "Deploy from a branch", branch
   `main`, folder `/ (root)`. Save.
5. Wait a minute or two, then visit the URL GitHub shows you on that same Pages
   settings screen.

Any time you push new commits to `main`, the live site updates automatically.

## Notes

- No build step or dependencies — it's plain HTML/CSS/JS, so it works as-is on GitHub Pages.
- Fonts load from Google Fonts via CDN; everything else is self-contained.
- The starfield and section dividers use a stellar-classification (O–M) color scale as
  the visual theme throughout.
