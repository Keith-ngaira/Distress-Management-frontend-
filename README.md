# Distress Messages Management System - Frontend

A modern React-based frontend application for managing and tracking distress messages through their lifecycle. This system provides a user-friendly interface for handling distress cases from initial receipt to final resolution, designed specifically for front office personnel, directors, and case officers.

## Project Overview

The Distress Messages Management System frontend is built with React and Material-UI, providing a responsive and intuitive interface for managing distress cases. It implements a comprehensive workflow system that guides users through each stage of case management.

### Key Features

- Modern, intuitive user interface
- Case creation and registration system
- Document attachment capabilities
- Real-time case status tracking
- Progress note management
- Automated case assignment workflow
- Comprehensive case details view
- Interactive dashboard for case overview
- Dark/Light theme support with persistent settings
- Fully responsive design for all devices
- Cross-platform compatibility

## Project Structure

```
distress-management-system/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── components/         # React components
│   │   ├── Layout.js      # Main application layout with navigation
│   │   ├── DistressForm.js # New case registration form
│   │   ├── CasesList.js   # Dashboard view of all cases
│   │   └── CaseDetails.js # Detailed view of individual cases
│   ├── contexts/          # React contexts
│   │   └── ThemeContext.js # Theme management context
│   ├── App.js             # Main application component
│   └── index.js           # Application entry point
├── .gitignore             # Git ignore configuration
└── package.json           # Project dependencies and scripts
```

### Component Details

#### Layout.js
- Main application shell with responsive design
- Persistent navigation drawer with auto-hide on mobile
- Dynamic theme-aware top app bar
- Integrated theme toggle functionality

#### DistressForm.js
- Comprehensive case registration form with:
  - Automatic reference number generation
  - File attachment handling
  - Form validation
  - Progress tracking
  - Real-time updates

#### CasesList.js
- Interactive data grid with:
  - Sortable columns
  - Search functionality
  - Status indicators
  - Quick actions
  - Pagination support

#### CaseDetails.js
- Detailed case view featuring:
  - Case progress timeline
  - Document management
  - Status updates
  - Officer assignments
  - Progress note system

### Context Details

#### ThemeContext.js
- Global theme management with:
  - Light/Dark mode toggle
  - Persistent theme preferences
  - Custom color palettes
  - Automatic contrast optimization

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)
- Git (for version control)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Keith-ngaira/Distress-Management-frontend-.git
   ```

2. Navigate to the project directory:
   ```bash
   cd Distress-Management-frontend-
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm start
   ```

The application will open in your default browser at `http://localhost:3000`.

### Project Portability

The project is configured for maximum portability across different development environments:

1. **Git Configuration**
   - Comprehensive `.gitignore` file excludes:
     - Node modules and dependencies
     - Build artifacts and cache
     - Environment-specific files
     - IDE configurations
     - System-generated files

2. **Environment Independence**
   - Environment-agnostic configuration
   - No hard-coded variables
   - Cross-platform compatibility
   - Flexible deployment options

3. **Development Setup**
   - Streamlined npm-based workflow
   - Minimal configuration requirements
   - Consistent development experience
   - Hot-reloading support

## Workflow Stages

1. **Front Office Receipt**
   - Digital case registration
   - Document digitization
   - Initial categorization

2. **Director Review**
   - Priority assessment
   - Officer assignment
   - Instruction provision

3. **Cadet Assignment**
   - Case acceptance
   - Resource planning
   - Initial response

4. **Case Investigation**
   - Information gathering
   - Progress documentation
   - Status updates

5. **Case Resolution**
   - Solution implementation
   - Outcome recording
   - Client communication

6. **Final Review**
   - Quality assurance
   - Compliance check
   - Director approval

7. **Archived**
   - Digital archival
   - Record finalization
   - Accessibility maintenance

## User Interface Features

### Theme Switching
- Seamless light/dark mode toggle
- Context-aware color adjustments
- Persistent user preferences
- High-contrast accessibility

### Responsive Design
- Mobile-first approach
- Fluid layouts
- Touch-friendly interfaces
- Cross-browser compatibility

## Technology Stack

- **Frontend Framework**: React 18
- **UI Library**: Material-UI v5
- **Routing**: React Router v6
- **State Management**: React Hooks & Context API
- **Data Grid**: MUI X-Data Grid
- **Theming**: Material-UI Theme Provider
- **Version Control**: Git

## Repository

This frontend application is maintained at:
[https://github.com/Keith-ngaira/Distress-Management-frontend-](https://github.com/Keith-ngaira/Distress-Management-frontend-)
