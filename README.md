# Claude AI – Bench Sales Revolution Presentation

An interactive, responsive, and modern web-based presentation showcasing how **Claude AI** and **Claude Code** can transform and automate Bench Sales Operations. 

This project provides recruiters and bench sales professionals with a high-fidelity visual walkthrough of an AI-powered pipeline designed to increase submission rates, optimize candidate profiles, and automate vendor communications.

---

## 🚀 Interactive Slides & Presentation Structure

The presentation contains **12 Key Steps** mapped across the bench sales lifecycle, organized into three core phases: **Preparation**, **Execution**, and **Analytics**.

### Phase 1: Preparation
1. **Consultant Onboarding (Step 1)**: How to leverage *Claude Projects* with persistent memory to maintain a dedicated database of consultant details (e.g., location, visa status, skills, target rate).
2. **Resume Optimization (Step 2)**: Visual before-and-after demonstration of Claude transforming raw resumes into ATS-optimized, client-ready, and grammatically perfect profiles.

### Phase 2: Execution
3. **Daily Job Search (Step 3)**: A simulated terminal window running `Claude Code` to query and scan job boards (Dice, Monster, LinkedIn, CareerBuilder).
4. **Preference Validation (Step 4)**: A funnel visualization depicting how Claude automatically filters opportunities by work authorization, minimum rate, hybrid/remote mode, and location.
5. **Resume vs JD Matching (Step 5)**: A matching dashboard that shows match scores and highlights whether a candidate should be submitted immediately.
6. **Resume Customization (Step 6)**: Visual representation of Claude tailoring the professional summary, reordering skills, and highlighting relevant projects dynamically to match specific JD keywords.
7. **Submission Summary (Step 7)**: A clean copy-to-clipboard submission card designed to copy candidate highlights straight to CEIPAL or other ATS.
8. **Marketing Emails (Step 8)**: Template showing Claude generating personalized marketing emails for vendors.
9. **Vendor Communication (Step 9)**: An interactive timeline illustrating automated draft generation for marketing, follow-ups, interview scheduling, rate negotiation, and post-interview thank you notes.
10. **Interview Preparation (Step 10)**: Tabbed questions switcher categorized into *Technical*, *Behavioral*, and *Project-specific* prep.

### Phase 3: Analytics
11. **Submission Tracking (Step 11)**: A detailed, tabular view of active candidate submissions, tracking client name, vendor, status (Interview, Submitted, Shortlisted, Rejected), and follow-up dates.
12. **Daily Productivity Report (Step 12)**: A dashboard showing key performance indicators (KPIs) like submissions made today, pending follow-ups, scheduled interviews, and high-priority action alerts.

---

## 🛠️ Technology Stack

This application is built with zero external dependencies to ensure fast loading times and maximum compatibility:

*   **HTML5**: Semantic markup structuring all 15 presentation slides.
*   **Vanilla CSS3**: 
    *   Responsive layouts using Flexbox and CSS Grid.
    *   Modern glassmorphic UI components using backdrop filters.
    *   Transitions and hardware-accelerated animations (slide transitions, typing terminal simulations, morphing cards).
    *   Support for global CSS variables enabling instant light/dark mode toggling.
*   **ES6 JavaScript**:
    *   Custom state machine for keyboard, mouse wheel, touch swipe, and click navigation.
    *   Dynamic particle generator for background visual elements.
    *   Count-up animation timers for data numbers.
    *   Event handlers for interactive UI elements (tabs, copy button, theme toggler).

---

## 🎨 Theme Support

The presentation includes a global **Theme Toggle** supporting two customized palettes:
*   **Dark Mode (Default)**: Sleek, high-contrast presentation theme with deep tones (`#1E1E1E`) and vibrant accent colors.
*   **Light Mode**: A warm Anthropic-style cream background theme (`#F4F4F0`) for readability in well-lit environments.

---

## 📁 File Structure

```files
├── index.html   # Main entrypoint containing the slideshow markup and slides.
├── script.js    # Interactive features, navigation handlers, and state management.
├── styles.css   # Main stylesheet containing layout, themes, and animations.
├── LICENSE      # License terms for the codebase.
└── README.md    # Project documentation and manual.
```

---

## 📖 How to Run Locally

Since this is a client-side vanilla web application, you do not need to install any compilers or packages:

1. Clone this repository to your local machine:
   ```bash
   git clone https://github.com/bvk1729/aipoweredjobhunt.git
   ```
2. Navigate to the project folder:
   ```bash
   cd aipoweredjobhunt
   ```
3. Open `index.html` in any modern web browser (Chrome, Safari, Edge, Firefox):
   * Simply double-click the file in your explorer.
   * Or run a simple local server if preferred:
     ```bash
     # Using Python
     python -m http.server 8000
     
     # Using Node.js
     npx http-server
     ```

---

## ⌨️ Controls & Navigation

*   **Next Slide**: Press `Right Arrow (→)`, `Spacebar`, Scroll Down, swipe left, or click the right navigation arrow on screen.
*   **Previous Slide**: Press `Left Arrow (←)`, Scroll Up, swipe right, or click the left navigation arrow on screen.
*   **Jump to Start**: Press the `Home` key.
*   **Jump to End**: Press the `End` key.
*   **Direct Jump**: Click any of the pagination dots at the top/center of the screen.

---

## 📄 License

This project is licensed under the **MIT License**. See the [LICENSE](file:///c:/Users/Colab/OneDrive/Desktop/Claude%20AI%20Adoption%20Presentaion/Claude%20AI%20Adoption%20Presentaion/LICENSE) file for the full terms and details.