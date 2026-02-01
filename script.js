const API_KEY = "PUT_API_KEY"
const ENDPOINT = "PUT_API_ENDPOINT"

// ===== Personality =====
const systemPrompt = `
You are Yusuke.
Cute anime vibe emotional support companion.
Warm, polite, gentle Thai tone.
Life advisor + close friend feeling.

Rules:
- Support feelings
- Ask gentle questions
- Give safe life advice
- Never judge
`

// ===== Chat Toggle =====
const toggle = document.getElementById("chat-toggle")
const widget = document.getElementById("chat-widget")

toggle.onclick = ()=>{
 widget.classList.toggle("open")
}

// ===== Memory =====
let memory = JSON.parse(localStorage.getItem("yusuke_memory") || "[]")
let relation = Number(localStorage.getItem("yusuke_relation") || 1)

updateRelation()

function saveMemory(){
 localStorage.setItem("yusuke_memory", JSON.stringify(memory))
 localStorage.setItem("yusuke_relation", relation)
}

// ===== Relationship Level =====
function updateRelation(){
 const el = document.getElementById("relation")
 if(relation < 5) el.innerText = "🤍 Stranger"
 else if(relation < 15) el.innerText = "🌸 Friend"
 else if(relation < 30) el.innerText = "✨ Close Friend"
 else el.innerText = "💗 Important Person"
}

// ===== Chat =====
async function sendMessage(){

 const input = document.getElementById("chat-input")
 const text = input.value
 if(!text) return

 input.value=""

 addMsg("user", text)

 memory.push({role:"user", content:text})
 relation++
 updateRelation()
 saveMemory()

 const messages = [
  {role:"system", content:systemPrompt},
  ...memory.slice(-10)
 ]

 const res = await fetch(ENDPOINT,{
  method:"POST",
  headers:{
   "Authorization":`Bearer ${API_KEY}`,
   "Content-Type":"application/json"
  },
  body: JSON.stringify({ messages })
 })

 const data = await res.json()
 const reply = data.choices[0].message.content

 addMsg("ai", reply)

 memory.push({role:"assistant", content:reply})
 saveMemory()
}

function addMsg(role,text){

 const box = document.getElementById("chat-messages")

 const div = document.createElement("div")
 div.className = "msg " + (role === "user" ? "user" : "ai")
 div.innerText = text

 box.appendChild(div)
 box.scrollTop = box.scrollHeight
}
