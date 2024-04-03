
const handleDisplay = (req, res) => {

    res.status(200).render('display')
}

const handleRoute = (req, res) => {
    let id = req.params.id


    switch (id) {
        case '1':
            res.status(200).render('dynamictable')
            break;

        case '2':
            res.status(200).render('kukucube')
            break;

        case '3':
            res.status(200).render('domtable')
            break;

        case '4':
            res.status(200).render('tictac')
            break;

        case '5':
            res.status(200).render('sorting')
            break;
        
        case '6':
            res.status(200).redirect('/dynamicgrid')
            break;
        case '7':
            res.status(200).redirect('/attendence')
            break;

        case '8':
            res.status(200).redirect('/result')
            break;

        case '9':
            res.status(200).redirect('/studdetail')
            break;

        case '10':
            res.status(200).redirect('/delimitersearch')
            break;

        case '11':
            res.status(200).redirect('/jobform')
            break;

        case '12':
            res.status(200).redirect('/fetchcrud')
            break;

        case '13':
            res.status(200).redirect('/')
            break;
            
         case '14':
            res.status(200).redirect('/citystate')
            break; 
         
        case '15':
            res.status(200).redirect('/timeZone')
            break; 
            
        default:
            res.status(204).end("end")
            break;
    }
}

module.exports = {handleDisplay, handleRoute}