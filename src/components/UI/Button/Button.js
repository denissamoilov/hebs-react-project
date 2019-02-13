import React from 'react';

import classes from './Button.module.scss';

const TYPES = {
    PRIMARY: 'primary',
    ALTERNATE: 'alternate',
    ARROWLEFT: 'arrow-left',
    ARROWRIGHT: 'arrow-right',
    SLIDERBULLET: 'slider-dot',
}

export const SIZES = {
    LARGE: 'large',
    MEDIUM: 'medium',
    SMALL: 'small'
}

const BaseButton = ({
    text,
    onClick,
    type,
    disabled,
    buttonType,
    buttonSize
}) => {
    return (
    <button
            type={type}
            disabled={disabled}
            onClick={onClick}
            className={`${classes[buttonType]} ${classes[buttonSize || SIZES.MEDIUM]}`}
        >
        { text }
    </button >
)};

export const Primary = props => (
    <BaseButton {...props} buttonType={TYPES.PRIMARY} />
);
export const Alternate = props => (
    <BaseButton {...props} buttonType={TYPES.ALTERNATE} />
);

export const ArrowLeft = props => (
    <BaseButton {...props} buttonType={TYPES.ARROWLEFT} />
);
export const ArrowRight = props => (
    <BaseButton {...props} buttonType={TYPES.ARROWRIGHT} />
);

export const SliderDot = props => (
    <BaseButton {...props} buttonType={TYPES.SLIDERBULLET} />
);
