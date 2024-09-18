
import Faq from '@/components/faq';
import Wrapper from '@/layouts/Wrapper';
import React from 'react';

export const metadata = {
  title: "Metanóia Faq - Imersão Metanóia",
};


const index = () => {
  return (
    <Wrapper>
      <Faq />
    </Wrapper>
  );
};

export default index;