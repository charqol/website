/**
 * Action that dispatches an event when a click occurs outside the node.
 * Useful for closing dropdowns, modals, etc.
 */

// Define custom event for TypeScript
declare namespace svelteHTML {
    interface HTMLAttributes<T> {
        'on:click_outside'?: (event: CustomEvent<any>) => void;
    }
}

type ClickOutsideOptions = {
    handler: () => void;
};

export function clickOutside(node: HTMLElement, options?: ClickOutsideOptions) {
    const handleClick = (event: MouseEvent) => {
        if (node && !node.contains(event.target as Node) && !event.defaultPrevented) {
            if (options && options.handler) {
                options.handler();
            } else {
                node.dispatchEvent(new CustomEvent('click_outside'));
            }
        }
    };

    document.addEventListener('click', handleClick, true);

    return {
        update(newOptions: ClickOutsideOptions) {
            options = newOptions;
        },
        destroy() {
            document.removeEventListener('click', handleClick, true);
        }
    };
} 