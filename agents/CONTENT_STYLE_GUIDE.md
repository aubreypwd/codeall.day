# Content Style Guide

This document provides instructions for AI agents and editors to maintain consistent writing style, punctuation, and formatting across all content in this project.

## Writing Style & Tone

### Voice
- **Conversational and direct**: Write as if speaking directly to the reader
- **Personal**: Use "I" and "you" liberally—this is personal, not corporate
- **Friendly but professional**: Approachable without being overly casual
- **Confident**: Assertive statements without being arrogant
- **Active voice**: Prefer active voice over passive

### Sentence Structure
- Mix short, punchy sentences with longer explanatory ones
- Use parenthetical asides frequently for additional context
- Vary sentence length for rhythm and readability
- Use contractions naturally: I'll, you'll, we'll, it's, that's, etc.

## Punctuation

### Em Dashes
- **In Markdown files**: Use em dash character (—) directly
- **In HTML files**: Use HTML entity `&mdash;`
- **Usage**: Use em dashes for:
  - Parenthetical thoughts and asides: `Yes, it's **lengthy**—but that's intentional.`
  - Emphasis or dramatic pauses: `performance isn't optional&mdash;it's required.`
  - Clarifying information: `Once all deliverables are in—and the stylescape/sitemap are approved—we'll schedule a **kickoff call.**`

### Commas
- Use commas liberally for readability and natural pauses
- Use Oxford/serial commas in lists: `quality, integrity, and what matters most`
- Use commas to separate clauses and improve flow

### Periods
- Always use periods at the end of complete sentences
- Use periods in list items only if they are complete sentences

### Non-breaking Spaces
- Use `&nbsp;` in HTML when you need to prevent line breaks between specific words
- Example: `Real&nbsp;world data` (keeps "Real world" together)

### Special Characters
- Use `&rarr;` for arrows in markdown: `&rarr; _Usually the proposal gets tweaked..._`
- Use `&mdash;` for em dashes in HTML (not `—`)

## Formatting

### Bold Text
- **In Markdown**: Use `**text**` for emphasis on key terms
- **In HTML**: Use `<b>text</b>` for emphasis
- **Usage**: Bold important concepts, key terms, and emphasis points
- Example: `I'll send over a **questionnaire** with important questions`

### Italics
- **In Markdown**: Use `_text_` for subtle emphasis or asides
- **In HTML**: Use `<i>text</i>` or `<em>text</em>`
- **Usage**:
  - Subtle emphasis: `_deeply_`
  - Parenthetical thoughts: `_yes, even for one-pagers_`
  - Asides: `_Usually the proposal gets tweaked a bit during this stage._`

### Headings
- Use `####` for main section headings
- Use `#####` for sub-section headings
- Keep headings concise and descriptive

### Lists
- Use bullet points (`-`) for unordered lists
- Use numbered lists when sequence matters
- No periods after list items unless they are complete sentences
- Use consistent indentation

### Horizontal Rules
- Use `<hr>` in HTML for major section breaks
- Use `---` in Markdown for section breaks

## Hyphenation Rules

### Always Hyphenate
- `in-depth` (when used as adjective: "in-depth discussion")
- `performance-first` (compound adjective)
- `one-pager` (compound noun)
- `off-site` (compound adjective/adverb)
- `pre-built` (compound adjective)
- `high-performing` (compound adjective)
- `real-world` (when used as adjective: "real-world data")

### Two Words (Not Hyphenated)
- `in depth` (when used as adverbial phrase: "discuss in depth")
- `straightforward` (one word, not hyphenated)
- `Real world` (when starting a sentence: "Real world data shows...")

### Context Matters
- `in-depth` (adjective): "We'll have an in-depth discussion"
- `in depth` (adverb): "We'll discuss your project in depth"

## Ampersands

### In Markdown Files
- Use plain `&` character
- Example: `First meeting & initial proposal`

### In HTML Files
- Use HTML entity `&amp;` for proper encoding
- Example: `Static Sites &amp; Landing Pages`
- Also use in attributes: `alt="Awesome Motive &amp; AffiliateWP"`

## Grammar & Language

### Common Patterns
- Use "you'll" not "you will" (conversational)
- Use "I'll" not "I will" (conversational)
- Use "we'll" not "we will" (conversational)
- Use "it's" not "it is" (conversational)

### Parallel Structure
- Maintain parallel structure in lists: `identify and resolve` (not "identify and resolved")
- Keep verb tenses consistent within sentences

### Common Phrases
- "Everything is flexible" (not "Everything are flexible")
- "performance-first" (hyphenated compound)
- "from the very beginning" (not "from very beginning")

## Content Structure

### Paragraphs
- Keep paragraphs focused and concise
- Use single line breaks between paragraphs
- Use double line breaks before major sections

### Sections
- Use `<hr>` or `---` to separate major sections
- Use consistent heading hierarchy
- Maintain logical flow between sections

### Lists
- Use bullet points for features, benefits, or items
- Use consistent formatting within lists
- No trailing periods unless list items are complete sentences

## Common Mistakes to Avoid

### Typos to Watch For
- "generally" not "genrally"
- "straightforward" not "straight forward"
- "Building" not "Buiding"
- "identify" not "identifiy"
- "typical" not "typcial"
- "deviate" not "devate"

### Grammar Issues
- "doesn't just fast" → "isn't just fast"
- "identifiy and resolved" → "identify and resolve"
- Avoid double em dashes: `from the very beginning. &mdash; If` → `from the very beginning. If`

### Punctuation Issues
- Don't use double em dashes unnecessarily
- Ensure proper comma usage
- Don't forget periods at end of sentences

## HTML-Specific Guidelines

### Entities
- Always use `&amp;` for ampersands in HTML
- Use `&mdash;` for em dashes in HTML
- Use `&nbsp;` for non-breaking spaces when needed
- Use `&rarr;` for arrows

### Tags
- Use `<b>` for bold (not `<strong>` unless semantically needed)
- Use `<i>` for italics (not `<em>` unless semantically needed)
- Use semantic HTML where appropriate

## Markdown-Specific Guidelines

### Formatting
- Use `**text**` for bold
- Use `_text_` for italics
- Use `####` and `#####` for headings
- Use `-` for bullet lists
- Use `---` for horizontal rules

### Special Characters
- Use em dash `—` directly (not `&mdash;`)
- Use `&` directly (not `&amp;`)
- Use `&rarr;` for arrows

## Writing for Non-Technical Audiences

When writing process documentation, educational content, or explaining workflows to clients, follow these principles to ensure clarity and accessibility.

### The "Grandma Test"
- **Write so even a grandma will understand**: Use everyday language, avoid jargon
- **Explain technical terms**: When introducing technical concepts, explain them simply and accurately
- **Use analogies**: Compare technical concepts to familiar things (e.g., "Think of it like a table of contents for your website")
- **Avoid acronyms**: Spell out terms instead of using acronyms (e.g., "statement of work" not "SOW")

### Technical Term Guidelines

#### Always Explain Technical Terms
When first introducing a technical term, provide a simple, accurate explanation:

**Good Examples:**
- `I'll create a **stylescape**—a single image that shows the visual direction for your site. Think of it as a preview of the colors, fonts, photography style, and overall look and feel we're going for.`
- `I'll create a clear sitemap showing the structure of your site (yes, even for one-page sites) and all the pages we're building. Think of it like a table of contents for your website.`
- `I'll create a moodboard—a collection of images, colors, and design inspiration that sets the tone for your site.`

#### Avoid Unnecessary Technical Details
Don't include technical implementation details that don't help the reader understand the process:

**Bad:** `During this phase we'll get the site up on a staging server and start connecting everything...`
**Good:** `Together, we'll test everything: layout, content, links, forms, and how everything works.`

**Bad:** `For five working days after launch...`
**Good:** `For one week after launch...` (The specific detail about working days belongs in the contract, not the process explanation)

### Language Choices for Clarity

#### Use Full Terms, Not Acronyms
- ❌ "SOW" → ✅ "statement of work"
- ❌ "SLA" → ✅ "service level agreement" (if needed)
- ❌ "CMS" → ✅ "content management system" (if needed, with explanation)

#### Use Simple Time References
- ❌ "five working days" → ✅ "one week" (unless the distinction is critical for the reader)
- ❌ "15 business days" → ✅ "15 days" or "about three weeks"

#### Use Plain Language for Processes
- ❌ "deploy to production" → ✅ "launch" or "go live"
- ❌ "staging environment" → ✅ (just say "testing" or remove entirely)
- ❌ "domain name system" → ✅ "domain name" or "web address"

### Balance: Concise but Not Vague

**Find the sweet spot:**
- **Too vague:** "We'll work on your site"
- **Too wordy:** "We'll engage in a comprehensive development process involving multiple iterations of design and code implementation across various pages and components"
- **Just right:** "I'll develop your homepage first, then the rest of your core pages"

**Guidelines:**
- Include enough detail that the reader understands what's happening
- Don't include so much detail that it becomes overwhelming
- Focus on what the client needs to know, not technical implementation

### Process Documentation Structure

When documenting a multi-step process:

1. **Use clear, descriptive headings** for each step
2. **Explain what happens** at each stage
3. **Clarify who does what** (what I do vs. what the client does)
4. **Include timing expectations** (24 hours, one week, etc.)
5. **Set clear expectations** about revisions, feedback windows, etc.
6. **Use consistent formatting** for similar information (e.g., payment milestones)

**Example Structure:**
```markdown
#### Step Name

Brief explanation of what happens in this step and why it matters.

- What I'll do
- What you'll need to do
- Timeline expectations
- Any limitations or constraints (e.g., "one revision")
```

### Revision and Feedback Clarity

When explaining revision processes, be explicit:

**Good:**
- `You'll get **one round of feedback** on the homepage, and I'll need that feedback within 24 hours.`
- `You get **one revision** of both the sitemap and the stylescape. After I make those changes and send them back, you'll approve them so we can move forward.`
- `You'll get **one final revision** for everything before we launch. This is for minor tweaks—not major changes.`

**Avoid:**
- Vague language like "we'll iterate" or "we'll refine"
- Not specifying revision limits
- Not clarifying what types of changes are acceptable

### Examples from Process Content

#### Explaining Technical Concepts Simply

**Stylescape:**
```markdown
I'll create a **stylescape**—a single image that shows the visual direction for your site. Think of it as a preview of the colors, fonts, photography style, and overall look and feel we're going for.
```

**Sitemap:**
```markdown
I'll create a clear sitemap showing the structure of your site (yes, even for one-page sites) and all the pages we're building. Think of it like a table of contents for your website.
```

**Moodboard:**
```markdown
I'll create a moodboard—a collection of images, colors, and design inspiration that sets the tone for your site. I might share this with you, or I might use it just for my own reference.
```

#### Removing Unnecessary Technical Details

**Before (too technical):**
```markdown
During this phase we'll get the site up on a staging server and start connecting everything needed to make it work (forms, integrations, payment gateways if applicable, analytics, etc.).
```

**After (clear and simple):**
```markdown
Together, we'll test everything: layout, content, links, forms, and how everything works. I'll do deeper testing on my end, and we'll test together to make sure everything looks great and works correctly.
```

#### Using Full Terms Instead of Acronyms

**Before:**
```markdown
Once you accept the proposal, I'll prepare a SOW (statement of work)...
```

**After:**
```markdown
Once you accept the proposal, I'll prepare a statement of work (a contract that outlines everything we agreed to)...
```

### Checklist for Non-Technical Content

When writing process or educational content, verify:
- [ ] All technical terms are explained when first introduced
- [ ] No acronyms are used without spelling them out first
- [ ] Technical implementation details are removed (unless critical for understanding)
- [ ] Time references are simple and clear ("one week" not "five working days")
- [ ] Revision limits and expectations are explicitly stated
- [ ] The content passes the "grandma test" (would a non-technical person understand this?)
- [ ] Analogies or comparisons are used to explain complex concepts
- [ ] The balance between concise and detailed is appropriate

## Review Checklist

When editing content, verify:
- [ ] All ampersands use correct format (`&` in markdown, `&amp;` in HTML)
- [ ] Em dashes use correct format (`—` in markdown, `&mdash;` in HTML)
- [ ] Hyphenation follows the rules above
- [ ] Contractions are used naturally (I'll, you'll, we'll)
- [ ] Bold and italic formatting is consistent
- [ ] No typos (check common mistakes list)
- [ ] Parallel structure in lists and sentences
- [ ] Periods at end of complete sentences
- [ ] Commas used appropriately for readability
- [ ] Writing maintains conversational, direct tone
- [ ] For process/educational content: Technical terms are explained, no unnecessary acronyms, passes "grandma test"

## Examples

### Good Example (Markdown)
```markdown
I'll send over a **questionnaire** with important questions to help me prepare. After you complete the questionnaire, we'll **schedule our first meeting** to talk about your project in-depth.

Yes, it's **lengthy**—but that's intentional. Many clients find the process itself valuable, and you'll walk away with a copy you can reference at any time, share with stakeholders, or use as a foundation for other projects.
```

### Good Example (HTML)
```html
<p>I'm a <b>web developer</b> who helps <b>businesses</b> create experiences on the web when <b>performance matters most.</b> When your livelihood depends on <b>leads,</b> <b>sales,</b> or <b>search visibility,</b> <i>performance isn't optional</i>&mdash;<b>it's required.</b></p>
```

---

**Remember**: The goal is to maintain a consistent, conversational, and professional tone that feels personal and direct. When in doubt, read the content aloud—it should sound natural and authentic.



