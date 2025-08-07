// MongoDB initialization script
db = db.getSiblingDB('salon-booking');

// Create collections
db.createCollection('users');
db.createCollection('businesses');
db.createCollection('services');
db.createCollection('staff');
db.createCollection('appointments');
db.createCollection('customers');
db.createCollection('reviews');
db.createCollection('payments');
db.createCollection('notifications');

// Create indexes for better performance
db.appointments.createIndex({ "date": 1, "time": 1 });
db.appointments.createIndex({ "customerId": 1 });
db.appointments.createIndex({ "staffId": 1 });
db.appointments.createIndex({ "serviceId": 1 });
db.appointments.createIndex({ "businessId": 1 });

db.users.createIndex({ "email": 1 }, { unique: true });
db.customers.createIndex({ "email": 1 });
db.customers.createIndex({ "phone": 1 });

db.services.createIndex({ "businessId": 1 });
db.staff.createIndex({ "businessId": 1 });
db.reviews.createIndex({ "businessId": 1 });
db.payments.createIndex({ "appointmentId": 1 });

// Insert sample data
db.businesses.insertOne({
  _id: ObjectId(),
  name: "Luxury Salon & Spa",
  type: "hair-salon",
  description: "Premium beauty and wellness services",
  address: {
    street: "123 Beauty Street",
    city: "Downtown",
    state: "NY",
    zipCode: "10001",
    country: "USA"
  },
  contact: {
    phone: "(555) 123-4567",
    email: "info@luxurysalon.com",
    website: "https://luxurysalon.com"
  },
  hours: {
    monday: { open: "09:00", close: "20:00", closed: false },
    tuesday: { open: "09:00", close: "20:00", closed: false },
    wednesday: { open: "09:00", close: "20:00", closed: false },
    thursday: { open: "09:00", close: "20:00", closed: false },
    friday: { open: "09:00", close: "20:00", closed: false },
    saturday: { open: "09:00", close: "18:00", closed: false },
    sunday: { open: "10:00", close: "17:00", closed: false }
  },
  settings: {
    currency: "USD",
    timezone: "America/New_York",
    language: "en",
    theme: "elegant",
    bookingWindow: 30,
    cancellationPolicy: 24
  },
  createdAt: new Date(),
  updatedAt: new Date()
});

print('MongoDB initialization completed successfully!');