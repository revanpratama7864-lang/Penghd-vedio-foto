const chat = document.getElementById("chat");

function aiResponse(text) {
    text = text.toLowerCase();

    if (text.includes("hai") || text.includes("halo")) {
        return "Halo! Aku AI Web 🤖";
    }
    if (text.includes("nama")) {
        return "Aku AI sederhana berbasis JavaScript";
    }
    if (text.includes("kabar")) {
        return "Aku selalu siap bantu 😄";
    }
    if (text.includes("siapa kamu")) {
        return "Aku AI yang berjalan langsung di browser";
    }

    return "Aku belum paham, coba tanya yang lain";
}

function send() {
    const input = document.getElementById("userInput");
    const userText = input.value;
    if (!userText) return;

    chat.innerHTML += `<div class="user">Kamu: ${userText}</div>`;
    const reply = aiResponse(userText);
    chat.innerHTML += `<div class="ai">AI: ${reply}</div>`;

    input.value = "";
    chat.scrollTop = chat.scrollHeight;
}
