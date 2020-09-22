import React from 'react';

import TrendingPanel from './TrendingPanel';
import LoadingTrendingpanel from '../Shimmer/LoadingTrendingpanel';

import { Container } from './styles';


const RightColumn: React.FC<LoadingProps> = ({ isLoading }) => {
  return (
    <Container className="right-column">

      { isLoading ? (
        <LoadingTrendingpanel />
      ) : (
        <>
          <TrendingPanel />
          <TrendingPanel />
        </>
      )}      
    </Container>
  );
};

export default RightColumn;
