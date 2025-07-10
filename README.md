# My Electron React App

This is an Electron desktop application built with React. The app combines the power of Electron for cross-platform desktop functionality with React for the user interface.

## Prerequisites

Make sure you have Node.js and npm installed on your system.

## Installation

1. Clone or download this project
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

## Available Scripts

### Development Mode

To run the app in development mode (with hot reload):

```bash
npm run dev
```

This will:
- Start the React development server on http://localhost:9000
- Wait for the React server to be ready
- Launch the Electron app automatically

### React Development Only

To run just the React app in the browser:

```bash
npm start
```

Open [http://localhost:9000](http://localhost:9000) to view it in your browser.

### Build and Run Production

To build the React app and run it in Electron:

```bash
npm run pack
```

This will:
- Create an optimized production build
- Launch the Electron app with the built files

### Electron Only

To run Electron with the current build:

```bash
npm run electron
```

### Build for Production

To create an optimized build:

```bash
npm run build
```

### Testing

To run tests:

```bash
npm test
```

## Project Structure

```
my-electron-app/
├── main.js              # Electron main process
├── package.json         # Dependencies and scripts
├── public/             # Static files
├── src/                # React source code
│   ├── App.js          # Main React component
│   ├── index.js        # React entry point
│   └── ...
└── build/              # Production build (created after npm run build)
```

## How It Works

- **main.js**: The Electron main process that creates the application window
- **src/**: Contains the React application code
- **Development**: React runs on localhost:9000, Electron loads this URL
- **Production**: React is built to static files, Electron loads these files

## Troubleshooting

- If the Electron window shows a blank screen, make sure the React development server is running
- If you get port conflicts, make sure port 9000 is available
- For production builds, run `npm run build` before `npm run electron`

## Learn More

- [Electron Documentation](https://www.electronjs.org/docs)
- [React Documentation](https://reactjs.org/)
- [Create React App Documentation](https://facebook.github.io/create-react-app/docs/getting-started)
