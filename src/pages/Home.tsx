import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useStore } from '../store';
import { formatDistanceToNow } from 'date-fns';

const Home: React.FC = () => {
  const posts = useStore(state => state.posts);

  return (
    <div className="space-y-8">
      <h1 className="text-4xl font-bold text-gray-800 mb-8">Latest Blog Posts</h1>
      {posts.map((post, index) => (
        <motion.article 
          key={post.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
        >
          <img src={post.coverImage} alt={post.title} className="w-full h-64 object-cover" />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500">
                {formatDistanceToNow(new Date(post.createdAt), { addSuffix: true })}
              </span>
              <Link to={`/post/${post.id}`} className="text-blue-500 hover:text-blue-600">
                Read more
              </Link>
            </div>
          </div>
        </motion.article>
      ))}
    </div>
  );
};

export default Home;