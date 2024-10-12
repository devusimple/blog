import create from 'zustand';

interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  coverImage: string;
  createdAt: string;
}

interface BlogStore {
  posts: Post[];
  addPost: (post: Post) => void;
}

export const useStore = create<BlogStore>((set) => ({
  posts: [
    {
      id: '1',
      title: 'Getting Started with React and Vite',
      content: '# Getting Started with React and Vite\n\nReact is a popular JavaScript library for building user interfaces, and Vite is a build tool that provides a faster and leaner development experience for modern web projects.\n\n## Setting up a new project\n\nTo create a new React project with Vite, you can use the following command:\n\n```bash\nnpm create vite@latest my-react-app -- --template react\n```\n\nThis will set up a new React project with Vite as the build tool.\n\n## Key features of Vite\n\n1. **Fast cold start**: Vite leverages native ES modules in the browser, allowing for instant server start.\n2. **Hot Module Replacement (HMR)**: Vite provides a fast HMR experience that preserves application state.\n3. **Optimized builds**: Vite uses Rollup for bundling, resulting in highly optimized production builds.\n\n## Conclusion\n\nUsing React with Vite can significantly improve your development experience and application performance. Give it a try in your next project!',
      excerpt: 'Learn how to quickly set up a React project using Vite as the build tool. Discover the benefits and key features that make this combination powerful for modern web development.',
      coverImage: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      createdAt: '2024-03-15T10:00:00Z'
    },
    {
      id: '2',
      title: 'Mastering Tailwind CSS',
      content: '# Mastering Tailwind CSS\n\nTailwind CSS is a utility-first CSS framework that allows you to rapidly build custom user interfaces. It provides low-level utility classes that let you build completely custom designs without ever leaving your HTML.\n\n## Key Concepts\n\n1. **Utility-First**: Instead of pre-designed components, Tailwind provides utility classes to style elements directly in your markup.\n\n2. **Responsive Design**: Tailwind makes it easy to create responsive layouts using breakpoint prefixes.\n\n3. **Customization**: You can easily customize Tailwind to match your design system by modifying the `tailwind.config.js` file.\n\n## Example\n\nHere\'s a simple example of a button styled with Tailwind CSS:\n\n```html\n<button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">\n  Click me\n</button>\n```\n\n## Conclusion\n\nTailwind CSS offers a different approach to styling your applications. Its utility-first methodology can significantly speed up your development process once you become familiar with it.',
      excerpt: 'Dive into the world of utility-first CSS with Tailwind. Learn about its key concepts, how to use it effectively, and why it\'s becoming increasingly popular among developers.',
      coverImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80',
      createdAt: '2024-03-16T14:30:00Z'
    }
  ],
  addPost: (post) => set((state) => ({ posts: [post, ...state.posts] })),
}));