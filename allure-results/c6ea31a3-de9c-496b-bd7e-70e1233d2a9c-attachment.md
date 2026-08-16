# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: LoginPageAutomation.spec.js >> Login with valid credentials
- Location: tests\LoginPageAutomation.spec.js:17:1

# Error details

```
Test timeout of 20000ms exceeded.
```

# Page snapshot

```yaml
- generic [ref=e3]:
  - navigation [ref=e5]:
    - generic [ref=e7]:
      - link "Automation Automation Practice":
        - /url: ""
        - generic [ref=e8] [cursor=pointer]:
          - heading "Automation" [level=3] [ref=e9]
          - paragraph [ref=e10]: Automation Practice
    - text: 
    - link "Get Shortlisted by Recruiters - Take QA Skill Assessments on TechSmartHire" [ref=e11] [cursor=pointer]:
      - /url: https://techsmarthire.com/
    - list [ref=e12]:
      - listitem [ref=e13] [cursor=pointer]:
        - button " HOME" [ref=e14]:
          - generic [ref=e15]: 
          - text: HOME
      - listitem
      - listitem [ref=e16] [cursor=pointer]:
        - button " ORDERS" [ref=e17]:
          - generic [ref=e18]: 
          - text: ORDERS
      - listitem [ref=e19] [cursor=pointer]:
        - button " Cart" [ref=e20]:
          - generic [ref=e21]: 
          - text: Cart
      - listitem [ref=e22] [cursor=pointer]:
        - button "Sign Out" [ref=e23]:
          - generic [ref=e24]: 
          - text: Sign Out
  - generic [ref=e25]:
    - heading "Your Orders" [level=1] [ref=e26]
    - table [ref=e27]:
      - rowgroup [ref=e28]:
        - row [ref=e29]:
          - columnheader "Order Id" [ref=e30]
          - columnheader "Product Image" [ref=e31]
          - columnheader "Name" [ref=e32]
          - columnheader "Price" [ref=e33]
          - columnheader "Ordered Date" [ref=e34]
          - columnheader "View" [ref=e35]
          - columnheader "Delete" [ref=e36]
      - rowgroup [ref=e37]:
        - row [ref=e38]:
          - rowheader "6a64b15185b8849b490c9c4d" [ref=e39]
          - cell [ref=e40]
          - cell "ADIDAS ORIGINAL" [ref=e42]
          - cell "$ 11500" [ref=e43]
          - cell "Sat Jul 25" [ref=e44]
          - cell [ref=e45]:
            - button "View" [ref=e46] [cursor=pointer]
          - cell [ref=e47]:
            - button "Delete" [ref=e48] [cursor=pointer]
        - row [ref=e49]:
          - rowheader "6a64b14285b8849b490c9c17" [ref=e50]
          - cell [ref=e51]
          - cell "ADIDAS ORIGINAL" [ref=e53]
          - cell "$ 11500" [ref=e54]
          - cell "Sat Jul 25" [ref=e55]
          - cell [ref=e56]:
            - button "View" [ref=e57] [cursor=pointer]
          - cell [ref=e58]:
            - button "Delete" [ref=e59] [cursor=pointer]
        - row [ref=e60]:
          - rowheader "6a64b12c85b8849b490c9bd8" [ref=e61]
          - cell [ref=e62]
          - cell "ADIDAS ORIGINAL" [ref=e64]
          - cell "$ 11500" [ref=e65]
          - cell "Sat Jul 25" [ref=e66]
          - cell [ref=e67]:
            - button "View" [ref=e68] [cursor=pointer]
          - cell [ref=e69]:
            - button "Delete" [ref=e70] [cursor=pointer]
        - row [ref=e71]:
          - rowheader "6a64b0fd85b8849b490c9a85" [ref=e72]
          - cell [ref=e73]
          - cell "ADIDAS ORIGINAL" [ref=e75]
          - cell "$ 11500" [ref=e76]
          - cell "Sat Jul 25" [ref=e77]
          - cell [ref=e78]:
            - button "View" [ref=e79] [cursor=pointer]
          - cell [ref=e80]:
            - button "Delete" [ref=e81] [cursor=pointer]
        - row [ref=e82]:
          - rowheader "6a6497f785b8849b490c6284" [ref=e83]
          - cell [ref=e84]
          - cell "ADIDAS ORIGINAL" [ref=e86]
          - cell "$ 11500" [ref=e87]
          - cell "Sat Jul 25" [ref=e88]
          - cell [ref=e89]:
            - button "View" [ref=e90] [cursor=pointer]
          - cell [ref=e91]:
            - button "Delete" [ref=e92] [cursor=pointer]
        - row [ref=e93]:
          - rowheader "6a6497dc85b8849b490c6238" [ref=e94]
          - cell [ref=e95]
          - cell "ADIDAS ORIGINAL" [ref=e97]
          - cell "$ 11500" [ref=e98]
          - cell "Sat Jul 25" [ref=e99]
          - cell [ref=e100]:
            - button "View" [ref=e101] [cursor=pointer]
          - cell [ref=e102]:
            - button "Delete" [ref=e103] [cursor=pointer]
        - row [ref=e104]:
          - rowheader "6a6497c285b8849b490c6194" [ref=e105]
          - cell [ref=e106]
          - cell "ADIDAS ORIGINAL" [ref=e108]
          - cell "$ 11500" [ref=e109]
          - cell "Sat Jul 25" [ref=e110]
          - cell [ref=e111]:
            - button "View" [ref=e112] [cursor=pointer]
          - cell [ref=e113]:
            - button "Delete" [ref=e114] [cursor=pointer]
        - row [ref=e115]:
          - rowheader "6a64972685b8849b490c5f01" [ref=e116]
          - cell [ref=e117]
          - cell "ADIDAS ORIGINAL" [ref=e119]
          - cell "$ 11500" [ref=e120]
          - cell "Sat Jul 25" [ref=e121]
          - cell [ref=e122]:
            - button "View" [ref=e123] [cursor=pointer]
          - cell [ref=e124]:
            - button "Delete" [ref=e125] [cursor=pointer]
    - generic [ref=e126]: "* If orders Will be more than 7 your last order will get deleted"
  - generic [ref=e128]:
    - button "Go Back to Shop" [ref=e129] [cursor=pointer]
    - button "Go Back to Cart" [ref=e130] [cursor=pointer]
```