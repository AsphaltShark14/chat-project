//render chat templtes to the DOM
// clear the list of chats (when room changes)

class ChatUI {
  constructor(list){
    this.list = list;
  }
  render(data){
    const html = `
      <li class="list-group-item">
        <span class="username">${data.username}</span>
        <span class="message">${data.message}</span>
        <div class="time">${data.created_at.toDate()}</span>
      </li>
    `;
    this.list.innerHTML += html;
  }
}