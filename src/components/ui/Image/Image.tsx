import styles from "./Image.module.css";
import { ImageProps } from "./types";

export default function Image({url, alt, width, height, objectFit, ...props}: ImageProps) {
    return <img 
                src={url}
                width={width}
                height={height}
                alt={alt}
                style={{'objectFit': objectFit}}
                />
}