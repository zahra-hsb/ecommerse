# E-Commerce Platform

A full-stack e-commerce platform built with Next.js, Node.js, and MongoDB, featuring user authentication, product management, AWS S3 image storage, and a complete admin dashboard.

## ✨ Features

- **User Authentication** - Secure login and registration with NextAuth.js and MongoDB
- **Product Management** - Full CRUD operations for products with image uploads
- **Shopping Cart** - Add to cart, update quantities, and checkout functionality
- **Admin Dashboard** - Manage products, orders, and users
- **Image Storage** - AWS S3 integration for product image uploads
- **Sortable Lists** - Drag-and-drop product ordering with React SortableJS
- **Responsive Design** - Mobile-first design with Tailwind CSS
- **Loading States** - Smooth user experience with React Spinners
- **API Routes** - RESTful API built with Next.js API routes
- **Database Integration** - MongoDB with Mongoose ODM

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 14.1.0 (Pages Router)
- **UI Library:** React 18
- **Styling:** Tailwind CSS 3.3.0
- **Icons:** React Icons 5.0.1
- **Loading Indicators:** React Spinners 0.13.8
- **Drag & Drop:** React SortableJS 6.1.4

### Backend
- **Runtime:** Node.js
- **Database:** MongoDB with Mongoose 8.1.1
- **Authentication:** NextAuth.js 4.24.5 with MongoDB Adapter
- **File Storage:** AWS S3 with AWS SDK v3
- **File Uploads:** Multiparty 4.2.3
- **HTTP Client:** Axios 1.6.7

### Development Tools
- **ESLint:** Code quality and consistency
- **PostCSS:** CSS processing and optimization
- **dotenv:** Environment variable management

## 📋 Prerequisites

Before you begin, ensure you have the following:
- Node.js 18.0 or higher
- npm, yarn, pnpm, or bun
- MongoDB database (local or MongoDB Atlas)
- AWS account with S3 bucket configured
- NextAuth.js configuration

## 🚀 Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/zahra-hsb/ecommerse.git
   cd ecommerse
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
   ```

3. **Set up environment variables**
   
   Create a `.env.local` file in the root directory:
   ```env
   # MongoDB Configuration
   MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/ecommerce?retryWrites=true&w=majority

   # NextAuth Configuration
   NEXTAUTH_URL=http://localhost:3000
   NEXTAUTH_SECRET=your-secret-key-here

   # AWS S3 Configuration
   AWS_ACCESS_KEY_ID=your-aws-access-key
   AWS_SECRET_ACCESS_KEY=your-aws-secret-key
   AWS_REGION=us-east-1
   AWS_S3_BUCKET_NAME=your-bucket-name

   # Optional: Admin Email
   ADMIN_EMAIL=admin@example.com
   ```

4. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

5. **Open the application**

   Navigate to [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
ecommerse/
├── lib/                # Utility functions and helpers
│   ├── mongodb.js      # MongoDB connection
│   └── s3.js          # AWS S3 client configuration
├── models/             # Mongoose models
│   ├── User.js        # User model
│   ├── Product.js     # Product model
│   └── Order.js       # Order model
├── pages/
│   ├── api/           # API routes
│   │   ├── auth/      # NextAuth.js authentication routes
│   │   ├── products/  # Product CRUD operations
│   │   ├── orders/    # Order management
│   │   └── upload/    # Image upload to S3
│   ├── admin/         # Admin dashboard pages
│   ├── products/      # Product listing and details
│   ├── cart/          # Shopping cart
│   ├── _app.js        # App wrapper
│   └── index.js       # Homepage
├── styles/            # Global styles and CSS
├── .env               # Environment variables (not in .gitignore - should be .env.local)
├── .eslintrc.json     # ESLint configuration
├── jsconfig.json      # JavaScript configuration
├── next.config.mjs    # Next.js configuration
├── package.json       # Project dependencies
├── postcss.config.js  # PostCSS configuration
└── tailwind.config.js # Tailwind CSS configuration
```

## 🔧 Available Scripts

- `npm run dev` - Start development server on port 3000
- `npm run build` - Build for production
- `npm start` - Start production server
- `npm run lint` - Run ESLint for code quality checks

## 🎯 Key Features Breakdown

### User Authentication
- **NextAuth.js** - Industry-standard authentication
- **MongoDB Adapter** - Store user sessions in MongoDB
- **Protected Routes** - Admin-only pages and API routes
- **Secure Sessions** - JWT-based session management

### Product Management
- **CRUD Operations** - Create, read, update, and delete products
- **Image Uploads** - Upload multiple product images to AWS S3
- **Sortable Products** - Drag-and-drop product ordering
- **Product Categories** - Organize products by categories
- **Inventory Tracking** - Monitor stock levels

### Shopping Cart
- **Add to Cart** - Add products with quantity selection
- **Cart Persistence** - Save cart state across sessions
- **Quantity Updates** - Increase/decrease quantities
- **Remove Items** - Delete products from cart
- **Total Calculation** - Automatic price calculations

### Admin Dashboard
- **Product Management** - Add, edit, and delete products
- **Order Management** - View and process customer orders
- **User Management** - View registered users
- **Image Gallery** - Manage product images
- **Analytics** - Basic sales and order statistics

### AWS S3 Integration
- **Image Upload** - Upload product images to S3
- **Presigned URLs** - Secure, temporary access to images
- **Image Optimization** - Resize and compress images
- **CDN Delivery** - Fast image loading via CloudFront (optional)

## 🗄️ Database Schema

### User Model
```javascript
{
  name: String,
  email: String (unique),
  password: String (hashed),
  role: String (default: 'user'),
  createdAt: Date
}
```

### Product Model
```javascript
{
  title: String,
  description: String,
  price: Number,
  images: [String],
  category: String,
  stock: Number,
  featured: Boolean,
  createdAt: Date
}
```

### Order Model
```javascript
{
  userId: ObjectId,
  products: [{
    productId: ObjectId,
    quantity: Number,
    price: Number
  }],
  total: Number,
  status: String,
  shippingAddress: Object,
  createdAt: Date
}
```

## 🔐 Environment Variables Setup

### MongoDB URI
Get your connection string from [MongoDB Atlas](https://www.mongodb.com/cloud/atlas):
1. Create a free cluster
2. Set up database access (username/password)
3. Configure network access (add your IP)
4. Get connection string and replace `<password>` with your password

### NextAuth Secret
Generate a secure secret:
```bash
openssl rand -base64 32
```

### AWS S3 Setup
1. Create an AWS account at [aws.amazon.com](https://aws.amazon.com)
2. Create an S3 bucket:
   - Go to S3 console
   - Click "Create bucket"
   - Choose a unique name and region
   - Configure bucket permissions (enable public read for product images)
3. Create IAM user with S3 access:
   - Go to IAM console
   - Create new user with programmatic access
   - Attach `AmazonS3FullAccess` policy
   - Save access key and secret key

### CORS Configuration for S3
Add this CORS policy to your S3 bucket:
```json
[
  {
    "AllowedHeaders": ["*"],
    "AllowedMethods": ["GET", "PUT", "POST", "DELETE"],
    "AllowedOrigins": ["http://localhost:3000", "https://yourdomain.com"],
    "ExposeHeaders": []
  }
]
```

## 🚀 Deployment

### Deploy to Vercel

The easiest deployment option for Next.js applications:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/zahra-hsb/ecommerse)

1. Push your code to GitHub
2. Import repository to Vercel
3. Configure environment variables in Vercel dashboard
4. Deploy with one click

**Important:** Make sure to add all environment variables in Vercel's project settings.

### Deploy to Other Platforms

You can also deploy to:
- **Netlify** - Connect your GitHub repo and configure build settings
- **Railway** - One-click deployment with database hosting
- **Heroku** - Traditional PaaS hosting (configure Procfile)
- **DigitalOcean App Platform** - Simple cloud deployment

## 📦 Key Dependencies

| Package | Version | Purpose |
|---------|---------|---------|
| next | 14.1.0 | React framework with SSR |
| react | ^18 | UI library |
| mongoose | ^8.1.1 | MongoDB ODM |
| next-auth | ^4.24.5 | Authentication solution |
| @auth/mongodb-adapter | ^2.3.3 | MongoDB adapter for NextAuth |
| @aws-sdk/client-s3 | ^3.511.0 | AWS S3 client |
| @aws-sdk/s3-request-presigner | ^3.511.0 | S3 presigned URLs |
| axios | ^1.6.7 | HTTP client |
| react-sortablejs | ^6.1.4 | Drag-and-drop lists |
| react-spinners | ^0.13.8 | Loading indicators |
| react-icons | ^5.0.1 | Icon library |
| tailwindcss | ^3.3.0 | Utility-first CSS framework |

## 🤝 Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🐛 Troubleshooting

### MongoDB Connection Issues
- Verify your MongoDB URI is correct
- Check if your IP is whitelisted in MongoDB Atlas
- Ensure MongoDB is running (if using local instance)
- Check firewall settings

### AWS S3 Upload Errors
- Verify AWS credentials are correct
- Check S3 bucket permissions and CORS configuration
- Ensure IAM user has S3 write permissions
- Verify bucket name and region are correct

### Authentication Not Working
- Check NEXTAUTH_URL matches your domain
- Verify NEXTAUTH_SECRET is set
- Clear browser cookies and try again
- Check MongoDB connection for session storage

### Build Errors
- Delete `node_modules`, `.next`, and `package-lock.json`
- Run `npm install` again
- Check Node.js version (18.0 or higher required)
- Verify all environment variables are set

### Image Upload Issues
- Check file size limits (multiparty configuration)
- Verify MIME types are allowed
- Check S3 bucket storage limits
- Review browser console for errors

## 🔒 Security Best Practices

1. **Never commit `.env` files** - Use `.env.local` and add to `.gitignore`
2. **Hash passwords** - Always hash passwords before storing (use bcrypt)
3. **Validate inputs** - Sanitize and validate all user inputs
4. **Rate limiting** - Implement rate limiting on API routes
5. **HTTPS only** - Use HTTPS in production
6. **CORS configuration** - Restrict allowed origins
7. **SQL injection** - Use parameterized queries (Mongoose handles this)
8. **XSS protection** - Sanitize HTML content

## 📱 Browser Support

This project supports:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 🎓 Learning Resources

### Next.js
- [Next.js Documentation](https://nextjs.org/docs)
- [Next.js API Routes](https://nextjs.org/docs/api-routes/introduction)
- [Learn Next.js](https://nextjs.org/learn)

### MongoDB & Mongoose
- [MongoDB Documentation](https://docs.mongodb.com/)
- [Mongoose Guide](https://mongoosejs.com/docs/guide.html)
- [MongoDB University](https://university.mongodb.com/)

### NextAuth.js
- [NextAuth.js Documentation](https://next-auth.js.org/)
- [NextAuth.js MongoDB Adapter](https://authjs.dev/reference/adapter/mongodb)

### AWS S3
- [AWS S3 Documentation](https://docs.aws.amazon.com/s3/)
- [AWS SDK for JavaScript v3](https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/)

## 📄 License

This project is private and not licensed for public use.

## 📞 Support

For support and questions:
- Open an issue on GitHub
- Contact the developer: [zahra-hsb](https://github.com/zahra-hsb)

## 🙏 Acknowledgments

- Built with [Next.js](https://nextjs.org/)
- Authenticated with [NextAuth.js](https://next-auth.js.org/)
- Database powered by [MongoDB](https://www.mongodb.com/)
- Image storage with [AWS S3](https://aws.amazon.com/s3/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)
- Icons by [React Icons](https://react-icons.github.io/react-icons/)

---

**Made with dedication by [zahra-hsb](https://github.com/zahra-hsb)**
