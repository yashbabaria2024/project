const jsonplaceholder = (req,res)=>{
 
   res.render('jsonplaceholder/display.ejs');
};

const comments =  (req,res)=>{
  res.render('jsonplaceholder/comments.ejs',{})
}

const jsonplaceholderpost = (req,res)=>{
  let number = req.body.number
  console.log(number);
  res.render('jsonplaceholder/display',{"number":number})
}

module.exports = {jsonplaceholder,comments,jsonplaceholderpost}