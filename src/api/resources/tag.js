import http from '../../plugins/axios';

const TagResource = {
  listAll: () => http.get('/v1/tag'),
  create: (params) => http.post('/v1/tag', params)
};

export default TagResource;
