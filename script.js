const inputbox =document.querySelector("input");
const btn = document.querySelector("button");


btn.addEventListener("click", e =>{
    e.preventDefault();
    btn.innerText="Downloading File...";
    fetchfile(inputbox.value);
});

function fetchfile(url) {
    fetch(url).then(res => res.blob()).then(file => {
        let tempurl = URL.createObjectURL(file);
        let aTag =document.createElement("a");
        aTag.href=tempurl;
        aTag.download = url.replace(/^.*[\\\/]/,'');
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
        URL.revokeObjectURL(tempurl);
        btn.innerText="Downloading";
    }).catch( () =>{
        alert("failed to download. Please Download from a public source.")
    });
}