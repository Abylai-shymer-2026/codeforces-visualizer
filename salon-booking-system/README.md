# 🎨 Salon Booking System

A modern, fully-featured salon booking system with CRM integration, built for easy customization for any service-based business.

![Salon Booking System](https://images.unsplash.com/photo-1560066984-138dadb4c035?w=1200&h=400&fit=crop)

## ✨ Features

### 🎨 Modern UI/UX
- Responsive design that works on all devices
- Beautiful, customizable themes (Elegant, Modern, Warm, Minimalist, Vibrant)
- Intuitive user interface with smooth animations
- Dark mode support

### 📅 Booking System
- Online appointment booking with real-time availability
- Calendar integration (Google Calendar, Outlook)
- Multi-service and multi-staff support
- Time slot management with buffer times
- Recurring appointments
- Waitlist functionality
- No-show protection

### 💼 Business Management
- Comprehensive admin dashboard
- Staff management with individual schedules
- Service management with pricing and duration
- Customer database with booking history
- Analytics and reporting
- Inventory management
- Multi-location support

### 💳 Payment Integration
- Stripe payment processing
- PayPal support
- Deposit payments and full payments
- Gift cards and packages
- Automatic invoicing
- Refund management

### 📱 Communication
- SMS notifications and reminders (Twilio)
- Email notifications (SendGrid)
- WhatsApp Business integration
- Push notifications
- Review system with automated requests

### ⚙️ Easy Customization
- Configuration-driven design
- Multiple business types support (10+ types)
- Customizable branding and themes
- Multi-language support
- Easy integration system

## 🏗️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **Next.js 14** with App Router
- **Tailwind CSS** for styling
- **Framer Motion** for animations
- **React Hook Form** for form handling
- **Zustand** for state management
- **React Query** for data fetching

### Backend
- **Node.js** with Express and TypeScript
- **MongoDB** with Mongoose ODM
- **Redis** for caching and sessions
- **JWT** for authentication
- **Socket.io** for real-time updates
- **Multer** for file uploads

### Integrations
- **Stripe** for payments
- **Twilio** for SMS
- **SendGrid** for emails
- **Google Calendar API**
- **WhatsApp Business API**
- **Google Analytics**

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- Docker and Docker Compose (recommended)
- MongoDB (if not using Docker)
- Redis (if not using Docker)

### Option 1: Automated Setup (Recommended)

```bash
# Clone the repository
git clone <your-repo-url>
cd salon-booking-system

# Run the setup script
./setup.sh

# Start with Docker
docker-compose up
```

### Option 2: Manual Setup

1. **Install dependencies**
   ```bash
   npm run install-deps
   ```

2. **Set up environment variables**
   ```bash
   cp .env.example server/.env
   # Edit server/.env with your configuration
   
   # Create client environment file
   cat > client/.env.local << EOL
   NEXT_PUBLIC_API_URL=http://localhost:5000
   NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_key
   EOL
   ```

3. **Start services**
   
   **With Docker:**
   ```bash
   docker-compose up
   ```
   
   **Without Docker:**
   ```bash
   # Start MongoDB and Redis locally first, then:
   npm run dev
   ```

4. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:5000
   - MongoDB: localhost:27017

## 📋 Business Types Supported

The system comes pre-configured for multiple business types:

- **Hair Salons** 💇‍♀️ - Haircuts, coloring, styling
- **Beauty Salons** 💄 - Facials, makeup, eyebrows
- **Nail Salons** 💅 - Manicures, pedicures, nail art
- **Spas & Wellness** 🧘‍♀️ - Massages, body treatments
- **Barbershops** 💈 - Men's grooming services
- **Medical Clinics** 🏥 - Healthcare appointments
- **Fitness Studios** 💪 - Personal training, classes
- **Massage Therapy** 👐 - Therapeutic services
- **Tattoo Studios** 🎨 - Tattoo and piercing services
- **Dental Clinics** 🦷 - Dental care services

## 🎨 Customization

### Changing Business Type

1. Edit `config/business-types.json` to modify or add business types
2. Update `config/services.json` to add new services
3. Customize themes in `config/themes.json`
4. Configure integrations in `config/integrations.json`

### Theme Customization

The system includes 5 pre-built themes:

- **Elegant** - Sophisticated purple/lavender
- **Modern** - Clean blue/contemporary  
- **Warm** - Cozy amber/orange
- **Minimalist** - Simple gray/black
- **Vibrant** - Bold pink/energetic

### Adding New Services

```json
{
  "service-id": {
    "name": "Service Name",
    "description": "Service description",
    "duration": 60,
    "price": 50,
    "category": "category",
    "businessTypes": ["hair-salon"],
    "addOns": ["addon1", "addon2"]
  }
}
```

## 🔧 Configuration

### Environment Variables

Key environment variables to configure:

```bash
# Database
MONGODB_URI=mongodb://localhost:27017/salon-booking
REDIS_URL=redis://localhost:6379

# JWT
JWT_SECRET=your-super-secret-key
JWT_EXPIRES_IN=7d

# Payments
STRIPE_SECRET_KEY=sk_test_...
STRIPE_PUBLISHABLE_KEY=pk_test_...

# Communications
TWILIO_ACCOUNT_SID=your-twilio-sid
SENDGRID_API_KEY=your-sendgrid-key

# Google Services
GOOGLE_CLIENT_ID=your-google-client-id
```

### Business Settings

Configure your business in the admin panel:

- Business hours and timezone
- Services and pricing
- Staff schedules
- Payment methods
- Notification preferences
- Branding and theme

## 📱 API Documentation

The API includes comprehensive endpoints for:

- **Authentication** - Login, register, JWT refresh
- **Appointments** - CRUD operations, availability checking
- **Services** - Service management and pricing
- **Staff** - Staff schedules and assignments
- **Customers** - Customer profiles and history
- **Payments** - Payment processing and refunds
- **Notifications** - SMS, email, and push notifications

### Example API Calls

```javascript
// Book an appointment
POST /api/appointments
{
  "serviceId": "service-id",
  "staffId": "staff-id",
  "date": "2024-01-15",
  "time": "10:00",
  "customer": {
    "name": "John Doe",
    "email": "john@example.com",
    "phone": "+1234567890"
  }
}

// Check availability
GET /api/availability?date=2024-01-15&serviceId=service-id

// Get business services
GET /api/services?businessType=hair-salon
```

## 🔐 Security Features

- JWT-based authentication
- Rate limiting and request throttling
- Input validation and sanitization
- CORS configuration
- Helmet.js security headers
- File upload restrictions
- SQL injection prevention
- XSS protection

## 📊 Analytics & Reporting

Built-in analytics dashboard includes:

- Appointment metrics and trends
- Revenue tracking and forecasting
- Customer retention analysis
- Staff performance metrics
- Service popularity reports
- Cancellation and no-show rates
- Marketing campaign effectiveness

## 🚀 Deployment

### Production Deployment

1. **Environment Setup**
   ```bash
   NODE_ENV=production
   # Update all production environment variables
   ```

2. **Build the application**
   ```bash
   npm run build
   ```

3. **Deploy with Docker**
   ```bash
   docker-compose -f docker-compose.prod.yml up -d
   ```

### Deployment Platforms

The system can be deployed on:

- **AWS** (EC2, ECS, Lambda)
- **Google Cloud Platform**
- **Microsoft Azure**
- **DigitalOcean**
- **Heroku**
- **Vercel** (Frontend)
- **Railway**

### Database Hosting

Recommended database hosting:

- **MongoDB Atlas** (Recommended)
- **AWS DocumentDB**
- **Google Cloud Firestore**
- **Self-hosted MongoDB**

## 🧪 Testing

```bash
# Run all tests
npm test

# Run client tests
cd client && npm test

# Run server tests
cd server && npm test

# Run end-to-end tests
npm run test:e2e
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

- 📧 Email: support@salon-booking.com
- 💬 Discord: [Join our community](https://discord.gg/salon-booking)
- 📖 Documentation: [docs.salon-booking.com](https://docs.salon-booking.com)
- 🐛 Issues: [GitHub Issues](https://github.com/your-repo/issues)

## 🎯 Roadmap

- [ ] Mobile app (React Native)
- [ ] AI-powered scheduling optimization
- [ ] Advanced inventory management
- [ ] Multi-tenant architecture
- [ ] Advanced reporting and analytics
- [ ] Integration marketplace
- [ ] White-label solutions

## 🙏 Acknowledgments

- Design inspiration from leading salon booking platforms
- Community contributions and feedback
- Open source libraries and frameworks used

---

**Made with ❤️ for the beauty and wellness industry**

*Transform your business with modern booking technology*