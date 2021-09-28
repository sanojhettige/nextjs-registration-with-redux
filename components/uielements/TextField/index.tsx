import React from 'react';
import { DEFAULT, EMAIL, ERROR, LARGE, MEDIUM, NUMBER, OUTLINED, PASSWORD, SMALL, SUCCESS, TEXT } from '../../../lib/definitions';

const mtInputColors = {
    error: 'mt-input-error-500',
    success: 'mt-input-success-500',
};

const mtInputOutlineColors = {
    error: 'mt-input-outline-error-500',
    success: 'mt-input-outline-success-500',
};

const borderColors = {
    error: 'border-error-500',
    success: 'border-deep-success-500',
};

type InputSize = typeof SMALL | typeof MEDIUM | typeof LARGE;
type Variant = typeof OUTLINED | typeof DEFAULT;
type InputType = typeof TEXT | typeof EMAIL | typeof PASSWORD | typeof NUMBER;

interface Props {
    placeholder: string,
    size?: InputSize,
    variant?: Variant,
    error?: string | null,
    success?: boolean,
    value?: string,
    onChange?: (e: any) => void,
    type?: InputType
}

export default function TextField({
    placeholder,
    size = MEDIUM,
    variant = DEFAULT,
    error,
    success,
    value,
    type = TEXT,
    ...rest
}: Props) {
    let labelBorderColor,
        mtInputBorderColor,
        mtInputOutlineColor,
        mtInputOutlineFocusColor,
        input = [];

    let container = ['w-full', 'relative'];
    let containerClass = '' as string;
    const isOutlined = variant === OUTLINED;

    if (error) {
        labelBorderColor = borderColors[ERROR];
        mtInputBorderColor = mtInputColors[ERROR];
        mtInputOutlineColor = mtInputOutlineColors[ERROR];
        mtInputOutlineFocusColor = borderColors[ERROR];
    } else if (success) {
        labelBorderColor = borderColors[SUCCESS];
        mtInputBorderColor = mtInputColors[SUCCESS];
        mtInputOutlineColor = mtInputOutlineColors[SUCCESS];
        mtInputOutlineFocusColor = borderColors[SUCCESS];
    }


    let label = [
        'text-gray-400',
        'absolute',
        'left-0',
        `${isOutlined ? '-top-1.5' : '-top-0.5'}`,
        'w-full',
        'h-full',
        `${!isOutlined && 'border border-t-0 border-l-0 border-r-0 border-b-1'}`,
        labelBorderColor,
        'pointer-events-none',
        `${isOutlined && 'flex'}`,
        `${isOutlined && size === SMALL && 'text-sm'}`,
        `${isOutlined && 'leading-10'}`,
        `${isOutlined && 'transition-all'}`,
        `${isOutlined && 'duration-300'}`,
    ];
    let labelClass = '' as string;

    const sharedClasses = [
        'w-full',
        'h-full',
        'text-gray-800',
        'leading-normal',
        'shadow-none',
        'outline-none',
        'focus:outline-none',
        'focus:ring-0',
        'focus:text-gray-800',
    ];

    const inputSmall = [
        ...sharedClasses,
        `${isOutlined ? 'px-3' : 'px-1'}`,
        'text-sm',
        'pt-2',
        'pb-2',
    ];
    const inputMedium = [
        ...sharedClasses,
        `${isOutlined ? 'px-3' : 'px-1'}`,
        'pb-3',
        'pt-3',
        'text-md',
    ];
    const inputLarge = [
        ...sharedClasses,
        `${isOutlined ? 'px-3' : 'px-1'}`,
        'pt-4',
        'pb-4',
        'text-lg',
    ];

    const inputDefault = [
        mtInputBorderColor,
        'mt-input',
        'bg-transparent',
        'border',
        'border-b-1',
        'border-t-0',
        'border-r-0',
        'border-l-0',
        'border-gray-300'
    ];

    const inputOutlined = [
        mtInputOutlineColor,
        labelBorderColor,
        'mt-input-outline',
        'bg-transparent',
        'border',
        'border-1',
        'border-gray-300',
        'rounded-lg',
        'focus:border-2',
        `focus:${mtInputOutlineFocusColor}`,
    ];

    if (size === SMALL) {
        container = ['h-13', ...container];
        input.push(...inputSmall);
    } else if (size === LARGE) {
        container = ['h-20', ...container];
        input.push(...inputLarge);
    } else {
        container = ['h-16', ...container];
        input.push(...inputMedium);
    }

    isOutlined
        ? input.push(...inputOutlined)
        : input.push(...inputDefault);

    containerClass = container.join(' ');
    labelClass = label.join(' ');
    let inputClasses
    inputClasses = input.join(' ');

    return (
        <>
            <div className={containerClass}>
                <div>
                    <input
                        {...rest}
                        type={type}
                        placeholder={placeholder}
                        value={value}
                        className={`${inputClasses} ${error && 'mt-input-outline-error'
                            } ${success && 'mt-input-outline-success'}`}
                    />
                    {error && (
                        <span className="block mt-1 text-xs text-red-500">{error}</span>
                    )}
                </div>
            </div>
        </>
    );
}