window.INTERVIEW_CATEGORIES = [
  {
    id: "js-fundamentals",
    number: 1,
    name: "JavaScript Fundamentals",
    icon: "code-2",
    description: "Core JS execution context, scope, hoisting, closures, ES6+, promises, and FP.",
    files: [
      {
        id: "js-execution-context",
        fileName: "JavaScript_Execution_Context_Interview_Notes.html",
        title: "JavaScript Execution Context & Call Stack",
        summary: "Detailed breakdown of Memory Creation Phase, Execution Phase, GEC, FEC, Call Stack, and Lexical Environment.",
        tags: ["execution context", "call stack", "gec", "fec", "lexical environment", "scope chain", "memory creation"],
        readTime: "8 min read",
        difficulty: "Core Fundamentals"
      },
      {
        id: "js-hoisting",
        fileName: "JavaScript_Hoisting_Interview_Handbook.html",
        title: "Hoisting & Temporal Dead Zone (TDZ)",
        summary: "Deep dive into variable hoisting (var vs let/const), function hoisting, and TDZ behavior.",
        tags: ["hoisting", "tdz", "var", "let", "const", "temporal dead zone", "functions"],
        readTime: "6 min read",
        difficulty: "Core Fundamentals"
      },
      {
        id: "js-scope",
        fileName: "JavaScript_Scope_Interview_Handbook.html",
        title: "Scope & Scope Chain Mechanics",
        summary: "Understanding Global, Function, Block, and Module scopes with lexical scope chain lookup.",
        tags: ["scope", "global scope", "block scope", "function scope", "scope chain", "lexical scope"],
        readTime: "6 min read",
        difficulty: "Core Fundamentals"
      },
      {
        id: "js-es6",
        fileName: "JavaScript_ES6_Plus_Interview_Handbook.html",
        title: "Modern ES6+ Features & Syntax",
        summary: "Destructuring, spread/rest, arrow functions, template literals, optional chaining, nullish coalescing, and ES modules.",
        tags: ["es6", "arrow functions", "destructuring", "spread", "rest", "optional chaining", "modules"],
        readTime: "9 min read",
        difficulty: "Core Fundamentals"
      },
      {
        id: "js-objects-arrays",
        fileName: "JavaScript_Object_Array_Interview_Handbook.html",
        title: "Objects, Arrays & Memory Immutability",
        summary: "Shallow vs deep cloning, Object.freeze/seal, array mutation vs pure methods, map/reduce/filter.",
        tags: ["objects", "arrays", "deep clone", "shallow clone", "object.freeze", "array methods", "immutability"],
        readTime: "10 min read",
        difficulty: "Intermediate"
      },
      {
        id: "js-fp",
        fileName: "JavaScript_Functional_Programming_Interview_Handbook.html",
        title: "Functional Programming Principles",
        summary: "Pure functions, higher-order functions (HOF), immutability, function composition, and currying.",
        tags: ["fp", "pure functions", "immutability", "hof", "currying", "composition", "side effects"],
        readTime: "9 min read",
        difficulty: "Intermediate"
      },
      {
        id: "js-promises",
        fileName: "JavaScript_Promises_Interview_Handbook.html",
        title: "Promises, Async/Await & Microtasks",
        summary: "Promise states, chaining, Promise.all, Promise.allSettled, Promise.race, async/await error handling.",
        tags: ["promises", "async", "await", "promise.all", "promise.race", "microtask", "error handling"],
        readTime: "10 min read",
        difficulty: "Advanced"
      }
    ]
  },
  {
    id: "browser-internals",
    number: 2,
    name: "Browser Internals",
    icon: "globe",
    description: "Rendering pipeline, event loop, event propagation, storage APIs, and CORS/HTTP.",
    files: [
      {
        id: "browser-rendering-pipeline",
        fileName: "JavaScript_Browser_Rendering_Pipeline_Interview_Handbook.html",
        title: "Browser Rendering Pipeline & CRP",
        summary: "DOM construction, CSSOM, Render Tree, Layout, Paint, and Compositing steps.",
        tags: ["dom", "cssom", "render tree", "layout", "paint", "composite", "critical rendering path"],
        readTime: "10 min read",
        difficulty: "Advanced"
      },
      {
        id: "browser-event-loop",
        fileName: "JavaScript_Event_Loop_Interview_Handbook.html",
        title: "Event Loop, Call Stack & Task Queues",
        summary: "Macrotask queue vs Microtask queue, execution priority, setTimeout vs Promise execution order.",
        tags: ["event loop", "call stack", "microtask", "macrotask", "settimeout", "queue-microtask"],
        readTime: "8 min read",
        difficulty: "Advanced"
      },
      {
        id: "browser-event-propagation",
        fileName: "JavaScript_Event_Propagation_Interview_Handbook.html",
        title: "Event Bubbling, Capturing & Delegation",
        summary: "Event dispatch lifecycle, stopPropagation, preventDefault, and memory-efficient event delegation.",
        tags: ["event bubbling", "event capturing", "event delegation", "stoppropagation", "preventdefault"],
        readTime: "8 min read",
        difficulty: "Intermediate"
      },
      {
        id: "browser-storage",
        fileName: "JavaScript_Browser_Storage_Interview_Handbook.html",
        title: "Browser Storage (LocalStorage, SessionStorage, Cookies, IndexedDB)",
        summary: "Detailed comparison of capacity, lifecycle, security (HttpOnly, SameSite), and use cases.",
        tags: ["localstorage", "sessionstorage", "cookies", "indexeddb", "storage comparison", "secuirty"],
        readTime: "9 min read",
        difficulty: "Intermediate"
      },
      {
        id: "browser-cors-http",
        fileName: "JavaScript_CORS_HTTP_Interview_Handbook.html",
        title: "CORS, HTTP Methods & Preflight Requests",
        summary: "Same-Origin Policy, CORS headers (Access-Control-Allow-Origin), preflight OPTIONS, HTTP status codes.",
        tags: ["cors", "http", "preflight", "options", "same origin", "headers", "status codes"],
        readTime: "11 min read",
        difficulty: "Advanced"
      }
    ]
  },
  {
    id: "react-fundamentals",
    number: 3,
    name: "React Fundamentals",
    icon: "atom",
    description: "Virtual DOM, JSX, components, lifecycle, styling strategies, build tools, and CI/CD.",
    files: [
      {
        id: "react-core-fundamentals",
        fileName: "React_Section_3_Fundamentals_Interview_Handbook.html",
        title: "React Core Fundamentals & Virtual DOM",
        summary: "Virtual DOM architecture, JSX transformation, component tree, props vs state, and key stability.",
        tags: ["react", "virtual dom", "jsx", "components", "props", "state", "reconciliation"],
        readTime: "12 min read",
        difficulty: "Core Fundamentals"
      },
      {
        id: "react-lifecycle",
        fileName: "React_Section_4_Lifecycle_Interview_Handbook.html",
        title: "React Component Lifecycle (Class vs Functional)",
        summary: "Mounting, updating, unmounting, componentDidMount vs useEffect, and error boundary methods.",
        tags: ["lifecycle", "componentdidmount", "componentdidupdate", "componentwillunmount", "mount", "unmount"],
        readTime: "10 min read",
        difficulty: "Intermediate"
      },
      {
        id: "react-styling",
        fileName: "React_Section_12_Styling_Interview_Handbook.html",
        title: "Styling Solutions in React",
        summary: "CSS Modules, Tailwind CSS, Styled-Components, Emotion, MUI, and ThemeProviders.",
        tags: ["styling", "css modules", "tailwind", "styled-components", "emotion", "theme provider"],
        readTime: "11 min read",
        difficulty: "Intermediate"
      },
      {
        id: "react-build-tools",
        fileName: "React_Section_20_Build_Tools_Interview_Handbook.html",
        title: "Build Tools & Bundlers (Webpack, Vite, Babel)",
        summary: "Tree shaking, HMR, code splitting configurations, Vite vs Webpack, and transpilation.",
        tags: ["webpack", "vite", "babel", "bundling", "tree shaking", "hmr", "transpilation"],
        readTime: "12 min read",
        difficulty: "Advanced"
      },
      {
        id: "react-cicd",
        fileName: "React_Section_21_CICD_Interview_Handbook.html",
        title: "CI/CD & Deployment Pipelines for Frontend",
        summary: "Automated testing, GitHub Actions workflows, Docker containers, CDN caching, and zero-downtime deploy.",
        tags: ["cicd", "github actions", "docker", "deployment", "cdn", "pipeline"],
        readTime: "12 min read",
        difficulty: "Advanced"
      }
    ]
  },
  {
    id: "hooks",
    number: 4,
    name: "Hooks (especially useEffect)",
    icon: "anchor",
    description: "Deep dive into useEffect, useState, useRef, useMemo, useCallback, useReducer, and custom hooks.",
    files: [
      {
        id: "react-hooks-master",
        fileName: "React_Section_5_Hooks_Interview_Handbook.html",
        title: "React Hooks Master Guide (useEffect & Beyond)",
        summary: "Comprehensive guide to useEffect stale closures, dependency array pitfalls, cleanup functions, AbortController, useMemo, useCallback, useRef, and custom hook design.",
        tags: ["hooks", "useeffect", "usestate", "usememo", "usecallback", "useref", "usereducer", "stale closure", "custom hooks"],
        readTime: "18 min read",
        difficulty: "Core Masterpiece"
      }
    ]
  },
  {
    id: "rendering-fiber",
    number: 5,
    name: "Rendering & React Fiber",
    icon: "cpu",
    description: "Fiber architecture, reconciliation diffing algorithm, commit phase, and concurrent rendering.",
    files: [
      {
        id: "react-rendering-fiber",
        fileName: "React_Section_6_Rendering_Internals_Interview_Handbook.html",
        title: "React Fiber & Rendering Internals",
        summary: "Fiber node data structure, double buffering, work loop, priority scheduling, automatic batching, and Strict Mode double render rationale.",
        tags: ["fiber", "reconciliation", "tree diffing", "commit phase", "concurrent mode", "batching", "strict mode"],
        readTime: "14 min read",
        difficulty: "Deep Expert"
      }
    ]
  },
  {
    id: "performance-optimization",
    number: 6,
    name: "Performance Optimization",
    icon: "zap",
    description: "Memoization, reflow/repaint mitigation, code splitting, windowing, and Core Web Vitals.",
    files: [
      {
        id: "js-reflow-repaint-debounce-throttle",
        fileName: "JavaScript_Reflow_Repaint_Debounce_Throttle_Interview_Handbook.html",
        title: "Reflow, Repaint, Debounce & Throttle",
        summary: "DOM geometry calculation triggers, layout thrashing prevention, custom debounce and throttle implementations.",
        tags: ["reflow", "repaint", "debounce", "throttle", "layout thrashing", "performance"],
        readTime: "10 min read",
        difficulty: "Intermediate"
      },
      {
        id: "react-performance",
        fileName: "React_Section_7_Performance_Interview_Handbook.html",
        title: "React Performance Optimization Handbook",
        summary: "React.memo, useMemo/useCallback guidelines, React.lazy & Suspense, list virtualization (react-window), and state colocation.",
        tags: ["memoization", "react.memo", "code splitting", "virtualization", "lazy loading", "suspense"],
        readTime: "12 min read",
        difficulty: "Advanced"
      },
      {
        id: "browser-performance-web-vitals",
        fileName: "React_Section_22_Browser_Performance_Interview_Handbook.html",
        title: "Browser Performance & Core Web Vitals",
        summary: "LCP, FID, CLS, INP metrics optimization, Chrome DevTools Profiling, and Lighthouse auditing.",
        tags: ["web vitals", "lcp", "cls", "inp", "lighthouse", "devtools profiler", "performance auditing"],
        readTime: "12 min read",
        difficulty: "Advanced"
      }
    ]
  },
  {
    id: "state-management",
    number: 7,
    name: "State Management (Redux Toolkit, Context, React Query)",
    icon: "database",
    description: "Global state architectures, Redux Toolkit, Context API, React Query, Zustand, and Signals.",
    files: [
      {
        id: "react-state-management",
        fileName: "React_Section_8_State_Management_Interview_Handbook.html",
        title: "State Management Architectures & Libraries",
        summary: "Context API performance pitfalls, Redux Toolkit (slices, thunks, RTK Query), TanStack React Query (caching, invalidation, optimistic updates), Zustand vs Recoil.",
        tags: ["redux", "rtk query", "context api", "react query", "tanstack query", "zustand", "recoil", "signals"],
        readTime: "16 min read",
        difficulty: "Advanced"
      }
    ]
  },
  {
    id: "routing-api",
    number: 8,
    name: "Routing & API Integration",
    icon: "network",
    description: "SPA client-side routing, nested routes, Fetch vs Axios, auth tokens, and cancellation.",
    files: [
      {
        id: "react-routing",
        fileName: "React_Section_10_Routing_Interview_Handbook.html",
        title: "React Router & SPA Client Navigation",
        summary: "React Router v6+, nested layouts, loaders/actions, dynamic route params, protected routes, and scroll restoration.",
        tags: ["react router", "nested routes", "loaders", "protected routes", "useparams", "usenavigate"],
        readTime: "11 min read",
        difficulty: "Intermediate"
      },
      {
        id: "react-api-integration",
        fileName: "React_Section_11_API_Integration_Interview_Handbook.html",
        title: "API Integration, Auth & Axios Interceptors",
        summary: "Fetch API vs Axios, AbortController request cancellation, JWT refresh token rotation pattern, retry logic, and pagination.",
        tags: ["fetch", "axios", "abortcontroller", "jwt", "auth token", "interceptors", "retry", "pagination"],
        readTime: "14 min read",
        difficulty: "Advanced"
      }
    ]
  },
  {
    id: "forms-validation",
    number: 9,
    name: "Forms & Validation",
    icon: "check-square",
    description: "Controlled vs uncontrolled components, React Hook Form, Formik, and schema validation.",
    files: [
      {
        id: "react-forms-validation",
        fileName: "React_Section_9_Forms_Interview_Handbook.html",
        title: "Forms & Validation Strategies in React",
        summary: "Controlled vs Uncontrolled inputs, re-render cost comparison, React Hook Form vs Formik, Yup/Zod schema validation.",
        tags: ["forms", "react hook form", "formik", "yup", "zod", "controlled inputs", "uncontrolled inputs"],
        readTime: "12 min read",
        difficulty: "Intermediate"
      }
    ]
  },
  {
    id: "typescript-react",
    number: 10,
    name: "TypeScript with React",
    icon: "file-code-2",
    description: "Typing component props, event handlers, generics, utility types, and custom hook types.",
    files: [
      {
        id: "react-typescript",
        fileName: "React_Section_15_TypeScript_React_Interview_Handbook.html",
        title: "TypeScript with React Master Guide",
        summary: "React.FC vs return types, prop interface composition, generic components, event typing, ref typing, and utility types (Pick, Omit, Partial).",
        tags: ["typescript", "generics", "interfaces", "props typing", "event handlers", "utility types", "react.fc"],
        readTime: "14 min read",
        difficulty: "Advanced"
      }
    ]
  },
  {
    id: "testing",
    number: 11,
    name: "Testing",
    icon: "shield-check",
    description: "Unit testing, integration testing, React Testing Library, Jest mocks, and Cypress E2E.",
    files: [
      {
        id: "react-testing",
        fileName: "React_Section_14_Testing_Interview_Handbook.html",
        title: "Frontend Testing (Jest, RTL & Cypress)",
        summary: "Testing philosophy (test user behavior, not implementation details), React Testing Library queries, MSW mock service worker, snapshot testing, and Cypress E2E.",
        tags: ["jest", "react testing library", "rtl", "cypress", "unit testing", "mocking", "e2e", "msw"],
        readTime: "13 min read",
        difficulty: "Advanced"
      }
    ]
  },
  {
    id: "accessibility",
    number: 12,
    name: "Accessibility",
    icon: "eye",
    description: "WAI-ARIA roles, accessible forms, focus management, screen readers, and keyboard navigation.",
    files: [
      {
        id: "react-accessibility",
        fileName: "React_Section_13_Accessibility_A11Y_Interview_Handbook.html",
        title: "Web Accessibility (A11Y) & ARIA Guidelines",
        summary: "WCAG standards, WAI-ARIA attributes, focus trapping in modal dialogs, keyboard event listeners, and automated axe-core audits.",
        tags: ["a11y", "aria", "screen readers", "keyboard navigation", "focus trap", "semantic html", "wcag"],
        readTime: "12 min read",
        difficulty: "Intermediate"
      }
    ]
  },
  {
    id: "security",
    number: 13,
    name: "Security",
    icon: "lock",
    description: "XSS prevention, CSRF mitigation, Content Security Policy (CSP), token storage, and sanitization.",
    files: [
      {
        id: "react-security",
        fileName: "React_Section_19_Security_Interview_Handbook.html",
        title: "Frontend Security Best Practices",
        summary: "Cross-Site Scripting (XSS) prevention, dangerouslySetInnerHTML risks, CSRF tokens vs SameSite cookies, Content Security Policy (CSP) headers, and DOMPurify.",
        tags: ["security", "xss", "csrf", "csp", "sanitization", "jwt storage", "cors", "dompurify"],
        readTime: "13 min read",
        difficulty: "Advanced"
      }
    ]
  },
  {
    id: "project-architecture",
    number: 14,
    name: "Project Architecture",
    icon: "layers",
    description: "Modular folder structure, Atomic design, advanced React patterns, and resilience engineering.",
    files: [
      {
        id: "react-project-architecture",
        fileName: "React_Section_16_Project_Architecture_Interview_Handbook.html",
        title: "Frontend Folder Structure & Project Architecture",
        summary: "Feature-based vs Layer-based architecture, Atomic Design principles, barrel exports, design tokens, and modular codebase scaling.",
        tags: ["architecture", "folder structure", "atomic design", "feature-based", "barrel export", "scalability"],
        readTime: "13 min read",
        difficulty: "Advanced"
      },
      {
        id: "react-advanced-patterns",
        fileName: "React_Section_17_Advanced_Patterns_Interview_Handbook.html",
        title: "Advanced React Component Patterns",
        summary: "Higher-Order Components (HOC), Render Props, Compound Components, Headless Components, and Controlled/Uncontrolled pattern.",
        tags: ["hoc", "render props", "compound components", "headless components", "design patterns"],
        readTime: "13 min read",
        difficulty: "Advanced"
      },
      {
        id: "react-error-handling",
        fileName: "React_Section_18_Error_Handling_Interview_Handbook.html",
        title: "Error Boundaries & Resilience Engineering",
        summary: "React Error Boundaries (componentDidCatch, getDerivedStateFromError), fallback UI rendering, global error monitoring (Sentry integration), and retry mechanisms.",
        tags: ["error boundaries", "fallback ui", "suspense", "error handling", "sentry", "resilience"],
        readTime: "13 min read",
        difficulty: "Advanced"
      }
    ]
  },
  {
    id: "system-design",
    number: 15,
    name: "Frontend System Design",
    icon: "layout",
    description: "Designing large-scale web applications, micro-frontends, caching strategies, and asset delivery.",
    files: [
      {
        id: "react-system-design",
        fileName: "React_Section_23_Frontend_System_Design_Interview_Handbook.html",
        title: "Frontend System Design Framework & Architecture",
        summary: "End-to-end framework for system design interviews: requirements analysis, API design, data flow, state architecture, caching layers, CDN optimization, and micro-frontends.",
        tags: ["system design", "scalability", "caching strategy", "cdn", "micro-frontends", "architecture", "interview framework"],
        readTime: "18 min read",
        difficulty: "Expert Level"
      }
    ]
  },
  {
    id: "coding-exercises",
    number: 16,
    name: "Real-world coding exercises",
    icon: "code",
    description: "Hands-on machine coding interview challenges: polyfills, infinite scroll, modal, autocomplete, etc.",
    files: [
      {
        id: "react-coding-problems",
        fileName: "React_Section_24_Interview_Coding_Problems_Handbook.html",
        title: "Machine Coding Interview Problems & Solutions",
        summary: "Complete step-by-step solutions for Debounce/Throttle polyfill, Custom Promise, Infinite Scroll with IntersectionObserver, Autocomplete Search, and Modal Dialog.",
        tags: ["coding problems", "machine coding", "debounce polyfill", "infinite scroll", "autocomplete", "modal", "polyfill"],
        readTime: "15 min read",
        difficulty: "Hands-on Coding"
      }
    ]
  },
  {
    id: "scenario-practice",
    number: 17,
    name: "Scenario-based interview practice",
    icon: "help-circle",
    description: "Why-questions, framework trade-offs, production bug troubleshooting, and scenario questions.",
    files: [
      {
        id: "react-why-questions",
        fileName: "React_Section_25_Why_Questions_Interview_Handbook.html",
        title: "'Why' Questions & Architectural Trade-offs",
        summary: "Deep architectural 'Why' questions: Why React over Vue/Angular? Why Virtual DOM? Why immutable state? Why Server Components?",
        tags: ["why questions", "deep dive", "trade-offs", "framework comparison", "virtual dom rationale"],
        readTime: "16 min read",
        difficulty: "Senior Strategy"
      },
      {
        id: "react-scenario-based",
        fileName: "React_Section_26_Scenario_Based_Interview_Handbook.html",
        title: "Scenario-Based Interview Questions & Troubleshooting",
        summary: "Real-world production scenario questions: Debugging memory leaks, fixing infinite effect loops, handling race conditions in async searches, and optimizing slow renders.",
        tags: ["scenarios", "troubleshooting", "memory leaks", "stale closures", "production bugs", "race conditions"],
        readTime: "13 min read",
        difficulty: "Senior Strategy"
      }
    ]
  }
];
