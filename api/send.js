import webpush from "web-push"

webpush.setVapidDetails(
"mailto:test@test.com",
process.env.PUBLIC_KEY,
process.env.PRIVATE_KEY
)

export default async function handler(req,res){

const sub = req.body

await webpush.sendNotification(sub,JSON.stringify({
title:"Hello",
body:"Your PWA notification works"
}))

res.status(200).json({sent:true})

}
