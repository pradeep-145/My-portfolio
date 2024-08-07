import nodemailer from 'nodemailer';

export default async function handler(req,res) {
    const {email,name , description} = await req.json();

    const Transport = nodemailer.createTransport({
        host:'smtp.gmail.com',
        port:465,
        secure:true,
        auth:{
            user:process.env.EMAIL,
            pass:process.env.PASSWORD
        }
    })
    var mailOptions={
        from:process.env.EMAIL,
        to:email,
        subject:name,
        text:description
    }

    Transport.sendMail(mailOptions,(err,info)=>{
        if(err){
            console.error(err.message);
        }
        else
        console.log(info.response)
    })
    
}