import { useQuery } from '@tanstack/react-query';
import api from '../utils/api';
import { Result } from 'postcss';

const fetchUpcomingMovies = () => {
  return api.get(`movie/upcoming`);
};

export const useUpcomingMoviesQuery = () => {
  return useQuery({
    queryKey: ['movie-upcoming'],
    queryFn: fetchUpcomingMovies,
    select: (Result) => Result.data,
  });
};
