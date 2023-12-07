
// /users/:id
export function buildRoutePath(path) {
  const routeParametersRegex = /:([a-zA-Z]+)/g
  const pathWithParams = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)')

  const pathRegex = new RegExp(`^${pathWithParams}(?<query>\\?(.*))?$`)

  return pathRegex
  
  //console.log(pathRegex)

  // Para mostrar precisa estar em array
  // Faz o match com o path e a RegExp
  // console.log(Array.from(path.matchAll(routeParametersRegex)))

  // return new RegExp()
}