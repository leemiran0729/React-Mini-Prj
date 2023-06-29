import fs from "fs";
import path from "path";

const photosDirectory = path.join(process.cwd(), "images");

export function getPhotosData() {
  const fileNames = fs.readdirSync(photosDirectory);

  const allPhotosData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.jpg$/, "");
    const fullPath = path.join(photosDirectory, fileName);

    const fileContent = fs.readFileSync(fullPath, "utf-8");

    return {
      id,
      fileContent,
    };
  });
}

export function getAllPhotoIds() {
  const fileNames = fs.readdirSync(photosDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.jpg$/, ""),
      },
    };
  });
}

export function getPhotoData(id: string) {
  const fullPath = path.join(photosDirectory, `${id}.jpg`);
  const fileContent = fs.readFileSync(fullPath, "utf-8");

  return {
    id,
    fileContent,
  };
}
