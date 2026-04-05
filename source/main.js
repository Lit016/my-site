function get(thing) {
  return document.querySelector(thing);
}
function getAll(thing) {
  return document.querySelectorAll(thing);
}

function copy(text, id) {
  let old = "undefined"
  if ((typeof id) != "undefined") {
    old = get(id).innerHTML
  }
  try {
    navigator.clipboard.writeText(text);
    if (old != "undefined") {
      get(id).innerHTML = `<i class="fa-solid fa-check"></i>`
      setTimeout(() => {
        get(id).innerHTML = old
      }, 500)
    }
    console.log("コピー成功")
  } catch (err) {
    if (old != "undefined") {
      get(id).innerHTML = `<i class="fa-solid fa-ban"></i>`
      setTimeout(() => {
        get(id).innerHTML = old
      }, 500)
      console.error("コピー失敗、", err);
    }
  }
}
