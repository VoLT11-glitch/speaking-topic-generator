// =========================
// SAMPLE ANSWERS (read-along)
// One example answer per topic. Keys must match the topic text exactly.
// There is no "right" answer: these are just one way to answer.
// =========================

const samples = {

    // ---------- GENERAL · EASY ----------
    "Describe your perfect day.":
        "My perfect day starts slowly. No alarm, just waking up when my body is ready. I'd go for a morning workout, then eat a big breakfast with my family. In the afternoon, I'd work on something I actually enjoy building. And in the evening, I'd sit with a few close friends, eat good food, and talk until late. Nothing fancy, just a day without rushing.",

    "What is your favorite hobby and why?":
        "My favorite hobby is working out. It started as a way to get fit, but now it's more than that. The gym is the one place where my phone doesn't matter and my mind goes quiet. I also like that progress is honest. If you show up, you get stronger. If you skip, you don't. That simple rule has taught me a lot about discipline.",

    "Describe a person you admire.":
        "I really admire my father. He never had the opportunities I have, but he worked hard every single day without complaining. What I respect most is how calm he stays when things go wrong. He doesn't panic, he just asks, okay, what do we do now? I'm still learning that. If I can handle problems the way he does, I think I'll be fine.",

    "What is your favorite place you have visited?":
        "My favorite place so far is the mountains. I went on a short trip with friends, and the first evening we just sat outside, watching the sun go down behind the hills. It was cold, the tea was terrible, and it was still perfect. What I loved most was the silence. In the city you forget what real quiet feels like.",

    "What is one skill you wish you could learn instantly?":
        "If I could learn one skill instantly, it would be speaking confidently in front of people. I usually know what I want to say, but when everyone is looking at me, my words get stuck. Being able to explain ideas clearly would help me in interviews, in college, and in making videos. Honestly, that's exactly why I'm practising right now.",

    "What is your favorite childhood memory?":
        "One of my favorite childhood memories is playing cricket in the street during summer holidays. We'd start in the afternoon and play until it was too dark to see the ball. We argued about every single run, and someone's mother would always shout at us to come home. We had nothing expensive, but those evenings felt completely free.",

    "What makes a good friend?":
        "For me, a good friend is someone who's honest with you, even when it's uncomfortable. Anyone can say nice things. A real friend tells you when you're making a mistake, and then still helps you fix it. They also show up when it matters, not just when it's convenient. I don't need many friends like that. Two or three are enough.",

    "What is something you could not live without?":
        "Honestly, I couldn't live without my phone, and I'm not proud of that. It's my alarm, my notes, my music, my bank, and my connection to everyone I know. But if I think a bit deeper, what I really can't live without is people. The phone is just how I reach them. Without family and friends, nothing else would feel worth much.",

    "What is your favorite way to spend a weekend?":
        "My favorite weekend is a mix of rest and doing something useful. On Saturday I like to sleep in, go to the gym, and maybe catch up with friends. On Sunday I like to work on a personal project without any deadline pressure. That's when I actually enjoy building things. By Sunday night, I want to feel rested, but also like I made some progress.",

    "What is one thing that always makes you happy?":
        "Good food with people I like always makes me happy. It doesn't have to be a restaurant. It can be simple home food or street snacks after a long day. Something about sitting together and eating makes people relax and talk honestly. Even on a bad day, a good meal with friends resets my mood almost instantly.",

    "What is your favorite season and why?":
        "My favorite season is winter. The heat in summer drains all my energy, but in winter I actually feel like doing things. The mornings are fresh, the evenings are cozy, and food somehow tastes better. Hot tea on a cold day is one of life's simple pleasures. The only problem is getting out of bed, but that's a price I'm happy to pay.",

    "Describe your ideal vacation.":
        "My ideal vacation is somewhere quiet with mountains or the sea, not a packed tourist city. I'd want a few close friends with me, no strict plan, and good local food. I'd spend the days walking, exploring small places, and taking photos. In the evenings, we'd just sit and talk. The point of a vacation, for me, is to slow down, not to tick boxes.",

    "What is one habit you would like to develop?":
        "I'd really like to develop the habit of reading every day. I spend a lot of time scrolling, and most of it disappears from my mind in a few minutes. Books are different. They make you think slowly and deeply. Even twenty pages a day would add up to many books a year. The hard part isn't reading, it's putting the phone down first.",

    "What is your favorite food and why?":
        "My favorite food is biryani, and I don't think that will ever change. It's not just the taste, it's what it represents. Biryani usually means a celebration, a family gathering, or a special Sunday. Every place makes it differently, so you're always discovering a new version. If I had to choose one meal for the rest of my life, it would be this.",

    "What is something you are proud of?":
        "I'm proud that I've started building things on my own instead of just studying them. I've made websites, worked on real projects, and put my work out there, even when it wasn't perfect. It's not a huge achievement yet, but a year ago I was only watching tutorials. Moving from watching to actually making something is a change I'm genuinely proud of.",

    // ---------- GENERAL · MEDIUM ----------
    "Is failure necessary for success?":
        "I think failure is almost unavoidable on the way to success, but it isn't the goal. Failure is useful only if you learn from it. Many people fail and simply give up, so failure alone doesn't make anyone successful. What matters is how you respond. If you look at what went wrong, adjust, and try again, then failure becomes the best teacher you'll ever have.",

    "Does money bring happiness?":
        "Money brings happiness up to a point. If you're worried about rent, food, or medical bills, more money makes a huge difference to your peace of mind. But once your basic needs are covered, extra money doesn't add much joy. People still feel lonely, stressed, and bored, no matter how rich they are. So money removes many problems, but it can't create meaning on its own.",

    "Is social media good for society?":
        "Social media is good and bad at the same time. It helps people learn, find communities, and build businesses from nothing. A student can now learn skills for free that once cost a fortune. But it also spreads misinformation and makes people compare their lives constantly. I don't think the tool is the problem. The problem is how mindlessly most of us use it.",

    "Should everyone learn how to cook?":
        "Yes, I think everyone should learn basic cooking. It's one of the most practical life skills. If you can cook, you eat healthier, you save money, and you don't depend on anyone else for something as basic as food. It doesn't mean you have to be a chef. Just knowing how to make a few simple, healthy meals makes adult life much easier.",

    "Is it better to be an early bird or a night owl?":
        "I don't think one is better for everyone. Early birds get quiet mornings and fit better with how schools and offices work. But some people genuinely think more clearly at night. What matters more is consistency. If you sleep and wake at roughly the same time and get enough rest, you'll do well. Forcing yourself into the wrong schedule usually just makes you tired.",

    "Does everyone need a hobby?":
        "I believe everyone needs at least one hobby. A hobby is something you do just because you enjoy it, not for money or grades. Without that, life becomes only work and responsibilities, and that leads to burnout. A hobby gives your mind a break and a sense of identity outside your job. It can be anything: sport, music, cooking, or even gardening.",

    "Is it better to have many friends or a few close friends?":
        "I'd choose a few close friends over many casual ones. Having lots of friends is fun, but when something goes wrong in your life, only a small number of people will truly show up. Close friends know the real you and can be honest with you. That said, a wider circle isn't bad. It brings opportunities. Ideally, you have both, but depth matters more.",

    "Should people follow their passion or choose stability?":
        "I think the smartest path is to build stability first and then follow your passion. Passion without any income can turn into stress very quickly, and stress kills passion. But choosing only stability can leave you feeling empty for decades. So my approach would be to secure a basic income, and use your free time to grow your passion until it can support you.",

    "Is modern life making people happier?":
        "In many ways, modern life should make us happier. We live longer, have better medicine, and have endless entertainment. But I'm not sure people actually feel happier. We're more connected online, yet many people feel lonely. We have more choices, yet we feel more pressure. I think modern life gives us better tools, but we haven't learned how to use them well.",

    "Does competition make people better?":
        "Competition can make people better, but only in the right amount. A little competition pushes you to work harder and discover what you're capable of. Sports are a great example. But too much competition makes people anxious and even dishonest. They start focusing on beating others instead of improving themselves. The healthiest competition, I think, is with who you were yesterday.",

    "Is traveling necessary for personal growth?":
        "Travel helps personal growth a lot, but I don't think it's necessary. When you travel, you meet different people, face new problems, and realize your way of living isn't the only way. That's powerful. But growth can also come from books, hard experiences, and honest conversations at home. Travel is one great teacher, not the only one. And it's often a privilege.",

    "Should people spend less time on their phones?":
        "Yes, most of us should spend less time on our phones. I include myself in that. The problem isn't the phone itself. It's that apps are designed to keep us scrolling without purpose. We lose hours and gain almost nothing. Using the phone for learning, work, or real conversations is fine. It's the endless, mindless scrolling that we need to cut down.",

    "Is being busy always a good thing?":
        "No, being busy isn't always a good thing. Many people confuse being busy with being productive. You can spend the whole day answering messages and attending meetings and still achieve nothing important. Real progress usually needs focused time, and sometimes even rest. I think the goal should be to be effective, not busy. A calm schedule with clear priorities is much better.",

    "Can a person be successful without being talented?":
        "Yes, I believe a person can be successful without natural talent. Talent gives you a head start, but hard work, consistency, and good habits often matter more over time. Many talented people never reach their potential because they rely only on talent. Meanwhile, someone average who keeps practising every day slowly becomes excellent. Skill can be built. Discipline is the real advantage.",

    "Is it better to plan your future or live in the moment?":
        "I think the best approach is a mix of both. Planning your future gives you direction. Without it, you might drift and regret wasted years. But if you're always planning, you miss the life that's actually happening right now. So I like to set a rough direction for the future, then focus on doing today well. Good days, repeated, become a good future.",

    // ---------- GENERAL · HARD ----------
    "Is success more about luck or hard work?":
        "I think success needs both, but in different ways. Luck decides a lot of your starting point: where you're born, your family, your opportunities. You can't control that. Hard work is what you do with the cards you're given. Hard work doesn't guarantee success, but it increases your chances of being ready when luck shows up. So I focus on hard work, while staying humble about luck.",

    "Can technology make people less human?":
        "Technology can make us less human if we let it replace things that make us human. When we text instead of meeting, or let algorithms decide what we think, we slowly lose patience, empathy, and deep thinking. But technology can also make us more human. It connects families across countries and gives a voice to people who were never heard. The tool isn't the danger. Careless use is.",

    "Is freedom more important than security?":
        "This is a hard balance. Without security, freedom means very little. You can't enjoy free speech if you're afraid for your life. But too much focus on security can slowly take away freedom, because governments can justify almost anything in the name of safety. I lean towards freedom, but with sensible limits. A society that gives up all freedom for security often ends up with neither.",

    "Does competition make society better?":
        "Competition makes many parts of society better. Companies competing gives us cheaper and better products, and competition in science pushes discovery forward. But competition isn't great everywhere. In healthcare or education, pure competition can leave poor people behind. So I think competition works well in markets, but society also needs cooperation and some protection for people who can't compete on equal terms.",

    "Is happiness a choice?":
        "Happiness is partly a choice, but not entirely. Our habits, mindset, and the way we interpret events do affect how happy we feel, and those are things we can work on. But it's unfair to tell someone with depression, or someone living in poverty, that they're simply choosing to be unhappy. I'd say we can choose actions that make happiness more likely, not happiness itself.",

    "Can money ever buy genuine happiness?":
        "Money can't directly buy genuine happiness, but it can buy the conditions for it. It can buy time, health, safety, and experiences with people you love. Those things really do make life better. What money can't buy is meaning, love, or self-respect. People who chase money hoping it will fill those gaps usually feel empty. So money is a tool for happiness, not its source.",

    "Should people always follow their dreams?":
        "I don't think people should always follow their dreams blindly. Dreams are important because they give life direction and energy. But sometimes a dream is unrealistic, or chasing it would hurt the people who depend on you. I think the mature approach is to follow your dreams with a plan, test them in small steps, and stay honest with yourself if something isn't working.",

    "Is failure more valuable than success?":
        "In terms of learning, failure is often more valuable than success. When you succeed, you rarely stop to ask why. When you fail, you're forced to look at your mistakes and change. But I wouldn't romanticize failure. Repeated failure without reflection is just pain. And success matters too, because it builds confidence. The real value comes from learning from both of them.",

    "Can absolute freedom exist in society?":
        "I don't think absolute freedom can exist in any society. The moment people live together, one person's freedom affects someone else. If I'm totally free to do anything, I might harm you, and then your freedom disappears. That's why we have laws. So society is always a trade-off: we give up some freedom so that everyone can enjoy a reasonable amount of it safely.",

    "Is ignorance sometimes better than knowledge?":
        "In small, personal situations, ignorance can feel better. Sometimes not knowing what people think about you, or every bad news story in the world, gives you peace. But in the long run, I believe knowledge is almost always better. Ignorance might feel comfortable, but it leaves you unprepared. I'd rather know a painful truth and deal with it than live comfortably on a false belief.",

    "Does having more choices make people happier?":
        "Up to a point, more choices make people happier because they give freedom. But too many choices can actually make people less happy. When there are endless options, we spend more time deciding, feel more anxious, and regret our choice later, wondering if something else was better. I think the ideal is enough choice to have freedom, but not so much that it becomes stressful.",

    "Is equality more important than individual freedom?":
        "I don't think one is always more important. Too much focus on equality can limit freedom, because you need strict rules to make everyone's outcome the same. But too much individual freedom can create huge inequality, where the powerful take advantage of the weak. I lean towards equal opportunity, not equal outcomes. Give everyone a fair start, then let them use their freedom.",

    "Can humans ever be completely objective?":
        "I don't think humans can ever be completely objective. Our upbringing, culture, emotions, and experiences shape how we see everything, often without us noticing. Even scientists have biases. But we can become more objective. We can question our assumptions, look for evidence that proves us wrong, and listen to people who disagree. Complete objectivity is impossible, but trying for it still matters.",

    "Is a comfortable life necessarily a meaningful life?":
        "No, a comfortable life isn't necessarily meaningful. Comfort means having few problems, but meaning usually comes from struggle, purpose, and contributing to something bigger than yourself. Many meaningful lives were full of difficulty. That said, comfort and meaning aren't enemies. Some comfort gives you the energy to pursue meaning. The danger is when comfort becomes the only goal.",

    "Should people prioritize their own happiness over society's expectations?":
        "I think people should prioritize their own happiness more than they usually do, especially in cultures where family and society decide your career and marriage. Living someone else's plan for your life often leads to regret. But I wouldn't ignore society completely. Some expectations come from people who genuinely care about us. The goal is to listen to them, then make your own decision.",

    // ---------- TECHNICAL · EASY ----------
    "What is the internet?":
        "The internet is a giant network that connects billions of computers and devices around the world. When you open a website, your device sends a request through cables, routers, and servers until it reaches the computer storing that website. That computer sends the information back to you in pieces. All of this happens in a fraction of a second, which still feels a bit like magic.",

    "What is an operating system?":
        "An operating system is the main software that runs a computer or phone. Examples are Windows, Android, and iOS. It acts like a manager between the hardware and the apps. It decides which app gets memory, handles files, and lets you use the keyboard, screen, and internet. Without an operating system, every app would have to talk to the hardware directly, which would be chaos.",

    "What is artificial intelligence?":
        "Artificial intelligence is the ability of computers to do tasks that normally need human intelligence, like understanding language, recognizing images, or making decisions. Most AI today learns from huge amounts of data instead of following fixed rules. For example, a chatbot learns how language works by reading billions of sentences. It doesn't think like a human, but it can be surprisingly useful.",

    "What is cloud computing?":
        "Cloud computing means using someone else's computers over the internet instead of your own. When you save photos to Google Drive or watch Netflix, the files are stored in huge data centers, not on your device. Companies use the cloud so they don't have to buy and maintain their own servers. They simply rent computing power and storage, and pay for what they use.",

    "What is a programming language?":
        "A programming language is a way for humans to give instructions to a computer. Computers only understand ones and zeros, which is very hard for people to write. So we write code in languages like Python or JavaScript, which are closer to English. Then that code gets translated into something the machine understands. Different languages are designed for different jobs.",

    "What is a database?":
        "A database is an organized place to store information so it can be found and updated quickly. Think of it like a very smart, very large spreadsheet. When you log into an app, the app checks a database for your username and password. Databases are designed to handle millions of records and many users at the same time without losing or mixing up data.",

    "What is a computer network?":
        "A computer network is a group of devices connected together so they can share information. Your home Wi-Fi is a small network, connecting your phone, laptop, and TV. Offices have bigger networks, and the internet is basically a network of networks. Devices on a network follow common rules, called protocols, so they can understand each other no matter who made them.",

    "What is cybersecurity?":
        "Cybersecurity is about protecting computers, networks, and data from attacks and theft. It includes things like strong passwords, encryption, firewalls, and software updates. Attackers might try to steal personal information, lock files for ransom, or crash websites. As more of our money, health records, and identity move online, cybersecurity has become just as important as locking the door of your house.",

    "What is an algorithm?":
        "An algorithm is simply a step-by-step set of instructions for solving a problem. A cooking recipe is a kind of algorithm. In computing, algorithms tell the computer exactly what to do, like how to sort a list of names or find the shortest route on a map. Good algorithms solve problems correctly and quickly, even when the amount of data becomes huge.",

    "What is a smartphone?":
        "A smartphone is a mobile phone that works like a small computer. Besides calling and texting, it can browse the internet, run apps, take photos, play videos, and use GPS. It has an operating system like Android or iOS. Honestly, today's smartphones are more powerful than the computers that sent people to the moon, and most of us carry one everywhere.",

    "What is open-source software?":
        "Open-source software is software whose source code is publicly available. Anyone can read it, use it, change it, and usually share their improvements. Examples include Linux, Firefox, and many tools developers use every day. Because thousands of people around the world can inspect and improve the code, open-source projects often become very reliable, and they're usually free to use.",

    "What is machine learning?":
        "Machine learning is a part of artificial intelligence where computers learn from data instead of being given exact rules. For example, instead of writing rules to detect spam, you show the system thousands of spam and normal emails, and it learns the patterns by itself. The more good data it sees, the better it usually gets. That's how recommendations and face recognition work.",

    "What is a website?":
        "A website is a collection of web pages that you can open in a browser using an address, like a domain name. The pages are made with HTML for structure, CSS for design, and JavaScript for interaction. The files live on a server, and when you visit the address, the server sends them to your browser, which turns that code into what you see.",

    "What is an IP address?":
        "An IP address is like a postal address for a device on the internet. Every device connected to a network gets a number, so data knows where to go. When you visit a website, your request carries your IP address, so the website knows where to send the reply. Humans use names like google.com, and systems translate those names into IP addresses.",

    "What is a search engine?":
        "A search engine is a tool that helps you find information on the internet, like Google or Bing. It constantly sends programs called crawlers to visit websites and store what they find in a massive index. When you type a search, it looks through that index and ranks the results based on how relevant and trustworthy each page seems. All in under a second.",

    // ---------- TECHNICAL · MEDIUM ----------
    "How does artificial intelligence affect everyday life?":
        "AI already affects our daily life more than most people realize. It decides what videos we see, filters spam from our email, suggests what to buy, and helps maps predict traffic. Our phone cameras use AI to improve photos, and banks use it to catch fraud. Most of the time it's invisible. We only notice it when it gets something wrong.",

    "What are the advantages of open-source software?":
        "Open-source software has several big advantages. First, it's usually free, which helps students and small companies. Second, since anyone can read the code, bugs and security problems are often found and fixed quickly. Third, you're not locked into one company. If you need a change, you can make it yourself. And finally, it's a great way for developers to learn and contribute.",

    "How does a database store information?":
        "Most databases store information in tables, a bit like spreadsheets, with rows and columns. Each row is one record, like a user, and each column is a detail, like their email. To find data quickly, databases use indexes, which work like the index at the back of a book. They also make sure that if two people change data at once, nothing gets corrupted.",

    "Why is cybersecurity important?":
        "Cybersecurity is important because almost everything valuable is now digital: our money, our identity, our health records, and even power grids. A single attack can empty bank accounts, leak millions of passwords, or shut down a hospital. And it's not just big companies that get targeted. Ordinary people lose money to scams every day. Good security protects both individuals and the whole society.",

    "How does GPS determine your location?":
        "GPS works using a network of satellites orbiting the Earth. Each satellite constantly sends a signal with its position and the exact time. Your phone receives signals from at least four satellites and measures how long each signal took to arrive. Using those distances, it calculates exactly where you are. It's basically geometry, done extremely fast, with very precise clocks.",

    "How does a recommendation algorithm work?":
        "A recommendation algorithm tries to predict what you'll like. It looks at what you watched, liked, skipped, or bought, and compares that with millions of other users. If people with similar taste enjoyed something, it suggests it to you. Platforms also measure how long you watch, not just what you click. The goal is usually to keep you engaged on the platform for as long as possible.",

    "Why is data considered valuable?":
        "Data is valuable because it helps companies understand and predict behavior. If a company knows what you search, buy, and watch, it can show you more relevant ads and products, and that means more money. Data also trains AI systems. That's why many apps are free. We're not paying with money. We're paying with our attention and our information.",

    "How does cloud computing work?":
        "Cloud computing works through huge data centers full of servers owned by companies like Amazon, Google, and Microsoft. These servers are shared among many customers using a technology called virtualization. When a company needs more computing power, it can rent it in minutes through the internet. When it needs less, it scales down. It's like electricity: you use what you need and pay for it.",

    "Why do programming languages have different uses?":
        "Programming languages have different uses because each one was designed to solve certain problems well. Python is easy to read and great for data and AI. JavaScript runs in web browsers, so it powers websites. C and C++ are very fast and close to the hardware, so they're used in games and systems. There's no single best language, only the right tool for the job.",

    "How does encryption protect information?":
        "Encryption protects information by scrambling it into unreadable text using a key. Only someone with the right key can turn it back into the original message. So even if a hacker intercepts your data, they just see nonsense. That's how messaging apps, online banking, and websites with the little lock icon keep your information private while it travels across the internet.",

    "What are the advantages and disadvantages of social media algorithms?":
        "The main advantage of social media algorithms is personalization. They help you discover content you actually enjoy, and they help small creators reach large audiences. The disadvantage is that they're designed to maximize engagement, not well-being. So they often push outrage, extreme opinions, and endless scrolling. They can also trap people in bubbles where they only see views they already agree with.",

    "How has the smartphone changed modern life?":
        "The smartphone has changed almost everything about how we live. We now bank, shop, learn, navigate, and work from one device in our pocket. It has made information and opportunity available to millions of people. But it has also changed our attention. We check our phones constantly and find it hard to be bored or present. It's an incredibly powerful tool with a real cost.",

    "Why are software updates important?":
        "Software updates are important mainly for security. When developers discover weaknesses in their software, they release updates to fix them. If you don't update, attackers can use those known weaknesses against you. Updates also fix bugs, improve performance, and add new features. So even though update notifications are annoying, ignoring them is like leaving a known hole in your fence.",

    "How does online banking work?":
        "Online banking lets you access your bank account through an app or website. When you log in, your identity is checked using passwords, OTPs, or fingerprints. Every transaction is encrypted as it travels to the bank's servers, where your balance is updated in a database. Systems like UPI connect different banks instantly, so money can move in seconds instead of days.",

    "What makes a website easy to use?":
        "A website is easy to use when people can do what they came for without thinking too hard. That means clear navigation, readable text, fast loading, and buttons that look like buttons. It should also work well on phones, since most people browse on mobile. The best websites feel almost invisible. You don't notice the design, you just get your task done.",

    // ---------- TECHNICAL · HARD ----------
    "Will AI eventually replace software developers?":
        "I don't think AI will fully replace software developers, but it will change the job a lot. AI is already great at writing routine code, so developers who only do simple tasks may struggle. But software is really about understanding problems, making trade-offs, and taking responsibility for what gets built. AI is becoming a powerful assistant. Developers who learn to use it well will become far more productive.",

    "Should autonomous machines be allowed to make critical decisions?":
        "I think autonomous machines should be allowed to help with critical decisions, but a human should usually stay responsible. Machines can process data faster and don't get tired, which is valuable in medicine or driving. But when a decision involves life, death, or justice, someone must be accountable. A machine can't be held responsible. So the safest model is machines advising, humans deciding.",

    "Can artificial intelligence become truly creative?":
        "It depends on what we mean by creative. AI can already produce music, art, and stories that surprise people, by combining patterns from what it has learned. In a practical sense, that looks creative. But human creativity usually comes from experience, emotion, and wanting to express something. AI doesn't have those. So I'd say AI can be a powerful creative tool, but it isn't creative in the human sense.",

    "What are the biggest technological risks facing humanity?":
        "I think the biggest technological risks are powerful AI without proper control, cyberattacks on critical systems like power and hospitals, and misuse of biotechnology. There's also a quieter risk: misinformation spreading faster than truth, which weakens trust in society. Most of these risks don't come from the technology itself, but from how quickly we're building it compared to how slowly we create rules.",

    "Should artificial intelligence development be heavily regulated?":
        "I think AI should be regulated, but carefully. High-risk uses, like AI in healthcare, policing, or weapons, need strict rules and transparency, because mistakes can seriously harm people. But if regulation is too heavy, it can slow down useful innovation and only allow huge companies to compete. The right approach is to regulate based on risk, not to treat every AI tool the same way.",

    "Will quantum computing change the internet?":
        "Quantum computing could change the internet mainly through security. Much of today's encryption depends on math problems that normal computers can't solve quickly. A powerful quantum computer might solve them, which would break current security. That's why researchers are already building new, quantum-safe encryption. For everyday browsing, though, I don't think quantum computers will replace normal ones. They're specialized tools.",

    "Can AI ever understand human emotions?":
        "AI can already recognize emotions in a practical way. It can detect sadness in a voice or anger in a message. But recognizing emotions isn't the same as understanding them. Humans understand emotions because we feel them ourselves. AI doesn't feel anything. It predicts patterns. So AI may become very good at responding to emotions, but I'm not sure it will ever truly understand them.",

    "Should companies be allowed to collect unlimited user data?":
        "No, I don't think companies should be allowed to collect unlimited user data. Data can be used to manipulate people, and when it leaks, millions are affected. Companies should only collect what they actually need, explain clearly why, and let users delete it. Some data collection makes products better, and that's fine. But it should be a fair trade, not something hidden in long terms and conditions.",

    "Will robots eventually become part of everyday society?":
        "I think robots are already becoming part of everyday society, just not in the human-looking form from movies. We have robot vacuum cleaners, warehouse robots, and automated machines in factories. Over time, I expect robots in delivery, elderly care, and agriculture. The bigger question isn't whether they'll arrive, but how we'll handle the jobs they replace and how we'll make them safe.",

    "Is technological progress always beneficial?":
        "No, technological progress isn't always beneficial. Most technologies have both good and bad uses. The internet spread knowledge but also misinformation. Social media connected people but also increased loneliness for some. Progress usually helps humanity overall, but it creates new problems that we have to solve. So I think we should welcome progress, while thinking seriously about its side effects.",

    "Could artificial intelligence become more intelligent than humans?":
        "In some areas, AI is already more capable than humans, like playing chess or analyzing huge datasets. Whether it will become generally more intelligent than us is a big open question. Many experts think it's possible within decades. If it happens, the main challenge will be making sure those systems share human values. Intelligence without the right goals could be very dangerous.",

    "Should humans trust algorithms with important decisions?":
        "I think we should trust algorithms with important decisions only when they're transparent and tested. Algorithms can be more consistent than humans, but they can also learn biases from their data and repeat them at a massive scale. If an algorithm decides someone's loan or job application, people deserve to know why. Trust should be earned through accountability, not given automatically.",

    "Will traditional education become less important because of AI?":
        "I think AI will make some parts of traditional education less important, like memorizing facts, since anyone can ask an AI instantly. But other parts will become more important: critical thinking, communication, and learning how to learn. AI can be a personal tutor for everyone. So education won't disappear. It will have to change from teaching answers to teaching people how to ask better questions.",

    "Can technology solve problems that are fundamentally human?":
        "Technology can help with human problems, but it rarely solves them completely. For example, technology can connect lonely people, but it can't create real friendship. It can spread information, but it can't make people honest. Problems like greed, loneliness, and conflict come from human nature. Technology is a tool. Whether it helps or hurts depends on the people using it.",

    "What technology could have the biggest impact on humanity in the next 20 years?":
        "I think artificial intelligence will have the biggest impact in the next twenty years. It's not just one industry. It affects medicine, education, science, business, and creativity all at once. AI could speed up research and make expert knowledge available to everyone. But it could also disrupt jobs and spread misinformation. Clean energy is a close second, because climate change affects everyone.",

    // ---------- INTERVIEW · EASY ----------
    "Tell me about yourself.":
        "I'm an engineering student who enjoys building things more than just studying them. Over the last year, I've been teaching myself web development and building small projects, including a speaking-practice website that's live online. I like understanding a problem and turning it into something people can actually use. Outside of work, I lift weights, which taught me a lot about consistency.",

    "What are your hobbies?":
        "My main hobbies are fitness and building small digital projects. I go to the gym regularly, and I enjoy tracking progress and slowly getting stronger. I also like making websites and experimenting with new tools in my free time. Recently, I've also started creating video content. All of these hobbies have one thing in common: I like starting from zero and seeing improvement.",

    "What is your biggest strength?":
        "My biggest strength is that I learn new things quickly and actually apply them. When I don't know something, I don't wait for someone to teach me. I look it up, try it, and build something small with it. For example, I taught myself to build and deploy websites. I think that ability to figure things out is useful in any fast-changing role.",

    "Where do you see yourself in five years?":
        "In five years, I see myself working in a role where I'm building real products and solving meaningful problems. I'd like to have deep skills in at least one area of technology, and be someone people trust to take ownership of a project. I also want to keep growing my communication skills, so I can eventually lead small teams, not just write code.",

    "Why did you choose your field of study?":
        "Honestly, I chose my field partly because it offered good opportunities and a strong engineering foundation. Over time, I realized I enjoy the problem-solving side of engineering more than anything else. That's what led me towards software and building projects. My degree taught me how to think logically, and I've used that mindset to explore technology beyond the classroom.",

    "What is something you are passionate about?":
        "I'm passionate about building things that people actually use. There's a special feeling when an idea in your head becomes something real that others can open on their phone. That's why I enjoy web development and content creation. I'm also passionate about self-improvement in general, whether it's fitness, skills, or communication. I like seeing measurable progress over time.",

    "What is your biggest achievement?":
        "One achievement I'm proud of is building and launching my own website from scratch. I designed it, wrote the code with the help of AI tools, fixed real bugs, and deployed it so anyone can use it. It may sound small, but it taught me the full cycle of a product, from idea to something live. I learned more from that than from any single course.",

    "What motivates you?":
        "I'm mostly motivated by progress. When I can see that I'm getting better at something, whether it's lifting heavier or writing better code, I want to keep going. I'm also motivated by building things that are useful to others. Knowing that someone actually uses what I made gives me a lot of energy. Deadlines help too, honestly.",

    "What do you enjoy doing outside of work or college?":
        "Outside of college, I spend a lot of time at the gym. It's my way of clearing my head and staying disciplined. I also enjoy working on personal projects, like websites and video content, because there's no pressure and I can experiment freely. And when I need a proper break, I like spending time with friends and family, usually over good food.",

    "What is one skill you are currently learning?":
        "Right now, I'm working on improving my spoken English and communication skills. I realized that knowing technical things isn't enough if you can't explain them clearly. So I practise speaking on random topics every day using a timer. It's uncomfortable at first, but I can already see that I hesitate less and organize my thoughts more clearly than before.",

    "Who is someone you look up to?":
        "I look up to people who built something from nothing through consistent effort, and the closest example for me is my father. He worked hard for years without shortcuts and always handled problems calmly. From a professional side, I admire founders who started with small, simple products and kept improving them based on real feedback, instead of waiting for perfection.",

    "What is your ideal work environment?":
        "My ideal work environment is one where people are given ownership and trusted to deliver. I like clear goals, but freedom in how I reach them. I also value a team where people share knowledge openly and give honest feedback, because that's how I learn fastest. Ideally, it's a place where good work is noticed, and mistakes are treated as lessons, not disasters.",

    "Why are you interested in this field?":
        "I'm interested in this field because it lets me turn ideas into real things very quickly. With just a laptop, you can build something that thousands of people can use. That's incredibly exciting. Technology also changes constantly, so there's always something new to learn, and I enjoy that. I've already built a few projects, and each one made me want to go deeper.",

    "What are three words that describe you?":
        "Three words that describe me are curious, consistent, and practical. Curious, because I like exploring new tools and ideas. Consistent, because I show up regularly, like going to the gym or practising a skill daily, even when motivation is low. And practical, because I prefer building something real over talking about it. I'd rather ship a simple version than plan forever.",

    "What is one thing you want to improve about yourself?":
        "One thing I want to improve is my ability to communicate confidently, especially when speaking in front of people. I usually have good ideas, but I sometimes struggle to express them clearly under pressure. I'm actively working on it by practising speaking on random topics every day. It's already helping, and I want to keep pushing until it feels natural.",

    // ---------- INTERVIEW · MEDIUM ----------
    "What is your biggest weakness?":
        "My biggest weakness is that I sometimes try to perfect things too early. When I start a project, I can spend too much time on small details before the core is working. I've learned to fix this by building a simple working version first and improving it later. It's made me faster, and I've realized that real feedback is more valuable than early polish.",

    "Tell me about a challenge you overcame.":
        "One challenge I faced was a bug in my website where the final result showed as blank. I had no idea why. Instead of giving up, I broke the problem into smaller pieces and checked each part. I discovered that two sizes in my code didn't match. Once I fixed them, it worked perfectly. It taught me to debug calmly and step by step, instead of guessing.",

    "Why should we hire you?":
        "You should hire me because I learn fast and I actually finish what I start. I've built and launched real projects on my own, which means I understand the full process, not just theory. I'm comfortable figuring out things I don't know yet. And I care about the people using what I build. I'll bring energy, ownership, and steady improvement to the team.",

    "Describe a time when you worked in a team.":
        "In college, I worked on a robotics project with a small team. The task was large, so we split it. I focused on the design and model, while others handled electronics and code. The hardest part was coordinating, because one person's delay affected everyone. We started short check-ins every few days, which fixed it. We finished on time, and I learned how much clear communication matters.",

    "Tell me about a time you made a mistake.":
        "Once, I made changes to a project and pushed them without testing properly. The live website broke on mobile, and I only noticed later. I fixed it quickly, but it was embarrassing. Since then, I always test on both desktop and mobile before deploying. The mistake was small, but the lesson was big: checking your work is part of the work, not an extra step.",

    "How do you handle pressure?":
        "I handle pressure by breaking big problems into small tasks. When everything feels urgent, I write down what needs to be done and decide what matters most. Then I focus on one thing at a time. Physical exercise also helps me stay calm during stressful weeks. I've noticed that pressure feels much smaller once I have a clear plan, even if the work stays the same.",

    "Describe a time you solved a difficult problem.":
        "During a research project, our model wasn't giving accurate results, and we couldn't tell why. I went back to basics and checked the data. It turned out many images were poorly labeled. We cleaned the dataset, and the accuracy improved significantly. That experience taught me that when something complex fails, the problem is often in the simple foundations, not the fancy parts.",

    "How do you prioritize your tasks?":
        "I prioritize tasks based on importance and deadlines. Every morning, I pick the one or two things that will make the biggest difference and do those first, before checking messages. Smaller tasks get grouped together later in the day. If everything seems urgent, I ask which task would cause the most damage if delayed. That usually makes the decision clear.",

    "Tell me about a time you showed leadership.":
        "During a group project, our team was falling behind because nobody was clearly in charge. I suggested we divide the work, set small deadlines, and meet briefly every few days. I also took responsibility for tracking progress. I didn't have an official title, but people appreciated the structure. We finished on time, and I realized leadership is often just taking the first step.",

    "How do you deal with criticism?":
        "I try to see criticism as free information. My first reaction might be defensive, I'm human, but I take a moment and ask whether the feedback is true. If it is, I fix it. If I'm not sure, I ask questions to understand better. Some of my biggest improvements came from uncomfortable feedback. Honest criticism is much more useful than polite praise.",

    "Describe a time you had to learn something quickly.":
        "When I decided to build my own website, I didn't really know how to deploy anything online. I had a few days, so I focused only on what I needed: Git, GitHub, and Vercel. I followed documentation, made mistakes, and asked AI tools when I got stuck. Within a short time, the site was live. It showed me that learning by doing is the fastest method for me.",

    "What would your teammates say about you?":
        "I think my teammates would say I'm reliable and easy to work with. If I say I'll do something, I do it. They'd probably also say I'm the one who suggests practical solutions when the team is stuck. And honestly, they might say I sometimes push for things to be done properly, even when we're tired. But I think they'd see that as a good thing.",

    "How do you handle disagreements with others?":
        "When I disagree with someone, I first try to understand their reasoning fully. Often, we want the same result but see different risks. I explain my view calmly and use facts or examples, not emotions. If we still disagree, we can test both ideas or let the person responsible make the final call. The goal is the best outcome, not winning the argument.",

    "Tell me about a project you are proud of.":
        "I'm proud of a speaking-practice website I built. It gives you random topics by category and difficulty, with a timer and topic history. I designed it, fixed bugs like animation issues, and deployed it online. What I'm proud of isn't that it's complicated. It's that I took an idea, finished it, and kept improving it based on actually using it myself.",

    "How do you stay motivated when a task becomes boring?":
        "When a task becomes boring, I remind myself why it matters and break it into small pieces. Finishing small pieces gives me a sense of progress. I also use time blocks, like working focused for forty-five minutes and then taking a short break. Sometimes I make it a challenge to finish faster. Motivation comes and goes, so I rely more on routine than on feeling inspired.",

    // ---------- INTERVIEW · HARD ----------
    "Tell me about a failure and what you learned from it.":
        "In one project, I spent weeks adding features before showing it to anyone. When people finally used it, they didn't care about most of those features, and they found basic problems I'd missed. I had wasted a lot of time. What I learned is to share early and get feedback fast. Now I build the simplest useful version first, test it with real users, and then improve.",

    "Why should we choose you over another candidate?":
        "I can't speak about other candidates, but I can tell you what I bring. I don't just learn concepts, I build and ship real things, so I understand how ideas turn into working products. I'm comfortable with uncertainty and figuring things out. And I'm genuinely committed to improving. If you choose me, you get someone who takes ownership and keeps getting better every month.",

    "Describe a situation where you disagreed with your team.":
        "In a team project, most members wanted to add many features before the deadline. I disagreed, because I felt we'd end up with many half-finished parts. I explained the risk and suggested we finish the core features properly first. They weren't fully convinced, so we agreed to focus on the core and add extras only if time allowed. We delivered a working project, and the team agreed it was the right call.",

    "What would you do if you completely disagreed with your manager?":
        "First, I'd make sure I fully understand my manager's reasoning, because they may have information I don't. Then I'd share my concern privately and respectfully, with facts and a possible alternative. If they still decide differently, I'd commit to their decision and do my best work, unless it was unethical. Disagreeing openly but supporting the final decision is how trust is built.",

    "Tell me about a time you failed to meet a deadline.":
        "During a busy exam period, I underestimated how long a project report would take, and I couldn't finish it on time. As soon as I realized, I informed the person in charge, explained what was done, and gave a realistic new date. I delivered it by then. Since that experience, I add buffer time to my estimates and communicate early instead of hoping things work out.",

    "Describe a decision you made with incomplete information.":
        "When choosing how to deploy my website, I didn't fully understand all the hosting options. I couldn't wait to learn everything, so I picked a popular, free option with good documentation, knowing I could switch later if needed. It worked well. I learned that when information is incomplete, it's often better to make a reversible decision quickly than to delay forever looking for the perfect choice.",

    "What would you do if your teammate was not contributing?":
        "I'd start by talking to them privately, without blaming them. There might be a reason, like personal problems, confusion about the task, or too much workload. I'd ask how I can help and make sure their responsibilities are clear. If nothing changed after that, I'd raise it with the team lead, focusing on the project's needs rather than complaining about the person.",

    "Tell me about a time you received unfair criticism.":
        "Once, I was criticized for a delay that was actually caused by something outside my control. My first instinct was to defend myself strongly. Instead, I stayed calm, explained the facts briefly, and focused on how we could avoid the problem next time. The person understood. I learned that even when criticism feels unfair, staying calm and solution-focused protects your reputation.",

    "How would you handle a project that was failing?":
        "First, I'd figure out why it's failing. Is it the timeline, the scope, the team, or the idea itself? I'd talk to the people involved and look at the facts. Then I'd focus on what can still be saved, maybe by reducing scope and delivering the most important part well. I'd also be honest with stakeholders early. Bad news gets worse the longer you hide it.",

    "Describe a situation where you had to convince someone who disagreed with you.":
        "In a group project, a teammate wanted to use a complicated approach that I thought was risky with our deadline. Instead of arguing, I made a quick comparison showing the time and risk of both options. Seeing it clearly laid out, he agreed to try the simpler approach first. I learned that people are convinced more by clear evidence than by strong opinions.",

    "What would you do if you discovered a serious mistake made by your manager?":
        "I'd tell my manager privately and as soon as possible, because serious mistakes usually get worse with time. I'd explain what I found, show the evidence, and, if possible, suggest a fix. I wouldn't announce it publicly or make it personal. Everyone makes mistakes. A good manager would appreciate being told early, and handling it respectfully builds trust on both sides.",

    "Tell me about a time you had to choose between speed and quality.":
        "When I was building my website, I wanted to launch quickly, but some parts weren't polished. I decided to launch with the core features working well, and improve the design afterwards. I didn't compromise on things that would break the experience, but I accepted that small details could wait. It taught me that quality matters most where users actually feel it.",

    "How would you handle two important deadlines on the same day?":
        "First, I'd check if either deadline has any flexibility, by talking to the people involved early, not at the last minute. Then I'd plan backwards, breaking both tasks into steps and starting the one with more uncertainty first. If it became clear I couldn't do both well, I'd communicate that immediately and agree on priorities. Being honest early is better than doing both badly.",

    "Describe a time when you took responsibility for something that went wrong.":
        "In a team project, a file I was responsible for had an error that delayed everyone's work. I could have blamed the confusing instructions, but I simply told the team it was my mistake, fixed it that night, and created a quick checklist so it wouldn't happen again. The team respected that. I learned that owning mistakes quickly makes people trust you more, not less.",

    "What would you do if you strongly disagreed with a company decision?":
        "I'd first try to understand the reasons behind the decision, since leadership usually sees a bigger picture. Then, if I still disagreed, I'd share my view through the right channels, respectfully and with clear reasoning. If the decision stayed the same, I'd accept it and do my job well. But if it went against my values or ethics, I'd have to seriously reconsider whether the company is right for me.",

    // ---------- DEBATE · EASY ----------
    "Should college students have attendance requirements?":
        "I believe attendance requirements in college should be flexible, not strict. College students are adults, and they should be responsible for their own learning. Some students learn better on their own or need time for internships and projects. However, completely removing attendance might make some students lazy. So a minimum attendance, like fifty percent, with the freedom to manage the rest, seems fair.",

    "Should homework be banned?":
        "I don't think homework should be completely banned, but there should be much less of it. Some practice at home helps students remember what they learned. But too much homework causes stress, kills curiosity, and takes away time for sports, hobbies, and family. Homework should be short, meaningful, and focused on practice, not just busy work to fill time.",

    "Is online education better than traditional education?":
        "Online education is better in some ways and worse in others. It's flexible, often cheaper, and lets you learn from the best teachers anywhere in the world. But traditional education gives discipline, face-to-face interaction, and friendships, which matter a lot. For self-motivated people, online learning can be amazing. For most students, I think a mix of both works best.",

    "Should students be allowed to use phones in class?":
        "I think students should be allowed to have phones, but not use them freely during class. Phones can be useful for quick research or learning tools, and they're important in emergencies. But during lectures, they're mostly a distraction, for the student and for others. A good rule is phones on silent, used only when the teacher allows it for a class activity.",

    "Should school uniforms be mandatory?":
        "I support school uniforms. They reduce pressure on students to show off expensive clothes, so differences between rich and poor families are less visible. They also save time in the morning and create a sense of belonging. The downside is that students lose some ability to express themselves. But I think school is about learning, and uniforms keep the focus there.",

    "Should college education be optional?":
        "College education already is optional, and I think society should treat it that way. Not everyone needs a degree to be successful. Skilled trades, business, and many tech jobs can be learned through practice and online resources. But a degree still opens doors for many careers, like medicine or law. People should choose college because it fits their goals, not because of pressure.",

    "Is reading books better than watching movies?":
        "I think reading books is better for the mind, though movies have their own value. Books make you imagine everything yourself, which builds focus and creativity. They also go much deeper into characters' thoughts. Movies are great for storytelling, visuals, and sharing an experience with friends. So I wouldn't say one replaces the other, but books give your brain a better workout.",

    "Should children have limited screen time?":
        "Yes, children should have limited screen time. Too much time on phones and tablets can affect sleep, attention, and physical activity. Children need to play outside, talk to people, and get bored sometimes, because that's how creativity develops. Screens aren't evil. Educational content can be useful. But parents should set clear limits and be good examples themselves.",

    "Should exams be replaced with projects?":
        "I think exams should be partly replaced with projects, not completely. Projects test real understanding, creativity, and teamwork, which are closer to what happens in actual jobs. Exams often reward memorization. But exams are still useful for checking basic knowledge quickly and fairly. A balance, maybe half projects and half exams, would give a more complete picture of a student's ability.",

    "Is studying in groups better than studying alone?":
        "It depends on the purpose. Studying alone is better for focus and for learning new material deeply. Group study is better for revision, solving doubts, and explaining concepts to others, which really tests your understanding. The risk with groups is that they turn into chatting sessions. Personally, I'd study alone first, then use a group to review and fill gaps.",

    "Should students be allowed to choose all their subjects?":
        "Students should have much more choice in their subjects, but not complete freedom. Choosing subjects you're interested in makes you more motivated and helps you discover your strengths. But some basic subjects, like language and math, are important for everyone. So I'd support a system with a small set of core subjects, and freedom to choose everything else.",

    "Should schools start later in the morning?":
        "Yes, I think schools should start a bit later. Research shows teenagers naturally sleep and wake later, so very early classes leave many students tired and unable to focus. Starting even an hour later could improve attention and health. The challenge is that parents' work schedules and transport would need to adjust. But students learning better is worth that effort.",

    "Is competition between students healthy?":
        "Some competition between students is healthy, but too much is harmful. A little competition pushes students to work harder and discover their potential. But when everything becomes about ranks and marks, students get stressed, stop helping each other, and start learning only for exams. The best environment encourages students to compete with their own past performance, while still collaborating.",

    "Should college students have part-time jobs?":
        "I think part-time jobs are good for college students, as long as they don't hurt studies. A job teaches responsibility, time management, and the value of money. It also gives real-world experience that looks good on a resume. But if a student works too many hours, grades and health can suffer. A few hours a week, ideally related to their field, is a great balance.",

    "Should everyone learn basic financial skills in school?":
        "Absolutely. Everyone should learn basic financial skills in school. Most people leave school knowing complex formulas but not how to budget, save, avoid debt, or understand taxes. These are skills everyone needs, regardless of their career. Learning about money early could prevent many bad decisions later in life. It's one of the most practical subjects schools could add.",

    // ---------- DEBATE · MEDIUM ----------
    "Should college education be free?":
        "I think college education should be free or very affordable, especially at public institutions. Education benefits the whole society, not just the individual, because educated people create jobs, pay taxes, and solve problems. The concern is cost and quality. Someone has to pay, usually taxpayers. A good middle path is free education for those who need it, with the rest paying reasonable fees.",

    "Is social media doing more harm than good?":
        "I think social media is currently doing slightly more harm than good, mainly because of how it's designed. It's built to keep us scrolling, which affects attention, sleep, and mental health, especially for teenagers. It also spreads misinformation quickly. But it has real benefits too, like connecting people and helping small creators. The problem isn't social media itself, but its addictive design.",

    "Should artificial intelligence be regulated?":
        "Yes, I think artificial intelligence should be regulated, especially in high-risk areas like healthcare, hiring, and law enforcement. AI can make biased or harmful decisions at a massive scale, and people need protection and transparency. But regulation should be smart, not heavy-handed. If rules are too strict, they could slow down beneficial innovation. The focus should be on preventing harm, not stopping progress.",

    "Is working from home better than working from an office?":
        "I think working from home is better for focused work, while the office is better for collaboration. At home, you save travel time and avoid distractions from colleagues. But you can feel isolated, and it's harder to learn from others, especially early in your career. For most people, I think a hybrid model, a few days at home and a few at the office, works best.",

    "Should companies allow a four-day work week?":
        "I think companies should at least experiment with a four-day work week. Several trials have shown that productivity stays the same or even improves, because people are more rested and focused. Employees are happier and less likely to quit. But it doesn't work for every industry, like hospitals or customer support. So it should be tested carefully rather than forced on everyone.",

    "Is online privacy still possible?":
        "Complete online privacy is almost impossible today, but some privacy is still possible. Every app and website collects data, and most people don't read what they agree to. But you can reduce your exposure by using privacy settings, strong passwords, and fewer unnecessary apps. Real privacy, though, needs stronger laws that force companies to collect less data in the first place.",

    "Should social media platforms verify everyone's identity?":
        "I don't think social media platforms should verify everyone's identity. Verification could reduce fake accounts, bots, and harassment, which is a real benefit. But it also creates risks. Whistleblowers, activists, and people in unsafe situations rely on anonymity to speak freely. A huge database of verified identities could also be hacked or misused. Optional verification is a better middle ground.",

    "Is university education still worth the cost?":
        "University education is still worth the cost for many people, but not for everyone. For careers like medicine, law, and engineering, a degree is essential. University also gives networks, structure, and maturity. But fees have grown so much that some students take on huge debt for degrees with poor job prospects. People should treat university as an investment and think carefully about the return.",

    "Should companies prioritize employee happiness?":
        "Yes, I think companies should prioritize employee happiness, and not just because it's kind. Happy employees are more productive, more creative, and less likely to leave. Replacing employees costs a lot of time and money. That doesn't mean free snacks and parties. Real happiness at work comes from fair pay, respect, growth opportunities, and reasonable workloads.",

    "Should smartphones be banned during important meetings?":
        "I think smartphones should be put away during important meetings, though not strictly banned. When people check their phones, they're only half present, and it sends a message that the meeting isn't important. Decisions get worse when people aren't focused. However, phones can be useful for notes or emergencies. A simple rule of phones face-down and on silent works well.",

    "Is remote work making people less productive?":
        "I don't think remote work makes people less productive overall. Many studies show people work as much or more at home, since they save commuting time and face fewer interruptions. However, some people struggle with discipline and isolation, and new employees may learn more slowly. So it depends on the person and the role. Remote work needs good habits and clear goals to succeed.",

    "Should governments regulate social media algorithms?":
        "I think governments should regulate social media algorithms to some extent, mainly for transparency. These algorithms decide what billions of people see, and they can spread misinformation or harm teenagers' mental health. People should know why they're seeing certain content and have the option to choose a simple feed. But governments shouldn't control what content is shown, as that could become censorship.",

    "Is artificial intelligence a threat to employment?":
        "AI is a threat to some jobs, but I don't think it will destroy employment overall. Repetitive tasks in areas like data entry and customer support will likely be automated. But history shows that new technology also creates new types of jobs. The real challenge is the transition. Workers need opportunities to learn new skills, or many people could be left behind.",

    "Should people be allowed to remain anonymous online?":
        "Yes, I believe people should be allowed to remain anonymous online. Anonymity protects whistleblowers, activists, and people who want to discuss sensitive topics like mental health without being judged. The downside is that some people use anonymity to harass others. But the solution should be better moderation and consequences for harmful behavior, not removing anonymity for everyone.",

    "Is competition between companies good for consumers?":
        "Yes, competition between companies is generally very good for consumers. When companies compete, they lower prices, improve quality, and innovate faster to win customers. When one company dominates a market, it can raise prices and stop improving. That's why governments have competition laws. However, competition can sometimes lead to cutting corners, so some regulation is still needed.",

    // ---------- DEBATE · HARD ----------
    "Should governments control the development of artificial intelligence?":
        "I think governments should set rules for AI development, but not fully control it. AI is powerful enough to affect jobs, elections, and even national security, so leaving it entirely to private companies is risky. Governments can require safety testing and transparency. But if governments control it completely, innovation may slow down, and AI could be misused for surveillance. Oversight, not control, is the balance.",

    "Is privacy more important than national security?":
        "This is a difficult balance, but I lean towards protecting privacy. National security is important, and sometimes governments need information to prevent attacks. But history shows that surveillance powers are often expanded and misused against ordinary citizens and critics. Privacy protects freedom. I'd support targeted surveillance with court approval, but not mass surveillance of everyone just in case.",

    "Should wealthy people pay significantly higher taxes?":
        "There are strong arguments on both sides. Supporters say the wealthy benefit most from society's infrastructure, and higher taxes could fund education and healthcare, reducing inequality. Critics argue very high taxes discourage investment and push wealthy people and businesses to move abroad. I think a fair system asks the wealthy to contribute more, while closing loopholes, instead of setting extremely high rates.",

    "Can censorship ever be justified?":
        "I think censorship can be justified in a few narrow cases, like content that directly incites violence, child abuse material, or private information that puts someone in danger. But censorship is dangerous because the power to decide what's harmful can easily be abused to silence critics. So any censorship should be clearly defined, limited, transparent, and open to legal challenge.",

    "Should governments have the right to regulate misinformation?":
        "This is tricky. Misinformation can cause real harm, especially during health crises and elections. But giving governments the power to decide what's true is risky, because they might label criticism of themselves as misinformation. I think governments should focus on transparency, like requiring platforms to label sources and reduce viral spread, rather than directly deciding what people are allowed to say.",

    "Is democracy the best form of government?":
        "I think democracy is the best form of government we've found so far, though it's far from perfect. It can be slow, and voters can be misled. But it gives people a peaceful way to remove bad leaders and protects basic freedoms better than other systems. As the famous saying goes, it's the worst form of government, except for all the others.",

    "Should freedom of speech have limits?":
        "Yes, I believe freedom of speech should have some limits, but very few. Speech that directly incites violence, threatens someone, or spreads private information to harm people shouldn't be protected. But offensive or unpopular opinions should still be allowed, because who decides what's offensive? The danger of limiting speech too much is greater than the danger of hearing things we disagree with.",

    "Should companies be responsible for the mental health effects of their products?":
        "I think companies should be partly responsible, especially when they knowingly design products to be addictive. If a social media app is built to keep teenagers scrolling, even when the company knows it harms them, that's similar to selling an unsafe product. But users and parents also have responsibility. Companies should be transparent, offer healthy controls, and avoid manipulative design.",

    "Is economic inequality a greater problem than lack of economic growth?":
        "It depends on the country. In poor countries, lack of growth is usually the bigger problem, because growth lifts millions out of poverty. But in richer countries, inequality may be the bigger issue, since growth often benefits only the top while others struggle. I think both matter. Growth without fairness creates resentment, and fairness without growth just divides a small pie.",

    "Should AI-generated content always be labeled?":
        "I think AI-generated content should be labeled in important contexts, like news, political ads, and realistic images or videos of real people. People deserve to know if what they're seeing is real, especially with deepfakes becoming convincing. But labeling every small AI-assisted edit or grammar fix would be impractical. The rule should focus on content that could deceive people.",

    "Should governments have access to encrypted private messages?":
        "I don't think governments should have general access to encrypted private messages. Creating a backdoor for governments also creates a weakness that criminals and hostile countries can exploit. Encryption protects everyone, including journalists and businesses. Governments can still investigate crimes through other methods, like accessing devices with court warrants, without weakening security for billions of people.",

    "Can a society be truly free without economic equality?":
        "I think a society can't be fully free if economic inequality is extreme. If someone is struggling to afford food or healthcare, their legal freedoms don't mean much in practice. The rich can also use money to influence politics. But I don't think perfect economic equality is needed, or even possible. Real freedom needs a basic level of security for everyone, not identical incomes.",

    "Should powerful technologies be restricted even if they provide economic benefits?":
        "Yes, I think some powerful technologies should be restricted, even if they're profitable. Economic benefits matter, but not more than human safety. We already restrict nuclear technology and certain chemicals for that reason. The key is to make restrictions targeted at real risks, based on evidence, and coordinated internationally. Otherwise, the risky work just moves to countries with weaker rules.",

    "Is individual privacy worth sacrificing for public safety?":
        "I believe small, temporary sacrifices of privacy can be acceptable for public safety, like security checks at airports. But permanent, large-scale sacrifices are dangerous. Once privacy is given up, it's very hard to get back, and the data collected can be misused by future governments or hackers. So any trade-off should be limited, transparent, and have a clear expiry date.",

    "Should future generations have a say in decisions made today?":
        "Future generations can't vote, but I think their interests should be represented in today's decisions. Choices about climate, debt, and natural resources will affect people who aren't born yet. Some countries have created special commissioners for future generations, which I think is a smart idea. Our responsibility is to avoid leaving behind problems we wouldn't want to inherit ourselves.",
};
