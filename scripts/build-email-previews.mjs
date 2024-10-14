// Build preview HTML files for the gallery by combining LAYOUT_1 (head)
// and LAYOUT_2 (container) with each body_email_N.html. The resulting
// preview_email_N.html files are what the gallery iframes show.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIR = path.join(__dirname, '..', 'public', 'email-samples');

const head = fs.readFileSync(path.join(DIR, 'LAYOUT_1_header_style_and_tags.html'), 'utf8');
const container = fs.readFileSync(path.join(DIR, 'LAYOUT_2_container_setup.html'), 'utf8');

// LAYOUT_2 has a marker block where GovDelivery would inject the body. Replace it.
const MARKER = /<!--\s*={2,}\s*-->\s*<!--\s*={2,}\s*GOVDELIVERY:[\s\S]*?={2,}\s*-->\s*<!--\s*={2,}[\s\S]*?={2,}\s*-->/m;

if (!MARKER.test(container)) {
  console.error('Marker not found in LAYOUT_2');
  process.exit(1);
}

// Sample placeholder values so previews look complete (no raw {{TOKENS}}).
const SAMPLE = {
  WEBSITE_URL: 'https://detroitmi.gov/elections',
  FACEBOOK_URL: '#', INSTAGRAM_URL: '#', TWITTER_URL: '#',
  HEADLINE: 'Sample Headline',
  EYEBROW: 'Sample',
  CTA_LABEL: 'Learn More', CTA_URL: '#',
  INTRO_PARAGRAPH: '',
  INITIATIVE_DESCRIPTION: '',
  CORE_QUESTION: '',
  SURVEY_INVITE_PARAGRAPH: '',
  SURVEY_URL: '#',
  RESIDENT_QUOTE: '',
  QUOTE_ATTRIBUTION: '',
  ISSUE_CONNECTION_PARAGRAPH: '',
  RESEARCH_RECORDS_PARAGRAPH: '',
  REGISTRATION_CHECK_URL: '#',
  WAY_1_TITLE: '', WAY_1_DESCRIPTION: '',
  WAY_2_TITLE: '', WAY_2_DESCRIPTION: '',
  WAY_3_TITLE: '', WAY_3_DESCRIPTION: '',
  SAMPLE_BALLOT_URL: '#', POLLING_LOCATION_URL: '#',
  ANNOUNCEMENT_PARAGRAPH: '',
  CHECKLIST_ITEM_1: '', CHECKLIST_ITEM_2: '', CHECKLIST_ITEM_3: '', CHECKLIST_ITEM_4: '',
  LOCATE_SITE_PARAGRAPH: '',
  EARLY_VOTING_LOCATION_URL: '#',
  COUNTDOWN_LABEL: '3 days left to vote',
  REMINDER_PARAGRAPH: '',
  FACT_CHECK_CLAIM: '',
  FACT_CHECK_TRUTH: '',
  VOTING_PLAN_URL: '#',
  CALM_REMINDER_PARAGRAPH: '',
  EXPECT_ITEM_1: '', EXPECT_ITEM_2: '', EXPECT_ITEM_3: '', EXPECT_ITEM_4: '',
  POLLS_OPEN_HOURS_NOTE: '',
  GRATITUDE_PARAGRAPH: '',
  COMMUNITY_CONTINUES_PARAGRAPH: '',
  RESULTS_CERTIFICATION_INFO: '',
  NEXT_STEPS_URL: '#',
  PREHEADER_TEXT: '',
  MAILING_ADDRESS: 'Detroit Department of Elections, 2978 W. Grand Blvd, Detroit, MI 48202',
  PREFERENCES_URL: '#', UNSUBSCRIBE_URL: '#',
  VIEW_IN_BROWSER_URL: '#',
  YEAR: String(new Date().getFullYear()),
};

const fillTokens = (s) =>
  s.replace(/\{\{([A-Z0-9_]+)\}\}/g, (_, key) => SAMPLE[key] ?? '');

for (let i = 1; i <= 7; i++) {
  const body = fs.readFileSync(path.join(DIR, `body_email_${i}.html`), 'utf8');
  const merged = container.replace(MARKER, body);
  const doc = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Preview · Email ${i}</title>
${head}
</head>
<body style="margin:0;background:#f2f2f2;">
${fillTokens(merged)}
</body>
</html>
`;
  const out = path.join(DIR, `preview_email_${i}.html`);
  fs.writeFileSync(out, doc);
  console.log('wrote', path.basename(out), `(${doc.length} bytes)`);
}
