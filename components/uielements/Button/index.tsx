import React, { forwardRef } from 'react';
import { XSMALL, SMALL, MEDIUM, LARGE, PRIMARY, SECONDARY, ERROR, SUCCESS, CONTAINED, OUTLINED, TEXT, EXTENDED, LINK, APP_STYLE_PREFIX } from '../../../lib/definitions';
import Ripple from 'material-ripple-effects';
import Loader from '../Spinner';

const filledTextColors = {
    primary: 'text-white-500',
    secondary: 'text-gray-500',
    error: 'text-white-500',
    success: 'text-white-500',
    link: 'text-blue-gray-500',
}

const filledBgColors = {
    primary: 'bg-primary-500',
    secondary: 'bg-secondary-500',
    error: 'bg-error-500',
    success: 'bg-success-500',
    link: 'bg-transparent',
};

const filledBgHoverColors = {
    primary: 'hover:bg-primary-700',
    secondary: 'hover:bg-secondary-700',
    error: 'hover:bg-error-700',
    success: 'hover:bg-success-700',
    link: 'hover:bg-transparent',
};

const filledBgFocusColors = {
    primary: 'focus:bg-primary-400',
    secondary: 'focus:bg-secondary-400',
    error: 'focus:bg-error-400',
    success: 'focus:bg-success-400',
    link: 'focus:bg-transparent',
};

const filledBgActiveColors = {
    primary: 'active:bg-primary-800',
    secondary: 'active:bg-secondary-800',
    error: 'active:bg-error-800',
    success: 'active:bg-success-800',
    link: 'active:bg-transparent',
};

const filledShadowColors = {
    primary: 'shadow-md-primary',
    secondary: 'shadow-md-secondary',
    error: 'shadow-md-error',
    success: 'shadow-md-success',
    link: 'shadow-md-transparent',
};

const filledShadowHoverColors = {
    primary: 'hover:shadow-lg-primary',
    secondary: 'hover:shadow-lg-secondary',
    error: 'hover:shadow-lg-error',
    success: 'hover:shadow-lg-success',
    link: 'hover:shadow-lg-transparent',
};

const outlineTextColors = {
    primary: 'text-primary-500',
    secondary: 'text-secondary-800',
    error: 'text-white-500',
    success: 'text-white-500',
    link: 'text-blue-gray-500',
};

const outlineBorderColors = {
    primary: 'border-primary-500',
    secondary: 'border-secondary-700',
    error: 'border-error-500',
    success: 'border-success-500',
    link: 'border-transparent',
};

const outlineBgHoverColors = {
    primary: 'hover:bg-primary-50',
    secondary: 'hover:bg-secondary-50',
    error: 'hover:bg-error-50',
    success: 'hover:bg-success-50',
    link: 'hover:bg-transparent',
};

const outlineBorderHoverColors = {
    primary: 'hover:border-primary-700',
    secondary: 'hover:border-secondary-700',
    error: 'hover:border-error-700',
    success: 'hover:border-success-700',
    link: 'hover:border-transparent',
};

const outlineTextHoverColors = {
    primary: 'hover:text-white-700',
    secondary: 'hover:text-secondary-700',
    error: 'hover:text-white-700',
    success: 'hover:text-white-700',
    link: 'hover:border-blue-gray-700',
};

const outlineBgActiveColors = {
    primary: 'active:bg-primary-100',
    secondary: 'active:bg-secondary-100',
    error: 'active:bg-error-100',
    success: 'active:bg-success-100',
    link: 'active:bg-transparent',
};


type ButtonType = typeof PRIMARY | typeof SECONDARY | typeof ERROR | typeof SUCCESS | typeof LINK;
type ButtonSize = typeof XSMALL | typeof SMALL | typeof MEDIUM | typeof LARGE;
type ButtonVariant = typeof CONTAINED | typeof OUTLINED | typeof TEXT | typeof EXTENDED;

interface Props {
    type?: ButtonType,
    prefixIcon?: any,
    suffixIcon?: any,
    size?: ButtonSize,
    variant?: ButtonVariant,
    fullwith?: boolean,
    rounded?: boolean,
    flat?: boolean,
    children?: React.ReactNode;
    onClick?: (e: any) => void,
    id?: string,
    disabled?: boolean,
    className?: string,
    isLoading?: boolean,
    iconOnly?: boolean,
    block?: boolean,
}

const Button = forwardRef(
    (
        {
            children,
            type = PRIMARY,
            size = MEDIUM,
            rounded,
            flat,
            iconOnly,
            prefixIcon,
            suffixIcon,
            className,
            variant = CONTAINED,
            block,
            isLoading,
            fullwith,
            ...rest
        }: Props,
        ref: any
    ) => {
        const rippleEffect = new Ripple();
        const ripple = 'light';
        let classes = [];
        let classNames = '' as string;
        let iconSize = '' as string;

        let radius = '';
        if (flat) {
            radius = '';
        } else {
            radius = size === 'large' ? 'rounded-lg' : size === 'medium' ? 'rounded-md' : 'rounded-sm'
        }


        const sharedClasses = [
            block && 'w-full',
            `${APP_STYLE_PREFIX}button`,
            'flex',
            'items-center',
            'justify-center',
            'gap-1',
            'outline-none',
            'uppercase',
            'tracking-wider',
            'focus:outline-none',
            'focus:shadow-none',
            'transition-all',
            'duration-300',
            'uppercase',
            rounded && 'rounded-full',
            fullwith && 'w-full',
            radius && radius,
        ];

        const buttonContained = [
            'shadow-sm',
            'hover:shadow-md',
            filledTextColors[type],
            filledBgColors[type],
            filledBgHoverColors[type],
            filledBgFocusColors[type],
            filledBgActiveColors[type],
            filledShadowColors[type],
            filledShadowHoverColors[type],
        ];

        const buttonOutlined = [
            'bg-transparent',
            'border',
            'border-solid',
            'shadow-none',
            'shadow-sm',
            'hover:shadow-md',
            outlineTextColors[type],
            outlineBorderColors[type],
            outlineBgHoverColors[type],
            outlineBorderHoverColors[type],
            outlineTextHoverColors[type],
            outlineBgActiveColors[type],
        ];

        const buttonLink = [
            `bg-transparent`,
            outlineTextColors[type],
            outlineTextHoverColors[type],
        ];

        const buttonSmall = [
            ...sharedClasses,
            iconOnly ? 'w-8 h-8 p-0 grid place-items-center' : 'py-1.5 px-4',
            'text-xs',
            'leading-normal',
        ];
        const buttonMedium = [
            ...sharedClasses,
            iconOnly ? 'w-10 h-10 p-0 grid place-items-center' : 'py-2.5 px-6',
            'text-sm',
            'leading-normal',
        ];
        const buttonLarge = [
            ...sharedClasses,
            iconOnly ? 'w-12 h-12 p-0 grid place-items-center' : 'py-3 px-7',
            'text-md',
            'leading-relaxed',
        ];

        if (size === 'small') {
            classes.push(...buttonSmall);
            iconSize = 'w-1 h-1';
        } else if (size === 'large') {
            classes.push(...buttonLarge);
            iconSize = 'w-2 h-2';
        } else {
            classes.push(...buttonMedium);
            iconSize = 'w-1 h-1';
        }

        if (variant === OUTLINED) {
            classes.push(...buttonOutlined);
        } else if (type === LINK || variant === TEXT) {
            classes.push(...buttonLink);
        } else {
            classes.push(...buttonContained);
        }

        classNames = classes.join(' ');

        const getIcon = (icon: string, hideLoading: boolean = false) => {
            if (isLoading && !hideLoading) {
                return <Loader className={iconSize} />;
            }
            return <div>{icon}</div>
        }

        return (
            <button
                {...rest}
                className={`${classNames} ${className}`}
                ref={ref}
                type="button"
                onMouseUp={(e) => rippleEffect.create(e, ripple)}
            >
                <div className="flex flex-row justify-center">
                    {(isLoading || prefixIcon) && <div className="pr-2 flex">{getIcon(prefixIcon)}</div>}
                    <div className="">{children}</div>
                    {(suffixIcon) && <div className="pl-2 flex">{getIcon(suffixIcon, true)}</div>}
                </div>
            </button>
        );
    }
);

export default Button;
