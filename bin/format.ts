import { $ } from 'bun';

import yargs from 'yargs/yargs';
import { hideBin } from 'yargs/helpers';

$.throws(true);

const args = yargs(hideBin(Bun.argv))
	.command(['check', '$0'], 'check repo code formatting')
	.command('write', 'format repository')
	.strictCommands()
	.demandCommand(1)
	.parseSync();

if (args._[0] === 'check') {
	await $`bunx prettier --cache --cache-location .cache/prettier --config .prettierrc.json --check .`;
} else {
	await $`bunx prettier --cache --cache-location .cache/prettier --config .prettierrc.json --write .`;
}
