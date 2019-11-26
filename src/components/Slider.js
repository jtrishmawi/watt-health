import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  overflow-y: scroll;
  height: calc(100vh - 11.5rem);
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
      const response = await fetch('https://www.instagram.com/watthealth75/?__a=1', { signal: signal });
      const data = await response.json();

      const items = data.graphql.user.edge_owner_to_timeline_media.edges.reduce((acc, item, index) => {
        const column = index % 3
        acc[column] = [].concat((acc[column] || []), item.node.display_url);
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