# API Dashboard

A modern, responsive dashboard application for managing and monitoring API integrations with AdaptiveWorks, MongoDB, and Snowflake data sources.

## 🏗️ Architecture Overview

This project demonstrates a production-ready Next.js application with:

- **Next.js 16**: Modern React framework with App Router
- **MongoDB**: NoSQL database for flexible data storage
- **AdaptiveWorks API**: Real-time project management data integration
- **AG Grid**: Advanced data grid for displaying and filtering results
- **PWA Support**: Progressive Web App with offline capabilities

## 🚀 Features

### Authentication
- **OTP Login**: Secure one-time password authentication
- **Environment-based**: Configurable OTP via environment variables
- **Alert Dialog**: User-friendly error handling

### Data Integration
- **AdaptiveWorks**: Real-time milestone tracking and management
- **MongoDB**: NoSQL data store with advanced filtering
- **Snowflake**: Data warehouse analytics (placeholder)

### User Interface
- **Responsive Design**: Mobile-first with hamburger menu
- **Card-based Dashboard**: Intuitive project navigation
- **Data Grids**: Sortable, filterable tables with pagination
- **PWA Ready**: Installable app with service worker

## 🛠️ Technology Stack

### Frontend
- **Next.js 16**: App Router with React 19
- **Tailwind CSS**: Utility-first styling
- **shadcn/ui**: High-quality UI components
- **AG Grid**: Enterprise data grid

### Backend
- **MongoDB**: Document database
- **Winston**: Structured logging
- **Next.js API Routes**: RESTful endpoints

### UI Components
- **Input OTP**: One-time password input
- **Alert Dialog**: Modal dialogs
- **Card**: Content containers
- **Button**: Interactive elements

## 📁 Project Structure

```
dashboard/
├── src/
│   ├── app/
│   │   ├── api/
│   │   │   ├── adaptiveworks/    # AdaptiveWorks API endpoint
│   │   │   ├── mongodb/          # MongoDB API endpoint
│   │   │   └── sync/             # Data sync endpoint
│   │   ├── adaptiveworks/        # AdaptiveWorks page
│   │   ├── dashboard/            # Main dashboard
│   │   ├── mongodb/              # MongoDB page
│   │   ├── snowflake/            # Snowflake page
│   │   ├── lib/                  # Utilities and DB connection
│   │   ├── globals.css           # Global styles
│   │   ├── layout.js             # Root layout
│   │   ├── logger.js             # Winston logger
│   │   └── page.js               # Login page
│   ├── components/
│   │   ├── ui/                   # shadcn/ui components
│   │   ├── header.js             # App header
│   │   ├── footer.js             # App footer
│   │   ├── landing.js            # Page wrapper
│   │   └── ServiceWorkerRegistration.js
│   └── lib/
│       └── utils.js              # Utility functions
├── public/
│   ├── manifest.json             # PWA manifest
│   ├── sw.js                     # Service worker
│   └── LycraLogo.png             # Logo
├── .env.local                    # Environment variables
└── package.json
```

## 🔧 Development Setup

### Prerequisites
- Node.js 18.17 or later
- MongoDB instance
- AdaptiveWorks API key

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd dashboard
   ```

2. **Install dependencies**
   ```bash
   npm install --legacy-peer-deps
   ```

3. **Configure environment variables**
   
   Create `.env.local`:
   ```bash
   MONGODB_URI=mongodb://localhost:27017/
   ADAPTIVE_WORKS_API_KEY=<your-api-key>
   SERVER_URL=http://localhost:3000
   NEXT_PUBLIC_OTP=123456
   NEXT_PUBLIC_NODE_ENV=development
   ```

4. **Run development server**
   ```bash
   npm run dev
   ```

5. **Open application**
   
   Navigate to [http://localhost:3000](http://localhost:3000)

### Building for Production

```bash
npm run build
npm start
```

## 🎯 Key Features

### OTP Authentication
- Secure login with configurable OTP
- Environment-based configuration
- Error handling with alert dialogs

### Data Visualization
- **AG Grid Integration**: Advanced filtering and sorting
- **Pagination**: 25/50 rows per page
- **Date Filters**: Column-specific date filtering
- **Real-time Data**: Live API integration

### Progressive Web App
- **Service Worker**: Enabled in production mode
- **Manifest**: App installation support
- **Offline Support**: Cached resources
- **Mobile Optimized**: Responsive design

### API Endpoints
- `POST /api/adaptiveworks` - Fetch AdaptiveWorks milestones
- `GET /api/mongodb` - Retrieve MongoDB data
- `POST /api/sync` - Synchronize data sources

## 🚀 Deployment

### Environment Variables

Set in production:
```bash
NEXT_PUBLIC_NODE_ENV=production
NEXT_PUBLIC_OTP=<secure-otp>
MONGODB_URI=<production-mongodb-uri>
ADAPTIVE_WORKS_API_KEY=<production-api-key>
```

### Vercel Deployment

1. Push code to GitHub
2. Import repository in Vercel
3. Configure environment variables
4. Deploy

### Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production --legacy-peer-deps
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🔮 Roadmap

### Completed ✅
- OTP authentication
- AdaptiveWorks API integration
- MongoDB data storage
- Responsive UI with hamburger menu
- PWA support with service worker
- Data grids with filtering/sorting
- Environment-based configuration

### In Progress 🚧
- Snowflake integration
- Real-time data synchronization
- Enhanced error handling

### Planned 📋
- GitHub Actions CI/CD
- Loading spinners and toasts
- Error and loading pages
- Swagger API documentation
- SSL certificate setup
- Advanced analytics dashboard

## 📚 Resources

- [Next.js Documentation](https://nextjs.org/docs)
- [AG Grid React](https://www.ag-grid.com/react-data-grid/)
- [shadcn/ui](https://ui.shadcn.com/)
- [MongoDB Node Driver](https://www.mongodb.com/docs/drivers/node/)

## 📝 License

This project is licensed under the MIT License.

## 📧 Contact

**Shawn M. Crowley**

- Email: [shawn.crowley@lycra.com](mailto:shawn.crowley@lycra.com)
- LinkedIn: [@shawnmcrowley](https://www.linkedin.com/in/shawnmcrowley)

---

**Built with ❤️ using Next.js 16 and MongoDB**
