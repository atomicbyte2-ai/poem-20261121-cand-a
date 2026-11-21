import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outputDirectory = process.env.MAKEFUN_OUTPUT_DIR || '/output';
const poem = `The Keys
He sets the keys in her palm.
"Drive slow. Call when—" Then stops.
The driveway ends. The road begins.
She backs out alone. The house
shrinks in the mirror. He stands,
hand still open.
At midnight she's back, keys
in her coat. Same metal.
A different driver brings them.`;

mkdirSync(outputDirectory, { recursive: true });
// Save the poem in the requested output folder.
writeFileSync(join(outputDirectory, 'entry.txt'), poem, 'utf8');
