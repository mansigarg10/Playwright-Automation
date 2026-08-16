# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: HandlingDailogues\Frames.spec.js >> Navigation
- Location: tests\HandlingDailogues\Frames.spec.js:12:1

# Error details

```
Test timeout of 20000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=f15e2]:
  - navigation [ref=f15e3]:
    - link "About" [ref=f15e4] [cursor=pointer]:
      - /url: https://about.google/?fg=1&utm_source=google-IN&utm_medium=referral&utm_campaign=hp-header
    - link "Store" [ref=f15e5] [cursor=pointer]:
      - /url: https://store.google.com/IN?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=en-IN
    - generic [ref=f15e7]:
      - generic [ref=f15e8]:
        - link "Gmail" [ref=f15e10] [cursor=pointer]:
          - /url: https://mail.google.com/mail/&ogbl
        - link "Search for Images" [ref=f15e12] [cursor=pointer]:
          - /url: https://www.google.com/imghp?hl=en&ogbl
          - text: Images
      - button "Google apps" [ref=f15e15] [cursor=pointer]
      - link "Sign in" [ref=f15e20] [cursor=pointer]:
        - /url: https://accounts.google.com/ServiceLogin?hl=en&passive=true&continue=https://www.google.com/&ec=futura_exp_og_so_72776762_e
  - img "Google" [ref=f15e23]
  - search [ref=f15e31]:
    - generic [ref=f15e33]:
      - generic [ref=f15e35]:
        - combobox "Search" [active] [ref=f15e42]
        - generic [ref=f15e44]:
          - button "Search by voice" [ref=f15e45] [cursor=pointer]
          - button "Search by image" [ref=f15e48] [cursor=pointer]
      - generic [ref=f15e52]:
        - button "Google Search" [ref=f15e53] [cursor=pointer]
        - button "I'm Feeling Lucky" [ref=f15e54] [cursor=pointer]
  - generic [ref=f15e57]:
    - text: "Google offered in:"
    - link "हिन्दी" [ref=f15e58] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_G_7nnRo2Z2Gudld5VayJPr3eD1Q%3D&hl=hi&source=homepage&sa=X&ved=0ahUKEwipnoaR7-2VAxUGS3ADHZThE2QQ2ZgBCBY
    - link "বাংলা" [ref=f15e59] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_G_7nnRo2Z2Gudld5VayJPr3eD1Q%3D&hl=bn&source=homepage&sa=X&ved=0ahUKEwipnoaR7-2VAxUGS3ADHZThE2QQ2ZgBCBc
    - link "తెలుగు" [ref=f15e60] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_G_7nnRo2Z2Gudld5VayJPr3eD1Q%3D&hl=te&source=homepage&sa=X&ved=0ahUKEwipnoaR7-2VAxUGS3ADHZThE2QQ2ZgBCBg
    - link "मराठी" [ref=f15e61] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_G_7nnRo2Z2Gudld5VayJPr3eD1Q%3D&hl=mr&source=homepage&sa=X&ved=0ahUKEwipnoaR7-2VAxUGS3ADHZThE2QQ2ZgBCBk
    - link "தமிழ்" [ref=f15e62] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_G_7nnRo2Z2Gudld5VayJPr3eD1Q%3D&hl=ta&source=homepage&sa=X&ved=0ahUKEwipnoaR7-2VAxUGS3ADHZThE2QQ2ZgBCBo
    - link "ગુજરાતી" [ref=f15e63] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_G_7nnRo2Z2Gudld5VayJPr3eD1Q%3D&hl=gu&source=homepage&sa=X&ved=0ahUKEwipnoaR7-2VAxUGS3ADHZThE2QQ2ZgBCBs
    - link "ಕನ್ನಡ" [ref=f15e64] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_G_7nnRo2Z2Gudld5VayJPr3eD1Q%3D&hl=kn&source=homepage&sa=X&ved=0ahUKEwipnoaR7-2VAxUGS3ADHZThE2QQ2ZgBCBw
    - link "മലയാളം" [ref=f15e65] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_G_7nnRo2Z2Gudld5VayJPr3eD1Q%3D&hl=ml&source=homepage&sa=X&ved=0ahUKEwipnoaR7-2VAxUGS3ADHZThE2QQ2ZgBCB0
    - link "ਪੰਜਾਬੀ" [ref=f15e66] [cursor=pointer]:
      - /url: https://www.google.com/setprefs?sig=0_G_7nnRo2Z2Gudld5VayJPr3eD1Q%3D&hl=pa&source=homepage&sa=X&ved=0ahUKEwipnoaR7-2VAxUGS3ADHZThE2QQ2ZgBCB4
  - contentinfo [ref=f15e68]:
    - generic [ref=f15e69]: India
    - generic [ref=f15e70]:
      - generic [ref=f15e71]:
        - link "Advertising" [ref=f15e72] [cursor=pointer]:
          - /url: https://www.google.com/intl/en_in/ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1
        - link "Business" [ref=f15e73] [cursor=pointer]:
          - /url: https://www.google.com/services/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1
        - link "How Search works" [ref=f15e74] [cursor=pointer]:
          - /url: https://google.com/search/howsearchworks/?fg=1
      - generic [ref=f15e75]:
        - link "Privacy" [ref=f15e76] [cursor=pointer]:
          - /url: https://policies.google.com/privacy?hl=en-IN&fg=1
        - link "Terms" [ref=f15e77] [cursor=pointer]:
          - /url: https://policies.google.com/terms?hl=en-IN&fg=1
        - button "Settings" [ref=f15e81] [cursor=pointer]
```