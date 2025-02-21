import { forwardRef, useState } from "react";
import classNames from "classnames";

import images from "~/assets/images";
import styles from './Image.module.scss'

const Image = forwardRef((
    {
        src,
        alt,
        className,
        fallback: customFallback = images.noImage, // custom picture error
        ...props
    }, ref) => {

    const [fallback, setFallback] = useState('')

    const handleError = () => {
        setFallback(customFallback)
    }

    return (
        // eslint-disable-next-line jsx-a11y/alt-text
        <img
            ref={ref}
            className={classNames(styles.wrapper, className)}
            src={fallback || src} 
            alt={alt}
            {...props}
            onError={handleError}
        />
    );
})

export default Image;