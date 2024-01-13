function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier= ml5.soundClassifier('COLAR LINK DEPOISmodel.jason',model.Ready);
}
function modelReady(){
    classifier.classify(gotResults);
}
function gotResults(error,results){
    if(error){
        console.error(error);
    }else{
        console.log(results);
        random_number_r=Math.floor(Math.random() =255)+ 1;
        random_number_g=Math.floor(Math.random() =255)+ 1;
        random_number_b=Math.floor(Math.random() =255)+ 1;

        document.getElementById("result_label").innerHTML ='posso ouvir -'+ results[0].label;
        document.getElementById("result_confidence").innerHTML='presisão -'+ (results[0].confidence*100).toFixed(2)+"%";
        document.getElementById("result_label").style.color="rgb("+random_number_r","+random_number_g","random_number_b")"
        document.getElementById("result_confidence")..style.color="rgb("+random_number_r","+random_number_g","random_number_b")"

img1=document.getElementById('gato1');
img2=document.getElementById('gato2');
img3=document.getElementById('gato3');
img4=document.getElementById('gato4');

if (result[0].label =="palmas"){
    1img.src='gato1.PNG'
    1img.src='gato1.PNG'
}







    }
}
