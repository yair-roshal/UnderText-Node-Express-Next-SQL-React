const WordsService = require('../services/words.service')

class WordsController {
    async getWordsStartPage(req, res) {
        const result = await WordsService.getWordsStartPage(req, res)

        if (result) return res.status(200).send(result)
        else return res.status(500).send({ message: 'error.' })
    }

    async getWord(req, res) {
        const result = await WordsService.getWord(req, res)

        if (result) return res.status(200).send(result)
        else return res.status(500).send({ message: 'error.' })
    }

    async getWords(req, res) {
       
        console.log('req3333', req.url)
        
        const result = await WordsService.getWords(req, res)

        console.log('result555', result)
        if (result) return res.status(200).send(result)
        else return res.status(500).send({ message: 'error.' })
    }

    async createWord(req, res) {
        const result = await WordsService.createWord(req, res)

        if (result) return res.status(200).send(result)
        else return res.status(500).send({ message: 'error.' })
    }

    async updateWord(req, res) {
        const result = await WordsService.updateWord(req, res)

        if (result) return res.status(200).send(result)
        else return res.status(500).send({ message: 'error.' })
    }

    async deleteWord(req, res) {
        const result = await WordsService.deleteWord(req, res)

        if (result) return res.status(200).send(result)
        else return res.status(500).send({ message: 'error.' })
    }

    async deleteTable(req, res) {
        const result = await WordsService.deleteTable(req, res)

        if (result) return res.status(200).send(result)
        else return res.status(500).send({ message: 'error.' })
    }
}

module.exports = new WordsController()
