"use client";

import Masonry from "react-masonry-css";
import { SmartImage } from "@/once-ui/components";
import styles from "./Gallery.module.scss";
import { gallery } from "@/app/resources/content";

export default function MasonryGrid() {
  const breakpointColumnsObj = {
    default: 4,
    1440: 3,
    1024: 2,
    560: 1,
  };

  return (
    <Masonry
      breakpointCols={breakpointColumnsObj}
      className={styles.masonryGrid}
      columnClassName={styles.masonryGridColumn}
    >
      {gallery.images.map((image, index) => (
        <div
          key={index}
          className={styles.gridItem}
          style={{ animationDelay: `${index * 0.2}s` }}
        >
          <SmartImage
            radius="m"
            aspectRatio={image.orientation === "horizontal" ? "16 / 9" : "9 / 16"}
            src={image.src}
            alt={image.alt}
            className={styles.image}
            enlarge
          />
        </div>
      ))}
    </Masonry>
  );
}
