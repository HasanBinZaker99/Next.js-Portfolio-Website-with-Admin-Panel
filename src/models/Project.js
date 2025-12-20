import mongoose from "mongoose";
const ProjectSchema = new mongoose.Schema(
  {
    name: String,
    website: String,
    technologies: String,
    github: String,
  },
  {
    timestamps,
  }
);
const Project =
  mongoose.models.Project || mongoose.model("Project", ProjectSchema);
export default Project;
