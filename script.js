const lawyers = [
  {
    name: "Sinirli Avukat",
    mood: "Sinirli",
    image: "sinirli_avukat.png",
    motivation: "Sakin ol Ebru, derin bir nefes al ve yeniden dene. Kontrol senin elinde!"
  },
  {
    name: "Endişeli Avukat",
    mood: "Endişeli",
    image: "endiseli_avukat.png",
    motivation: "Üzülme Ebru, zor günler geçici. Sen güçlüsün ve bunu atlatacaksın."
  },
  {
    name: "Sevecen Avukat",
    mood: "Sevecen",
    image: "sevecen_avukat.png",
    motivation: "Ebru, pozitif enerjinle herkesin yüzünü güldürüyorsun. Hep böyle kal!"
  },
  {
    name: "Ciddi Avukat",
    mood: "Ciddi",
    image: "ciddi_avukat.png",
    motivation: "Ebru, kararlılığın ve disiplini ile harika işler başaracaksın."
  },
  {
    name: "Lider Avukat",
    mood: "Lider",
    image: "lider_avukat.png",
    motivation: "Ebru, senin liderliğin herkese ilham veriyor. Yola devam!"
  }
];


let currentLawyerIndex = 0;

const background =document.getElementById("background");
const selectLawyerButton = document.getElementById("selectLawyerButton");
const characterSelect=document.getElementById("character-select");
const lawyerBox=document.getElementById("lawyerBox");
const prevBtn=document.getElementById("prevBtn");
const nextBtn=document.getElementById("nextBtn");

selectLawyerButton.addEventListener('click',()=>{
  background.style.display="none";
  characterSelect.style.display = "flex";
  
  showLawyer();
});

prevBtn.addEventListener('click', ()=>{
  currentLawyerIndex=(currentLawyerIndex-1+lawyers.length)%lawyers.length;
  showLawyer();
});

nextBtn.addEventListener('click', ()=>{
  currentLawyerIndex = (currentLawyerIndex+1)%lawyers.length;
  showLawyer();
});


function showLawyer(){
  const lawyer  = lawyers[currentLawyerIndex];
  lawyerBox.innerHTML = `
    <img src="${lawyer.image}" alt="${lawyer.name}" class="lawyer-image">
    <div class="lawyer-text">
      <h2>Ebru-${lawyer.name}</h2>
      <p>${lawyer.motivation}</p>
      </div>
  `;
}