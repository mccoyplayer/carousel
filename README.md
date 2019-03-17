# react-multi-carousel

Lightweight fully customizable React carousel component supports multiple items and SSR(Server-side rendering) with typescript.

The technical details of this carousel can be found at [www.w3js.com -> react-multi-carousel](https://w3js.com/index.php/2019/03/06/react-carousel-with-server-side-rendering-support-part-1z/).

## NPM

[NPM](https://www.npmjs.com/package/react-multi-carousel).

## Bundle size

[Bundle-size](https://bundlephobia.com/result?p=react-multi-carousel@1.0.33).
2.5kB

## Demo.

Demo and documentation can be found at [here](https://w3js.com/react-multi-carousel/).

Demo for the SSR are at [here](https://react-multi-carousel.now.sh/)
Try to disable JavaScript to test if it renders on the server-side.

Codes for SSR at [github](https://github.com/YIZHUANG/react-multi-carousel/blob/master/examples/ssr/pages/index.js).

Codes for the documentation at [github](https://github.com/YIZHUANG/react-multi-carousel/blob/master/stories/index.stories.js).

## Install

```
$ npm install react-multi-carousel --save

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
```

### Technical approach.

Detailed Can be found in this blog post at [w3js](https://w3js.com/index.php/2019/03/06/react-carousel-with-server-side-rendering-support-part-1z/).

### How the SSR mode works?

The current most common solution is to detect the device type of the user based on the user agent. (server-side or client-side).

Based based on the device type, we decided how many items we are showing in the Carousel.

For example, we want to show 3 items at the same time on desktop (screen size 1024 - 2000px possibily) and 2 items on tablet(700px - 1024px) and 1 item on mobile. ---> this can be achieved through user-agent detection.

More detailed can be found in this blog post [here](https://w3js.com/index.php/2019/03/06/react-carousel-with-server-side-rendering-support-part-1z/).

Codes for SSR at [github](https://github.com/YIZHUANG/react-multi-carousel/blob/master/examples/ssr/pages/index.js).

- Demo for the SSR are at [here](https://react-multi-carousel.now.sh/)
- Try to disable JavaScript to test if it renders on the server-side.

## Features.

- Server-side rendering
- Infinite mode
- Custom animation
- AutoPlay mode
- Responsive
- Swipe to slide
- Mouse drag to slide
- Keyboard control to slide
- Multiple items
- Show / hide arrows
- Custom arrows / control buttons
- Custom dots
- Custom styling
- Accessibility support

## Examples

```
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
<Carousel
  disableSwipeOnMobile
  disableDrag
  shouldShowDots={true}
  responsive={responsive}
  forSSR
  slidesToSlide={2}
  infinite={true}
  autoPlay={this.props.deviceType !== 'mobile' ? true : false}
  autoPlaySpeed={1000}
  keyBoardControl={true}
  customTransition='all .5'
  transitionDuration={500}
  containerClassName='container-border-green'
  removeArrowOnDeviceType={['tablet', 'mobile']}
  deviceType={this.props.deviceType}
  dotListClassName='custom-dot-list-style'
  itemClassName='carousel-item-gutter-padding-left-40'
  containerClassName='carousel-container-padding-bottom-80'
>
  {fakerData.map(card => {
    return <Card {...card} />;
  })}
</Carousel>
```

## Custom Arrows.

You can pass your own custom arrows to make it the way you want, the same for the position. For example, add media query for the arrows to go under when on smaller screens.

You custom arrows will receive a list of props/state that's passed back by the carousel such as the currentSide, is dragging or swiping in progress.  [An Example](https://w3js.com/react-multi-carousel/?selectedKind=Carousel&selectedStory=Custom%20arrow&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel). <br/>

[Code](https://github.com/YIZHUANG/react-multi-carousel/blob/master/stories/CustomArrows.js)

```
const CustomRightArrow = ({ onClick, ...rest }) => {
  const { onMove, state: {  currentSlide, deviceType }  } = rest;
  // onMove means if dragging or swiping in progress.
  return <button onClick={() => onClick()} />
}
<Carousel customRightArrow={<CustomRightArrow />} />
```

## Custom button group.

This is very useful if you don't want the dots, or arrows and you want to fully customize the control functionality and styling yourself. [Example](https://w3js.com/react-multi-carousel/?selectedKind=Carousel&selectedStory=With%20custom%20button%20group&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel). <br/>
[Code](https://github.com/YIZHUANG/react-multi-carousel/blob/master/stories/CustomArrows.js)

```
const ButtonGroup = ({ next, previous, goToSlide ...rest }) => {
  const { state: { currentSlide } } = rest;
  return (
    <div className="carousel-button-group"> // remember to give it position:absolute
      <ButtonOne className={currentSlide === 0 : 'disable' : ''} onClick={() => previous()} />
      <ButtonTwo onClick={() => next()} />
      <ButtonThree onClick={() => goToSlide(currentSlide + 1)}> Go to any slide </ButtonThree>
    </div>
  );
};
<Carousel removeArrow customButtonGroup={<ButtonGroup />}>
  <ItemOne>
  <ItemTwo>
</Carousel>
```

## Custom dots.

You can pass your own custom dots to replace the default one

You custom dots will receive a list of props/state that's passed back by the carousel such as the currentSide, is dragging or swiping in progress. [An Example](https://w3js.com/react-multi-carousel/?selectedKind=Carousel&selectedStory=custom%20dots&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel). <br/>
[Code](https://github.com/YIZHUANG/react-multi-carousel/blob/master/stories/CustomDot.js)

```
const CustomDot = ({ onClick, ...rest }) => {
  const { onMove, index, state: { currentSlide, deviceType }  } = rest;
  // onMove means if dragging or swiping in progress.
  return <button className={currentSlide === index ? 'active' : 'inactive'} onClick={() => onClick()} />
}
<Carousel shouldShowDots customDot={<CustomDot />} />
```

## The items you passed as children.

All the items you passed as children will received a list of props and the current state that's passed back by the Carousel.
This is useful if you want to support accessibility or do your own stuff.
[An Example](https://w3js.com/react-multi-carousel/?selectedKind=Carousel&selectedStory=with%20aria%20hidden%2C%20inspect%20me%20in%20the%20debugger&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel).

Inspect the element in the chrome debugger.

```
const CarouselItem = ({ isvisible, currentSlide, onMove, ...rest }) => {
  console.log(rest);
  return <div aria-hidden={isvisible ? 'false':'true'} className={isvisible? 'special style' : 'normal style'}></div>
}
<Carousel>
  <CarouselItem />
  <CarouselItem />
  <CarouselItem />
</Carousel>
```

## ParitialVisibile props.

Shows the next / previous items paritially, this is very useful if you want to indicate to the users that this carousel component is swipable, has more items behind it.

paritialVisibile = 'right' means showing only next items paritially
paritialVisibile = {true} means showing both.

[An Example](https://w3js.com/react-multi-carousel/?selectedKind=Carousel&selectedStory=paritially%20visibie%20on%20next%20items&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel).

```
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 40 // this is needed to tell the amount of px that should be visible.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30 // this is needed to tell the amount of px that should be visible.
  }
}
<Carousel paritialVisibile='right' responsive={responsive}>
  <ItemOne />
  <ItemTwo />
</Carousel>
```

## afterChanged callback.

This is a callback function that is invoked each time when there has been a sliding.

[An Example](https://w3js.com/react-multi-carousel/?selectedKind=Carousel&selectedStory=afterChanged%20function%2C%20a%20callback%20function&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel).

```
<Carousel afterChanged={(previousSlide, { currentSlide, onMove }) => {
    doSpeicalThing()
  }}>
</Carousel>
```

## beforeChanged call back

This is a callback function that is invoked each time before a sliding.

[An Example](https://w3js.com/react-multi-carousel/?selectedKind=Carousel&selectedStory=beforeChanged%20function%2C%20a%20callback%20function&full=0&addons=1&stories=1&panelRight=0&addonPanel=storybook%2Factions%2Factions-panel).

```
<Carousel beforeChanged={(nextSlide, { currentSlide, onMove }) => {
    doSpeicalThing()
  }}>
</Carousel>
```

## Combine beforeChanged and nextChanged, real usage.

They are very useful in the following cases:

- The carousel item is clickable, but you don't want it to be clickable while the user is dragging it or swiping it.

```
<Carousel beforeChanged={() => this.setState({ isMoving: true })} afterChanged={() => this.setState({ isMoving: false })}>
  <a onClick={(e) => {
    if(this.state.isMoving) {
      e.preventDefault()
    }
    }} href='https://w3js.com'>Click me</a>
</Carousel>
```

- Preparing for the next slide.

```
<Carousel beforeChanged={(nextSlide) => this.setState({ nextSlide: nextSlide })}>
  <div>Initial slide</div>
  <div onClick={() => {
    if(this.state.nextSlide === 1) {
      doVerySpecialThing();
    }
    }}>Second slide</div>
</Carousel>
```

## Using ref.

```
<Carousel ref={(el) => (this.Carousel = el)} removeArrow responsive={responsive}>
  <ItemOne />
  <ItemTwo />
</Carousel>
<button onClick={() => {
    const nextSlide = this.Carousel.state.currentSlide + 1;
     // this.Carousel.next()
     // this.Carousel.goToSlide(nextSlide)
  }}>Click me</button>
```

## General Props

```
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
customButtonGroup?: React.ReactElement<any> | null;
infinite?: boolean;
minimumTouchDrag: number; // default 50px. The amount of distance to drag / swipe in order to move to the next slide.
afterChanged?: (previousSlide: number, state: CarouselInternalState) => void; // A callback after sliding everytime. `(previousSlide, currentState) => ...`
beforeChanged?: (nextSlide: number, state: CarouselInternalState) => void; // A callback before sliding everytime. `(previousSlide, currentState) => ...`
contentClassName?: string; // Use this to style your own track list.
itemClassName?: string; // Use this to style your own Carousel item. For example add padding-left and padding-right
containerClassName?: string; // Use this to style the whole container. For example add padding to allow the "dots" or "arrows" to go to other places without being overflown.
dotListClassName?: string; // Use this to style the dot list.
keyBoardControl?: boolean;
autoPlay?: boolean;
autoPlaySpeed?: number; // default 3000ms
shouldShowDots?: boolean;
// Show next/previous item partially, if partialVisbile === 'right', only show the next item partially, partialVisbile === {true} show both
// partialVisbile has to be used in conjunction with the responsive props, details are in documentation.
partialVisbile?: "right" | boolean;
customTransition?: string;
transitionDuration?: number;
// if you are using customTransition, make sure to put the duration here.
// for example, customTransition="all .5"  then put transitionDuration as 500.
// this is needed for the resizing to work.
```

## Specific Props

| Name            | Type     | Default | Description                                                                                         |
| :-------------- | :------- | :------ | :-------------------------------------------------------------------------------------------------- |
| `responsive`    | `Object` | `{}`    | How many items to show on each breakpoint.                                                          |
| `deviceType`    | `string` | `none`  | Only pass this when use for server-side rendering, what to pass can be found in the example folder. |
| `forSSR`        | `bool`   | `false` | For SSR                                                                                             |
| `slidesToSlide` | `number` | `1`     | How many slides to slide.                                                                           |

## Contribute

Submit an issue for feature request or submit a pr.
