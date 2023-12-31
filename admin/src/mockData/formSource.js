
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
export const blogInputs = [
    {
        id: 1,
        label: "Blog Name",
        type: "text",
        placeholder: "React ile Private Route Nasıl Oluşturulur?"
    },
    {
        id: 2,
        label: "Blog File",
        type: "file",
        placeholder: ""
    },
    {
        id: 3,
        label: "Blog Date",
        type: "date",
        placeholder: ""
    },
    {
        id: 4,
        label: "Is Popular",
        type: "select",
        options: ["true", "false"]
    },
    {
        id: 5,
        label: "Blog Description",
        type: "textarea",
        placeholder: "Enter description..."
    },
    {
        id: 6,
        label: "Editor's Pick?",
        type: "select",
        options: ["true", "false"]
    },
    {
        id: 7,
        label: "Blog Categories",
        type: "text",
        placeholder: ""
    },
]


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