const API_KEY = "PUT_YOUR_API_KEY"

const systemPrompt = `
You are Yusuke.
Cute emotional support friend.
Speak warm Thai.
Be supportive, kind, gentle.
Talk like close friend.
Give life advice safely.
`

async function sendMessage(){

 const input = document.getElementById("chat-input")
 const text = input.value
 input.value=""

 addMessage("user", text)

 const res = await fetch("AI_API_ENDPOINT",{
   method:"POST",
   headers:{
     "Authorization":`Bearer ${API_KEY}`,
     "Content-Type":"application/json"
   },
   body: JSON.stringify({
     messages:[
       {role:"system", content:systemPrompt},
       {role:"user", content:text}
     ]
   })
 })

 const data = await res.json()

 const reply = data.choices[0].message.content
 addMessage("ai", reply)
}

function addMessage(role,text){

 const box = document.getElementById("chat-messages")

 const div = document.createElement("div")
 div.innerText = text
 div.style.margin="6px"
 div.style.padding="8px"
 div.style.borderRadius="12px"
 div.style.background = role==="user" ? "#ffe0ec" : "#f2f2f2"

 box.appendChild(div)
}
