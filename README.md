# Charcoal ERP - Enterprise Multi-tenant SaaS Web App

A comprehensive ERP system built with SvelteKit and Svelte 5, featuring a modern UI with Tailwind CSS.

## Features

- **Multi-tenant Architecture**: Support for multiple organizations with isolated data
- **Organizations Management**: Basic info, organization chart, locations, departments, designations, and employees
- **Employee Data Management**: Basic info, bank details, payments, leaves
- **Leave and Attendance Management**: Support for shifts and comprehensive tracking
- **Payroll Processing**: For salaried employees
- **Invoicing**: For contract employees on hourly basis
- **Timesheet Management**: Similar to Clockify, with integration to invoicing for hourly contractors

## Technical Stack

- **Frontend**: SvelteKit with Svelte 5
- **Styling**: Tailwind CSS
- **Icons**: Iconify-svelte
- **Authentication**: Mobile OTP and password-based
- **Features**:
  - Server-side rendering
  - Themeable with multiple color themes
  - Dark and light mode support
  - Responsive design
  - Offline and caching support

## Role-Based Access Control

The application supports various user roles:
- System Admin
- Tenant Admin
- Employees
- Finance
- HR

Each role has specific access to features and data.

## Development

### Prerequisites

- Node.js (v18+)
- npm or yarn

### Setup

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm run dev
   ```

### Building for Production

```
npm run build
```

## License

[MIT](LICENSE)

# MongoDB Integration for Contact Form

This project uses MongoDB to store contact form submissions and track page visits for analytics.

## Setup Instructions

1. Install MongoDB dependencies:

```bash
npm install mongodb
```

2. Create a `.env` file in the root directory with your MongoDB connection string:

```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/database?retryWrites=true&w=majority
```

3. Make sure to add the MongoDB URI to your production environment variables.

## Database Structure

The application uses the following collections:

- `contact_submissions`: Stores all form submissions from the contact page
- `page_visits`: Tracks visitor analytics for each page

## Development

To start the development server:

```bash
npm run dev
```

## Environment Variables

Create a `.env` file with the following variables:

```
MONGODB_URI=your_mongodb_connection_string
```
