
Webcam.set({
  width:340,
  heigth:300,
  image_format:"jpg",
  jpg_quality:90
})
var camera=document.getElementById("camera")
Webcam.attach("#camera")

function takeSnapshot(){
Webcam.snap(function(data_uri){
  document.getElementById("resultado").innerHTML='<img id="capturar" src="'+data_uri+'" />'

})

}

classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/train/image/1DZCjBksShwY1be-e7wYfav7kTthfBbvU',modelLoaded)
function modelLoaded(){
      console.log("modelo carregado")
}
function check(){
  img1=document.getElementById("capturar");
  classifier.classify(img1,gotResult)
}
function gotResult(error,results){
if(error){
 
 console.error(error) 
}
else{
  document.getElementById("nomedoobjeto").innerHTML=results[0].label
  document.getElementById("precisao").innerHTML=results[0].confidence.toFixed(3)

}


}

