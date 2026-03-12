## Virtual Scrolling — Sirf Jo Dikhna Chahiye, Wahi Render Karo

1000 items DOM mein daalo toh browser rota hai. Virtual scrolling mein sirf **screen pe jo dikh raha hai wahi render hota hai** — baaki ka sirf illusion hai.

---

### Structure

```mermaid
block-beta
  columns 1
  A["🟦 Container div\n(400px, overflow: scroll)"]
  B["🟨 Spacer div\n(1000 × 40 = 40000px tall)\nposition: relative\n\nScrollbar ko lagta hai poora list hai"]
  C["🟩 Items wrapper div\ntransform: translateY(start × 40px)\n\nSirf ~12 items render hote hain\nLekin sahi jagah pe dikhte hain"]
  A --> B
  B --> C
```

---

### Scroll pe kya hota hai?

```mermaid
sequenceDiagram
  participant U as User
  participant B as Browser
  participant R as React

  U->>B: Scroll karta hai
  B->>R: scroll event fire
  R->>R: scrollTop read karo
  R->>R: start = floor(scrollTop / 40)
  R->>R: end = start + visibleCount + buffer
  R->>B: slice(start, end) render karo
  R->>B: translateY(start × 40px) lagao
  B->>U: Sahi items sahi jagah dikhte hain
```

---

### translateY kyun zaroori hai?

Bina offset ke items hamesha spacer ke **top pe** render hote hain. Scroll karo item 500 pe — items wahi rahenge upar. `translateY(start * itemHeight)` unhe spacer ke andar sahi position pe push karta hai.

---

### Buffer kyun?

Fast scroll pe React ko render karne ka time chahiye. Buffer = thoda aage aur peeche bhi render karo taaki blank flicker na aaye.

---

> **DOM mein sirf ~12 nodes.** Scrollbar ko lagta hai 1000 hain. Dono khush.
