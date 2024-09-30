# React Drag Cards

![Version](https://img.shields.io/badge/version-1.0.1-brightgreen) ![License](https://img.shields.io/badge/license-MIT-blue)

## Sneak peek
![demo1](https://github.com/user-attachments/assets/7f015abb-4492-4cb3-b701-d0f4b54ecada)

## Demo Link 🔗


## Table of Contents

- [Description](#description)
- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Description

React Drag Cards is a simple and customizable drag-and-drop card component for React applications. It allows users to interactively rearrange cards within a container, making it ideal for use cases like Kanban boards, task lists, or any scenario requiring card manipulation.

## Features

- Drag and drop functionality
- Easy to customize
- Lightweight and efficient
- Responsive design
- Supports React and Tailwind css

## Installation

You can install the package via npm:

```bash
npm install react-drag-cards
```
## Usage

Here's a quick example of how to use the React Drag Cards component in your application:

```bash

import React from 'react';
import DragCards from './DragCards';

const App = () => {
  const cards = [
    {
      src: "https://assets.playgroundai.com/346dd2b5-47b7-4c0d-b0b4-bbf3e6cd249c.jpg",
      alt: "Example image 1",
      rotate: "6deg",
      top: "20%",
      left: "25%",
      className: "w-36 md:w-56"
    },
    {
      src: "https://images.playground.com/761f186aa1be4904ad6f5b18586377aa.jpeg",
      alt: "Example image 3",
      rotate: "-6deg",
      top: "20%",
      left: "40%",
      className: "w-32 md:w-60"
    },

// Add More Images

  ];

  return (
    <DragCards
      title="SPACE"
      titleColor="text-blue-800"
      accentColor="text-red-500"
      backgroundColor="bg-black"
      cards={cards}
    />
  );
};

export default App;
```
## API Reference

#### Props

| Prop     | Type     | Description                                                                                 |
|----------|----------|---------------------------------------------------------------------------------------------|
| `cards`  | Array    | An array of card objects. Each card should have an `id` and `content` field.              |
| `onDrop` | Function | Callback function fired when cards are dropped.                                            |


## Contributing

We welcome contributions! Please read the [CONTRIBUTING.md](CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgements

- Inspired by various drag-and-drop libraries.

