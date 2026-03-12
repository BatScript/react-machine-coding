# padhai-likhai / machine-coding

A personal playground for practising React machine coding problems from scratch — no libraries doing the heavy lifting, just raw React concepts.

Each problem lives in `src/containers/` and has:
- The actual implementation
- A `Concept.md` with theory explained in Hinglish
- A bottom drawer (click the `📖` button) to read the theory or browse the source code in-app

## Problems

| Problem | Concepts |
|---|---|
| OTP Input | `useRef` array, imperative focus, keyboard navigation |
| Pointer Tracker | `useEffect` + browser events, `pointer-events-none`, fixed positioning |
| Recursive Directory | Recursive React components, independent local state per node |
| Virtual Scrolling | Spacer div, `translateY` offset, scroll-driven windowing |
| Pagination | — |
| Drag and Drop | — |

## Stack

- React + TypeScript + Vite
- Tailwind CSS + shadcn/ui
- TanStack Router (file-based routing)
