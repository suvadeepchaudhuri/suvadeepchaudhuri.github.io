export const resume = {
  skills: [
    {
      sectiontitle: "Programming Langauages",
      items: [
        { name: "Java", level: 5, scale: 5 },
        { name: "JavaScript", level: 5, scale: 5 },
        { name: "C", level: 5, scale: 5 },
        { name: "C#", level: 5, scale: 5 },
        { name: "PL/SQL", level: 5, scale: 5 },
        { name: "Python", level: 5, scale: 5 }
      ],
    },
    {
      sectiontitle: "Web Technologies",
      items: [
        { name: "EmberJS", level: 5, scale: 5 },
        { name: "React", level: 5, scale: 5 },
        { name: "D3", level: 5, scale: 5 },
        { name: "HTML", level: 5, scale: 5 },
        { name: "CSS", level: 5, scale: 5 },
        { name: "REST", level: 5, scale: 5 }
      ],
    },
    {
      sectiontitle: "Scripting",
      items: [
        { name: "VBScript", level: 5, scale: 5 },
        { name: "Windows Batch", level: 5, scale: 5 },
        { name: "Powershell", level: 5, scale: 5 }
      ],
    },
    {
      sectiontitle: "Environments",
      items: [
        { name: "Mac", level: 5, scale: 5 },
        { name: "Windows", level: 5, scale: 5 },
        { name: "Linux", level: 5, scale: 5 },
        { name: "IntelliJ", level: 5, scale: 5 },
        { name: "VSCode", level: 5, scale: 5 },
        { name: "Git", level: 5, scale: 5 }
      ],
    },
    {
      sectiontitle: "Products and Databases",
      items: [
        { name: "Jira", level: 5, scale: 5 },
        { name: "AWS S3", level: 5, scale: 5 },
        { name: "Cloudfront", level: 5, scale: 5 },
        { name: "DynamoDB", level: 5, scale: 5 },
        { name: "Lambda", level: 5, scale: 5 },
        { name: "EC2", level: 5, scale: 5 },
        { name: "MySQL", level: 5, scale: 5 },
        { name: "Oracle DB", level: 5, scale: 5 },
        { name: "Oracle Hyperion Suite", level: 5, scale: 5 },
        { name: "HFM", level: 5, scale: 5 },
        { name: "Essbase", level: 5, scale: 5 }
      ],
    },
  ],
  education: [
    {
      degree: "Master of Science(MS)",
      major: "Computer Science",
      school: "University of Florida - Gainesville, FL",
      start: "08/12/2016",
      end: "05/10/2018"
    },
    {
      degree: "Bachelor of Engineering (BE)",
      major: "Computer Science",
      school: "University of Pune - Pune, India",
      start: "07/12/2008",
      end: "05/10/2012"
    },
  ],
  workexperience: [
    {
      title: "Systems Application Developer",
      organization: "Gallup - Omaha, NE",
      start: "05/15/2018",
      end: "Present",
      summary:
        "Full Stack developer working on web-applications and microservices.",
      highlights: [
        "Organizational Analytics: Led the effort to design a data intensive web-app frontend microservice and business logic layers using AWS services. Worked with multiple data structures to transform data models for various intricate data visualizations (using D3 and Highcharts with EmberJS) representing multi-dimensional and hierarchical data.",
        "Advanced Exports: Created a RESTful web-app frontend, business layer and integrated an asynchronous export pipeline to create multidimensional data dashboards and trigger large data exports.",
      ],
    },
    {
      title: "Systems Application Developer Intern",
      organization: "Gallup - Omaha, NE",
      start: "05/12/2017",
      end: "08/05/2018",
      summary: "",
      highlights: [
        "Wrote middleware application code and transformed data as per models for web-application.",
        "Created RESTful web-services using Jersey and AWS services - S3, Cloudfront, DynamoDB and Lambda.",
        "Implemented Dependency Injection for modules. Utilized Java Futures for asynchronous processing of batch jobs.",
      ],
    },
    {
      title: "Software Engineer",
      organization: "Accenture - India",
      start: "01/12/2013",
      end: "07/16/2016",
      summary: "",
      highlights: [
        "Developed and managed Oracle Hyperion Financial Management (HFM) applications and reports for large Pharma clients.",
        "Managed data in multi-dimensional (Essbase), relational databases (Oracle DB) and HFM suite at the company consolidation level.",
        "Conducted and handled international client meetings and mentored associate software engineers in projects.",
      ],
    },
    {
      title: "Software Development Intern",
      organization: "Blueshores - India",
      start: "10/10/2011",
      end: "06/01/2012",
      summary: "",
      highlights: [
        "Developed a widget-based Android Application using Java and C - Voice recognition in ambient noise.",
      ],
    },
  ],
  projects: [
    {
      title: "Advanced Data Analysis Tool",
      organization: "Gallup",
      start: "12/01/2018",
      end: "04/10/2019",
      summary:
        "Implemented online multidimensional data analysis feature and exports for selected data layouts in OLAP tool.",
      highlights: [
        "Worked on implementing features in a web application to fetch and process data from relational databases, slice and dice data by selecting metadata in the form of layouts and displaying the data fast and effectively on the UI.",
        "Worked on creating CSV and decorated Excel Exports using an asynchronous export pipeline.",
      ],
      skills: "[Java, JavaScript]",
    },
    {
      title: "Expense Manager with Google Drive Integration",
      organization: "Personal",
      start: "07/01/2018",
      end: "07/15/2018",
      summary:
        "Implemented and expense manager for Android that stores expense data on device locally and can export expense reports with expense category visualizations on Google Drive.",
      highlights: [
      ],
      skills: "[Java]",
    },
    {
      title:
        "Analysis Engine for detection of Anti-Microbial Resistance(AMR) Genes",
      organization: "University of Florida",
      start: "10/15/2017",
      end: "12/15/2017",
      summary:
        "Implemented a pipeline using Java to detect AMR genes in long String input sequence reads.",
      highlights: [
        "Created a pipeline that would take antimicrobial resistent gene sequences and long metagenomic samples and detect those AMR sequences in the samples with statistical reporting on alignment. Worked with Burrows Wheeler Aligner, De-Bruijn Graph based assmblers, seed and extend based assemblers for gap filling.",
      ],
      skills: "[Java, Shell Scripting]",
    },
    {
      title: "P2P File Sharing software",
      organization: "University of Florida",
      start: "01/10/2017",
      end: "04/12/2017",
      summary:
        "Implemented the peer-to-peer file sharing software as per described protocols to share files over a network.",
      highlights: [
        "Implemented Choking-Unchoking Mechanism and Preferred Neighbour protocol in the application that could handle at least 5 concurrent peers over a local network.",
      ],
      skills: "[Java]",
    },
    {
      title: "Internet of Things (IOT) – Smart devices using XINU",
      organization: "University of Florida",
      start: "10/10/2016",
      end: "12/15/2016",
      summary:
        "Implemented an IOT application to control and administer distributed devices autonomously.",
      highlights: [
        "Designed Device drivers for sensors and actuators in XINU OS.",
        "Implemented Cloud-Edge-Beneath model of IOT implementation to trigger devices based on the sensor data, using a publisher-subscriber model.",
        "Created an interactive web-interface for client via the cloud.",
      ],
      skills:
        "[C, XINU OS, Java Servlet, Tomcat server, CEB IOT model, jQuery, Bootstrap, HTML, CSS]",
    },
    {
      title: "Trending Hashtag Counter",
      organization: "University of Florida",
      start: "10/10/2016",
      end: "12/15/2016",
      summary:
        "Implemented a hashtag counter service using a Max-Fibonacci heap, to count the most occurring hashtags on social media. ",
      highlights: [
        "Simulated Social media data stream to get the list of posts to be analyzed.",
      ],
      skills: "[Java, Advanced Data Structures]",
    },
    {
      title:
        "Data/Metadata Load and Management for Oracle Hyperion Financial Management",
      organization: "Accenture",
      start: "03/01/2016",
      end: "05/05/2016",
      summary:
        "Automated the process of data/metadata dumps into Oracle HFM. Reduced the process time by 50% across environments.",
      highlights: [],
      skills: "[Java, HFM Java API, SQL, PL/SQL]",
    },
    {
      title: ".Net Based Journal Entry Module",
      organization: "Accenture",
      start: "01/01/2016",
      end: "03/05/2016",
      summary:
        "Enhanced the web based Journal Entry (JE) to create a robust report generator and check-layer that incorporated complex verification logic as per business rules.",
      highlights: [
        "Created a feature to edit JE using Excel templates",
        "Handled reconciliation of redundant reports in the server and incompatible versions of the Excel Template on uploads",
      ],
      skills: "[JavaScript, CSS, HTML, C#, PL/SQL]",
    },
    {
      title: "Essbase Application Backup and restore",
      organization: "Accenture",
      start: "04/01/2016",
      end: "06/05/2016",
      summary:
        "Created application that iteratively backed-up, restored Essbase Financial applications on remote servers.",
      highlights: [
        "The application achieved a speed up of the same manual process by up to 75%",
      ],
      skills: "[Java, XML, Batch, MaxL, MDX, PowerShell]",
    },
    {
      title: "Maintenance and Migration application",
      organization: "Accenture",
      start: "07/01/2015",
      end: "11/05/2015",
      summary:
        "Developed a Java UI application that performed maintenance for applications in the Oracle Hyperion Suite.",
      highlights: [
        "The application resolved all the server/environment dependencies on the fly in order to facilitate minimum down time for Oracle FDM, Shared Services and Essbase.",
      ],
      skills: "[Java, AWT, Spring, FDM VB-API, Shared Services and Essbase-Java API, SQL]",
    },
    {
      title: "Access and Security Portal (Agile Project)",
      organization: "Accenture",
      start: "12/01/2013",
      end: "04/05/2014",
      summary:
        "Part of Agile team that developed an automated multi-tier Web-service in 20 weeks. The service on deployment enabled ~5000 users to gain access to various applications within the HFM suite.",
      highlights: [
        "Responsible for automated application access management design for Shared Services.",
      ],
      skills: "[Oracle DB, Java, Hyperion Application APIs, SQL, PL/SQL, PowerShell, BAT, Jython, ODI]",
    },
    {
      title: "Voice Recognition in Ambient Noise",
      organization: "Blueshores",
      start: "10/01/2011",
      end: "05/05/2012",
      summary:
        "Designed audio filtering and recognition feature in an Android application that reads out news and feeds.",
      highlights: [
        "The speech to text engine recognized proprietary voice commands even in the presence of ambient noise and phone speaker output in the background. This was done by applying the inverse wave of the speaker output into the input recording in real time.",
      , "Used Java wrapper classes for native C libraries. Included Facebook, RSS, Weather, Calendar integration."],
      skills: "[Android API, Java, JSON, CMU Sphinx, Speex, Facebook Graph API, SQL]",
    },

  ],
};
