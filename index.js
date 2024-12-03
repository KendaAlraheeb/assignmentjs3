let site_nameInput = document.getElementById('site_name');
let site_urlInput = document.getElementById('site_url');
let Bookmarks;
if (localStorage.getItem('BookmarkStore') != null) {
  Bookmarks = JSON.parse(localStorage.getItem('BookmarkStore'))
} else {
  Bookmarks = [];
}

showBookmarks(Bookmarks)

function addBookmark() {
  let newBookmark = {
    site_name: site_nameInput.value,
    site_url: site_urlInput.value,
  }
  if (site_urlInput.value.slice(0, 8) == "https://" && site_name!= "") {
  Bookmarks.push(newBookmark);
  localStorage.setItem('BookmarkStore', JSON.stringify(Bookmarks));
  showBookmarks(Bookmarks);
  }else{
    alert("The url must start by https:// and site name can't be empty !");
  }
  
}
function showBookmarks(list) {
  let i = 0;
  let html = "";
  let done = "";
  for (i; i < list.length; i++) {
    html += `<tr>
                    <td>#</td>
                    <td>${list[i].site_name}</td>
                    <td>${list[i].site_url}</td>
                    <td><a target="_blank" href="${list[i].site_url}"><button style="background-color:#6393A6 ;padding-left: 10px;padding-right: 10px;border: none;color: white;">Visit</button></a></td>
                    <td><button onclick="deleteToDo(${i})" style="background-color:#A65B4B ;border: none;color: white;padding-left: 10px;padding-right: 10px;">Delete</button></td>
                </tr>`
    done = "";
   }
  document.getElementById('listrows').innerHTML = html;
}

function deleteToDo(i){
  Bookmarks.splice(i,1);
  localStorage.setItem('BookmarkStore', JSON.stringify(Bookmarks));
 showBookmarks(Bookmarks);
}
