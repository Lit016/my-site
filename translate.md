---
layout: default
title: Distranslator
custom_js: |
  <script>
    translation = {
      /* 敬称 */
      "mr. ": "みすたー・", "ms. ": "みす・", "mrs. ": "みせす・", "mx. ": "みくす・",
      "dr. ": "どくたー・", "prof. ": "ぷろふぇそる・",
      /* アポストロフィたち */
      "t's": "つ", "'s": "ず", 
      /* 変なやつら */
      "augh": "aう", "ough": "oー",
      "ould": "uっど",
      /* 母音 + w */
      "aw": "oー", "ew": "iゅー", "ow": "oう",
      /* 二重母音 */
      "ai": "eい",
      "ee": "iー", "ea": "iあ", "eu": "uー",
      "oa": "oー", "oo": "uー",
      /* 二重子音 */
      "bb": "b", "dd": "d", "ff": "f", "gg": "g",
      "kk": "k", "ll": "l", "mm": "m", "nn": "n", "pp": "p",
      "ss": "s", "tt": "t", "vv": "v", "ww": "w", "xx": "x", "zz": "z",
      /* その他子音 + 母音 */
      "tcha": "っちゃ", "tche": "っちぇ", "tchi":"っち", "tcho": "っちょ", "tchu": "っちゅ",
      "cka": "っか", "cke": "っけ", "cki":"っき", "cko": "っこ", "cku": "っく",
      "twa": "とぅわ", "twe": "とぅうぇ", "twi":"とぅうぃ", "two": "とぅー", "twu": "とぅう",
      /* h子音 + 母音 */
      "cha": "ちゃ", "che": "ちぇ", "chi":"ち", "cho": "ちょ", "chu": "ちゅ",
      "gha": "が", "ghe": "げ", "ghi":"ぎ", "gho": "ご", "ghu": "ぐ",
      "pha": "ふぁ", "phe": "ふぇ", "phi":"ふぃ", "pho": "ふぉ", "phu": "ふ",
      "sha": "しゃ", "she": "しぇ", "shi":"し", "sho": "しょ", "shu": "しゅ",
      "tha": "さ", "the": "ぜ", "thi": "すぃ", "tho": "ぞ", "thu": "す",
      "wha": "わ", "whe": "うぇ", "whi":"うぃ", "who": "ほ", "whu": "う",
      /* 単子音 + 母音 */
      "ba": "ば", "be": "べ", "bi":"び", "bo": "ぼ", "bu": "ぶ",
      "ca": "か", "ce": "せ", "ci":"し", "co": "こ", "cu": "く",
      "da": "だ", "de": "で", "di":"でぃ", "do": "ど", "du": "どぅ",
      "fa": "ふぁ", "fe": "ふぇ", "fi":"ふぃ", "fo": "ふぉ", "fu": "ふ",
      "ga": "が", "ge": "じぇ", "gi":"ぎ", "go": "ご", "gu": "ぐ",
      "ha": "は", "he": "へ", "hi":"ひ", "ho": "ほ", "hu": "ふ",
      "ja": "じゃ", "je": "じぇ", "ji":"じ", "jo": "じょ", "ju": "じゅ",
      "ka": "か", "ke": "け", "ki":"き", "ko": "こ", "ku": "く",
      "la": "ら", "le": "れ", "li":"り", "lo": "ろ", "lu": "る",
      "ma": "ま", "me": "め", "mi":"み", "mo": "も", "mu": "む",
      "na": "な", "ne": "ね", "ni":"に", "no": "の", "nu": "ぬ",
      "pa": "ぱ", "pe": "ぺ", "pi":"ぴ", "po": "ぽ", "pu": "ぷ",
      "qa": "か", "qe": "け", "qi":"き", "qo": "こ", "qu": "く",
      "ra": "ら", "re": "れ", "ri":"り", "ro": "ろ", "ru": "る",
      "sa": "さ", "se": "せ", "si":"すぃ", "so": "そ", "su": "す",
      "ta": "た", "te": "て", "ti":"てぃ", "to": "と", "tu": "とぅ",
      "va": "ゔぁ", "ve": "ゔぇ", "vi":"ゔぃ", "vo": "ゔぉ", "vu": "ゔ",
      "wa": "わ", "we": "うぇ", "wi":"うぃ", "wo": "うぉ", "wu": "う",
      "xa": "ざ", "xe": "ぜ", "xi":"くし", "xo": "くそ", "xu": "くす",
      "ya": "や", "ye": "いぇ", "yi":"い", "yo": "よ", "yu": "ゆ",
      "za": "ざ", "ze": "ぜ", "zi":"ずぃ", "zo": "ぞ", "zu": "ず",
      /* 子音 + y */
      "tchy": "っちー", "cky": "っきー", "twy": "とぅいー",
      "chy": "ちー", "phy": "ふぃー", "shy": "しゃい", "thy": "すぃー", "why": "わい",
      "by": "ばい", "cy": "さい", "dy": "だい", "fy": "ふぁい", "gy": "じー", "hy": "はい", "jy": "じゃい",
      "ky": "きー", "ly": "りー", "my": "まい", "ny": "にー", "py": "ぱい", "ry": "りー", "sy": "すぃー",
      "ty": "てぃー", "vy": "ゔぃー", "wy": "うぃー", "xy": "ざい","zy": "ずぃー",
      /* その他子音単品 */
      "tch": "っち",
      "ck":"っく", "ts":"つ",
      "ch": "ち", "gh": "ふ", "ph": "ふ", "sh": "しゅ", "th": "す", "wh": "う",
      /* 母音単品 */
      "a": "あ", "e": "え", "i": "い", "o": "お", "u": "う",
      /* 子音単品 */
      "b": "ぶ", "c": "く", "d": "ど", "f": "ふ", "g": "ぐ", "h": "は", "j": "じゅ",
      "k": "く", "l": "る", "m": "む", "n": "ん", "p": "ぷ", "q": "く", "r": "る",
      "s": "す", "t": "と", "v": "ゔ", "w": "う", "x": "っくす", "y": "い", "z": "ず",
      /* 記号 */
      "...": "…", "..": "‥",
      "'": "", ", ": "、", ". ": "。",
      ",": "、", ".": "。",
    }
    const pre = get("#pre")
    const pos = get("#pos")
    pre.addEventListener("keyup", translate)
    function translate() {
      let result = pre.value.toLowerCase()
      for (let i = 0; i != Object.keys(translation).length; i++) {
        let tr = (typeof Object.entries(translation)[i][1] == "object") ? Object.entries(translation)[i][1][Math.floor(Math.random() * Object.entries(translation)[i][1].length)] : Object.entries(translation)[i][1]
        result = result.replaceAll(Object.entries(translation)[i][0], tr)
      }
      pos.value = result
    }
    window.addEventListener("DOMContentLoaded", () => {
      const s = location.search
      const q = new URLSearchParams(s)
      if (s.includes("text=") == true) {
        pre.value = q.get("text")
        translate()
      }
    })
  </script>
---

<h1>Distranslator</h1>
<div class="flex c" style="gap:10px;">
  <textarea id="pre" class="nor" style="width:45%;height:150px" placeholder="Enter Text Here"></textarea>
  →
  <textarea id="pos" class="nor" style="width:45%;height:150px" placeholder="翻訳結果がここに" readonly></textarea>
</div>
<div class="c upm">
  <button class="sqbtn" title="Copy text" id="copytext" onclick="copy('#copytext', pos.value)">
    <i class="fa-regular fa-copy"></i>
  </button>
  <button class="sqbtn" title="Copy URL" id="copyurl" onclick="copy('#copyurl', `https://lit016.github.io/litonet/translation?text=${pre.value}`)">
    <i class="fa-solid fa-link"></i>
  </button>
</div>
<h2>Distranslatorについて</h2>
<p>
  英語を（ものすごく大まかに）日本語の発音に変換するツールです。<br>
  決して英語を日本語に翻訳したり正確な発音に変換してくれたりする便利なツールではありません。
</p>
<h3>仕組み</h3>
<p>
  基本的にはローマ字みたいな変換方法です。<br>
  <span class="ex">hat → はと</span><br>
  <span class="ex">sick → すぃっく</span>
</p>
<p>
  数種類の読み方があるものは全部どれか1種類になっています。<br>
  <span class="ex">that → さと</span><br>
  <span class="ex">those → ぞせ</span>
</p>
<p>
  一部の記号やら何やらもなんとなく変換します。<br>
  <span class="ex">New job: fix Mr. Gluck's hazy TV, PDQ! → にゅー じょぶ: ふぃっくす みすたー・ぐるっくず はずぃー とゔ、ぷどく!</span>
</p>
