
export const userInputs = [
    {
        id: 1,
        label: "Username",
        model: "userName",
        type: "text",
        placeholder: "john_doe"
    },
    {
        id: 2,
        label: "Name and surname",
        model: "fullName",
        type: "text",
        placeholder: "John Doe"
    },
    {
        id: 3,
        label: "Email",
        model: "email",
        type: "text",
        placeholder: "johndoe@gmail.com"
    },
    {
        id: 4,
        label: "Password",
        model: "password",
        type: "text",
        placeholder: "*********"
    },
    {
        id: 5,
        label: "Is Admin?",
        model: "isAdmin",
        type: "select",
        options: ["", "true", "false"]
    },
    {
        id: 6,
        label: "User Avatar",
        model: "avatar",
        type: "file"
    }
]

export const categoryInputs = [
    {
        id: 1,
        label: "Image",
        model: "image",
        type: "file",
        placeholder: "Category Image"
    },
    {
        id: 2,
        label: "Category Name",
        model: "name",
        type: "text",
        placeholder: "ReactJS"
    },

    {
        id: 4,
        label: "Category Color",
        model: "color",
        type: "text",
        placeholder: "#a7f3d0"
    },
    {
        id: 5,
        label: "Is Popular",
        model: "popular",
        type: "select",
        options: ["true", "false"]
    },

]
// formSource.js

export const blogInputs = [
    {
        id: 1,
        label: "Title",
        model: "title",
        type: "text",
        placeholder: "Enter title..."
    },
    {
        id: 2,
        label: "Blog Description",
        model: "description",
        type: "textarea",
        placeholder: "Enter blog content..."
    },
    {
        id: 3,
        label: "File",
        model: "blog",
        type: "file",
        placeholder: "Upload a file..."
    },
    {
        id: 4,
        label: "Date",
        model: "date",
        type: "date",
        placeholder: ""
    },
    {
        id: 5,
        label: "Image",
        model: "image",
        type: "file",
        placeholder: "Upload an image..."
    },

    {
        id: 6,
        label: "Is Popular",
        model: "popular",
        type: "select",
        options: ["true", "false"]
    },
    {
        id: 7,
        label: "Category IDs",
        model: "categoryIds",
        type: "checkbox",
        options: [] // Bu alan yeni gönderi oluşturulduğunda doldurulacak.
    },
    {
        id: 8,
        label: "Is Editor's Pick",
        model: "editorsPick",
        type: "select",
        options: ["true", "false"]
    },
];



export const projectInputs = [
    {
        id: 1,
        label: "Image",
        model: "image",
        type: "file",
        placeholder: "Project Image"
    },
    {
        id: 2,
        label: "Project Description",
        model: "description",
        type: "textarea",
        placeholder: "Enter description..."
    },
    {
        id: 3,
        label: "Project Name",
        model: "title",
        type: "text",
        placeholder: "Private Route"
    },
    {
        id: 4,
        label: "Project Date",
        model: "date",
        type: "date",
        placeholder: ""
    },
    {
        id: 5,
        label: "Project Categories",
        model: "categories",
        type: "text",
        placeholder: "React, tailwindcss, redux"
    },
    {
        id: 6,
        label: "Github Link",
        model: "githubLink",
        type: "text",
        placeholder: "https://github.com/lyokocode"
    },
    {
        id: 7,
        label: "Project Link",
        model: "projectLink",
        type: "text",
        placeholder: "https://aelita.vercel.app"
    },

]