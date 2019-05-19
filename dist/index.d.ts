import { ColdSubscription } from 'popmotion';
import { Styler } from 'stylefire';
interface GridWallParameters {
    container: HTMLElement;
    childrenWidthInPx: number;
    enableResize?: boolean;
    margin?: 'center' | 'left' | 'right';
    resizeDebounceInMs?: number;
    onEnter?: Animations;
    onChange?: Animations;
    onExit?: Animations;
    insertStyle?: CSSStyleDeclaration;
    beforeStyle?: CSSStyleDeclaration;
    afterStyle?: CSSStyleDeclaration;
}
interface Animations {
    translate?: boolean;
    from?: {
        [key: string]: number | string;
    };
    to?: {
        [key: string]: number | string;
    };
}
declare class Tile {
    id: number;
    onEnterAnimations: Animations;
    onChangeAnimations: Animations;
    animations?: Animations;
    animationStop?: ColdSubscription;
    x: number;
    y: number;
    firstRender: boolean;
    element: HTMLElement;
    styler: Styler;
    constructor({ element, id }: {
        element: HTMLElement;
        id: number;
    });
}
export default class Tiles {
    container: HTMLElement;
    enableResize: boolean;
    resizeDebounceInMs: number;
    children: Tile[];
    childrenHeights: {
        [name: string]: number;
    };
    childrenWidth: number;
    margin: 'center' | 'left' | 'right';
    marginWidth: number;
    containerWidth: number;
    columnsCount: number;
    columnsHeight: number[];
    childLastId: number;
    containerClassName: string;
    springProperties: {
        stiffness: number;
        damping: number;
        mass: number;
    };
    onEnter: Animations;
    onChange: Animations;
    onExit: Animations;
    constructor(params: GridWallParameters);
    missingParameter(params: {
        [name: string]: any;
    }): void;
    calculateMargin(): number;
    static debounce(callback: () => void, wait: number): () => void;
    listenToResize(): void;
    setChildId(child: Tile): string;
    setChildrenHeight(): void;
    isPositionAnimationEnabled(): boolean;
    resetColumnsHeight(): void;
    addStyleToDOM(): void;
    static setWidth(element: Tile, width: number): void;
    static addStyles(element: Tile, styles: CSSStyleDeclaration): void;
    removeChild(index: number, callback: () => void): void;
    getInitialChildren(): Tile[];
    private _addChild;
    private _removeChild;
    setChildrenWidth(): void;
    addMutationObserverToContainer(): void;
    addMutationObserverToChildren(): void;
    getLowerColumn(): {
        index: number;
        height: number;
    };
    static getMaxHeight(columnsHeight: number[]): number;
    addAfterStyle: (event: TransitionEvent) => void;
    reflow(): void;
    moveChild({ child, x, y }: {
        child: Tile;
        x: number;
        y: number;
    }): void;
    resize(containerWidthInPx: number): void;
    handleChildrenMutation(mutations: MutationRecord[], callback?: () => void): void;
    handleContainerMutation(mutations: MutationRecord[], callback?: () => void): void;
}
export {};
