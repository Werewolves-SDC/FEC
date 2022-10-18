import styled from 'styled-components';
import ProductsOverview from './overview/productsOverview/productsOverview.jsx';
import Reviews from './reviews/Reviews.jsx';
import WriteReview from './reviews/WriteReview.jsx';
import RelatedProductList from './related_comparison/relatedProductList.jsx';
import OutfitList from './related_comparison/outfitList.jsx';
import QA from './questionsAnswers/qa.jsx';

export const Container = styled.section`
  display: flex;
  height: 100%;
  flex-direction: column;
  // flex-wrap: wrap;
  width:100%;
`;

export const Header = styled.header`

  top: 0;
  position: fixed;
  background: lightgrey;
  width: 100vw;
  padding: 10px;
  height: 80px;

`;

export const OverviewContainer = styled(ProductsOverview)`

  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;

`;

// export const SectionBreakOne = styled.div`
//   flex-basis: 100%
//   height: 0;
// `;

export const RelatedProductListContainer = styled(RelatedProductList)`

  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;

`;

export const OutfitListContainer = styled(OutfitList)`

  width: 100%;
  display: flex;
  flex-direction: column;
  background: white;

`;

export const ReviewsContainer = styled(Reviews)`

  width: 100vw;
  padding: 20px;
  display: flex;
  flex-direction: column;
  background: white;
  flex: 1;
`;

export const WriteReviewContainer = styled(WriteReview)`

  width: 100vw;
  padding: 20px;
  display: flex;
  flex-direction: row;
  background: white;
  flex: 1;
`;

export const QuestionsContainer = styled(QA)`

  width: 100vw;
  padding: 20px;
  display: flex;
  flex-direction: row;
  background: white;
`;

export const Footer = styled.footer`
 flex:none;
 bottom: 0;
 position: fixed;
 background: lightgrey;
 width: 100vw;
 padding: 10px;
`;
