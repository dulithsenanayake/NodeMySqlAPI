const Student = require('../model/student');

exports.dictionaryDataGet = async (req, res) => {
    try {
        Student.findAll().then(result=> {
            res.status(200).json({
                result
            })
        }).catch (e=> {
            console.log(e);
        })
    }catch (e) {

    }

}