let filenames =  [
    "uni1.jpg",
    "uni2.jpg",
    "uni3.jpg",
    "uni4.jpg",
    "uni5.jpg",
    "uni6.jpg"
]

var imgs = document.getElementsByTagName('img');
//useles comment
for(imgElt of imgs){
    let randomIndex = Math.floor(Math.random() *filenames.length);
    let file=  'unicorns/' + filenames[randomIndex];
    let url =chrome.extension.getURL(file);
    imgElt.src = url;

}