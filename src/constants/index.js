import { FaDocker, FaCloud, FaCode } from 'react-icons/fa';
import { SiKubernetes, SiTerraform, SiGithubactions } from 'react-icons/si';
import { TbAutomation } from 'react-icons/tb';
import { LuWorkflow } from 'react-icons/lu';

 const words = [
    { text: "Infrastructure", icon: SiTerraform },
    { text: "Containers", icon: FaDocker },
    { text: "Kubernetes", icon: SiKubernetes },
    { text: "CI/CD Pipelines", icon: SiGithubactions },
    { text: "Cloud Architecture", icon: FaCloud },
    { text: "Automation", icon: TbAutomation },
    { text: "Workflows", icon: LuWorkflow },
    { text: "Code & Web Dev", icon: FaCode },
];
const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Testimonials",
        link: "#testimonials",
    },
];

// const words = [
//     { text: "Ideas", imgPath: "/images/ideas.svg" },
//     { text: "Concepts", imgPath: "/images/concepts.svg" },
//     { text: "Designs", imgPath: "/images/designs.svg" },
//     { text: "Code", imgPath: "/images/code.svg" },
//     { text: "Ideas", imgPath: "/images/ideas.svg" },
//     { text: "Concepts", imgPath: "/images/concepts.svg" },
//     { text: "Designs", imgPath: "/images/designs.svg" },
//     { text: "Code", imgPath: "/images/code.svg" },
// ];


const counterItems = [
    { value: 15, suffix: "+", label: "Years of Experience" },
    { value: 200, suffix: "+", label: "Satisfied Clients" },
    { value: 108, suffix: "+", label: "Completed Projects" },
    { value: 90, suffix: "%", label: "Client Retention Rate" },
];

const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },
    {
        imgPath: "/images/logos/company-logo-4.png",
    },
    {
        imgPath: "/images/logos/company-logo-5.png",
    },
    {
        imgPath: "/images/logos/company-logo-6.png",
    },
    {
        imgPath: "/images/logos/company-logo-7.png",
    },
    {
        imgPath: "/images/logos/company-logo-8.png",
    },
    {
        imgPath: "/images/logos/company-logo-9.png",
    },
    {
        imgPath: "/images/logos/company-logo-10.png",
    },
    {
        imgPath: "/images/logos/company-logo-11.png",
    },
];

const abilities = [
    {
        imgPath: "/images/seo.png",
        title: "Quality Focus",
        desc: "Delivering high-quality results while maintaining attention to every detail.",
    },
    {
        imgPath: "/images/chat.png",
        title: "Reliable Communication",
        desc: "Keeping you updated at every step to ensure transparency and clarity.",
    },
    {
        imgPath: "/images/time.png",
        title: "On-Time Delivery",
        desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
    },
];

const techStackImgs = [

    {
        name: "Docker",
        imgPath: "/images/logos/docker.png",
    },
    {
        name: "Kubernetes",
        imgPath: "/images/logos/kubernetes.png",
    },
    {
        name: "Terraform",
        imgPath: "/images/logos/terraform.png",
    },
    {
        name: "AWS",
        imgPath: "/images/logos/aws.png",
    },
    {
        name: "Azure",
        imgPath: "/images/logos/azure.png",
    },
    {
        name: "Prometheus",
        imgPath: "/images/logos/prometheous.png",
    },
    {
        name: "Grafana",
        imgPath: "/images/logos/grafana.png",
    },
    {
        name: "Ansible",
        imgPath: "/images/logos/ansible.png",
    },
];

const techStackIcons = [
    {
        name: "React Developer",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1.5,
        rotation: [0, 0, 0],
    },

    {
        name: "Backend Developer",
        modelPath: "/models/node-transformed.glb",
        scale: 5.5,
        rotation: [0, -Math.PI / 2, 0],
    },
    {
        name: "Interactive Developer",
        modelPath: "/models/three.js-transformed.glb",
        scale: 0.05,
        rotation: [0, 0, 0],
    },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.06,
        rotation: [0, -Math.PI / 4, 0],
    },
];

const expCards = [
    {
        review:
            "Ahmad played a pivotal role in containerizing our application ecosystem with Docker, streamlining our deployment pipelines and eliminating environment inconsistencies across development and production.",
        imgPath: "/images/exp3.png",
        logoPath: "/images/logo3.png",
        title: "DevOps Engineer (Docker & Containerization)",
        date: "January 2026 - Present",
        responsibilities: [
            "Containerized legacy monolithic applications using multi-stage Docker builds to reduce image sizes and improve deployment speed.",
            "Designed and optimized CI/CD pipelines to automate image building, vulnerability scanning, and registry pushes.",
            "Standardized local development environments using Docker Compose, drastically reducing onboarding time for developers.",
        ],
    },
    {
        review:
            "Ahmad’s expertise in Kubernetes and Terraform transformed our cloud infrastructure. He automated our entire provisioning workflow and ensured high availability for our microservices.",
        imgPath: "/images/Kubernetes-Logo.png",
        logoPath: "/images/logos/kubernetes.png",
        title: "Cloud & Infrastructure Engineer",
        date: "January 2026 - Present",
        responsibilities: [
            "Architected and managed production-grade Kubernetes clusters, implementing auto-scaling, ingress controllers, and network policies.",
            "Provisioned modular, reusable Infrastructure as Code (IaC) using Terraform across cloud environments.",
            "Implemented Prometheus and Grafana monitoring stacks to track cluster health, resource utilization, and operational alerts.",
        ],
    },
    {
        review:
            "Ahmad brought a strong bridge between backend engineering and DevOps. His full-stack foundation combined with containerization skills accelerated feature delivery and backend reliability.",
        imgPath: "/images/nginix.png",
        logoPath: "/images/logos/nginx.png",
        title: "Full Stack & DevOps Engineer",
        date: "January 2026 - Present",
        responsibilities: [
            "Built scalable Node.js backend services and React frontends, containerizing each service using Docker for seamless local and server orchestration.",
            "Configured Nginx reverse proxies and local/cloud domain routing for multi-container web applications.",
            "Collaborated with development teams to set up automated workflow triggers and automated integration testing via GitHub Actions.",
        ],
    },
];

const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

 const testimonials = [
    {
        name: "Esther Howard",
        mentions: "@estherhoward",
        review:
            "Ahmad automated our entire deployment pipeline using GitHub Actions and Docker. What used to take hours of manual intervention now deploys seamlessly in under 5 minutes with zero downtime. Exceptional DevOps skills!",
        imgPath: "/images/client1.png",
    },
    {
        name: "Wade Warren",
        mentions: "@wadewarren",
        review:
            "Working with Ahmad was a game-changer for our cloud setup. He migrated our monolithic architecture into Kubernetes with Terraform IaC modules. His focus on high availability and fault tolerance is top-notch. ",
        imgPath: "/images/client3.png",
    },
    {
        name: "Guy Hawkins",
        mentions: "@guyhawkins",
        review:
            "Ahmad’s deep understanding of AWS cloud infrastructure and Nginx server optimization saved our team thousands in operational overhead. He bridged our web application needs directly into scalable DevOps practices effortlessly. Ahmad understood our infrastructure requirements perfectly. He delivered an end-to-end containerized solution and CI/CD workflow that exceeded expectations. A true cloud engineering professional!",
        imgPath: "/images/client2.png",
    },
    {
        name: "Marvin McKinney",
        mentions: "@marvinmckinney",
        review:
            "Ahmad implemented robust monitoring and automated auto-scaling across our production environment. His root-cause analysis and problem-solving mindset kept our platform running reliably during high-traffic spikes.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Floyd Miles",
        mentions: "@floydmiles",
        review:
            "Collaborating with Ahmad was fantastic. He combined full-stack insights with strong GitOps practices to structure clean, secure environments for both our staging and production workflows.",
        imgPath: "/images/client4.png",
    },
    {
        name: "Albert Flores",
        mentions: "@albertflores",
        review:
            "Ahmad understood our infrastructure requirements perfectly. He delivered an end-to-end containerized solution and CI/CD workflow that exceeded expectations. A true cloud engineering professional!",
        imgPath: "/images/client6.png",
    },
];

const socialImgs = [
    {
        name: "insta",
        url: "https://www.instagram.com/invites/contact/?utm_content=2rjw36d&cplk=1nq8nc9yo1vfq",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        url: "https://www.facebook.com/share/1E1nCJY3vh/?mibextid=wwXIfr",
        imgPath: "/images/fb.png",
    },
    {
        name: "Github",
        url: "https://github.com/Ahmad-000",
        imgPath: "/images/github.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/muhammad-ahmed-raza-devops",
        imgPath: "/images/linkedin.png",
    },
];

export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
};