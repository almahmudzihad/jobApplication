Question 1. What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?

Answer:
getElementById : শুধু id দিয়ে একটিমাত্র এলিমেন্ট রিটার্ন করে।
getElementsByClassName : নির্দিষ্ট class এর সব এলিমেন্টের লাইভ HTMLCollection দেয়।
querySelector : যেকোনো CSS সিলেক্টর দিয়ে প্রথম ম্যাচ হওয়া এলিমেন্ট দেয়।
querySelectorAll : যেকোনো CSS সিলেক্টর দিয়ে সব ম্যাচ হওয়া এলিমেন্টের স্ট্যাটিক NodeList দেয়।

Question 2. How do you create and insert a new element into the DOM?

Answer:
DOM-এ নতুন এলিমেন্ট তৈরি ও ইনসার্ট করার জন্য প্রথমে document.createElement() ব্যবহার করে একটি এলিমেন্ট বানাতে হয় ।  এরপর সেই এলিমেন্টে কনটেন্ট বা অ্যাট্রিবিউট যোগ করা যায় যেমন  textContent, className, বা setAttribute() দিয়ে। সবশেষে সেই এলিমেন্টকে DOM-এর নির্দিষ্ট জায়গায় বসাতে হয়, 
সাধারণত appendChild() মেথড ব্যবহার করে। 
উদাহরণস্বরূপ, যদি আমরা একটি নতুন <p> ট্যাগ তৈরি করে তাতে লেখা যোগ করতে চাই, 
তাহলে const p = document.createElement("p"); 
p.textContent = "New paragraph"; 
document.body.appendChild(p); 
লিখলেই সেটি ওয়েবপেজে যুক্ত হয়ে যাবে

Question 3. What is Event Bubbling? And how does it work?

Answer:
Event Bubbling হলো JavaScript-এর একটি গুরুত্বপূর্ণ ধারণা। 
যখন কোনো ইভেন্ট (যেমন click) একটি child element-এ ঘটে, 
তখন সেই ইভেন্ট প্রথমে সেই child element-এ ট্রিগার হয়, 
এরপর তার parent element-এ যায়, তারপর grandparent element-এ যায়—এভাবে DOM tree-এর উপরের দিকে ধাপে ধাপে ছড়িয়ে পড়ে। এই প্রক্রিয়াকেই Event Bubbling বলা হয়




Question 4. What is Event Delegation in JavaScript? Why is it useful?

Answer:
Event Delegation হলো JavaScript-এর একটি টেকনিক যেখানে আমরা parent element-এ ইভেন্ট লিসেনার বসাই, আর সেই ইভেন্ট child element-গুলোতে bubble হয়ে পৌঁছায়। অর্থাৎ, আলাদা আলাদা child element-এ ইভেন্ট লিসেনার বসানোর বদলে আমরা parent element-এ একটি লিসেনার বসাই, আর ইভেন্ট bubbling-এর মাধ্যমে child element-গুলোর ইভেন্ট হ্যান্ডেল করি


Question 5. What is the difference between preventDefault() and stopPropagation() methods?

Answer:
preventDefault() এবং stopPropagation() দুটোই ইভেন্ট হ্যান্ডলিং-এর জন্য ব্যবহৃত হয়, কিন্তু কাজ আলাদা।
পার্থক্য
preventDefault()
কোনো ইভেন্টের ডিফল্ট আচরণ বন্ধ করে।
যেমন, একটি <a> ট্যাগে ক্লিক করলে সাধারণত ব্রাউজার নতুন লিঙ্কে যাবে। যদি preventDefault() ব্যবহার করা হয়, তাহলে সেই ডিফল্ট কাজ হবে না।
stopPropagation()
ইভেন্টকে bubble বা capture হয়ে parent element-এ ছড়িয়ে পড়া থেকে আটকায়।
অর্থাৎ, ইভেন্ট শুধু সেই এলিমেন্টেই থেমে যাবে, উপরের parent element-এ যাবে না

