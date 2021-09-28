// Type Definitions
export const XSMALL = 'x-small';
export const SMALL = 'small';
export const MEDIUM = 'medium';
export const LARGE = 'large';

export const PRIMARY = 'primary';
export const SECONDARY = 'secondary';
export const ERROR = 'error';
export const SUCCESS = 'success';

export const PASSWORD = 'password';
export const EMAIL = 'email';
export const NUMBER = 'number';

export const CONTAINED = 'contained';
export const OUTLINED = 'outlined';
export const TEXT = 'text';
export const EXTENDED = 'extended';
export const DEFAULT = 'default';
export const LINK = 'link';

export const ENABLED = 'enabled';
export const HOVER = 'hover';
export const PRESSED = 'pressed';
export const FOCUSED = 'focued';
export const DISABLED = 'disabled';

export const POSITION = 'position';

export const VERTICAL = 'vertical';
export const HORIZONTAL = 'horizontal';

export const sizes = [XSMALL, SMALL, MEDIUM, LARGE];
export const types = [PRIMARY, SECONDARY, ERROR, SUCCESS, LINK];
export const inputTypes = [TEXT, PASSWORD, EMAIL, NUMBER];
export const variants = [CONTAINED, OUTLINED, TEXT, EXTENDED, DEFAULT];
export const states = [ENABLED, HOVER, PRESSED, FOCUSED, DISABLED];
export const positions = [POSITION];
export const orientations = [VERTICAL, HORIZONTAL];

export const defaults = {
    size: SMALL,
    type: PRIMARY,
    variant: CONTAINED,
    state: ENABLED,
    position: POSITION,
    orientation: HORIZONTAL,
    inputType: TEXT,
    icon: 'info'
};

