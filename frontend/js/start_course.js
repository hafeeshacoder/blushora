//=====================================================

const student =
JSON.parse(localStorage.getItem("loggedInStudent"));

const studentKey = student.email;
const courseData={

//=====================================================
// PYTHON PROGRAMMING
//=====================================================

python:{

title:"Python Programming",

image:"https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=1200&q=80",

overview:"Master Python programming from fundamentals to advanced concepts through practical coding examples and projects.",

instructor:"Dr. John Smith",

duration:"8 Weeks",

level:"Beginner",

mode:"Online",

videos:[

{
title:"Python Full Course for Beginners",
thumbnail:"https://img.youtube.com/vi/rfscVS0vtbw/maxresdefault.jpg",
link:"https://www.youtube.com/watch?v=rfscVS0vtbw"
},

{
title:"Python Object Oriented Programming",
thumbnail:"https://img.youtube.com/vi/JeznW_7DlB0/maxresdefault.jpg",
link:"https://www.youtube.com/watch?v=JeznW_7DlB0"
},

{
title:"Python Projects",
thumbnail:"https://img.youtube.com/vi/8ext9G7xspg/maxresdefault.jpg",
link:"https://www.youtube.com/watch?v=8ext9G7xspg"
}

],

materials:[

{

title:"Official Python Documentation",

description:"Complete Python documentation.",

link:"https://docs.python.org/3/"

},

{

title:"Google Python Class",

description:"Python course from Google.",

link:"https://developers.google.com/edu/python"

},

{

title:"Real Python",

description:"Advanced Python tutorials.",

link:"https://realpython.com/"

},

{

title:"W3Schools Python",

description:"Python examples and exercises.",

link:"https://www.w3schools.com/python/"

}

],



},

//=====================================================
// JAVA PROGRAMMING
//=====================================================

java:{

title:"Java Programming",

image:"https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=1200&q=80",

overview:"Learn Java programming, Object-Oriented Programming, Collections Framework, Multithreading and Java application development.",

instructor:"Prof. Michael Brown",

duration:"10 Weeks",

level:"Intermediate",

mode:"Online",

videos:[

{

title:"Java Full Course",

thumbnail:"https://img.youtube.com/vi/grEKMHGYyns/maxresdefault.jpg",

link:"https://www.youtube.com/watch?v=grEKMHGYyns"

},

{

title:"Java OOP Concepts",

thumbnail:"https://img.youtube.com/vi/eIrMbAQSU34/maxresdefault.jpg",

link:"https://www.youtube.com/watch?v=eIrMbAQSU34"

},

{

title:"Java Collections Framework",

thumbnail:"https://img.youtube.com/vi/WN9TdHpGOXk/maxresdefault.jpg",

link:"https://www.youtube.com/watch?v=WN9TdHpGOXk"

}

],

materials:[

{

title:"Oracle Java Documentation",

description:"Official Java Documentation.",

link:"https://docs.oracle.com/en/java/"

},

{

title:"W3Schools Java",

description:"Java Tutorial.",

link:"https://www.w3schools.com/java/"

},

{

title:"Baeldung Java",

description:"Advanced Java tutorials.",

link:"https://www.baeldung.com/"

},

{

title:"GeeksforGeeks Java",

description:"Java programming articles.",

link:"https://www.geeksforgeeks.org/java/"

}

],


},
//=====================================================
// WEB DEVELOPMENT
//=====================================================

web:{

title:"Web Development",

image:"https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1200&q=80",

overview:"Learn HTML, CSS, JavaScript, Bootstrap and Responsive Web Design to build modern websites.",

instructor:"Sarah Johnson",

duration:"10 Weeks",

level:"Beginner",

mode:"Online",

videos:[

{
title:"HTML Full Course",
thumbnail:"https://img.youtube.com/vi/pQN-pnXPaVg/maxresdefault.jpg",
link:"https://www.youtube.com/watch?v=pQN-pnXPaVg"
},

{
title:"CSS Full Course",
thumbnail:"https://img.youtube.com/vi/1Rs2ND1ryYc/maxresdefault.jpg",
link:"https://www.youtube.com/watch?v=1Rs2ND1ryYc"
},

{
title:"JavaScript Full Course",
thumbnail:"https://img.youtube.com/vi/PkZNo7MFNFg/maxresdefault.jpg",
link:"https://www.youtube.com/watch?v=PkZNo7MFNFg"
}

],

materials:[

{
title:"MDN HTML",
description:"Official HTML documentation.",
link:"https://developer.mozilla.org/en-US/docs/Web/HTML"
},

{
title:"MDN CSS",
description:"Official CSS documentation.",
link:"https://developer.mozilla.org/en-US/docs/Web/CSS"
},

{
title:"MDN JavaScript",
description:"Official JavaScript documentation.",
link:"https://developer.mozilla.org/en-US/docs/Web/JavaScript"
},

{
title:"Bootstrap Documentation",
description:"Bootstrap official guide.",
link:"https://getbootstrap.com/docs/"
}

],



},


//=====================================================
// DATABASE MANAGEMENT SYSTEM
//=====================================================

database:{

title:"Database Management System",

image:"https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80",

overview:"Learn relational databases, SQL, normalization, joins and database design using MySQL and PostgreSQL.",

instructor:"Dr. David Wilson",

duration:"8 Weeks",

level:"Intermediate",

mode:"Online",

videos:[

{
title:"DBMS Complete Course",
thumbnail:"https://img.youtube.com/vi/HXV3zeQKqGY/maxresdefault.jpg",
link:"https://www.youtube.com/watch?v=HXV3zeQKqGY"
},

{
title:"SQL Tutorial",
thumbnail:"https://img.youtube.com/vi/7S_tz1z_5bA/maxresdefault.jpg",
link:"https://www.youtube.com/watch?v=7S_tz1z_5bA"
},

{
title:"Normalization in DBMS",
thumbnail:"https://img.youtube.com/vi/GFQaEYEc8_8/maxresdefault.jpg",
link:"https://www.youtube.com/watch?v=GFQaEYEc8_8"
}

],

materials:[

{
title:"MySQL Documentation",
description:"Official MySQL documentation.",
link:"https://dev.mysql.com/doc/"
},

{
title:"PostgreSQL Documentation",
description:"Official PostgreSQL documentation.",
link:"https://www.postgresql.org/docs/"
},

{
title:"SQLBolt",
description:"Interactive SQL tutorial.",
link:"https://sqlbolt.com/"
},

{
title:"W3Schools SQL",
description:"SQL examples and exercises.",
link:"https://www.w3schools.com/sql/"
}

],




},
//=====================================================
// MACHINE LEARNING
//=====================================================

machinelearning:{

title:"Machine Learning",

image:"https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1200&q=80",

overview:"Learn Machine Learning concepts including supervised learning, unsupervised learning, regression, classification, clustering and predictive analytics using Python.",

instructor:"Dr. Emily Davis",

duration:"12 Weeks",

level:"Advanced",

mode:"Online",

videos:[

{
title:"Machine Learning Full Course",
thumbnail:"https://img.youtube.com/vi/i_LwzRVP7bg/maxresdefault.jpg",
link:"https://www.youtube.com/watch?v=i_LwzRVP7bg"
},

{
title:"Scikit-Learn Tutorial",
thumbnail:"https://img.youtube.com/vi/0Lt9w-BxKFQ/maxresdefault.jpg",
link:"https://www.youtube.com/watch?v=0Lt9w-BxKFQ"
},

{
title:"Machine Learning Project",
thumbnail:"https://img.youtube.com/vi/7eh4d6sabA0/maxresdefault.jpg",
link:"https://www.youtube.com/watch?v=7eh4d6sabA0"
}

],

materials:[

{
title:"Scikit-learn Documentation",
description:"Official Scikit-learn documentation.",
link:"https://scikit-learn.org/"
},

{
title:"TensorFlow Documentation",
description:"Official TensorFlow documentation.",
link:"https://www.tensorflow.org/"
},

{
title:"Google ML Crash Course",
description:"Free ML course by Google.",
link:"https://developers.google.com/machine-learning/crash-course"
},

{
title:"Kaggle Learn",
description:"Interactive ML tutorials.",
link:"https://www.kaggle.com/learn"
}

],


},

//=====================================================
// ARTIFICIAL INTELLIGENCE
//=====================================================

artificialintelligence:{

title:"Artificial Intelligence",

image:"https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1200&q=80",

overview:"Understand Artificial Intelligence concepts including intelligent agents, search algorithms, NLP, Computer Vision and modern AI applications.",

instructor:"Dr. Sophia Martin",

duration:"12 Weeks",

level:"Advanced",

mode:"Online",

videos:[

{
title:"Artificial Intelligence Full Course",
thumbnail:"https://img.youtube.com/vi/JMUxmLyrhSk/maxresdefault.jpg",
link:"https://www.youtube.com/watch?v=JMUxmLyrhSk"
},

{
title:"Artificial Intelligence Explained",
thumbnail:"https://img.youtube.com/vi/ad79nYk2keg/maxresdefault.jpg",
link:"https://www.youtube.com/watch?v=ad79nYk2keg"
},

{
title:"Natural Language Processing",
thumbnail:"https://img.youtube.com/vi/fOvTtapxa9c/maxresdefault.jpg",
link:"https://www.youtube.com/watch?v=fOvTtapxa9c"
}

],

materials:[

{
title:"Google AI",
description:"Official Google AI resources.",
link:"https://ai.google/"
},

{
title:"TensorFlow",
description:"Deep Learning documentation.",
link:"https://www.tensorflow.org/"
},

{
title:"OpenCV Documentation",
description:"Computer Vision library.",
link:"https://opencv.org/"
},

{
title:"DeepLearning.AI",
description:"AI learning platform.",
link:"https://www.deeplearning.ai/"
}

],



},
//=====================================================
// CYBER SECURITY
//=====================================================

cybersecurity:{

title:"Cyber Security",

image:"https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=1200&q=80",

overview:"Learn Cyber Security concepts including network security, cryptography, ethical hacking, penetration testing, malware analysis and cloud security.",

instructor:"Daniel Lee",

duration:"10 Weeks",

level:"Intermediate",

mode:"Online",

videos:[

{
title:"Cyber Security Full Course",
thumbnail:"https://img.youtube.com/vi/U_P23SqJaDc/maxresdefault.jpg",
link:"https://www.youtube.com/watch?v=U_P23SqJaDc"
},

{
title:"Ethical Hacking Tutorial",
thumbnail:"https://img.youtube.com/vi/3Kq1MIfTWCE/maxresdefault.jpg",
link:"https://www.youtube.com/watch?v=3Kq1MIfTWCE"
},

{
title:"Network Security Basics",
thumbnail:"https://img.youtube.com/vi/inWWhr5tnEA/maxresdefault.jpg",
link:"https://www.youtube.com/watch?v=inWWhr5tnEA"
}

],

materials:[

{
title:"OWASP",

description:"Official OWASP Web Security Guide.",

link:"https://owasp.org/"
},

{
title:"NIST Cybersecurity Framework",

description:"Official Cybersecurity Framework.",

link:"https://www.nist.gov/cyberframework"
},

{
title:"Cisco Security",

description:"Network Security Learning Resources.",

link:"https://www.cisco.com/"
},

{
title:"Kali Linux Documentation",

description:"Official Kali Linux Documentation.",

link:"https://www.kali.org/docs/"
}

],



},

//=====================================================
// CLOUD COMPUTING
//=====================================================

cloudcomputing:{

title:"Cloud Computing",

image:"https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80",

overview:"Learn Cloud Computing, AWS, Azure, Google Cloud, virtualization, cloud storage, deployment and cloud security.",

instructor:"James Anderson",

duration:"8 Weeks",

level:"Intermediate",

mode:"Online",

videos:[

{
title:"Cloud Computing Full Course",
thumbnail:"https://img.youtube.com/vi/2LaAJq1lB1Q/maxresdefault.jpg",
link:"https://www.youtube.com/watch?v=2LaAJq1lB1Q"
},

{
title:"AWS for Beginners",
thumbnail:"https://img.youtube.com/vi/ulprqHHWlng/maxresdefault.jpg",
link:"https://www.youtube.com/watch?v=ulprqHHWlng"
},

{
title:"Microsoft Azure Tutorial",
thumbnail:"https://img.youtube.com/vi/NKEFWyqJ5XA/maxresdefault.jpg",
link:"https://www.youtube.com/watch?v=NKEFWyqJ5XA"
}

],

materials:[

{
title:"AWS Documentation",

description:"Official AWS Documentation.",

link:"https://docs.aws.amazon.com/"
},

{
title:"Microsoft Learn Azure",

description:"Azure Learning Platform.",

link:"https://learn.microsoft.com/azure/"
},

{
title:"Google Cloud Documentation",

description:"Official Google Cloud Docs.",

link:"https://cloud.google.com/docs"
},

{
title:"Docker Documentation",

description:"Official Docker Guide.",

link:"https://docs.docker.com/"
}

],



},
//=====================================================
// MOBILE APP DEVELOPMENT
//=====================================================

mobiledevelopment:{

title:"Mobile App Development",

image:"https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=1200&q=80",

overview:"Learn Android and cross-platform mobile application development using modern tools, APIs, databases and deployment techniques.",

instructor:"Olivia Taylor",

duration:"10 Weeks",

level:"Intermediate",

mode:"Online",

videos:[

{
title:"Android Development Full Course",
thumbnail:"https://img.youtube.com/vi/fis26HvvDII/maxresdefault.jpg",
link:"https://www.youtube.com/watch?v=fis26HvvDII"
},

{
title:"Flutter Tutorial",
thumbnail:"https://img.youtube.com/vi/VPvVD8t02U8/maxresdefault.jpg",
link:"https://www.youtube.com/watch?v=VPvVD8t02U8"
},

{
title:"Firebase for Beginners",
thumbnail:"https://img.youtube.com/vi/9kRgVxULbag/maxresdefault.jpg",
link:"https://www.youtube.com/watch?v=9kRgVxULbag"
}

],

materials:[

{
title:"Android Developers",
description:"Official Android documentation.",
link:"https://developer.android.com/"
},

{
title:"Flutter Documentation",
description:"Official Flutter documentation.",
link:"https://docs.flutter.dev/"
},

{
title:"Firebase Documentation",
description:"Firebase official guide.",
link:"https://firebase.google.com/docs"
},

{
title:"Kotlin Documentation",
description:"Official Kotlin documentation.",
link:"https://kotlinlang.org/docs/"
}

],




},

//=====================================================
// DEVOPS
//=====================================================

devops:{

title:"DevOps",

image:"https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=1200&q=80",

overview:"Master DevOps tools including Git, GitHub, Docker, Kubernetes, Jenkins, CI/CD pipelines and cloud deployment.",

instructor:"William Thomas",

duration:"8 Weeks",

level:"Intermediate",

mode:"Online",

videos:[

{
title:"DevOps Full Course",
thumbnail:"https://img.youtube.com/vi/hQcFE0RD0cQ/maxresdefault.jpg",
link:"https://www.youtube.com/watch?v=hQcFE0RD0cQ"
},

{
title:"Docker Tutorial",
thumbnail:"https://img.youtube.com/vi/fqMOX6JJhGo/maxresdefault.jpg",
link:"https://www.youtube.com/watch?v=fqMOX6JJhGo"
},

{
title:"Kubernetes Tutorial",
thumbnail:"https://img.youtube.com/vi/X48VuDVv0do/maxresdefault.jpg",
link:"https://www.youtube.com/watch?v=X48VuDVv0do"
}

],

materials:[

{
title:"Docker Documentation",
description:"Official Docker documentation.",
link:"https://docs.docker.com/"
},

{
title:"Kubernetes Documentation",
description:"Official Kubernetes documentation.",
link:"https://kubernetes.io/docs/"
},

{
title:"Jenkins Documentation",
description:"Official Jenkins documentation.",
link:"https://www.jenkins.io/doc/"
},

{
title:"Git Documentation",
description:"Official Git documentation.",
link:"https://git-scm.com/doc"
}

],


}

};   //================ END OF courseData ================


//=====================================================
// GET SELECTED COURSE
//=====================================================
let course =
JSON.parse(localStorage.getItem("selectedCourse"));

if(!course){
    window.location.href="courses.html";
}

// Find the matching course from start_course.js courseData
let fullCourse = null;

for(const key in courseData){

    if(courseData[key].title === course.title){

        fullCourse = courseData[key];
        break;

    }

}

if(fullCourse){

    // Keep description if it exists in selectedCourse
    fullCourse.description = course.description || "";

    course = fullCourse;

}

//=====================================================
// MERGE ADMIN-SAVED DATA (videos, materials, etc.)
//=====================================================

function extractYouTubeId(url) {

    if (!url) return null;

    const match = url.match(
        /(?:youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/)|youtu\.be\/)([a-zA-Z0-9_-]{11})/
    );

    return match ? match[1] : null;

}

const adminCoursesForStart =
    JSON.parse(localStorage.getItem("courses")) || [];

const adminStartMatch = adminCoursesForStart.find(
    c => c.title && c.title.toLowerCase() === course.title.toLowerCase()
);

if (adminStartMatch) {

    course.overview = adminStartMatch.overview || course.overview;
    course.image = adminStartMatch.image || course.image;
    course.instructor = adminStartMatch.instructor || course.instructor;
    course.duration = adminStartMatch.duration || course.duration;
    course.level = adminStartMatch.level || course.level;

    const adminVideos = (adminStartMatch.videos || [])
        .filter(link => link && link.trim() !== "")
        .map((link, i) => {

            const videoId = extractYouTubeId(link);

            return {
                title: `Lesson ${i + 1}`,
                thumbnail: videoId
                    ? `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`
                    : (adminStartMatch.image || "https://picsum.photos/400/225"),
                link: link
            };

        });

    if (adminVideos.length) {
        course.videos = adminVideos;
    }

    const adminMaterials = (adminStartMatch.materials || [])
        .filter(link => link && link.trim() !== "")
        .map((link, i) => ({
            title: `Resource ${i + 1}`,
            description: "Course material provided by the instructor.",
            link: link
        }));

    if (adminMaterials.length) {
        course.materials = adminMaterials;
    }

}


course.videos = course.videos || [];
course.materials = course.materials || [];

//=====================================================
// LOAD BASIC DETAILS
//=====================================================

document.getElementById("title").innerHTML=course.title;
document.getElementById("overview").innerHTML=course.overview;
document.getElementById("courseImage").src=course.image;
console.log(course);
console.log(course.videos);
console.log(course.materials);
document.getElementById("instructor").innerHTML=course.instructor;
document.getElementById("duration").innerHTML=course.duration;
document.getElementById("level").innerHTML=course.level;
document.getElementById("mode").innerHTML=course.mode;
// Restore certificate button if course already completed
if(localStorage.getItem(studentKey+"_"+course.title + "_completed")){

    const btn = document.getElementById("certificateBtn");

    btn.disabled = false;
    btn.style.background = "var(--primary)";
    btn.style.cursor = "pointer";

}
let completedVideos =
JSON.parse(
    localStorage.getItem(
        studentKey + "_" + course.title + "_videos"
    )
) || [];
updateProgress();
//=====================================================
// LOAD VIDEOS
//=====================================================

loadVideos(course);


function loadVideos(course){

    let html = "";

    course.videos.forEach((video,index)=>{

        html += `
        <div class="video-card">

            <img src="${video.thumbnail}" alt="${video.title}">

            <h3>${video.title}</h3>

            <button
                class="watch-btn"
                onclick="watchVideo('${video.link}', ${index})">
                Watch Video
            </button>

        </div>
        `;

    });

    document.getElementById("videoContainer").innerHTML = html;

}

//=====================================================
// LOAD MATERIALS
//=====================================================

loadMaterials(course);
function loadMaterials(course){

let html="";

course.materials.forEach(material=>{

html+=`

<div class="material-card">

<h3>${material.title}</h3>

<p>${material.description}</p>

<a

href="${material.link}"

target="_blank"

class="action-btn">

Open Material

</a>

</div>

`;

});

document.getElementById("materialContainer").innerHTML=html;

}

//=====================================================
// LOAD ASSIGNMENTS
//=====================================================




//=====================================================
// LOAD QUIZZES
//=====================================================


//=====================================================
// COMPLETE COURSE
//=====================================================

document.getElementById("completeBtn").onclick = function(){

    if(completedVideos.length !== course.videos.length){

        alert("Please watch all videos before completing the course.");
        return;

    }

    // Save completion status
    localStorage.setItem(
        studentKey+"_"+course.title + "_completed",
        "true"
    );

    const btn = document.getElementById("certificateBtn");

    btn.disabled = false;
    btn.style.background = "var(--primary)";
    btn.style.cursor = "pointer";

    alert("Congratulations! You have successfully completed the course.");

};


//=====================================================
// CERTIFICATE
//=====================================================

document.getElementById("certificateBtn").onclick=function(){

window.location.href =
"certificate.html?course=" +
encodeURIComponent(course.title);

};





function watchVideo(link,index){
    
    window.open(link,"_blank");

    if(!completedVideos.includes(index)){

        completedVideos.push(index);

        localStorage.setItem(
            studentKey+"_"+course.title+"_videos",
            JSON.stringify(completedVideos)
        );

    }
    localStorage.setItem(
    studentKey+"_"+course.title + "_totalVideos",
    course.videos.length
);

    updateProgress();

}

function updateProgress(){
    const student = JSON.parse(localStorage.getItem("loggedInStudent"));
const studentKey = student.email;
    const progress =
    (completedVideos.length / course.videos.length) * 100;
    localStorage.setItem(
    studentKey+"_"+course.title + "_progress",
    progress);

    document.getElementById("progressBar").style.width =
    progress + "%";

    document.getElementById("progressText").innerHTML =
    Math.round(progress) + "% Completed";

    if(progress >= 100){

        const completeBtn =
        document.getElementById("completeBtn");

        completeBtn.disabled = false;
        completeBtn.style.background = "var(--success)";
        completeBtn.style.cursor = "pointer";

    }
    

}
function logout() {

    localStorage.removeItem("loggedInStudent");

    alert("Logged Out Successfully.");

    window.location.href = "login.html";


}
document.getElementById("logoutBtn").addEventListener("click", logout);