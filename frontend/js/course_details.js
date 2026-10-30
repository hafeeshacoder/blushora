const student =
JSON.parse(localStorage.getItem("loggedInStudent"));

const studentKey = student.email;
const courseData = {

python:{

title:"Python Programming",

image:"https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=80",

overview:

"Learn Python programming from the fundamentals to advanced concepts. This course covers variables, operators, control statements, functions, object-oriented programming, file handling, exception handling, modules, and real-world application development using Python.",

description:

"This comprehensive Python Programming course is designed for beginners as well as learners who want to strengthen their programming skills. Through practical examples and mini projects, students will gain confidence in solving real-world problems using Python.",

duration:"8 Weeks",

instructor:"Dr. John Smith",

level:"Beginner",

mode:"Online",

modules:[

"Introduction to Python and Installation",

"Variables, Data Types and Operators",

"Conditional Statements and Loops",

"Functions and Modules",

"Strings, Lists, Tuples, Sets and Dictionaries",

"Object-Oriented Programming",

"File Handling and Exception Handling",

"Mini Project using Python"

],

skills:[

"Python Syntax",

"Problem Solving",

"Object-Oriented Programming",

"File Handling",

"Exception Handling",

"Debugging",

"Algorithm Development",

"Application Development"

],

outcomes:[

"Understand Python fundamentals",

"Write efficient Python programs",

"Develop console-based applications",

"Handle files and exceptions",

"Apply OOP concepts",

"Build real-world Python projects"

],

prerequisites:[

"Basic Computer Knowledge",

"Interest in Programming",

"Logical Thinking",

"No prior programming experience required"

],

instructorInfo:

"Dr. John Smith is a senior software engineer and programming instructor with over 12 years of experience in Python development, automation, artificial intelligence, and full-stack application development. He has trained thousands of students and industry professionals."

},
java:{

title:"Java Programming",

image:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",

overview:

"Master Java programming by learning object-oriented programming, exception handling, collections, file handling, multithreading, JDBC, and application development using Java.",

description:

"This Java Programming course provides a strong foundation in object-oriented programming and application development. Students will learn core Java concepts through practical coding exercises, hands-on examples, and mini projects suitable for academic and industry requirements.",

duration:"10 Weeks",

instructor:"Prof. Michael Brown",

level:"Intermediate",

mode:"Online",

modules:[

"Introduction to Java and JDK Installation",

"Variables, Data Types and Operators",

"Control Statements and Loops",

"Methods and Arrays",

"Object-Oriented Programming",

"Inheritance, Polymorphism and Abstraction",

"Exception Handling and File Handling",

"Collections Framework",

"Multithreading",

"Mini Project using Java"

],

skills:[

"Core Java",

"Object-Oriented Programming",

"Collections Framework",

"Exception Handling",

"File Handling",

"Multithreading",

"JDBC Basics",

"Java Application Development"

],

outcomes:[

"Understand Core Java concepts",

"Develop object-oriented applications",

"Handle exceptions effectively",

"Work with Java Collections",

"Create multithreaded programs",

"Build Java-based projects"

],

prerequisites:[

"Basic Computer Knowledge",

"Programming Fundamentals (Preferred)",

"Logical Thinking",

"Interest in Software Development"

],

instructorInfo:

"Prof. Michael Brown has more than 15 years of experience in Java development, enterprise application design, and software engineering. He has mentored university students and corporate professionals in Java technologies."

},
web:{

title:"Web Development",

image:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",

overview:

"Learn modern web development by mastering HTML5, CSS3, JavaScript, responsive web design, Bootstrap, DOM manipulation, and website deployment techniques.",

description:

"This course introduces students to the complete web development process. Starting from HTML and CSS, learners will build responsive websites using JavaScript and Bootstrap while understanding industry-standard web development practices.",

duration:"10 Weeks",

instructor:"Sarah Johnson",

level:"Beginner",

mode:"Online",

modules:[

"Introduction to Web Development",

"HTML5 Fundamentals",

"CSS3 Styling and Layouts",

"Responsive Web Design",

"Bootstrap Framework",

"JavaScript Basics",

"DOM Manipulation",

"Forms and Validation",

"Website Deployment",

"Responsive Website Project"

],

skills:[

"HTML5",

"CSS3",

"JavaScript",

"Bootstrap",

"Responsive Design",

"DOM Manipulation",

"Website Development",

"Frontend Development"

],

outcomes:[

"Develop responsive websites",

"Design attractive user interfaces",

"Create interactive webpages",

"Validate forms using JavaScript",

"Deploy static websites",

"Build complete frontend projects"

],

prerequisites:[

"Basic Computer Knowledge",

"Internet Browsing Skills",

"No Programming Experience Required",

"Interest in Website Development"

],

instructorInfo:

"Sarah Johnson is a frontend developer and UI designer with over 10 years of experience building responsive websites and modern web applications. She has trained students in HTML, CSS, JavaScript, Bootstrap, and frontend development best practices."

},
database:{

title:"Database Management System",

image:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",

overview:

"Learn the fundamentals of Database Management Systems including relational databases, SQL, normalization, transactions, indexing, and database design for modern applications.",

description:

"This course provides a comprehensive understanding of database systems used in software applications. Students will learn database modeling, SQL queries, normalization techniques, transactions, and practical database implementation through hands-on exercises.",

duration:"8 Weeks",

instructor:"Dr. David Wilson",

level:"Intermediate",

mode:"Online",

modules:[

"Introduction to Database Systems",

"ER Model and Database Design",

"Relational Database Concepts",

"SQL Basics",

"Advanced SQL Queries",

"Normalization",

"Transactions and Concurrency",

"Database Security and Backup",

"Indexing and Optimization",

"Mini Database Project"

],

skills:[

"Database Design",

"SQL",

"Normalization",

"ER Diagram",

"Transactions",

"Joins",

"Stored Procedures",

"Database Administration"

],

outcomes:[

"Design relational databases",

"Write SQL queries confidently",

"Normalize database tables",

"Implement database security",

"Optimize database performance",

"Develop database-driven applications"

],

prerequisites:[

"Basic Computer Knowledge",

"Logical Thinking",

"Basic Programming Knowledge (Preferred)",

"Interest in Database Technologies"

],

instructorInfo:

"Dr. David Wilson is a database architect with over 14 years of experience in SQL Server, MySQL, PostgreSQL, Oracle Database, and enterprise database design. He has worked on large-scale database systems across multiple industries."

},
machinelearning:{

title:"Machine Learning",

image:"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",

overview:

"Learn the fundamentals of Machine Learning including supervised learning, unsupervised learning, data preprocessing, feature engineering, model evaluation, and predictive analytics using Python.",

description:

"This course introduces learners to the exciting world of Machine Learning. Students will understand how intelligent systems learn from data and build predictive models using industry-standard tools and real-world datasets.",

duration:"12 Weeks",

instructor:"Dr. Emily Davis",

level:"Advanced",

mode:"Online",

modules:[

"Introduction to Machine Learning",

"Python for Machine Learning",

"Data Collection and Preprocessing",

"Feature Engineering",

"Supervised Learning Algorithms",

"Unsupervised Learning Algorithms",

"Model Evaluation",

"Regression Techniques",

"Classification Techniques",

"Machine Learning Mini Project"

],

skills:[

"Python",

"Data Analysis",

"Machine Learning",

"Feature Engineering",

"Regression",

"Classification",

"Model Evaluation",

"Predictive Analytics"

],

outcomes:[

"Understand Machine Learning concepts",

"Prepare datasets for training",

"Build predictive models",

"Evaluate model performance",

"Apply supervised and unsupervised learning",

"Develop Machine Learning applications"

],

prerequisites:[

"Basic Python Programming",

"Basic Mathematics",

"Statistics Fundamentals",

"Interest in Artificial Intelligence"

],

instructorInfo:

"Dr. Emily Davis is a Machine Learning Engineer and Data Scientist with over 11 years of experience in predictive analytics, artificial intelligence, and deep learning. She has developed AI solutions for healthcare, finance, and education industries."

},
artificialintelligence:{

title:"Artificial Intelligence",

image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",

overview:

"Learn the fundamentals of Artificial Intelligence including intelligent agents, search algorithms, knowledge representation, reasoning, natural language processing, computer vision, and modern AI applications.",

description:

"This Artificial Intelligence course provides a comprehensive introduction to intelligent systems and modern AI technologies. Students will explore how machines simulate human intelligence through practical examples, algorithms, and real-world AI applications.",

duration:"12 Weeks",

instructor:"Dr. Sophia Martin",

level:"Advanced",

mode:"Online",

modules:[

"Introduction to Artificial Intelligence",

"History and Applications of AI",

"Intelligent Agents",

"Problem Solving using Search",

"Knowledge Representation",

"Reasoning and Expert Systems",

"Natural Language Processing",

"Computer Vision Fundamentals",

"Ethics in Artificial Intelligence",

"Artificial Intelligence Mini Project"

],

skills:[

"Artificial Intelligence",

"Problem Solving",

"Knowledge Representation",

"Reasoning",

"Natural Language Processing",

"Computer Vision",

"AI Algorithms",

"Decision Making"

],

outcomes:[

"Understand AI fundamentals",

"Design intelligent solutions",

"Apply AI search techniques",

"Develop basic AI models",

"Analyze real-world AI applications",

"Build AI-based mini projects"

],

prerequisites:[

"Basic Programming Knowledge",

"Logical Thinking",

"Mathematics Fundamentals",

"Interest in Artificial Intelligence"

],

instructorInfo:

"Dr. Sophia Martin is an Artificial Intelligence researcher with over 13 years of experience in intelligent systems, machine learning, robotics, and AI-driven software development. She has worked on research projects and industry AI solutions across healthcare, finance, and education."

},
cybersecurity:{

title:"Cyber Security",

image:"https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",

overview:

"Learn Cyber Security concepts including network security, cryptography, ethical hacking, web security, malware analysis, cloud security, and best practices for protecting digital systems.",

description:

"This course introduces learners to the fundamentals of Cyber Security and modern security practices. Students will understand cyber threats, security mechanisms, encryption techniques, penetration testing concepts, and methods used to secure computer systems and networks.",

duration:"10 Weeks",

instructor:"Daniel Lee",

level:"Intermediate",

mode:"Online",

modules:[

"Introduction to Cyber Security",

"Network Security Fundamentals",

"Cryptography Basics",

"Authentication and Authorization",

"Web Application Security",

"Ethical Hacking Concepts",

"Malware and Ransomware",

"Cloud Security",

"Cyber Security Best Practices",

"Cyber Security Mini Project"

],

skills:[

"Network Security",

"Cyber Security",

"Ethical Hacking",

"Cryptography",

"Web Security",

"Cloud Security",

"Risk Assessment",

"Incident Response"

],

outcomes:[

"Understand cyber threats",

"Secure computer networks",

"Implement security best practices",

"Identify common vulnerabilities",

"Apply ethical hacking concepts",

"Protect digital systems"

],

prerequisites:[

"Basic Computer Knowledge",

"Basic Networking Concepts",

"Logical Thinking",

"Interest in Information Security"

],

instructorInfo:

"Daniel Lee is a Cyber Security Consultant with over 12 years of experience in network security, penetration testing, cloud security, vulnerability assessment, and ethical hacking. He has worked with organizations to strengthen cybersecurity and train professionals in information security."

},
cloudcomputing:{

title:"Cloud Computing",

image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",

overview:

"Learn Cloud Computing concepts including cloud architecture, virtualization, cloud service models, deployment models, cloud storage, security, and popular cloud platforms used in modern IT infrastructure.",

description:

"This course provides a comprehensive understanding of Cloud Computing technologies. Students will explore cloud architecture, virtualization, Infrastructure as a Service (IaaS), Platform as a Service (PaaS), Software as a Service (SaaS), cloud deployment strategies, and practical cloud-based solutions.",

duration:"8 Weeks",

instructor:"James Anderson",

level:"Intermediate",

mode:"Online",

modules:[

"Introduction to Cloud Computing",

"Cloud Architecture",

"Virtualization Concepts",

"Cloud Service Models (IaaS, PaaS, SaaS)",

"Cloud Deployment Models",

"Cloud Storage and Networking",

"Cloud Security",

"Cloud Monitoring and Management",

"Cloud Platforms Overview",

"Cloud Computing Mini Project"

],

skills:[

"Cloud Computing",

"Virtualization",

"Cloud Architecture",

"AWS Fundamentals",

"Microsoft Azure Basics",

"Google Cloud Platform",

"Cloud Security",

"Cloud Deployment"

],

outcomes:[

"Understand Cloud Computing concepts",

"Differentiate cloud service models",

"Deploy cloud-based solutions",

"Implement cloud security practices",

"Manage cloud resources",

"Develop cloud-based applications"

],

prerequisites:[

"Basic Computer Knowledge",

"Basic Networking Concepts",

"Fundamental Programming Knowledge",

"Interest in Cloud Technologies"

],

instructorInfo:

"James Anderson is a Cloud Solutions Architect with over 14 years of experience in AWS, Microsoft Azure, Google Cloud Platform, virtualization, enterprise cloud migration, and cloud infrastructure management. He has trained professionals in designing and deploying scalable cloud solutions."

},
mobiledevelopment:{

title:"Mobile App Development",

image:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",

overview:

"Learn to design and develop modern Android and cross-platform mobile applications using industry-standard tools, user interface design principles, databases, APIs, and application deployment.",

description:

"This course provides a complete introduction to Mobile App Development. Students will learn mobile UI design, activity lifecycle, layouts, navigation, database integration, REST API communication, testing, debugging, and application deployment through practical projects.",

duration:"10 Weeks",

instructor:"Olivia Taylor",

level:"Intermediate",

mode:"Online",

modules:[

"Introduction to Mobile Applications",

"Mobile Development Environment Setup",

"User Interface Design",

"Layouts and Navigation",

"Activities and Intents",

"Working with APIs",

"SQLite and Firebase Basics",

"User Authentication",

"Testing and Deployment",

"Mobile App Project"

],

skills:[

"Android Development",

"UI/UX Design",

"Java/Kotlin Basics",

"REST API Integration",

"Firebase",

"SQLite",

"App Deployment",

"Mobile Application Development"

],

outcomes:[

"Design mobile user interfaces",

"Develop Android applications",

"Connect applications with APIs",

"Store and retrieve data",

"Deploy mobile applications",

"Build complete mobile projects"

],

prerequisites:[

"Basic Programming Knowledge",

"Computer Fundamentals",

"Problem Solving Skills",

"Interest in Mobile Technologies"

],

instructorInfo:

"Olivia Taylor is a Mobile Application Developer with over 10 years of experience in Android development, Flutter applications, mobile UI design, Firebase integration, and cross-platform application development. She has developed and deployed numerous enterprise and consumer mobile applications."

},
devops:{

title:"DevOps",

image:"https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",

overview:

"Learn DevOps practices including version control, continuous integration, continuous deployment, Docker, Kubernetes, cloud deployment, monitoring, and automation used in modern software development.",

description:

"This course introduces learners to DevOps principles and industry practices. Students will understand how development and operations teams collaborate using automation tools, CI/CD pipelines, Docker containers, Kubernetes orchestration, Git, Jenkins, and cloud platforms.",

duration:"8 Weeks",

instructor:"William Thomas",

level:"Intermediate",

mode:"Online",

modules:[

"Introduction to DevOps",

"Version Control using Git",

"GitHub Workflow",

"Continuous Integration",

"Continuous Deployment",

"Docker Containers",

"Kubernetes Basics",

"Cloud Deployment",

"Monitoring and Logging",

"DevOps Project"

],

skills:[

"Git",

"GitHub",

"Docker",

"Kubernetes",

"Jenkins",

"CI/CD",

"Cloud Deployment",

"Automation"

],

outcomes:[

"Understand DevOps lifecycle",

"Create CI/CD pipelines",

"Deploy containerized applications",

"Use Git efficiently",

"Automate software deployment",

"Build complete DevOps workflows"

],

prerequisites:[

"Basic Programming Knowledge",

"Basic Linux Commands",

"Computer Networks Basics",

"Interest in Cloud Technologies"

],

instructorInfo:

"William Thomas is a Senior DevOps Engineer with over 15 years of experience in cloud infrastructure, CI/CD automation, Docker, Kubernetes, AWS, Azure, and enterprise deployment pipelines."

}

};
//================ GET COURSE =================//

//================ LOAD COURSE =================//

const courseKey =
localStorage.getItem("selectedCourseKey") || "python";

const adminCourses =
JSON.parse(localStorage.getItem("courses")) || [];

function buildCourseFromAdmin(match, fallback) {

    fallback = fallback || {};

    return {
        title: match.title || fallback.title,
        image: match.image || fallback.image,
        overview: match.overview || fallback.overview,
        description: match.overview || fallback.description || "",
        duration: match.duration || fallback.duration,
        instructor: match.instructor || fallback.instructor,
        level: match.level || fallback.level,
        mode: fallback.mode || "Online",
        modules: (match.syllabus || []).filter(Boolean).length
            ? match.syllabus.filter(Boolean)
            : (fallback.modules || []),
        skills: fallback.skills || [],
        outcomes: (match.outcomes || []).filter(Boolean).length
            ? match.outcomes.filter(Boolean)
            : (fallback.outcomes || []),
        prerequisites: (match.prerequisites || []).filter(Boolean).length
            ? match.prerequisites.filter(Boolean)
            : (fallback.prerequisites || []),
        instructorInfo: fallback.instructorInfo ||
            (match.instructor ? match.instructor + " is the instructor for this course." : "")
    };
}

let course;

if (courseKey.indexOf("new:") === 0) {

    // Brand-new course published by admin (no hardcoded entry exists)
    const title = decodeURIComponent(courseKey.slice(4));
    const match = adminCourses.find(c => c.title === title);

    if (!match) {
        alert("This course is no longer available.");
        window.location.href = "courses.html";
    }

    course = buildCourseFromAdmin(match);

} else {

    const staticCourse = courseData[courseKey];
    const match = adminCourses.find(c => c.key === courseKey);

    if (!match && !staticCourse) {
        alert("This course is no longer available.");
        window.location.href = "courses.html";
    } else if (!match) {
        // This hardcoded course was deleted by the admin
        alert("This course is no longer available.");
        window.location.href = "courses.html";
    } else {
        course = buildCourseFromAdmin(match, staticCourse);
    }

}

//================ HERO =================//

document.getElementById("title").textContent = course.title;

document.getElementById("overview").textContent = course.overview;

document.getElementById("courseDescription").textContent = course.description;

document.getElementById("courseImage").src = course.image;
const img =
document.getElementById("courseImage");

img.onerror = function(){

    this.src="images/default-course.jpg";

};

document.getElementById("duration").textContent = course.duration;

document.getElementById("instructor").textContent = course.instructor;

document.getElementById("level").textContent = course.level;

document.getElementById("mode").textContent = course.mode;

document.getElementById("instructorName").textContent = course.instructor;

document.getElementById("instructorInfo").textContent = course.instructorInfo;
document.title =
course.title + " | Blushora";


//================ MODULES =================//

let modulesHTML="";

course.modules.forEach((module,index)=>{

modulesHTML+=`

<div class="module-card">

<h3>Module ${index+1}</h3>

<p>${module}</p>

</div>

`;

});

document.getElementById("modules").innerHTML=modulesHTML;
console.log(
"Total Modules : " +
course.modules.length
);


//================ SKILLS =================//

let skillsHTML="";

course.skills.forEach(skill=>{

skillsHTML+=`

<div class="skill-card">

<h3>${skill}</h3>

<p>

Develop practical knowledge in ${skill}.

</p>

</div>

`;

});

document.getElementById("skills").innerHTML=skillsHTML;


//================ OUTCOMES =================//

let outcomesHTML="";

course.outcomes.forEach(outcome=>{

outcomesHTML+=`

<div class="skill-card">

<h3>${outcome}</h3>

<p>

Successfully achieve this learning outcome after completing the course.

</p>

</div>

`;

});

document.getElementById("outcomes").innerHTML=outcomesHTML;


//================ PREREQUISITES =================//

let prerequisitesHTML="";

course.prerequisites.forEach(item=>{

prerequisitesHTML+=`

<div class="skill-card">

<h3>${item}</h3>

<p>

Recommended before starting this course.

</p>

</div>

`;

});

document.getElementById("prerequisites").innerHTML=prerequisitesHTML;
//================ CHECK ENROLLMENT =================//

const enrolled =
JSON.parse(
localStorage.getItem(studentKey+"_enrolledCourses")
) || [];
const enrollBtn =
document.querySelector(".enroll-btn");

if(enrolled.some(c=>c.title===course.title)){

    enrollBtn.textContent="Already Enrolled";

    enrollBtn.disabled=true;

}


//================ ENROLL =================//

function enrollCourse(){

    let enrolledCourses =
        JSON.parse(
            localStorage.getItem(
                studentKey + "_enrolledCourses"
            )
        ) || [];


    const already =
        enrolledCourses.some(
            c => c.title === course.title
        );


    if(already){

        alert(
            "You have already enrolled in this course."
        );

        return;

    }


    // ===============================
    // STUDENT ENROLLMENT
    // ===============================

    enrolledCourses.push(course);


    // Keep the selected course
    localStorage.setItem(
        "selectedCourseKey",
        courseKey
    );


    // Keep existing student-specific storage
    localStorage.setItem(
        studentKey + "_enrolledCourses",
        JSON.stringify(enrolledCourses)
    );


    // ===============================
    // ADMIN ENROLLMENT RECORD
    // ===============================

    let allEnrollments =
        JSON.parse(
            localStorage.getItem(
                "enrolledCourses"
            )
        ) || [];


    // Create the enrollment record
    const enrollmentRecord = {

        student:
            student.name ||
            student.studentName ||
            student.email,

        studentEmail:
            student.email,

        title:
            course.title,

        course:
            course.title,

        courseKey:
            courseKey,

        enrollDate:
            new Date().toLocaleDateString(),

        status:
            "Pending",

        completed:
            false

    };


    // Save enrollment for Admin
    allEnrollments.push(
        enrollmentRecord
    );


    localStorage.setItem(
        "enrolledCourses",
        JSON.stringify(allEnrollments)
    );


    // ===============================
    // GO TO SUCCESS PAGE
    // ===============================

    window.location.href =
        "enrollment_success.html";

}
window.scrollTo({

    top:0,

    behavior:"smooth"

});
console.log(
course.title +
" loaded successfully."
);
function logout() {

    localStorage.removeItem("loggedInStudent");

    alert("Logged Out Successfully.");

    window.location.href = "login.html";

}
document.getElementById("logoutBtn").addEventListener("click", logout);