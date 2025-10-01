import express from 'express';
import { setUploadRoutes } from './routes/uploadRoutes';
import { setGalleryRoutes } from './routes/galleryRoutes';

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
setUploadRoutes(app);
setGalleryRoutes(app);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});