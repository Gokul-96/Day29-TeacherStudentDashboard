import path from 'path'; // Import the 'path' module

export default {
  // ...rest of your Vite config...

  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'), // Adjust the path as needed
    },
  },
};