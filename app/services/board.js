import db from '../models/index.js'
export default function BoardService() {
    const Board = db.Board
    return {
        write(req, res) {
            const {date, name, title, subject} = req.body
            console.log(`넘어온 JSON 값 : ${JSON.stringify(req.body)}`)
            new Board(req.body).save(function (err) {
                if (err) {
                    res.status(500).send({message: err});
                    console.log('게시글 작성 실패')
                    return;
                } else {
                    res.status(200).json({ok: 'ok'})
                }
            })
        },
        list(req, res){
            Board.find().exec((err, boards) => {
                if (err) return res.status(400).send(err)
                res.status(200).json({success: true, boards}) 
            })
        }
    }
}
