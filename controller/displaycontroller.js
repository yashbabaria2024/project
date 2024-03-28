
const handleDisplay = (req, res) => {

    res.render('display')
}

const handleRoute = (req, res) => {
    let id = req.params.id


    switch (id) {
        case '1':
            res.render('task1')
            break;

        case '2':
            res.render('task2')
            break;

        case '3':
            res.render('task3')
            break;

        case '4':
            res.render('task4')
            break;

        case '5':
            res.render('task5')
            break;
        
        case '6':
            res.redirect('/dynamicgrid')
            break;
        case '7':
            res.redirect('/attendence')
            break;

        case '8':
            res.redirect('/result')
            break;

        case '9':
            res.redirect('/studdetail')
            break;

        case '10':
            res.redirect('/delimitersearch')
            break;

        case '11':
            res.redirect('/jobform')
            break;

        case '12':
            res.redirect('/fetchcrud')
            break;

        case '13':
            res.redirect('/')
            break;

        default:
            res.end("end")
            // res.redirect('/')
            break;
    }
}

module.exports = {handleDisplay, handleRoute}