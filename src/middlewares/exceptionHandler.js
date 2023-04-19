import Youch from 'youch'

const exceptionHandler = async (err, req, res, next) => {
	
	if(!err) next()
	
	if(process.env.NODE_ENV !== 'production') {
		const errorJson = await new Youch(err, req).toJSON()

		return res.status(500).json(errorJson)
	}

	res.status(500).json({ 
		message: 'Erro interno do servidor'
	})

}


export default exceptionHandler