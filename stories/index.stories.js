import React from "react";

import faker from "faker";
import Button from "@material-ui/core/Button";
import ReactGA from "react-ga";

import { storiesOf, setAddon } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import JSX from "storybook-addon-jsx";
import "./style.css";
import Card from "./Card";
import { CustomLeftArrow, CustomRightArrow } from "./CustomArrows";
import CustomDot from "./CustomDot";
import Image from "./CustomImage";
import Carousel from "../src";
import "../src/assets/styles.css";

setAddon(JSX);

if (typeof window !== "undefined") {
  ReactGA.initialize("UA-135638821-1");
  ReactGA.pageview(window.location.pathname + window.location.search);
}

const images = [
  "https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549396535-c11d5c55b9df?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550167164-1b67c2be3973?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550338861-b7cfeaf8ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550223640-23097fc71cb2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550353175-a3611868086b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550330039-a54e15ed9d33?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549737328-8b9f3252b927?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549833284-6a7df91c1f65?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1549985908-597a09ef0a7c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
  "https://images.unsplash.com/photo-1550064824-8f993041ffd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
];
const texts = [
  "Appending currency sign to a purchase form in your e-commerce site using plain JavaScript.",
  "Fixing CSS load order/style.chunk.css incorrect in Nextjs",
  "React Carousel with Server Side Rendering Support – Part 1",
  "React Carousel with Server Side Rendering Support – Part 2",
  "Flutter Xcode couldn’t find any iOS App Development provisioning profiles"
];
const fakerData = Array(12)
  .fill(0)
  .map((item, index) => {
    const number = faker.random.number({ min: 0, max: 3 });
    return {
      image: images[index],
      headline: "w3js.com - web front-end studio",
      description: texts[number]
    };
  });

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    paritialVisibilityGutter: 40 // this is optional if you are not using partialVisbile props
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    paritialVisibilityGutter: 30 // this is optional if you are not using partialVisbile props
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    paritialVisibilityGutter: 30 // this is optional if you are not using partialVisbile props
  }
};

const responsiveImageHero = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

storiesOf("Carousel", module)
  .addWithJSX("With infinite mode", () => (
    <Carousel
      containerClassName="container-with-dots"
      infinite={true}
      responsive={responsive}
    >
      {fakerData.map(card => {
        return <Card {...card} />;
      })}
    </Carousel>
  ))
  .addWithJSX("Without infinite mode", () => {
    return (
      <Carousel containerClassName="container" responsive={responsive}>
        {fakerData.map(card => {
          return <Card {...card} />;
        })}
      </Carousel>
    );
  })
  .addWithJSX("Custom arrow", () => {
    return (
      <Carousel
        infinite={true}
        containerClassName="container"
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        responsive={responsive}
      >
        {fakerData.map(card => {
          return <Card {...card} />;
        })}
      </Carousel>
    );
  })
  .addWithJSX("No drag on desktop", () => {
    return (
      <Carousel
        containerClassName="container"
        disableDrag
        infinite={true}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        responsive={responsive}
      >
        {fakerData.map(card => {
          return <Card {...card} />;
        })}
      </Carousel>
    );
  })
  .addWithJSX("No swipe on mobile", () => {
    return (
      <Carousel
        disableSwipeOnMobile
        containerClassName="container"
        infinite={true}
        customLeftArrow={<CustomLeftArrow />}
        customRightArrow={<CustomRightArrow />}
        responsive={responsive}
      >
        {fakerData.map(card => {
          return <Card {...card} />;
        })}
      </Carousel>
    );
  })
  .addWithJSX("Slide two at a time", () => {
    return (
      <Carousel
        containerClassName="container"
        slidesToSlide={2}
        responsive={responsive}
      >
        {fakerData.map(card => {
          return <Card {...card} />;
        })}
      </Carousel>
    );
  })
  .addWithJSX("auto play", () => {
    return (
      <Carousel
        autoPlay
        infinite
        autoPlaySpeed={1000}
        containerClassName="container-with-dots"
        slidesToSlide={2}
        responsive={responsive}
      >
        {fakerData.map(card => {
          return <Card {...card} />;
        })}
      </Carousel>
    );
  })
  .addWithJSX("with dots", () => {
    return (
      <Carousel
        shouldShowDots
        infinite
        containerClassName="container"
        slidesToSlide={1}
        responsive={responsiveImageHero}
      >
        {images.slice(0, 5).map(image => {
          return (
            <img
              draggable={false}
              src={image}
              style={{
                width: "100%",
                display: "block",
                height: "100%",
                margin: "auto"
              }}
            />
          );
        })}
      </Carousel>
    );
  })
  .addWithJSX("custom dots", () => {
    return (
      <Carousel
        shouldShowDots
        customDot={<CustomDot />}
        infinite
        containerClassName="container"
        slidesToSlide={1}
        responsive={responsiveImageHero}
      >
        {images.slice(0, 5).map(image => {
          return (
            <img
              draggable={false}
              src={image}
              style={{
                width: "100%",
                display: "block",
                height: "100%",
                margin: "auto"
              }}
            />
          );
        })}
      </Carousel>
    );
  })
  .addWithJSX("with aria hidden, inspect me in the debugger", () => {
    return (
      <Carousel
        shouldShowDots
        infinite
        containerClassName="container"
        slidesToSlide={1}
        responsive={responsiveImageHero}
      >
        {images.slice(0, 5).map((url, ...rest) => {
          return <Image url={url} />;
        })}
      </Carousel>
    );
  })
  .addWithJSX("afterChanged function, a callback function", () => {
    return (
      <Carousel
        shouldShowDots
        infinite
        containerClassName="container"
        slidesToSlide={1}
        afterChanged={(previousSlide, { currentSlide, onMove }) =>
          alert(
            "previous slide is " +
              previousSlide +
              "currentSlide is " +
              currentSlide
          )
        }
        responsive={responsiveImageHero}
      >
        {images.slice(0, 5).map((url, ...rest) => {
          return <Image url={url} />;
        })}
      </Carousel>
    );
  })
  .addWithJSX("beforeChanged function, a callback function", () => {
    return (
      <Carousel
        shouldShowDots
        infinite
        containerClassName="container"
        slidesToSlide={1}
        beforeChanged={(nextSlide, { currentSlide, onMove }) =>
          alert(
            "previous slide is " + currentSlide + " nextSlide is " + nextSlide
          )
        }
        responsive={responsiveImageHero}
      >
        {images.slice(0, 5).map((url, ...rest) => {
          return <Image url={url} />;
        })}
      </Carousel>
    );
  })
  .addWithJSX("paritially visibie on next items", () => {
    return (
      <Carousel partialVisbile='right' containerClassName="container" responsive={responsive}>
        {fakerData.map(card => {
          return <Card {...card} />;
        })}
      </Carousel>
    );
  })
  .addWithJSX("paritially visibie on both direction", () => {
    return (
      <Carousel partialVisbile={true} containerClassName="container" responsive={responsive}>
        {fakerData.map(card => {
          return <Card {...card} />;
        })}
      </Carousel>
    );
  })
