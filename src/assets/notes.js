import a  from './a.wav';
import b  from './b.wav';
import c2 from './c2.wav';
import c  from './c.wav';
import d1 from './d1.wav';
import e1 from './e1.wav';
import f  from './f.wav';
import g  from './g.wav';

// To play a note, for example, the first one
// new Audio(notes[0].file).play();

const notes = [
  {
    name: 'c',
    file: c
  },
  {
    name: 'd1',
    file: d1
  },
  {
    name: 'e1',
    file: e1
  },
  {
    name: 'f',
    file: f
  },
  {
    name: 'g',
    file: g
  },
  {
    name: 'a',
    file: a
  },
  {
    name: 'b',
    file: b
  },
  {
    name: 'c2',
    file: c2
  },
];

export default notes;
