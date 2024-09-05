const blogData = [
  {
    id: 1,
    photo: "https://miro.medium.com/max/1104/1*V3ZOFh5Ed4MLCIgi6FnLmA.jpeg",
    title: "React Components কি?",
    content:
      "React component হলো এমন ফাংশন বা ক্লাস, যা UI এর একটি অংশ তৈরি করে এবং JSX (JavaScript XML) রিটার্ন করে। প্রতিটি component-এর নিজস্ব স্টেট ও প্রপস থাকতে পারে, যা UI পরিবর্তনের জন্য ব্যবহার করা হয়।",
    bg: "bg-green-500",
  },
  {
    id: 2,
    photo:
      "https://i0.wp.com/reactjsguru.com/wp-content/uploads/2022/06/9.png?fit=680%2C500&ssl=1",
    title: "State কীভাবে কাজ করে?",
    content:
      "React state একটি কম্পোনেন্টের ভেতর থাকে এবং শুধুমাত্র সেই কম্পোনেন্ট বা child component গুলোতে প্রভাব ফেলে। State মূলত dynamic data ম্যানেজ করার জন্য ব্যবহার করা হয়, যেমন user input, API response, অথবা timer।",
    bg: "bg-blue-500",
  },

  {
    id: 3,
    photo:
      "https://i0.wp.com/reactjsguru.com/wp-content/uploads/2022/06/9.png?fit=680%2C500&ssl=1",
    title: "State  কীভাবে কাজ করে?",
    content:
      "React state একটি কম্পোনেন্টের ভেতর থাকে এবং শুধুমাত্র সেই কম্পোনেন্ট বা child component গুলোতে প্রভাব ফেলে। State মূলত dynamic data ম্যানেজ করার জন্য ব্যবহার করা হয়, যেমন user input, API response, অথবা timer।",
    bg: "bg-pink-500",
  },

  {
    id: 4,
    photo:
      "https://tse3.mm.bing.net/th?id=OIP.CL3NWeSOYZdBlHoOJTI0YAAAAA&pid=Api&P=0&h=220",
    title: "React Router কী?",
    content:
      "React Router এর মাধ্যমে একটি SPA (Single Page Application) তৈরি করা সম্ভব, যেখানে পেজ রিফ্রেশ না করেই অ্যাপ্লিকেশনের বিভিন্ন অংশে নেভিগেট করা যায়। এটি মূলত URL-র উপর ভিত্তি করে কম্পোনেন্ট রেন্ডার করে, যা ব্যবহারকারীর জন্য seamless experience প্রদান করে।",
    bg: "bg-red-500",
  },

  {
    id: 5,
    photo:
      "https://s3-ap-south-1.amazonaws.com/trt-blog-ghost/2020/09/blog-image.jpg",
    title: "React Hook কী?",
    content:
      "Hooks React 16.8 ভার্সন থেকে আসা একটি নতুন ফিচার, যা আপনাকে functional components-এ state এবং lifecycle ম্যানেজ করতে দেয়। Hooks এর মাধ্যমে আপনি class components ছাড়াই stateful component তৈরি করতে পারবেন।",
    bg: "bg-red-300",
  },

  {
    id: 6,
    photo:
      "https://i0.wp.com/reactjsguru.com/wp-content/uploads/2022/06/10.png?fit=680%2C500&ssl=1",
    title: "React Props কী?",
    content:
      "Props are passed from a parent component to a child component in the form of attributes. In the parent component, you specify the prop name and value when rendering the child component.",
    bg: "bg-yellow-500",
  },

  {
    id: 7,
    photo:
      "https://www.copycat.dev/blog/wp-content/uploads/2022/09/strict-mode.png",
    title: "React Strickmode কী?",
    content:
      "React Strict Mode এর মাধ্যমে এমন কোডকে হাইলাইট করা হয় যা ভবিষ্যতে deprecate হবে বা bug সৃষ্টি করতে পারে।",
    bg: "bg-violet-600",
  },

  {
    id: 8,
    photo:
      "https://www.syncfusion.com/blogs/wp-content/uploads/2022/04/Implementing-React-Custom-Hooks-A-Complete-Guide.png",
    title: "React CustomHooks কী?",
    content:
      "Custom Hooks হলো এমন হুক যা আপনাকে নিজের হুক তৈরি করে reusable logic তৈরি করতে দেয়।",
    bg: "bg-pink-700",
  },
];

export default blogData;
