# sonnyhuynh-resume

About page for about.sonnyhuynh.dev (an intro with a downloadable resume). React + Vite + TypeScript + Tailwind v4, using [`@sonnyhuynh/ui`](https://github.com/shuynh3/sonnyhuynh-ui).

`@sonnyhuynh/ui` installs from GitHub, pinned to a tag in `package.json`. To release a UI change: tag it in sonnyhuynh-ui (`git tag v0.2.0 && git push origin v0.2.0`), then bump the tag here and run `npm install`.

To work against a local checkout of `../sonnyhuynh-ui` instead, run `npm install --no-save ../sonnyhuynh-ui` (symlinks it without touching `package.json`); `npm install` switches back to the pinned tag.

```bash
npm install
npm run dev
```
