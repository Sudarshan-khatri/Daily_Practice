from fpdf import FPDF

class PDF(FPDF):
    def header(self):
        self.set_font('Arial', 'B', 14)
        self.set_text_color(0, 102, 204)
        self.cell(0, 10, 'JavaScript Roadmap for Frontend Development (with React)', ln=True, align='C')
        self.ln(5)

    def chapter_title(self, title):
        self.set_font('Arial', 'B', 12)
        self.set_text_color(0)
        self.cell(0, 10, title, ln=True)
        self.ln(2)

    def chapter_body(self, body):
        self.set_font('Arial', '', 11)
        self.set_text_color(50)
        self.multi_cell(0, 8, body)
        self.ln()

sections = [
    ("1. JavaScript Fundamentals (Beginner Level)", """
- let, const, and var (scoping rules)
- Data Types: String, Number, Boolean, null, undefined, Symbol, BigInt
- Operators: Arithmetic, Comparison, Logical, Ternary
- Control Flow: if, else, switch, loops (for, while, do...while, for...of, for...in)
- Functions: declarations, expressions, arrow functions, parameters, default values
    """),
    ("2. DOM & Events", """
- DOM methods: querySelector, getElementById, createElement, appendChild
- Properties: innerHTML, textContent, style
- Event Handling: addEventListener, click, submit, keydown, change
- Event object: e.target, e.preventDefault()
    """),
    ("3. Advanced JavaScript", """
- Arrays & Methods: push, pop, shift, unshift, map, filter, reduce, forEach, find, some, every
- Objects: creation, Object.keys, values, entries
- ES6+ Features: Destructuring, Spread/Rest, Template literals, Optional chaining, Nullish coalescing
    """),
    ("4. Functions & Scope", """
- Closures: function retains access to outer scope
- Hoisting: variable and function hoisting
- Scope: global, local, block-level, lexical scope
    """),
    ("5. Asynchronous JavaScript", """
- Callbacks: functions passed as arguments
- Promises: new Promise, .then(), .catch()
- Async/Await: cleaner async code, try/catch
- fetch API: JSON handling, status codes
    """),
    ("6. JavaScript in the Browser", """
- Window & Document: window.alert, location, console.log
- Storage: localStorage.setItem, getItem, sessionStorage
    """),
    ("7. Object-Oriented Programming", """
- Constructor functions, Prototypes
- Classes: class, constructor, extends, super
- 'this' keyword context
    """),
    ("8. Functional Programming Concepts", """
- Pure functions, Immutability
- Higher-order functions, First-class functions
- Currying (optional)
    """),
    ("Suggested Learning Timeline", """
Week 1–2: Basics → Variables, Types, Loops, Functions
Week 3–4: DOM, Events, Arrays/Objects, Advanced ES6
Week 5–6: Async JS (Promises, Fetch, Async/Await)
Week 7+: OOP, Functional Concepts, Browser APIs
    """),
    ("Practice Platforms", """
- JavaScript.info — In-depth explanations
- FreeCodeCamp — Structured tutorials
- Exercism.io — Code practice
- LeetCode — Algorithm challenges
- CodeWars — Short JS problems
    """)
]

pdf = PDF()
pdf.set_auto_page_break(auto=True, margin=15)
pdf.add_page()

for title, body in sections:
    pdf.chapter_title(title)
    pdf.chapter_body(body)

pdf.output("javascript_roadmap_frontend_react.pdf")
