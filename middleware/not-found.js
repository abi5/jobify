const notFoundMiddleware = (rq,res) => 
res.status(404).send('Route does not exist')

export default notFoundMiddleware