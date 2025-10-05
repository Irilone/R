# Repository Guidelines

## Project Structure & Asset Organization
Keep the root directory curated: `R.md` holds subject context, `CLAUDE.md` guides other agents, and media assets live as `R - <index>.<ext>` files. Add new imagery or footage alongside existing numbering, padding with zeros for clarity (`R - 29.jpg`). Place any helper scripts or prototypes in a `tools/` subfolder; store generated outputs in clearly dated subdirectories under `releases/` once they are approved.

## Build, Test, and Development Commands
This project has no formal build pipeline; use lightweight commands to prep assets. For image inspection run `open "R - 12.JPG"` on macOS. Convert or resize with `magick "R - 12.JPG" -resize 1920x1080 "releases/2024-10-05/R - 12_hd.jpg"`. When scripting, execute helpers from `tools/` with `python tools/railway_montage.py` so paths resolve relative to the repository root.

## Coding Style & Naming Conventions
Default to Python or shell for automation, using 4-space indentation and descriptive snake_case filenames (e.g., `great_western_storyboard.py`). Markdown notes should start with an H1 title and wrap lines at ~100 characters. Preserve the `R - <index>` pattern for media; never overwrite originals—instead suffix edits with `_edit`, `_color`, or `_draft`.

## Testing Guidelines
There are no automated tests; rely on manual validation. Review scripts with `ruff tools/*.py` before sharing, and run linting in strict mode (`ruff --fix --select=E,F tools/`). Preview visual outputs at full resolution and confirm color accuracy on a calibrated display. Document review steps and approvals in `releases/<date>/CHECKLIST.md` so future agents can trace sign-off.

## Commit & Pull Request Guidelines
Commits should be atomic, written in present-tense imperative ("Add prelude montage script"). Include short context in the body when touching media (source, edits, rationale). Pull requests must summarize intent, list affected assets, link to any planning tickets, and attach thumbnails or clips for reviewers. Request review from another agent before merging to maintain curation quality.

## Agent Collaboration Notes
Reference `CLAUDE.md` for subject nuance before producing new material. When handing off work, add status bullets in `R.md` or a dedicated note within `releases/<date>/README.md` so teammates can continue seamlessly.
