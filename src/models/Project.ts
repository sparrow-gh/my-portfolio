import mongoose, { Document, Schema } from 'mongoose';

export interface IProject extends Document {
  title: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  imageUrl: string;
  demoUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: string;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>({
  title: {
    type: String,
    required: [true, 'Project title is required'],
    trim: true,
    maxlength: [100, 'Title cannot be more than 100 characters']
  },
  description: {
    type: String,
    required: [true, 'Project description is required'],
    trim: true,
    maxlength: [500, 'Description cannot be more than 500 characters']
  },
  longDescription: {
    type: String,
    trim: true,
    maxlength: [2000, 'Long description cannot be more than 2000 characters']
  },
  technologies: [{
    type: String,
    required: true,
    trim: true
  }],
  imageUrl: {
    type: String,
    required: [true, 'Project image is required']
  },
  demoUrl: {
    type: String,
    trim: true
  },
  githubUrl: {
    type: String,
    trim: true
  },
  featured: {
    type: Boolean,
    default: false
  },
  category: {
    type: String,
    required: [true, 'Project category is required'],
    enum: ['web', 'mobile', 'desktop', 'ai', 'other'],
    default: 'web'
  }
}, {
  timestamps: true
});

export default mongoose.models.Project || mongoose.model<IProject>('Project', ProjectSchema);
