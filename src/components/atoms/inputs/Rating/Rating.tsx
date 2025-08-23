import { Rating as MuiRatingBase } from '@mui/material';

import { RatingProps } from './Ratingtype';

export const MuiRating: React.FC<RatingProps> = (props) => {
  const { ...restProps } = props;
  return <MuiRatingBase {...restProps}></MuiRatingBase>;
};
