import Request from '../../utils/request';
 
export const demo = (data) => {
  return Request({
    url: 'api/rightDemo',
    method: 'POST',
    data,
  });
};


