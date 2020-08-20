const Thing = require('../models/thing');


exports.createOneThing = (req, res, next) => {
	const thingObj = JOSN.parse(req.body.thing)
	delete thingObj._id;
	const thing = new Thing(
		{ 
			...thingObj, 
			imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}` 
		} 
	)
	thing.save()
		.then( () => res.status(201).json({ message: 'Object created' }) )
		.catch( error => res.status(400).json({error}) )
}



exports.getOneThing = (req, res, next) => {
	Thing.findOne( {_id: req.params.id} )
		.then( thing => res.status(200).json(thing) )
		.catch( error => res.status(400).json({error}) )
}



exports.updateOneThing = (req, res, next) => {
	const thingObj = req.file ?
		{
			...JSON.parse(req.body.thing),
			imageUrl: `${req.protocol}://${req.get('host')}/images/${req.file.filename}`
		} : { ...req.body };
	Thing.updateOne(
		{ _id: req.params.id },
		{ ...thingObj, _id: req.params.id }
	)
	.then( () => res.status(200).json({message: 'Object updated'}) )
	.catch( error => res.status(400).json({error}) )
}



exports.deleteOneThing = (req, res, next) => {
	Thing.deleteOne( {_id: req.params.id} )
		.then( () => res.status(200).json({message: 'Object deleted'}) )
		.catch( error => res.status(400).json({error}) )
}



exports.getAllThings = (req, res, next) => {
	Thing.find()
		.then( things => res.status(200).json(things) )
		.catch( error => res.status(400).json({error}) )
}
