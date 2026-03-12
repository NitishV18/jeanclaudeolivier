let subs=[]

export default function handler(req,res){

const sub = JSON.parse(req.body)

subs.push(sub)

res.status(200).json({success:true})

}
