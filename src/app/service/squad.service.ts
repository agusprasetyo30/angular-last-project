import { Injectable, EventEmitter } from '@angular/core';
import { Player } from '../model/player';
@Injectable({
  providedIn: 'root'
})
export class SquadService {
  // GOALKEEPER
  goalkeeper: Player[] = [
    new Player('GIANLUIGI DONNARUMMA', new Date('1999-02-25'), 'Castellammare di Stabia, Italia', '1,96 cm',
      'Goalkeeper', 99, '99.png'
    ),
    new Player('ALESSANDRO PLIZZARI', new Date('2000-03-12'), 'Crema, Italia', '1,87 cm',
      'Goalkeeper', 35, '35.png'
    ),
    new Player('PEPE REINA', new Date('1982-08-31'), 'Madrid, Spain', '1,88 cm',
      'Goalkeeper', 25, '25.png'
    ),
    new Player('ANTONIO DONNARUMMA', new Date('1990-07-07'), 'Castellammare di Stabia, Italia', '1,92 cm',
      'Goalkeeper', 90, '90.png'
    )
  ];

  // DEFENDER
  defender: Player[] = [
    new Player('ALESSIO ROMAGNOLI', new Date('1995-01-12'), 'Anzio, Italia', '1,88 cm',
      'Defender', 13, '13.png'
    ),
    new Player('MATTIA CALDARA', new Date('1994-05-05'), 'Bergamo, Italia', '1,87 cm',
      'Defender', 33, '33.png'
    ),
    new Player('MATEO MUSACCHIO', new Date('1990-08-26'), 'Rosario, Argentina', '1,82 cm',
      'Defender', 22, '22.png'
    ),
    new Player('CRISTIAN ZAPATA', new Date('1986-09-30'), 'Padilla, Columbia', '1,87 cm',
      'Defender', 17, '17.png'
    ),
    new Player('RICARDO RODRIGUEZ', new Date('1992-08-25'), 'Zurich, Switzerland', '1,80 cm',
      'Defender', 68, '68.png'
    ),
    new Player('DIEGO LAXALT', new Date('1993-02-07'), 'Montevideo, Uruguay', '1,73 cm',
      'Defender', 93, '93.png'
    ),
    new Player('DEVIDE CALABRIA', new Date('1996-12-06'), 'Brescia, Italia', '1,76 cm',
      'Defender', 2, '2.png'
    ),
    new Player('IGNAZIO ABATE', new Date('1986-11-12'), 'Sant Agata dè Goti, Italia', '1,80 cm',
      'Defender', 20, '20.png'
    ),
    new Player('ANDREA CONTI', new Date('1994-03-02'), 'Lecco, Italia', '1,84 cm',
      'Defender', 12, '12.png'
    )
  ];

  // MIDFIELDER
  midfielder: Player[] = [
    new Player('GIACOMO BONAVETURA', new Date('1989-08-22'), 'San Severino Marche, Italia', '1,80 cm',
    'Midfielder', 5, '5.png'
    ),
    new Player('FRANK KESSIE', new Date('1996-12-19'), 'Ouragahio, Cote d Ivoire', '1,83 cm',
    'Midfielder', 79, '79.png'
    ),
    new Player('TIEMOUE BAKAYOKO', new Date('1994-08-17'), 'Paris, France', '1,89 cm',
    'Midfielder', 14, '14.png'
    ),
    new Player('JOSE MAURI', new Date('1996-05-16'), 'Realico, Italia', '1,69 cm',
    'Midfielder', 4, '4.png'
    ),
    new Player('LUCAS BIGLIA', new Date('1986-01-30'), 'Mercedes, Argentina', '1,78 cm',
    'Midfielder', 21, '21.png'
    ),
    new Player('RICARDO MONTOLIVO', new Date('1985-01-18'), 'Milano, Italia', '1,81 cm',
    'Midfielder', 18, '18.png'
    ),
  ];

  // FORWARD
  forward: Player[] = [
    new Player('HAKAN CALHANOGLU', new Date('1994-02-08'), 'Mannheim, Turkey', '1,78 cm',
    'Forward', 10, '10.png'
    ),
    new Player('FABIO BORINI', new Date('1991-03-29'), 'Bentivoglio, Italia', '1,80 cm',
    'Forward', 11, '11.png'
    ),
    new Player('SUSO', new Date('1993-11-19'), 'Cádiz, Spain', '1,77 cm',
    'Forward', 8, '8.png'
    ),
    new Player('SAMU CASTILEJJO', new Date('1995-01-23'), 'Malaga, Spain', '1,82 cm',
    'Forward', 7, '7.png'
    ),
    new Player('PATRICK CUTRONE', new Date('1998-01-23'), 'Como, Italia', '1,83 cm',
    'Forward', 63, '63.png'
    ),
    new Player('GONZALO HIGUAIN', new Date('1987-12-10'), 'Brest, France - Argentina', '1,84 cm',
    'Forward', 9, '9.png'
    ),
  ];

  // Event Emitter
    playerSelected = new EventEmitter<Player>();

  getGoalkeeper() {
    return this.goalkeeper.slice();
  }

  getDefender() {
    return this.defender.slice();
  }

  getMidfielder() {
    return this.midfielder.slice();
  }

  getForward() {
    return this.forward.slice();
  }

  getGoalkeeperProfile(index: number) {
    return this.goalkeeper[index];
  }

  getDefenderProfile(index: number) {
    return this.defender[index];
  }

  getMidfielderProfile(index: number) {
    return this.midfielder[index];
  }

  getForwardProfile(index: number) {
    return this.forward[index];
  }


  constructor() {}
}
