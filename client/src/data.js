export const categories = [
    {
        id: "1",
        title: "react",
        image: "/reactjs.png",
        link: "/",
        color: "#dbeafe",
        popular: true
    },
    {
        id: "2",
        title: "nextJS",
        image: "/nextjs.png",
        link: "/",
        color: "#d4d4d8",
        popular: true
    },
    {
        id: "3",
        title: "JavaScript",
        image: "/javascript.png",
        link: "/",
        color: "#fef3c7",
        popular: true
    },
    {
        id: "4",
        title: "scss",
        image: "/scss.png",
        link: "/",
        color: "#fbcfe8",
        popular: true
    },
    {
        id: "5",
        title: "trekking",
        image: "/trekking.png",
        link: "/",
        color: "#dcfce7",
        popular: false
    },
]

export const blogs = [
    {
        slug: "private-route",
        author: "aelita",
        authorImage: "/logo.png",
        image: "/privateRoute.png",
        category: "react",
        title: "Private Route nedir? nasıl oluşturulur",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magnam adipisci vel eius architecto assumenda quo a fugit voluptate rem.",
        date: "11.09.2023",
        blog: "/src/markdown/private-route.md"
    },
    {
        slug: "test-blog",
        author: "aelita",
        authorImage: "/logo.png",
        image: "/javascript.png",
        category: "nextjs",
        title: "test blog title",
        description: "test blog title Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus magnam adipisci vel eius architecto assumenda quo a fugit voluptate rem.",
        date: "11.09.2024",
        blog: "/src/markdown/test-blog.md"
    },

]

export const projects = [
    {
        id: 1,
        image: "javascript.png",
        title: "Kuzey Tekel",
        description: "dolor sit amet consectetur adipisicing elit. Architecto nostrum sunt fugiat nisi numquam aspernatur?",
        date: "11.12.2023",
        category: ["React"],
        githubLink: "/",
        projectLink: "/"
    },
    {
        id: 2,
        image: "logo.png",
        title: "Brand Color Clone",
        description: "dolor sit amet consectetur adipisicing elit. Architecto nostrum sunt fugiat nisi numquam aspernatur?",
        date: "11.12.2022",
        category: ["React", "Redux", "Scss"],
        githubLink: "/",
        projectLink: "/"
    },
]