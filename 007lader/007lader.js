"use strict";

/*007ladder.js/.html: Hay un objeto ladder que permite subir y bajar.
Ahora, si necesitamos hacer varios llamados en secuencia podemos hacer algo como esto:
ladder.up();
ladder.up();
ladder.down();
ladder.showStep(); // 1
ladder.down();
ladder.showStep(); // 0*/

/*Modifica el código de “arriba” up, “abajo” down y “mostrar peldaño” showStep para 
hacer los llamados encadenables como esto:
ladder.up().up().down().showStep().down().showStep(); // shows 1 then 0
Tal enfoque es ampliamente usado entre las librerías JavaScript.*/

//La solución es devolver el objeto cada vez que lo llamamos (con return this)
//Entonces, la siguiente función a la que llamamos le hará el up() o down() a ese objeto
let ladder = {
  step: 0,
  up() {
    this.step++;
    return this;
  },
  down() {
    this.step--;
    return this;
  },
  showStep: function () {
    // muestra el peldaño actual
    alert(this.step);
    return this;
  },
};

ladder.up().up().down().showStep().down().showStep();
