import http from '../../plugins/axios';

const QuestionResource = {
  listAll: () => http.get('/v1/question'),
  create: (params) => http.post('/v1/question', params)
};

export default QuestionResource;
