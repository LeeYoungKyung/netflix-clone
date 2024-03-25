import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';
import { Result } from 'postcss';

const fetchTopRangedMovies = () => {
  return api.get(`movie/top_rated`);
};

export const useTopRagedMoviesQuery = () => {
  return useQuery({
    queryKey: ['movie-top_rated'],
    queryFn: fetchTopRangedMovies,
    select: (Result) => Result.data,
  });
};
