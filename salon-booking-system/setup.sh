#!/bin/bash

echo "🎨 Setting up Salon Booking System..."
echo "=================================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

echo "✅ Prerequisites check passed!"
echo ""

# Install root dependencies
echo "📦 Installing root dependencies..."
npm install

# Install server dependencies
echo "📦 Installing server dependencies..."
cd server && npm install && cd ..

# Install client dependencies
echo "📦 Installing client dependencies..."
cd client && npm install && cd ..

# Copy environment files
echo "⚙️  Setting up environment files..."
if [ ! -f server/.env ]; then
    cp .env.example server/.env
    echo "📝 Created server/.env from template. Please update with your configuration."
fi

if [ ! -f client/.env.local ]; then
    cat > client/.env.local << EOL
NEXT_PUBLIC_API_URL=http://localhost:5000
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=pk_test_your_stripe_key
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=your_google_maps_key
EOL
    echo "📝 Created client/.env.local from template."
fi

# Create necessary directories
echo "📁 Creating necessary directories..."
mkdir -p server/uploads
mkdir -p server/logs
mkdir -p client/public/uploads

# Set up Git hooks (if Git is initialized)
if [ -d ".git" ]; then
    echo "🔧 Setting up Git hooks..."
    cat > .git/hooks/pre-commit << 'EOL'
#!/bin/bash
echo "Running pre-commit checks..."

# Check if there are any TypeScript errors
cd client && npm run type-check
if [ $? -ne 0 ]; then
    echo "❌ TypeScript errors found in client. Please fix them before committing."
    exit 1
fi

cd ../server && npm run build
if [ $? -ne 0 ]; then
    echo "❌ TypeScript errors found in server. Please fix them before committing."
    exit 1
fi

echo "✅ Pre-commit checks passed!"
EOL
    chmod +x .git/hooks/pre-commit
fi

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "Next steps:"
echo "==========="
echo "1. Update environment variables in server/.env and client/.env.local"
echo "2. Start the development environment:"
echo "   • With Docker: docker-compose up"
echo "   • Without Docker: npm run dev"
echo ""
echo "3. Access the application:"
echo "   • Frontend: http://localhost:3000"
echo "   • Backend API: http://localhost:5000"
echo "   • MongoDB: localhost:27017"
echo ""
echo "4. For production deployment, see the README.md file"
echo ""
echo "Happy coding! 🚀"