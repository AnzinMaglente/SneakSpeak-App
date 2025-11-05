import { RowsPhotoAlbum } from "react-photo-album";
import "react-photo-album/rows.css";

// This is an example, you have to make it so the user can input their own images
const photos = [
  { src: "/image1.jpg", width: 800, height: 600 },
  { src: "/image2.jpg", width: 1600, height: 900 },
];

export default function MediaGallery() {
  return <RowsPhotoAlbum photos={photos} />;
}
