export const auth = ({headers: {authToken}}, res, next) => {
  if(authToken === 'untokenvalido') { next() }
  else res.status(401).error('no estas autorizado')
};
