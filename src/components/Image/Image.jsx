import { forwardRef, useState } from "react";
import classNames from "classnames";
import PropTypes from 'prop-types';

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

Image.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    className: PropTypes.string,
    fallback: PropTypes.string,
}

export default Image;