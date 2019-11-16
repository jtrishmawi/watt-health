import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  height: calc(100vh - 6.5rem);
  padding: 0 1rem;
`;

const Column = styled.div`
  flex: calc(100% / 3);
  max-width: calc(100% / 3);
`;

const Slide = styled.img`
  vertical-align: middle;
  width: 100%;
`;

const Slider = () => {
  const [slides, setSlides] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    const signal = abortController.signal;

    const fetchSlides = async () => {
      const response = await fetch('slides.txt', { signal: signal });
      const data = await response.text();
      const items = data.split(/\r|\n/).reduce((acc, item, index) => {
        const column = index % 3
        acc[column] = [].concat((acc[column] || []), item);
        return acc
      }, [[], [], []]);
      setSlides(items);
    }

    fetchSlides();

    return () => {
      abortController.abort();
    };
  }, []);

  return (
    <Container>
      {slides.map((column, index) => <Column key={index}>
        {column.map(slide => <Slide key={slide} src={slide} alt="" />)}
      </Column>)}
    </Container>
  );
};

export default Slider;