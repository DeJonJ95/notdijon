# GovDelivery-ready files

Split versions of the campaign, mapped to how GovDelivery (Advanced Bulletin) actually builds email.
Account: **MIDETROIT** · admin.govdelivery.com.

## What's here
| File | Goes into |
|------|-----------|
| `LAYOUT_1_header_style_and_tags.html` | Layout field **"Header Style and Tags"** (the CSS/`<style>`, its only safe home) |
| `LAYOUT_2_container_setup.html` | Layout field **"Container Setup"** (shared shell; mark where the body control goes) |
| `body_email_1.html` … `body_email_7.html` | The **content/code view** of each of the 7 Custom Templates |

## Build order (once)
1. **Templates → Advanced Bulletin → Bulletin Images**: upload the Detroit logo / any hero images, copy their URLs.
2. **Templates → Advanced Bulletin → Layouts → Create Layout**
   - Name: `Democracy in Detroit`
   - Paste `LAYOUT_1_header_style_and_tags.html` into **Header Style and Tags**.
   - Paste `LAYOUT_2_container_setup.html` into **Container Setup**. Replace `{{WEBSITE_URL}}` + social `{{...}}` once. Put GovDelivery's body/content control at the big marker comment.
   - Save.

## Build each email (×7)
3. **Custom Templates → new**, choose the `Democracy in Detroit` layout. Name it `DID · Email N …`.
4. Paste the matching `body_email_N.html` into the content/code view.
5. Replace the `{{PLACEHOLDERS}}` (copy + URLs; see ../README.md for the per-email token list). Add UTM tags to links.
6. **Preview**, then send a **test bulletin** to yourself + a colleague. Check Gmail, Outlook, iPhone.

## Don't re-add these: GovDelivery supplies them
- **Unsubscribe link, mailing address, "view in browser"** → the account footer appends these automatically. The slim footer in `LAYOUT_2` deliberately omits them to avoid duplicates (it keeps only social links + the nonpartisan disclaimer).
- Keep the **From** and **Footer** set to *account default: City of Detroit*.

## Known degradations (acceptable)
- If GovDelivery strips the `<head>` CSS anywhere, only the **mobile padding tweaks** and **dark-mode** tuning are affected. The core look is carried by inline styles on every element. Putting the CSS in the Layout's Header Style and Tags field is what preserves them.
- No `<script>` is used, so nothing else is stripped.

## To send the series
- **No upgrade needed:** create a **Bulletin** from each template, target by **Topic**, schedule for the plan dates (May 26 → Aug 5).
- **Campaigns / Segments** (automated series + audience targeting) require those modules enabled on the account; see ../ROLLOUT.md and request via your Granicus account manager if they're not available.
