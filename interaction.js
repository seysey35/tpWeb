
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // 1) Définir ici les attributs de la 'classe'
  this.positionDnDinitX = 0;
  this.positionDnDfinX = 0;
  this.positionDnDinitY = 0;
  this.positionDnDfinY = 0;
  this.canvas = canvas;
  // 2) Developper les 3 fonctions gérant les événements

  this.laPression = function (evt) {
    console.log("pression");
    this.positionDnDinitX = getMousePosition(this.canvas, evt).x;
    this.positionDnDinitY = getMousePosition(this.canvas, evt).y;
    console.log(" Cordonnée X pression " + this.positionDnDinitX + "Cordonnée Y pression" + this.positionDnDinitY);
    // 2) Developper les 3 fonctions gérant les événements
  }.bind(this);


    this.leDeplacement = function (evt) {
      console.log("Deplacement");
      var positiondeplaceX = this.positionDnDinitX + getMousePosition(this.canvas, evt).x;
      var positiondeplaceY = this.positionDnDinitY + getMousePosition(this.canvas, evt).y;
      console.log("Cordonnée X du deplacement" + positiondeplaceX + "Cordonnée Y du deplacement" + positiondeplaceY);
    }.bind(this);

    this.leRelachement = function (evt) {
      console.log("Relachement");
      this.positionDnDfinX = getMousePosition(this.canvas, evt).x;
      this.positionDnDfinY = getMousePosition(this.canvas, evt).y;
      console.log(" Cordonnée X du relachement " + this.positionDnDfinX + "Cordonnée Y du relachement " + this.positionDnDfinY);
    }.bind(this);
      // Associer les fonctions précédentes aux évènements du canvas.
      this.canvas.addEventListener('mousedown', this.laPression, false);
      this.canvas.addEventListener('mousemove', this.leDeplacement, false);
      this.canvas.addEventListener('mouseup', this.leRelachement, false);

    };


    // Place le point de l'événement evt relativement à la position du canvas.
    function getMousePosition(canvas, evt) {
      var rect = canvas.getBoundingClientRect();
      return {
        x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
      };
    };



