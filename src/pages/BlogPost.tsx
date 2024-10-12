import React from 'react';
import { useParams } from 'react-router-dom';
import { useStore } from '../store';
import ReactMarkdown from 'react-markdown';
import { format } from 'date-fns';

const BlogPost: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = useStore(state => state.posts.find(p => p.id === id));

  if (!post) {
    return <div className="text-center text-2xl mt-8">Post not found</div>;
  }

  return (
    <article className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={post.coverImage} alt={post.title} className="w-full h-96 object-cover" />
      <div className="p-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">{post.title}</h1>
        <p className="text-gray-600 mb-6">
          Published on {format(new Date(post.createdAt), 'MMMM d, yyyy')}
        </p>
        <div className="prose max-w-none">
          <ReactMarkdown>{post.content}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
};

export default BlogPost;