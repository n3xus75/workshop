# Image Gallery App

This project is an image gallery application that allows users to upload images to a storage account and display them in a modern gallery layout.

## Features

- Upload images to a storage account.
- Display uploaded images in a responsive gallery.
- Built with Express and TypeScript.

## Project Structure

```
image-gallery-app
├── src
│   ├── app.ts                  # Entry point of the application
│   ├── controllers             # Contains controllers for handling requests
│   │   ├── uploadController.ts  # Handles image upload logic
│   │   └── galleryController.ts # Handles gallery display logic
│   ├── routes                  # Contains route definitions
│   │   ├── uploadRoutes.ts      # Routes for image uploads
│   │   └── galleryRoutes.ts     # Routes for displaying the gallery
│   ├── services                # Contains service classes for business logic
│   │   ├── storageService.ts    # Interacts with the storage account
│   │   └── galleryService.ts    # Manages gallery images
│   ├── middleware              # Contains middleware functions
│   │   └── fileUpload.ts        # Middleware for handling file uploads
│   ├── types                   # Contains TypeScript type definitions
│   │   └── index.ts             # Defines interfaces for image uploads and gallery images
│   └── views                   # Contains view templates
│       └── gallery.ejs          # Template for rendering the image gallery
├── package.json                # npm configuration file
├── tsconfig.json               # TypeScript configuration file
└── README.md                   # Project documentation
```

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd image-gallery-app
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage

1. Start the application:
   ```
   npm start
   ```
2. Access the application in your browser at `http://localhost:3000`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License.