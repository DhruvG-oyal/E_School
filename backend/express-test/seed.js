require('dotenv').config();
const mongoose = require('mongoose');
const { Card } = require('./models/card.model');
const { Content } = require('./models/content.model');

const MONGO_URL = process.env.MONGODB_URL || 'mongodb://127.0.0.1:27017/eschool';

const cards = [
  {
    title: "JavaScript Fundamentals",
    description: "Master the core concepts of JavaScript — variables, functions, closures, async/await, and the event loop. Build a solid foundation for modern web development.",
    tags: ["JavaScript", "Web", "Beginner"],
    image: "https://upload.wikimedia.org/wikipedia/commons/6/6a/JavaScript-logo.png",
    id: "javascript-fundamentals"
  },
  {
    title: "React.js Complete Guide",
    description: "Learn React from scratch — components, hooks, state management with Zustand, routing with React Router, and building production-ready SPAs.",
    tags: ["React", "Frontend", "JavaScript"],
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg",
    id: "react-complete-guide"
  },
  {
    title: "Node.js & Express Backend",
    description: "Build scalable REST APIs with Node.js and Express. Covers routing, middleware, authentication with JWT, and connecting to MongoDB with Mongoose.",
    tags: ["Node.js", "Backend", "API"],
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Node.js_logo.svg",
    id: "nodejs-express-backend"
  },
  {
    title: "Data Structures & Algorithms",
    description: "Crack coding interviews with confidence. Deep dive into arrays, linked lists, trees, graphs, sorting algorithms, and dynamic programming with real examples.",
    tags: ["DSA", "Algorithms", "Interview"],
    image: "https://cdn-icons-png.flaticon.com/512/2103/2103633.png",
    id: "data-structures-algorithms"
  },
  {
    title: "MongoDB & Mongoose",
    description: "Learn NoSQL database design with MongoDB. Covers CRUD operations, schema design, indexing, aggregation pipelines, and integration with Express apps.",
    tags: ["MongoDB", "Database", "Backend"],
    image: "https://www.svgrepo.com/show/331488/mongodb.svg",
    id: "mongodb-mongoose"
  },
  {
    title: "System Design Fundamentals",
    description: "Understand how to design large-scale distributed systems. Covers load balancing, caching, databases, microservices, CAP theorem, and real-world case studies.",
    tags: ["System Design", "Architecture", "Advanced"],
    image: "https://cdn-icons-png.flaticon.com/512/1055/1055687.png",
    id: "system-design-fundamentals"
  }
];

const contentData = [
  // ─── JavaScript Fundamentals ───────────────────────────────────────────────
  {
    id: "javascript-fundamentals",
    length: 3,
    content: [
      {
        maintitle: "Variables & Data Types",
        title: [
          "var, let, and const",
          "Primitive Data Types",
          "Code Example: Variable Declarations"
        ],
        description: [
          "JavaScript provides three ways to declare variables. 'var' is function-scoped and hoisted, making it prone to bugs in larger codebases. 'let' and 'const' are block-scoped and introduced in ES6.@#'const' is used for values that should not be reassigned, while 'let' is used when the variable may change. Prefer 'const' by default and only use 'let' when reassignment is needed.",
          "JavaScript has six primitive types: String, Number, Boolean, null, undefined, and Symbol. Primitives are immutable — when you assign a primitive to another variable, a copy of the value is made.@#Objects, arrays, and functions are reference types. They are stored on the heap and variables hold a reference (pointer) to the memory location, not the actual value.",
          "code var name = 'Alice';\nlet age = 25;\nconst PI = 3.14159;\n\nconsole.log(typeof name);   // 'string'\nconsole.log(typeof age);    // 'number'\nconsole.log(typeof PI);     // 'number'\nconsole.log(typeof true);   // 'boolean'\nconsole.log(typeof null);   // 'object' (historical quirk)\nconsole.log(typeof undefined); // 'undefined'"
        ],
        image: ["", "", ""]
      },
      {
        maintitle: "Functions & Closures",
        title: [
          "Function Declarations vs Arrow Functions",
          "Understanding Closures",
          "Code Example: Closure in Practice"
        ],
        description: [
          "Function declarations are hoisted, meaning you can call them before they appear in code. Function expressions and arrow functions are not hoisted. Arrow functions also differ in that they do not have their own 'this' binding — they inherit 'this' from their surrounding lexical scope.@#Arrow functions are ideal for callbacks and methods that don't need their own 'this'. Use regular functions when you need 'this' to refer to the calling object, such as in object methods or constructors.",
          "A closure is created when a function retains access to variables from its outer (enclosing) scope even after that outer function has returned. This is one of JavaScript's most powerful features.@#Closures are used to create private variables, factory functions, and in patterns like memoization. Every function in JavaScript forms a closure over the variables in scope at the time it was created.",
          "code function makeCounter() {\n  let count = 0;  // private variable via closure\n  return {\n    increment: () => ++count,\n    decrement: () => --count,\n    getCount:  () => count\n  };\n}\n\nconst counter = makeCounter();\nconsole.log(counter.increment()); // 1\nconsole.log(counter.increment()); // 2\nconsole.log(counter.decrement()); // 1\nconsole.log(counter.getCount());  // 1"
        ],
        image: ["", "", ""]
      },
      {
        maintitle: "Async JavaScript",
        title: [
          "Callbacks & the Event Loop",
          "Promises",
          "Code Example: async/await"
        ],
        description: [
          "JavaScript is single-threaded but handles asynchronous work through the event loop. When an async operation (like a network request or timer) completes, its callback is placed in the task queue and executed once the call stack is empty.@#Callbacks were the original pattern for async code, but deeply nested callbacks lead to 'callback hell' — code that is hard to read and maintain. Promises and async/await were introduced to solve this.",
          "A Promise represents a value that will be available in the future. It can be in one of three states: pending, fulfilled, or rejected. You chain .then() for success and .catch() for errors.@#Promises allow you to write async code in a more linear, readable fashion. Promise.all() lets you run multiple async tasks in parallel and wait for all of them to resolve.",
          "code async function fetchUserData(userId) {\n  try {\n    const response = await fetch(`https://api.example.com/users/${userId}`);\n    if (!response.ok) throw new Error('Network response was not ok');\n    const user = await response.json();\n    console.log('User:', user.name);\n    return user;\n  } catch (error) {\n    console.error('Failed to fetch user:', error.message);\n  }\n}\n\n// Run multiple requests in parallel\nconst [user1, user2] = await Promise.all([\n  fetchUserData(1),\n  fetchUserData(2)\n]);"
        ],
        image: ["", "", ""]
      }
    ]
  },

  // ─── React.js Complete Guide ────────────────────────────────────────────────
  {
    id: "react-complete-guide",
    length: 3,
    content: [
      {
        maintitle: "Components & JSX",
        title: [
          "Functional Components",
          "JSX Syntax",
          "Props & Component Communication"
        ],
        description: [
          "React applications are built from components — independent, reusable pieces of UI. Functional components are plain JavaScript functions that accept props and return JSX. They replaced class components as the standard after hooks were introduced in React 16.8.@#A component's name must start with a capital letter so React can distinguish it from regular HTML elements. Components can be composed together, with parent components rendering child components to build complex UIs.",
          "JSX is a syntax extension for JavaScript that looks like HTML but compiles to React.createElement() calls. It lets you describe UI structure directly inside your JavaScript code.@#JSX requires all tags to be closed (including self-closing like <img />), uses 'className' instead of 'class', and allows embedding JavaScript expressions inside curly braces {}. JSX attributes use camelCase naming conventions.",
          "Props (properties) are how parent components pass data down to child components. Props are read-only — a child must never modify its own props.@#You can pass any JavaScript value as a prop: strings, numbers, objects, arrays, or even functions. Passing a function as a prop (a callback) is the standard pattern for child-to-parent communication in React."
        ],
        image: ["", "", ""]
      },
      {
        maintitle: "Hooks - useState & useEffect",
        title: [
          "Managing State with useState",
          "Side Effects with useEffect",
          "Code Example: Fetching Data with Hooks"
        ],
        description: [
          "useState is the most fundamental React hook. It returns a state variable and a setter function. When the setter is called with a new value, React re-renders the component with the updated state.@#State updates in React are asynchronous and batched for performance. Always use the functional update form (prev => prev + 1) when the new state depends on the previous state to avoid stale closure bugs.",
          "useEffect lets you perform side effects in function components — things like data fetching, subscriptions, or manually updating the DOM. It runs after the component renders.@#The dependency array controls when the effect runs: an empty array means run once on mount, listing variables means run whenever those variables change. Always return a cleanup function from effects that set up subscriptions or timers to avoid memory leaks.",
          "code import { useState, useEffect } from 'react';\n\nfunction UserProfile({ userId }) {\n  const [user, setUser] = useState(null);\n  const [loading, setLoading] = useState(true);\n\n  useEffect(() => {\n    setLoading(true);\n    fetch(`/api/users/${userId}`)\n      .then(res => res.json())\n      .then(data => {\n        setUser(data);\n        setLoading(false);\n      });\n  }, [userId]); // re-run when userId changes\n\n  if (loading) return <p>Loading...</p>;\n  return <h1>Hello, {user.name}</h1>;\n}"
        ],
        image: ["", "", ""]
      },
      {
        maintitle: "React Router & Navigation",
        title: [
          "Setting Up React Router",
          "useNavigate & Programmatic Navigation",
          "useParams & Dynamic Routes"
        ],
        description: [
          "React Router v6 is the standard routing library for React SPAs. Wrap your app in <BrowserRouter>, then define routes using <Routes> and <Route> components. The 'path' prop sets the URL pattern and 'element' sets the component to render.@#Nested routes allow you to build layouts where a parent route renders shared UI (like a navbar) and child routes render page-specific content inside an <Outlet /> component.",
          "The useNavigate hook returns a navigate function that lets you redirect users programmatically — after a form submission, login, or any event.@#Pass a path string to navigate to a new route, or pass -1 to go back. You can also pass a second argument with { replace: true } to replace the current history entry instead of pushing a new one.",
          "Dynamic route segments are defined with a colon prefix in the path (e.g., /courses/:courseId). The useParams hook extracts these URL parameters as an object inside the matched component.@#Always validate and sanitize params before using them in API calls. If a resource is not found for a given param, render a 404 component or redirect with useNavigate."
        ],
        image: ["", "", ""]
      }
    ]
  },

  // ─── Node.js & Express Backend ──────────────────────────────────────────────
  {
    id: "nodejs-express-backend",
    length: 3,
    content: [
      {
        maintitle: "Setting Up Express",
        title: [
          "Installation & Basic Server",
          "Middleware",
          "Project Structure Best Practices"
        ],
        description: [
          "Express is a minimal and flexible Node.js web framework. Install it with 'npm install express'. A basic server requires just a few lines: import express, create an app instance, define routes, and call app.listen().@#Node.js uses the CommonJS module system (require/exports) by default, though ES Modules (import/export) are also supported with .mjs files or \"type\": \"module\" in package.json.",
          "Middleware functions are the backbone of Express. They have access to the request (req), response (res), and a next() function. Middleware can execute code, modify req/res, end the request cycle, or call next() to pass control to the next middleware.@#Express provides built-in middleware like express.json() for parsing JSON bodies and express.static() for serving static files. Third-party middleware like 'cors', 'helmet', and 'morgan' are commonly added for security and logging.",
          "A scalable Express project separates concerns into distinct folders: routes/ for route definitions, controllers/ for business logic, models/ for database schemas, and middleware/ for custom middleware.@#Keep route handlers thin — they should only extract data from req and call a controller function. Controllers handle logic and call service/model methods. This separation makes testing and maintenance much easier."
        ],
        image: ["", "", ""]
      },
      {
        maintitle: "REST API Design",
        title: [
          "HTTP Methods & Resource Naming",
          "Controllers & Route Organization",
          "Code Example: CRUD Routes"
        ],
        description: [
          "RESTful APIs use HTTP methods to express intent: GET retrieves resources, POST creates new ones, PUT/PATCH updates them, and DELETE removes them. Resource names in URLs should be nouns in plural form (e.g., /users, /courses).@#Use HTTP status codes correctly: 200 for success, 201 for created, 400 for bad request, 401 for unauthorized, 404 for not found, and 500 for server errors. This allows API consumers to handle responses predictably.",
          "Group related routes into separate Router files using express.Router(). Each router handles one resource (e.g., userRouter handles all /users routes). Mount routers on the main app with app.use().@#Controllers are functions that handle the logic for each route. Keeping them separate from route definitions keeps code organized and makes unit testing straightforward.",
          "code // routes/course.routes.js\nconst router = require('express').Router();\nconst ctrl = require('../controllers/course.controller');\n\nrouter.get('/',         ctrl.getAllCourses);\nrouter.get('/:id',      ctrl.getCourseById);\nrouter.post('/',        ctrl.createCourse);\nrouter.put('/:id',      ctrl.updateCourse);\nrouter.delete('/:id',   ctrl.deleteCourse);\n\nmodule.exports = router;\n\n// controllers/course.controller.js\nexports.getAllCourses = async (req, res) => {\n  try {\n    const courses = await Course.find();\n    res.json(courses);\n  } catch (err) {\n    res.status(500).json({ error: err.message });\n  }\n};"
        ],
        image: ["", "", ""]
      },
      {
        maintitle: "JWT Authentication",
        title: [
          "How JWT Works",
          "Generating & Verifying Tokens",
          "Protecting Routes with Middleware"
        ],
        description: [
          "JSON Web Tokens (JWT) are a compact, self-contained way to transmit authentication information between client and server. A JWT consists of three Base64-encoded parts: header (algorithm), payload (claims like userId), and signature.@#Because the server signs the token with a secret key, it can verify the token's authenticity without storing session state. This makes JWTs ideal for stateless, scalable APIs.",
          "Use the 'jsonwebtoken' npm package to generate and verify tokens. Call jwt.sign(payload, secret, options) after a successful login to create a token. Set a short expiry (e.g., '7d') and refresh tokens for long-lived sessions.@#Never store sensitive data in the JWT payload — it is Base64 encoded, not encrypted, and can be decoded by anyone who has the token. Only store non-sensitive identifiers like userId.",
          "Create an auth middleware that reads the token from the Authorization header (Bearer token format), verifies it with jwt.verify(), and attaches the decoded payload to req.user.@#Apply the middleware to protected routes using router.use(authMiddleware) or by passing it as an argument to individual route handlers. Return 401 Unauthorized immediately if the token is missing or invalid."
        ],
        image: ["", "", ""]
      }
    ]
  },

  // ─── Data Structures & Algorithms ───────────────────────────────────────────
  {
    id: "data-structures-algorithms",
    length: 3,
    content: [
      {
        maintitle: "Arrays & Strings",
        title: [
          "Array Fundamentals & Common Operations",
          "The Two-Pointer Technique",
          "Code Example: Two-Sum Problem"
        ],
        description: [
          "Arrays store elements in contiguous memory, giving O(1) access by index. Common operations include push/pop (O(1) amortized), shift/unshift (O(n)), and splice (O(n)). Understanding time complexity of these operations is critical for writing efficient code.@#String problems often reduce to array problems. In JavaScript, convert a string to an array with split('') or the spread operator [...str], manipulate it, then join back with join('').",
          "The two-pointer technique uses two indices that move through an array — often from both ends toward the center or at different speeds. It solves many problems in O(n) time that would otherwise require O(n²) with nested loops.@#Common applications: checking if a string is a palindrome, finding pairs that sum to a target, removing duplicates from a sorted array, and the 'container with most water' problem.",
          "code // Two-Sum using a hash map — O(n) time, O(n) space\nfunction twoSum(nums, target) {\n  const seen = new Map(); // value -> index\n  for (let i = 0; i < nums.length; i++) {\n    const complement = target - nums[i];\n    if (seen.has(complement)) {\n      return [seen.get(complement), i];\n    }\n    seen.set(nums[i], i);\n  }\n  return [];\n}\n\nconsole.log(twoSum([2, 7, 11, 15], 9)); // [0, 1]"
        ],
        image: ["", "", ""]
      },
      {
        maintitle: "Linked Lists",
        title: [
          "Singly Linked List Structure",
          "Traversal & Common Patterns",
          "Code Example: Reversing a Linked List"
        ],
        description: [
          "A linked list is a linear data structure where each node stores a value and a pointer to the next node. Unlike arrays, linked lists do not store elements in contiguous memory — each node can be anywhere in the heap.@#Advantages: O(1) insertion and deletion at the head (no shifting). Disadvantages: O(n) access by index, extra memory for pointers, and poor cache locality compared to arrays.",
          "Always handle edge cases first: an empty list (head is null) and a single-node list. Use a 'dummy head' node to simplify logic when the head itself might change.@#The fast/slow pointer (Floyd's cycle detection) pattern is essential: a fast pointer moves two nodes at a time while a slow pointer moves one. Use it to detect cycles, find the middle of a list, or find the nth node from the end.",
          "code class ListNode {\n  constructor(val, next = null) {\n    this.val = val;\n    this.next = next;\n  }\n}\n\nfunction reverseList(head) {\n  let prev = null;\n  let curr = head;\n  while (curr !== null) {\n    const nextNode = curr.next; // save next\n    curr.next = prev;           // reverse pointer\n    prev = curr;                // advance prev\n    curr = nextNode;            // advance curr\n  }\n  return prev; // new head\n}\n\n// Build: 1 -> 2 -> 3 -> null\nconst head = new ListNode(1, new ListNode(2, new ListNode(3)));\nconst reversed = reverseList(head); // 3 -> 2 -> 1 -> null"
        ],
        image: ["", "", ""]
      },
      {
        maintitle: "Binary Search & Sorting",
        title: [
          "Binary Search",
          "Merge Sort",
          "Time & Space Complexity Reference"
        ],
        description: [
          "Binary search finds a target in a sorted array in O(log n) time by repeatedly halving the search space. The key invariant: the target, if it exists, is always within the current [left, right] window.@#Binary search extends beyond simple lookups: use it to find the first/last occurrence of a value, search in rotated sorted arrays, or find a minimum in a monotonically changing function (binary search on the answer).",
          "Merge sort is a divide-and-conquer algorithm with a guaranteed O(n log n) time complexity. It recursively splits the array in half, sorts each half, then merges the two sorted halves.@#Merge sort is stable (preserves relative order of equal elements) and predictable, making it a great default for general sorting. Its downside is O(n) extra space for the merge step. JavaScript's built-in Array.sort() uses TimSort, a hybrid of merge sort and insertion sort.",
          "Key complexities to memorize: Array access O(1), Binary search O(log n), Linear scan O(n), Merge/Quick sort O(n log n), Nested loops O(n²).@#Space complexity: most in-place algorithms are O(1) or O(log n) for recursion stack. Merge sort is O(n). Hash maps used for lookup optimizations are O(n) space. Always analyze both time and space when evaluating solutions."
        ],
        image: ["", "", ""]
      }
    ]
  },

  // ─── MongoDB & Mongoose ─────────────────────────────────────────────────────
  {
    id: "mongodb-mongoose",
    length: 3,
    content: [
      {
        maintitle: "MongoDB Basics",
        title: [
          "Documents & Collections",
          "CRUD Operations",
          "Indexes & Performance"
        ],
        description: [
          "MongoDB is a document-oriented NoSQL database. Data is stored as BSON documents (Binary JSON) in collections — analogous to rows in a table and tables in a relational database, but without a fixed schema.@#Each document has a unique '_id' field (ObjectId by default). Documents in the same collection can have different fields, making MongoDB flexible for evolving data models. However, a consistent schema is still good practice.",
          "The four CRUD operations in MongoDB: insertOne/insertMany to create, find/findOne to read, updateOne/updateMany (with $set, $push, etc.) to modify, and deleteOne/deleteMany to remove.@#MongoDB's query language uses JSON-like filter objects. Operators like $gt, $lt, $in, $and, $or allow powerful filtering. The .find() cursor is lazy — use .toArray() or iterate with async for...of to fetch results.",
          "Indexes dramatically speed up read queries by allowing MongoDB to find documents without scanning the entire collection. Without an index, every query is a full collection scan (O(n)).@#Create indexes on fields used in filter, sort, or lookup operations. Compound indexes cover multiple fields. However, each index slows down writes slightly and uses memory — only index fields that are frequently queried."
        ],
        image: ["", "", ""]
      },
      {
        maintitle: "Mongoose Schemas & Models",
        title: [
          "Defining Schemas",
          "Validation & Middleware",
          "Code Example: User Schema"
        ],
        description: [
          "Mongoose adds a schema layer on top of MongoDB, enforcing structure and types on your documents. A Schema defines the fields, their types, defaults, and validation rules. A Model is a constructor compiled from a Schema and provides the interface for database operations.@#Mongoose supports all JavaScript primitives (String, Number, Boolean, Date) plus special types like ObjectId (for references) and Mixed. Arrays and nested objects are fully supported.",
          "Mongoose schemas support built-in validators: required, minlength, maxlength, min, max, enum, and match (regex). You can also define custom validator functions.@#Mongoose middleware (hooks) let you run code before or after certain operations. Pre-save hooks are commonly used to hash passwords before storing them. Post-save hooks can trigger notifications or other side effects.",
          "code const mongoose = require('mongoose');\nconst bcrypt = require('bcryptjs');\n\nconst userSchema = new mongoose.Schema({\n  username: { type: String, required: true, unique: true, minlength: 3 },\n  email:    { type: String, required: true, unique: true, lowercase: true },\n  password: { type: String, required: true, minlength: 6 },\n  role:     { type: String, enum: ['user', 'admin'], default: 'user' }\n}, { timestamps: true });\n\n// Hash password before saving\nuserSchema.pre('save', async function(next) {\n  if (!this.isModified('password')) return next();\n  this.password = await bcrypt.hash(this.password, 12);\n  next();\n});\n\nmodule.exports = mongoose.model('User', userSchema);"
        ],
        image: ["", "", ""]
      },
      {
        maintitle: "Queries & Aggregation",
        title: [
          "Advanced Queries with Mongoose",
          "The Aggregation Pipeline",
          "Code Example: Aggregation Pipeline"
        ],
        description: [
          "Mongoose's Model.find() accepts a filter object and returns a Query object you can chain. Use .select() to project specific fields, .sort() to order results, .limit() and .skip() for pagination, and .populate() to replace ObjectId references with full documents.@#For complex queries, use query operators: $regex for pattern matching, $elemMatch for array subdocument queries, and $exists to check field presence. Lean queries (.lean()) return plain JS objects instead of Mongoose documents and are significantly faster for read-only operations.",
          "The aggregation pipeline processes documents through a series of stages. Each stage transforms the documents and passes results to the next. This allows complex data transformations directly in the database, reducing the amount of data sent over the network.@#Common stages: $match (filter documents, like WHERE), $group (aggregate by field, like GROUP BY), $project (reshape documents), $sort, $limit, $skip, $lookup (join with another collection), and $unwind (flatten arrays).",
          "code // Find top 3 most enrolled courses with their average rating\nconst result = await Enrollment.aggregate([\n  { $group: {\n      _id: '$courseId',\n      totalEnrollments: { $sum: 1 },\n      avgRating: { $avg: '$rating' }\n  }},\n  { $sort: { totalEnrollments: -1 } },\n  { $limit: 3 },\n  { $lookup: {\n      from: 'cards',\n      localField: '_id',\n      foreignField: 'id',\n      as: 'courseDetails'\n  }},\n  { $unwind: '$courseDetails' },\n  { $project: {\n      title: '$courseDetails.title',\n      totalEnrollments: 1,\n      avgRating: { $round: ['$avgRating', 1] }\n  }}\n]);"
        ],
        image: ["", "", ""]
      }
    ]
  },

  // ─── System Design Fundamentals ─────────────────────────────────────────────
  {
    id: "system-design-fundamentals",
    length: 3,
    content: [
      {
        maintitle: "Scalability Basics",
        title: [
          "Horizontal vs Vertical Scaling",
          "Load Balancers",
          "Stateless Architecture"
        ],
        description: [
          "Vertical scaling (scaling up) means adding more resources (CPU, RAM) to a single server. It's simple but has a hard upper limit and creates a single point of failure. Horizontal scaling (scaling out) means adding more servers to distribute the load — it's more complex but theoretically unlimited and fault-tolerant.@#Most modern systems are designed for horizontal scaling from the start. This requires making servers stateless so any request can be handled by any server in the pool.",
          "A load balancer sits in front of your server pool and distributes incoming requests across multiple instances. Common algorithms include round-robin (rotate through servers equally), least connections (send to the server with fewest active connections), and IP hash (same client always goes to the same server).@#Load balancers also provide health checking — they automatically stop sending traffic to unhealthy instances. They can operate at Layer 4 (TCP) or Layer 7 (HTTP), with Layer 7 balancers able to route based on URL paths or headers.",
          "Stateless servers do not store any client session data locally. All session state is stored in a shared external store (like Redis) or encoded in the client's token (JWT).@#Statelessness is a prerequisite for horizontal scaling — if a server held session data locally, routing a user to a different server would log them out. With stateless design, you can add or remove servers freely without affecting users."
        ],
        image: ["", "", ""]
      },
      {
        maintitle: "Caching Strategies",
        title: [
          "Why Caching Matters",
          "Redis & In-Memory Caching",
          "Cache Invalidation Strategies"
        ],
        description: [
          "Caching stores the results of expensive operations (database queries, API calls, computations) in fast storage so future requests can be served instantly. A well-placed cache can reduce database load by orders of magnitude and cut response times from hundreds of milliseconds to single digits.@#Cache hit rate is the key metric: the percentage of requests served from cache. Target >90% for frequently accessed, rarely changing data. CDNs (Content Delivery Networks) cache static assets (images, JS, CSS) at edge locations geographically close to users.",
          "Redis is the industry-standard in-memory data store for caching. It supports strings, hashes, lists, sets, and sorted sets with sub-millisecond read/write speeds. Redis can persist data to disk and supports pub/sub for real-time messaging.@#Common caching patterns: Cache-Aside (application checks cache, loads from DB on miss, writes to cache), Write-Through (write to cache and DB simultaneously), and Write-Behind (write to cache immediately, async to DB).",
          "Cache invalidation — knowing when to remove or update cached data — is one of the hardest problems in distributed systems. Stale data can cause bugs; invalidating too aggressively eliminates the performance benefit.@#Strategies: TTL (time-to-live) — expire cache entries after a fixed time; Event-Based Invalidation — explicitly delete cache keys when the underlying data changes; Cache Versioning — use a version number or hash in the cache key so updated data naturally busts the old cache."
        ],
        image: ["", "", ""]
      },
      {
        maintitle: "Database Design",
        title: [
          "SQL vs NoSQL",
          "Sharding & Replication",
          "CAP Theorem"
        ],
        description: [
          "SQL databases (PostgreSQL, MySQL) enforce a strict schema and support ACID transactions, making them ideal for relational data with complex queries and strong consistency requirements (e.g., financial systems).@#NoSQL databases (MongoDB, Cassandra, DynamoDB) sacrifice some consistency guarantees for flexibility, horizontal scalability, and high availability. Choose based on your data model: document stores for nested data, key-value for simple lookups, time-series for metrics, and graph DBs for relationship-heavy data.",
          "Replication copies data to multiple nodes (replicas). A primary node handles writes; replicas handle reads and serve as hot standbys for failover. This improves read throughput and fault tolerance but introduces replication lag.@#Sharding (horizontal partitioning) splits data across multiple database nodes by a shard key (e.g., userId % number_of_shards). Each shard holds a subset of the data. This enables write scalability beyond what a single node can handle, but makes cross-shard queries and transactions significantly more complex.",
          "The CAP theorem states that a distributed system can guarantee at most two of three properties simultaneously: Consistency (all nodes see the same data at the same time), Availability (every request receives a response), and Partition Tolerance (system continues despite network partitions).@#Network partitions are unavoidable in distributed systems, so the real trade-off is between Consistency and Availability. CP systems (like HBase) prioritize correctness over availability. AP systems (like Cassandra) remain available during partitions but may serve stale data. Most modern systems are eventually consistent — they favor availability and converge to a consistent state over time."
        ],
        image: ["", "", ""]
      }
    ]
  }
];

async function seed() {
  try {
    console.log('Connecting to MongoDB...');
    await mongoose.connect(MONGO_URL);
    console.log('Connected to MongoDB:', MONGO_URL);

    console.log('Clearing existing data...');
    await Card.deleteMany({});
    await Content.deleteMany({});
    console.log('Existing data cleared.');

    console.log('Inserting cards...');
    await Card.insertMany(cards);
    console.log(`${cards.length} cards inserted.`);

    console.log('Inserting content...');
    await Content.insertMany(contentData);
    console.log(`${contentData.length} content documents inserted.`);

    console.log('\nSeed complete! Database is ready.');
  } catch (err) {
    console.error('Seed failed:', err);
    process.exit(1);
  } finally {
    await mongoose.disconnect();
    console.log('Disconnected from MongoDB.');
  }
}

seed();
