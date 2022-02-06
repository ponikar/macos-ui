import { Colors } from "../../Theme/color";

type FolderTagsType = {
  title: string;
  color: string;
}[];

export const FolderTagsData: FolderTagsType = [
  {
    title: "Red",
    color: Colors.window_red,
  },
  {
    title: "Yellow",
    color: Colors.window_yellow,
  },
  {
    title: "Green",
    color: Colors.window_green,
  },
];

export const FavoritesData = [
  {
    title: "Desktop",
    src: "desktop.svg",
  },
  {
    title: "Downloads",
    src: "download.svg",
  },
  {
    title: "Recents",
    src: "recent.svg",
  },
  {
    title: "Documents",
    src: "doc.svg",
  },
];
