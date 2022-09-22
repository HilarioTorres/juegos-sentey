class Juego {
    constructor(id, nombre, stock, precio, imagen, descripcion) {

        this.id = id;
        this.nombre = nombre;
        this.stock = stock;
        this.precio = precio;
        this.imagen = imagen;
        this.descripcion = descripcion;
    }
}

const juego1 = new Juego (1, "Spider-Man Remastered", 10, 5000, "https://playsdone.com/wp-content/uploads/2022/08/sm.jpg", "Marvel's Spider-Man Remasterizado para PC ha sido desarrollado por Insomniac Games en colaboración con Marvel y optimizado para PC por Nixxes Software. El protagonista es un Peter Parker veterano que ha pulido sus habilidades en la lucha contra el crimen y los villanos en la Nueva York de Marvel. A su vez, también lucha por poner en orden su caótica vida personal y su carrera, con el destino de la ciudad en sus manos.");

const juego2 = new Juego (2, "DRAGON BALL Z: KAKAROT", 10, 3000, "https://i2.wp.com/cdn.statically.io/img/cdn-www.gamerevolution.com/assets/uploads/2019/12/DBZ-Kakarot-box-art.jpg", "¡Revive la historia de Son Goku y otros Guerreros Z en DRAGON BALL Z: KAKAROT! Conoce el mundo de DRAGON BALL Z no solo por sus épicos combates, sino también mientras luchas, pescas, comes y entrenas con Son Goku, Son Gohan, Vegeta y muchos más.");

const juego3 = new Juego (3, "ELDEN RING", 10, 6500, "https://preview.redd.it/ojv9a7z1zzy71.png?auto=webp&s=4e4ca7b911bb316c0c3a53db31c0c45855cced96", "EL NUEVO JUEGO DE ROL Y ACCIÓN DE AMBIENTACIÓN FANTÁSTICA. Álzate, Sinluz, y que la gracia te guíe para abrazar el poder del Círculo de Elden y encumbrarte como señor del Círculo en las Tierras Intermedias.");

const juego4 = new Juego (4, "Cuphead", 10, 225, "https://w0.peakpx.com/wallpaper/382/203/HD-wallpaper-cuphead-bosses-boss.jpg", "Cuphead es un juego de acción clásico estilo ¨dispara y corre¨ que se centra en combates contra el jefe. Inspirado en los dibujos animados de los años 30, los aspectos visual y sonoro están diseñados con esmero empleando las mismas técnicas de la época, es decir, animación tradicional a mano, fondos de acuarela y grabaciones originales de jazz. Juega como Cuphead o Mugman (en modo de un jugador o cooperativo) y cruza mundos extraños, adquiere nuevas armas, aprende poderosos supermovimientos y descubre secretos ocultos mientras procuras saldar tu deuda con el diablo.");

const juego5 = new Juego (5, "Hades", 10, 280, "https://asset.vg247.com/hades_main_art_2.jpg/BROK/thumbnail/1200x1200/quality/100/hades_main_art_2.jpg", "Hades es un juego roguelike de exploración de mazmorras que combina los mejores aspectos de los aclamados títulos anteriores de Supergiant, como la acción rápida de Bastion, la atmósfera y la profundidad de Transistor y la narrativa centrada en los personajes de Pyre. Como el príncipe inmortal del Inframundo, tendrás a tu disposición los poderes y las armas míticas del Olimpo para liberarte de las garras del mismísimo dios de los muertos, al tiempo que te vas haciendo más fuerte y descubres más piezas de la historia con cada intento de fuga.");

const juego6 = new Juego (6, "STAR WARS Jedi: La Orden caída", 10, 2500, "https://i.imgur.com/DNaBvc6.jpeg", "Una aventura de dimensiones galácticas te espera en Star Wars Jedi: Fallen Order, un juego de aventuras y acción en tercera persona de Respawn Entertainment. Este título para un jugador centrado en la historia te pone en la piel de un padawan Jedi que ha escapado a duras penas de la purga de la Orden 66 después del Episodio III: La venganza de los Sith. Para reconstruir la Orden Jedi, deberás reunir los fragmentos de tu pasado para completar tu entrenamiento, desarrollar nuevas y poderosas habilidades con la Fuerza y dominar la espada láser antes de que el Imperio y sus mortíferos inquisidores te alcancen. Mientras perfeccionan sus habilidades, los jugadores lucharán con espadas láser y poderes de la Fuerza en combates cinematográficos que recrean la intensidad las películas de Star Wars. Deberán crear estrategias para enfrentarse a sus enemigos, valorar sus debilidades y fortalezas, y emplear su entrenamiento Jedi para derrotarlos y resolver los misterios que encuentren en su camino.");

const juegos=[juego1,juego2,juego3,juego4,juego5,juego6];

export default juegos;
