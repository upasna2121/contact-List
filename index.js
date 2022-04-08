const express=require('express');
const path=require('path');
const port=8000;

const db=require('./config/mongoose');

const app=express();

app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));
app.use(express.urlencoded());
app.use(express.static('assets'));
var contactList=[
        {
                name:"upasna",
                phone:"88888"
        },
        {
                name:"riya",
                phone:"444444"
        },
        {
                name:"princy",
                phone:"667677"
        },
]
app.get('/',function(req , res){
        return res.render('home',{
                title:"Contact List",
                contact_list:contactList
 });
});

app.get('/practise',function(req,res){
        return res.render('practise',{title:'let play with ejs'});

});

// app.use("/", (req, res, next)=> {
//         console.log(req)
//         next()
// })
app.post('/contact-List',function(req,res){
        contactList.push({
                name:req.body.name,
                phone:req.body.phone

        });
        return res.redirect('/')
});
app.get('delete-contact/',function(req,res){
        console.log(req.query);
        let phone=req.query.phone;
        let contactIndex=contactList.findIndex(contact.phone == phone);
if(contacyindex!= -1){
        contactList.splice(contactIndex,1);

}
return res.redirect('back');
});
app.listen(port,function(err){
        if(err){ console.log('error is running the server',err)}

        console.log('yup! Express server is running on port:',port);
});