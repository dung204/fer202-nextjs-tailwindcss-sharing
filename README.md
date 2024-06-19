# Next.JS Sharing for FER202 - Front-end Development with React subject

_Author: Ho Anh Dung (HE181529)_

## 1. Introduction

This hands-on project is a part of the subject FER202 - Front-end Development with React. It is a mock, simple blog website that allows users to read and write blog posts. The website is built using Next.JS, and styled with Tailwind CSS.

## 2. Features

> ⚠️ **Disclaimer**: This project is a simple mock website for educational purposes only. It is not intended for production use. It does not have any authentication or authorization mechanisms, so anyone can create, edit, or delete blog posts.

In this project, we'll implement the following features:

- Displaying a list of blog posts
- Displaying details of a single blog post
- Creating a new blog post
- Editing an existing blog post
- Toggling between light and dark mode
- Responsive design

## 3. Technologies

The project uses the following technologies:

- [Next.JS](https://nextjs.org/): A React framework for building server-side rendered and static web applications.
- [Tailwind CSS](https://tailwindcss.com/): A utility-first CSS framework for quickly building custom designs.
- [TypeScript](https://www.typescriptlang.org/): A typed superset of JavaScript that compiles to plain JavaScript.
- [Pocketbase](https://pocketbase.io/): A lightweight, fast, and free database for storing and retrieving data.

## 4. Getting started

1. Clone the repository:

```bash
git clone https://github.com/dung204/fer202-nextjs-tailwindcss-sharing.git
```

2. Change the directory to the starter template:

```bash
cd starter-template
```

3. Install the dependencies (`npm` will be used in this project):

```bash
npm install
```

4. Start the Pocketbase instance:

| Operating System | Command to run                 |
| ---------------- | ------------------------------ |
| Windows          | `pocketbase-windows.exe serve` |
| MacOS            | `./pocketbase-macos serve`     |
| Linux            | `./pocketbase-linux serve`     |

Once started, you should see the following message:

```bash
├─ REST API: http://127.0.0.1:8090/api/
└─ Admin UI: http://127.0.0.1:8090/_/
```

You can access the Admin UI to configure the database, and insert some data. Then, you can query the data using the REST API.

5. Start the development server:

```bash
npm run dev
```

6. Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

## 5. License

The project is licensed under the MIT License. You can find the license in the [LICENSE](LICENSE) file.
