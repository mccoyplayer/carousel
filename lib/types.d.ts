/// <reference types="react" />
interface responsiveType {
    [key: string]: {
        breakpoint: {
            max: number;
            min: number;
        };
        items: number;
    };
}
interface CarouselProps {
    responsive: responsiveType;
    deviceType?: string;
    forSSR?: boolean;
    slidesToSlide: number;
    disableDrag?: boolean;
    removeArrow?: boolean;
    disableSwipeOnMobile?: boolean;
    removeArrowOnDeviceType?: string | Array<string>;
    children: any;
    customLeftArrow?: React.ReactElement<any> | null;
    customRightArrow?: React.ReactElement<any> | null;
    customDot?: React.ReactElement<any> | null;
    infinite?: boolean;
    minimumTouchDrag: number;
    afterChanged?: (previousSlide: number, state: any) => void;
    beforeChanged?: (nextSlide: number, state: any) => void;
    contentClassName?: string;
    itemClassName?: string;
    containerClassName?: string;
    keyBoardControl?: boolean;
    autoPlay?: boolean;
    autoPlaySpeed?: number;
    shouldShowDots?: boolean;
    customTransition?: string;
    transitionDuration?: number;
}
interface CarouselInternalState {
    itemWidth: number;
    containerWidth: number;
    slidesToShow: number;
    currentSlide: number;
    totalItems: number;
    domLoaded: boolean;
    deviceType?: string;
    transform: number;
}
export { CarouselInternalState, CarouselProps, responsiveType };
