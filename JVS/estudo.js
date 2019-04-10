var alunos = document.querySelectorAll(".aluno");

for (var i = 0; i < alunos.length; i++) {
	var aluno = alunos[i];

var tdMat = aluno.querySelector(".mat");
var matematica = tdMat.textContent;

var tdFis = aluno.querySelector(".fis");
var fisica = tdFis.textContent;

var tdPort = aluno.querySelector(".port");
var portugues = tdPort.textContent;

var media = (Number(portugues) + Number(fisica) + Number(matematica)) / 3 ;

var tdCampoMedia = aluno.querySelector(".media");
tdCampoMedia.textContent = media.toFixed(1);

var tdStatus = aluno.querySelector(".status");

console.log(status)

var mediavalida = true;
	

if (Number(media) < 6) {
	tdStatus.textContent = "REPROVADO";
	tdStatus.style.backgroundColor = "lightcoral";
	tdStatus.style.color = "white";
	tdStatus.style.fontWeight = "bold"
	tdCampoMedia.style.color = "lightcoral"
	tdCampoMedia.style.fontWeight = "bold"

} else {
	tdStatus.textContent = "APROVADO";
	tdStatus.style.backgroundColor = "#4fd200";
	tdStatus.style.color = "white";
	tdStatus.style.fontWeight = "bold"
	tdCampoMedia.style.fontWeight = "bold"
}

}


